import React from "react";
import "./styles.scss";
import media from "../../assets/apartment2.jpg";
const NewsHubLatestNewsCard = ({
  image = media,
  headline = "Magna exercitation est non excepteur.",
  description = "Exercitation nostrud dolor elit magna fugiat enim non ex. Elit aliqua incididunt elit exercitation nostrud laborum officia laboris. Officia duis amet adipisicing aliqua. Est adipisicing id tempor ea elit adipisicing dolor cupidatat ex dolore consequat qui consequat.",
  tag = "BUSINESS",
  createdAt = "5h",
  mini,
}) => {
  return (
    <div className="newsHubLatestNewsCard">
      <div
        className="nhlncImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="nhlncDetailsWrapper">
        <p className="nhlncHeadline">{headline} </p>
        <p className="nhlncDescription">{description}</p>
        <div className="nhlncFooter">
          <span>{tag}</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;{createdAt} ago </span>
        </div>
      </div>
    </div>
  );
};

export default NewsHubLatestNewsCard;

export const ImageAndHeadlineCard = ({
  image = media,
  headline = "Magna exercitation est non excepteur.",
  tag = "BUSINESS",
  createdAt = "5h",
}) => {
  return (
    <div className="imageAndHeadlineCard">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="nhlncDetailsWrapper">
        <p className="nhlncHeadline">{headline} </p>
        <div className="nhlncFooter">
        <span>{tag}</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;{createdAt} ago </span>
        </div>
      </div>
    </div>
  );
};
export const HeadlineAndDescriptionCard = ({
  headline = "Magna exercitation est non excepteur.",
  description = "Exercitation nostrud dolor elit magna fugiat enim non ex. Elit aliqua incididunt elit exercitation nostrud laborum officia laboris. Officia duis amet adipisicing aliqua. Est adipisicing id tempor ea elit adipisicing dolor cupidatat ex dolore consequat qui consequat.",
  tag = "BUSINESS",
  createdAt = "5h",
}) => {
  return (
    <div className="headlineAndDescriptionCard">
      <div className="nhlncDetailsWrapper">
        <p className="nhlncHeadline">{headline} </p>
        <p className="nhlncDescription">{description}</p>
        <div className="nhlncFooter">
        <span>{tag}</span><span>&nbsp;&nbsp;|&nbsp;&nbsp;{createdAt} ago </span>
        </div>
      </div>
    </div>
  );
};
