import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./styles.scss";

const BackToHome = () => {
  return (
    <button className="backToHomeButton">
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Back to homepage</span>
    </button>
  );
};

export default BackToHome;
