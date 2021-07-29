import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input type="text" placeholder="Search task,project,meeting..." />
    </div>
  );
};

export default SearchBar;
