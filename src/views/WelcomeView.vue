<template>
  <div>
    <div class="container">
      <div class="containerImg">
        <div class="bgCircle"></div>
        <img class="imgPikachu" :src="BaseImages.homeImage" alt="Pikachu" />
      </div>
      <div class="containerText">
        <h2 class="titleWelcome">Welcome to Pokédex</h2>
        <p class="textWelcome">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
        <div class="flex justify-center">
          <div class="containerButton">
            <BaseButton :type="'primary'" @click="router.push('/general')">
            Get Started
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { inject } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const BaseImages = inject('BaseImages');
</script>


<style scoped>
.container {
  @apply flex flex-col mb-[10rem];
}
@media (min-width: 768px) {
  .container {
    @apply mb-[0px];
  }
}

.containerImg {
  @apply relative w-[32.5rem] h-[32.5rem]
    flex justify-center items-center mx-auto;
}

.containerText {
  @apply flex flex-col max-w-[57rem] gap-[2rem];
}

.bgCircle {
  @apply absolute bg-[var(--primary)] w-[20.7rem] h-[20.7rem]
    rounded-full border-2 border-solid;
}

.imgPikachu {
  @apply absolute w-[32.7rem] h-[32.7rem] top-[-10%] left-[4.2%];
}

.textWelcome {
  @apply font-[500] text-[1.8rem] leading-[150%] text-center text-[var(--midgray)] mb-[4rem];
}
@media (min-width: 768px) {
  .textWelcome {
    @apply mb-[4rem];
  }
}

.containerButton {
  @apply w-[14rem] h-[4.4rem];
}
</style>