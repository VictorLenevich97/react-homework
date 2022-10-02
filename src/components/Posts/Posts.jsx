import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { fetchPost} from "../api/fetchPosts"
import {Loading} from "../../components/Loading"
import "./posts.css"


export function Posts(){

    const {posts, isLoading, error} = useSelector((store) =>store.postsReducer)
    const dispatch = useDispatch() 

    useEffect (()=>{
        fetchPost(dispatch)
    },[dispatch])

    return(
        
        <div className="container">
            <div className="title">BLOG</div>
            <div className="button">
             <button className="button1">All</button>
             <button className="button1">My Favorute</button>
             <button className="button1">Popular</button>
             </div>
             <div>
                    {isLoading ? <Loading/> : null
                    }
                </div>
                
                   <div>
                   {error ? <div>Somethings wents wrong...</div> : null}
                    </div> 

            

            <ul className="post">
                {posts.map(item=>{
                    return(
                        <li className="post_card" key = {item.id}>
                            <img alt="image_loading_error" className="post_image" src={item.image}/>
                            <div className="post_date">{item.date}</div>
                            <Link to={`/post/${item.id}`} className="post_text">{item.text}</Link>
                        </li>
                    
                    )
                })}
            </ul>
        </div>
    )

}
