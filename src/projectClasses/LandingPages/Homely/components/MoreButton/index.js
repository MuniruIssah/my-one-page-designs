import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.scss'
const MoreButton = () => {
    return (
        <button className='homelyMoreButton'>
           <span>More</span> 
           <FontAwesomeIcon icon={faSlidersH} />
        </button>
    )
}

export default MoreButton
