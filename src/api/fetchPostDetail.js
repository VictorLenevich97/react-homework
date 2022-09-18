import {
  postLoading,
  postError,
  postDetailsSuccess,
} from "../store/postStore/postsSlice";

export const fetchPostDetail = (postId) => {
  return async (dispatch) => {
    try {
      dispatch(postLoading());
      const result = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/${postId}`
      ).then((response) => response.json());
      dispatch(postDetailsSuccess(result));
    } catch (error) {
      dispatch(postError(error));
    }
  };
};
