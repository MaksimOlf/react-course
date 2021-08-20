import React from 'react';
import styles from './Navigate.module.css';
import { NavLink } from 'react-router-dom';


const Navigate = () => {
	return (
		<nav className={styles.navigate}>
			<ul className={styles.navigateList}>
				<li className={styles.navigateLink}>
					<NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
				</li>
				<li className={styles.navigateLink}>
					<NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
				</li>
				<li className={styles.navigateLink}>
					<NavLink to="/news" activeClassName={styles.active}>News</NavLink>
				</li>
				<li className={styles.navigateLink}>
					<NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
				</li>
				<li className={styles.navigateLink}>
					<NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigate;