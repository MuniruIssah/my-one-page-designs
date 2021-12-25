import {
  faAngleLeft,
  faAngleRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CharacterCard from "../../components/CharacterCard";
import { dummyspCharacters } from "../../utils";
import "./styles.scss";
const MovieCharacterSection = ({ characters = dummyspCharacters }) => {
  return (
    <section className="movieCharacterSection">
      <div className="characterSectionHeader">
        <div className="heading">
          <div></div>
          <span>Character</span>
        </div>
        <div className="characterControls">
          <button>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="characterSectionInner">
        {characters.map((item, index) => (
          <CharacterCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MovieCharacterSection;
