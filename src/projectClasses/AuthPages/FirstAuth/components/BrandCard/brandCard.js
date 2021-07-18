import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./styles.scss";
const BrandCard = ({icon,color}) => {
    return (
        <div className='brandCard'>
            <FontAwesomeIcon className='brandIcon' style={{color:color}} icon={icon}/>
        </div>
    )
}

export default BrandCard
