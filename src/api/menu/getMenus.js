import axios from 'axios';
//
// function getMenus(userData) {
//     // 요청할 URL
//     const url = '/api/menu/get';
//     return axios.post(url, userData);
// }
// // 함수 export
// export { getMenus };

export async function getMenus() {
    try {
        const response = await axios.get('/api/menus/getMenus');
        return response.data;
    } catch (error) {
        console.error('API 호출 에러', error);
        return [];
    }
}