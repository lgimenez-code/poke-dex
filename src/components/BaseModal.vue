<template>
  <div class="containerModal">
    <div class="contentModal">
      <div class="heroImage">
        <div class="containerPokemonImg">
          <img
            class="pokemonImage"
            :src="image"
            alt="pokemon image"
            loading="lazy"
          >
        </div>
        <div class="containerCloseBtn">
          <img
            class="closeButton"
            :src="BaseIcons.closeIcon"
            alt="close modal"
            @click="emit('closeModal', true)"
          >
        </div>
      </div>
      <div class="infoPokemon">
        <div class="containerInfo">
          <div class="rowInfo">
            <span class="labelInfo"><b>Name:</b> {{ name }}</span>
          </div>
          <div class="rowInfo">
            <span class="labelInfo"><b>Weight:</b> {{ weight }}</span>
          </div>
          <div class="rowInfo">
            <span class="labelInfo"><b>Height:</b> {{ height }}</span>
          </div>
          <div class="rowInfo">
            <span class="labelInfo"><b>Types:</b> {{ types }}</span>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="containerButtons">
          <BaseButton :type="'primary'" class="btnSharePokemon">
            Share to my friends
          </BaseButton>
          <img class="btnAddFavorites" :src="BaseIcons.starInactiveIcon" alt="" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, defineProps, defineEmits } from "vue";
import BaseButton from "./BaseButton.vue";

const BaseIcons = inject('BaseIcons');

defineProps({
  image: {
    type: String,
    default: '-',
  },
  name: {
    type: String,
    default: '-',
  },
  weight: {
    type: String,
    default: '-',
  },
  height: {
    type: String,
    default: '-',
  },
  types: {
    type: String,
    default: '-',
  },
});

const emit = defineEmits([ 'closeModal' ]);

</script>

<style scoped>
.containerModal {
  background-color: rgba(0, 0, 0, 0.5);
  @apply absolute fixed z-[500] w-full h-full flex flex-col justify-center items-center;
}

.contentModal {
  @apply relative w-[31.5rem] h-[50.6rem] flex justify-center items-center flex-col;
}

@media (min-width: 768px) {
  .contentModal {
    @apply w-[57rem];
  }
}

.heroImage {
  flex-basis: calc(40% - 1rem);
  border-radius: 0.5rem 0.5rem 0 0;
  background-image: url(../assets/img/bg-image.svg);
  @apply relative w-full flex justify-center items-center object-cover bg-center;
}

.containerPokemonImg {
  @apply absolute;
}

.pokemonImage {
  @apply w-[18rem] h-[18rem];
}

.containerCloseBtn {
  @apply absolute top-[1rem] right-[1rem];
}

.closeButton {
  transition: transform 0.8s ease;
  @apply rounded-[50%] cursor-pointer w-[2.8rem] h-[2.8rem];
}
.closeButton:hover {
  transform: scale(1.2);
}

.infoPokemon {
  flex-basis: calc(40% - 1rem);
  @apply relative bg-[var(--white)] w-full flex justify-center items-center;
}

.containerInfo {
  @apply grid grid-rows-4 h-full w-[80%];
}

.rowInfo {
  @apply border-[var(--darkwhite)] border-b-[1px] flex justify-start items-center;
}

.labelInfo {
  @apply text-[var(--midgray)];
}

.actions {
  flex-basis: calc(20% - 1rem);
  border-radius: 0 0 0.5rem 0.5rem;
  @apply relative bg-[var(--white)] w-full flex justify-center items-center;
}

.containerButtons {
  @apply h-[4.4rem] w-[80%] flex;
}

.btnSharePokemon {
  @apply w-[19.5rem] h-full ml-[0];
}



</style>