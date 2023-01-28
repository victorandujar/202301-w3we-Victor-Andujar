import Component from "../Component/Component.js";
import type { HeaderComponentStructure } from "./types.js";

export class HeaderComponent
  extends Component
  implements HeaderComponentStructure
{
  constructor(parentElement: Element) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();
    this.element.innerHTML = `<img src="pokemon-logo.svg" alt"Pokemon logo" height="100" width="150">`;
  }
}
