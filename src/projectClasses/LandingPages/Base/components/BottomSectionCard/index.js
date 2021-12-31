import React from "react";
import './styles.scss'
const BaseBottomSectionCard = ({ value, label }) => {
  return (
    <div className="baseBottomSectionCard">
      <span>{value}</span>
      <span>{label}</span>
    </div>
  );
};

export default BaseBottomSectionCard;
