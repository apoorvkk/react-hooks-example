import React from "react";
import "./Box.css";
const Box = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Box;
