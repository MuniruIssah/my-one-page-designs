import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
const ScroltLogo = () => {
  return (
    <div className="scroltLogo">
      <FontAwesomeIcon icon={faDotCircle} />
      <span>Scrolt Dashboard</span>
    </div>
  );
};

export default ScroltLogo;
