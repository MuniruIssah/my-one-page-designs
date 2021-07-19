import React from "react";
import "./styles.scss";
const RoundedEdgeButton = ({ label,style }) => {
  return (
    <button
      className="roundedEdgeButton"
      style={style}
    >
      {label}
    </button>
  );
};

export default RoundedEdgeButton;
