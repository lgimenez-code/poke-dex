<template>
  <div class="containerPokemonView">
    <div class="containerHeader">
      <BaseSearch />
    </div>
    <div class="containerList">
      <BaseList v-if="!loading" :pokemons="pokemonList" />
      <Loader v-else class="loader"/>
    </div>
    <div class="containerFooter">
      <div class="containerSelectors">
        <BaseButton
          :type="btnTypeAll"
          @click="handleButton"
        >
          <img :src="BaseIcons.listIcon" alt="list icon" />
          All
        </BaseButton>
        <BaseButton
          :type="btnTypeFavorites"
          @click="handleButton"
        >
          <img :src="BaseIcons.favsIcon" alt="favs icon" />
          Favorites
        </BaseButton>
      </div>
    </div>
    <!-- modal -->
    <Teleport to="body">
      <BaseModal />
    </Teleport>
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from "vue";
import BaseSearch from "../components/BaseSearch.vue";
import BaseList from "../components/BaseList.vue";
import BaseButton from "../components/BaseButton.vue";
import Loader from "../components/Loader.vue";
import BaseModal from "../components/BaseModal.vue";
import { usePokemon } from "../composables/usePokemon";

const BaseIcons = inject("BaseIcons");
const { pokemonList, loading, error, fetchPokemon, fetchPokemonByName, } = usePokemon();
const btnTypeAll = ref("primary");
const btnTypeFavorites = ref("tertiary");
const btnAllSelected = ref(true);

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

onMounted(() => {
  fetchPokemon();
});
</script>


<style scoped>
::-webkit-scrollbar {
    display: none;
}

.containerPokemonView {
  @apply w-[31.5rem] h-[90vh] relative;
}
@media (min-width: 768px) {
  .containerPokemonView {
    @apply w-[57rem];
  }
}

.containerHeader {
  @apply h-[5rem] w-full top-[0] z-[2] absolute;
}

.containerList {
  @apply w-full absolute z-[0] top-[7rem] bottom-[2rem] overflow-auto;
}

.loader {
  @apply flex justify-center items-center h-[80%];
}

.containerFooter {
  box-shadow: 0px -1px 8px 0px var(--lightgray);
  @apply w-full h-[8rem] bottom-[0] left-[0] right-[0]
    flex justify-center items-center content-center
    fixed z-[5] bg-[var(--midwhite)];
}

.containerSelectors {
  @apply w-[31.5rem] flex gap-[1rem] justify-center items-center;
}
@media (min-width: 768px) {
  .containerSelectors {
    @apply w-[57rem];
  }
}
</style>