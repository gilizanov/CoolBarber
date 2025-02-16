<template>
  <svg :width="width" :height="height">
    <use :href="`/sprite.svg#${iconName}`"></use>
  </svg>
</template>

<script lang="ts" setup>
defineProps<{
  iconName: string
  width: string
  height: string
}>()
</script>
