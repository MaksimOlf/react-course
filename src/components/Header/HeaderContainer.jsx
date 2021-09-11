import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/authReducer';
import Header from './Header';


class HeaderComponent extends React.Component {

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

export default connect(mapStateToProps, { logout, })(HeaderComponent);