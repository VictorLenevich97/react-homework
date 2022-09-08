export async function fetchPosts(setPostList, setIsLoading) {
    setIsLoading(true)
    try {
        const result = await fetch("https://60f699f318254c00176e0362.mockapi.io/posts")
            .then((result) => result.json())
        setPostList(result)
    } catch (e) {
        console.log(e)
    }finally{
        setIsLoading(false)
    }
}