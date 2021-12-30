import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const RocoShortcutItem = ({label}) => {
  return (
    <div className="rocoShortcutItem">
      <span>{label}</span>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default RocoShortcutItem;
