<template>
  <div class="containerPokemonView">
    <div class="containerHeader">
      <BaseSearch
        :value="searchField"
        @update="searchField = $event"
      />
    </div>
    <div class="containerList">
      <BaseList
        v-if="!loading"
        :pokemons="filteredList"
        :favorites="storeFavorites.getFavorites"
        @selected="handleSelectPokemon"
        @addFavorite="handleAddFavorite"
      />
      <Loader v-else class="loader"/>
      <BaseError
        v-if="!filteredList.length && errorDataValue.length"
        :errorMessage="errorDataValue || error"
        @backToHome="searchField = ''"
      />
    </div>
    <div class="containerFooter">
      <div class="containerSelectors">
        <BaseButton
          :isSelected="btnAllSelected"
          :type="btnTypeAll"
          @click="handleSelectorButton"
        >
          <img :src="BaseIcons.listIcon" alt="list icon" />
          All
        </BaseButton>
        <BaseButton
          :isSelected="!btnAllSelected"
          :type="btnTypeFavorites"
          @click="handleSelectorButton"
        >
          <img :src="BaseIcons.favsIcon" alt="favs icon" />
          Favorites
        </BaseButton>
      </div>
    </div>

    <!-- modal -->
    <Teleport to="body">
      <BaseModal
        v-if="showModal"
        :image="selected.image"
        :name="selected.name"
        :weight="selected.weight"
        :height="selected.height"
        :types="selected.types"
        :isFavorite="storeFavorites.isFavorite(selected.name)"
        @closeModal="showModal = !showModal"
        @addFavorite="handleAddFavorite"
      />
    </Teleport>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, computed } from "vue";
import BaseSearch from "../components/BaseSearch.vue";
import BaseList from "../components/BaseList.vue";
import BaseButton from "../components/BaseButton.vue";
import Loader from "../components/Loader.vue";
import BaseModal from "../components/BaseModal.vue";
import BaseError from "../components/BaseError.vue";
import { usePokemon } from "../composables/usePokemon";
import { useFavoritesStore } from "../stores/useFavoritesStore.js";
import { useStorage } from "../composables/useStorage.js";

const storeFavorites = useFavoritesStore();
const { saveToStorage, getDataStorage } = useStorage();

const BaseIcons = inject("BaseIcons");
const {
  pokemonList,
  pokemonSearch,
  loading,
  error,
  fetchPokemon,
  fetchPokemonByName,
} = usePokemon();
const btnTypeAll = ref("primary");
const btnTypeFavorites = ref("tertiary");
const btnAllSelected = ref(true);
const showModal = ref(false);
const selected = ref({});
const searchField = ref('');
const errorDataValue = ref('');

const filteredList = computed(() => {
  errorDataValue.value = "";
  let arrayPokemon = [];
  // get the list "general" or "favorites"
  if (btnAllSelected.value) {
    arrayPokemon = pokemonList.value;
  } else {
    arrayPokemon = pokemonList.value.filter((item) => storeFavorites.getFavorites.includes(item.name));
  }
  // if the "search" field have a value, then search...
  if (searchField.value) {
    const queryLower = searchField.value.toLowerCase();
    arrayPokemon = arrayPokemon.filter(item => {
      const name = item.name.toLowerCase();
      return name.startsWith(queryLower) ||
        name.split(' ').some(word => word.startsWith(queryLower));
    });
    // if there is no data to display...
    if (!arrayPokemon.length) {
      errorDataValue.value = 'You look lost on your journey!';
    }
  }

  return arrayPokemon;
});


// event to change the selectors
const handleSelectorButton = () => {
  btnAllSelected.value = !btnAllSelected.value;
  if (btnAllSelected.value) {
    btnTypeAll.value = "primary";
    btnTypeFavorites.value = "tertiary";
  } else {
    btnTypeAll.value = "tertiary";
    btnTypeFavorites.value = "primary";
  }
  searchField.value = '';
};

// event to find and show the pokemon selected in the modal
const handleSelectPokemon = async (pokemon) => {
  showModal.value = true;
  await fetchPokemonByName(pokemon);
  setSelectedPokemon();
}

// save data in the Store (Pinia) and LocalStorage
const handleAddFavorite = (name) => {
  storeFavorites.addToFavorites(name);
  saveToStorage('favoritesStorage', name);
}

// initializes the localStorage data and Pinia data
const initializeStorage = () => {
  const favoritesStorage = getDataStorage('favoritesStorage');
  if (favoritesStorage && favoritesStorage.length) {
    storeFavorites.initializeFavorites(favoritesStorage);
  }
}

// set pokemon selected
const setSelectedPokemon = () => {
  selected.value = {
    id: pokemonSearch.value?.id,
    image: pokemonSearch.value?.sprites?.other?.['official-artwork']?.front_default,
    name: pokemonSearch.value?.name,
    weight: pokemonSearch.value?.weight,
    height: pokemonSearch.value?.height,
    types: pokemonSearch.value?.types.map((item) => { return item.type.name }).join(', '),
  }
}

onMounted(() => {
  initializeStorage();
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