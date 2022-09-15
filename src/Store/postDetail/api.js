import axios from "axios";
import { POST_DETAIL } from "../../Costants/endpoints";
import { postSuccess,  postError } from "./actions";

export const api = async (dispatch) => {
  axios
    .get(POST_DETAIL)
    .then((res) => {
      dispatch(postSuccess(res.data));
    })
    .catch((error) => {
      dispatch(postError(error));
    })
};