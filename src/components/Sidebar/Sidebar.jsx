import React from 'react';


import styles from './Sidebar.module.css';
import Navigate from './Navigate/Navigate.jsx';
import FriendsContainer from './Friends/FriendsContainer';


const Sidebar = (props) => {
	return (
		<div className={styles.sidebarColumn}>
			<Navigate />
			<FriendsContainer />
		</div>
	)
}

export default Sidebar;