import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import NavItem from "./components/NavItem";
import {
  faChartPie,
  faCog,
  faDiceFour,
  faMoneyBillAlt,
  faThLarge,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ProfileSection from "./components/ProfileSection";
import me from '../../assets/me.jpg'

//Sidebar Buttons

const SidebarButtons = [
  {
    label: "Home",
    icon: faThLarge,
  },
  {
    label: "Projects",
    icon: faTrophy,
  },
  {
    label: "Billing",
    icon: faMoneyBillAlt,
  },
  {
    label: "Team Members",
    icon: faUser,
  },
  {
    label: "Stats",
    icon: faChartPie,
  },
  {
    label: "Settings",
    icon: faCog,
  },
];

const GRFDSidebar = () => {
  return (
    <aside className="grfdSidebar">
      <FontAwesomeIcon icon={faDiceFour} className="sideBarLogo" />
      <div className="sidebarButtonWrapper">
        {SidebarButtons.map((SidebarButton) => (
          <NavItem key={SidebarButton.label} icon={SidebarButton.icon}>
            {SidebarButton.label}
          </NavItem>
        ))}
      </div>
      <ProfileSection image={me} />
    </aside>
  );
};

export default GRFDSidebar;
