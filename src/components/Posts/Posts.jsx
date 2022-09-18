import { useCallback } from "react";
import { Link } from "react-router-dom";
import { PostsList } from "../mockData/PostsList";
import { usePosts } from "./usePosts";

import styles from "./posts.css";

export const Posts = () => {
  const { tab, setTab, posts, favPosts } = usePosts();

  const RenderPosts = useCallback((item) => {
    return (
      <li className="postsItem" key={item.id}>
        <Link to={`/posts/${item.id}`}>Details</Link>
        <img className="postsImg" src={item.image} alt="#" />
        <p className="postsDate">Date: {item.date}</p>
        <p className="postsText">{item.text}</p>
      </li>
    );
  }, []);

  return (
    <>
      <div className="menuCotainer">
        <div className="tabBtnContainer">
          <button className="tabBtn" onClick={() => setTab("allposts")}>
            All Posts
          </button>
          <button className="tabBtn" onClick={() => setTab("favourites")}>
            My favorites
          </button>
          <button className="tabBtn">Popular</button>
        </div>
      </div>
      <div className="tabContainer">
        <div>
          <ul className="postsGrid">
            {tab === "allposts" ? (
              <>
                {PostsList.map(({ id, image, text, date }) => {
                  return RenderPosts({ id, image, text, date });
                })}
              </>
            ) : (
              <>
                {favPosts.map(({ id, image, text, date }) => {
                  return RenderPosts({ id, image, text, date });
                })}
              </>
            )}
          </ul>
        </div>
        <div>
          <ul className="tabColumn">
            <>
              {posts.map(({ id, image, text, date }) => {
                return RenderPosts({ id, image, text, date });
              })}
            </>
          </ul>
        </div>
      </div>
    </>
  );
};
