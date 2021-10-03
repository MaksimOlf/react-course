import React from 'react';
import styles from './AllUsers.module.css';
import { NavLink } from 'react-router-dom';

import default_avatar from '../../../assets/images/default_avatar.jpg';
import Paginator from './Paginator';


let AllFriends = (props) => {

	return (
		<div className={styles.usersColumn} >
			<div className={styles.paggination} >
				<Paginator
				totalUsersCount={props.totalFriendsCount}
				pageSize={props.pageFriendsSize}
				currentPage={props.currentFriendsPage}
				onPageChanged={props.onPageChanged}/>
			</div>
			{
				props.friends.map(friend => (
					<div className={styles.friend} key={friend.id}>
						<div className={styles.userLeft}>
							<NavLink to={`/profile/${friend.id}`}>
								<img className={styles.image}
									src={friend.photos.small != null ? friend.photos.small : default_avatar}
									alt='Avatar not found' />
							</NavLink>
							{friend.followed ? <button disabled={props.followInProgress.some(id => id === friend.id)} onClick={() => {
								props.unFollow(friend.id);
							}} className={styles.follow}>unfollow</button>
								: <button disabled={props.followInProgress.some(id => id === friend.id)} onClick={() => {
									props.follow(friend.id);
								}} className={styles.follow}>follow</button>}
						</div>
						<div className={styles.userRight}>
							<span className={styles.userName}>
								{friend.name}
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
								{friend.status}
							</span>
						</div>
					</div>
				))
			}
		</div >
	)
}

export default AllFriends;