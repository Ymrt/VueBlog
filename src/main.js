import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
createApp(App).use(router).use(VueAxios,axios).use(ElementPlus).mount('#app')
