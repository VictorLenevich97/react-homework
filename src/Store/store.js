import postsSlice from "./postStore/postsSlice"
import { configureStore } from "@reduxjs/toolkit";

const rootReducers = ({
    posts: postsSlice
}); 

const store = configureStore({
    reducer: rootReducers,
})
export default store;