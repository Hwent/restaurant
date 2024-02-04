import "../scss/styles.scss";

import Search from "../search.svg";
import Favicon from "../silverware-fork-knife.svg";
import addHomePage from "./homePage";
import addMenuPage from "./menuPage";
import addAboutPage from "./aboutPage";
import addCarousel from "./carousel";

const searchicon = document.querySelector(".searchicon");
searchicon.src = Search;
const content = document.getElementById("content");

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

//default page
content.appendChild(addHomePage());

home.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addHomePage());
});

menu.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addMenuPage());
  content.appendChild(addCarousel());
});

about.addEventListener("click", () => {
  content.innerHTML = "";
  content.appendChild(addAboutPage());
});

//document.body.innerHTML = "";
