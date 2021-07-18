import React from "react";
import "./styles.scss";
export const FirstAuthCheck = ({label}) => {
  return (
    <div className="firstAuthCheck">
      <input type="checkbox" className="firstAuthCheckBox"/>
      <label>{label}</label>
    </div>
  );
};

export const FirstAuthCheckWithLink = ({label,link,linkText}) => {
  return (
    <div className="firstAuthCheckWithLink">
      <div className='checkBoxDiv'>
        <input type="checkbox" className="firstAuthCheckBox" />
        <label>{label}</label>
      </div>
      <a href={link}>{linkText}</a>
    </div>
  );
};
