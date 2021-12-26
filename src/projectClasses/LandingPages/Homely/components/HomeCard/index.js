import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBath,faBed } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'



import "./styles.scss";
const HomelyHomeCard = ({
  image,
  age,
  fit = false,
  name = `Issah Muniru's Crib`,
  price = 170.00,
  location = "Lakeside Estates, 1355",
  beds = 3,
  baths = 2,
  ft = 1000,
}) => {
  return (
    <div className="homelyHomeCardWrapper">
      <div
        className="homelyCardImage"
        style={{ backgroundImage: `url(${image})` }}
      >
        {fit || age ? (
          <div className="yellowTypeIndicator">
            {fit ? "Perfect Fit" : age ? "Newest" : null}
          </div>
        ) : null}
      </div>
      <div className="nameAndPrice">
        <span>{name}</span>
        <span>${parseFloat(price).toFixed(2)}</span>
      </div>
      <span className="homelyCardLocation">{location}</span>
      <div className="homelyHomeCardFooter">
        {beds && (
          <div className="homelyFooterIconAndText">
            <FontAwesomeIcon icon={faBed} />
            <span>{beds} Beds</span>
          </div>
        )}
        {baths && (
          <div className="homelyFooterIconAndText">
            <FontAwesomeIcon icon={faBath}/>
            <span>{baths} Baths</span>
          </div>
        )}
        {ft && (
          <div className="homelyFooterIconAndText">
            <FontAwesomeIcon icon={faSquare}/>
            <span>{ft} Sqft</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomelyHomeCard;
