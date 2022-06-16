import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_ALL_POSTS,
  DELETE_POST,
} from "./types";

const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        blogPosts: payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
