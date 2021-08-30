import React from 'react';

import styles from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import DialogContainer from './Dialog/DialogContainer';


const Dialogs = (props) => {
	let userDialog = props.dialogUsers.map(user => <DialogUser key={user.id} name={user.name} src={user.src} />);

	let newDialogMessage = React.createRef();

	let addNewMessage = () => {
		props.addMessage();
		newDialogMessage.current.value = '';
	}

	let onMessageChange = () => {
		let text = newDialogMessage.current.value;
		props.updateMessage(text);
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
					<DialogContainer />
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
