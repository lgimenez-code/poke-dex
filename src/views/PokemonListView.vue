<template>
  <div class="containerPokemonView">
    <div class="containerHeader">
      <BaseSearch />
    </div>
    <div class="containerList">
      <BaseList :pokemons="pokemons" />
    </div>
    <div class="containerFooter">
      <div class="containerSelectors">
        <BaseButton
          class="btnSelector"
          :type="btnTypeAll"
          @click="handleButton"
        >
          <img :src="BaseIcons.listIcon" alt="list icon" />
          All
        </BaseButton>
        <BaseButton
          class="btnSelector"
          :type="btnTypeFavorites"
          @click="handleButton"
        >
          <img :src="BaseIcons.favsIcon" alt="favs icon" />
          Favorites
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import BaseSearch from "../components/BaseSearch.vue";
import BaseList from "../components/BaseList.vue";
import BaseButton from "../components/BaseButton.vue";

const BaseIcons = inject("BaseIcons");

const btnTypeAll = ref("primary");
const btnTypeFavorites = ref("tertiary");
const btnAllSelected = ref(true);
const pokemons = ref(
  [ { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" }, { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" }, { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" }, { "name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon/4/" }, { "name": "charmeleon", "url": "https://pokeapi.co/api/v2/pokemon/5/" }, { "name": "charizard", "url": "https://pokeapi.co/api/v2/pokemon/6/" }, { "name": "squirtle", "url": "https://pokeapi.co/api/v2/pokemon/7/" }, { "name": "wartortle", "url": "https://pokeapi.co/api/v2/pokemon/8/" }, { "name": "blastoise", "url": "https://pokeapi.co/api/v2/pokemon/9/" }, { "name": "caterpie", "url": "https://pokeapi.co/api/v2/pokemon/10/" }, { "name": "metapod", "url": "https://pokeapi.co/api/v2/pokemon/11/" }, { "name": "butterfree", "url": "https://pokeapi.co/api/v2/pokemon/12/" }, { "name": "weedle", "url": "https://pokeapi.co/api/v2/pokemon/13/" }, { "name": "kakuna", "url": "https://pokeapi.co/api/v2/pokemon/14/" }, { "name": "beedrill", "url": "https://pokeapi.co/api/v2/pokemon/15/" }, { "name": "pidgey", "url": "https://pokeapi.co/api/v2/pokemon/16/" }, { "name": "pidgeotto", "url": "https://pokeapi.co/api/v2/pokemon/17/" }, { "name": "pidgeot", "url": "https://pokeapi.co/api/v2/pokemon/18/" }, { "name": "rattata", "url": "https://pokeapi.co/api/v2/pokemon/19/" }, { "name": "raticate", "url": "https://pokeapi.co/api/v2/pokemon/20/" } ]
);

const handleButton = () => {
  btnAllSelected.value = !btnAllSelected.value;
  if (btnAllSelected.value) {
    btnTypeAll.value = "primary";
    btnTypeFavorites.value = "tertiary";
  } else {
    btnTypeAll.value = "tertiary";
    btnTypeFavorites.value = "primary";
  }
};


</script>

<style scoped>
.containerPokemonView {
  @apply w-[31.5rem] h-[90vh];
}
@media (min-width: 768px) {
  .containerPokemonView {
    @apply w-[57rem];
  }
}

.containerHeader {
  @apply h-[5rem] w-[31.5rem]
    fixed top-[2rem] z-[2];
}
@media (min-width: 768px) {
  .containerHeader {
    @apply w-[57rem];
  }
}

.containerList {
  @apply h-[85vh] mt-[2rem] z-[-1];
}

.containerFooter {
  -webkit-box-shadow: 0px -1px 8px 0px var(--lightgray);
  -moz-box-shadow: 0px -1px 8px 0px var(--lightgray);
  box-shadow: 0px -1px 8px 0px var(--lightgray);
  @apply w-full h-[8rem] fixed bottom-[0] left-[0] right-[0]
    flex justify-center items-center content-center z-[5];
}

.containerSelectors {
  @apply w-[31.5rem] flex gap-[1rem] justify-center items-center;
}
@media (min-width: 768px) {
  .containerSelectors {
    @apply w-[57rem] ;
  }
}
</style>