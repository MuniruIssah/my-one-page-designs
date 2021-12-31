import React from "react";
import "./styles.scss";
const BaseEmailForm = () => {
  return (
    <form className="baseEmailForm">
      <input type={"email"} placeholder="Enter your email" />
      <button>Submit</button>
    </form>
  );
};

export default BaseEmailForm;
