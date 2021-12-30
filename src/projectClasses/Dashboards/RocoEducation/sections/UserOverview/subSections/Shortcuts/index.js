import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RocoShortcutItem from "../../../../components/RocoShortcutItem";
import "./styles.scss";
const RocoUserOverviewShortcuts = () => {
  return (
    <div className="rocoUserOverviewShortcutsWrapper">
      <div className="rocoUserOverviewShortcutsInner">
        <div className="rocoUserOverviewShortcutsHeader">
          <span>Shortcuts</span>
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <p className="rocoUserOverviewShortcutsDescription">
          Shortcuts is a quick way to
          <br />
          get most useful actions
          <br />
          and suggestions in one
          <br />
          place. It adapts while
          <br />
          using the app.
        </p>
        <div className="rocoUserOverviewShortcutsList">
          <RocoShortcutItem label={<>Open <br/>payments</>} />
          <RocoShortcutItem label={<>Offer<br/> promotion</>} />
          <RocoShortcutItem label={<>Student<br/> analytics</>} />
        </div>
        <button>
          More <FontAwesomeIcon icon={faAngleRight} style={{marginLeft:"0.5rem" ,fontSize:10}} />
        </button>
      </div>
    </div>
  );
};

export default RocoUserOverviewShortcuts;
