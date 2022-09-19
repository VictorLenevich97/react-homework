import { createStore, combineReducers } from "redux";
import postsReducer from "./postStore/reducer"

const rootReducers = combineReducers({
    postsReducer
}); 

const store = createStore(rootReducers);

export default store;