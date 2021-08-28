import React from 'react';

import { addPostActionCreator, onTextareaChangeActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';

const PostsContainer = (props) => {

	let state = props.store.getState();

	let addNewPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let updateNewPostText = (text) => {
		let action = onTextareaChangeActionCreator(text);
		props.store.dispatch(action);
	}

	return (<Posts addNewPost={addNewPost} updateNewPostText={updateNewPostText} infoPosts={state.profilePage.infoPosts} textreaText={state.profilePage.textreaText} />)
}

export default PostsContainer;