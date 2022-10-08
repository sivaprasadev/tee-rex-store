import React from 'react';
import '../Assets/Styles/Button.css';

const Button = ({ children, styles }) => {
	return (
		<div>
			<button className='action-button' style={{ ...styles }}>
				{children}
			</button>
		</div>
	);
};

export default Button;
