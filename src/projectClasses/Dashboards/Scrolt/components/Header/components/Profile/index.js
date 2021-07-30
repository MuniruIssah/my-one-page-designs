import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const ScroltProfile = ({ image }) => {
  return (
    <div className="scroltProfile">
      <FontAwesomeIcon icon={faBell} />
      <div style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  );
};

export default ScroltProfile;
