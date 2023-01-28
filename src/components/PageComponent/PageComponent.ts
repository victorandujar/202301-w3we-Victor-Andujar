import Component from "../Component/Component.js";
import type ComponentStructure from "../types";

export class PageComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "pageContainer", "div");
  }
}
