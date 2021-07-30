import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const ScroltCardwithAction = ({ title, action, children }) => {
  return (
    <div className="scroltCardwithAction">
      <header className="fixedCardHeader">
        <span>{title}</span>
        {action && (
          <button>
            {action}
            <FontAwesomeIcon icon={faAngleDown} className="icon" />
          </button>
        )}
      </header>
      {children}
    </div>
  );
};

export default ScroltCardwithAction;
