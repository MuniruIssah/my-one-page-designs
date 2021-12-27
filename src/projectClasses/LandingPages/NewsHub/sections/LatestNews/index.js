import React from "react";
import NewsHubLatestNewsCard, { HeadlineAndDescriptionCard, ImageAndHeadlineCard } from "../../components/LatestNewsCard";
import "./styles.scss";
const NewsHubLatestNewsSection = () => {
  return (
    <section className="latestNewsWrapper">
      <h1>Latest News</h1>
      <div className="latestNewsGrid">
        <NewsHubLatestNewsCard />
        <div className="latestNewsMiddle">
          <HeadlineAndDescriptionCard />
          <ImageAndHeadlineCard />
        </div>

        <NewsHubLatestNewsCard />
      </div>
    </section>
  );
};

export default NewsHubLatestNewsSection;
