import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";


let store = {
	_state: {
		sideBar: {
			myFriends: [
				{ id: 1, name: "Rocket Fdasdasd", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
				{ id: 2, name: "Groot", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
				{ id: 3, name: "Vanja", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
				{ id: 4, name: "Ira", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
				{ id: 5, name: "Valera", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg" },
				{ id: 6, name: "John", src: "https://gamehag.com/static/avatar/5194053_max.jpg" },
			],
		},
		dialogsPage: {
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
		},
		profilePage: {
			infoPosts: [
				{ id: 1, name: "Rocket", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg", text: 'Nds kmk mkllewkm  kwem kewm kwem wem ekw!!!', nLikes: 23 },
				{ id: 2, name: "Groot", src: "https://gamehag.com/static/avatar/5194053_max.jpg", text: 'I AM GROOT!!!', nLikes: 47 },
			],
			textreaText: '',
		}
	},


	_callSubscriber() {
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.sideBar = sideBarReducer(this._state.sideBar, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);

		this._callSubscriber(this._state);
	}
}


window.store = store;

export default store;