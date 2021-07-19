import React from "react";
import "./styles.scss";
const DecorkHeaderSecondSection = ({ links }) => {
  return (
    <div className="decorkHeaderSecondSection">
      {links.map((link) => (
        <a href={link.link} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default DecorkHeaderSecondSection;
