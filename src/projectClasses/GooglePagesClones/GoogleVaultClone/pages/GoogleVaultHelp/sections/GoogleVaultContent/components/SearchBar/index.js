import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
const SearchBar = () => {
  return (
    <div className="GVaultsearchBar">
      <FontAwesomeIcon className="searchIcon" icon={faSearch} />
      <input type="text" placeholder="Describe your issue" />
      {/*<FontAwesomeIcon className="searchIcon" icon={faTimes}/>*/}
    </div>
  );
};

export default SearchBar;
