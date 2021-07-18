import React from "react";
import "./styles.scss";
const TextAndLink = ({ text, link,onClick }) => {
  return (
    <div className="textAndLink">
      <span>{text}</span>
      <a onClick={onClick} href="#">{link}</a>
    </div>
  );
};

export default TextAndLink;
