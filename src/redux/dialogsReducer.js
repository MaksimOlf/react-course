const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = "MESSAGE-CHANGE";



let initialState = {
		dialogUsers: [
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
	],
	dialogMessages: [
		{ id: 1, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt." },
		{ id: 2, text: "Lorem ipsum, dolor sit amet consecteo fuga porro consequatur quodti eaque dur odit sequi deserunt." },
		{ id: 3, text: "Lorem ipsum, dolor sit am." },
		{ id: 4, text: "Yo" },
		{ id: 5, text: "Rsequatur quodti eaque dur odit sequi deserunt. A libero officiis tempore architecto fuga porro consequatu...Todti eaque dur odit sequi deserunt." },
		{ id: 6, text: "Todti eaque dur odit sequi deserunt." },
		{ id: 7, text: "Ui deserunt." },
		{ id: 8, text: "Latur quodti eaque dur odit sequi deserunt." },
		{ id: 9, text: "Latur quodti eaque dur odit sequi deserunt." },
		{ id: 10, text: "Latur quodti eaque dur odit sequi deserunt." },
		{ id: 11, text: "Latur quodti eaque dur odit sequi deserunt." },
		{ id: 12, text: "Zonsequatur dicta incidudoloribus vero molestaccusantium consectetur odit sequi deserunt." },
	],
	dialogTextarea: '',
}


const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newPost = {
				id: 13,
				text: state.dialogTextarea,
			}
			return {
				...state,
				dialogMessages: [...state.dialogMessages, newPost],
				dialogTextarea: '',
			};
		}
		case MESSAGE_CHANGE: {
			return {...state,
			dialogTextarea: action.text,
			};
		}
		default:
			return state;
	}

}


export const addMessageActionCreator = () => ({
		type: ADD_MESSAGE,
	})

export const onMessageChangeActionCreator = (text) => ({
		type: MESSAGE_CHANGE,
		text,
	})

export default dialogsReducer;