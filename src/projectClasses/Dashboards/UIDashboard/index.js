import React from 'react'
import ContentWithSidebar from './layouts/ContentWithSidebar'
import { ContentPages, SideBarLinks } from './utils'

const UIDashboard = () => {
    return (
        <ContentWithSidebar sidebarNavItems={SideBarLinks} contentItems={ContentPages} />
    )
}

export default UIDashboard
