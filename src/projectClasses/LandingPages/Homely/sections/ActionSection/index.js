import React from "react";
import MoreButton from "../../components/MoreButton";
import HomelySearchBar from "../../components/SearchBar";
import HomelySelect from "../../components/Select";
import HomelySort from "../../components/Sort";
import HomelyToggle from "../../components/Toggle";
import "./styles.scss";
const ActionSection = () => {
  return (
    <div className="homelyActionSection">
    <div className="homelyActionSectionInner">
      <HomelySearchBar />
      <HomelySelect placeholder="Any Price" />
      <HomelySelect placeholder="2-4 Beds" selected />
      <HomelySelect placeholder="All Types" />
      <MoreButton />
      </div>
      <div className="homelyActionSectionInner"> 
        <HomelyToggle label={"Family mode"} info />
        <HomelyToggle label={"Map View"} />
        <HomelySort />
      </div>
    </div>
  );
};

export default ActionSection;
