import { useCallback } from "react";

import { PostsList } from "../mockData/PostsList";
import { usePosts } from "./usePosts";

import styles from "./posts.css";

// import classes from "./posts.css";
// <div className={ classes.tabBtnContainer}}></div>

export const Posts = () => {
  const { themeToggle, tab, setTab, randomPosts, favPosts } = usePosts();

  const RenderPosts = useCallback((item) => {
    return (
      <li className="postsItem" key={item.id}>
        <img className="postsImg" src={item.image} alt="post image" />
        <p className="postsDate">Date: {item.date}</p>
        <p className="postsText">{item.text}</p>
      </li>
    );
  }, []);

  return (
    <>
      <div className="menuCotainer">
      <div className="tabBtnContainer">
        <button className="tabBtn" onClick={() => setTab("allposts")}>All Posts</button>
        <button className="tabBtn" onClick={() => setTab("favourites")}>My favorites</button>
        <button className="tabBtn">Popular</button>
      </div>
      {/* <div className="switcherContainer">
        <span className="switcherDescrytion">Change Theme</span>
      <label className="switch">
        <input type="checkbox" onClick={themeToggle}></input>
        <span className="slider"></span>
      </label>
      </div> */}
      </div>
      <div className="tabContainer">
        <div>
          <ul className="postsGrid">
            {tab == "allposts" ? (
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
              {randomPosts.map(({ id, image, text, date }) => {
                return RenderPosts({ id, image, text, date });
              })}
            </>
          </ul>
        </div>
      </div>
    </>
  );
};
