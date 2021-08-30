import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = (props) => {

	let dialogPost = props.infoPosts.map(p => <Post key={p.id} nLikes={p.nLikes} name={p.name} text={p.text} src={p.src} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addNewPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={styles.posts}>
			<div className={styles.newPost}>
				<textarea ref={newPostElement} className={styles.text} onChange={onPostChange} value={props.textreaText} placeholder='Type your message here...' />
				<button onClick={addPost} className={styles.button}>Send</button>
			</div>
			{dialogPost}
		</div>
	)
}

export default Posts;