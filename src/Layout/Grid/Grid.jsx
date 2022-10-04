import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './style.css';

const Grid = () => {
	return (
		<div className='container-wrapper'>
			<div className='container'>
				<div className='item'>Teerex Store</div>
				<div className='item products--and-cart'>
					<div>Products</div>
					<div className='cart-button-container'>
						<div className='cart-button'>
							<AiOutlineShoppingCart />
							<span>1</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Grid;
