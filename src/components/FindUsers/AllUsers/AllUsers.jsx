import React from 'react';
import styles from './AllUsers.module.css';
import { NavLink } from 'react-router-dom';

import default_avatar from '../../../assets/images/default_avatar.jpg';
import Paginator from './Paginator';


let AllUsers = (props) => {

	return (
		<div className={styles.usersColumn} >
			<Paginator totalUsersCount={props.totalUsersCount}
			pageSize={props.pageSize}
			currentPage={props.currentPage}
			onPageChanged={props.onPageChanged} />
			{
				props.users.map(user => (
					<div className={styles.user} key={user.id}>
						<div className={styles.userLeft}>
							<NavLink to={`/profile/${user.id}`}>
								<img className={styles.image}
									src={user.photos.small != null ? user.photos.small : default_avatar}
									alt='Avatar not found' />
							</NavLink>
							{user.followed ? <button disabled={props.followInProgress.some(id => id === user.id)} onClick={() => {
								props.unFollow(user.id);
							}} className={styles.follow}>unfollow</button>
								: <button disabled={props.followInProgress.some(id => id === user.id)} onClick={() => {
									props.follow(user.id);
								}} className={styles.follow}>follow</button>}
						</div>
						<div className={styles.userRight}>
							<span className={styles.userName}>
								{user.name}
							</span>
							<div className={styles.location}>
								<span className={styles.country}>
									{'Country'}
								</span>
								<span className={styles.city}>
									{'City'}
								</span>
							</div>
							<span className={styles.userStatus}>
								{user.status}
							</span>
						</div>
					</div>
				))
			}
		</div >
	)
}

export default AllUsers;