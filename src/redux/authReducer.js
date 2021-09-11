import { securityAPI, usersAPI } from '../api/api';
import { FORM_ERROR } from "final-form";
import { toggleIsFetching } from "./findUsersReducer";

const SET_USERS_DATA = 'SET_USERS_DATA';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';


let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	captchaURL: null,
}


const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_DATA: 
			return {
				...state,
				...action.data,
			}
		case GET_CAPTCHA_URL: 
			return {
				...state,
				captchaURL: action.captchaURL,
			}
		default: 
			return state;
	}
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
		type: SET_USERS_DATA,
		data:
			{
				userId,
				login,
				email,
				isAuth,
			}
	})

export const setCaptchaURL = (captchaURL) => ({
	type: GET_CAPTCHA_URL,
	captchaURL,
})


export const setAuthInfo = () => (dispatch) => {
		return usersAPI.authMe()
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, login, email } = response.data.data;
					dispatch(setAuthUserData(id, login, email, true));
				}
			});
	}

export const getCaptchaURL = () => async (dispatch) => {    
	dispatch(toggleIsFetching(true));
	const response = await securityAPI.getCaptcha();
	const captchaURL = response.data.url;     
	dispatch(setCaptchaURL(captchaURL));
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) =>  {
	dispatch(toggleIsFetching(true));
	let response = await usersAPI.login(email, password, rememberMe, captcha)
		if (response.data.resultCode === 0) {
			dispatch(setAuthInfo());
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaURL());
				return { [FORM_ERROR]: response.data.messages[0] }
			}
		}
		dispatch(toggleIsFetching(false)); 
		return { [FORM_ERROR]: response.data.messages[0] }
}

export const logout = () =>  {
	return (dispatch) => {
		usersAPI.logout().then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false));
			}
		});
	}
}

export default authReducer;