import React from 'react';
import Footer from '../../components/Footer/Footer';

const Team = () => {
	return (
		<div className="flex--container">
            <main className="main">
                <div className="container">

                    <h2 className="page--title">Our Story</h2>

                    <div className="about--container">
                        <div className="about--img">
                            <img className="about--img--image" src="img/2.jpg" alt="body img" />
                        </div>
                        <div className="about--text">
                            <h1 className="about--tagline">The Creative People Behind The Camera</h1>
                            <p className="about--body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <h2 className="services--text">Services</h2>
                            <ul className="services">
                                <li>Photography</li>
                                <li>Video Production</li>
                                <li>Animation</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="page--title">The Team</h2>

                    <div className="team--container">
                        <div className="team--member">
                            <img src="img/portrait.jpeg" alt="member1" />
                            <h2 className="member--name">Name</h2>
                        </div>
                        <div className="team--member">
                            <img src="img/portrait.jpeg" alt="member2" />
                            <h2 className="member--name">Name</h2>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
	);
}

export default Team;