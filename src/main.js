import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'; //설정 라우터 호출
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Nucleo Icons
//import "./assets/css/nucleo-icons.css";
//import "./assets/css/nucleo-svg.css";

import Vue3Material from 'vue3-material';

//createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(Vue3Material);
app.mount('#app');