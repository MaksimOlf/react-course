import React from 'react';
import styles from './Post.module.css'


const Post = () => {
	return (
		<div class={styles.post}>
			<div class={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi possimus molestias itaque alias. Reprehenderit veniam nisi omnis earum consectetur reiciendis pariatur vero eum repellat repudiandae voluptates vitae sapiente officia animi fugit in iusto culpa odit consequuntur consequatur, numquam accusantium.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi possimus molestias itaque alias. Reprehenderit veniam nisi omnis earum consectetur reiciendis pariatur vero eum repellat repudiandae voluptates vitae sapiente officia animi fugit in iusto culpa odit consequuntur consequatur, numquam accusantium.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi possimus molestias itaque alias. Reprehenderit veniam nisi omnis earum consectetur reiciendis pariatur vero eum repellat repudiandae voluptates vitae sapiente officia animi fugit in iusto culpa odit consequuntur consequatur, numquam accusantium.
			</div>
			<img class={styles.image} src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" alt="Avatar not found" />
		</div>
	)
}

export default Post;