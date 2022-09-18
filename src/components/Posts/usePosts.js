import { useState, useMemo, useContext } from "react";
import { PostsList } from "../mockData/PostsList";
import { PostsContext } from "../PostsProvider/PostsProvider"



export const usePosts = () => {
    const [tab, setTab] = useState("allposts");

    const { posts } = useContext(PostsContext);

    const favPosts = useMemo(() => PostsList.filter((el) => el.isFavorite), []);


    return {
        tab,
        setTab,
        posts,
        favPosts,
    };
};
