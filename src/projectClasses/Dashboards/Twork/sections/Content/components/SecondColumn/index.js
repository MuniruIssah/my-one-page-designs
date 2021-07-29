import React from "react";
import "./styles.scss";
import twork from "../../../../assets/twork.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Card from "./components/Card";

const SecondColumnCards=[
  {
    timespan:"06.30AM - 08.00AM",
    title:"Meeting Project App",
    joined:true,
    members:[
      {
        label:'Issss',
        image:twork
      },
      {
        label:'Issssaaah',
        image:twork
      },
    ]
  },
  {
    timespan:"06.30AM - 08.00AM",
    title:"Problem Solving",
    members:[
      {
        label:'Issss',
        image:twork
      },
      {
        label:'Issssaaah',
        image:twork
      },
    ]
  },
  
]


const SecondColumn = () => {
  return (
    <div className="secondColumn">
      <header className="columnHeader">
        <span>Meeting Schedule</span>
        <FontAwesomeIcon icon={faEllipsisV} className="icon" />
      </header>
      <div className="mainSectionWrapper">
        {
          SecondColumnCards.map(SecondColumnCard=><Card key={SecondColumnCard.title} {...SecondColumnCard} />)
        }
      </div>
    </div>
  );
};

export default SecondColumn;
