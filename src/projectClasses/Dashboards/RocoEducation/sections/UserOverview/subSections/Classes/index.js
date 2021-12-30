import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RocoClassCard from "../../../../components/RocoClassCard";
const RocoUserOverviewClasses = ({
  name = "Sara Malkins",
  classes = [
    {
      level: "Advanced",
      time: "20 hours",
      backgroundColor:'#7CB9E8',
      title: "Neural Networks and Deep Learning",
      ratings: 4.5,
    },
    {
      level: "Intermediate",
      time: "17 hours",
      backgroundColor:'#32174d',
      ratings: 4.5,
      title: "HTML, CSS, and Javascript",
    },
    {
      level: "Intermediate",
      ratings: 4.5,
      time: "10 hours",
      backgroundColor:'#8f00ff',
      title: "The Bits of Computer Networking",
    },
  ],
}) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="rocoUserOverviewClasses">
      <div className="rocoUserOverviewClassesHeader">
        <span>{firstName}'s classes</span>
        <FontAwesomeIcon icon={faSearch} style={{fontSize:17,fontWeight:'normal',color:'#9f9f9e'}} />
      </div>
      <div className="rocoUserOverviewClassesMain">
        {classes.map((item, index) => (
          <RocoClassCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RocoUserOverviewClasses;
