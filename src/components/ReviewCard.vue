<template>
  <div class="flex flex-col items-start h-full">
    <div class="mb-6 aspect-square">
      <picture>
        <img loading="lazy" :src="review.imageUrl" class="image" alt="Отзывы" />
      </picture>
    </div>
    <h5 class="mb-6 font-fira-sans font-bold text-sm leading-normal text-white">{{ review.name }}</h5>
    <p
      ref="reviewTxt"
      class="font-fira-sans font-normal text-base leading-normal text-white line-clamp-3"
      :class="{ 'line-clamp-none': isShownAll }"
    >
      {{ review.txt }}
    </p>
    <button
      v-if="!isShownAll"
      type="button"
      class="mt-4 font-fira-sans font-normal text-sm leading-normal text-orange"
      @click="isShownAll = true"
    >
      Читать полностью
    </button>
  </div>
</template>

<script lang="ts" setup>
import { IReview } from '@/interfaces'
import { ref } from 'vue'

defineProps<{
  review: IReview
}>()

const reviewTxt = ref()
const isShownAll = ref(false)

setTimeout(() => {
  if (reviewTxt.value.clientHeight === reviewTxt.value.scrollHeight) isShownAll.value = true
}, 10)
</script>
