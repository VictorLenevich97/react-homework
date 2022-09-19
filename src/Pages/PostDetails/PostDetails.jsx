import React, { useEffect, useState } from "react";
import styles from "../PostDetails/blog.module.css";
import like from "../../components/svg/like.svg";
import dislike from "../../components/svg/dislike.svg";
import favorite from "../../components/svg/favorite.svg";
import { Spinner } from "../../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import {  POST_LIST } from "../../Costants/endpoints";


export const PostDetails = () => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { postId } =useParams()

 const fetchPostDetail = async () => {
    axios
      .get(`${POST_LIST}/${postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        setError(true);
      }).finally(()=> {
        setIsLoading(false)
      })
  };

  useEffect(() => {
    fetchPostDetail();
  }, []);

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
