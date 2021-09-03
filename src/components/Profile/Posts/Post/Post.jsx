import React from 'react';
import styles from './Post.module.css'


const Post = (props) => {
	return (
		<div className={styles.post}>
			<div className={styles.message}>
				<div className={styles.text}>
					{props.text}
				</div>
				<div className={styles.likes}>
					<div className={styles.numbLikes}>
						{props.nLikes}
					</div>
					<button className={styles.likeButton}>
						<i className="far fa-heart"></i>
						like
					</button>
				</div>
			</div>
			<div className={styles.person}>
				<img className={styles.image} src={props.src} alt="Avatar not found" />
				<div className={styles.name}>
					{props.name}
				</div>
			</div>
		</div>
	)
}

export default Post;