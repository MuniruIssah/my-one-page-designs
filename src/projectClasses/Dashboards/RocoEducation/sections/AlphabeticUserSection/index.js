import React from "react";
import RocoStudentListItem from "../../components/RocoStudentListItem";
import RocoStudentSearchBar from "../../components/RocoStudentSearchBar";
import RocoUserSectionHeader from "../../components/RocoUserSectionHeader";
import "./styles.scss";
const RocoAlphabeticUserSection = () => {
  return (
    <section className="rocoAlphabeticUserSection">
      <RocoUserSectionHeader number={214} />
      <RocoStudentSearchBar />
      <div>
        <RocoStudentListItem />
        <RocoStudentListItem />
        <RocoStudentListItem />
        <RocoStudentListItem />
        <RocoStudentListItem />
        <RocoStudentListItem />
      </div>
    </section>
  );
};

export default RocoAlphabeticUserSection;
