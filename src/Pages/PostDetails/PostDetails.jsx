import React, { useEffect } from "react";
import { api } from "../../Store/postDetail/api";
import styles from "../PostDetails/blog.module.css";
import like from "../../components/svg/like.svg";
import dislike from "../../components/svg/dislike.svg";
import favorite from "../../components/svg/favorite.svg";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../../components";

export const PostDetails = () => {
  const { post, isLoading, error } = useSelector(
    (store) => store.postDetailReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    api(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return (
      <h1 style={{ display: "flex", justifyContent: "center", color: "red" }}>
        Error! Reload page, please!
      </h1>
    );
  }

  return (
    <div className={styles.header} key={post.id}>
      <div className={styles.postItem}>
        <p className={styles.postName}>{post.title}</p>
        <img className={styles.postImg} src={post.image} alt="card" />
        <p className={styles.postText}>{post.text}</p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.frame}>
        <div className={styles.frameLike}>
          <img src={like} alt="like" />
          <img src={dislike} alt="dislike" />
        </div>
        <img className={styles.frameFavorite} src={favorite} alt="favorite" />
      </div>
    </div>
  );
};
