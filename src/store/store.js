import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
import postsSlice from "./postStore/postsSlice";

const store = configureStore({
  reducer: postsSlice,
  fetch: applyMiddleware(thunk),
});

export default store;
