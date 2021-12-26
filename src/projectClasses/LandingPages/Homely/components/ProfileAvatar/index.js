import React, { useState } from "react";
import "./styles.scss";
import me from "../../assets/me.jpg";
const HomelyProfileAvatar = ({ image = me }) => {
  const [online, setOnline] = useState(true);
  return (
    <div
      className="homelyProfileAvatarWrapper"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`activeUser ${online ? "online" : ""}`}></div>
    </div>
  );
};

export default HomelyProfileAvatar;
