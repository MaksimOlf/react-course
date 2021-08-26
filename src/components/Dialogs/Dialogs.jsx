import React from 'react';

import styles from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Dialog from './Dialog/Dialog';

import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/state';

const Dialogs = (props) => {

	let userDialog = props.data.dialogUsers.map(user => <DialogUser id={user.id} name={user.name} src={user.src} />);

	let newDialogMessage = React.createRef();

	let addNewMessage = () => {
		props.dispatch(addMessageActionCreator());
		newDialogMessage.current.value = '';
	}

	let onMessageChange = () => {
		let text = newDialogMessage.current.value;
		let action = onMessageChangeActionCreator(text);
		props.dispatch(action);
	}

	return (
		<div className={styles.dialogContent}>
			<div className={styles.dialogRow}>
				<div className={styles.dialogUsers}>
					{userDialog}
				</div>
				<div className={styles.dialogMessages}>
					<div className={styles.currentUser}>
						<img className={styles.currentImage} src="https://gamehag.com/static/avatar/5194053_max.jpg" />
						<div className={styles.currentName}>
							Groot
						</div>
					</div>
					<Dialog dialogMessages={props.data.dialogMessages} />
					<div className={styles.newPost}>
						<textarea ref={newDialogMessage} className={styles.message} onChange={onMessageChange} value={props.dialogTextarea} placeholder="Type your message here..." />
						<button onClick={addNewMessage} className={styles.button}>Send</button>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Dialogs;