import React from 'react';
import { connect } from 'react-redux';


import { getUsersThunkCreator, setCurrentPage, followSuccess, unFollowSuccess, follow, unFollow } from './../../../redux/findUsersReducer';
import AllUsers from './AllUsers';
import Preloader from '../../../components/common/preloader/preloader';


class AllUsersContainer extends React.Component {

	componentDidMount() { this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize) }

	onPageChanged = (page) => {
		this.props.getUsersThunkCreator(page, this.props.pageSize)
		this.props.setCurrentPage(page);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<AllUsers users={this.props.users}
				pageSize={this.props.pageSize}
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
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
		users: state.findUsers.users,
		pageSize: state.findUsers.pageSize,
		totalUsersCount: state.findUsers.totalUsersCount,
		currentPage: state.findUsers.currentPage,
		isFetching: state.findUsers.isFetching,
		followInProgress: state.findUsers.followInProgress,
	}
};




export default connect(mapStateToProps, {
	followSuccess,
	unFollowSuccess,
	follow,
	unFollow,
	setCurrentPage,
	getUsersThunkCreator,
})(AllUsersContainer);
