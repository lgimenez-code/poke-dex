<template>
  <div class="">
    <BaseCard v-for="(item, i) in pokemons" :key="i"
      :name="item.name"
      :favorite="false"
    />
  </div>
</template>

<script setup>
import BaseCard from "./BaseCard.vue";
import { defineProps } from "vue";

defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
});

</script>

<style scoped></style>
