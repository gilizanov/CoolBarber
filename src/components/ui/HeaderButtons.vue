<template>
  <div class="absolute left-1/2 -translate-x-1/2 bottom-4 flex items-center gap-4 xl:static xl:translate-x-0">
    <a href="#" class="flex items-center gap-4 font-fira-sans font-normal leading-normal text-white">
      <span class="hidden text-right xl:block">
        г. Тольятти,
        <br />
        ул. Полякова 28А
      </span>
      <SvgIcon icon-name="location" width="54" height="54" />
    </a>
    <a href="#" class="flex items-center gap-4 font-fira-sans font-normal leading-normal text-white">
      <span class="hidden xl:flex flex-col">
        8 (800) 555-35-35
        <span class="text-sm leading-snug text-light">Работаем с 9 до 20</span>
      </span>
      <SvgIcon icon-name="phone" width="54" height="54" />
    </a>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
</script>
