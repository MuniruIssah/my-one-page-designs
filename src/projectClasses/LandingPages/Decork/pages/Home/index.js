import React from 'react'
import DecorkHeader from './sections/DecorkHeader'
import DecorkFooter from './sections/DecorkFooter'

import "./styles.scss"
import { FooterLinks } from '../../utils/constants'
import DecorkContent from './sections/DecorkContent'
const DecorkHome = () => {
    return (
        <div className="decorkHome">
            <DecorkHeader/>
            <DecorkContent/>
            <DecorkFooter links={FooterLinks}/>
            
        </div>
    )
}

export default DecorkHome
