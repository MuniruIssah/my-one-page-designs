import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";
const RocoStudentListItem = ({
  image,
  name = "Sara Malkins",
  hourSpent = 48,
  books = 10,
  online=true,
}) => {
  return (
    <div className="rocoStudentListItem">
      <div className="rsliImage" style={{ backgroundImage: `url(${image})` }}>
        {online && <div className="rsliOnlineIndicator"></div>}
      </div>
      <div className="rsliDetails">
        <span className="rslidName">{name}</span>
        <div>
          <span>{hourSpent} h</span> &nbsp; &nbsp;|
          <span>
            &nbsp; &nbsp;
            {books}
            &nbsp;
            <FontAwesomeIcon icon={faBook} style={{ fontSize: 10 }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RocoStudentListItem;
