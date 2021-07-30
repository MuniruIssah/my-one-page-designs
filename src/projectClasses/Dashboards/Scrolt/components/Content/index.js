import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ScroltCardwithAction from "./components/CardWithAction";
import ScroltGraphCard from "./components/GraphCard";
import ScroltGridWrapper from "./components/GridWrapper";
import ScroltHeadingStrip from "./components/HeadingStrip";
import "./styles.scss";

const GraphList = [
  {
    title: "Total Users",
    value: "72,360",
    increasing: true,
    percentage: "6.9%",
  },
  {
    title: "Sessions",
    value: "29.4%",
    percentage: "12.5%",
  },
  {
    title: "Avg. Click rate",
    value: "56.8%",
    increasing: true,
    percentage: "19.3%",
  },
  {
    title: "Pageviews",
    value: "92,360",
    percentage: "12.5%",
  },
];

const ScroltContent = () => {
  return (
    <main className="scroltContent">
      <ScroltHeadingStrip
        title="Dashboard"
        button={{ label: "Invite Users", icon: faUserPlus }}
      />
      <ScroltGridWrapper>
        {GraphList.map((item) => (
          <ScroltGraphCard key={item.title} {...item} />
        ))}
      </ScroltGridWrapper>
      <ScroltGridWrapper>
        <ScroltCardwithAction title="Users" action="This week" />
        <ScroltCardwithAction title="Users" action="This week" />
      </ScroltGridWrapper>
      <ScroltCardwithAction title="Users" action="This week" />
    </main>
  );
};

export default ScroltContent;
