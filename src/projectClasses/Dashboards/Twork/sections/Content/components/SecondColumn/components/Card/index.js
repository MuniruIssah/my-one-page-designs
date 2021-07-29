import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import MemberAvatar from "../../../MemberAvatar";

const Card = ({ timespan, title, joined, members }) => {
  return (
    <div className="secondColumnCard">
      <div className="strip header">
        <span>{timespan}</span>
          <FontAwesomeIcon icon={faEllipsisV} className="icon" />
      </div>
      <h3>{title}</h3>
      <div className="strip">
        <div className="membersList">
          {members.map((member) => (
            <MemberAvatar key={member.label} image={member.image} />
          ))}
        </div>
        {joined && <button className="joinedButton">You Joined</button>}
      </div>
    </div>
  );
};

export default Card;
