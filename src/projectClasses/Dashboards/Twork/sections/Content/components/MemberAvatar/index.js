import React from "react";
import "./styles.scss";
const MemberAvatar = ({ image }) => {
  return (
    <div
      className="memberAvatar"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default MemberAvatar;
