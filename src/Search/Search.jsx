import { useEffect } from "react";
import { PostsListItem } from "../components/PostListItem/PostListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../api/fetchSearch";
import { Loading } from "../components/Loading/Loading";
import { Error } from "../components/Error/Error";
import { useSearchParams } from "react-router-dom";
import styles from "./search.css";
import { useStore } from "react-redux";

export const Search = function() {
  const [serchParams] = useSearchParams();
  const searchValue = serchParams.get("search");
  const { posts, isLoading, error } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchSearch(dispatch, searchValue);
  }, [dispatch, searchValue]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (posts.length === 0) {
    return (
      <div>
        <h1 className="page__name">{`Search results "${searchValue}"`}</h1>
        <p>Nothing found</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page__name">{`Search results "${searchValue}"`}</h1>
      <ul className="searchPosts">
        {posts.map(({ id, image, text, date }) => {
          return (
            <PostsListItem
              key={id}
              id={id}
              image={image}
              text={text}
              date={date}
            />
          );
        })}{" "}
      </ul>
    </div>
  );
};
