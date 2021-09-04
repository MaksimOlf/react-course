import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';


const Header = (props) => {
	return (
		<header className={styles.appHeader}>
			<NavLink to={`/profile`}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="Logo not found" />
			</NavLink>
			<div className={styles.loginBlock}>
				{props.isAuth ?
					<div className={styles.userName}> {props.login} </div>
					: <NavLink to={`/login`} className={styles.loginButton}>
						Login
					</NavLink>
				}
			</div>
		</header>
	)
}

export default Header;