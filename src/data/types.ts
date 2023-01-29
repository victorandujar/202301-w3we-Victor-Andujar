export interface PokemonInfoStructure {
  name: string;
  weight: string;
  height: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
