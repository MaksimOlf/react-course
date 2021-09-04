const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';

let initialState = {
		users: [
	],
	pageSize: 6,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followInProgress: [],
}


const findUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: 
			return {
				...state,
				users: state.users.map( user => {
					if (user.id === action.userId) {
						return {...user, followed: true};
					}
					return user;
				}),
			}
		case UNFOLLOW: 
			return {
				...state,
				users: state.users.map( user => {
					if (user.id === action.userId) {
						return {...user, followed: false};
					}
					return user;
				}),
			};
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case SET_USERS_TOTAL_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case FOLLOW_IN_PROGRESS:
			return {
				...state,
				followInProgress: action.isFetching ? 
				[...state.followInProgress, action.userID]
				: [state.followInProgress.filter(id => id !== action.userID)],
			}
		default: 
			return state;
	}
}



export const follow = (userId) => ({
		type: FOLLOW,
		userId,
	})

export const unFollow = (userId) => ({
		type: UNFOLLOW,
		userId,
	})

export const setUsers = (users) => ({
		type: SET_USERS,
		users,
	})

export const setCurrentPage = (currentPage) => ({
		type: SET_CURRENT_PAGE,
		currentPage,
	})

export const setUsersTotalCount = (totalCount) => ({
	type: SET_USERS_TOTAL_COUNT,
	totalCount,
})

export const toggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})

export const toggleFollowInProgress = (isFetching, userID) => ({
	type: FOLLOW_IN_PROGRESS,
	isFetching,
	userID,
})

export default findUsersReducer;