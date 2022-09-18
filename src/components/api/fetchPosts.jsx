import {POST_API} from "../../constant/endpoints"
export const fetchPosts = async (setIsLoading,setPost,setIsError ) =>{
    try {
        setIsLoading(true)
        const response = await fetch(POST_API) // 19:30 создать константу endpoints.js
        .then((res)=>res.json())
        console.log(response.results)
        setIsLoading(false)
        setPost(response.results)
    }
     catch(error){
        setIsError(true)
    }finally{

    }
}