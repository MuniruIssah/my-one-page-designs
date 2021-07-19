import React from "react";
import "./styles.scss";
const DecorkFooterLink = ({ label, link }) => {
  return (
    <a href={link} className="decorkFooterLink">
      {label}
    </a>
  );
};

export default DecorkFooterLink;
