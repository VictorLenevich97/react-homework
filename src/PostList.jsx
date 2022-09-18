import { useEffect, useState } from "react";

export const PostList = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false); //может быть объектом с инфой об ошибке
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=20"
      ).then((res) => res.json());
      setPostList(response.results);
    } catch (e) {
      console.log(e);
      setIsError(true); //описываем только тут. почему - хз
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <span>Something went wrong!</span>
      </div>
    );
  }

  return (
    <ul className="postList">
      {postList.map((item) => (
        <li className="list_item" key={item.id}>
          <img alt="something" className="item__img" src={item.image} />
          <p className="item__date">{item.date}</p>
          <p className="item__title">{item.title}</p>
          <p className="item__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};
