import { connect } from 'react-redux';
import { compose } from 'redux';

import Dialogs from './Dialogs';

import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(Dialogs);

