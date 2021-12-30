import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const RocoStudentSearchBar = () => {
  return (
    <div className="rocoStudentSearchBar">
      <FontAwesomeIcon icon={faSearch} style={{fontSize:17,marginRight:'0.5rem'}} />
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default RocoStudentSearchBar;
