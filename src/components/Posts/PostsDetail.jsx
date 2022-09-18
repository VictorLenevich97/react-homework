import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../PostsProvider/PostsProvider";

import styles from "./posts.css";

export const PostsDetail = () => {
  const { posts } = useContext(PostsContext);
  const params = useParams();
  const currentData = posts.find(({ id }) => id === params.postsId);

  if (!currentData) {
    return <Navigate to="/posts" />;
  }

  return (
    <div>
      <img src={currentData?.image} alt="#" />
      <p>{currentData?.date}</p>
      <span>{currentData?.text}</span>
    </div>
  );
};
