import React from 'react';
import { Link } from 'react-router-dom';

const HeroContent = () => {
	return (
		<div className="hero--text--group">
            <h1 className="hero--text">The Creative People Behind The Camera</h1>
            <Link className="call--to--action" to="/work">View Portfolio</Link>
        </div>
	);
}

export default HeroContent;