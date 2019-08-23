import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return <div className="headerContainer">{children}</div>;
};

export default Header;
