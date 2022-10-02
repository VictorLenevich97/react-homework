import {POST_API} from "../../constant/endpoints"
import { postsError,postsLoading,postsSuccess} from "../../store/postsStore/actions"


export const fetchSearch = async (dispatch,searchValue  ) =>{
    try {
        dispatch(postsLoading())
        const response = await fetch(`${POST_API}?limit=20&search=${searchValue}`) // 19:30 создать константу endpoints.js
        .then((res)=>res.json())
        dispatch(postsSuccess(response.results))
        // setPost(response.results)
    }
     catch(error){
        dispatch(postsError(error))
    }finally{

    }
}