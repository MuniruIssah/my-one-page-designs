import React from "react";
import "./styles.scss";
import FirstColumn from "./sections/FirstColumn";
import SecondColumn from "./sections/SecondColumn";
import CircularButton from "../../../../components/CircularButton";
const DecorkContent = () => {
  return (
    <main className="decorkContent">
      <FirstColumn />
      <SecondColumn>
        <CircularButton color="#ff9136" size={80} fontSize={16}>
          <span style={{ fontWeight: "500" }}>
            add <br />
            to cart
          </span>
        </CircularButton>
      </SecondColumn>
    </main>
  );
};

export default DecorkContent;
