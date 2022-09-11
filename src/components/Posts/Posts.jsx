import React, {useState, useEffect} from "react";
import { allPosts } from "../mockData";
import "./posts.css"
 
export function Posts(){
    const favPosts = allPosts.filter(post => post.isFavorite)
    const [activeTab, setActiveTab] = useState(true)
    const[libraries, setLibraries] = useState([])
    useEffect(()=>{
        fetch('https://60f699f318254c00176e0362.mockapi.io/posts')
        .then(response=>response.json())
        .then((data)=>setLibraries(data))
    },[])
    return(
        
        <div className="container">
            <div className="title">BLOG</div>
            <div className="button">
             <button className="button1">All</button>
             <button className="button1">My Favorute</button>
             <button className="button1">Popular</button>

            </div>

            <ul className="post">
                {libraries.map(item=>{
                    return(
                        <li className="post_card" key = {item.id}>
                            <img className="post_image" src={item.image}/>
                            <div className="post_date">{item.date}</div>
                            <div className="post_text">{item.text}</div>
                        </li>
                    
                    )
                })}
            </ul>
        </div>

        // // <div className="content">
        //     <div  className="content_button">
        //       <button className="button" onClick={()=>setActiveTab(true)}>All</button>
        //       <button className="button" onClick={()=>setActiveTab(false)}>My Favorute</button>
        //     </div>
        //     <div>
        //         {activeTab ? <div className="post">
        //         {allPosts.map(({id, image, text, date, isFavorite}) =>(
        //         <div className="post_card" key = {id}>
        //         <img className="post_image" src={image}/>
        //         <span className="post_text">{text}</span>
        //         <span>{date}</span>
        //         </div>
        //          ))}
        //     </div> : <div className="post">
        //     {favPosts.map(({id,image,text,date,isFavorite})=>(
        //     <div className="post_card" key = {id}>
        //     <img className="post_image" src={image}/>
        //     <span className="post_text">{text}</span>
        //     <span>{date}</span>
        //     </div>
        //     )
        // )}
        // </div> }
        //     </div>
        // </div>
    )

}