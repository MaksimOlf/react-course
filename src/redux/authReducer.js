import { usersAPI } from '../api/api';

const SET_USERS_DATA = 'SET_USERS_DATA';


let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
}


const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS_DATA: 
			return {
				...state,
				...action.data,
				isAuth: true,
			}
		default: 
			return state;
	}
}

export const setAuthUserData = (userId, login, email) => ({
		type: SET_USERS_DATA,
		data:
			{userId,
			login,
			email,}
	})


export const setAuthInfo = () =>  {
	return (dispatch) => {
		usersAPI.authMe().then(response => {
			if (response.data.resultCode === 0) {
				let { id, login, email } = response.data.data;
				dispatch(setAuthUserData(id, login, email));
			}
		});
	}
}

export default authReducer;