import React from 'react';
import { connect } from 'react-redux';

import { toggleFollowInProgress, toggleIsFetching, setUsersTotalCount, setCurrentPage, follow, unFollow, setUsers } from './../../../redux/findUsersReducer';
import { getUsers } from '../../../api/api';
import AllUsers from './AllUsers';
import Preloader from '../../../components/common/preloader/preloader';


class AllUsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		getUsers(this.props.currentPage, this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.items);
				this.props.setUsersTotalCount(response.totalCount);
			});
	}

	onPageChanged = (page) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(page);
		getUsers(page, this.props.pageSize)
			.then(response => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.items);
			});
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<AllUsers users={this.props.users}
				pageSize={this.props.pageSize}
				totalUsersCount={this.props.totalUsersCount}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
				toggleFollowInProgress={this.props.toggleFollowInProgress}
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
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching,
	toggleFollowInProgress,
})(AllUsersContainer);
