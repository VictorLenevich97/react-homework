import { createStore, combineReducers } from "redux";
import postsReducer from "./postStore/reducer"
import postDetailReducer from "./postDetail/reducer"

const rootReducers = combineReducers({
    postsReducer,
    postDetailReducer,
}); 

const store = createStore(rootReducers);

export default store;