import React from "react";
import "./styles.scss";
const PrismPostedBy = ({ name, location,image }) => {
  return (
    <div className="prismPostedBy">
      <span className="ppbHeading">Posted by:</span>
      <div className="ppbDetails">
        <div className="circleImage" style={{backgroundImage:`url(${image})`}}></div>
        <div className="detaiils">
          <span>{name}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default PrismPostedBy;
