import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Homepage from '../pages/Homepage/Homepage';
import Works from '../pages/Works/Works';
import Work from '../pages/Work/Work';
import Team from '../pages/Team/Team';
import Clients from '../pages/Clients/Clients';
import './vendor/css/font-awesome.min.css';
import './app.css';
import './querries.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			loadLogo: true,
			siteLoaded: false
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loadLogo: false
			});
		}, 3000);

		setTimeout(() => {
			this.setState({
				siteLoaded: true
			});
		}, 3500);
	}

	render() {

		const {loadLogo, siteLoaded} = this.state;

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