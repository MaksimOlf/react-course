import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = (props) => {

	let dialogPost = props.infoPosts.map(p => <Post nLikes={p.nLikes} name={p.name} text={p.text} src={p.src} />);

	return (
		<div className={styles.posts}>
			<form className={styles.newPost}>
				<textarea required className={styles.text} placeholder="Type your message here..."></textarea>
				<button type="submit" className={styles.button}>Send</button>
			</form>
			{dialogPost}
		</div>
	)
}

export default Posts;