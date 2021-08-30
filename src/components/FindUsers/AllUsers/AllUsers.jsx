import React from 'react';
import styles from './AllUsers.module.css';
import User from './User/User';

const AllUsers = (props) => {
	let showAllUsers = props.users.map(user => <User id={user.id} name={user.name} src={user.src} location={user.location} status={user.status} />);

	return (
		<div className={styles.usersColumn}>
			{showAllUsers}
		</div>
	)
}

export default AllUsers;