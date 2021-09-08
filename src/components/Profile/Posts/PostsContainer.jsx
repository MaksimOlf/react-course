import { connect } from 'react-redux';

import { addPostActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';


let mapStateToProps = (state) => {
	return {
		infoPosts: state.profilePage.infoPosts,
		textreaText: state.profilePage.textreaText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addNewPost: (newProfilePost) => {
			dispatch(addPostActionCreator(newProfilePost));
		},
	}
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;