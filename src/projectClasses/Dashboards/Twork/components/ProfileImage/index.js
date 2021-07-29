import React from "react";
import "./styles.scss";
const ProfileImage = ({ image }) => {
  return (
    <div
      className="profileImage"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default ProfileImage;
