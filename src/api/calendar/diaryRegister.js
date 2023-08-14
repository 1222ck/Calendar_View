import axios from 'axios';

function insertDiary(paramData) {
    // 요청할 URL
    const url = '/api/calendar/diaryRegister';
    return axios.post(url, paramData);
}

// 함수 export
export { insertDiary };