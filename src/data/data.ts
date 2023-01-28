import { type PokemonDataStructure } from "./types";
const urlApi = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";

const getPokemons = async (urlApi: string): Promise<any[]> => {
  const response = await fetch(urlApi);
  const dataResponse = (await response.json()) as PokemonDataStructure;

  return dataResponse.results;
};

void getPokemons(urlApi);
