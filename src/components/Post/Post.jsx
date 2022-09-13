import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {fetchPostDetail} from '../../api/fetchPostDetail'
import frame26 from '../../assets/frame26.png'
import frame27 from '../../assets/frame27.png'
import frame28 from '../../assets/frame28.png'
import styles from '../Post/post.css'
import { homePage } from "../../constants/pageNames";

export function Post () {
const [post, setPost] = useState({})


useEffect(() =>{
    fetchPostDetail(setPost)
}, [])



return(
    <ul className="post">   
            <li className="post__item" key={post.id}>
            <Link className="post__navLink" to={homePage}>Home</Link>  
                <h1 className="post__title">{post.title}</h1>
                <img className="post__img" src={post.image} alt="post" />
                <p className="post__text">{post.text}</p>
            </li>
            <div className="post__action">
                   <div className="post__likes">
                   <img className="post__like" src={frame27} alt="like" />
                   <img className="post__dislike" src={frame28} alt="dislike" />
                   </div>
                 <img className="post__favorite" src={frame26} alt="favorite" />
                </div>
    </ul>
)

}