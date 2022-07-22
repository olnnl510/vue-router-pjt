import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app') // use(router) 중간에 위치한 소프트웨어. 미들웨어.
