<template>
  <button type="button" class="z-20 xl:hidden">
    <span
      class="block w-8 h-px mb-2.5 bg-white transition-transform"
      :class="{ 'rotate-45 translate-y-[11px]': menuIsOpen }"
    ></span>
    <span class="block w-8 h-px my-2.5 bg-white transition-opacity" :class="{ 'opacity-0': menuIsOpen }"></span>
    <span
      class="block w-8 h-px mt-2.5 bg-white transition-transform"
      :class="{ '-rotate-45 -translate-y-[11px]': menuIsOpen }"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue'

const { menuIsOpen } = inject('menu') as { menuIsOpen: Ref<boolean> }
</script>
