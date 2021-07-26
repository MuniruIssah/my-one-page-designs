import React from "react";
import "./styles.scss";
import anime from "./../../assets/anime.jpg";
import AnimepaheLayoutWithHeader from "../../layouts/AnimepaheLayoutWithHeader";
import AnimepaheMainPlayerView from "./components/Player";
import AnimepaheWebviewDetailsSection from "./components/DetailsSection";
import AnimepaheDropdownStrip from "./components/DropdownStrip";
const details = {
  title: "Shingeki no Kyogin",
  episode: 1,
  status: "Finished Airing",
  season: "Summer 2019",
  image: anime,
};
const dropdownList = [
  {
    label: "kwik",
    list: [],
  },
  {
    label: "Episode 3",
    list: [],
  },
  {
    label: "SubsPlease-360p",
    list: [],
  },
  {
    label: "Download",
    list: [],
  },
];
const AnimepaheWebPlayerView = () => {
  return (
    <AnimepaheLayoutWithHeader>
      <AnimepaheMainPlayerView />
    <FlexWrapper>
      <AnimepaheDropdownStrip dropdownList={dropdownList} />
    </FlexWrapper>
      <FlexWrapper>
        <AnimepaheWebviewDetailsSection {...details} />
      </FlexWrapper>
    </AnimepaheLayoutWithHeader>
  );
};

export default AnimepaheWebPlayerView;

const FlexWrapper = ({ children }) => (
  <div style={{ display: "flex" }}>{children}</div>
);
