import React from 'react';
import { Form, Field } from 'react-final-form'

import styles from './Login.module.css';

const Login = (props) => {
	return (
		<div>
			<h2>Login</h2>
			<LoginForm />
		</div>
	)
}

const LoginForm = (props) => {
	return (
		<Form onSubmit={values => { console.log(values) }}>
			{({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<Field type="text" placeholder={'Login'} name={'login'} component={'input'} />
					</div>
					<div>
						<Field type="text" placeholder={'Password'} name={'password'} component={'input'} />
					</div>
					<div>
						<Field type="checkbox" name={'rememberMe'} component={'input'} />
						<span>Remember Me</span>
					</div>
					<div>
						<button type="submit">Login</button>
					</div>
				</form>
			)}
		</Form>
	)
}


export default Login;