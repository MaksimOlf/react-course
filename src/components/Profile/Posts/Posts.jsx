import React from 'react';
import { Form, Field } from 'react-final-form'

import Post from './Post/Post';
import styles from './Posts.module.css';


const Posts = (props) => {

	let dialogPost = props.infoPosts.map(p => <Post key={p.id} nLikes={p.nLikes} name={p.name} text={p.text} src={p.src} />);

	return (
		<div className={styles.posts}>
			<NewProfilePost addNewPost={props.addNewPost} textreaText={props.textreaText} />
			{dialogPost}
		</div>
	)
}


const NewProfilePost = (props) => {

	let addPost = (values) => {
		props.addNewPost(values.newProfilePost);
		values.newProfilePost = '';
	}

	return (
		<Form className={styles.newPost} onSubmit={addPost}>
			{({ handleSubmit, submitting }) =>
				<form className={styles.newPost} onSubmit={handleSubmit}>
					<Field component={'textarea'} value={props.textreaText} name="newProfilePost"
						className={styles.text} placeholder="Type your message here..." />
					<button type="submit" className={styles.button} disabled={submitting}>Send</button>
				</form>
			}
		</Form>
	)
}

export default Posts;