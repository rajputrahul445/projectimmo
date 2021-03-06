import React from 'react';
import { Link } from "react-router-dom";
// import ScrollspyNav from "react-scrollspy-nav";

const Header = () => {
    const navToggleHandle = (e) => {
        let element = document.getElementById("toggle");
        element.classList.toggle("active");
    }
    
  return (
    
    <header className='mainHeader'>
        <div className='container d-flex justify-content-between'>
            <div className='brand'>
                <Link to='/'><img src='/images/logo.png' alt='' /></Link>
            </div>
            <div className='mobile'><i className="fas fa-bars barstog" onClick={navToggleHandle}></i></div>
            <div className='navigation' id='toggle'>
                <ul className='listInline gap-100 align-items-center'>
                    <li><a href='/#start'>Start</a></li>
                    <li><a href='/#Vorteile'>Vorteile</a></li>
                    <li><a href='/#Vision'>Vision</a></li>
                    <li><a href='/#Unsere'>Unsere Kunden Sagen</a></li>
                    <li><Link to='/contact' className='greenBtn'>Kontakt</Link></li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header;