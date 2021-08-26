import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
const SidebarNavItem = ({ icon, label, path }) => {
  const history = useHistory();
  const handleRouteToLink = () =>window.location.href= path;
  return (
    <div className="uiDashboardSidebarNavItem" onClick={handleRouteToLink}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default SidebarNavItem;
