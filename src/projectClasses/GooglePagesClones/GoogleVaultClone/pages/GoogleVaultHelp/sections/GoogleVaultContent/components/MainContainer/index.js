import { faCaretDown, faCaretUp,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const MainContainer = ({ list }) => {
  return (
    <div className="mainContainer">
      {list.map((item) => (
        <details key={item.title}>
          <summary>
            <span>{item.title}</span>
            <FontAwesomeIcon className="mainContentOpenIcon" icon={faChevronDown} />
          </summary>
          {item.description}
        </details>
      ))}
    </div>
  );
};

export default MainContainer;
