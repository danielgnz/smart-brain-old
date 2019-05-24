import React from 'react';
import Logo from '../components/Logo';

const Navigation = ({onRouteChange, currentRoute}) => {
	return (
		<nav className="flex flex-row justify-between">
				<div className="pa3">
					<Logo/>
				</div>
				{
					currentRoute === 'home'
					? <div className="flex flex-row justify-end">
						<p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signin')}>Sign Out</p>
					  </div>
					: <div className="flex flex-row justify-end">
						<p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signin')}>Sign In</p>
						<p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('register')}>Register</p>
					  </div>
				}
		</nav>
	);	
}

export default Navigation;