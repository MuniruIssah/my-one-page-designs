import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
const LatestAnimeCard = ({ title, background, episode }) => {
  return (
    <div
      className="latestAnimeCard"
      style={{ backgroundImage: `url(${background})`}}
    >
      <FontAwesomeIcon icon={faPlayCircle} className="LACicon" />
      <div className="infoSection">
        <a href="#">{title}</a>
        <span>{episode}</span>
      </div>
    </div>
  );
};

export default LatestAnimeCard;
