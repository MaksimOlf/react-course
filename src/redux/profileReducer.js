import { usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const TEXTAREA_CHANGE = "TEXTAREA-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
	infoPosts: [
			{ id: 1, name: "Rocket", src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg", text: 'Nds kmk mkllewkm  kwem kewm kwem wem ekw!!!', nLikes: 23 },
			{ id: 2, name: "Groot", src: "https://gamehag.com/static/avatar/5194053_max.jpg", text: 'I AM GROOT!!!', nLikes: 47 },
		],
	textreaText: '',
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 3,
				name: "Maksim",
				src: "https://hsto.org/getpro/habr/post_images/585/18b/a98/58518ba9884cfa5c4bc1cd9053ef5b4d.png",
				text: state.textreaText,
				nLikes: 0,
			}
			return {
				...state,
				infoPosts: [...state.infoPosts, newPost],
				textreaText: '',
			};
		}
		case TEXTAREA_CHANGE: {
			return {
				...state,
				textreaText: action.text,
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({
		type: ADD_POST,
	})

export const onTextareaChangeActionCreator = (text) => ({
		type: TEXTAREA_CHANGE,
		text,
	})
export const setUserProfile = (profile) => ({
		type: SET_USER_PROFILE,
		profile,
	})

export const getUserProfile = (userId) =>  {
	return (dispatch) => {
		usersAPI.getUser(userId).then(response => {dispatch(setUserProfile(response))});
	}
}

export default profileReducer;