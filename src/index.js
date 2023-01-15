import "./style.css";
import * as methods from "./components/methods";

const src = methods.divCreate("", "src");
const navbar = document.createElement("nav");

const navMenu = {
  logoContainer: methods.divCreate(methods.logoDefine(), "logo-container"),
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  about: methods.h4Create("About us", "about"),
  menu: methods.h4Create("Menu", "menu"),
};

navbar.append(
  navMenu.logoContainer,
  navMenu.restaurant,
  navMenu.about,
  navMenu.menu
);


src.append(navbar);

document.body.appendChild(src);
