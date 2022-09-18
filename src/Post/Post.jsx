import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPostDetail } from "../api/fetchPostDetail";
import frame26 from "../assets/frame26.png";
import frame27 from "../assets/frame27.png";
import frame28 from "../assets/frame28.png";
import styles from "./post.css";
import { homePage } from "../constants/pageNames";
import { Loading } from "../components/Loading/Loading";
import { Error } from "../components/Error/Error";
import { useSelector, useDispatch } from "react-redux";

export function Post() {
  const idParams = useParams();
  const postId = idParams.postId;
  const { postDetails, isLoading, error } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostDetail(postId));
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ul className="post">
      <li className="post__item" key={postDetails.id}>
        <Link className="post__navLink" to={homePage}>
          Home
        </Link>
        <h1 className="post__title">{postDetails.title}</h1>
        <img className="post__img" src={postDetails.image} alt="post" />
        <p className="post__text">{postDetails.text}</p>
      </li>
      <div className="post__action">
        <div className="post__likes">
          <img className="post__like" src={frame27} alt="like" />
          <img className="post__dislike" src={frame28} alt="dislike" />
        </div>
        <img className="post__favorite" src={frame26} alt="favorite" />
      </div>
    </ul>
  );
}
