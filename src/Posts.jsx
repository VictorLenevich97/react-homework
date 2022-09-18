import { useState } from "react";
import { allPosts } from "./allPosts";

export const Posts = ({ isFavorite }) => {
  const [posts, setPosts] = useState(allPosts);
  const favoritePosts = posts.filter((post) => post.isFavorite);
  const handlePost = (id) => {
    const result = posts.map((post) => {
      if (post.id === id) {
        return { ...post, isFavorite: !post.isFavorite };
      }
      return post;
    });
    setPosts(result);
  };
  return (
    <ul className="list">
      {isFavorite ? (
        <>
          {favoritePosts.map((item) => {
            return (
              <li key={item.id} className="list_item">
                <img alt="something" className="item__img" src={item.image} />
                <p className="item__date">{item.date}</p>
                <p className="item__text">{item.text}</p>
              </li>
            );
          })}
        </>
      ) : (
        <>
          {posts.map((item) => {
            return (
              <li
                className="list_item"
                key={item.id}
                onClick={() => handlePost(item.id)}
              >
                <img alt="something" src={item.image} />
                <p className="item__date">{item.date}</p>
                <p className="item__text">{item.text}</p>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
};
