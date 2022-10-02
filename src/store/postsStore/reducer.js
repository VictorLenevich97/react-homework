import {POSTS_ERROR, POSTS_LOADING,POSTS_SUCCESS} from "../postsStore/actions"

export const initialState = {
    isLoading: false,
    posts:[],
    error:null,
}

export function postsReducer( state= initialState, action){
    switch  (action.type){
        case POSTS_LOADING:
            return {...state, isLoading:true}
        case POSTS_SUCCESS:
            return{...state, posts:action.payload, isLoading: false}
        case POSTS_ERROR:
            return  {...state, error: action.payload, isLoading:false}
        default:
            return state;
    }
    
}