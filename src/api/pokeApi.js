const url = 'https://pokeapi.co/api/v2/pokemon';

export const pokeApi = {
  async get() {
    try {
      const response = await fetch(`${url}`);
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
  async getByName(name) {
    try {
      const response = await fetch(`${url}/${name}`);
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
}