import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faRedo, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
const AnimepahePlayerMainSection = () => {
  return (
    <div className="animepahePlayerMainSection">
      <FontAwesomeIcon className="apmsIcon" icon={faRedoAlt} />
      <span>Click to load</span>
    </div>
  );
};

export default AnimepahePlayerMainSection;
