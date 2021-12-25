import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
const SomeonesMarvelHeader = () => {
  return (
    <header className="someonesMarvelHeader">
      <div className="someonesMarvelLogo"></div>
      <ul>
        <NavLink to="/marvel" activeClassName="activeSomeonesMarvelLink">
          Home
        </NavLink>
        <NavLink to="/marvel" activeClassName="activeSomeonesMarvelLink">
          Character
        </NavLink>
        <NavLink to="/marvel" activeClassName="activeSomeonesMarvelLink">
          History
        </NavLink>
        <NavLink to="/marvel" activeClassName="activeSomeonesMarvelLink">
          Comics
        </NavLink>
        <NavLink to="/marvel" activeClassName="activeSomeonesMarvelLink">
          Game
        </NavLink>
        <NavLink to="/marvel" activeClassName="activeSomeonesMarvelLink">
          News
        </NavLink>
      </ul>
      <div className="searchAndAuth">
        <div>
          <FontAwesomeIcon icon={faSearch} style={{ fontSize: 18 }} />
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: 7 }} />
            <span>Sign In</span>
          </button>
          <button>Join</button>
        </div>
      </div>
    </header>
  );
};

export default SomeonesMarvelHeader;
