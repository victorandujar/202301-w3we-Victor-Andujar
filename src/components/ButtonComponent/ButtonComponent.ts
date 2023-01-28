import Component from "../Component/Component.js";
import type { ButtonsComponentStructure } from "./types.js";

export class ButtonsComponent
  extends Component
  implements ButtonsComponentStructure
{
  constructor(parentElement: Element) {
    super(parentElement, "button", "button");
  }

  render() {
    super.render();
  }
}
