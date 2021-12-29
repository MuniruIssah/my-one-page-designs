import React from "react";
import "./styles.scss";
const IconHeadingAndDescription = ({ color, icon, heading, description }) => {
  return (
    <div className="prismIconHeadingAndDescription">
      <div className="prismIconSection" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <span>{heading} </span>
      <span>{description} </span>
    </div>
  );
};

export default IconHeadingAndDescription;
