import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POST_LIST } from "../../Costants/endpoints";

export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async ({ search, limit = 20 }, { rejectWithValue }) => {
    const queryString = new URLSearchParams({ search, limit }).toString();
    return await axios
      .get(`${POST_LIST}?${!!search ? queryString : `limit=${limit}`}`)
      .then((res) => res.data.results)
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);
export const getPostDetail = createAsyncThunk(
  "posts/getPostDetail",
  async ({ id }, { rejectWithValue }) => {
    return await axios
      .get(`${POST_LIST}/${id}`)
      .then((res) => res.data)
      .catch((error) => {
        return rejectWithValue(error);
      });
  }
);

const initialState = {
  isLoading: true,
  posts: [],
  postDetail: {},
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getPostsAsync.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getPostDetail.pending.type]: (state) => {
      state.isLoading = true;
    },

    [getPostsAsync.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [getPostDetail.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.postDetail = action.payload;
    },

    [getPostsAsync.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getPostDetail.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
