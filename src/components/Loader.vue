<template>
  <div>
    <img :src="BaseImages.loader" alt="loader">
  </div>
</template>

<script setup>
import { inject } from 'vue';
const BaseImages = inject('BaseImages');
</script>

<style scoped>
img {
    width: 100px;
    height: 100px;
    animation: escape 1s ease-in-out infinite;
}
@keyframes escape {
    0%, 100% {
        transform: scale(1) rotate(0);
    }
    25% {
        transform: scale(1.1) rotate(-5deg);
    }
    50% {
        transform: scale(1.2) rotate(5deg);
    }
    75% {
        transform: scale(1.1) rotate(-5deg);
    }
}
</style>