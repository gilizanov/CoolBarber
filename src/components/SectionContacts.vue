<template>
  <section id="contacts" class="py-20 bg-dark-brown xl:bg-[url('/images/map.jpg')] bg-no-repeat bg-center bg-cover">
    <div class="container flex flex-col items-start">
      <div class="bg-dark-brown xl:p-12 w-full xl:w-auto">
        <SectionTxt>
          <template #title>Контакты</template>
        </SectionTxt>
        <ul class="flex flex-col gap-6">
          <component
            :is="contact.url ? ContactsLink : ContactsItem"
            v-for="(contact, index) in contacts"
            :key="index"
            v-bind="contact"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ContactsItem from './ui/ContactsItem.vue'
import ContactsLink from './ui/ContactsLink.vue'
import SectionTxt from './ui/SectionTxt.vue'

const contacts = [
  {
    url: 'tel:+7(999)999-99-99',
    txt: '+7 (999) 999-99-99',
    iconName: 'phone',
  },
  {
    url: 'mailto:info@sitename.com',
    txt: 'info@sitename.com',
    iconName: 'email',
  },
  {
    url: 'https://yandex.ru/maps/-/CDhDaQ7s',
    txt: 'г. Санкт-Петербург, ул. Пушкина, д. Колотушкина',
    iconName: 'location',
  },
  {
    txt: 'Работаем с 9 до 20',
    iconName: 'time',
  },
]
</script>

<style scoped>
@media (any-hover: hover) {
  li:not(:last-child):hover {
    color: #ff6e40;
  }
}
</style>
