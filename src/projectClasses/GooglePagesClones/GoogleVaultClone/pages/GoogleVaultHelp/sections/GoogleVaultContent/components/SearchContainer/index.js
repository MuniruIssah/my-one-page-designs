import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import SearchBar from '../SearchBar';
import "./styles.scss";
const SearchContainer = () => {
    return (
        <div className="searchContainer">
            <SearchLogo/>
            <span>How can we help you?</span> 
            <SearchBar/>
        </div>
    )
}

export default SearchContainer;
 const SearchLogo = () => {
    return (
        <div className="searchContainerLogo">
            <FontAwesomeIcon icon={faGoogle} />
        </div>
    )
}
