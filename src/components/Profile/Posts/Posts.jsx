import React from 'react';
import { Form, Field } from 'react-final-form'
import { composeValidators, required, minLength, maxLength } from '../../../utils/validators';

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
					<Field name="newProfilePost" className={styles.field} validate={composeValidators(required, minLength(3), maxLength(500))}>
						{({ input, meta }) => (
							<div className={styles.text}>
								<textarea {...input} type="textarea" className={styles.textarea + (meta.error && meta.touched ? ' ' + styles.textareaError : '')}
									placeholder="Type your message here..." />
								{meta.error && meta.touched && <span><br />{meta.error}</span>}
							</div>
						)}
					</Field>
					<button type="submit" className={styles.button} disabled={submitting}>Send</button>
				</form>
			}
		</Form>
	)
}

export default Posts;