import React from 'react';
import { Link } from 'react-router-dom';

const WorksThumbnail = ({ name, pictures, tagsList, id }) => {

	return (
        <Link className="work--link" to={`${process.env.PUBLIC_URL}/works/${id}`}>
    		<div className="work">
                <div className="work--thumb">
                    <img src={pictures.sizes[4].link} alt={name} className="work--thumb--img" />
                </div>
                <div className="work--title">
                    <h4 className="work--title--text">{name}</h4>
                    <p className="work--title--tag">
                    	{tagsList}
                    </p>
                </div>
            </div>
        </Link>
	);
}

export default WorksThumbnail;