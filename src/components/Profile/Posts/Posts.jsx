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
			<Post nLikes="6" name="Rocket Fdasdasd" text="Nds kmk mkllewkm  kwem kewm kwem wem ekw!!!" src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" />
			<Post nLikes="15" name="Groot" text="I AM GROOT!!!" src="https://gamehag.com/static/avatar/5194053_max.jpg" />

		</div>
	)
}

export default Posts;