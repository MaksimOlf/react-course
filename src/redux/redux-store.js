import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
  sideBar: sideBarReducer,
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  findUsers: findUsersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
