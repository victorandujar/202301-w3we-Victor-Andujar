import { CardComponent } from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import { pokemons } from "../../index.js";

export class CardsContainer extends Component {
  pokemons: any[];

  constructor(parentElement: Element) {
    super(parentElement, "cards-container", "ul");
    this.pokemons = pokemons;
  }

  render() {
    super.render();

    this.element.innerHTML = `${this.pokemons
      .map(() => '<li class="card"></li>')
      .join("")}`;

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
