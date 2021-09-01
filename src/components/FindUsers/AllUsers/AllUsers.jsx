import React from 'react';
import styles from './AllUsers.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

import default_avatar from '../../../assets/images/default_avatar.jpg';

class AllUsers extends React.Component {

	getUsers = () => {
		if (this.props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				this.props.setUsers(response.data.items);
			});
		}
	}

	render() {
		return (
			<div div className={styles.usersColumn} >
				<button onClick={this.getUsers}>getUsers</button>
				{
					this.props.users.map(user => (
						<div className={styles.user} key={user.id}>
							<div className={styles.userLeft}>
								<NavLink to={`/profile/${user.id}`}>
									<img className={styles.image} src={user.photos.small != null ? user.photos.small : default_avatar} />
								</NavLink>
								{user.followed ? <button onClick={() => { this.props.unFollow(user.id) }} className={styles.follow}>unfollow</button>
									: <button onClick={() => { this.props.follow(user.id) }} className={styles.follow}>follow</button>}
							</div>
							<div className={styles.userRight}>
								<span className={styles.userName}>
									{user.name}
								</span>
								<div className={styles.location}>
									<span className={styles.country}>
										{'user.location.country'}
									</span>
									<span className={styles.city}>
										{'user.location.city'}
									</span>
								</div>
								<span className={styles.userStatus}>
									{user.status}
								</span>
							</div>
						</div>
					))}
			</div>
		)
	}
}

export default AllUsers;