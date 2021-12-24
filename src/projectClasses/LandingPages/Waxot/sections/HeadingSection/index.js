import React from "react";
import WaxotEmailForm from "../../components/Form";
import "./styles.scss";
const WaxotHeadingSection = () => {
  return (
    <section className="waxotHeadingSection">
      <h1>
        Get Instant Digital <br /> Payment For Everyone
      </h1>
      <p>
        Pay is a digital service to manage your digital business easily.
        <br />
        Provides payment services worldwide, save your time.
      </p>
      <WaxotEmailForm />
    </section>
  );
};

export default WaxotHeadingSection;
