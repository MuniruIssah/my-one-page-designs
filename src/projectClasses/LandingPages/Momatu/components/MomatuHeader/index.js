import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
const MomatuHeader = () => {
  return (
    <div className="momatuHeader">
      <div className="momatuLogoSection">
        <div>Logo</div>
        <span>MOMATU</span>
      </div>
      <div className="momatuLinks">
        <NavLink to="/momatu" activeClassName="activeMomatuLink">Blog</NavLink>
        <NavLink to="/momatu" activeClassName="activeMomatuLink">About</NavLink>
        <NavLink to="/momatu" activeClassName="activeMomatuLink">How It works</NavLink>
        <NavLink to="/momatu" activeClassName="activeMomatuLink">Pricing</NavLink>
        <button className="momatuButton momatuWhite">Login</button>
      </div>
    </div>
  );
};

export default MomatuHeader;
