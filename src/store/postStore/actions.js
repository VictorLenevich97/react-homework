export const POST_LOADING = "POST_LOADING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const postLoading = () => ({ type: POST_LOADING });
export const postSuccess = (data) => ({ type: POST_SUCCESS, payload: data });
export const postError = (error) => ({ type: POST_ERROR, payload: error });
