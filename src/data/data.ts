import type { PokemonInfoStructure } from "./types";

const urlApi = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (idPokemonUser: number): Promise<string> => {
  const response = await fetch(`${urlApi}${idPokemonUser}`);
  const dataResponse = (await response.json()) as PokemonInfoStructure;

  return dataResponse.sprites.other["official-artwork"].front_default;
};

export default getPokemons;
