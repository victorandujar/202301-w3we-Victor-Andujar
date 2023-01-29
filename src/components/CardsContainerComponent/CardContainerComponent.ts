import type { PokemonInfoStructure } from "../../data/types.js";
import { CardComponent } from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import type ComponentStructure from "../Component/types";
import { pokemons } from "../../index.js";

export class CardsContainer extends Component implements ComponentStructure {
  pokemons: any[];

  constructor(parentElement: Element) {
    super(parentElement, "cards-container", "div");
    this.pokemons = pokemons;
  }

  render() {
    super.render();

    this.element.innerHTML = `<ul class="cards-container cards">
          ${this.pokemons.map(() => '<li class="card"></li>').join("")}</ul>)}
            </ul>`;

    this.element
      .querySelectorAll(".card")
      .forEach((pokemonCardContainer, position) => {
        const pokemonCardList = new CardComponent(
          pokemonCardContainer,
          this.pokemons[position]
        );
        pokemonCardList.render();
      });
  }
}
