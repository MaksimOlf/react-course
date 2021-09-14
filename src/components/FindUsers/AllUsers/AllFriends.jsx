import React from 'react';
import styles from './AllUsers.module.css';
import { NavLink } from 'react-router-dom';

import default_avatar from '../../../assets/images/default_avatar.jpg';


let AllFriends = (props) => {
	let pagesCount = Math.ceil(props.totalFriendsCount / props.pageFriendsSize);
	let friendPages = [];
	if (pagesCount <= 10) {
		for (let i = 1; i <= pagesCount; i++) {
			friendPages.push(i);
		}
	} else if (props.currentFriendsPage <= pagesCount) {
		if (props.currentFriendsPage > 500) { friendPages.push(Math.ceil((props.currentFriendsPage - 500) / 100) * 100); }
		if (props.currentFriendsPage > 100) { friendPages.push(Math.ceil((props.currentFriendsPage - 100) / 50) * 50); }
		if (props.currentFriendsPage > 30) { friendPages.push(Math.ceil((props.currentFriendsPage - 30) / 10) * 10); }
		if (props.currentFriendsPage > 4) { friendPages.push('...') }
		if (props.currentFriendsPage < 5) {
			for (let i = 1; i <= 10; i++) {
				friendPages.push(i);
			}
		} else {
			for (let i = props.currentFriendsPage - 3; i <= props.currentFriendsPage + 3 && i <= pagesCount; i++) {
				friendPages.push(i);
			}
		}
		if (pagesCount - props.currentFriendsPage > 3) { friendPages.push('...') }
		if (pagesCount - props.currentFriendsPage > 30) { friendPages.push(Math.floor((props.currentFriendsPage + 30) / 10) * 10); }
		if (pagesCount - props.currentFriendsPage > 100) { friendPages.push(Math.floor((props.currentFriendsPage + 100) / 50) * 50); }
		if (pagesCount - props.currentFriendsPage > 500) { friendPages.push(Math.floor((props.currentFriendsPage + 500) / 100) * 100); }
	}
	debugger;

	return (
		<div className={styles.usersColumn} >
			<div className={styles.paggination} >
				{friendPages.map(friendPage => {
					return (
						<span onClick={(e) => { if (friendPage !== '...') { props.onPageChanged(friendPage) } }}
							className={props.currentFriendsPage === friendPage && styles.selectedPage} >
							{friendPage}
						</span>)
				})}
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