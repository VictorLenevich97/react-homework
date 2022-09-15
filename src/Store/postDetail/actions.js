export const POST_LOADING = "POSTS_LOADING";
export const POST_SUCCESS = "POSTS_SUCCESS";
export const POST_ERROR = "POSTS_ERROR";

export const postLoading = () => ({ type: POST_LOADING });
export const postSuccess = (data) => ({ type: POST_SUCCESS, payload: data });
export const postError = (error) => ({ type: POST_ERROR, payload: error });
