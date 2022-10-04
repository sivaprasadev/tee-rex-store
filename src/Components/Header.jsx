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
					Get flat <span style={{ color: '#FFE74C' }}>10%</span> off on your first order
				</marquee>
			</div>
		</>
	);
};

export default Header;
