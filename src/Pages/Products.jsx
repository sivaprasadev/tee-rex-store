import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { filterAttributes, search } from '../Utils/utils';
import { fetchData } from '../Utils/api';
import '../Assets/Styles/Products.css';

const Products = () => {
	const [catalogue, setCatalogue] = useState([]);
	const [updatedCat, setUpdatedCat] = useState([]);
	const [userSearch, setUserSearch] = useState('');

	useEffect(() => {
		fetchData().then((data) => {
			if (data && Array.isArray(data)) {
				setCatalogue(data);
			}
		});
	}, []);

	const handleSearch = (e) => {
		setUserSearch(e.target.value);
		let f = search(e.target.value, catalogue);
		setUpdatedCat(f);
	};

	let content = '';

	if (!userSearch) {
		content = (
			<div className='product-lists'>
				{catalogue.map((cat) => (
					<ProductItem id={cat.id} name={cat.name} price={cat.price} image={cat.imageURL} curr={cat.currency} />
				))}
			</div>
		);
	} else if (userSearch && updatedCat.length > 0) {
		content = (
			<div className='product-lists'>
				{updatedCat.map((cat) => (
					<ProductItem id={cat.id} name={cat.name} price={cat.price} image={cat.imageURL} curr={cat.currency} />
				))}
			</div>
		);
	} else if (updatedCat.length === 0) {
		content = <div>"search not found"</div>;
	}

	return (
		<div>
			<Header />
			<section>
				<div className='search--button-container'>
					<Search onChange={handleSearch} value={userSearch} />
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
