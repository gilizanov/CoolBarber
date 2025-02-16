<template>
  <section class="py-14">
    <div class="container flex flex-col gap-16">
      <TeamCard v-for="item in teamItems" :key="item.id" :team-item="item" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { TEAM_URL } from '@/constants/api'
import { ITeamItem } from '@/interfaces'
import axios from 'axios'
import { inject, onMounted, Ref, ref } from 'vue'
import TeamCard from './TeamCard.vue'

const teamItems = ref<ITeamItem[]>([])

const { isLoading } = inject('loader') as { isLoading: Ref<boolean> }
const getTeamItems = async () => {
  try {
    isLoading.value = true
    const data = await axios.get(TEAM_URL)
    teamItems.value = data.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => getTeamItems())
</script>
