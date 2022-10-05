import React from 'react';
import '../Assets/Styles/Header.css';

const Header = () => {
	return (
		<>
			<div className='header-main-container'>
				<div className='header-store-name'>
					<span className='header-company-name'>Shan & Sons</span>
					<sup> &#174;</sup>
				</div>
				<p className='header-nav-link'>Products</p>
				<div className='header-cart-section'>
					<div className='header-cart-items'>
						<div>
							<span>Cart</span>
						</div>
						<p className='header-item-count'>10</p>
					</div>
				</div>
			</div>

			<div className='header-sub'>
				<marquee>
					<div className='marquee-offers'>
						<span>Buy 1 Get 1 Free</span>
						<span>|</span>
						<span>Buy 2 Get 2 Free</span>
						<span>|</span>
						<span>Buy 3 Get 3 Free</span>
					</div>
				</marquee>
			</div>
		</>
	);
};

export default Header;
