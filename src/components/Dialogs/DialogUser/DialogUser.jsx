import React from 'react';
import styles from './DialogUser.module.css';

const DialogUser = (props) => {
	return (
		<div className={styles.user}>
			<img className={styles.image} src={props.src} alt="Avatar not found" />
			<div className={styles.name}>
				{props.name}
			</div>
		</div>
	)
}

export default DialogUser;