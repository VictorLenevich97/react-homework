import React from 'react'
import { useEffect, useState } from 'react' 
import { useParams} from "react-router-dom"
import { fetchPostsDetail } from "../api/fetchPostDetail"

export const PostDetail = () => {
    const[post, setPost] = useState([])

    const detail = useParams()
    const currentData = detail.postId


    useEffect(()=>{
        fetchPostsDetail(setPost, currentData)
    },[currentData])


  return (
    <ul className="post">

                        <li className="post_card" key = {post.id}>
                            <img className="post_image" src={post.image}/>
                            <div className="post_date">{post.date}</div>
                            <div className="post_text">{post.text}</div>
                        </li>
                    
            </ul>
    )
}


