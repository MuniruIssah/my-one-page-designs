import React from "react";
import ContentHeader from "./components/ContentHeader";
import FirstColumn from "./components/FirstColumn";
import SecondColumn from "./components/SecondColumn";
import "./styles.scss";
const Content = () => {
  return (
    <main className="tWorkContent">
      <ContentHeader />
      <MainContentGrid>
        <FirstColumn />
        <SecondColumn />
      </MainContentGrid>
    </main>
  );
};

export default Content;

const MainContentGrid = ({ children }) => {
  return <div className="mainContentGrid">{children}</div>;
};
