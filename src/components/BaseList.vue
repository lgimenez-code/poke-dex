<template>
  <div>
    <!-- <BaseItem/> -->
     <p v-for="(item, i) in pokemons" :key="i">{{ item.name }}, {{ item.url }}</p>

  </div>
</template>


<script setup>
import BaseItem from "./BaseItem.vue";
import { inject, defineProps } from "vue";

const BaseIcons = inject("BaseIcons");

defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
});



/*
v-for="(item, index) in items"
:key="index"
:item="item"
:isFavorite="isFavorite(item)"
@toggleFavorite="toggleFavorite(item)"
*/

</script>


<style scoped>

</style>