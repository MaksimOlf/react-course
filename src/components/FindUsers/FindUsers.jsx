import React from 'react';
import styles from './FindUsers.module.css';
import AllUsersContainer from './AllUsers/AllUsersContainer';
import AllFriendsContainer from './AllUsers/AllFriendsContainer';

class FindUsers extends React.Component {
	constructor(props) {
		super(props);
		this.selectFriends = this.selectFriends.bind(this);
		this.selectUsers = this.selectUsers.bind(this);
		this.state = { usersType: false };
	}

	selectFriends() {
		this.setState({ usersType: true });
	}

	selectUsers() {
		this.setState({ usersType: false });
	}

	render() {
		const usersType = this.state.usersType;
		let selectedUsersType;
		if (usersType) {
			selectedUsersType = <AllFriendsContainer />;
		} else {
			selectedUsersType = <AllUsersContainer />;
		}

		return (
			<div>
				<div className={styles.findUserContainer}>
					<h2 className={styles.findUserTitle}>
						Find Users
					</h2>
					<div className={styles.buttons}>
						<button onClick={this.selectUsers} className={styles.FindUsersButton}>All Users</button>
						<button onClick={this.selectFriends} className={styles.FindUsersButton}>My Friends</button>
					</div>
					{selectedUsersType}
				</div>
			</div>
		);
	}
}

export default FindUsers;