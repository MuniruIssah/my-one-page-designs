import React from "react";
import "./styles.scss";
const CurrentMovieSection = () => {
  return (
    <section className="currentMovieSection">
      <div className="cmsContent">
        <div>
          <h1>SPIDER-MAN</h1>
          <h2>No Way Home 2021</h2>
        </div>
        <div>
          <div className="cmsStrip">
            <div className="cmsTitleAndDescription">
              <span>DIRECTED BY</span>
              <span>John Watts</span>
            </div>
            <div className="cmsTitleAndDescription">
              <span>CAST</span>
              <span>
                Tom Holland, Zendaya,
                <br /> Jacob Batalon
              </span>
            </div>
          </div>
          <div className="cmsStrip">
            <div className="cmsTitleAndDescription">
              <span>RELEASE DATE</span>
              <span>December 17 , 2021</span>
            </div>
            <div className="cmsTitleAndDescription">
              <span className="imdb">IMDB</span>
              <span>9.0/10</span>
            </div>
          </div>
        </div>
        <div className="cmsbuttonSection">
          <button>Watch Now</button>
          <button>More Info</button>
        </div>
      </div>
    </section>
  );
};

export default CurrentMovieSection;
