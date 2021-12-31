import React from "react";
import BaseBottomSection from "./sections/BottomSection";
import BaseTopSection from "./sections/TopSection";
import "./styles.scss";
const Base = () => {
  return (
    <div className="baseWrapper">
      <BaseTopSection />
      <BaseBottomSection />
    </div>
  );
};

export default Base;
