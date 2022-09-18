import {
  postLoading,
  postError,
  postSuccess,
} from "../store/postStore/postsSlice";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(postLoading());
      const response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?limit=20"
      ).then((response) => response.json());
      dispatch(postSuccess(response.results));
    } catch (error) {
      dispatch(postError(error));
    }
  };
};
