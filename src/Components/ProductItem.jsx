import React from 'react';
import Tshirt from '../Assets/Img/polo-tshirts.png';
import Button from './Button';
import '../Assets/Styles/ProductItem.css';

const ProductItem = () => {
	return (
		<div className='product-item-container'>
			<div className='product-item-img'>
				<img src={Tshirt} alt='t-shirt' />
			</div>
			<div className='product-item-price'>
				<span>$100</span>
			</div>
			<div className='product-item-btn'>
				<Button>Add to cart</Button>
			</div>
		</div>
	);
};

export default ProductItem;
