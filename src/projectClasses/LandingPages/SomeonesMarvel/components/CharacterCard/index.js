import React from "react";
import "./styles.scss";
const CharacterCard = ({ image }) => {
  return (
    <div
      className="characterCard"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default CharacterCard;
