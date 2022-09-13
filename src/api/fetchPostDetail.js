export async function fetchPostDetail(setPost) {
    try {
        const result = await fetch("https://studapi.teachmeskills.by/blog/posts/2/")
            .then((response) => response.json())
            setPost(result)
            console.log(result)
    } catch (e) {
        console.log(e)
    }
}