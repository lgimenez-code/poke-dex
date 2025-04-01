<template>
  <div class="containerModal">
    <div class="contentModal">
      <div class="heroImage">
        <img
          class="pokemonImage"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="pokemon image"
          loading="lazy"
        >
        <img class="closeButton" :src="BaseIcons.closeIcon" alt="close modal">
      </div>
      <div class="infoPokemon">
        <div class="containerInfo">
          <div class="rowInfo">
            <span class="labelInfo"><b>Name:</b> Squirtle</span>
          </div>
          <div class="rowInfo">
            <span class="labelInfo"><b>Weight:</b> 20</span>
          </div>
          <div class="rowInfo">
            <span class="labelInfo"><b>Height:</b> 18</span>
          </div>
          <div class="rowInfo">
            <span class="labelInfo"><b>Types:</b> Normal, Water</span>
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
import { inject } from "vue";
import BaseButton from "./BaseButton.vue";

const BaseIcons = inject('BaseIcons');

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

.closeButton {
  transition: transform 0.8s ease;
  @apply rounded-[50%] cursor-pointer w-[2.8rem] h-[2.8rem] relative left-[16.5rem] bottom-[6.8rem];
}
.closeButton:hover {
  transform: scale(1.2);
}

.pokemonImage {
  @apply w-[18rem] h-[18rem];
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