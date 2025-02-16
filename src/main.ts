import { createApp, ref } from 'vue'
import App from './App.vue'
import './assets/style.css'
import { router } from './router/router'

const app = createApp(App)

const menuIsOpen = ref(false)
const toggleMenu = () => (menuIsOpen.value = !menuIsOpen.value)

app.provide('menu', {
  menuIsOpen,
  toggleMenu,
})

app.use(router)
app.mount('#app')
