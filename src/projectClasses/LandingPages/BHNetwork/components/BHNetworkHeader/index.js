import React from 'react'
import BHNHeaderAuthLinks from './components/BHNHeaderAuthLinks';
import BHNHeaderLinks from './components/BHNHeaderLinks';
import BHNHeaderLogo from './components/BHNHeaderLogo';
import "./styles.scss";
const BHNetworkHeader = ({links}) => {
    return (
        <header className="bhNetworkHeader">
            <BHNHeaderLogo/>
            <BHNHeaderLinks links={links} />
            <BHNHeaderAuthLinks />
           
        </header>
    )
}

export default BHNetworkHeader
