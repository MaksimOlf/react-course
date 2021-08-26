import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';

import { addPostActionCreator, onTextareaChangeActionCreator } from '../../../redux/state';

const Posts = (props) => {

	let dialogPost = props.infoPosts.map(p => <Post nLikes={p.nLikes} name={p.name} text={p.text} src={p.src} />);

	let newPostElement = React.createRef();

	let addNewPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = onTextareaChangeActionCreator(text);
		props.dispatch(action);
	}

	return (
		<div className={styles.posts}>
			<div className={styles.newPost}>
				<textarea ref={newPostElement} className={styles.text} onChange={onPostChange} value={props.textreaText} placeholder='Type your message here...' />
				<button onClick={addNewPost} className={styles.button}>Send</button>
			</div>
			{dialogPost}
		</div>
	)
}

export default Posts;