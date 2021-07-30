import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const FilterButton = () => {
  return (
    <button className="grfdfilterButton">
      <span>Filters</span>
      <FontAwesomeIcon className="icon" icon={faFilter} />
    </button>
  );
};

export default FilterButton;
