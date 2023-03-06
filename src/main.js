import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
const app = createApp(App)
const pinia = createPinia()

// app.use(VueAxios, axios)
app.use(router)
app.use(pinia)
app.mount('#app')
