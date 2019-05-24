import React from 'react';

const Rank = ({ username, entries }) => {
	return(
		<div className="tc white text-shadow" style={{textShadow: '1px 1px 1px #000'}}>
			<h2>
				{`${username}, your current entry count is...`}
			</h2>
		 	<h2>
				{`#${entries}`}
			</h2>
		</div>
	);
}

export default Rank;