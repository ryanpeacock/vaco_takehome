import React, { useReducer } from "react";
import axios from "axios";
import AppReducer from "./appReducer";
import AppContext from "./appContext";

const AppState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};

export default AppState;
