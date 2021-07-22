import React from "react";
import MainContainer from "./components/MainContainer";
import SearchContainer from "./components/SearchContainer";
const MainList=[
    {
        title:"How can we help",
        description:"I descriiiiibe"

    },
    {
        title:"How can we help",
        description:"I descriiiiibe"

    },
    {
        title:"How can we help",
        description:"I descriiiiibe"

    },
    {
        title:"How can we help",
        description:"I descriiiiibe"

    },
    {
        title:"How can we help",
        description:"I descriiiiibe"

    },
    
]
const GoogleVaultContent = () => {
  return (
    <div>
      <SearchContainer />
      <MainContainer list={MainList}/>
    </div>
  );
};

export default GoogleVaultContent;
