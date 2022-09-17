import {
  postLoading,
  postError,
  postSuccess,
} from "../store/postStore/actions";

export async function fetchSearch(dispatch, searchValue) {
  try {
    dispatch(postLoading());
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?search=${searchValue}`
    ).then((response) => response.json());
    dispatch(postSuccess(response.results));
  } catch (error) {
    dispatch(postError(error));
  }
}
