import React from "react";
import PrismAlert from "./components/Alert";
import PrismMainSection from "./sections/MainSection";
import PrismHeader from "./sections/PrismHeader";
import "./styles.scss";
const Prism = () => {
  return (
    <div className="prismWrapper">
      <PrismHeader />
      <PrismAlert />
      <PrismMainSection
        heading={
          "Magna deserunt est incididunt aute anim laborum pariatur cillum pariatur ut."
        }
      >
        Nostrud dolor commodo exercitation ut non minim culpa officia occaecat.
        Ad adipisicing ipsum irure ex reprehenderit nostrud mollit excepteur
        excepteur consectetur aliquip quis. Commodo aliqua ad sint magna.
        <br/>
        <br/>
        deserunt fugiat eiusmod ut aute. Occaecat in ullamco nisi ad veniam
        dolor et cupidatat cillum esse esse ipsum pariatur exercitation. Ipsum
        amet cillum id amet nostrud sunt nisi ad Lorem commodo sunt quis mollit.
      </PrismMainSection>
    </div>
  );
};

export default Prism;
