import React from 'react';
import { Form, Field } from 'react-final-form'

import styles from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import DialogContainer from './Dialog/DialogContainer';


const Dialogs = (props) => {
	let userDialog = props.dialogUsers.map(user => <DialogUser key={user.id} name={user.name} src={user.src} />);

	return (
		<div className={styles.dialogContent}>
			<div className={styles.dialogRow}>
				<div className={styles.dialogUsers}>
					{userDialog}
				</div>
				<div className={styles.dialogMessages}>
					<div className={styles.currentUser}>
						<img className={styles.currentImage} src="https://gamehag.com/static/avatar/5194053_max.jpg" alt="Avatar not found" />
						<div className={styles.currentName}>
							Groot
						</div>
					</div>
					<DialogContainer />
					<NewDialogsMessage addMessage={props.addMessage} dialogTextarea={props.dialogTextarea} updateMessage={props.updateMessage} />
				</div>
			</div>
		</div >
	)
}

const NewDialogsMessage = (props) => {

	let addNewMessage = (values) => {
		props.addMessage(values.newMessageText);
		values.newMessageText = '';
	}

	return (
		<Form onSubmit={addNewMessage}>
			{({ handleSubmit, submitting }) =>
				<form className={styles.newPost} onSubmit={handleSubmit}>
					<Field component={'textarea'} value={props.dialogTextarea} name="newMessageText"
						className={styles.message} placeholder="Type your message here..." />
					<button type="submit" className={styles.button} disabled={submitting}>Send</button>
				</form>
			}
		</Form>
	)
}


export default Dialogs;
