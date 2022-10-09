import React from 'react';
import '../Assets/Styles/Button.css';

const Button = ({ children, styles, onClick }) => {
	return (
		<div>
			<button className='action-button' style={{ ...styles }} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

export default Button;
