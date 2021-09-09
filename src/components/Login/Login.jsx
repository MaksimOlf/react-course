import React from 'react';
import { Form, Field } from 'react-final-form'

import styles from './Login.module.css';
import { composeValidators, required, minLength, maxLength } from '../../utils/validators';

const Login = (props) => {
	return (
		<div className={styles.loginPage} >
			<h2 className={styles.loginTitle} >Login</h2>
			<LoginForm />
		</div>
	)
}

const LoginForm = (props) => {
	return (
		<Form onSubmit={values => { console.log(values) }}>
			{({ handleSubmit, submitting }) => (
				<form onSubmit={handleSubmit} className={styles.loginForm}>
					<Field name="login" className={styles.loginBlock} validate={composeValidators(required, minLength(3), maxLength(300))} >
						{({ input, meta }) => (
							<div className={styles.text}>
								<input {...input} type="input" className={styles.login + (meta.error && meta.touched ? ' ' + styles.inputError : '')}
									placeholder="Login" />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<Field name={'password'} className={styles.passwordBlock} validate={composeValidators(required, minLength(3), maxLength(300))} >
						{({ input, meta }) => (
							<div className={styles.text}>
								<input {...input} type="input" className={styles.password + (meta.error && meta.touched ? ' ' + styles.inputError : '')}
									placeholder='Password' />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<Field name={'rememberMe'} validate={composeValidators(required, minLength(3), maxLength(300))} >
						{({ input }) => (
							<div className={styles.rememberMeBlock}>
								<input {...input} type="checkbox" className={styles.rememberMe} />
								<span>Remember me</span>
							</div>
						)}
					</Field>
					<button type="submit" className={styles.button} disabled={submitting} >Login</button>
				</form>
			)}
		</Form>
	)
}


export default Login;