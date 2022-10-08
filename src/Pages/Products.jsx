import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Search from '../Components/Search';
import Button from '../Components/Button';
import ProductItem from '../Components/ProductItem';
import { filterAttributes } from '../Utils/utils';
import { fetchData } from '../Utils/api';
import '../Assets/Styles/Products.css';

const Products = () => {
	const [catalogue, setCatalogue] = useState([]);
	const [httpErr, setHttpErr] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetchData().then((data) => {
			if (data && Array.isArray(data)) {
				setCatalogue(data);
				setIsLoading(false);
			} else {
				setHttpErr(data);
				setIsLoading(false);
			}
		});
	}, []);

	let content = '';

	if (isLoading) {
		content = 'Loading';
	} else if (!isLoading && catalogue.length > 0) {
		content = (
			<div className='product-lists'>
				{catalogue.map((cat) => (
					<ProductItem id={cat.id} name={cat.name} price={cat.price} image={cat.imageURL} curr={cat.currency} />
				))}
			</div>
		);
	} else if (!isLoading && httpErr) {
		content = httpErr;
	}

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
				<Card>
					<div className='filter-items'>
						<h3>Colour</h3>
						{filterAttributes.colour.values.map((color) => (
							<FilterItem value={color} name={color} />
						))}
					</div>
					<div className='filter-items'>
						<h3>Gender</h3>
						{filterAttributes.gender.values.map((gen) => (
							<FilterItem value={gen} name={gen} />
						))}
					</div>
					<div className='filter-items'>
						<h3>Price</h3>
						{filterAttributes.price.values.map((amt) => (
							<FilterItem value={amt} name={amt} />
						))}
					</div>
					<div className='filter-items'>
						<h3>Type</h3>
						{filterAttributes.type.values.map((item) => (
							<FilterItem value={item} name={item} />
						))}
					</div>
				</Card>
				<div>
					<Card>{content}</Card>
				</div>
			</section>
		</div>
	);
};

export default Products;

const FilterItem = ({ name, value, onChange }) => {
	return (
		<div className='filter-items-value'>
			<input type='checkbox' onChange={onChange} name={name} value={value} />
			<div>{value}</div>
		</div>
	);
};
