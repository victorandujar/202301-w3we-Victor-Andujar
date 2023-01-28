import { CardComponent } from "./components/CardComponent/CardComponent.js";
import { CardContainer } from "./components/CardContainerComponent/CardContainerComponent.js";
import { HeaderButtons } from "./components/HeaderComponent/HeaderButtons/HeaderButtons.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import getPokemons from "./data/data.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";
await getPokemons(urlApi);

const rootContainer = document.querySelector(".root");

const pageContainer = new PageComponent(rootContainer);
pageContainer.render();

const headerContainer = new HeaderComponent(pageContainer.element);
headerContainer.render();

const button = new HeaderButtons(headerContainer.element);
button.render();

const cardsContainer = new CardContainer(pageContainer.element);
cardsContainer.render();
