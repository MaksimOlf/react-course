import React, { useState } from 'react';

import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import defaultAvatar from '../../../assets/images/default_avatar.jpg';
import defaultLarge from '../../../assets/images/profileDefaultLarge.jpg';

import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileForm from './ProfileForm/ProfileForm';

const ProfileInfo = (props) => {

	const [infoChanged, isInfoChanged] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	const onAvatarSelected = (e) => {
		if (e.target.files.length) {
			props.saveAvatar(e.target.files[0]);
		}
	}

	return (
		<div>
			<div className={styles.topImage}>
				<img src={props.profile.photos.large ? props.profile.photos.large : defaultLarge} alt="" />
			</div>
			<div className={styles.profile}>
				<div className={styles.profileImage}>
					<img src={props.profile.photos.small ? props.profile.photos.small : defaultAvatar} alt="" />
					{props.isOwner? <input type={"file"} onChange={onAvatarSelected}/> : ""}
				</div>
				<div className={styles.profileName}>
					{props.profile.fullName}
				</div>
				<ProfileStatus userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} />
				{infoChanged ? <ProfileForm isInfoChanged={isInfoChanged} profile={props.profile} saveProfile={props.saveProfile}	/> :
					<div className={styles.profileInfo}>
						<div className={styles.title}>My info</div>
						<div className={styles.profileJobInfo}>
							<div className={styles.profileInfoLeft}>
								<div>Looking for a job</div>
								<div>Looking for a job description</div>
								<div>About me</div>
							</div>
							<div className={styles.profileInfoRight}>
								<div>{props.profile.lookingForAJob ? "Yes" : "No"}</div>
								<div>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : '-'}</div>
								<div>{props.profile.aboutMe ? props.profile.aboutMe : '-'}</div>
							</div>
						</div>
						<div className={styles.title}>Contacts</div>
						<div className={styles.profileContacts}>		
							<div className={styles.profileInfoLeft}>
								<div>facebook</div>
								<div>website</div>
								<div>vk</div>
								<div>twitter</div>
								<div>instagram</div>
								<div>youtube</div>
								<div>github</div>
								<div>mainLink</div>
							</div>
							<div className={styles.profileInfoRight}>
								<div>{props.profile.contacts.facebook ? props.profile.contacts.facebook : '-'}</div>
								<div>{props.profile.contacts.website ? props.profile.contacts.website : '-'}</div>
								<div>{props.profile.contacts.vk ? props.profile.contacts.vk : '-'}</div>
								<div>{props.profile.contacts.twitter ? props.profile.contacts.twitter : '-'}</div>
								<div>{props.profile.contacts.instagram ? props.profile.contacts.instagram : '-'}</div>
								<div>{props.profile.contacts.youtube ? props.profile.contacts.youtube : '-'}</div>
								<div>{props.profile.contacts.github ? props.profile.contacts.github : '-'}</div>
								<div>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : '-'}</div>
							</div>
						</div>
						{props.profileInfoError && <div className={styles.error}>{props.profileInfoError}</div>}
						{props.isOwner ? 
						<button className={styles.button} onClick={() => isInfoChanged(true)}>Change</button> : ""}
					</div>}
			</div>
		</div>
	)
}

export default ProfileInfo;