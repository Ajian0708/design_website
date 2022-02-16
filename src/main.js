import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/bootv4.css"
import "@/assets/css/reset.css"
import "@/assets/css/layout.css"
import "@/assets/css/bootstrap.css"

createApp(App).use(router).use(store).mount('#app')
