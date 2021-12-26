import React from "react";
import HomelyHomeCard from "../../components/HomeCard";
import { dummyHomeList } from "../../utils";
import "./styles.scss";
const HomelyGridViewSection = ({ list = dummyHomeList }) => {
  return (
    <div className="homelyGridViewSection">
      {list.map((item, index) => (
        <HomelyHomeCard {...item} key={index} />
      ))}
    </div>
  );
};

export default HomelyGridViewSection;
