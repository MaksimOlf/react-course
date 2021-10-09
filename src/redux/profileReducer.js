import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const UPDATE_USER_AVATAR = "UPDATE_USER_AVATAR";
const GET_PROFILE_CHANGE_ERROR = "GET_PROFILE_CHANGE_ERROR";

let initialState = {
  infoPosts: [
    {
      id: 1,
      name: "Rocket",
      src: "https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg",
      text: "Nds kmk mkllewkm  kwem kewm kwem wem ekw!!!",
      nLikes: 23,
    },
    {
      id: 2,
      name: "Groot",
      src: "https://gamehag.com/static/avatar/5194053_max.jpg",
      text: "I AM GROOT!!!",
      nLikes: 47,
    },
  ],
  profile: null,
  userStatus: "",
  profileInfoError: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        name: "Maksim",
        src: "https://hsto.org/getpro/habr/post_images/585/18b/a98/58518ba9884cfa5c4bc1cd9053ef5b4d.png",
        text: action.newProfilePost,
        nLikes: 0,
      };
      return {
        ...state,
        infoPosts: [...state.infoPosts, newPost],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        infoPosts: state.infoPosts.filter((p) => p.id !== action.postId),
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        userStatus: action.userStatus,
      };
    }
    case UPDATE_USER_AVATAR: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    case GET_PROFILE_CHANGE_ERROR: {
      return {
        ...state,
        profileInfoError: action.profileInfoError,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newProfilePost) => ({
  type: ADD_POST,
  newProfilePost,
});

export const deleteostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (userStatus) => ({
  type: SET_STATUS,
  userStatus,
});

export const updateUserAvatar = (photos) => ({
  type: UPDATE_USER_AVATAR,
  photos,
});

export const getSetProfileError = (profileInfoError) => ({
  type: GET_PROFILE_CHANGE_ERROR,
  profileInfoError,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getUser(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatus = (userStatus) => async (dispatch) => {
  let response = await profileAPI.updateStatus(userStatus);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(userStatus));
  }
};

export const saveAvatar = (userAvatar) => async (dispatch) => {
  let response = await profileAPI.setUserAvatar(userAvatar);
  if (response.data.resultCode === 0) {
    dispatch(updateUserAvatar(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(getSetProfileError(response.data.messages[0]));
  }
};

export default profileReducer;
