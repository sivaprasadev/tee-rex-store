import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { filterAttributes, search, btnStatus } from '../Utils/utils';
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
	const [filterCheckBox, setFilterCheckBox] = useState({
		color: new Array(3).fill(false),
		gender: new Array(2).fill(false),
		price: new Array(3).fill(false),
		type: new Array(3).fill(false)
	});

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

	const handleClear = () => {
		setFilterCheckBox({
			color: new Array(3).fill(false),
			gender: new Array(2).fill(false),
			price: new Array(3).fill(false),
			type: new Array(3).fill(false)
		});
		setFilterAttr({
			type: [],
			color: [],
			gender: [],
			price: []
		});
	};

	const handleCheckBox = (e, position) => {
		let filterType = e.target.getAttribute('data-filterby');
		let { value } = e.target;

		let output = filterCheckBox[filterType].map((item, index) => (index === position ? !item : item));

		setFilterCheckBox((prevState) => {
			return {
				...prevState,
				[filterType]: output
			};
		});

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
	console.log('filterCheckBox:', filterCheckBox);

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
						{filterAttributes.colour.values.map((color, index, arr) => (
							<FilterItem
								content={color}
								value={arr[index]}
								name={`${color}-${index}`}
								filterBy='color'
								onChange={(e) => handleCheckBox(e, index)}
								checkBox={filterCheckBox.color[index]}
							/>
						))}
					</div>
					<div className='filter-items'>
						<h3>Gender</h3>
						{filterAttributes.gender.values.map((gen, index) => (
							<FilterItem
								content={gen}
								value={gen}
								name={gen}
								onChange={(e) => handleCheckBox(e, index)}
								checkBox={filterCheckBox.gender[index]}
								filterBy='gender'
							/>
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
								onChange={(e) => handleCheckBox(e, index)}
								checkBox={filterCheckBox.price[index]}
							/>
						))}
					</div>
					<div className='filter-items'>
						<h3>Type</h3>
						{filterAttributes.type.values.map((item, index) => (
							<FilterItem
								content={item}
								value={item}
								name={item}
								onChange={(e) => handleCheckBox(e, index)}
								checkBox={filterCheckBox.type[index]}
								filterBy='type'
							/>
						))}
					</div>

					<div className='action-btns'>
						<Button onClick={handleApply} disabled={!btnStatus(filterCheckBox)}>
							Apply
						</Button>
						<Button onClick={handleClear} disabled={!btnStatus(filterCheckBox)}>
							Clear
						</Button>
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
				data-filterby={filterBy}
				checked={checkBox}
			/>
			<div>{content}</div>
		</div>
	);
};
