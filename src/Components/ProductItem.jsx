import React from 'react';
import Button from './Button';
import '../Assets/Styles/ProductItem.css';

const ProductItem = ({ image, name = '', price, curr, id, gender }) => {
	return (
		<div className='product-item-container' key={id}>
			<div className='product-item-img'>
				<img src={image} alt={`${name}t-shirt`} />
			</div>
			<div className='product-item-details'>
				<div className='prod-name'>
					<span>{`${gender}'s ${name}`}</span>
				</div>

				<div className='prod-price'>
					<span>{`${curr}  ${price}`}</span>
				</div>

				<div className='product-item-btn'>
					<Button styles={{ width: '100%' }}>Add to cart</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
