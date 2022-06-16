import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import BlogPost from "../pages/BlogPost";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

const MainRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/post/:id" component={BlogPost} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>
  );
};

export default MainRouter;
