import React from "react";
import AnimepaheHeaderButton from "./components/HeaderButton";
import "./styles.scss";
const AnimepaheHeaderFirstSection = ({ list }) => {
  return (
    <div className="animepaheHeaderFirstSection">
      <span className="animepaheLogo">
        anime<span className="animepaheRed">pahe</span>
      </span>
      <div className="animepaheHeaderButtonList">
        {list.map((item) => (
          <AnimepaheHeaderButton key={item}>{item}</AnimepaheHeaderButton>
        ))}
      </div>
    </div>
  );
};

export default AnimepaheHeaderFirstSection;
