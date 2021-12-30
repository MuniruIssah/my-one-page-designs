import React from "react";
import RocoHeadingAndDescription from "../../../../components/RocoHeadingAndDescription";
import RocoInterestButton from "../../../../components/RocoInterestButton";
import RocoUserOverviewProfileImage from "../../../../components/RocoUserOverviewProfileImage";
import "./styles.scss";
const RocoUserOverviewProfileAndInterests = ({
  name = "Sara Malkins",
  email = "sar.malkins@gmail.com",
  image,
  hours = 64,
  classes = 3,
  interests = [
    "App Design",
    "Front End",
    "Content",
    "Website Design",
    "Javascipt",
    "Css Frameworks",
    "Html",
    "Artificial Network",
  ],
  premium = true,
}) => {
  return (
    <div className="rocoUserOverviewProfileAndInterests">
      <RocoUserOverviewProfileImage image={image} premium={premium} />
      <div className="rocoUserOverviewProfileAndInterestsNameAndEmail">
        <span>{name}</span>
        <span>{email}</span>
      </div>
      <div className="rocoUserOverviewProfileAndInterestsHoursAndClasses">
        <RocoHeadingAndDescription heading={hours} description={"Hours"} />
        <RocoHeadingAndDescription heading={classes} description={"Classes"} />
      </div>
      <div className="rocoUserOverviewProfileAndInterestsInterests">
        <span>Interests</span>
        <div className="interestTagList">
        {interests.map((item, index) => (
          <RocoInterestButton key={index} label={item} starred={index===3} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default RocoUserOverviewProfileAndInterests;
