// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import addHomePage from "./homePage";
import addMenuPage from "./menuPage";
import addAboutPage from "./aboutPage";

const content = document.getElementById("content");

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addHomePage());
});

menu.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addMenuPage());
});

about.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addAboutPage());
});
