import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import NewsHubLogo from "../../components/NewsHubLogo";
import NewsHubSelectLink from "../../components/SelectLink";
import "./styles.scss";
const NewsHubHeaderSection = () => {
  return (
    <div className="newsHubHeaderSectionWrapper">
      <div className="newsHubLogoAndLinks">
        <NewsHubLogo />
        <NewsHubSelectLink label={"NEWS"} />
        <NavLink to='/newshub' activeClassName="activeNewsHubLink">POLITICS</NavLink>
        <NavLink to='/newshub' activeClassName="activeNewsHubLink">BUSINESS</NavLink>
        <NavLink to='/newshub' activeClassName="activeNewsHubLink">HEALTH</NavLink>
        <NavLink to='/newshub' activeClassName="activeNewsHubLink">ENTERTAINMENT</NavLink>
        <NavLink to='/newshub' activeClassName="activeNewsHubLink">SPORTS</NavLink>
        <NewsHubSelectLink label={"MORE"} />
      </div>
      <div className="newsHubSearchAndAuth">
        <FontAwesomeIcon icon={faSearch} style={{fontSize:15,marginRight:'2rem'}} />
        <div>
          <button> Login</button>/
          <button> Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NewsHubHeaderSection;
