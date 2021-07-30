import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
const LargeCard = ({ contentList }) => {
  return (
    <div className="largeCard">
      {contentList.map((item) => (
        <LargeCardSection key={item.title} {...item} />
      ))}
    </div>
  );
};

export default LargeCard;

const LargeCardSection = ({ icon, title, value, rate }) => {
  return (
    <div className="largeCardSection">
      <div className="LCSicon">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <span className="LCSsmall">{title}</span>
      <span className="LCSvalue">{value}</span>
      <span className="LCSsmall">{rate}</span>
    </div>
  );
};
