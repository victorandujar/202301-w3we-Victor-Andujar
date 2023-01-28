import Component from "../Component/Component.js";
import type ComponentStructure from "../types";

export class CardContainer extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "cards-container", "div");
  }

  render(): void {
    super.render();

    this.element.innerHTML = `<ul class="cards-container cards"></ul>`;
  }
}
