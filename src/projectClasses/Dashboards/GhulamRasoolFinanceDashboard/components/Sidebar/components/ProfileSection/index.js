import React from "react";
import "./styles.scss";
const ProfileSection = ({image}) => {
  return (
    <div className="profileSection">
      <div className="avatar">
        <div className="avatarImage" style={{backgroundImage:`url(${image})`}}></div>
        <div className="online"></div>
      </div>
      <span className="profileName">Muniru Issah</span>
    </div>
  );
};

export default ProfileSection;
