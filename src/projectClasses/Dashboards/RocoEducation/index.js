import React from "react";
import RocoAlphabeticUserSection from "./sections/AlphabeticUserSection";
import RocoNavigationSection from "./sections/NavigationSection";
import RocoUserOverviewSection from "./sections/UserOverview";
import "./styles.scss";
const RocoEducation = () => {
  return (
    <div className="rocoEducationWrapper">
      <RocoNavigationSection />
      <RocoAlphabeticUserSection />
      <RocoUserOverviewSection/>
    </div>
  );
};

export default RocoEducation;
