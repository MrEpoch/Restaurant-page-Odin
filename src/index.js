import "./style.css";
import * as methods from "./components/methods";
import text from "./components/text";
import aboutRestaurant from "./components/about";
import menuRestaurant from "./components/menu";
import contactRestaurant from "./components/contact";
import logo from "./components/images/One-Time.png";

const src = methods.divCreate("", "src");
const navbar = document.createElement("nav");
const content = document.createElement("main");
const footer = document.createElement("footer");

let mainLoad = aboutRestaurant();

const navMenu = {
  logoContainer: methods.divCreate(methods.ImgCreate(logo), "logo-container"),
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  contact: methods.h4Create("Contact", "contact"),
  menu: methods.h4Create("Menu", "menu"),
};

const footerRestaurant = () => {
  const footerContent = methods.divCreate("", "footer-content");
  const place = methods.divCreate(
    methods.h2Create(text.place, "place-h2"),
    "place-container"
  );
  const placeLoad = () => {
    place.append(methods.pCreate(text.placeText, "text-place"));

    return place;
  };

  footerContent.append(placeLoad());

  return footerContent;
};

navbar.append(
  navMenu.logoContainer,
  navMenu.restaurant,
  navMenu.contact,
  navMenu.menu
);

const navBarChildren = navbar.children;
const aboutBtn = navBarChildren[1];
const contactBtn = navBarChildren[2];
const menuBtn = navBarChildren[3];

aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  mainLoad = aboutRestaurant();
  content.append(mainLoad);
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  mainLoad = contactRestaurant();
  content.append(mainLoad);
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  mainLoad = menuRestaurant();
  content.append(mainLoad);
});

content.append(mainLoad);
footer.append(footerRestaurant());

src.append(navbar, content, footer);

document.body.appendChild(src);
