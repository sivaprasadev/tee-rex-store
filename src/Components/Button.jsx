import React from 'react';
import '../Assets/Styles/Button.css';

const Button = ({ children, styles, onClick, ...rest }) => {
	return (
		<div>
			<button className='action-button' style={{ ...styles }} onClick={onClick} {...rest}>
				{children}
			</button>
		</div>
	);
};

export default Button;
