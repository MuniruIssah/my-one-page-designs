import React from "react";
import BHNetworkButton from "./../../../BHNetworkButton";
import "./styles.scss";
const authLinks = [
  {
    label: "Sign In",
    large: true,
  },
  {
    label: "Join Us",
    outlined: true,
    large: true,
    round: true,
  },
];
const BHNHeaderAuthLinks = () => {
  return (
    <div>
      {authLinks.map((authLink) => (
        <BHNetworkButton key={authLink.label} {...authLink}>
          {authLink.label}
        </BHNetworkButton>
      ))}
    </div>
  );
};

export default BHNHeaderAuthLinks;
