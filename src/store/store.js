import { createStore } from "redux";
import { postReducer } from "./postStore/reducer";

const store = createStore(postReducer);

export default store;
