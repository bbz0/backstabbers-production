import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ContactForm from './ContactForm/ContactForm'; // contact form component
import MobileNav from './MobileNav/MobileNav'; // mobile navbar component
import Nav from './Nav/Nav'; // desktop navbar component
import './transitions.css';

class Navbar extends Component {

	constructor() {
		super();
		// navbar toggle states
		this.state = {
			mobileNavOpen: false,
			contactFormOpen: false,
			nav: false
		};
		this.toggleMobileNav = this.toggleMobileNav.bind(this);
		this.toggleContactForm = this.toggleContactForm.bind(this);
	}

	// toggle state mobile navbar
	toggleMobileNav() {
		this.setState({
			mobileNavOpen: !this.state.mobileNavOpen
		});
	}
	// toggle contact form
	toggleContactForm() {
		this.setState({
			contactFormOpen: !this.state.contactFormOpen
		});
	}

	componentDidMount() {
		// after 3.5 seconds navbar fades in
		setTimeout(() => {
			this.setState({
				nav: true
			});
		}, 3500);
	}

	render() {
		// if true in state display components
		const mobileNav = (this.state.mobileNavOpen) ? <MobileNav toggleMobileNav={this.toggleMobileNav} toggleContactForm={this.toggleContactForm} /> : '';
		const contactForm = (this.state.contactFormOpen) ? <ContactForm toggleContactForm={this.toggleContactForm} /> : '';
		const nav = (this.state.nav) ? <Nav toggleMobileNav={this.toggleMobileNav} toggleContactForm={this.toggleContactForm} /> : '';

		return (
			<div>
				<CSSTransitionGroup // CSS animation transition to display elements
				transitionName="contactform" // class name
				transitionEnterTimeout={200} // transition speed 0.2ms
				transitionLeaveTimeout={200}>
					{contactForm}
				</CSSTransitionGroup>
				<CSSTransitionGroup
				transitionName="mobilenav"
				transitionEnterTimeout={200}
				transitionLeaveTimeout={200}>
					{mobileNav}
				</CSSTransitionGroup>
				<CSSTransitionGroup
				transitionName="nav"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
					{nav}
				</CSSTransitionGroup>
			</div>
		);
	}

}

export default Navbar;