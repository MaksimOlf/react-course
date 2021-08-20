import React from 'react';

import styles from './Dialog.module.css';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialog = (props) => {

	let dialogMessages = [
		{ id: 1, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." },
		{ id: 2, text: "Lorem ipsum, dolor sit amet consecteo fuga porro consequatur quodti eaque dur odit sequi deserunt." },
		{ id: 3, text: "Lorem ipsum, dolor sit am." },
		{ id: 4, text: "Yo" },
		{ id: 5, text: "Rsequatur quodti eaque dur odit sequi deserunt. A libero officiis tempore architecto fuga porro consequatu...Todti eaque dur odit sequi deserunt." },
		{ id: 6, text: "Todti eaque dur odit sequi deserunt." },
		{ id: 7, text: "Ui deserunt." },
		{ id: 8, text: "Latur quodti eaque dur odit sequi deserunt." },
	]
	return (

		<div className={styles.messagesColumn}>
			<DialogMessage text={dialogMessages[0].text} />
			<DialogMessage text={dialogMessages[1].text} />
			<DialogMessage text={dialogMessages[2].text} />
			<DialogMessage text={dialogMessages[3].text} />
			<DialogMessage text={dialogMessages[4].text} />
			<DialogMessage text={dialogMessages[5].text} />
			<DialogMessage text={dialogMessages[6].text} />
			<DialogMessage text={dialogMessages[7].text} />
		</div>
	)
}

export default Dialog;
