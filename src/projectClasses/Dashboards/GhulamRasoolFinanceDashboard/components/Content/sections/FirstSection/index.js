// import { faCompass, faEye } from "@fortawesome/free-regular-svg-icons";
import { faStore, faCompass, faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FilterButton from "../../components/FilterButton";
import LargeCard from "../../components/LargeCard";
import SearchBar from "../../components/SearchBar";
import SmallCard from "../../components/SmallCard";
import "./styles.scss";

const LargeCardList = [
  {
    icon: faEye,
    title: "Views",
    value: "500",
    rate: "Per Day",
  },
  {
    icon: faCompass,
    title: "Visits",
    value: "5000",
    rate: "Per Minutes",
  },
  {
    icon: faStore,
    title: "Orders",
    value: "5100",
    rate: "Per Day",
  },
];

const SmallCardList = [
  {
    title: "Sales",
    value: "$500",
    description: "Total Sales today",
    percent: 55,
    color:"lightbrown"
  },
  {
    title: "Profit",
    value: "$150",
    description: "Per day ratio",
    percent: 30,
    color:"lightgreen"
  },
  {
    title: "Orders",
    value: "5100",
    description: "Total Orders today",
    percent: 80,
    increasing: true,
    color:"lightblue"
  },
  {
    title: "Visits",
    value: "5100",
    description: "Total Visits today",
    percent: 70,
    increasing: true,
    color:"lightviolet"
  },
];
const GRFDFirstContentSection = () => {
  return (
    <div className="grfdFirstContentSection">
      <SearchBar />
      <GreetingAndFilter />
      <LargeCard contentList={LargeCardList} />
      <SmallCardGrid list={SmallCardList} />
    </div>
  );
};

export default GRFDFirstContentSection;

const GreetingAndFilter = () => {
  return (
    <div className="greetingAndFilter">
      <div className="greeting">
        <span>Hello David</span>
        <span>Welcome Back!</span>
      </div>
      <FilterButton />
    </div>
  );
};

const SmallCardGrid = ({ list }) => {
  return (
    <div className="smallCardGrid">
      {list.map((item) => (
        <SmallCard key={item.title} {...item} />
      ))}
    </div>
  );
};
