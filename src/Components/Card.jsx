import React from 'react';
import '../Assets/Styles/Card.css';

const Card = ({ children, shadow }) => {
	let className = 'card-container-shadow-';
	return <div className={shadow === 'none' ? className + '0' : className + '1'}>{children}</div>;
};

export default Card;
