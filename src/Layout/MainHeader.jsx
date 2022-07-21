import React from 'react';
import styles from './Style/MainHeader.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaTshirt } from 'react-icons/fa';

const MainHeader = () => {
	return (
		<div className={styles.container}>
			<div className={`w-100 ${styles.store_name}`}>
				<div className={styles.tshirt_icon}>
					<FaTshirt />
				</div>
				<h2>TeesRex Store</h2>
			</div>
			<div className={`w-100 ${styles.actions_container}`}>
				<h2>Products</h2>
				<div className={styles.cart_icon}>
					<span className={styles.cart_icon}>
						<AiOutlineShoppingCart />
					</span>
					<span className={styles.cart_item_count}>1</span>
				</div>
			</div>
		</div>
	);
};

export default MainHeader;
