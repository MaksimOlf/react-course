import React from 'react';
import { connect } from 'react-redux';

import { addPostActionCreator, onTextareaChangeActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';


let mapStateToProps = (state) => {
	return {
		infoPosts: state.profilePage.infoPosts,
		textreaText: state.profilePage.textreaText,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addNewPost: () => {
			dispatch(addPostActionCreator());
		},
		updateNewPostText: (text) => {
			dispatch(onTextareaChangeActionCreator(text));
		},
	}
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;