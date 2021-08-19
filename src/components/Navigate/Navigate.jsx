import React from 'react';
import styles from './Navigate.module.css'


const Navigate = () => {
	return (
		<nav className={styles.navigate}>
			<ul className={styles.navigateList}>
				<li className={styles.navigateLink}>
					<a href="#">Profile</a>
				</li>
				<li className={styles.navigateLink}>
					<a href="#">Messages</a>
				</li>
				<li className={styles.navigateLink}>
					<a href="#">News</a>
				</li>
				<li className={styles.navigateLink}>
					<a href="#">Music</a>
				</li>
				<li className={styles.navigateLink}>
					<a href="#">Settings</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigate;