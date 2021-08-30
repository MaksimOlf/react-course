import React from 'react';

import styles from './Dialog.module.css';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialog = (props) => {

	let messageDialog = props.dialogMessages.map(message => <DialogMessage key={message.id} text={message.text} />);

	return (

		<div className={styles.messagesColumn}>

			{messageDialog}

		</div>
	)
}

export default Dialog;
