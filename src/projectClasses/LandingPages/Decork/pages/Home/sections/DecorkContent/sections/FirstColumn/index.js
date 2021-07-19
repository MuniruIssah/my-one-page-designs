import React from "react";
import "./styles.scss";
import DecorkContentFirstColumnLargeHeading from "./components/LargeHeading";
import DecorkContentFirstColumnDescription from './components/Description'
import RoundedEdgeButton from "../../../../../../components/RoundedEdgeButton";
const FirstColumn = () => {
  return (
    <div className="decorkContentFirstColumn">
      <DecorkContentFirstColumnLargeHeading title="Classic Circle" />
      <DecorkContentFirstColumnDescription description="Labore consequat exercitation in ullamco qui culpa officia. Officia sint incididunt ad sint. Consectetur minim adipisicing mollit incididunt. Exercitation nisi qui non ullamco sit esse tempor eiusmod eu ea magna aliqua occaecat velit." />
      <RoundedEdgeButton label="shop now" style={{backgroundColor:"black",color:"white",padding:"0px 37px",height:"50px",borderRadius:"30px",fontSize:"15px",border:"none"}}/>
    </div>
  );
};

export default FirstColumn;
