import Component from "../Component/Component.js";

export class FooterComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "footer-content", "div");
  }

  render(): void {
    super.render();

    this.element.innerHTML = `<button class="footer-content__button">Previous</button>
      <span class=""footer-content__text>20/150</span>
      <button  class="footer-content__button">Next</button>`;
  }
}
