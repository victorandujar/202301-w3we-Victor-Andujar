import type ComponentStructure from "../Component/types";
import Component from "../Component/Component.js";
import type { PokemonInfoStructure } from "../../data/types";

export class CardComponent extends Component implements ComponentStructure {
  pokemon: PokemonInfoStructure;

  constructor(parentElement: Element, pokemon: PokemonInfoStructure) {
    super(parentElement, "card", "article");
    this.pokemon = pokemon;
  }

  render() {
    super.render();
    this.element.innerHTML = `
          <img class="card__image" src="${this.pokemon.sprites.other.dream_world.front_default}"
          alt="Pokemon image" width="100" height="100">
          <h2 class="card__name">${this.pokemon.name}</h2>
          <div class="" card__text-data>
            <span>Height: ${this.pokemon.height}</span>
            <span>Weight: ${this.pokemon.weight}</span>
          </div>
            <span>Ability: ${this.pokemon.abilities[0].ability.name}</span>
            <span>Type: ${this.pokemon.types[0].type.name}</span>
          </div>
          `;
  }
}
