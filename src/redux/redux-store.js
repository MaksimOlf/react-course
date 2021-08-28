import { combineReducers, createStore } from 'redux';

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
	sideBar: sideBarReducer,
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
});

let store = createStore(reducers);

export default store;