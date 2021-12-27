import React from "react";
import "./styles.scss";
const NewsHubSelectLink = ({ label, list = [] }) => {
  return (
    <select className="newsHubSelectLink">
      <option>{label}</option>
      {list.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default NewsHubSelectLink;
