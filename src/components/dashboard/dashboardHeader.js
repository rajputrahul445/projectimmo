import React from 'react';
import { useNavigate } from "react-router-dom";


const DashboardHeader = () => {
    const navigate = useNavigate();
    const logout = (e) =>{
        e.preventDefault();
        localStorage.clear('token')
        localStorage.clear('userId')
        localStorage.clear('userName')
        navigate("/login");
    }
  return (
    
    <div className="topHeader">
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
  )
}

export default DashboardHeader