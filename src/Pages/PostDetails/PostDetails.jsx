import React, { useEffect } from "react";
import styles from "../PostDetails/blog.module.css";
import like from "../../components/svg/like.svg";
import dislike from "../../components/svg/dislike.svg";
import favorite from "../../components/svg/favorite.svg";
import { Spinner } from "../../components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../../store/postStore/postsSlice";

export const PostDetails = () => {
  const paramsId = useParams();
  const postId = paramsId.postId;
  const { postDetail, isLoading, error } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostDetail({ id: postId }));
  }, [dispatch, postId]);

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
    <div className={styles.header} key={postDetail.id}>
      <div className={styles.postItem}>
        <p className={styles.postName}>{postDetail.title}</p>
        <img className={styles.postImg} src={postDetail.image} alt="card" />
        <p className={styles.postText}>{postDetail.text}</p>
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
