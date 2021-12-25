import React from "react";
import SomeonesMarvelHeader from "./components/Header";
import MovieCharacterSection from "./sections/CharacterSection";
import CurrentMovieSection from "./sections/CurrentMovieSection";
import "./styles.scss";
const SomeonesMarvel = () => {
  return (
    <div className="someonesMarvelWrapper">
      <SomeonesMarvelHeader />
      <CurrentMovieSection/>
      <MovieCharacterSection/>
    </div>
  );
};

export default SomeonesMarvel;
