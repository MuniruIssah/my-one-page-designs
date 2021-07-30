import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles.scss";
const ScroltHeadingStrip = ({ title, button }) => {
  return (
    <div className="scroltHeadingStrip">
      <span>{title}</span>
      {button && (
        <button className="headerButton">
          <FontAwesomeIcon icon={button.icon} />
          <span>{button.label}</span>
        </button>
      )}
    </div>
  );
};

export default ScroltHeadingStrip;
