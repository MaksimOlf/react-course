import React from 'react';
import styles from './Header.module.css';


const Header = () => {
	return (
		<header className={styles.appHeader}>
			<a href="#">
				<img src="./images/pngegg.png" alt="Logo not found" />
			</a>
		</header>
	)
}

export default Header;