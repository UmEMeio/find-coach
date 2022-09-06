import { createApp } from 'vue'
import App from './App.vue'
import router from './routes.js'

import BaseButton from './components/base/BaseButton.vue'
import BaseCard from './components/base/BaseCard.vue'
const app = createApp(App)
app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
app.use(router)
app.mount('#app')
