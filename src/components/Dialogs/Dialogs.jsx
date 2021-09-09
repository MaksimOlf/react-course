import React from 'react';
import { Form, Field } from 'react-final-form'

import styles from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import DialogContainer from './Dialog/DialogContainer';
import { composeValidators, required, minLength, maxLength } from '../../utils/validators';


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
					<NewDialogsMessage addMessage={props.addMessage} />
				</div>
			</div>
		</div >
	)
}

const NewDialogsMessage = (props) => {

	let addNewMessage = (values) => {
		props.addMessage(values.newMessageText);
	}

	return (
		<Form onSubmit={addNewMessage}>
			{({ handleSubmit, submitting }) =>
				<form className={styles.newPost} onSubmit={handleSubmit}>
					<Field name="newMessageText" className={styles.message} validate={composeValidators(required, minLength(3), maxLength(300))} >
						{({ input, meta }) => (
							<div className={styles.text}>
								<textarea {...input} type="textarea" className={styles.textarea + (meta.error && meta.touched ? ' ' + styles.textareaError : '')}
									placeholder="Type your message here..." />
								{meta.error && meta.touched && <span><br />{meta.error}</span>}
							</div>
						)}
					</Field>
					<button type="submit" className={styles.button} disabled={submitting}>Send</button>
				</form>
			}
		</Form>
	)
}


export default Dialogs;
