import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain-icon.png';
import './Logo.css';

const Logo = () => {
	return(
			<Tilt className="Tilt br-100 pointer shadow-5 " options={{ max : 35 }} style={{ height: 75, width: 75 }} >
 				<div className="Tilt-inner"><img className="pa2 ma1" src={brain} /></div>
			</Tilt>
	);
}

export default Logo;