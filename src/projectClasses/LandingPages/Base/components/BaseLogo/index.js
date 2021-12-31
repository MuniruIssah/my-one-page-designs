import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const BaseLogo = () => {
  return (
    <div className="baseLogo">
      <FontAwesomeIcon
        icon={faWaveSquare}
        style={{ padding: 10, borderRadius: "50%", backgroundColor: "white" ,color:'#31d4d4'}}
      />
      <span>Base</span>
    </div>
  );
};

export default BaseLogo;
