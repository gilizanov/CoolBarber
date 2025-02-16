<template>
  <button
    type="button"
    :class="[
      'button',
      {
        'button--accent': variant === 'accent',
        'button--black': variant === 'black',
        'button--bordered': variant === 'bordered',
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  variant: 'accent' | 'black' | 'bordered'
}>()
</script>
