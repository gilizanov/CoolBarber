<template>
  <AppLoader v-if="isLoading" />
  <AppHeader />
  <main class="main">
    <RouterView />
  </main>
  <AppFooter />
</template>

<script lang="ts" setup>
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import { inject, provide, Ref, ref, watch } from 'vue'

const isLoading = ref(false)

provide('loader', {
  isLoading,
})

const { menuIsOpen } = inject('menu') as { menuIsOpen: Ref<boolean> }

const bodyEl = document.querySelector('body')

watch(menuIsOpen, () => {
  if (menuIsOpen.value) {
    bodyEl?.classList.add('overflow-hidden')
  } else {
    bodyEl?.classList.remove('overflow-hidden')
  }
})
</script>
