import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './styles.scss';
const AnimepaheSearchBar = () => {
  const [active, setActive] = useState(false)
  return (
    <div className={`animepaheSearchBar ${active?'active':''}`}>
      <FontAwesomeIcon className="animepaheIcon" icon={faSearch} />
      <input onFocus={()=>setActive(true)} onBlur={()=>setActive(false)} className="animepaheSearchInput" placeholder="Search" />
    </div>
  );
};

export default AnimepaheSearchBar;
