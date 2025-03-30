<template>
  <div class="containerPokemonView">
    <div class="containerHeader">
      <BaseSearch />
    </div>
    <div class="containerList">
      <BaseList />
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
  @apply h-[5rem];
}

.containerList {
  @apply h-[85vh];
}

.containerFooter {
  -webkit-box-shadow: 0px -1px 8px 0px var(--lightgray);
  -moz-box-shadow: 0px -1px 8px 0px var(--lightgray);
  box-shadow: 0px -1px 8px 0px var(--lightgray);
  @apply w-full h-[8rem] fixed bottom-[0] left-[0] right-[0]
    flex justify-center items-center content-center;
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
