import React from "react";
import "./styles/main.scss";
import AppState from "./context/app/AppState";
import MainRouter from "./routes/MainRouter";

const App = () => {
  return (
    <AppState>
      <MainRouter />
    </AppState>
  );
};

export default App;
