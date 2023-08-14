import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BaseButton from '@/components/ui/form/BaseButton.vue'
import BaseInput from '@/components/ui/form/BaseInput.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

app.component('base-button', BaseButton)
app.component('base-input', BaseInput)

app.mount('#app')
