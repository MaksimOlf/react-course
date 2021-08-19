import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = () => {
	return (
		<div className={styles.posts}>
			<form className={styles.newPost}>
				<textarea required className={styles.text} placeholder="Type your message here..."></textarea>
				<button type="submit" className={styles.button}>Send</button>
			</form>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default Posts;