import * as axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '31e2699e-4b60-49db-98c3-913ea14cbea2',
	},
});


export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},

	getUser(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},

	authMe() {
		return instance.get(`auth/me`);
	},


	unFollowUsers(userID) {
		return instance.delete(`follow/${userID}`);
	},


	FollowUsers(userID) {
		return instance.post(`follow/${userID}`);
	},
}
