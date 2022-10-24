import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { filterAttributes, search, btnStatus, filterArray } from '../Utils/utils';
import { fetchData } from '../Utils/api';
import Button from '../Components/Button';
import '../Assets/Styles/Products.css';

const Products = () => {
	// state for maintaining catelogues
	const [catalogue, setCatalogue] = useState([]);
	const [updatedCat, setUpdatedCat] = useState([]);
	const [filteredCat, setFilteredCat] = useState({ filteredCatelogue: [], error: '' });

	// state for user search
	const [userSearch, setUserSearch] = useState('');

	/**
	 * state for filter
	 * ----------------
	 * the state filterAttr stores user selected filter attributes.
	 * the state filterCheckBox manage the checked state for each checkboxes.To do so, it is easy to handle clearing at once.
	 */
	const [filterAttr, setFilterAttr] = useState({
		type: [],
		color: [],
		gender: [],
		price: []
	});
	const [filterCheckBox, setFilterCheckBox] = useState({
		color: new Array(3).fill(false),
		gender: new Array(2).fill(false),
		type: new Array(3).fill(false)
	});

	const [selectedPriceRange, setSelectedPriceRange] = useState('');

	const [triggerTimeout, setTriggerTimeout] = useState(false);

	/**
	 * The btnStatus method travels through each filter property array and return either true or false by checking,
	 * atleast one element in the array is true.
	 */
	let isBtnDisabled = btnStatus(filterCheckBox);

	useEffect(() => {
		fetchData().then((data) => {
			if (data && Array.isArray(data)) {
				setCatalogue(data);
			}
		});
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setTriggerTimeout(true);
		}, 1000);
	}, [triggerTimeout]);

	const handleSearch = (e) => {
		setUserSearch(e.target.value);
		let f = search(e.target.value, catalogue);
		setUpdatedCat(f);
	};

	const handleApply = () => {
		console.log('You clicked on Apply:', filterAttr);
		let appendPriceWithState = { ...filterAttr, price: selectedPriceRange ? [selectedPriceRange] : [] };
		console.log('updatedState:', appendPriceWithState);
		let filteredArray = filterArray(catalogue, appendPriceWithState);
		console.log('filteredArray:', filteredArray);
		if (filteredArray.length === 0) {
			setFilteredCat((prevState) => ({ ...prevState, error: 'No matching found!' }));
			return;
		}
		setTriggerTimeout(false);
		setFilteredCat({ filteredCatelogue: filteredArray });
	};

	console.log('filteredCat:', filteredCat);

	const handleClear = () => {
		setFilterCheckBox({
			color: new Array(3).fill(false),
			gender: new Array(2).fill(false),
			type: new Array(3).fill(false)
		});
		setFilterAttr({
			type: [],
			color: [],
			gender: [],
			price: []
		});
		setFilteredCat({ filteredCatelogue: [], error: '' });
		setTriggerTimeout(false);
		setSelectedPriceRange('');
	};

	const handleCheckBox = (e, position) => {
		let filterType = e.target.getAttribute('data-filterby');
		let { value } = e.target;

		let updatedCheckBox = filterCheckBox[filterType].map((item, index) => (index === position ? !item : item));

		// update state when checkbox's status changed.
		setFilterCheckBox((prevState) => {
			return {
				...prevState,
				[filterType]: updatedCheckBox
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

	const handleSelectedPrice = (e) => {
		setSelectedPriceRange(e.target.value);
	};

	console.log('filterAttr:', filterAttr);
	console.log('selectedPriceRange:', selectedPriceRange);

	let content = '';

	if (userSearch && updatedCat.length > 0) {
		content = (
			<div className='product-lists'>
				{updatedCat.map((cat) => (
					<ProductItem
						id={cat.id}
						name={cat.name}
						price={cat.price}
						image={cat.imageURL}
						curr={cat.currency}
						gender={cat.gender}
					/>
				))}
			</div>
		);
	} else if ((userSearch && updatedCat.length === 0) || filteredCat.error) {
		content = <div>{filteredCat.error ? filteredCat.error : 'search not found'}</div>;
	} else if (filteredCat.filteredCatelogue && filteredCat.filteredCatelogue.length > 0) {
		content = (
			<div className='product-lists'>
				{filteredCat.filteredCatelogue.map((cat) => (
					<ProductItem
						id={cat.id}
						name={cat.name}
						price={cat.price}
						image={cat.imageURL}
						curr={cat.currency}
						gender={cat.gender}
					/>
				))}
			</div>
		);
	} else {
		content = (
			<div className='product-lists'>
				{catalogue.map((cat) => (
					<ProductItem
						id={cat.id}
						name={cat.name}
						price={cat.price}
						image={cat.imageURL}
						curr={cat.currency}
						gender={cat.gender}
					/>
				))}
			</div>
		);
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
						{filterAttributes.colour.values.map((color, index) => (
							<FilterItem
								content={color}
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
								onChange={(e) => handleCheckBox(e, index)}
								checkBox={filterCheckBox.gender[index]}
								filterBy='gender'
							/>
						))}
					</div>
					<div className='filter-items'>
						<h3>Price</h3>
						<select onChange={handleSelectedPrice} value={selectedPriceRange}>
							{filterAttributes.price.map((item) => (
								<option value={item.value}>{item.title}</option>
							))}
						</select>
						{/* {filterAttributes.price.data.prices.map((amt, index) => (
							<FilterItem
								content={filterAttributes.price.data.content[index]}
								selectedPrice={amt}
								filterBy='price'
								onChange={(e) => handleCheckBox(e, index)}
								checkBox={filterCheckBox.price[index]}
							/>
						))} */}
					</div>
					<div className='filter-items'>
						<h3>Type</h3>
						{filterAttributes.type.values.map((item, index) => (
							<FilterItem
								content={item}
								onChange={(e) => handleCheckBox(e, index)}
								checkBox={filterCheckBox.type[index]}
								filterBy='type'
							/>
						))}
					</div>

					<div className='action-btns'>
						<Button onClick={handleApply} disabled={!isBtnDisabled && !selectedPriceRange}>
							Apply
						</Button>

						<Button onClick={handleClear} disabled={!isBtnDisabled && !selectedPriceRange}>
							Clear
						</Button>
					</div>
				</Card>
				<div>
					<Card>{triggerTimeout ? content : 'Please wait...'}</Card>
				</div>
			</section>
		</div>
	);
};

export default Products;

const FilterItem = ({ content, selectedPrice, onChange, checkBox, filterBy }) => {
	// selectedPrice is a prop only used for price checkbox to get the single price value.
	// eg: if user selected 0-250 price range, selectedPrice will have only the value 250.
	return (
		<div className='filter-items-value'>
			<input
				type='checkbox'
				onChange={onChange}
				name={selectedPrice ? selectedPrice : content}
				value={selectedPrice ? selectedPrice : content}
				data-filterby={filterBy}
				checked={checkBox}
			/>
			<div>{content}</div>
		</div>
	);
};
