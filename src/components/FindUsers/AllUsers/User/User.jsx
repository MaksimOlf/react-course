import React from 'react';
import styles from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
	debugger;
	let path = `/profile/${props.id}`;
	return (
		<div className={styles.user}>
			<NavLink className={styles.userLeft} to={path}>
				<img className={styles.image} src={props.src} alt="Avatar not found" />
				<button className={styles.follow}>follow</button>
			</NavLink>
			<div className={styles.userRight}>
				<span className={styles.userName}>
					{props.name}
				</span>
				<div className={styles.location}>
					<span className={styles.country}>
						{props.location.country}
					</span>
					<span className={styles.city}>
						{props.location.city}
					</span>
				</div>
				<span className={styles.userStatus}>
					{props.status}
				</span>
			</div>
		</div>
	)
}

export default User;