import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_ALL_POSTS,
  DELETE_POST,
  SET_SHOW_MODAL,
} from "./types";

const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        blogPosts: payload,
      };
    case GET_POST:
      return {
        ...state,
        singleBlogPost: payload,
      };
    case CREATE_POST:
      return {
        ...state,
        blogPosts: [payload, ...state.blogPosts],
      };
    case EDIT_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.map((post) =>
          post.id === payload.id ? payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.filter((post) => post.id !== payload.id),
      };
    case DELETE_ALL_POSTS:
      return {
        ...state,
        blogPosts: [],
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        viewModals: {
          ...state.viewModals,
          [payload.name]: payload.value,
        },
      };
    default:
      return state;
  }
};

export default AppReducer;
