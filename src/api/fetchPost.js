export async function fetchPosts(setPostList, setIsLoading) {
    setIsLoading(true)
    try {
        const response = await fetch("https://studapi.teachmeskills.by/blog/posts/?limit=20")
            .then((response) => response.json())
        setPostList(response.results)
    } catch (e) {
        console.log(e)
    }finally{
        setIsLoading(false)
    }
}