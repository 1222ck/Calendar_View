import axios from 'axios';

function checkEmail(userData) {
    const url = "/api/member/check-email";
    return axios.get(url, userData);
}

function registerUser(userData) {
    // 요청할 URL
    const url = '/api/member/join';
    return axios.post(url, userData);
}

// 함수 export
export { registerUser, checkEmail };