import React from "react"
import { allPosts } from "../mockData/postList"

export const FavPostList = ()=>{
    const favPosts = allPosts.filter(post => post.isFavorite)

    return(
        <div className="post">
            {favPosts.map(({id,image,text,date,isFavorite})=>(
            <div className="post_card" key = {id}>
            <img className="post_image" src={image}/>
            <span className="post_text">{text}</span>
            <span>{date}</span>
            </div>
            )
        )}
        </div>
    )

}