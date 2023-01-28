import { PageComponent } from "./components/PageComponent/PageComponent.js";
import getPokemons from "./data/data.js";

const urlApi = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150";
const data = getPokemons(urlApi);

const parentElement = document.querySelector(".root");

const pageContainer = new PageComponent(parentElement);
pageContainer.render();
