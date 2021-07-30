import React from "react";
import ScroltNavItem from "./components/NavItem";
import "./styles.scss";
const ScroltNavigation = ({ list }) => {
  return (
    <div className="scroltNavigation">
      {list.map((item) => (
        <ScroltNavItem key={item.label} {...item} />
      ))}
    </div>
  );
};

export default ScroltNavigation;
