import "./styles/main.css";
// alert("Javascript connected")
import homePage from "./components/home-page";
import menuPage from "./components/menu-page";
import contactPage from "./components/contact-page";
import loadPage from "./load-page";

loadPage(homePage);
// attach btn listeners for page navigation
// home btn 
const homeBtn = document.querySelector(".homeBtn");
homeBtn.addEventListener("click", (e) => {
  loadPage(homePage);
});
// menu btn 
const menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", (e) => {
  loadPage(menuPage);
});
// about btn 
const contactBtn = document.querySelector(".contactBtn");
contactBtn.addEventListener("click", (e) => {
  loadPage(contactPage);
});