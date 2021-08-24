import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './Friend.module.css';


const Friend = (props) => {

	return (
		<li className={styles.friend}>
			<NavLink to="/profile">
				<img className={styles.image} src={props.src} alt="Avatar not found" />
				<span className={styles.name}>{props.name}</span>
			</NavLink>
		</li>
	)
}

export default Friend;