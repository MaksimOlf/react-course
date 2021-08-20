import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './DialogUser.module.css';


const DialogUser = (props) => {
	let path = `/dialogs/${props.id}`;
	return (
		<NavLink className={styles.user} to={path} activeClassName={styles.active}>
			<img className={styles.image} src={props.src} alt="Avatar not found" />
			<span className={styles.name}>{props.name}</span>
		</NavLink>
	)
}

export default DialogUser;