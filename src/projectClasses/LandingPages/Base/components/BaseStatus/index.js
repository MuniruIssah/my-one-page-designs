import React from "react";
import "./styles.scss";
const BaseStatus = ({ status = "#1 CRYPTO APP IN APP STORE" }) => {
  return <div className="baseStatus">{status}</div>;
};

export default BaseStatus;
