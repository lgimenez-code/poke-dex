<template>
  <div class="text-[var(--darkgray)]">
    <h1>Uh-oh!</h1>
    <p class="text-[2rem]">{{ errorMessage }}</p>
    <div class="flex justify-center mt-[3rem]">
      <div class="w-[15.5rem] h-[4.4rem]">
        <BaseButton :type="'primary'" @click="emit('backToHome')">
          Go back home
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import BaseButton from "../components/BaseButton.vue";;

defineProps({
  errorMessage: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['backToHome']);
</script>