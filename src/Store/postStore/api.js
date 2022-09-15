import axios from "axios";
import { POST_LIST } from "../../Costants/endpoints";
import { postsSuccess,  postsError } from "./actions";

export const api = async (dispatch) => {
  axios
    .get(POST_LIST)
    .then((res) => {
      dispatch(postsSuccess(res.data.results));
    })
    .catch((error) => {
      dispatch(postsError(error));
    })
};
