import React, { useState } from "react";
import "./styles.scss";
const HomelySelect = ({ placeholder, list = [],selected }) => {
  return (
    <select className={`homelySelect ${selected?'selected':''}`}>
      <option>{placeholder}</option>
      {list.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default HomelySelect;
