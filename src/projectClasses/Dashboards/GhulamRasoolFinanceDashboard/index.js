import React from 'react'
import {  FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "./styles.scss";
import GRFDSidebar from './components/Sidebar'
import GRFDContent from './components/Content'


import { faChartBar, faChartPie, faCompass, faDiceFour, faDiceSix, faEye, faFilter, faHome, faMoneyBillAlt, faStore, faTrophy, faUser, faWarehouse } from '@fortawesome/free-solid-svg-icons'
const GhulamRasoolFinanceDashboard = () => {
    return (
        <div className="grfd">
           <GRFDSidebar/>
           <GRFDContent/>
        </div>
    )
}

export default GhulamRasoolFinanceDashboard


/* <FontAwesomeIcon icon={faHome} />
<FontAwesomeIcon icon={faTrophy} />
<FontAwesomeIcon icon={faWarehouse}/>
<FontAwesomeIcon icon={faChartBar} />
<FontAwesomeIcon icon={faUser} />
<FontAwesomeIcon icon={faEye} />
<FontAwesomeIcon icon={faCompass} />
<FontAwesomeIcon icon={faStore} />
<FontAwesomeIcon icon={faChartPie} />
<FontAwesomeIcon icon={faDiceFour}/> */