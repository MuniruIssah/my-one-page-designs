import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
const AnimepaheDropdown = ({ children, list }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="animepaheDropdown"
      >
        <span>{children}</span>
        {/* <FontAwesomeIcon icon={faSortDown} /> */}
        {showPopup && (
          <div
            style={{
              position: "absolute",
              top: -25,
              left: 0,
              width: "100%",
              zIndex: 10,
              height:'auto',
              backgroundColor: "white",
              color: "green",
            }}
          >
            Popup
          </div>
        )}
      </button>
    </>
  );
};

export default AnimepaheDropdown;
