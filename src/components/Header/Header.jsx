import React from 'react';
import styles from './Header.module.css';


const Header = () => {
	return (
		<header className={styles.appHeader}>
			<a href="#">
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Logo not found" />
			</a>
		</header>
	)
}

export default Header;