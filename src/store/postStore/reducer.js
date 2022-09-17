import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "./actions";

export const initialValue = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postReducer = (state = initialValue, action) => {
  switch (action.type) {
    case POST_LOADING:
      return { ...state, isLoading: true };

    case POST_SUCCESS:
      return { ...state, posts: action.payload, isLoading: false };

    case POST_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
