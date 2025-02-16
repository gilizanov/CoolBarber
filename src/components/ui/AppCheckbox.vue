<template>
  <label class="relative flex items-center gap-2">
    <input
      type="checkbox"
      class="absolute w-px h-px overflow-hidden"
      @change="checked = ($event.target as HTMLInputElement).checked"
    />
    <span class="relative block w-3 h-3 bg-black cursor-pointer shrink-0">
      <SvgIcon
        v-if="checked"
        icon-name="check_sm"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="8"
        height="7"
      />
    </span>
    <span class="font-fira-sans font-normal text-xs leading-tight"><slot></slot></span>
  </label>
</template>

<script lang="ts" setup>
import SvgIcon from './SvgIcon.vue'

const checked = defineModel<boolean>({ required: true })
</script>
