import React from 'react';
import { Link } from 'react-router-dom';

import Sale from '../Assets/Img/landing-page-bg-modal4.jpg';
import '../Assets/Styles/Landing.css';

const Landing = () => {
	return (
		<div className='grid-container'>
			<div className='first-division'></div>
			<div className='second-division'>
				<div className='second-division-container'>
					<div>
						<img src={Sale} style={styles.saleImage} />
					</div>
					<div className='shop-now-btn-container'>
						<Link to='/products'>
							<button className='shop-now-btn'>Shop Now</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='third-division'></div>
		</div>
	);
};

export default Landing;

const styles = {
	saleImage: { height: 500 }
};
