import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./styles.scss";
const PrismRatingsSection = ({ ratings, numberOfRatings }) => {
  return (
    <div className="prismRatingsSection">
      <div>
        <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} /> |{" "}
        <span className="ratingsss">{ratings}</span>
      </div>
      <span className="numOfRatings">{numberOfRatings} Ratings</span>
    </div>
  );
};

export default PrismRatingsSection;
