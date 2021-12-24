import React from "react";
import WaxotHeader from "./components/Header";
import WaxotCardSection from "./sections/CardSection";
import WaxotHeadingSection from "./sections/HeadingSection";
import "./styles.scss";
const Waxot = () => {
  return (
    <div className="waxotWrapper">
      <WaxotHeader />
      <WaxotHeadingSection />
      <WaxotCardSection />
    </div>
  );
};

export default Waxot;
