<template>
  <header class="fixed top-0 left-0 right-0 z-20 bg-brown xl:static">
    <div
      class="container max-w-full flex items-center justify-between py-4 xl:gap-12 xl:max-w-screen-xl xl:justify-normal xl:py-8"
    >
      <router-link
        to="/"
        class="flex shrink-0 items-center gap-4 uppercase font-fira-sans font-medium text-base leading-normal"
      >
        <SvgIcon icon-name="logo" width="54" height="54" />
        Cool Barber
      </router-link>
      <div
        class="fixed inset-0 z-20 w-screen h-full bg-brown flex flex-col items-center justify-center transition-transform xl:static xl:justify-between xl:grow xl:flex-row xl:transform-none"
        :class="{ 'translate-x-full': !menuIsOpen }"
      >
        <AppNav />
        <HeaderButtons />
      </div>
      <HeaderBurger @click="toggleMenu" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue'
import AppNav from './ui/AppNav.vue'
import HeaderBurger from './ui/HeaderBurger.vue'
import HeaderButtons from './ui/HeaderButtons.vue'
import SvgIcon from './ui/SvgIcon.vue'

const { menuIsOpen, toggleMenu } = inject('menu') as { menuIsOpen: Ref<boolean>; toggleMenu: () => void }
</script>
