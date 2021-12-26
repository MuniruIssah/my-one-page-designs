import React from "react";
import "./styles.scss";
const HomelySort = () => {
  return (
    <div className="homelySortWrapper">
      <span className="homelySortLabel">Sort by:</span>
      <select className="homelySortSelect">
        <option>Newest</option>
        <option>Oldest</option>
      </select>
    </div>
  );
};

export default HomelySort;
