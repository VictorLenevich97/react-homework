import {POST_API} from "../../constant/endpoints"
import { postsError,postsLoading,postsSuccess} from "../../store/postsStore/actions"

export const fetchPost = async(dispatch) =>{
    try {
        dispatch(postsLoading())
        const response = await fetch (
           `${POST_API}?limit=20`
        ).then((res)=>res.json())

        dispatch(postsSuccess(response.results))

    } catch (error) {
        dispatch(postsError(error))
    }
}