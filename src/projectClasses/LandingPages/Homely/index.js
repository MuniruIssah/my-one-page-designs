import React from "react";
import HomelyResultSection from "./components/ResultsStrip";
import ActionSection from "./sections/ActionSection";
import HomelyGridViewSection from "./sections/GridViewSection";
import HomelyHeader from "./sections/Header";
import "./styles.scss";
const Homely = () => {
  return (
    <div className="homelyWrapper">
      <HomelyHeader />
      <HomelyResultSection number={178} location={"New York,US"} />
      <ActionSection />
      <HomelyGridViewSection />
    </div>
  );
};

export default Homely;
