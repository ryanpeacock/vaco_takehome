import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="home-header">
      <Link className="left" to="/">
        <Logo size={1} color="#f8f8f0" />
      </Link>
      <div className="menu-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Admin Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
