import React from "react";
import AnimepaheHeaderFirstSection from "./sections/FirstSection";
import AnimepaheHeaderSecondSection from "./sections/SecondSection";
import './styles.scss'
const FirstSectionList = ["#stayhome", "anime", "queue"];
const AnimepaheHeader = () => {
  return (
    <header className="animepaheHeader">
      <AnimepaheHeaderFirstSection list={FirstSectionList} />
      <AnimepaheHeaderSecondSection/>
    </header>
  );
};

export default AnimepaheHeader;
