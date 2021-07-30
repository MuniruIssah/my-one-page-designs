import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
const ScroltNavItem = ({ label, icon }) => {
  return (
    <button className="scroltNavItem">
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </button>
  );
};

export default ScroltNavItem;
