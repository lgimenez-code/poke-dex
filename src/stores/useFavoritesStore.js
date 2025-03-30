import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [],
  }),
  getters: {
    getFavorites: (state) => state.favorites,
    isFavorite: (state) => (pokemonId) => {
      return state.favorites.some(pokemon => pokemon.id === pokemonId)
    },
  },
  actions: {
    addToFavorites(pokemon) {
      if (!this.isFavorite(pokemon.id)) {
        this.favorites.push(pokemon)
      }
    },
    removeFromFavorites(pokemonId) {
      this.favorites = this.favorites.filter(pokemon => pokemon.id !== pokemonId)
    },
  },
});