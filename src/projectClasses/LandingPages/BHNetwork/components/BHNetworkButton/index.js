import React from "react";
import "./styles.scss";
const BHNetworkButton = ({ large, primary, outlined, round, children }) => {
  return (
    <button
      className="bhNetworkButton"
      style={{
        height: large ? "45px" : "",
        border: outlined ? "1px solid white" : "none",
        borderRadius: round ? "6px" : "0px",
        backgroundColor: primary ? " #093c8b" : "none",
      }}
    >
      {children}
    </button>
  );
};

export default BHNetworkButton;
