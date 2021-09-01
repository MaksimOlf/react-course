import React from 'react';
import { connect } from 'react-redux';
import { setUsersTotalCountAC, setCurrentPageAC, followAC, unFollowAC, setUsersAC } from './../../../redux/findUsersReducer';
import * as axios from 'axios';
import AllUsers from './AllUsers';

class AllUsersContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setUsersTotalCount(response.data.totalCount);
		});
	}

	onPageChanged = (page) => {
		this.props.setCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	}

	render() {
		return <AllUsers users={this.props.users}
			pageSize={this.props.pageSize}
			totalUsersCount={this.props.totalUsersCount}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			follow={this.props.follow}
			unFollow={this.props.unFollow} />
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.findUsers.users,
		pageSize: state.findUsers.pageSize,
		totalUsersCount: state.findUsers.totalUsersCount,
		currentPage: state.findUsers.currentPage,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage));
		},
		setUsersTotalCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount));
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersContainer);
