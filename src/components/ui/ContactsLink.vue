<template>
  <li class="font-montserrat font-normal text-xl leading-normal text-white transition-colors">
    <a :href="url" target="_blank" class="flex items-center gap-4">
      <SvgIcon :icon-name="iconName" width="54" height="54" class="shrink-0" />
      {{ txt }}
    </a>
  </li>
</template>

<script lang="ts" setup>
import SvgIcon from './SvgIcon.vue'

defineProps<{
  url: string
  txt: string
  iconName: string
}>()
</script>

<style scoped></style>
