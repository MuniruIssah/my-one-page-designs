import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
const BHNHeaderLogo = () => {
  return (
    <div className="bhNHeaderLogo">
      <FontAwesomeIcon className="icon" icon={faNetworkWired} />
      <span>bh.network</span>
    </div>
  );
};

export default BHNHeaderLogo;
