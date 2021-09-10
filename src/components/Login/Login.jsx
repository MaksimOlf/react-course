import React from 'react';
import { Form, Field } from 'react-final-form'
import { login } from '../../redux/authReducer';

import styles from './Login.module.css';
import { composeValidators, required, minLength, maxLength } from '../../utils/validators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}
	return (
		<div className={styles.loginPage} >
			<h2 className={styles.loginTitle} >Login</h2>
			<ConnectedLoginForm />
		</div>
	)
}

const LoginForm = (props) => {

	const inLogin = (values) => { props.login(values.email, values.password, values.rememberMe) };

	return (
		<Form onSubmit={inLogin}>
			{({ handleSubmit, submitting }) => (
				<form onSubmit={handleSubmit} className={styles.loginForm}>
					<Field name="email" className={styles.loginBlock} validate={composeValidators(required, minLength(3), maxLength(30))} >
						{({ input, meta }) => (
							<div className={styles.text}>
								<input {...input} type="email" className={styles.email + (meta.error && meta.touched ? ' ' + styles.inputError : '')}
									placeholder="Email" />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<Field name={'password'} className={styles.passwordBlock} validate={composeValidators(required, minLength(4), maxLength(50))} >
						{({ input, meta }) => (
							<div className={styles.text}>
								<input {...input} type="password" className={styles.password + (meta.error && meta.touched ? ' ' + styles.inputError : '')}
									placeholder='Password' />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<Field name={'rememberMe'}  >
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
		</Form >
	)
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	}
};

let ConnectedLoginForm = connect(null, { login })(LoginForm);


export default connect(mapStateToProps, {})(Login);