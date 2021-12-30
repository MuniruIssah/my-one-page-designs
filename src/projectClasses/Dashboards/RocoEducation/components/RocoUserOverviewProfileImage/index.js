import React from "react";
import "./styles.scss";
const RocoUserOverviewProfileImage = ({ image, premium }) => {
  return (
    <div className="rocoUserOverviewProfileImageWrapper">
      <div className="rocoUserOverviewProfileImage">
        {premium && <div className="premiumIndicator">PREMIUM</div>}
      </div>
    </div>
  );
};

export default RocoUserOverviewProfileImage;
