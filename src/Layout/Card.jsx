import React from 'react';
import styles from './Style/Card.module.scss';

const Card = ({ children }) => <div className={styles.color}>{children}</div>;

export default Card;
