import React from 'react';
import Posts from './Posts/Posts';
import styles from './Profile.module.css'


const Profile = () => {
	return (
		<div>
			<div className={styles.topImage}>
				<img src="./images/offset_comp_772626-opt.jpg" alt="Logo not found" />
			</div>
			<div className={styles.profile}>
				<div className={styles.profileImage}>
					<img src="https://hsto.org/getpro/habr/post_images/585/18b/a98/58518ba9884cfa5c4bc1cd9053ef5b4d.png" alt="Logo not found" />
				</div>
				<div className={styles.profileName}>
					Maksim O.
				</div>
				<table className={styles.profileInfo}>
					<tr>
						<td><span>Date of birth:</span></td>
						<td>14.04.1988</td>
					</tr>
					<tr>
						<td><span>City:</span></td>
						<td>Kruvij Rih</td>
					</tr>
					<tr>
						<td><span>Education:</span></td>
						<td>KEI KNEU</td>
					</tr>
					<tr>
						<td><span>Web Site:</span></td>
						<td><a href="https://maksimolf.github.io/Indent/">https://maksimolf.github.io/Indent/</a></td>
					</tr>
				</table>
			</div>
			<Posts />
		</div>
	)
}

export default Profile;