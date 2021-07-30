import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const NavItem = ({ icon, children }) => {
  return (
    <button className="grfdNavItem">
      <FontAwesomeIcon icon={icon} className="icon" />
      <span>{children}</span>
    </button>
  );
};

export default NavItem;
