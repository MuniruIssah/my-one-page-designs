import React from "react";
import WaxotCard from "../../components/Card";
import { dummyCardsList } from "../../utils";
import './styles.scss'
const WaxotCardSection = () => {
  return (
    <section className="waxotCardSection">
      <div className="waxotCardWrapper">
        {dummyCardsList.map((item, index) => (
          <WaxotCard key={index} {...item} />
        ))}
      </div>

      <div className="violetBackground"></div>
    </section>
  );
};

export default WaxotCardSection;
