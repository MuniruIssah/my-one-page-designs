import React from "react";
import twork from '../../../../assets/twork.png'
import Card from "./components/Card";
import FilterButton from "./components/FilterButton";
import "./styles.scss";

const HeaderButtons = [
  "Ideas/Task",
  "In Progress",
  "Ready For Review",
  "Approved",
];

const FirstColumnCards=[
  {
    days:"3days",
    progress:5,
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
    days:"3days",
    progress:0,
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
  {
    days:"3days",
    progress:5,
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
    days:"3days",
    progress:0,
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
  {
    days:"3days",
    progress:5,
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
    days:"3days",
    progress:0,
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
const FirstColumn = () => {
  return (
    <div className="firstColumn">
      <div className="filterButtonStrip">
        {HeaderButtons.map((HeaderButton) => (
          <FilterButton key={HeaderButton}>{HeaderButton}</FilterButton>
        ))}
      </div>
      <div className="mainSectionWrapper">
          {
            FirstColumnCards.map(FirstColumnCard=><Card key={FirstColumnCard.title} {...FirstColumnCard} />)
          }
      </div>
    </div>
  );
};

export default FirstColumn;
