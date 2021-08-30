import React from 'react';
import styles from './FindUsers.module.css';
import AllUsersContainer from './AllUsers/AllUsersContainer';

const FindUsers = (props) => {
	return (
		<div>
			<div className={styles.findUserContainer}>
				<h2 className={styles.findUserTitle}>
					Find Users
				</h2>
				<AllUsersContainer />
				<button className={styles.moreUsers}>More Users</button>
			</div>
		</div>
	)
}

export default FindUsers;