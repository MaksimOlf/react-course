import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from './../../redux/profileReducer';



class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) { userId = 19408 };
		this.props.getUserProfile(userId)
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, { getUserProfile, })(WithUrlDataContainerComponent);
