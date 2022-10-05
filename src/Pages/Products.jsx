import React from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Search from '../Components/Search';
import '../Assets/Styles/Products.css';
import Button from '../Components/Button';

const Products = () => {
	return (
		<div>
			<Header />
			<section>
				<div className='search--button-container'>
					<Search />
					<Button>Search</Button>
				</div>
			</section>
			<section className='products-body-container'>
				<div>
					<Card>Filter section will goes here</Card>
				</div>
				<div>
					<Card>Product list will goes here</Card>
				</div>
			</section>
		</div>
	);
};

export default Products;
