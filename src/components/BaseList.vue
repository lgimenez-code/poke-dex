<template>
  <div class="">
    <BaseCard v-for="(item, i) in pokemons" :key="i"
      :name="item.name"
      :favorite="favorites?.includes(item.name)"
      @selected="emit('selected', $event)"
      @addFavorite="emit('addFavorite', $event)"
    />
  </div>
</template>

<script setup>
import BaseCard from "./BaseCard.vue";
import { defineProps, defineEmits } from "vue";

defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
  favorites: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['selected', 'addFavorite']);

</script>

<style scoped></style>
