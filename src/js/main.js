// Import our custom CSS
import "../scss/styles.scss";
import Icon from "../silverware-fork-knife.svg";

import addHomePage from "./homePage";
import addMenuPage from "./menuPage";
import addAboutPage from "./aboutPage";

document.head.innerHTML += `<link rel="icon" href="${Icon}" type="image/svg+xml">`;

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

//document.body.innerHTML = "";
