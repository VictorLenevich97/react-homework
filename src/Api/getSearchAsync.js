import axios from "axios";
import { POST_LIST } from "../Costants/endpoints";
import { postsSuccess, postsError } from "../store/postStore/actions";

export const getSearchAsync = async (dispatch, searchValue) => {
    axios
    .get(`${POST_LIST}/?search=${searchValue}`)
    .then((res) => {
      dispatch(postsSuccess(res.data.results));
    })
    .catch((error) => {
      dispatch(postsError(error));
    })
  }