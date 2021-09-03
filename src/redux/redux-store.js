import { combineReducers, createStore } from 'redux';


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

let store = createStore(reducers);

window.store = store;

export default store;