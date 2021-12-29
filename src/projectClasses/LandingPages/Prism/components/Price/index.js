import React from "react";
import "./styles.scss";
const PrismPrice = ({ originalPrice, currentPrice, discount }) => {
  return (
    <div className="prismPrice">
      <span>${parseFloat(currentPrice).toFixed(2)}</span>
      <span>${originalPrice}</span>
      <span>{discount}% discount</span>
    </div>
  );
};

export default PrismPrice;
