import React from "react";
import DecorkFooterLink from "./components/FooterLink";
import "./styles.scss";
const DecorkFooter = ({ links }) => {
  return (
    <footer className="decorkFooter">
      {links.map((link) => (
        <DecorkFooterLink label={link.label} link={link.link} />
      ))}
    </footer>
  );
};

export default DecorkFooter;
