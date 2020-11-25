import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c10bbc46-f6f4-49a6-88c4-cd7c42f93c37'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    follow(userId) {
        return axiosInstance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`);
    },

    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`);
    }
}

export const authAPI = {
    authUser() {
        return axiosInstance.get('auth/me');
    }
}

