<template>
  <section class="-mt-64 bg-dark-brown pt-80 pb-14">
    <div class="container">
      <ul class="grid grid-cols-1 justify-items-center gap-8 xl:grid-cols-9 xl:gap-36">
        <li
          v-for="(benefit, index) in benefits"
          :key="index"
          class="col-span-1 flex flex-col items-center sm:max-w-[50%] xl:max-w-full xl:col-span-3"
        >
          <div class="mb-6">
            <picture>
              <img loading="lazy" :src="benefit.imgUrl" class="image" width="80" height="80" alt="Преимущества" />
            </picture>
          </div>
          <h4
            class="flex items-center justify-center h-[66px] mb-2.5 text-center font-fira-sans font-semibold text-2xl leading-snug"
          >
            {{ benefit.title }}
          </h4>
          <p class="text-center font-fira-sans font-normal text-base leading-normal text-gray">
            {{ benefit.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    imgUrl: 'images/benefits/benefits-1.png',
    title: 'Удобная локация',
    text: 'В самом центре деловой жизни Автозаводского района с большой свободной парковкой',
  },
  {
    imgUrl: 'images/benefits/benefits-2.png',
    title: 'Косметика и стайлинги для мужчин',
    text: 'В нашем барбершопе мы используем только профессиональные средства',
  },
  {
    imgUrl: 'images/benefits/benefits-3.png',
    title: 'Топ барберы',
    text: 'Профессионалы с огромным опытом',
  },
]
</script>
