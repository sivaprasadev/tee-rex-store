import React from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card';
import Search from '../Components/Search';
import Button from '../Components/Button';
import ProductItem from '../Components/ProductItem';
import '../Assets/Styles/Products.css';

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
					<Card>
						<div className='filter-items'>
							<h3>Colour</h3>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Red</div>
							</div>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Blue</div>
							</div>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Green</div>
							</div>
						</div>
						<div className='filter-items'>
							<h3>Gender</h3>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Men</div>
							</div>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Women</div>
							</div>
						</div>
						<div className='filter-items'>
							<h3>Price</h3>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>0 - 250</div>
							</div>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>251 - 450</div>
							</div>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>450</div>
							</div>
						</div>
						<div className='filter-items'>
							<h3>Type</h3>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Polo</div>
							</div>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Hoodie</div>
							</div>
							<div className='filter-items-value'>
								<input type='checkbox' />
								<div>Basic</div>
							</div>
						</div>
					</Card>
				</div>
				<div>
					<Card>
						<div className='product-lists'>
							<ProductItem />
							<ProductItem />
							<ProductItem />
						</div>
					</Card>
				</div>
			</section>
		</div>
	);
};

export default Products;
