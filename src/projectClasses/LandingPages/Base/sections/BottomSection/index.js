import React from "react";
import BaseBottomSectionCard from "../../components/BottomSectionCard";
import "./styles.scss";
const BaseBottomSection = ({
  list = [
    { value: 75, label: "Seed Investors" },
    { value: `$2MM`, label: "Raised" },
    {
      value: "69%",
      label: (
        <>
          Tokens For The
          <br /> Community
        </>
      ),
    },
    { value: `$10MM`, label: "Current Valuation" },
  ],
}) => {
  return (
    <section className="baseBottomSection">
      {list.map((item, index) => (
        <BaseBottomSectionCard key={index} {...item} />
      ))}
    </section>
  );
};

export default BaseBottomSection;
