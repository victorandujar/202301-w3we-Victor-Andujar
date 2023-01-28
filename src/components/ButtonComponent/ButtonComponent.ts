import Component from "../Component/Component.js";
import type ComponentStructure from "../types.js";
import type { ButtonsComponentStructure } from "./types.js";

export class ButtonsComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element, className: string, tag = "") {
    super(parentElement, className, tag);
  }

  render() {
    super.render();
  }
}
