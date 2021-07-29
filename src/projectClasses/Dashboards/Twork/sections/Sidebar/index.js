import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import twork from "../../assets/twork.png";
import "./styles.scss";
import { faMobile, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ children }) => {
  return (
    <aside className="tWorkSidebar">
      <div className="logo" style={{ backgroundImage: `url(${twork})` }}></div>
      {children}
      {/* <button className="logoutButton">
        <FontAwesomeIcon icon={faMobile}/>
        Log out
        </button> */}
    </aside>
  );
};

export default Sidebar;
