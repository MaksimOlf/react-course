import React from 'react';
import AllUsers from './AllUsers';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		users: state.findUsers.users,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
	}
};

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;