import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import { setAuthUserData } from '../../redux/authReducer';
import Header from './Header';


class HeaderComponent extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true,
		}).then(response => {
			if (response.data.resultCode === 0) {
				let { id, login, email } = response.data.data;
				this.props.setAuthUserData(id, login, email);
			}
		});
	}


	render() {
		return (
			<Header {...this.props} />
		)
	}
}
const mapStateToProps = (state) => ({
	login: state.auth.login,
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
	setAuthUserData,
})(HeaderComponent);