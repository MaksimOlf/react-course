import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = (props) => {

	let dialogPost = props.infoPosts.map(p => <Post nLikes={p.nLikes} name={p.name} text={p.text} src={p.src} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		debugger;
		let newPostText = newPostElement.current.value;
		props.addPost(newPostText);
		newPostElement.current.value = '';
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.textareaChange(text);
	}

	return (
		<div className={styles.posts}>
			<div className={styles.newPost}>
				<textarea ref={newPostElement} required className={styles.text} onChange={onPostChange} value={props.textreaText} />
				<button onClick={addPost} type="submit" className={styles.button}>Send</button>
			</div>
			{dialogPost}
		</div>
	)
}

export default Posts;