import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
const ScroltGraphCard = ({ title, value, increasing, percentage }) => {
  return (
    <div className="scroltGraphCard">
      <div className="textWrap">
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <div className="chartSection ">
        <div className={`percentage ${increasing ? "increase" : ""}`}>
          <FontAwesomeIcon
            icon={increasing ? faArrowUp : faArrowDown}
            className="icon"
          />
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
};

export default ScroltGraphCard;
