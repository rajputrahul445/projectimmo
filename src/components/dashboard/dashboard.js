import React from 'react'
import DashboardDetails from './dashboardDetails'
import Sidebar from './sidebar'

const Dashboard = () => {
  return (
    <div className="pageWrp">
        <Sidebar />
        <div className='rightArea'>
            <DashboardDetails />
        </div>
    </div>
  )
}

export default Dashboard