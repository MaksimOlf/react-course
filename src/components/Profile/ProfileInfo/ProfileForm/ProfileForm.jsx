import React from 'react';
import { Formik, Form, Field } from "formik";
import styles from '../ProfileInfo.module.css';


export const ProfileForm = ({isInfoChanged, profile, saveProfile}) => {


	return (	
		<Formik
			initialValues={profile}
			onSubmit={(values) => {
				saveProfile(values);
				isInfoChanged(false);
			}}
		>
			{({ isSubmitting }) => (
			<Form>
				<div className={styles.profileInfo}>
					<div className={styles.title}>My info</div>
					<div className={styles.profileJobInfo}>
						<div className={styles.profileInfoLeft}>
							<div>Looking for a job</div>
							<div>Looking for a job description</div>
							<div>About me</div>
						</div>
						<div className={styles.profileInfoRight}>
							<Field type="checkbox" name="lookingForAJob" />
							<Field type="text"  name="lookingForAJobDescription" />
							<Field type="text" name="aboutMe" />
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
							<Field type="text" name="contacts.facebook" />
							<Field type="text" name="contacts.website" />
							<Field type="text" name="contacts.vk" />
							<Field type="text" name="contacts.twitter" />
							<Field type="text" name="contacts.instagram" />
							<Field type="text" name="contacts.youtube" />
							<Field type="text" name="contacts.github" />
							<Field type="text" name="contacts.mainLink" />
						</div>
					</div>
				</div>
				<button type="submit" className={styles.button}>Change</button>
			</Form>
			)}
			
		</Formik>
	)
}

export default ProfileForm;