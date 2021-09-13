const ADD_MESSAGE = 'ADD-MESSAGE';


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
		{ id: 1, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A libero officiis tempore architecto fuga porro consequatur dicta incidunt sequi quidem accusantium iste, magnam quaerat possimus qui quod error, doloribus vero molestias? Obcaecati eaque dicta quae accusantium consectetur odit sequi deserunt.", myMessage: false, },
		{ id: 2, text: "Lorem ipsum, dolor sit amet consecteo fuga porro consequatur quodti eaque dur odit sequi deserunt.", myMessage: false, },
		{ id: 3, text: "Lorem ipsum, dolor sit am.", myMessage: false, },
		{ id: 4, text: "Yo", myMessage: false, },
		{ id: 5, text: "Rsequatur quodti eaque dur odit sequi deserunt. A libero officiis tempore architecto fuga porro consequatu...Todti eaque dur odit sequi deserunt.", myMessage: false, },
		{ id: 6, text: "Todti eaque dur odit sequi deserunt.", myMessage: false, },
		{ id: 7, text: "Ui deserunt.", myMessage: false, },
		{ id: 8, text: "Latur quodti eaque dur odit sequi deserunt.", myMessage: false, },
		{ id: 9, text: "Latur quodti eaque dur odit sequi deserunt.", myMessage: false, },
		{ id: 10, text: "Latur quodti eaque dur odit sequi deserunt.", myMessage: false, },
		{ id: 11, text: "Latur quodti eaque dur odit sequi deserunt.", myMessage: false, },
		{ id: 12, text: "Zonsequatur dicta incidudoloribus vero molestaccusantium consectetur odit sequi deserunt.", myMessage: false, },
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let body = action.newMessageText;
			return {
				...state,
				dialogMessages: [...state.dialogMessages, { id: 13, text: body, myMessage: true,}],
			};
		}
		default:
			return state;
	}

}


export const addMessageActionCreator = (newMessageText) => ({
		type: ADD_MESSAGE,
		newMessageText,
	})

export default dialogsReducer;