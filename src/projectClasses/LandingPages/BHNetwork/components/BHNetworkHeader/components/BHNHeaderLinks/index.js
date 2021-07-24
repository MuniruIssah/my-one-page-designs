import React from "react";
import "./styles.scss";
const BHNHeaderLinks = ({ links }) => {
  return (
    <nav className="bhNHeaderLinks">
      {links.map((link) => (
        <a key={link.label} className="bhNetworkLinks" href={link.link}>{link.label}</a>
      ))}
    </nav>
  );
};

export default BHNHeaderLinks;
