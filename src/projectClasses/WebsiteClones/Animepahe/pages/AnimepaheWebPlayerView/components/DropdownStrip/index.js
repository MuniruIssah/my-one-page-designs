import React from "react";
import AnimepaheDropdown from "./components/Dropdown";
import "./styles.scss"
const AnimepaheDropdownStrip = ({ dropdownList }) => {
  return (
    <div className="animepaheDropdownStrip">
      {dropdownList.map((dropdownItem) => (
        <AnimepaheDropdown list={dropdownItem.list}>
          {dropdownItem.label}
        </AnimepaheDropdown>
      ))}
    </div>
  );
};

export default AnimepaheDropdownStrip;
