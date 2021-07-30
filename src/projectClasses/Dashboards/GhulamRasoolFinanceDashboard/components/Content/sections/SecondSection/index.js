import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GRFDSecondContentSection = ({ list }) => {
  return (
    <div className="grfdSecondContentSection">
      <h3>Sales Revenue</h3>
      {list.map((item) => (
        <SecondSectionItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default GRFDSecondContentSection;

const SecondSectionItem = ({ icon, title, value }) => {
  return (
    <div className="SecondSectionItem">
      <div className="secondSectionItemIcon">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
      <div className="secondSectionItemDetails">
        <span>{value}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};
