import React from "react";
import BaseEmailForm from "../../components/BaseEmailForm";
import BaseStatus from "../../components/BaseStatus";
import BaseTopSectionHeader from "../../components/BaseTopSectionHeader";
import './styles.scss'
const BaseTopSection = () => {
  return (
    <section className="baseTopSection">
      <BaseTopSectionHeader />
      <main>
        <BaseStatus />
        <span className="baseHeadingText">
          CommunityAsset
          <br />
          Management DeFi
          <br />
          Together.
        </span>
        <span className="signUpNote">Sign up to join out Beta waitlist.</span>
        <BaseEmailForm />
      </main>
    </section>
  );
};

export default BaseTopSection;
