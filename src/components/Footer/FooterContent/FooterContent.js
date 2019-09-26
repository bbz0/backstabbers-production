import React from 'react';
import { Link } from 'react-router-dom';

const FooterContent = () => {
	return (
		<div className="footer--content">
	        <div className="copyright">
	            Copyright 2013 - 2019 Backstabbers Production
	        </div>
	        <div className="footer--nav">
	            <Link className="footer--link" to="#">Facebook</Link>
	            <Link className="footer--link" to="#">Instagram</Link>
	        </div>
	    </div>
	);
}

export default FooterContent;