import React from 'react';
import styles from './Dialogs.module.css';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {
	return (
		<div className={styles.dialogContent}>
			<div className={styles.dialogRow}>
				<div className={styles.dialogUsers}>
					<DialogUser name="Rocket Fdasdasd" src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" />
					<DialogUser name="Groot" src="https://gamehag.com/static/avatar/5194053_max.jpg" />
					<DialogUser name="Rocket Fdasdasd" src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" />
					<DialogUser name="Groot" src="https://gamehag.com/static/avatar/5194053_max.jpg" />
					<DialogUser name="Rocket Fdasdasd" src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" />
					<DialogUser name="Groot" src="https://gamehag.com/static/avatar/5194053_max.jpg" />
					<DialogUser name="Rocket Fdasdasd" src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" />
					<DialogUser name="Groot" src="https://gamehag.com/static/avatar/5194053_max.jpg" />
					<DialogUser name="Rocket Fdasdasd" src="https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" />
					<DialogUser name="Groot" src="https://gamehag.com/static/avatar/5194053_max.jpg" />
				</div>
				<div className={styles.dialogMessages}>
					<div className={styles.currentUser}>
						<img className={styles.currentImage} src="https://gamehag.com/static/avatar/5194053_max.jpg" />
						<div className={styles.currentName}>
							Groot
						</div>
					</div>
					<div className={styles.messagesColumn}>
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
						<DialogMessage text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." />
					</div>
					<form className={styles.newPost}>
						<textarea required className={styles.message} placeholder="Type your message here..."></textarea>
						<button type="submit" className={styles.button}>Send</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;
