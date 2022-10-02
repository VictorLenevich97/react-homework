export const POSTS_LOADING = "POST_LOADING"
export const POSTS_SUCCESS = "POST_SUCCESS"
export const POSTS_ERROR = "POST_ERROR"

export const postsLoading = () =>({ type : POSTS_LOADING})
export const postsSuccess = (data) =>({ type : POSTS_SUCCESS, payload: data})
export const postsError =  (error) =>({type: POSTS_ERROR, payload:error})