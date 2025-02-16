<template>
  <section id="pricelist" class="bg-dark-brown py-14">
    <div class="container">
      <SectionTxt>
        <template #title>Прайслист</template>
        <template #txt>Прейскурант на наши услуги</template>
      </SectionTxt>
      <div class="grid grid-cols-6 md:grid-cols-12 gap-5">
        <div v-for="item in pricelist" :key="item.id" class="col-span-6 flex flex-col xl:col-span-3">
          <div class="mb-5 aspect-square">
            <picture>
              <img loading="lazy" :src="item.imageUrl" class="image" alt="Прайслист" />
            </picture>
          </div>
          <h4 class="mb-5 font-fira-sans font-medium text-3xl leading-snug text-white">{{ item.title }}</h4>
          <ul class="flex flex-col grow font-fira-sans gap-4 pr-4 xl:border-r border-solid border-white">
            <li v-for="(service, index) in item.services" :key="index">
              <div class="flex items-center justify-between gap-4">
                <p class="font-normal text-base leading-relaxed">{{ service.name }}</p>
                <div class="flex items-center gap-2">
                  <p class="font-normal text-sm leading-relaxed text-gray whitespace-nowrap">{{ service.time }} мин</p>
                  <p class="font-bold text-base leading-relaxed text-white whitespace-nowrap">
                    {{ formatCurrency(service.price) }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PRICELIST_URL } from '@/constants/api'
import { IPriceListItem } from '@/interfaces'
import { formatCurrency } from '@/utils/utils'
import axios from 'axios'
import { inject, onMounted, Ref, ref } from 'vue'
import SectionTxt from './ui/SectionTxt.vue'

const pricelist = ref<IPriceListItem[]>([])

const { isLoading } = inject('loader') as { isLoading: Ref<boolean> }
const getPriceList = async () => {
  try {
    isLoading.value = true
    const data = await axios.get(PRICELIST_URL)
    pricelist.value = data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getPriceList())
</script>
