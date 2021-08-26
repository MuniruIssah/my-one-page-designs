import React from 'react'
import DashboardContent from './components/Content'
import SideBarAndContentLayout from './layouts/SideBarAndContent'
import DashboardLogin from './pages/Login'
import "./styles.scss"
const FreshMarket = () => {
    return (
        <div className="fmarket">
            {/* <DashboardLogin/> */}
            <SideBarAndContentLayout>
                <DashboardContent/>
            </SideBarAndContentLayout>
        </div>
    )
}

export default FreshMarket
