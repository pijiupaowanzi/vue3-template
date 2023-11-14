// core
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// css
import 'normalize.css'
import 'uno.css'

const app = createApp(App)

app.use(store).use(router).mount('#app')
