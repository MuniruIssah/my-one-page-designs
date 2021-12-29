// import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {  faCommentDots, faShoppingBag,faHeart, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import PrismSearchBar from '../../components/SearchBar'
import './styles.scss'
const PrismHeader = () => {
    return (
        <header className='prismHeader'>
            <div className='prismHeaderFirstSection'>
            <span className='header'>PRISM</span>
            <div>
                <NavLink activeClassName='activePrismNavLink' to={'/prism'}>Discover</NavLink>
                <NavLink activeClassName='activePrismNavLink' to={'/prism'}>Shop</NavLink>
            </div>

            </div>
            <div className='prismHeaderFirstSection'>
                <PrismSearchBar/>
                <FontAwesomeIcon style={{fontSize:25,marginRight:'3rem',color:'#191919'}} icon={faHeart}/>
                <FontAwesomeIcon style={{fontSize:25,marginRight:'3rem',color:'#191919'}} icon={faShoppingBag}/>
                <FontAwesomeIcon style={{fontSize:25,marginRight:'3rem',color:'#191919'}} icon={faCommentDots}/>
            </div>
        </header>
    )
}

export default PrismHeader
