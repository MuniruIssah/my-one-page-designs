import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MemberAvatar from '../../../../components/MemberAvatar'
import React from "react";
import "./styles.scss";
const Card = ({ title, members, progress, days }) => {
  return (
    <div className="firstColumnCard">
      <h3 style={{lineHeight:0.5}}>{title}</h3>
      <div className="membersList">
        {members.map((member) => (
          <MemberAvatar key={member.label} image={member.image} />
        ))}
      </div>
      <div className="progressStrip">
          <progress max='10' value={progress} min="0" />
          {progress===10?<FontAwesomeIcon icon={faCheckCircle} className="icon" />:<FontAwesomeIcon icon={faCircle} className="icon" />}
      </div>
      <div className="miscStrip">
          <span>{days}</span>
          <span>5/5</span>
      </div>
    </div>
  );
};

export default Card;
