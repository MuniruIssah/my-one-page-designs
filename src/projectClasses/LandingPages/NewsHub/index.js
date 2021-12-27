import React from "react";
import NewsHubFeaturedNews from "./sections/FeaturedNews";
import NewsHubHeaderSection from "./sections/Header";
import NewsHubLatestNewsSection from "./sections/LatestNews";
import "./styles.scss";
const NewsHub = () => {
  return (
    <div className="newsHubWrapper">
      <NewsHubHeaderSection />
      <NewsHubLatestNewsSection/>
      <NewsHubFeaturedNews/>
    </div>
  );
};

export default NewsHub;
