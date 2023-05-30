import axios from 'axios';

function createGrp(paramData) {
    // 요청할 URL
    const url = '/api/diaryGrp/groupCreate';
    return axios.post(url, paramData);
}

// 함수 export
export { createGrp };