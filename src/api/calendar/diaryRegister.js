import axios from 'axios';

function insertDiary(paramData) {
    // 요청할 URL
    const url = '/api/diary/diaryRegister';
    return axios.post(url, paramData);
}

// 함수 export
export { insertDiary };