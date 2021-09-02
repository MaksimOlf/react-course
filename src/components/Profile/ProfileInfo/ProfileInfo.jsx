import React from 'react';

import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';



const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	let jobLocking = 'Нет';
	if (props.profile.lookingForAJob === true) {
		jobLocking = 'Да';
	} else {
		jobLocking = 'Нет';
	}

	return (
		<div>
			<div className={styles.topImage}>
				<img src={props.profile.photos.large} alt="Large photo not found" />
			</div>
			<div className={styles.profile}>
				<div className={styles.profileImage}>
					<img src={props.profile.photos.small} alt="Small photo not found" />
				</div>
				<div className={styles.profileName}>
					{props.profile.fullName}
				</div>
				<table className={styles.profileInfo}>
					<tr>
						<td><span>lookingForAJob</span></td>
						<td>{jobLocking}</td>
					</tr>
					<tr>
						<td><span>lookingForAJobDescription</span></td>
						<td>{props.profile.lookingForAJobDescription}</td>
					</tr>
					<tr>
						<td><span>About me</span></td>
						<td>{props.profile.aboutMe}</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default ProfileInfo;