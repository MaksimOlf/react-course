import React from 'react';
import { connect } from 'react-redux';

import Dialogs from './Dialogs';

import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';


let mapStateToProps = (state) => {
	return {
		dialogUsers: state.dialogsPage.dialogUsers,
		dialogTextarea: state.dialogsPage.dialogTextarea,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
		updateMessage: (text) => {
			dispatch(onMessageChangeActionCreator(text));
		},
	}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
