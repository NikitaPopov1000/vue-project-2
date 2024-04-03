import './assets/main.css'
import './bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/router_index.js'
const app = createApp(App)
app.use(router)

app.mount('#app')
