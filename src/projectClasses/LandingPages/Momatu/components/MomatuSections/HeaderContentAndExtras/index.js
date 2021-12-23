import React from "react";
import './styles.scss'
const HeaderContentAndExtras = ({ heading, content, children }) => {
  return (
    <div className="momatuHCE">
      <span className="momatuHCEheader">{heading}</span>
      <span className="momatuHCEcontent">{content}</span>
      <div className="momatuHCEchildren">{children}</div>
    </div>
  );
};

export default HeaderContentAndExtras;
