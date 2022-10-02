
import React from 'react'
import { fetchSearch} from "../api/fetchSearch"
import { useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { Loading} from "../../components/Loading"

export const PostSearch = () => {

    const [params] = useSearchParams()
    const {posts, isLoading, error} = useSelector((store) =>store.postsReducer)

    const dispatch = useDispatch() 


    const searchValue = params.get("value")


    useEffect (()=>{
        fetchSearch(dispatch,searchValue)
    },[dispatch,searchValue])

    if (isLoading) {
        return <Loading/>;
      }
      if (error) {
        return <div>{"Something happens :("}</div>;
      }

  return (
    <div>
        <div className='post_searchResult'>Post results :  {searchValue}</div>
    

    <ul className="post">
    {posts.map(item=>{
        return(
            <li className="post_card" key = {item.id}>
                <img alt='/' className="post_image" src={item.image}/>
                <div className='post_text'>{item.title}</div>
                <div className="post_date">{item.date}</div>
                <div className="post_text">{item.text}</div>
            </li>
        
        )
    })}
</ul>
</div>
  )
}

