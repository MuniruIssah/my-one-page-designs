import React from "react";
import "./styles.scss"
const CircularButton = ({ size, color, children,fontSize }) => {
  let half=size/5;
  return (
    <button
      className="circularButton"
      style={{ backgroundColor:color, width:size, height: size,fontSize:fontSize }}
    >
      {children}
    </button>
  );
};

export default CircularButton;
