import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { filterAttributes, search } from '../Utils/utils';
import { fetchData } from '../Utils/api';
import Button from '../Components/Button';
import '../Assets/Styles/Products.css';

const Products = () => {
	// state for maintaining catelogues
	const [catalogue, setCatalogue] = useState([]);
	const [updatedCat, setUpdatedCat] = useState([]);

	// state for user search
	const [userSearch, setUserSearch] = useState('');

	// state for filter
	const [filterAttr, setFilterAttr] = useState({
		type: [],
		color: [],
		gender: [],
		price: []
	});
	const [checkBox, setCheckBox] = useState(false);

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

	const handleApply = () => {
		console.log('You clicked on Apply:', filterAttr);
	};

	const handleClear = () => {};

	const handleCheckBox = (e) => {
		let filterType = e.target.getAttribute('data-filterBy');
		let { name, value } = e.target;

		setCheckBox((prev) => !prev);

		if (filterAttr[filterType]) {
			if (filterAttr[filterType].includes(value)) {
				let indexOfCurrentElem = filterAttr[filterType].indexOf(value);
				filterAttr[filterType].splice(indexOfCurrentElem, 1);
				setFilterAttr((prev) => prev);
			} else {
				setFilterAttr((prev) => {
					return {
						...prev,
						[filterType]: prev[filterType].concat(value)
					};
				});
			}
		}
	};

	console.log('filterAttr:', filterAttr);

	// let isBool =

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
			{/* <Header /> */}
			<section>
				<div className='search--button-container'>{/* <Search onChange={handleSearch} value={userSearch} /> */}</div>
			</section>
			<section className='products-body-container'>
				<Card>
					<div className='filter-items'>
						<h3>Colour</h3>
						{filterAttributes.colour.values.map((color) => (
							<FilterItem
								content={color}
								value={color}
								name={color}
								filterBy='color'
								onChange={handleCheckBox}
								checkBox={checkBox}
							/>
						))}
					</div>
					<div className='filter-items'>
						<h3>Gender</h3>
						{filterAttributes.gender.values.map((gen) => (
							<FilterItem content={gen} value={gen} name={gen} onChange={handleCheckBox} filterBy='gender' />
						))}
					</div>
					<div className='filter-items'>
						<h3>Price</h3>
						{filterAttributes.price.data.prices.map((amt, index) => (
							<FilterItem
								content={filterAttributes.price.data.content[index]}
								value={amt}
								name={amt}
								filterBy='price'
								onChange={handleCheckBox}
							/>
						))}
					</div>
					<div className='filter-items'>
						<h3>Type</h3>
						{filterAttributes.type.values.map((item) => (
							<FilterItem content={item} value={item} name={item} onChange={handleCheckBox} filterBy='type' />
						))}
					</div>

					<div className='action-btns'>
						<Button onClick={handleApply}>Apply</Button>
						<Button onClick={handleClear}>Clear</Button>
					</div>
				</Card>
				<div>{/* <Card>{content}</Card> */}</div>
			</section>
		</div>
	);
};

export default Products;

const FilterItem = ({ content, name, value, onChange, checkBox, filterBy }) => {
	return (
		<div className='filter-items-value'>
			<input
				type='checkbox'
				onChange={onChange}
				name={name}
				value={value}
				data-filterBy={filterBy}
				checked={checkBox}
			/>
			<div>{content}</div>
		</div>
	);
};
