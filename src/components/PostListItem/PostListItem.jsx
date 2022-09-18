import { Link } from "react-router-dom";

export const PostsListItem = function({ id, image, text, date }) {
  return (
    <li className="posts__item" key={id}>
      <img className="posts__img" src={image} alt="post" />
      <p className="posts__date">{date}</p>
      <Link to={`post/${id}`}>
        <p className="posts__text">{text}</p>
      </Link>
    </li>
  );
};
