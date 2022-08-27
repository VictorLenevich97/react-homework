import React from "react";
import styles from './posts.module.css';
import { useState } from "react";
import {allPosts} from "../Data/Data";


export const Posts = ({value}) => {
    const favPosts = allPosts.filter(post => post.isFavorite)
    console.log(favPosts)


    return <ul className="list"> 
    {value===1 ? <>
        {favPosts.map((item)=>{
            return (<li className="list_item" key={item.id}>
            <p className="item__title">{item.title}</p>
            <img src={item.image}/>
            <p className="item__date">{item.date}</p>
            <p className="item__text">{item.text}</p>
            <a href={item.link} className="button">Read more</a>
        </li> )})}</> :
        <>
        {allPosts.map((item)=>{
            return (<li className="list_item" key={item.id}>
            <p className="item__title">{item.title}</p>
            <img src={item.image}/>
            <p className="item__date">{item.date}</p>
            <p className="item__text">{item.text}</p>
            <a href={item.link} className="button">Read more</a>
        </li> )})}
        </>
    }
</ul>
}

