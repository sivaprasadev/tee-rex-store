import React from 'react';
import styles from './Style/MainHeader.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const MainHeader = () => {
	return (
		<div className={styles['container-wrapper']}>
			<div className={styles.container}>
				<div>Teerex Store</div>
				<div className={styles['products--and-cart']}>
					<div>Products</div>
					<div className={styles['cart-button-container']}>
						<div className={styles['cart-button']}>
							<AiOutlineShoppingCart />
							<span>1</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;
