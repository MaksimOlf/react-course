import React from 'react';


const Profile = () => {
	return (
		<div className="app-content">
			<div className="content__top-image">
				<img src="./images/offset_comp_772626-opt.jpg" alt="Logo not found" />
			</div>
			<div className="content__profile">
				<div className="content__profile-image">
					<img src="https://hsto.org/getpro/habr/post_images/585/18b/a98/58518ba9884cfa5c4bc1cd9053ef5b4d.png" alt="Logo not found" />
				</div>
				<div className="content__profile-name">
					Maksim O.
				</div>
				<table className="content__profile-info">
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
			<div className="content__posts">
				<div className="content__posts-new">
					New post
				</div>
				<div className="content__posts-post">
					Post 1
				</div>
				<div class="content__posts-post">
					Post 2
				</div>
			</div>
		</div>
	)
}

export default Profile;