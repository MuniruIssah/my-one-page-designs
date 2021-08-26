
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles.scss";
const ContentWithSidebar = ({ sidebarNavItems, contentItems }) => {
  return (
    <div className="uiDashboardContentWithSidebarAndHeader">
      <Header />
      <div className="uiDashboardContentWithSidebar">
        <Sidebar sidebarNavItems={sidebarNavItems} />
        <Content contentPages={contentItems}/>
      </div>
    </div>
  );
};

export default ContentWithSidebar;
