import React from "react";
import ScroltContent from "./components/Content";
import ScroltHeader from "./components/Header";
import "./styles.scss";
const ScroltDashboard = () => {
  return (
    <div className="scroltDashboard">
      <ScroltHeader />
      <ScroltContent/>
    </div>
  );
};

export default ScroltDashboard;
