import React from "react";
import AnimepaheLayoutWithHeader from "../../layouts/AnimepaheLayoutWithHeader";
import { AnimeLatestEpisodeList } from "../../utils/animePaheUtilities";
import LatestAnimeCard from "./components/LatestAnimeCard";
import Pagination from "./components/Pagination";
import "./styles.scss";
const AnimepaheHomePage = () => {
  return (
    <AnimepaheLayoutWithHeader>
      <div className="animepaheHomepage">
        <span className="latestHeader">Latest Releases</span>
        <div className="animepaheHomepageGrid">
          {AnimeLatestEpisodeList.map((item) => (
            <LatestAnimeCard {...item} />
          ))}
        </div>
        <Pagination/>
      </div>
    </AnimepaheLayoutWithHeader>
  );
};

export default AnimepaheHomePage;
