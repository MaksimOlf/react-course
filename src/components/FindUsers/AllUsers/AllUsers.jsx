import React from 'react';
import styles from './AllUsers.module.css';
import { NavLink } from 'react-router-dom';

import default_avatar from '../../../assets/images/default_avatar.jpg';

let AllUsers = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div className={styles.usersColumn} >
			<div className={styles.paggination} >
				{pages.map(page => { return (<span onClick={(e) => { props.onPageChanged(page); }} span className={props.currentPage === page && styles.selectedPage} >{page}</span>) })}
			</div>
			{
				props.users.map(user => (
					<div className={styles.user} key={user.id}>
						<div className={styles.userLeft}>
							<NavLink to={`/profile/${user.id}`}>
								<img className={styles.image} src={user.photos.small != null ? user.photos.small : default_avatar} />
							</NavLink>
							{user.followed ? <button onClick={() => { props.unFollow(user.id) }} className={styles.follow}>unfollow</button>
								: <button onClick={() => { props.follow(user.id) }} className={styles.follow}>follow</button>}
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
				))
			}
		</div >
	)
}

export default AllUsers;