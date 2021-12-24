import React from "react";
import "./styles.scss";
const WaxotCard = ({ icon, percent, value, heading, description }) => {
  return (
    <div className="waxotCard">
      <div className="icon"></div>
      <h1>{`${value}${percent ? "%" : "+"}`}</h1>
      <div>
        <h5>{heading}</h5>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default WaxotCard;
