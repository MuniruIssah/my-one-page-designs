import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./styles.scss";
const HomelyToggle = ({ label, info }) => {
  return (
    <div className="homelyToggleWrapper">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <span className="homelyToggleLabel">{label}</span>
      {info && <FontAwesomeIcon icon={faInfoCircle} style={{color:'#9f9f9e',fontSize:12}} />}
    </div>
  );
};

export default HomelyToggle;
