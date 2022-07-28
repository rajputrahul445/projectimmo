import React from 'react';
import DashboardDetails from './dashboardDetails';
import Sidebar from './sidebar';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = (e) =>{
        e.preventDefault();
        localStorage.clear('token')
        localStorage.clear('userId')
        localStorage.clear('userName')
        navigate("/dashboard/login");
    }
  return (
    <div className="pageWrp">
        <Sidebar logout={logout}/>
        <div className='rightArea'>
            
        </div>
    </div>
  )
}

export default Dashboard