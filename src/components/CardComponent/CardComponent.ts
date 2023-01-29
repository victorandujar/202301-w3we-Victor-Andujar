import type ComponentStructure from "../Component/types";
import Component from "../Component/Component.js";
import type { PokemonInfoStructure } from "../../data/types";

export class CardComponent extends Component implements ComponentStructure {
  pokemon: PokemonInfoStructure;

  constructor(parentElement: Element, pokemon: PokemonInfoStructure) {
    super(parentElement, "cards", "article");
    this.pokemon = pokemon;
  }

  render() {
    super.render();
    this.element.innerHTML = `
          <img class="card__image" src="${this.pokemon.sprites.other.dream_world.front_default}"
          alt="Pokemon image" width="100" height="100">
          <h2 class="card__name">${this.pokemon.name}</h2>
          <div class="" card__text-data>
            <span>${this.pokemon.height}</span>
            <span>${this.pokemon.weight}</span>
          </div>
          <div class="card__text-data">
            <span></span>
            <span>Data 4</span>
          </div>
          `;
  }
}
