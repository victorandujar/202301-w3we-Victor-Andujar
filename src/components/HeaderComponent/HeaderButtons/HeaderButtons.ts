import Component from "../../Component/Component.js";
import type ComponentStructure from "../../types.js";

export class HeaderButtons extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "maind-header__buttons buttons", "div");
  }

  render() {
    super.render();
    this.element.innerHTML = `
    <a href="#" class="buttons-header">Home</a>
    <a href="#" class="buttons-header">Favs</a>`;
  }
}