<template>
  <SectionHero />
  <SectionBenefits />
  <SectionAbout />
  <SectionReviews />
  <SectionPriceList class="pb-60" />
  <SectionConsultation class="-mt-36 pb-14" />
  <SectionContacts />
</template>

<script lang="ts" setup>
import SectionAbout from '@/components/SectionAbout.vue'
import SectionBenefits from '@/components/SectionBenefits.vue'
import SectionConsultation from '@/components/SectionConsultation.vue'
import SectionContacts from '@/components/SectionContacts.vue'
import SectionHero from '@/components/SectionHero.vue'
import SectionPriceList from '@/components/SectionPriceList.vue'

import SectionReviews from '@/components/SectionReviews.vue'
</script>
