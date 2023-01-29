import { CardsContainer } from "./components/CardsContainerComponent/CardContainerComponent.js";
import { HeaderButtons } from "./components/HeaderComponent/HeaderButtons/HeaderButtons.js";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import getPokemons from "./data/data.js";

export const pokemons: any[] = await getPokemons(151);

const rootContainer = document.querySelector(".root");

const pageContainer = new PageComponent(rootContainer);
pageContainer.render();

const headerContainer = new HeaderComponent(pageContainer.element);
headerContainer.render();

const button = new HeaderButtons(headerContainer.element);
button.render();

const cardsContainer = new CardsContainer(pageContainer.element);
cardsContainer.render();
