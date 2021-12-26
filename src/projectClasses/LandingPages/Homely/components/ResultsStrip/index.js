import React from "react";
import "./styles.scss";
const HomelyResultSection = ({ number, location }) => {
  return (
    <div className="homelyResultStrip">
      <span>{number} Results</span>&nbsp;
      <span> in {location}</span>
    </div>
  );
};

export default HomelyResultSection;
