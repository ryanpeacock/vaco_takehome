import React, { useReducer } from "react";
import axios from "axios";
import AppReducer from "./appReducer";
import AppContext from "./appContext";

import {
  GET_ALL_POSTS,
  GET_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_ALL_POSTS,
  DELETE_POST,
} from "./types";

const AppState = (props) => {
  const initialState = {
    blogPosts: [],
    singleBlogPost: {},
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const apiURL = (value) => {
    return `https://us-central1-mbtcandidate.cloudfunctions.net/${value}/rpeacock`;
  };

  const getAllPosts = async () => {
    const res = await axios.get(apiURL("posts"));
    console.log(res.data);
    dispatch({ type: GET_ALL_POSTS, payload: res.data.response });
  };

  return (
    <AppContext.Provider
      value={{
        blogPosts: state.blogPosts,
        singleBlogPost: state.singleBlogPost,
        getAllPosts,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
