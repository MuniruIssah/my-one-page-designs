import React from "react";
import { NavLink } from "react-router-dom";
import BaseLogo from "../BaseLogo";
import "./styles.scss";
const BaseTopSectionHeader = () => {
  return (
    <header className="baseTopSectionHeader">
      <BaseLogo />
      <div>
        <NavLink activeClassName="activeBaseNavLink"  to="/base">Home</NavLink>
        <NavLink activeClassName="activeBaseNavLink"  to="/base/docs">Documentation</NavLink>
        <NavLink activeClassName="activeBaseNavLink"  to="/base/governance">Governance</NavLink>
        <NavLink activeClassName="activeBaseNavLink"  to="/base/prophets">The Prophets</NavLink>
      </div>
      <button>Sign Up</button>
    </header>
  );
};

export default BaseTopSectionHeader;
