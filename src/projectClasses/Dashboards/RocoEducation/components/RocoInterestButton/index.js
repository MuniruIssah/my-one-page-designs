import React from "react";
import "./styles.scss";
const RocoInterestButton = ({ label ,starred}) => {
  return <div className={`rocoInterestButton ${starred?'starred':''}`}>{label}</div>;
};

export default RocoInterestButton;
