import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTh} from '@fortawesome/free-solid-svg-icons'
import "./styles.scss";
import ProfileCircle from "./components/ProfileCircle";
const GoogleVaultHeader = () => {
  return (
    <header className="googleVaultHeader">
      <FirstSection title="Google Vault Help" />
      <SecondSection initials="I"/>
    </header>
  );
};

export default GoogleVaultHeader;

const FirstSection = ({title}) => {
  return <section className="googleVaultHeaderFirstSection"><FontAwesomeIcon className="gcloneHeaderIcon"  icon={faBars} /><span>{title}</span></section>;
};

const SecondSection = ({initials}) => {
    return <section className="googleVaultHeaderSecondSection"><FontAwesomeIcon className="gcloneHeaderIcon" icon={faTh} /><ProfileCircle initials={initials} /></section>;
  };
  