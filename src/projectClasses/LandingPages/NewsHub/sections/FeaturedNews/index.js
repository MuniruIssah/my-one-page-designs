import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NewsHubFeaturedNewsCard from "../../components/FeaturedNewsCard";
import './styles.scss'
const NewsHubFeaturedNews = ({ list = [1,2,3,4] }) => {
  return (
    <section className="nhfnWrapper">
      <div className="nhfnHeader">
        <span>Featured News</span>
        <div>
          <button>
            <FontAwesomeIcon icon={faLongArrowAltLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </button>
        </div>
      </div>
      <div className="nhfnList">
        {list.map((item, index) => (
          <NewsHubFeaturedNewsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsHubFeaturedNews;
