import React from "react";
import BrandCard from "../BrandCard/brandCard";
import "./styles.scss";
const BrandStrip = ({ brands }) => {
  return (
    <div className="brandStrip">
      {brands.map((brand) => (
        <BrandCard
          key={brand.icon.toString()}
          icon={brand.icon}
          color={brand.color}
        />
      ))}
    </div>
  );
};

export default BrandStrip;
