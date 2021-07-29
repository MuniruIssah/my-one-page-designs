import React from "react";
import Notification from "../../../../components/Notification";
import ProfileImage from "../../../../components/ProfileImage";
import twork from "../../../../assets/twork.png";
import "./styles.scss";
import SearchBar from "../../../../components/SearchBar";
const ContentHeader = () => {
  return (
    <header className="contentHeader">
      <SearchBar/>
      <Notification active />
      <ProfileImage image={twork} />
    </header>
  );
};

export default ContentHeader;
