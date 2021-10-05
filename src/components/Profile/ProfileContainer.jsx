import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { getUserProfile, getUserStatus, updateUserStatus, saveAvatar } from './../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login');
			}
		};
		this.props.getUserProfile(userId);
		this.props.getUserStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		return (
			<Profile
			isOwner={!this.props.match.params.userId}
			{...this.props}
			profile={this.props.profile}
			userStatus={this.props.userStatus}
			updateUserStatus={this.props.updateUserStatus}
			saveAvatar={this.props.saveAvatar} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth,
	}
};

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, saveAvatar }),
	withRouter,
	withAuthRedirect,
)(ProfileContainer)

