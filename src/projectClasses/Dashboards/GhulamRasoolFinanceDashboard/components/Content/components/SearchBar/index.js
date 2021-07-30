import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./styles.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return <div className="grfdSearchBar">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input type="text" placeholder="Search for stats"/>
  </div>;
};

export default SearchBar;
