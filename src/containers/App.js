import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'; // navbar component
import Homepage from '../pages/Homepage/Homepage'; // homepage component
import Works from '../pages/Works/Works'; // portfolio component
import Work from '../pages/Work/Work'; // individual work component
import Team from '../pages/Team/Team'; // about page component
import Clients from '../pages/Clients/Clients'; // clients page component
import './vendor/css/font-awesome.min.css';
import './app.css'; // main css for the application
import './querries.css'; // css for different screen sizes

// main component container for the whole app
class App extends Component {

	constructor() {
		super();
		this.state = {
			loadLogo: true, // to show the logo gif on the index page, before the site is 'loaded'
			siteLoaded: false // the site is in a state of 'loading', if true all site elements become visible. Mainly for aesthetic purposes as requested by the client
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loadLogo: false
			});
		}, 3000); // after 3 seconds the logo fades away

		setTimeout(() => {
			this.setState({
				siteLoaded: true
			});
		}, 3500); // after 3.5 seconds the site is 'loaded' and all other elements fade in
	}

	render() {

		const {loadLogo, siteLoaded} = this.state;
		// application routes with the navbar component at the top
		return (
			<Router>
				<div id="backstabbers--production">
					<Navbar />
					<Route path={`${process.env.PUBLIC_URL}/`} exact render={(props) => <Homepage {...props} loadLogo={loadLogo} siteLoaded={siteLoaded} />} />
					<Route path={`${process.env.PUBLIC_URL}/works`} exact component={Works} />
					<Route path={`${process.env.PUBLIC_URL}/works/:workId`} exact component={Work} />
					<Route path={`${process.env.PUBLIC_URL}/team`} exact component={Team} />
					<Route path={`${process.env.PUBLIC_URL}/clients`} exact component={Clients} />
				</div>
			</Router>
		);
	}
}

export default App;