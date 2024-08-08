import './assets/main.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { definePreset } from '@primevue/themes'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const myTheme = definePreset(Aura, {
  semantic: {
    primary: {
      500: '{Slate.900}',
      
      600: '{Slate.600}',
      700: '{Slate.700}',
      800: '{Slate.800}',
      900: '{Slate.900}',
      950: '{Slate.950}'
    }
  }
})

app.use(PrimeVue, {
  theme: {
    preset: myTheme
}
})
app.use(createPinia())
app.use(router)

app.mount('#app')
