import React from 'react';

import Dialogs from './Dialogs';

import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {

	let state = props.store.getState();

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator());
	}

	let updateMessage = (text) => {
		let action = onMessageChangeActionCreator(text);
		props.store.dispatch(action);
	}

	return (
		<Dialogs addMessage={addMessage}
			updateMessage={updateMessage}
			dialogMessages={state.dialogsPage.dialogMessages}
			dialogUsers={state.dialogsPage.dialogUsers}
			dialogTextarea={state.dialogsPage.dialogTextarea}
		/>
	)
}

export default DialogsContainer;
