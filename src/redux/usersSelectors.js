import { createSelector } from 'reselect'


export const getStateUsers = (state) => {
	return state.findUsers.users;
}

export const getStateFriends = (state) => {
	return state.findUsers.friends;
}

// export const getStateUsersSelector = createSelector(getStateUsers, (users) => {
// 	return users.filter( u => true);
// })

export const getStatePageSize = (state) => {
	return state.findUsers.pageSize;
}

export const getStateTotalUsersCount = (state) => {
	return state.findUsers.totalUsersCount;
}

export const getStateCurrentPage = (state) => {
	return state.findUsers.currentPage;
}

export const getStateFriendsSize = (state) => {
	return state.findUsers.pageFriendsSize;
}

export const getStateTotalFriendsCount = (state) => {
	return state.findUsers.totalFriendsCount;
}

export const getStateCurrentFriendsPage = (state) => {
	return state.findUsers.currentFriendsPage;
}

export const getStateIsFetching = (state) => {
	return state.findUsers.isFetching;
}

export const getStateFollowInProgress = (state) => {
	return state.findUsers.followInProgress;
}
