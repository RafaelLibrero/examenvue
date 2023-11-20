import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

createApp(App).use(router).mount('#app')
