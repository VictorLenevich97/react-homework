import { useEffect, useState } from "react";
import { PostsListItem } from "../components/PostListItem/PostListItem";
import styles from "./postsList.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../api/fetchPost";
import { Loading } from "../components/Loading/Loading";
import { Error } from "../components/Error/Error";

export const PostsList = function() {
  const [activeTab, setActiveTab] = useState("all");
  const { posts, isLoading, error } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <h1 className="page__name">Blog</h1>
      <div className="buttons__block">
        <p
          className={
            activeTab === "all" ? "button__all underline" : "button__all"
          }
          onClick={() => setActiveTab("all")}
        >
          All
        </p>
        <p
          className={
            activeTab === "fav" ? "button__fav underline" : "button__fav"
          }
          onClick={() => setActiveTab("fav")}
        >
          Favorite
        </p>
      </div>
      <ul className="posts">
        {activeTab === "all" ? (
          <>
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
          </>
        ) : (
          <div>Favorite</div>
        )}
      </ul>
    </div>
  );
};
