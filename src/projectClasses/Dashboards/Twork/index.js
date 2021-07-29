import React from "react";
import Sidebar from "./sections/Sidebar";
import Content from "./sections/Content";
import {
  faClipboardCheck,
  faClipboardList,
  faCog,
  faInbox,
  faScroll,
  faThLarge,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import SidebarNavItem from "./components/SidebarNavItem";

const SideBarProps=[
  {
    label:"Dashboard",
    icon:faThLarge
  },
  {
    label:"Project",
    icon:faScroll
  },  {
    label:"My Task",
    icon:faClipboardList,
    notificationCount:15,
  },  {
    label:"Upcoming",
    icon:faThLarge
  },  {
    label:"Trash",
    icon:faTrashAlt
  },
  {
    label:"Settings",
    icon:faCog
  },
]


const TWorkDashboard = () => {
  return (
    <div className="tWorkDashboard">
      <Sidebar>
       {SideBarProps.map(sidebarProp=><SidebarNavItem {...sidebarProp}>{sidebarProp.label}</SidebarNavItem>)}
       </Sidebar>
      <Content></Content>
    </div>
  );
};

export default TWorkDashboard;

