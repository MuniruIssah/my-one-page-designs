import React from "react";
import BHNetworkContent from "./components/BHNetworkContent";
import BHNetworkHeader from "./components/BHNetworkHeader";
import "./styles.scss";
const BHNetworkLinks=[
  {
    link:'#',
    label:"Find your expert"
  },
  {
    link:'#',
    label:"Explore Marketplace"
  },
  {
    link:'#',
    label:"Become a Freelancer"
  },
]
const BHNetwork = () => {
  return (
    <div className="bhNetworkLandingPageWrapper">
      <BHNetworkHeader links={BHNetworkLinks} />
      <BHNetworkContent/>
    </div>
  );
};

export default BHNetwork;
