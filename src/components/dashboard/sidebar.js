import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar pt-4">
			<div className="sticky-top">
				<div className="sidebarBrand text-center">
					<Link to="/dashboard" className="">
						<img src="images/logo.png" alt="" className="" />
					</Link>
				</div>
				<div className="sidebarList">
					<ul className="unorderList">
						<li className="active">
							<Link to="/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></Link>
						</li>
                        <li>
							<Link to="/message"><i className="fas fa-comment-alt"></i><span>Message</span></Link>
						</li>
                       
						<li>
							<a href="/"><span>Enquiries</span></a>
                            <ul className='unorderList'>
                                <li><Link to="/enquiries/Wohnung"><i className="far fa-building"></i><span>Wohnung</span></Link></li>
                                <li><Link to="/enquiries/Wohnung"><i className="fas fa-home"></i><span>Haus</span></Link></li>
                                <li><Link to="/enquiries/Wohnung"><i className="fas fa-city"></i><span>Mehrfamilienhaus</span></Link></li>
                                <li><Link to="/enquiries/Wohnung"><i className="fas fa-briefcase"></i><span>Gewerbe</span></Link></li>
                                <li><Link to="/enquiries/Wohnung"><i className="fas fa-coins"></i><span>Grundstück</span></Link></li>
                            </ul>
						</li>
						{/* <li>
							<a href="/" onClick={logout}><i className="fas fa-sign-out-alt"></i><span>Logout</span></a>
						</li> */}
					</ul>
				</div>
			</div>
		</div>
  )
}

export default Sidebar