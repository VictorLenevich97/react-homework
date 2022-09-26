import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAsync } from "../../store/postStore/postsSlice";
import { Spinner } from "../../components/Spinner";
import styles from "../Search/search.module.css";
import { PostItem } from "../PostList/PostItem";

export const Search = () => {
  const { posts, isLoading, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const searchValue = params.get("value");

  useEffect(() => {
    dispatch(getPostsAsync({search: searchValue}));
  }, [dispatch, searchValue]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <h1 style={{ display: "flex", justifyContent: "center", color: "red" }}>
        Error! Reload page, please!
      </h1>
    );
  } else if (posts.length === 0) {
    return (
      <div className={styles.searchPage}>
        <h1
          className={styles.searchTitle}
        >Search results ‘{searchValue}’</h1>
        <img
          className={styles.searchImg}
          src="https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png"
          alt="noresults"
        />
      </div>
    );
  }

  return (
    <div className={styles.searchPage}>
      <h1
        className={styles.searchTitle}
      >Search results ‘{searchValue}’</h1>
      <div className={styles.searchItem}>
        {posts.map(({ id, image, date, text, title }) => {
          return (
            <PostItem
              key={id}
              id={id}
              image={image}
              date={date}
              text={text}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};
