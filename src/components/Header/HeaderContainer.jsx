import React from 'react';
import { connect } from 'react-redux';

import { setAuthInfo } from '../../redux/authReducer';
import { logout } from '../../redux/authReducer';
import Header from './Header';


class HeaderComponent extends React.Component {

	componentDidMount() {
		this.props.setAuthInfo();
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
	setAuthInfo,
	logout,
})(HeaderComponent);