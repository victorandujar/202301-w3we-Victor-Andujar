import Component from "../Component/Component.js";
import { logo } from "./logo.js";
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
    this.element.innerHTML = `${logo}
    <div class="main-header__buttons buttons"></div>`;
  }
}
