import { type PokemonDataStructure } from "./types";

const getPokemons = async (urlApi: string): Promise<any[]> => {
  const response = await fetch(urlApi);
  const dataResponse = (await response.json()) as PokemonDataStructure;

  return dataResponse.results;
};

export default getPokemons;
