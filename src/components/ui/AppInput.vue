<template>
  <label class="relative">
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :class="checked ? 'border-[#4fe18a]' : 'border-black'"
      class="w-full p-5 bg-transparent border border-solid transition-colors font-fira-sans font-normal text-lg leading-snug text-white focus-visible:outline-none focus:border-white focus:text-black hover:border-white hover:text-black placeholder:text-white"
    />
    <span v-if="checked" class="absolute top-1/2 right-4 -translate-y-1/2">
      <SvgIcon icon-name="check" width="19" height="14" />
    </span>
  </label>
</template>

<script lang="ts" setup>
import SvgIcon from './SvgIcon.vue'

defineProps<{
  type: 'text' | 'tel'
  checked: boolean
  placeholder?: string
}>()

const model = defineModel<string>({ required: true })
</script>
