import React from "react";
import "./styles.scss";
import GRFDSidebar from "./components/Sidebar";
import GRFDContent from "./components/Content";
const GhulamRasoolFinanceDashboard = () => {
  return (
    <div className="grfd">
      <GRFDSidebar />
      <GRFDContent />
    </div>
  );
};

export default GhulamRasoolFinanceDashboard;
