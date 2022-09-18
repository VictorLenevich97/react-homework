import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  isLoading: false,
  posts: [],
  postDetails: [],
  error: null,
};

export const postSlice = createSlice({
  name: "postsSlice",
  initialState: initialValue,
  reducers: {
    postLoading() {
      return { isLoading: true };
    },
    postSuccess(_, action) {
      return { isLoading: false, posts: action.payload, postDetails: [] };
    },
    postDetailsSuccess(_, action) {
      return { isLoading: false, posts: [], postDetails: action.payload };
    },
    postError(_, action) {
      return { isLoading: false, error: action.payload };
    },
  },
});

export const {
  postLoading,
  postDetailsSuccess,
  postSuccess,
  postError,
} = postSlice.actions;
export default postSlice.reducer;
