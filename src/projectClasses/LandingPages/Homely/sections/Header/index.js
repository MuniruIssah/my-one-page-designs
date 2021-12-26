import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import HomelyProfileAvatar from '../../components/ProfileAvatar'
import './styles.scss'
const HomelyHeader = () => {
    return (
        <header className='homelyHeaderWrapper'>
          <div className='homelyLogoSection'>
            <FontAwesomeIcon icon={faGripLines} />     
            <span>Homely</span> 
        </div> 
          <div className='homelyLinks'>
              <NavLink to='/homely' activeClassName='activeHomelyLink'>Buy</NavLink>
              <NavLink to='/homely/rent' activeClassName='activeHomelyLink'>Rent</NavLink>
              <NavLink to='/homely/sell' activeClassName='activeHomelyLink'>Sell</NavLink>
              <NavLink to='/homely/find-agent' activeClassName='activeHomelyLink'>Find Agent</NavLink>
              </div> 
            <div className='homelyNotificationsAndProfile'>
                <FontAwesomeIcon icon={faBell}  style={{marginRight:'3rem',fontSize:20,color:'#9f9f9e'}}/>
                <HomelyProfileAvatar/>
            </div>
        </header>
    )
}

export default HomelyHeader