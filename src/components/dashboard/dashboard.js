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
            <div className="topHeader mb-4">
				<ul className="listInline">
					<li className="dropdown">
						<a href="/" className="dropdown-toggle" onClick={(e)=> e.preventDefault()}>
							<div className="d-block">
								<span className="desktop">{localStorage.getItem('userName')}</span>
							</div>
						</a>
						<div className="dropdown-menu">
						    <a className="dropdown-item" href="/" onClick={logout}>Logout</a>
						</div>
					</li>
				</ul>
			</div>
            <DashboardDetails />
        </div>
    </div>
  )
}

export default Dashboard