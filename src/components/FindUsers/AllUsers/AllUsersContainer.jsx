import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import { toggleIsFetching, setUsersTotalCount, setCurrentPage, follow, unFollow, setUsers } from './../../../redux/findUsersReducer';
import AllUsers from './AllUsers';
import Preloader from '../../../components/common/preloader/preloader';


class AllUsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setUsersTotalCount(response.data.totalCount);
		});
	}

	onPageChanged = (page) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(page);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
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
				unFollow={this.props.unFollow} />
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
	}
};




export default connect(mapStateToProps, {
	follow,
	unFollow,
	setUsers,
	setCurrentPage,
	setUsersTotalCount,
	toggleIsFetching,
})(AllUsersContainer);
