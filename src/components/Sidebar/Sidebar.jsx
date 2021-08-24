import React from 'react';


import styles from './Sidebar.module.css';
import Navigate from './Navigate/Navigate.jsx';
import Friends from './Friends/Friends.jsx';


const Sidebar = (props) => {
	return (
		<div className={styles.sidebarColumn}>
			<Navigate />
			<Friends myFriends={props.data.myFriends} />
		</div>
	)
}

export default Sidebar;