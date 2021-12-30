import React from "react";
import RocoUserOverviewHeader from "../../components/RocoUserOverviewHeader";
import "./styles.scss";
import RocoUserOverviewClasses from "./subSections/Classes";
import RocoUserOverviewProfileAndInterests from "./subSections/ProfileAndInterests";
import RocoUserOverviewShortcuts from "./subSections/Shortcuts";
const RocoUserOverviewSection = () => {
  return (
    <section className="rocoUserOverviewSection">
      <RocoUserOverviewHeader />
      <div className="rocoUserOverviewSectionMain">
        <RocoUserOverviewProfileAndInterests />
        <RocoUserOverviewClasses />
        <RocoUserOverviewShortcuts />
      </div>
    </section>
  );
};

export default RocoUserOverviewSection;
