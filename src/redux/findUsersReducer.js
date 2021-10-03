import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOW_IN_PROGRESS = "FOLLOW_IN_PROGRESS";
const GET_FRIENDS = "GET_FRIENDS";
const SET_CURRENT_FRIENDS_PAGE = "SET_CURRENT_FRIENDS_PAGE";
const SET_FRIENDS_TOTAL_COUNT = "SET_FRIENDS_TOTAL_COUNT";

let initialState = {
  users: [],
  friends: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  pageFriendsSize: 6,
  totalFriendsCount: 0,
  currentFriendsPage: 1,
  isFetching: false,
  followInProgress: [],
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SET_CURRENT_FRIENDS_PAGE:
      return {
        ...state,
        currentFriendsPage: action.currentFriendsPage,
      };
    case SET_FRIENDS_TOTAL_COUNT:
      return {
        ...state,
        totalFriendsCount: action.totalFriendsCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case FOLLOW_IN_PROGRESS:
      return {
        ...state,
        followInProgress: action.isFetching
          ? [...state.followInProgress, action.userID]
          : [state.followInProgress.filter((id) => id !== action.userID)],
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unFollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setFriends = (friends) => ({
  type: GET_FRIENDS,
  friends,
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalUsersCount,
});

export const setFriendsTotalCount = (totalFriendsCount) => ({
  type: SET_FRIENDS_TOTAL_COUNT,
  totalFriendsCount,
});

export const setCurrentFriendsPage = (currentFriendsPage) => ({
  type: SET_CURRENT_FRIENDS_PAGE,
  currentFriendsPage,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowInProgress = (isFetching, userID) => ({
  type: FOLLOW_IN_PROGRESS,
  isFetching,
  userID,
});

export const getUsersThunkCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount));
  };

export const getFriendsThunkCreator =
  (currentPage, pageFriendsSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getFriends(currentPage, pageFriendsSize);
    dispatch(toggleIsFetching(false));
    dispatch(setFriends(response.data.items));
    dispatch(setFriendsTotalCount(response.data.totalCount));
  };

export const followUnfollowFlow = async (
  dispatch,
  apiMethod,
  actionCreator,
  userId
) => {
  dispatch(toggleFollowInProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(toggleFollowInProgress(false, userId));
  }
};

export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.FollowUsers.bind(usersAPI);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, apiMethod, actionCreator, userId);
  };
};

export const unFollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = await usersAPI.unFollowUsers.bind(usersAPI);
    let actionCreator = unFollowSuccess;
    followUnfollowFlow(dispatch, apiMethod, actionCreator, userId);
  };
};

export default findUsersReducer;
