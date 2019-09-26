import React from 'react';
import { withRouter, Link } from "react-router-dom";

const MoreWorksThumb = ({ name, pictures, id }) => {
	return (
		<Link className="work--link" to={`${process.env.PUBLIC_URL}/works/${id}`}>
			<div className="work">
                <div className="work--thumb">
                    <img src={pictures.sizes[4].link} alt={name} className="work--thumb--img" />
                </div>
                <div className="work--title">
                    <h4 className="work--title--text">{name}</h4>
                </div>
	        </div>
        </Link>
	);
}

export default withRouter(MoreWorksThumb);