import { CardComponent } from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import type ComponentStructure from "../Component/types";

export class CardsContainer extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "cards-container", "div");
  }

  render() {
    super.render();

    this.element.innerHTML = `<ul class="cards-container cards">
    <li class="card"></li>
    </ul>`;

    const card = document.querySelector(".card");

    const a = new CardComponent(card);
    a.render();
  }
}
