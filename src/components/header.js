import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    const navToggleHandle = (e) => {
        let element = document.getElementById("toggle");
        element.classList.toggle("active");
    }
    
  return (
    <header className='mainHeader'>
        <div className='container d-flex justify-content-between'>
            <div className='brand'>
                <a href='/'><img src='/images/logo.png' alt='' /></a>
            </div>
            <div className='mobile'><i class="fas fa-bars barstog" onClick={navToggleHandle}></i></div>
                <div className='navigation' id='toggle'>
                    <ul className='listInline gap-100 align-items-center'>
                        <li><Link to='/#start'>Start</Link></li>
                        <li><Link to='/#Vorteile'>Vorteile</Link></li>
                        <li><Link to='/#Vision'>Vision</Link></li>
                        <li><Link to='/#Unsere'>Unsere Kunden Sagen</Link></li>
                        <li><Link to='/' className='greenBtn'>Kontakt</Link></li>
                    </ul>
                </div>

            
        </div>
    </header>
  )
}

export default Header;