import { connect } from 'react-redux';
import { compose } from 'redux';

import Dialogs from './Dialogs';

import { addMessageActionCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
	return {
		dialogUsers: state.dialogsPage.dialogUsers,
		dialogTextarea: state.dialogsPage.dialogTextarea,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: (newMessageText) => {
			dispatch(addMessageActionCreator(newMessageText));
		},
	}
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect,
)(Dialogs);

