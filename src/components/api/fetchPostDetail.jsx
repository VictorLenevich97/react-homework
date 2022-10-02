export const fetchPostsDetail = async (setPost,currentData ) => {
    try {
        const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${currentData}/`) // 19:30 создать константу endpoints.js
        .then((res)=>res.json())
        setPost(response)
    }
     catch(error){
        console.log(error)
     }
}

