import { CardComponent } from "../CardComponent/CardComponent.js";
import Component from "../Component/Component.js";
import type ComponentStructure from "../types";

export class CardContainer extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "cards-container", "div");
  }

  render() {
    super.render();

    const card = new CardComponent(this.parentElement);

    this.element.innerHTML = `<ul class="cards-container cards">
    <li class="card"></li>
    </ul>`;
  }
}
