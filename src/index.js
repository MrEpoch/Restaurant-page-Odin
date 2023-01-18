// Mady by MrEpoch

// I first import my style and important components which will be later loaded

import "./style.css";
import * as methods from "./components/methods";
import text from "./components/text";
import aboutRestaurant from "./components/about";
import menuRestaurant from "./components/menu";
import contactRestaurant from "./components/contact";

// Inside of src will be my website, navbar is at top, content is what is shown on page and footer is at bottom

const src = methods.divCreate("", "src");
const navbar = document.createElement("nav");
const content = document.createElement("main");
const footer = document.createElement("footer");

// mainLoad will be used for h4 elements at top later for changing content of page, default is aboutRestaurant() which is imported from about in components

let mainLoad = aboutRestaurant();

// My nav has its three children elements inside navMenu object, i imported all from methods and inside methods file i created function h4Create to make my work easier
// First parameter in h4Create is what is inside that element and second is class of element

const navMenu = {
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  contact: methods.h4Create("Contact", "contact"),
  menu: methods.h4Create("Menu", "menu"),
};

// footerRestaurant function expression returns what should be inside footer

const footerRestaurant = () => {
  // divCreate from methods creates div because first parameter is empty it will be empty and have class "footer-content"
  const footerContent = methods.divCreate("", "footer-content");
  // place creates div with h2 inside and inside of h2 is text.place, text is imported file in components, h2 has class "place-h2"
  const place = methods.divCreate(
    methods.h2Create(text.place, "place-h2"),
    "place-container"
  );

  // Place load function expression returns appended place with paragraph which has text.placeText inside, text is imported from components, paragraph has class "text-place"

  const placeLoad = () => {
    place.append(methods.pCreate(text.placeText, "text-place"));

    return place;
  };

  // here i append placeLoad function expression inside footerContent div

  footerContent.append(placeLoad());

  // div footerContent is returned and later appended to footer

  return footerContent;
};

// Here i give to the nav from object navMenu restaurant name, contact, menu, later it it be possible to click on it

navbar.append(
  navMenu.restaurant,
  navMenu.contact,
  navMenu.menu
);

// navBarChildren takes navbar.children which is returns object which holds all children of navbar

const navBarChildren = navbar.children;

// Each navbar child has some id inside of object, i used number inside of string to point to the element
// aboutBtn is name of restaurant, contactBtn is contact information and menuBtn is menu

const aboutBtn = navBarChildren["0"];
const contactBtn = navBarChildren["1"];
const menuBtn = navBarChildren["2"];

// When someone clicks on aboutBtn then content becomes empty, mainLoad is changed to aboutRestaurant() and content is changed to aboutRestaurant()

aboutBtn.addEventListener("click", () => {
  if(mainLoad !== aboutRestaurant()) {
    content.innerHTML = "";
    mainLoad = aboutRestaurant();
    content.append(mainLoad);
  }
});

// contactBtn changes content to contactRestaurant()

contactBtn.addEventListener("click", () => {
  if (mainLoad !== contactRestaurant()) {
    content.innerHTML = "";
    mainLoad = contactRestaurant();
    content.append(mainLoad);
  }
});

// menuBtn changes content to the menuRestaurant()

menuBtn.addEventListener("click", () => {
  if (mainLoad !== menuRestaurant()) {
    content.innerHTML = "";
    mainLoad = menuRestaurant();
    content.append(mainLoad);
  }
});

// At start content is changed to mainLoad which is aboutRestaurant() at start, footer is appended footerRestaurant() function which returns div with content of footer

content.append(mainLoad);
footer.append(footerRestaurant());

// At the end everything is appended to the src

src.append(navbar, content, footer);

document.body.appendChild(src);
