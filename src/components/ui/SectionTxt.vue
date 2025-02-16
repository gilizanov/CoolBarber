<template>
  <div class="mb-6 md:mb-8 xl:mb-14">
    <h2
      class="text-center font-fira-sans font-bold text-4xl xl:text-5xl leading-tight bg-trasparent"
      :class="{
        'text-black font-playfair': variant === 'dark',
        'mb-3': $slots.txt,
      }"
    >
      <slot name="title"></slot>
    </h2>
    <p
      v-if="$slots.txt"
      class="text-center font-fira-sans font-normal text-base leading-relaxed"
      :class="{ 'text-brown': variant === 'dark' }"
    >
      <slot name="txt"></slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  variant?: 'dark'
}>()
</script>
