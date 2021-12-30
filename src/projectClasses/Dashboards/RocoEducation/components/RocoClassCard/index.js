import React, { useEffect, useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { blackOrWhite } from "../../utils/jindex";
const RocoClassCard = ({ level, time, title, ratings,backgroundColor }) => {
  let isFloat = ratings % 1 !== 0;
  console.log(isFloat,ratings)
  let rateInt = parseInt(ratings);

  const [color, setColor] = useState('black')
  useEffect(() => {
   setColor(blackOrWhite(backgroundColor))
  }, [])
  return (
    <div className="rocoClassCard" style={{backgroundColor:backgroundColor,color:color}}>
      <span>
        {level} | {time}
      </span>
      <span>{title}</span>
      <div>
        {new Array(rateInt).fill(0).map((_, index) => (
          <FontAwesomeIcon icon={faStar} className="rccStars" />
        ))}
        {isFloat && <FontAwesomeIcon icon={faStarHalf} className="rccStars"  />}
      </div>
    </div>
  );
};

export default RocoClassCard;
