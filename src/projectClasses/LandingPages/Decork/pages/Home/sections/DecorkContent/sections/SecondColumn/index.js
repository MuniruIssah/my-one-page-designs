import React from "react";
import "./styles.scss";
import Jacket from './../../../../../../assets/jacket.webp'
const SecondColumn = ({backgroundImage,children}) => {
  return <div className="decorkContentSecondColumn" style={{backgroundImage:`url(${backgroundImage?backgroundImage:Jacket})`}} >
        <div className="decorkContentSecondColumnInnerElement">
          {children}
        </div>
  </div>;
};

export default SecondColumn;
