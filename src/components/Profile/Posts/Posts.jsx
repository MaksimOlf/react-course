import React from 'react';
import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = () => {
	let infoPosts = [
		{ id: 1, name: "Rocket", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg", text: 'Nds kmk mkllewkm  kwem kewm kwem wem ekw!!!', nLikes: 23 },
		{ id: 2, name: "Groot", src: "https://gamehag.com/static/avatar/5194053_max.jpg", text: 'I AM GROOT!!!', nLikes: 47 },
	]
	return (
		<div className={styles.posts}>
			<form className={styles.newPost}>
				<textarea required className={styles.text} placeholder="Type your message here..."></textarea>
				<button type="submit" className={styles.button}>Send</button>
			</form>
			<Post nLikes={infoPosts[0].nLikes} name={infoPosts[0].name} text={infoPosts[0].text} src={infoPosts[0].src} />
			<Post nLikes={infoPosts[1].nLikes} name={infoPosts[1].name} text={infoPosts[1].text} src={infoPosts[1].src} />

		</div>
	)
}

export default Posts;