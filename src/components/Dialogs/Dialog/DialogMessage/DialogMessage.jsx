import React from 'react';
import styles from './DialogMessage.module.css';

const DialogMessage = (props) => {
	return (
		<div className={styles.dialogMessage + (props.myMessage === true ? ' ' + styles.myDialogMessage : '')}>
			{props.text}
		</div>
	)
}

export default DialogMessage;