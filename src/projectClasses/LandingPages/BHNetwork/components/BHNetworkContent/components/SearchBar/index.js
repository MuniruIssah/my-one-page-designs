import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BHNetworkButton from './../../../BHNetworkButton'
import "./styles.scss";

const BHNetworkSearchBar = () => {
    return (
        <div className="bhNetworkSearchBar">
            <FontAwesomeIcon icon={faSearch} className="icon"/>
            <input type="text" placeholder="Search on 85+ categories Ex. Web Design" />
            <BHNetworkButton large primary>Find Now</BHNetworkButton>
        </div>
    )
}

export default BHNetworkSearchBar
