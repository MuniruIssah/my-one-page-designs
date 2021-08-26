import React from "react";
import "./styles.scss";
import SidebarNavItem from "./components/SidebarNavItem";
const Sidebar = ({ sidebarNavItems }) => {
  return (
    <div className="uiDashboardSidebar">
      {sidebarNavItems.map((item) => (
        <SidebarNavItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Sidebar;
