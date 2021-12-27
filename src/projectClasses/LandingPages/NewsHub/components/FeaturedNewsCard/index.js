import React from "react";
import "./styles.scss";
import media from '../../assets/apartment2.jpg'

const NewsHubFeaturedNewsCard = ({
  image=media,
  headline = "Reprehenderit aute veniam dolore enim in ut commodo proident.",
  description = " Culpa irure nulla est dolor est. Ex aliqua adipisicing.",
}) => {
  return (
    <div className="newsHubFeaturedNewsCard">
      <div
        className="nhfncImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="nhfncDetails">
        <p>{headline}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsHubFeaturedNewsCard;
