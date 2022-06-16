import React from "react";
import * as FaIcons from "react-icons/fa";

const Logo = ({ color, size }) => {
  return (
    <div id="site-logo" style={{ color: color }}>
      <FaIcons.FaBlog
        className="logo-icon"
        style={{ fontSize: `${2 * size}rem` }}
      />
      <span style={{ fontSize: `${1.5 * size}rem` }}>My Blog</span>
    </div>
  );
};

export default Logo;
