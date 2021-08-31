import React from 'react';
import AllUsers from './AllUsers';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC } from './../../../redux/findUsersReducer';

let mapStateToProps = (state) => {
	return {
		users: state.findUsers.users,
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
	}
};

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;