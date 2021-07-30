import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const SmallCard = ({ increasing, title, description, value, percent,color }) => {
  return (
    <div className={`smallCard ${color}`}>
      <div className="textSection">
        <span>{title}</span>
        <span>{description}</span>
        <span>{value}</span>
      </div>
      <div className="percentSection">
        <span>{percent}%</span>
      </div>
      <FontAwesomeIcon className="icon" icon={increasing?faArrowUp:faArrowDown} />
    </div>
  );
};

export default SmallCard;
