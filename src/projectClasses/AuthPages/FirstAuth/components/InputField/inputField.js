import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss'
const InputField = ({type,label,icon,placeholder}) => {
    return (
        <div className="inputFieldWrapper">
        <label>{label}</label>
        <div className='inputField'>
            <FontAwesomeIcon icon={icon} className='inputIcon' />
            <input type={type} className='inputFieldInput' placeholder={placeholder} />
        </div>
        </div>
    )
}

export default InputField
