import React from 'react';
import styles from './DialogMessage.module.css';

const DialogMessage = (props) => {
	return (
		<div className={styles.dialogMessage}>
			{props.text}
		</div>
	)
}

export default DialogMessage;