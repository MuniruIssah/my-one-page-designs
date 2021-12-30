import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RocoLogo from "../../components/RocoLogo";
import "./styles.scss";
import {
  faComment,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faCodeMerge,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
const RocoNavigationSection = () => {
  return (
    <div className="rocoNavigationSection">
      <RocoLogo />
      <div className="rocoNavMain">
        <NavLink to="/roco" activeClassName="activeRocoNav">
          <FontAwesomeIcon icon={faUser} />{" "}
        </NavLink>
        <NavLink to="/roco/file" activeClassName="activeRocoNav">
          <FontAwesomeIcon icon={faFileLines} />
        </NavLink>
        <NavLink to="/roco/merge" activeClassName="activeRocoNav">
          <FontAwesomeIcon icon={faCodeMerge} />
        </NavLink>
        <NavLink to="/roco/comments" activeClassName="activeRocoNav">
          <FontAwesomeIcon icon={faComment} />
        </NavLink>
        <NavLink to="/roco/settings" activeClassName="activeRocoNav">
          <FontAwesomeIcon icon={faGear} />
        </NavLink>
      </div>

      <NavLink
        to="/roco"
        className="rocoNavFooterLogout"
        activeClassName="activeRocoNav"
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </NavLink>
    </div>
  );
};

export default RocoNavigationSection;
