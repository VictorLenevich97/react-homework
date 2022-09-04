import React from "react";
import styles from './posts.module.css';
import { useState, useEffect } from "react";


export const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    
    useEffect(() => {
        fetch("https://60f699f318254c00176e0362.mockapi.io/posts")
        .then((response) => response.json())
        .then((data) => setAllPosts(data))
    }, []);

    console.log({allPosts})

    return <ul className="list"> 
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
        </ul>
}

