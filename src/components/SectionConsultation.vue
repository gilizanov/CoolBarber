<template>
  <section>
    <div class="container">
      <div class="bg-orange py-6 px-4 md:py-10 md:px-20 xl:py-20 xl:px-40">
        <SectionTxt variant="dark">
          <template #title>Получите персональную консультацию</template>
          <template #txt>От наших топ барберов</template>
        </SectionTxt>
        <p class="mb-4 text-center font-fira-sans font-normal text-base leading-relaxed">{{ formTxt }}</p>
        <form
          class="flex flex-col items-center gap-4 mb-6 lg:flex-row"
          :class="formSubmitted ? 'pointer-events-none opacity-50' : ''"
        >
          <AppInput
            v-model="phoneNumberInput"
            v-maska="'+7 (###) ###-##-##'"
            type="tel"
            class="grow"
            placeholder="+7 (###) ###-##-##"
            :checked="phoneNumberIsValid"
          />
          <AppInput v-model="emailInput" type="text" class="grow" placeholder="Email" :checked="emailIsValid" />
          <AppButton
            :disabled="!fieldsIsValid"
            class="disabled:opacity-50 disabled:pointer-events-none"
            variant="black"
            @click="sendData"
          >
            Отправить
          </AppButton>
        </form>
        <div class="flex items-center justify-center" :class="formSubmitted ? 'pointer-events-none' : ''">
          <AppCheckbox v-model="agreement">
            Нажимая на кнопку, вы соглашаетесь с
            <a class="underline" :class="formSubmitted ? 'pointer-events-auto' : ''" href="#"
              >условиями обработки персональных данных</a
            >
          </AppCheckbox>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CONSULTATION_URL } from '@/constants/api'
import { formatPhoneNumber, validateEmail } from '@/utils/utils'
import axios from 'axios'
import { vMaska } from 'maska/vue'
import { computed, inject, Ref, ref } from 'vue'
import AppButton from './ui/AppButton.vue'
import AppCheckbox from './ui/AppCheckbox.vue'
import AppInput from './ui/AppInput.vue'
import SectionTxt from './ui/SectionTxt.vue'

const phoneNumberInput = ref('')
const emailInput = ref('')
const agreement = ref(false)

const phoneNumberIsValid = computed(() => formatPhoneNumber(phoneNumberInput.value).length === 11)
const emailIsValid = computed(() => validateEmail(emailInput.value))
const fieldsIsValid = computed(() => emailIsValid.value && phoneNumberIsValid.value && agreement.value)

const formSubmitted = ref(false)
const formTxt = ref('')
const setFormMessage = (txt: string) => {
  formTxt.value = txt
  setTimeout(() => (formTxt.value = ''), 5000)
}

const { isLoading } = inject('loader') as { isLoading: Ref<boolean> }
const sendData = async () => {
  try {
    isLoading.value = true
    const res = await axios.post(CONSULTATION_URL, {
      phoneNumber: formatPhoneNumber(phoneNumberInput.value),
      email: emailInput.value,
    })

    if (res.data.id > 0) {
      phoneNumberInput.value = ''
      emailInput.value = ''
      agreement.value = false
      setFormMessage('Спасибо! Наш менеджер скоро свяжется с вами!')
      formSubmitted.value = true
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    setFormMessage('Произошла ошибка при отправке формы')
  } finally {
    isLoading.value = false
  }
}
</script>
