import { createStore, combineReducers } from "redux"
import { postsReducer } from "./postsStore/reducer"

 const allReducers = combineReducers({
    postsReducer,
}
)

export const store = createStore(allReducers);