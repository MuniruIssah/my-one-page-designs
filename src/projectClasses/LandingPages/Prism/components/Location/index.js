import { faMapMarker, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const PrismLocation = ({ heading, description }) => {
  return (
    <div className="prismLocation">
      <div className="locationIconSection">
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{color:'white',fontSize:20}} />
      </div>
      <div className="locationDetailsSection">
        <span>{heading}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PrismLocation;
