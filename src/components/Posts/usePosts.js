import { useState, useEffect, useMemo, useCallback, useContext } from "react";
import { PostsList } from "../mockData/PostsList";
// import { ThemeContext } from "../ThemeProvider/ThemeProvider";

export const usePosts = () => {
    const [tab, setTab] = useState("allposts");
    const [randomPosts, setRandomPosts] = useState([]);

    // const { theme, setTheme } = useContext(ThemeContext);

    // const themeToggle = () => {
    //     setTheme(theme === "light" ? "dark" : "light");
    // };

    const favPosts = useMemo(() => PostsList.filter((el) => el.isFavorite), []);

    const fetchPosts = useCallback(async () => {
        const reponce = await fetch(
            "https://60f699f318254c00176e0362.mockapi.io/posts"
        ).then((data) => data.json()).catch((err) => {
            console.error(err)
        });
        setRandomPosts(reponce.slice(0, 6));
    }, []);

    useEffect(() => {
        fetchPosts();
    }, []);

    return {
        // themeToggle,
        tab,
        setTab,
        randomPosts,
        favPosts,
    };
};
