import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) { userId = 19408 };
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} userStatus={this.props.userStatus} updateUserStatus={this.props.updateUserStatus} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
	}
};

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
	withRouter,
	withAuthRedirect,
)(ProfileContainer)

