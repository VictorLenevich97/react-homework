import React, {useState} from "react";
import { allPosts } from "../mockData";
import { FavPostList } from "../FavPostList";
import "./posts.css"
 
export function Posts(){
    const [list, setList] = useState(true)
    return(
        <div className="content">
            <div  className="content_button">
              <button className="button" onClick={()=>setList(true)}>All</button>
              <button className="button" onClick={()=>setList(false)}>My Favorute</button>
            </div>
            <div>
                {list ? <div className="post">
                {allPosts.map(({id, image, text, date, isFavorite}) =>(
                <div className="post_card" key = {id}>
                <img className="post_image" src={image}/>
                <span className="post_text">{text}</span>
                <span>{date}</span>
                </div>
                 ))}
                </div> : <FavPostList/> }
            </div>
        </div>
    )

}