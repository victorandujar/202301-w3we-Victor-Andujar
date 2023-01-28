import type ComponentStructure from "../types";
import Component from "../Component/Component.js";

export class CardComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "cards", "article");
  }

  render() {
    this.element.innerHTML = `
          <img class="card__image" src="https://i.pinimg.com/564x/34/26/49/342649651ff0985eb72071d26d34a261.jpg"
          alt="Pokemon image" width="100" height="100">
          <h2 class="card__name">Charmandier</h2>
          <div class="" card__text-data>
            <span>Data 1</span>
            <span>Data 2</span>
          </div>
          <div class="card__text-data">
            <span>Data 3</span>
            <span>Data 4</span>
          </div>
          `;
  }
}
