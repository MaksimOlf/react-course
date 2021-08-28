import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import styles from './Profile.module.css'



const Profile = (props) => {


	return (
		<div>
			<div className={styles.topImage}>
				<img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="Logo not found" />
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
			<PostsContainer store={props.store} />
		</div>
	)
}

export default Profile;