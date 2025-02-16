<template>
  <li class="flex items-center gap-4 font-montserrat font-normal text-xl leading-normal text-white">
    <SvgIcon :icon-name="iconName" width="54" height="54" class="shrink-0" />
    {{ txt }}
  </li>
</template>

<script lang="ts" setup>
import SvgIcon from './SvgIcon.vue'

defineProps<{
  txt: string
  iconName: string
}>()
</script>

<style scoped></style>
