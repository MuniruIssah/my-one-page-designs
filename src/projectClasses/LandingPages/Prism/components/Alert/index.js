import { faSnowflake, faStar,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const PrismAlert = () => {
  return (
    <div className="prismAlert">
      <FontAwesomeIcon icon={faStar} style={{color:'red',marginRight:'0.5rem'}} />
      Holiday Giveaway is Live Now. Grab your Free Gift!
      <FontAwesomeIcon icon={faSnowflake}  style={{color:'white',margin:'0px 0.5rem'}}  />
      <FontAwesomeIcon icon={faTimes} className="closeIcon" />
    </div>
  );
};

export default PrismAlert;
