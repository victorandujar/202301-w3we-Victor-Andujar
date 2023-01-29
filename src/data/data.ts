import type { PokemonInfoStructure } from "./types";

const urlApi = "https://pokeapi.co/api/v2/pokemon/";
const getPokemons = async (
  idPokemon: number
): Promise<PokemonInfoStructure[]> => {
  const pokemons = [];

  for (let position = 1; position <= idPokemon; position++) {
    const pokemon = fetch(`${urlApi}${position}`);
    pokemons.push(pokemon);
  }

  const unresolvedRsponse = await Promise.all(pokemons);
  const resolvedInfo = unresolvedRsponse.map(async (pokemon) => pokemon.json());

  const allPokemons = (await Promise.all(
    resolvedInfo
  )) as PokemonInfoStructure[];

  return allPokemons;
};

export default getPokemons;
