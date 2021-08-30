import React from 'react';
import { connect } from 'react-redux';
import Dialog from './Dialog';



let mapStateToProps = (state) => {
	return {
		dialogMessages: state.dialogsPage.dialogMessages,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
	}
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;

