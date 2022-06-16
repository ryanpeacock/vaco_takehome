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
  SET_SHOW_MODAL,
  CLEAR_SINGLE_POST,
} from "./types";

const AppState = (props) => {
  const initialState = {
    blogPosts: [],
    singleBlogPost: {},
    viewModals: {
      post: false,
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const apiURL = (value) => {
    return `https://us-central1-mbtcandidate.cloudfunctions.net/posts/rpeacock/${value}`;
  };

  const getAllPosts = async () => {
    const res = await axios.get(apiURL(""));
    console.log(res.data);
    dispatch({ type: GET_ALL_POSTS, payload: res.data.response });
  };

  const getSinglePost = async (id) => {
    const res = await axios.get(apiURL(`${id}`));
    console.log(res.data);
    dispatch({ type: GET_POST, payload: res.data.response });
  };

  const clearSinglePost = () => {
    dispatch({ type: CLEAR_SINGLE_POST });
  };

  const createBlogPost = async (data) => {
    const content = {
      title: data.title,
      text: data.text,
    };
    await axios.post(apiURL(""), content);
    dispatch({ type: CREATE_POST, payload: data });
  };

  const editBlogPost = async (id, data) => {
    await axios.put(apiURL(id), data);
    dispatch({ type: EDIT_POST, payload: { id, data } });
  };
  const deleteBlogPost = async (id) => {
    await axios.delete(apiURL(id));
    dispatch({ type: DELETE_POST, payload: id });
  };
  const deleteAllPosts = async () => {
    await axios.delete(apiURL(""));
    dispatch({ type: DELETE_ALL_POSTS });
  };
  const setShowModal = (name, value) => {
    dispatch({ type: SET_SHOW_MODAL, payload: { name, value } });
  };

  return (
    <AppContext.Provider
      value={{
        blogPosts: state.blogPosts,
        singleBlogPost: state.singleBlogPost,
        viewModals: state.viewModals,
        setShowModal,
        getAllPosts,
        getSinglePost,
        clearSinglePost,
        createBlogPost,
        editBlogPost,
        deleteBlogPost,
        deleteAllPosts,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
