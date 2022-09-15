import { POST_ERROR, POST_LOADING, POST_SUCCESS } from "./actions";

const initialState = {
  isLoading: true,
  post: {},
  error: null,
};

function postDetailReducer(state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return { ...state, isLoading: true };

    case POST_SUCCESS:
      return { ...state, post: action.payload, isLoading: false };

    case POST_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}

export default postDetailReducer;
