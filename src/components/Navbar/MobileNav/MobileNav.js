import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const MobileNav = ({ toggleMobileNav, toggleContactForm }) => {
	return (
		<nav className="mobile--navbar">
            <button onClick={toggleMobileNav} className="nav--burger">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className="sitename">
                <img src={logo} class="mobile--logo" alt="Backstabbers Production" />
            </div>
            <div className="mobile--navbar--nav">
                <Link onClick={toggleMobileNav} className="nav--link" to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                <Link onClick={toggleMobileNav} className="nav--link" to={`${process.env.PUBLIC_URL}/works`}>Work</Link>
                <Link onClick={toggleMobileNav} className="nav--link" to={`${process.env.PUBLIC_URL}/team`}>Team</Link>
                <Link onClick={toggleMobileNav} className="nav--link" to={`${process.env.PUBLIC_URL}/clients`}>Clients</Link>
                <button onClick={toggleContactForm} className="contact--button">Contact us</button>
            </div>
        </nav>
	);
}

export default MobileNav;