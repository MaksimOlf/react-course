import React from 'react';

import styles from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {

	let userDialog = props.data.dialogUsers.map(user => <DialogUser id={user.id} name={user.name} src={user.src} />);

	let newDialogMessage = React.createRef();

	let addMessage = () => {
		let MessageText = newDialogMessage.current.value;
		alert(MessageText);
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
						<textarea ref={newDialogMessage} required className={styles.message} placeholder="Type your message here..."></textarea>
						<button onClick={addMessage} type="submit" className={styles.button}>Send</button>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Dialogs;
