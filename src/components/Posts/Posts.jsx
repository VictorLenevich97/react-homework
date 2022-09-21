import React, {useState, useEffect} from "react";
import { fetchPosts } from "../api/fetchPosts"
import { Link } from "react-router-dom"
import "./posts.css"
 
export function Posts(){
    const[post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    useEffect(()=>{
        fetchPosts(setIsLoading, setPost,setIsError )
    },[]);


    return(
        
        <div className="container">
            <div className="title">BLOG</div>
            <div className="button">
             <button className="button1">All</button>
             <button className="button1">My Favorute</button>
             <button className="button1">Popular</button>
             </div>
             <div>
                    {isLoading ? <div className="preloader">
                    <div className="preloader__row">
                    <div className="preloader__item"></div>
                    <div className="preloader__item"></div>
                    </div></div> : null
                    }
                </div>
                
                   <div>
                   {isError ? <div>Somethings wents wrong...</div> : null}
                    </div> 

            

            <ul className="post">
                {post.map(item=>{
                    return(
                        <li className="post_card" key = {item.id}>
                            <img className="post_image" src={item.image}/>
                            <div className="post_date">{item.date}</div>
                            <Link to={`/post/${item.id}`} className="post_text">{item.text}</Link>
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
