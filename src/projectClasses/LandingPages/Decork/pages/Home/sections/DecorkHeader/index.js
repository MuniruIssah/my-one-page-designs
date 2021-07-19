import React from "react";
import { Links } from "../../../../utils/constants";
import DecorkHeaderFirstSection from "./sections/FirstSection";
import DecorkHeaderSecondSection from "./sections/SecondSection";
import DecorkHeaderThirdSection from "./sections/ThirdSection";
import CircularButton from "../../../../components/CircularButton";
import RoundedEdgeButton from "../../../../components/RoundedEdgeButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
const DecorkHeader = () => {
  return (
    <header className="decorkHeader">
      <DecorkHeaderFirstSection title="decork" />
      <DecorkHeaderSecondSection links={Links} />
      <DecorkHeaderThirdSection>
        <RoundedEdgeButton label="My Account" />
        <CircularButton color="black" size={35} fontSize={15}>
          <FontAwesomeIcon icon={faCartPlus} />
        </CircularButton>
      </DecorkHeaderThirdSection>
    </header>
  );
};

export default DecorkHeader;

