import React from "react";
import GRFDFirstContentSection from "./sections/FirstSection";
import GRFDSecondContentSection from "./sections/SecondSection";
import {
  faPercent,
  faUser,
  faDatabase,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const SideContentList = [
  {
    icon: faPercent,
    title: "Views",
    value: "500",
  },
  {
    icon: faUser,
    title: "Visits",
    value: "5000",
    rate: "Per Minutes",
  },
  {
    icon: faDatabase,
    title: "Orders",
    value: "5100",
  },
  {
    icon: faChartPie,
    title: "Orders",
    value: "5100",
  },
];

const GRFDContent = () => {
  return (
    <main className="grfdContent">
      <GRFDFirstContentSection />
      <GRFDSecondContentSection list={SideContentList} />
    </main>
  );
};

export default GRFDContent;
