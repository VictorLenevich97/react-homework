import { useEffect, useState } from "react";
import { PostsListItem } from "./PostListItem";
import { fetchPosts } from "../../api/fetchPosts";
import styles from './postsList.css'

export const PostsList = function () {
    const [activeTab, setActiveTab] = useState('all')
    const [postsList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        fetchPosts(setPostList, setIsLoading)
    }, [])


    if (isLoading) {
        return (
            <div className="loading">
                <img className="loading__item" src="https://thumbs.gfycat.com/ImpressiveGenuineHen-max-1mb.gif" alt="Loading" />
            </div>
        )
    }

    return <div>
        <h1 className='page__name'>Blog</h1>
        <div className='buttons__block'>
            <p className={activeTab === 'all' ? 'button__all underline' : 'button__all'} onClick={() => setActiveTab('all')}>All</p>
            <p className={activeTab === 'fav' ? 'button__fav underline' : 'button__fav'} onClick={() => setActiveTab('fav')}>Favorite</p>
        </div>
        <ul className='posts'>
            {activeTab === 'all' ? <>
                {postsList.map(({ id, image, text, date }) => {
                    return <PostsListItem key={id} id={id} image={image} text={text} date={date} />
                })} </> : <div>Favorite</div>
            }
        </ul>
    </div>

}

