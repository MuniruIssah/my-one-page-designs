import React from "react";
import MomatuHeader from "./components/MomatuHeader";
import HeaderContentAndExtras from "./components/MomatuSections/HeaderContentAndExtras";
import TwoColumnCardsSection from "./components/MomatuSections/TwoColumCardsSection";
import jacket from "./assets/jacket.webp";
import "./styles.scss";

const Momatu = () => {
  return (
    <div className="momatu">
      <div className="topSection">
        <MomatuHeader />
        <HeaderContentAndExtras
          heading={"HOW IT WORKS"}
          content={
            <span>
              It's time to fill up your <br /> memories
            </span>
          }
        >
          <button className="momatuButton momatuViolet">Learn More</button>
        </HeaderContentAndExtras>
      </div>
      <div className=" momatuRelative">
        <TwoColumnCardsSection image={jacket}>
          <span>GETTING STARTED</span>
          <ul>
            <li>
              <span>Download the Momatu app</span>
              <p>
                Momatu app is available in <u>AppStore</u>
                <br /> and <u>GooglePlay</u>
              </p>
            </li>
            <li>
              <span>Download the Momatu app</span>
              <p>To create ana account, simply fill in the <br/> registration form</p>
            </li>
            <li>
              <span>Download the Momatu app</span>
              <p>See <u>how to add a family member</u></p>
            </li>
            <li>
              <span>Download the Momatu app</span>
              <p>See <u>how to upload images and <br/> videos</u> or <u>start a video chat</u></p>
            </li>
          </ul>
        </TwoColumnCardsSection>
      </div>
      <HeaderContentAndExtras
        heading={"HOW IT WORKS"}
        content={<span>A little extra help</span>}
      >
        <p className="momatuParagragh">
          It may be a bit confusing the first time so we've put together some
          instructions if <br /> you need a little extra help.
        </p>
      </HeaderContentAndExtras>
    </div>
  );
};

export default Momatu;
