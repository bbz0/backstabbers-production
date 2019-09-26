import React from 'react';
import Footer from '../../components/Footer/Footer';

const Clients = () => {
	return (
		<div className="flex--container">
            <main className="main">
                <div className="container">

                    <h2 className="page--title">Our Clients</h2>

                    <div className="clients--container">
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                        <div className="client">
                            <img className="client--logo" src="img/clientlogo.jpg" alt="client name" />
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
	);
}

export default Clients;