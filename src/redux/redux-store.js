import { combineReducers, createStore } from 'redux';


import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findUsersReducer from "./findUsersReducer";

let reducers = combineReducers({
	sideBar: sideBarReducer,
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	findUsers: findUsersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;