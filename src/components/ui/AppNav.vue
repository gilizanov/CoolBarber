<template>
  <nav class="flex flex-col items-center gap-4 xl:flex-row">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
      class="py-2 px-2 text-base xl:text-sm font-fira-sans font-normal leading-snug"
      @click="menuIsOpen = false"
    >
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script lang="ts" setup>
import { inject, Ref } from 'vue'

const { menuIsOpen } = inject('menu') as { menuIsOpen: Ref<boolean> }

const links = [
  {
    title: 'О нас',
    url: '/#about',
  },
  {
    title: 'Наша команда',
    url: '/team',
  },
  {
    title: 'Отзывы',
    url: '/#reviews',
  },
  {
    title: 'Прайс-лист',
    url: '/#pricelist',
  },
  {
    title: 'Контакты',
    url: '/contacts',
  },
]
</script>
