import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
	sideBar: sideBarReducer,
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	findUsers: findUsersReducer,
	auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;