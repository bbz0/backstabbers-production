import React from 'react';
import Footer from '../Footer/Footer';

const ErrorMessage = () => {
	return (
		<div className="flex--container">
            <main className="main">
                <div className="container">

                    <h1 className="error">Error! Something went wrong :(</h1>
                    
                </div>
            </main>

            <Footer />
	    </div>
	);
}

export default ErrorMessage;