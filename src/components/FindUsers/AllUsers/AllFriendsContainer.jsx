import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';


import { getFriendsThunkCreator, setCurrentFriendsPage, followSuccess, unFollowSuccess, follow, unFollow } from '../../../redux/findUsersReducer';
import AllFriends from './AllFriends';
import Preloader from '../../common/preloader/preloader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import {
	getStateFriends, getStateFriendsSize, getStateTotalFriendsCount,
	getStateCurrentFriendsPage, getStateIsFetching, getStateFollowInProgress
} from '../../../redux/usersSelectors';


class AllFriendsContainer extends React.Component {

	componentDidMount() { this.props.getFriendsThunkCreator(this.props.currentFriendsPage, this.props.pageFriendsSize) }

	onPageChanged = (page) => {
		this.props.getFriendsThunkCreator(page, this.props.pageFriendsSize)
		this.props.setCurrentFriendsPage(page);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<AllFriends friends={this.props.friends}
				pageFriendsSize={this.props.pageFriendsSize}
				totalFriendsCount={this.props.totalFriendsCount}
				currentFriendsPage={this.props.currentFriendsPage}
				onPageChanged={this.onPageChanged}
				followSuccess={this.props.followSuccess}
				unFollowSuccess={this.props.unFollowSuccess}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
				followInProgress={this.props.followInProgress} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		friends: getStateFriends(state),
		pageFriendsSize: getStateFriendsSize(state),
		totalFriendsCount: getStateTotalFriendsCount(state),
		currentFriendsPage: getStateCurrentFriendsPage(state),
		isFetching: getStateIsFetching(state),
		followInProgress: getStateFollowInProgress(state),
	}
};

export default compose(
	connect(mapStateToProps, {
		followSuccess,
		unFollowSuccess,
		follow,
		unFollow,
		setCurrentFriendsPage,
		getFriendsThunkCreator,
	}),
	withAuthRedirect,
)(AllFriendsContainer);

