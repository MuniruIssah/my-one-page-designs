import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
const SidebarNavItem = ({ icon, children, notificationCount }) => {
  return (
    <button className="sidebarNavItem">
      <FontAwesomeIcon icon={icon} className="icon" />
      <span>{children}</span>
      {notificationCount && (
        <div className="notificationCount">{notificationCount}</div>
      )}
    </button>
  );
};

export default SidebarNavItem;
