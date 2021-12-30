import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
const RocoUserSectionHeader = ({ number }) => {
  return (
    <div className="rocoUserSectionHeader">
      <span className="rushHeading">Students</span>
      <div className="rushNumAndAdd">
        <span>{number}</span>
        <FontAwesomeIcon icon={faPlusCircle} style={{fontSize:25}} />
      </div>
    </div>
  );
};

export default RocoUserSectionHeader;
