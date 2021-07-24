import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
const BHNTrustedBy = ({ trustees }) => {
  return (
    <div className="bhNTrustedBy">
      <span>Trusted by:</span>
      {trustees.map((trustee) => (
        <IconAndLabel key={trustee.label} {...trustee} />
      ))}
    </div>
  );
};

export default BHNTrustedBy;

const IconAndLabel = ({ icon, label }) => (
  <div className="iconAndLabel">
    <FontAwesomeIcon className="iconForLabel" icon={icon} />
    <span className="labelForIcon">{label}</span>
  </div>
);
