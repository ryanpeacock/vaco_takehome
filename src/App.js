import React from "react";
import "./styles/main.scss";
import AppState from "./context/app/AppState";

const App = () => {
  return (
    <AppState>
      <div className="container">
        <h1>Hello World</h1>
        <div className="btn btn-dark">Hello World</div>
        <div className="btn btn-light">Hello World</div>
        <div className="btn btn-orange">Hello World</div>
        <div className="btn btn-green">Hello World</div>
        <div className="btn btn-blue">Hello World</div>
      </div>
    </AppState>
  );
};

export default App;
