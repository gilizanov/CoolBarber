<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center bg-dark-brown mb-5 pr-4">
      <div class="aspect-square sm:w-44 sm:h-44 mr-6 md:mr-12">
        <picture>
          <img loading="lazy" :src="teamItem.imageUrl" class="image" :alt="teamItem.name" />
        </picture>
      </div>
      <p
        class="font-fira-sans font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight md:mr-6 min-w-[66%] sm:min-w-min"
      >
        {{ teamItem.name }}
      </p>
      <p class="hidden md:block font-fira-sans font-normal md:text-base lg:text-lg leading-normal text-gray w-1/2">
        {{ teamItem.descr }}
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mb-5">
      <div v-for="(url, index) in teamItemImages" :key="index" class="aspect-square col-span-1">
        <picture>
          <img class="image w-full h-full" :src="url" loading="lazy" :alt="teamItem.name" />
        </picture>
      </div>
    </div>
    <AppButton v-if="!isShownAll" class="mx-auto" variant="accent" @click="counter += 8">
      <SvgIcon icon-name="refresh" width="20" height="20" />
      Показать еще
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
import { ITeamItem } from '@/interfaces'
import { computed, ref } from 'vue'
import AppButton from './ui/AppButton.vue'
import SvgIcon from './ui/SvgIcon.vue'

const props = defineProps<{
  teamItem: ITeamItem
}>()

const counter = ref(8)
const teamItemImages = computed(() => props.teamItem.images.slice(0, counter.value))
const isShownAll = computed(() => counter.value >= props.teamItem.images.length)
</script>
