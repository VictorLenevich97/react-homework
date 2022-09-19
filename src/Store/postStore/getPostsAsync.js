import axios from "axios";
import { POST_LIST } from "../../Costants/endpoints";
import { postsSuccess,  postsError } from "./actions";

export const getPostsAsync = async (dispatch) => {
  axios
    .get(`${POST_LIST}?limit=20`)
    .then((res) => {
      dispatch(postsSuccess(res.data.results));
    })
    .catch((error) => {
      dispatch(postsError(error));
    })
};
