import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './styles.scss'
const HomelySearchBar = () => {
  return (
    <form className="homelySearch">
      <input type='search' placeholder="Search by location.." />
      <button type="button">
        <FontAwesomeIcon icon={faSearch} style={{color:'#37a176'}} />
      </button>
    </form>
  );
};

export default HomelySearchBar;
