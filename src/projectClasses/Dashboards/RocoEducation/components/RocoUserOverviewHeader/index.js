import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faAngleRight, faShareNodes } from "@fortawesome/free-solid-svg-icons";
const RocoUserOverviewHeader = () => {
  return (
    <div className="rocoUserOverviewHeader">
      <span>Overview</span>
      <div>
        <button>
          Share <FontAwesomeIcon icon={faShareNodes}  style={{ fontSize: 9, marginLeft: 10 }} />{" "}
        </button>
        <button>
          <span>Contact</span>{" "}
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ fontSize: 9, marginLeft: 10 }}
          />{" "}
        </button>
      </div>
    </div>
  );
};

export default RocoUserOverviewHeader;
