<template>
  <section id="reviews" class="py-14">
    <SectionTxt>
      <template #title>Отзывы</template>
      <template #txt>Что говорят о нас наши клиенты</template>
    </SectionTxt>
    <div class="container">
      <div class="relative">
        <swiper-container v-bind="swiperParams">
          <swiper-slide v-for="review in reviews" :key="review.id">
            <ReviewCard :review="review" />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { REVIEWS_URL } from '@/constants/api'
import { IReview } from '@/interfaces'
import axios from 'axios'
import { register } from 'swiper/element'
import { Navigation } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { inject, onMounted, Ref, ref } from 'vue'
import ReviewCard from './ReviewCard.vue'
import SectionTxt from './ui/SectionTxt.vue'
register()

const swiperParams: SwiperOptions = {
  modules: [Navigation],
  spaceBetween: 20,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
    disabledClass: 'opacity-60',
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    576: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
}

const { isLoading } = inject('loader') as { isLoading: Ref<boolean> }

const reviews = ref<IReview[]>([])
const getReviews = async () => {
  try {
    isLoading.value = true
    const data = await axios.get(REVIEWS_URL)
    reviews.value = data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getReviews())
</script>
