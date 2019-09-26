import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo2.png';

const Nav = ({ toggleMobileNav, toggleContactForm }) => {
	return (
		<nav className="navbar">
            <div className="container">
                <div className="navbar--content">
                    <div className="sitename">
                        <img src={logo} alt="Logo" className="sitename--logo" />
                    </div>
                    <div className="navbar--content--nav">
                        <Link className="nav--link" to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                        <Link className="nav--link" to={`${process.env.PUBLIC_URL}/works`}>Work</Link>
                        <Link className="nav--link" to={`${process.env.PUBLIC_URL}/team`}>Team</Link>
                        <Link className="nav--link" to={`${process.env.PUBLIC_URL}/clients`}>Clients</Link>
                        <button onClick={toggleContactForm} className="contact--button">Contact us</button>
                        <button onClick={toggleMobileNav} className="nav--burger">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
	);
}

export default Nav;