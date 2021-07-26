import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimepahePlayerMainSection from "./components/PlayerMain";
import "./styles.scss";

const AnimepaheMainPlayerView = () => {
  return (
    <div className="playerWrapper">
      <div className="playerDiv rightControl">
        <FontAwesomeIcon icon={faChevronLeft} className="webcontrol" />
      </div>
      <div className="playerDiv">
        <AnimepahePlayerMainSection />
      </div>
      <div className="playerDiv leftControl">
        <FontAwesomeIcon icon={faChevronRight} className="webcontrol" />
      </div>
    </div>
  );
};

export default AnimepaheMainPlayerView;
