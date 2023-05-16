import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'; //설정 라우터 호출
import { createPinia } from "pinia";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import "./assets/css/main.css";

import materialKit from "./material-kit";
import axios from 'axios'; //axios를 import 해옴

//createApp(App).mount('#app')
const pinia = createPinia();
const app = createApp(App);

//axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
app.config.globalProperties.axios = axios; // axios를 전역화 ( 다른 컴포넌트에서 사용 가능하도록 )

app.use(router);
app.use(materialKit);
app.use(pinia);
app.mount('#app');