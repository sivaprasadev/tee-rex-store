import React from 'react';
import '../Assets/Styles/Button.css';

const Button = ({ children }) => {
	return (
		<div>
			<button className='action-button'>{children}</button>
		</div>
	);
};

export default Button;
