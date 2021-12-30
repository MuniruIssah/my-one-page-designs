import React from "react";
import "./styles.scss";
const RocoHeadingAndDescription = ({ heading, description }) => {
  return (
    <div className="rocoHeadingAndDescription">
      <span>{heading}</span>
      <span>{description}</span>
    </div>
  );
};

export default RocoHeadingAndDescription;
