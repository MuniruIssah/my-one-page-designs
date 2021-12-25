import {
  faAngleLeft,
  faAngleRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import CharacterCard from "../../components/CharacterCard";
import { dummyspCharacters } from "../../utils";
import "./styles.scss";
const MovieCharacterSection = ({ characters = dummyspCharacters }) => {
  const characterListRef = useRef();
  const scroll = (scrollOffset) => {
    characterListRef.current.scrollLeft += scrollOffset;
    console.log(characterListRef?.current?.scrollLeft)

  };
  return (
    <section className="movieCharacterSection">
      <div className="characterSectionHeader">
        <div className="heading">
          <div></div>
          <span>Character</span>
        </div>
        <div className="characterControls">
          <button disabled={characterListRef?.current?.scrollLeft===0} onClick={() => scroll(-210)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={() => scroll(210)}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="characterSectionInner" ref={characterListRef}>
        {characters.map((item, index) => (
          <CharacterCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MovieCharacterSection;
