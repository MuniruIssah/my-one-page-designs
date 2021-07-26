import React from "react";
import AnimepaheHeader from "../../components/AnimepaheHeader";
import './styles.scss'
const AnimepaheLayoutWithHeader = ({children}) => {
  return (
    <div className="animepaheLayoutWithHeader"> 
      <AnimepaheHeader />
      {children}
    </div>
  );
};

export default AnimepaheLayoutWithHeader;
