import { faAirbnb, faGoogle, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import BHNButtonStrip from './components/ButtonStrip'
import LargeText from './components/LargeText'
import BHNetworkSearchBar from './components/SearchBar'
import BHNTrustedBy from './components/TrustStrip'
import  './styles.scss'
const buttonList=[
    {
        label:"Web Dev",
        outlined:true
    },
    {
        label:"Mobile Dev",
        outlined:true
    },
    {
        label:"Design",
        outlined:true
    },
    {
        label:"Writing",
        outlined:true
    },
    {
        label:"Admin Support",
        outlined:true
    },
]
const trusteesList=[
    {
        label:'Microsoft',
        icon:faMicrosoft
    },
    {
        label:'Google',
        icon:faGoogle
    },
    {
        label:'airbnb',
        icon:faAirbnb
    },
]
const BHNetworkContent = () => {
    return (
        <div className="bhNetworkContentWrapper">
            <div className="bhNetworkActualContent">
                <LargeText text={<>All the skills you are looking for under one <span className="underlined">roof.</span></>} />
                <span className="bhNetworkNormalSpan">Search among <span className="blue">thousands</span> of experts</span>
                <BHNetworkSearchBar/>
                <span className="bhNetworkNormalSpan">Popular Searches:</span>
                <BHNButtonStrip list={buttonList} />
                <BHNTrustedBy trustees={trusteesList}/>
            </div>
        </div>
    )
}

export default BHNetworkContent
