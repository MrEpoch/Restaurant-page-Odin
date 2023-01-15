import "./style.css";
import * as methods from "./components/methods";

const src = methods.divCreate("", "src");
const navbar = document.createElement("nav");
const content = document.createElement("main");
const footer = document.createElement("footer");

const navMenu = {
  logoContainer: methods.divCreate(methods.logoDefine(), "logo-container"),
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  about: methods.h4Create("About us", "about"),
  menu: methods.h4Create("Menu", "menu"),
};

const text = {
  restInfo: "We are restaurant with long lasting tradition, we are famous for beautiful place, forest, mountains, rivers are us. For many years we bring best possible to your plates and with good prices, we restaurant One Time are one of most enjoyable things you on your little travelling adventure can have. "
}

const contentRestaurant = {
  centerInfo: methods.divCreate(methods.pCreate(text.restInfo, "info-content"), "center-info")
};

navbar.append(
  navMenu.logoContainer,
  navMenu.restaurant,
  navMenu.about,
  navMenu.menu
);
content.append(
  contentRestaurant.centerInfo,
);

src.append(navbar, content, footer);

document.body.appendChild(src);
