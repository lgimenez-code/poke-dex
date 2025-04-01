import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  getters: {
    // get a list of favorites
    getFavorites: (state) => state.favorites,
    // validates if the favorite already exists in the list
    isFavorite: (state) => (pokemonName) => {
      return state.favorites.some(name => name === pokemonName)
    },
  },
  actions: {
    // save a new favorite or remove the favorite from the list
    addToFavorites(pokemonName) {
      if (!this.isFavorite(pokemonName)) {
        this.favorites.push(pokemonName);
      } else {
        this.favorites = this.favorites.filter(name => name !== pokemonName)
      }
    },
    initializeFavorites(array) {
      this.favorites = array.slice();
    },
  },
});