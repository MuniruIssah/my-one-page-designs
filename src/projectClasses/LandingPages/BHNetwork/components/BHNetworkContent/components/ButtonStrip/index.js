import React from "react";
import BHNetworkButton from "../../../BHNetworkButton";
import "./styles.scss";
const BHNButtonStrip = ({ list }) => {
  return (
    <div className="bhNButtonStrip">
      {list.map((item) => (
        <BHNetworkButton key={item.label} {...item}>
          {item.label}
        </BHNetworkButton>
      ))}
    </div>
  );
};

export default BHNButtonStrip;
