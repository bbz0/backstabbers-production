import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ContactForm from './ContactForm/ContactForm';
import MobileNav from './MobileNav/MobileNav';
import Nav from './Nav/Nav';
import './transitions.css';

class Navbar extends Component {

	constructor() {
		super();
		this.state = {
			mobileNavOpen: false,
			contactFormOpen: false,
			nav: false
		};
		this.toggleMobileNav = this.toggleMobileNav.bind(this);
		this.toggleContactForm = this.toggleContactForm.bind(this);
	}

	toggleMobileNav() {
		this.setState({
			mobileNavOpen: !this.state.mobileNavOpen
		});
	}

	toggleContactForm() {
		this.setState({
			contactFormOpen: !this.state.contactFormOpen
		});
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				nav: true
			});
		}, 3500);
	}

	render() {

		const mobileNav = (this.state.mobileNavOpen) ? <MobileNav toggleMobileNav={this.toggleMobileNav} toggleContactForm={this.toggleContactForm} /> : '';
		const contactForm = (this.state.contactFormOpen) ? <ContactForm toggleContactForm={this.toggleContactForm} /> : '';
		const nav = (this.state.nav) ? <Nav toggleMobileNav={this.toggleMobileNav} toggleContactForm={this.toggleContactForm} /> : '';

		return (
			<div>
				<CSSTransitionGroup
				transitionName="contactform"
				transitionEnterTimeout={200}
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