import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.scss'
const PrismSearchBar = () => {
    return (
        <div className='prismSearchBar'>
            <FontAwesomeIcon icon={faSearch} style={{fontSize:18,marginRight:5}} />
           <input placeholder='Search' type={'search'}/> 
        </div>
    )
}

export default PrismSearchBar 
