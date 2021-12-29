import {
  faCalendar,
  faClock,
  faHeart,
  faUsers,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IconHeadingAndDescription from "../../components/IconHeadingAndDescription";
import PrismLocation from "../../components/Location";
import OfferTimeLeft from "../../components/OfferTimeLeft";
import PrismPostedBy from "../../components/PostedBy";
import PrismPrice from "../../components/Price";
import PrismGrabButton from "../../components/PrismButton";
import PrismRatingsSection from "../../components/RatingsSection";
import "./styles.scss";
const PrismMainSection = ({ heading, image, children }) => {
  let character = `<`;
  return (
    <section className="prismMainSection">
      <header className="prismMainSectionHeader">
        <button>{character} Back to search results</button>
      </header>
      <div className="prismTwoColumnView">
        <div className="prismFirstColumn">
          <h1>{heading}</h1>
          <div
            className="prismMainSectionImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="prismLikeAndShare">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "red", fontSize: 25, marginRight: "1rem" }}
            />
            <FontAwesomeIcon
              icon={faShareNodes}
              style={{ color: "#191919", fontSize: 25, marginRight: "1rem" }}
            />
          </div>
          <p>{children}</p>
        </div>
        <div className="prismSecondColumn">
          <div>
            <PrismPrice
              currentPrice={0.0}
              originalPrice={99.0}
              discount={100}
            />
            <PrismGrabButton />
            <OfferTimeLeft minutes={"3.01"} />
          </div>
          <div className="iconDivStrips">
            <IconHeadingAndDescription
              heading={31}
              description={"Dec 2021"}
              color="lightgreen"
              icon={
                <FontAwesomeIcon
                  style={{ fontSize: 20, color: "#6f4dff" }}
                  icon={faCalendar}
                />
              }
            />
            <IconHeadingAndDescription
              heading={"8PM"}
              description={"1st"}
              color="#6f4dff"
              icon={
                <FontAwesomeIcon
                  style={{ fontSize: 20, color: "pink" }}
                  icon={faClock}
                />
              }
            />
            <IconHeadingAndDescription
              heading={"FREE"}
              description={"Unlimited"}
              color="violet"
              icon={
                <FontAwesomeIcon
                  style={{ fontSize: 20, color: "black" }}
                  icon={faUsers}
                />
              }
            />
          </div>
          <PrismLocation
            heading={"Rohini"}
            description={"Sector 10, B-22, New Delhi"}
          />
          <div>
            <PrismPostedBy name={"Crowne Plaza"} location={"India"} />
            <PrismRatingsSection ratings={4.8} numberOfRatings={"36,028"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrismMainSection;
