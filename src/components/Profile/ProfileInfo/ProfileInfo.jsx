import React from 'react';

import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import defaultAvatar from '../../../assets/images/default_avatar.jpg';
import defaultLarge from '../../../assets/images/profileDefaultLarge.jpg';



const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	let jobLoocking = '-';
	if (props.profile.lookingForAJob === true) {
		jobLoocking = 'Да';
	} else {
		jobLoocking = '-';
	}

	return (
		<div>
			<div className={styles.topImage}>
				<img src={props.profile.photos.large ? props.profile.photos.large : defaultLarge} alt="Large photo not found" />
			</div>
			<div className={styles.profile}>
				<div className={styles.profileImage}>
					<img src={props.profile.photos.small ? props.profile.photos.small : defaultAvatar} alt="Small photo not found" />
				</div>
				<div className={styles.profileName}>
					{props.profile.fullName}
				</div>
				<table className={styles.profileInfo}>
					<tr>
						<td><span>lookingForAJob</span></td>
						<td>{jobLoocking}</td>
					</tr>
					<tr>
						<td><span>lookingForAJobDescription</span></td>
						<td>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : '-'}</td>
					</tr>
					<tr>
						<td><span>About me</span></td>
						<td>{props.profile.aboutMe ? props.profile.aboutMe : '-'}</td>
					</tr>
					<div className={styles.contactsTitle}>Contacts</div>
					<tr>
						<td><span>facebook</span></td>
						<td>{props.profile.contacts.facebook ? props.profile.contacts.facebook : '-'}</td>
					</tr>
					<tr>
						<td><span>website</span></td>
						<td>{props.profile.contacts.website ? props.profile.contacts.website : '-'}</td>
					</tr>
					<tr>
						<td><span>vk</span></td>
						<td>{props.profile.contacts.vk ? props.profile.contacts.vk : '-'}</td>
					</tr>
					<tr>
						<td><span>twitter</span></td>
						<td>{props.profile.contacts.twitter ? props.profile.contacts.twitter : '-'}</td>
					</tr>
					<tr>
						<td><span>instagram</span></td>
						<td>{props.profile.contacts.instagram ? props.profile.contacts.instagram : '-'}</td>
					</tr>
					<tr>
						<td><span>youtube</span></td>
						<td>{props.profile.contacts.youtube ? props.profile.contacts.youtube : '-'}</td>
					</tr>
					<tr>
						<td><span>github</span></td>
						<td>{props.profile.contacts.github ? props.profile.contacts.github : '-'}</td>
					</tr>
					<tr>
						<td><span>mainLink</span></td>
						<td>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : '-'}</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default ProfileInfo;