<template>
  <footer class="bg-black">
    <div class="container flex flex-col-reverse gap-8 items-center justify-between py-8 xl:flex-row xl:gap-0">
      <router-link to="/" class="flex items-center gap-4 uppercase font-fira-sans font-medium text-base leading-normal">
        <SvgIcon icon-name="logo" width="54" height="54" />
        Cool Barber
      </router-link>
      <AppNav />
    </div>
  </footer>
</template>

<script lang="ts" setup>
import AppNav from './ui/AppNav.vue'
import SvgIcon from './ui/SvgIcon.vue'
</script>
