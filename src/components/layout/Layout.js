import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
