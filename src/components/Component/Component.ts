import type ComponentStructure from "./types.js";

class Component implements ComponentStructure {
  element: Element;

  constructor(
    public readonly parentElement: Element,
    className = "",
    tag = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
