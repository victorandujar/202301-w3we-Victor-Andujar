export interface PokemonInfoStructure {
  name: string;
  weight: string;
  height: string;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
}
