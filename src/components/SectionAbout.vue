<template>
  <section id="about" class="py-14">
    <div class="container">
      <SectionTxt>
        <template #title>О нас</template>
        <template #txt>Немного о нашем проекте</template>
      </SectionTxt>
      <div class="flex flex-col items-center gap-3 xl:gap-5 mb-6 xl:mb-14 xl:flex-row">
        <div v-for="(galleryCol, col) in gallery" :key="col" class="grid grid-cols-2 gap-3 xl:gap-5 xl:w-1/2">
          <div v-for="(galleryItem, item) in galleryCol" :key="item" :class="galleryItem.className">
            <picture>
              <img loading="lazy" :src="galleryItem.url" class="image" alt="Галерея" />
            </picture>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-4 xl:gap-8 xl:flex-row">
        <router-link to="/team" class="button button--accent">Наши мастеры и их работы</router-link>
        <a href="https://vk.com/gilizanov" target="_blank" class="button button--bordered">Наша группа ВК</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionTxt from './ui/SectionTxt.vue'

const gallery = [
  [
    {
      url: '/images/gallery/gallery-1.jpg',
      className: 'col-span-2',
    },
    {
      url: '/images/gallery/gallery-2.jpg',
      className: 'col-span-1',
    },
    {
      url: '/images/gallery/gallery-3.jpg',
      className: 'col-span-1',
    },
  ],
  [
    {
      url: '/images/gallery/gallery-4.jpg',
      className: 'col-span-1',
    },
    {
      url: '/images/gallery/gallery-5.jpg',
      className: 'col-span-1',
    },
    {
      url: '/images/gallery/gallery-6.jpg',
      className: 'col-span-2',
    },
  ],
]
</script>
