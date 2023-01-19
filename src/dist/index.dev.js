"use strict";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

require("./style.css");

var methods = _interopRequireWildcard(require("./components/methods"));

var _text = _interopRequireDefault(require("./components/text"));

var _about = _interopRequireDefault(require("./components/about"));

var _menu = _interopRequireDefault(require("./components/menu"));

var _contact = _interopRequireDefault(require("./components/contact"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

// Mady by MrEpoch
// I first import my style and important components which will be later loaded
// Inside of src will be my website, navbar is at top, content is what is shown on page and footer is at bottom
var src = methods.divCreate("", "src");
var navbar = document.createElement("nav");
var content = document.createElement("main");
var footer = document.createElement("footer"); // mainLoad will be used for h4 elements at top later for changing content of page, default is aboutRestaurant() which is imported from about in components

var mainLoad = (0, _about["default"])(); // My nav has its three children elements inside navMenu object, i imported all from methods and inside methods file i created function h4Create to make my work easier
// First parameter in h4Create is what is inside that element and second is class of element

var navMenu = {
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  contact: methods.h4Create("Contact", "contact"),
  menu: methods.h4Create("Menu", "menu"),
}; // footerRestaurant function expression returns what should be inside footer

var footerRestaurant = function footerRestaurant() {
  // divCreate from methods creates div because first parameter is empty it will be empty and have class "footer-content"
  var footerContent = methods.divCreate("", "footer-content"); // place creates div with h2 inside and inside of h2 is text.place, text is imported file in components, h2 has class "place-h2"

  var place = methods.divCreate(
    methods.h2Create(_text["default"].place, "place-h2"),
    "place-container"
  ); // Place load function expression returns appended place with paragraph which has text.placeText inside, text is imported from components, paragraph has class "text-place"

  var placeLoad = function placeLoad() {
    place.append(methods.pCreate(_text["default"].placeText, "text-place"));
    return place;
  }; // here i append placeLoad function expression inside footerContent div

  footerContent.append(placeLoad()); // div footerContent is returned and later appended to footer

  return footerContent;
}; // Here i give to the nav from object navMenu restaurant name, contact, menu, later it it be possible to click on it

navbar.append(navMenu.restaurant, navMenu.contact, navMenu.menu); // navBarChildren takes navbar.children which is returns object which holds all children of navbar

var navBarChildren = navbar.children; // Each navbar child has some id inside of object, i used number inside of string to point to the element
// aboutBtn is name of restaurant, contactBtn is contact information and menuBtn is menu

var aboutBtn = navBarChildren["0"];
var contactBtn = navBarChildren["1"];
var menuBtn = navBarChildren["2"]; // When someone clicks on aboutBtn then content becomes empty, mainLoad is changed to aboutRestaurant() and content is changed to aboutRestaurant()

aboutBtn.addEventListener("click", function () {
  if (mainLoad !== (0, _about["default"])()) {
    content.innerHTML = "";
    mainLoad = (0, _about["default"])();
    content.append(mainLoad);
  }
}); // contactBtn changes content to contactRestaurant()

contactBtn.addEventListener("click", function () {
  if (mainLoad !== (0, _contact["default"])()) {
    content.innerHTML = "";
    mainLoad = (0, _contact["default"])();
    content.append(mainLoad);
  }
}); // menuBtn changes content to the menuRestaurant()

menuBtn.addEventListener("click", function () {
  if (mainLoad !== (0, _menu["default"])()) {
    content.innerHTML = "";
    mainLoad = (0, _menu["default"])();
    content.append(mainLoad);
  }
}); // At start content is changed to mainLoad which is aboutRestaurant() at start, footer is appended footerRestaurant() function which returns div with content of footer

content.append(mainLoad);
footer.append(footerRestaurant()); // At the end everything is appended to the src

src.append(navbar, content, footer);
document.body.appendChild(src);
