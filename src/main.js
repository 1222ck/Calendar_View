import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'; //설정 라우터 호출
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

//createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(materialKit);
app.mount('#app');