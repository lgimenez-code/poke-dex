import { ref } from "vue";
import { pokeApi } from "../api/pokeApi";

export function usePokemon() {
  const pokemonList = ref([]);
  const loading = ref(false);
  const error = ref("");

  // get all pokemon
  const fetchPokemon = async () => {
    loading.value = true;
    error.value = "";
    try {
      const response = await pokeApi.get();
      pokemonList.value = response.results;
    } catch (err) {
      error.value = "Failed to fetch Pokemon data.";
    } finally {
      loading.value = false;
    }
  };

  // get the pokemon with the name passed in the parameter
  const fetchPokemonByName = async (name) => {
    loading.value = true;
    error.value = "";
    try {
      const response = await pokeApi.getByName(name);
      pokemonList.value = [response];
    } catch (err) {
      error.value = "Failed to fetch Pokemon data.";
    } finally {
      loading.value = false;
    }
  };

  return {
    pokemonList,
    loading,
    error,
    fetchPokemon,
    fetchPokemonByName,
  };
}
