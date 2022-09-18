import { createContext, useEffect, useState, useCallback } from "react";

export const PostsContext = createContext();

export const PostsProvider = (props) => {
  const { children } = props;
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    const reponce = await fetch(
      "https://60f699f318254c00176e0362.mockapi.io/posts"
    )
      .then((data) => data.json())
      .catch((err) => {
        console.error(err);
      });
    setPosts(reponce.slice(0, 10));
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};
