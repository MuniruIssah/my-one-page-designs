import React from 'react'
import "./styles.scss";
import GoogleVaultHeader from './sections/GoogleVaultHeader'
import GoogleVaultContent from './sections/GoogleVaultContent';
const GoogleVaultHelp = () => {
    return (
        <div className="googleVaultHelp">
            <GoogleVaultHeader/>
            <GoogleVaultContent/>
        </div>
    )
}

export default GoogleVaultHelp;
