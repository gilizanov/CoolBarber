import { inject, Ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import PageContacts from '../views/PageContacts.vue'
import PageHome from '../views/PageHome.vue'
import PageTeam from '../views/PageTeam.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: PageHome },
  { path: '/contacts', component: PageContacts },
  { path: '/team', component: PageTeam },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

router.beforeEach(() => {
  const { menuIsOpen } = inject('menu') as { menuIsOpen: Ref<boolean> }

  if (menuIsOpen.value) {
    menuIsOpen.value = false
  }
})
