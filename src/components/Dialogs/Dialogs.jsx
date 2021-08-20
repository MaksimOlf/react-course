import React from 'react';

import styles from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import Dialog from './Dialog/Dialog';

const Dialogs = (props) => {

	let dialogUsers = [
		{ id: 1, name: "Rocket Fdasdasd", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
		{ id: 2, name: "Groot", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
		{ id: 3, name: "Vanja", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
		{ id: 4, name: "Ira", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
		{ id: 5, name: "Valera", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
		{ id: 6, name: "John", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
		{ id: 7, name: "Igor", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
		{ id: 8, name: "Artjom", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
		{ id: 9, name: "Vasja", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
		{ id: 10, name: "Julia", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
	]
	return (
		<div className={styles.dialogContent}>
			<div className={styles.dialogRow}>
				<div className={styles.dialogUsers}>
					<DialogUser id={dialogUsers[0].id} name={dialogUsers[0].name} src={dialogUsers[0].src} />
					<DialogUser id={dialogUsers[1].id} name={dialogUsers[1].name} src={dialogUsers[1].src} />
					<DialogUser id={dialogUsers[2].id} name={dialogUsers[2].name} src={dialogUsers[2].src} />
					<DialogUser id={dialogUsers[3].id} name={dialogUsers[3].name} src={dialogUsers[3].src} />
					<DialogUser id={dialogUsers[4].id} name={dialogUsers[4].name} src={dialogUsers[4].src} />
					<DialogUser id={dialogUsers[5].id} name={dialogUsers[5].name} src={dialogUsers[5].src} />
					<DialogUser id={dialogUsers[6].id} name={dialogUsers[6].name} src={dialogUsers[6].src} />
					<DialogUser id={dialogUsers[7].id} name={dialogUsers[7].name} src={dialogUsers[7].src} />
					<DialogUser id={dialogUsers[8].id} name={dialogUsers[8].name} src={dialogUsers[8].src} />
					<DialogUser id={dialogUsers[9].id} name={dialogUsers[9].name} src={dialogUsers[9].src} />
				</div>
				<div className={styles.dialogMessages}>
					<div className={styles.currentUser}>
						<img className={styles.currentImage} src="https://gamehag.com/static/avatar/5194053_max.jpg" />
						<div className={styles.currentName}>
							Groot
						</div>
					</div>
					<Dialog />
					<form className={styles.newPost}>
						<textarea required className={styles.message} placeholder="Type your message here..."></textarea>
						<button type="submit" className={styles.button}>Send</button>
					</form>
				</div>
			</div>
		</div >
	)
}

export default Dialogs;
