import React from 'react';

import Friend from './Friend/Friend';
import styles from './Friends.module.css';


const Friends = (props) => {

	let dssdv = props.myFriends.map(friend => <Friend name={friend.name} src={friend.src} />)

	return (
		<div className={styles.friends}>
			<ul className={styles.friendsList}>

				{dssdv}
			</ul>
		</div>
	)
}

export default Friends;