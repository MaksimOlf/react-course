import React from 'react';
import styles from './AllUsers.module.css';
import { NavLink } from 'react-router-dom';

const AllUsers = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1, followed: true, name: "Rocket",
				src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg",
				location: { country: "Germany", city: "Berlin" }, status: "S!!!!!!!!!!!!!!!!!!!!!!!tus"
			},
			{
				id: 2, followed: false, name: "Groot",
				src: "https://gamehag.com/static/avatar/5194053_max.jpg",
				location: { country: "Germany", city: "Paris" }, status: "Status-hwqewqjewqeatus"
			},
			{
				id: 3, followed: false, name: "Captain_America",
				src: "https://static.wikia.nocookie.net/marvels-avengers4475/images/3/3e/Captain_America_headshot.jpg",
				location: { country: "Germany", city: "Minsk" }, status: "Statuss sadasdasd"
			},
			{
				id: 4, followed: false, name: "Iron Man",
				src: "https://static.wikia.nocookie.net/marvel-contestofchampions/images/b/b7/Iron_Man_%28Infinity_War%29_portrait.png",
				location: { country: "Germany", city: "Bern" }, status: "Statushj  asd asd asd "
			},
			{
				id: 5, followed: true, name: "Julia",
				src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8j_eHOkyvLkUe2TcR2MoRSVKMy2q0t3xFQ&usqp=CAU",
				location: { country: "Germany", city: "Porto" }, status: "Stdasdsadasdatus"
			},
			{
				id: 6, followed: false, name: "David Daut",
				src: "https://illusion0flife.files.wordpress.com/2015/04/ultron.jpg?w=256&h=256&crop=1",
				location: { country: "Germany", city: "Porto" }, status: "Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus RwqeqweqwdatusRwqeqweqwdatusRwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus Rwqeqweqwdatus RwqeqweqwdatusRwqeqweqwdatus Rwqeqweqwdatus RwqeqweqwdatusRwqeqweqwdatus"
			},
			{
				id: 7, followed: true, name: "Igor",
				src: "https://qph.fs.quoracdn.net/main-qimg-62fc9bcbe5b842073e14b724a96efed3-mzj",
				location: { country: "Germany", city: "Porto" }, status: "dwqqwDDDDDDDDDDDDDDatus"
			},
			{
				id: 8, followed: true, name: "Thor",
				src: "https://www.1c-interes.ru/upload/resize_src/65/65dd6d14759444f869ac7648e83ddb70.jpg",
				location: { country: "Germany", city: "Porto" }, status: "dwdwdwwqdwqwwwwwwwwwwwus"
			},
			{
				id: 9, followed: false, name: "Spider-Man",
				src: "https://avatarfiles.alphacoders.com/131/thumb-1920-131632.jpg",
				location: { country: "Germany", city: "Porto" }, status: "wStatwwwwus-hujwewqatus"
			},
			{
				id: 10, followed: false, name: "Dr. Strange",
				src: "https://files.eventee.co/thumbnail/l91f4btk0FZjboqPiNF6/gYjTmVIRkusC5JyY/jPnX0b516037383441602926166.jpg",
				location: { country: "Germany", city: "Porto" }, status: "Staeqwetus-huewqewqejatus"
			},
		])
	}

	return <div div className={styles.usersColumn} > {
		props.users.map(user => (
			<div className={styles.user} key={user.id}>
				<div className={styles.userLeft}>
					<NavLink to={`/profile/${user.id}`}>
						<img className={styles.image} src={user.src} alt="Avatar not found" />
					</NavLink>
					{user.followed ? <button onClick={() => { props.unFollow(user.id) }} className={styles.follow}>unfollow</button>
						: <button onClick={() => { props.follow(user.id) }} className={styles.follow}>follow</button>}
				</div>
				<div className={styles.userRight}>
					<span className={styles.userName}>
						{user.name}
					</span>
					<div className={styles.location}>
						<span className={styles.country}>
							{user.location.country}
						</span>
						<span className={styles.city}>
							{user.location.city}
						</span>
					</div>
					<span className={styles.userStatus}>
						{user.status}
					</span>
				</div>
			</div>
		))}
	</div>
}

export default AllUsers;