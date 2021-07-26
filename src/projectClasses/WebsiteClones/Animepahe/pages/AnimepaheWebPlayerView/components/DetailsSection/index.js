import React from "react";
import "./styles.scss";
const AnimepaheWebviewDetailsSection = ({
  title,
  episode,
  status,
  season,
  image,
}) => {
  return (
    <div className="animepaheWebviewDetailsSection">
      <div
        className="detailsImageDiv"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="detailsInfoDiv">
        <div className="titleAndEpisode">
          <span className="animepaheWdetailsTitle">{title}</span>&nbsp;
          <span className="episodeNumber"> - {episode}</span>
        </div>
        <span className="animeMisc">{status}</span>
        <span className="animeMisc">{season}</span>
      </div>
    </div>
  );
};

export default AnimepaheWebviewDetailsSection;
