import React from "react";
import "./styles.scss";
const OfferTimeLeft = ({ minutes }) => {
  return (
    <div className="offerTimeLeft">
      <span>Offer ends in </span>
      <span>{minutes} minutes</span>
    </div>
  );
};

export default OfferTimeLeft;
