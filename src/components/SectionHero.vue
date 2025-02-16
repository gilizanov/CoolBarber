<template>
  <section class="relative z-10 pt-20 xl:pt-0">
    <div
      class="container flex justify-between gap-8 pt-6 pb-6 px-4 sm:pt-10 sm:pb-10 sm:px-10 xl:pt-10 xl:pb-14 xl:px-14 bg-[url('/images/bg.jpg')] bg-cover bg-no-repeat h-[300px] sm:h-[480px] md:h-[650px] lg:h-[1000px]"
    >
      <div class="flex flex-col items-start justify-between xl:w-6/12">
        <h1 class="font-playfair font-black text-3xl md:text-5xl xl:text-7xl leading-tight">
          Мужской барбершоп №1 в Тольятти
        </h1>
        <router-link to="/#contacts" class="button button--accent">Записаться</router-link>
      </div>
      <div class="hidden sm:flex flex-col xl:mt-14">
        <h3
          class="mb-4 xl:mb-8 font-playfair font-bold text-sm xl:text-base py-1 xl:py-4 px-4 xl:px-6 leading-normal tracking-widest border border-solid divide-white"
        >
          Для нас создание образа - это вид искусства
        </h3>
        <ul class="flex flex-col font-fira-sans font-normal text-lg leading-normal">
          <li>Прокачиваем стрижки</li>
          <li>Тюнингуем бороды</li>
          <li>Заправляем хорошим настроением</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
ul > li {
  position: relative;
  padding-left: 16px;

  &:after {
    content: '-';
    position: absolute;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
