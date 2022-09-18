import { Posts } from "../Posts";
import { PostList } from "../PostList";
import { useState } from "react";
import "../posts.css";

export const Home = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <h1 className="title">Blog</h1>
      <div className="btn_wrapper">
        <button className="btn btn_all" onClick={() => setIsFavorite(false)}>
          All
        </button>
        <button className="btn btn_fav" onClick={() => setIsFavorite(true)}>
          Favorites
        </button>
      </div>
      <Posts className="posts" isFavorite={isFavorite} />
      <PostList className="postList" />
    </>
  );
};
