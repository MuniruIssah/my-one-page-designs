import {
  faBullhorn,
  faChartBar,
  faCog,
  faShoppingBag,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ScroltLogo from "./components/Logo";
import ScroltNavigation from "./components/Navigation";
import ScroltProfile from "./components/Profile";
import me from "../../assets/me.jpg";
import "./styles.scss";

//Navigation List
const NavigationList = [
  {
    label: "Analytics",
    icon: faChartBar,
  },
  {
    label: "Products",
    icon: faShoppingBag,
  },
  {
    label: "Customers",
    icon: faUsers,
  },
  {
    label: "Campaigns",
    icon: faBullhorn,
  },
  {
    label: "Settings",
    icon: faCog,
  },
];
const ScroltHeader = () => {
  return (
    <header className="scroltHeader">
      <ScroltLogo />
      <ScroltNavigation list={NavigationList} />
      <ScroltProfile image={me} />
    </header>
  );
};

export default ScroltHeader;
