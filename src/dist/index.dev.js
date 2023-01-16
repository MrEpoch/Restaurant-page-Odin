"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("./style.css");

var methods = _interopRequireWildcard(require("./components/methods"));

var _text = _interopRequireDefault(require("./components/text"));

var _about = _interopRequireDefault(require("./components/about"));

var _menu = _interopRequireDefault(require("./components/menu"));

var _contact = _interopRequireDefault(require("./components/contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var src = methods.divCreate("", "src");
var navbar = document.createElement("nav");
var content = document.createElement("main");
var footer = document.createElement("footer");
var mainLoad = (0, _about["default"])();
var navMenu = {
  logoContainer: methods.divCreate(methods.logoDefine(), "logo-container"),
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  contact: methods.h4Create("Contact", "contact"),
  menu: methods.h4Create("Menu", "menu")
};

var footerRestaurant = function footerRestaurant() {
  var footerContent = methods.divCreate("", "footer-content");
  var place = methods.divCreate(methods.h2Create(_text["default"].place, "place-h2"), "place-container");

  var placeLoad = function placeLoad() {
    place.append(methods.pCreate(_text["default"].placeText, "text-place"));
    return place;
  };

  footerContent.append(placeLoad());
  return footerContent;
};

navbar.append(navMenu.logoContainer, navMenu.restaurant, navMenu.contact, navMenu.menu);
var navBarChildren = navbar.children;
var aboutBtn = navBarChildren[1];
var contactBtn = navBarChildren[2];
var menuBtn = navBarChildren[3];
aboutBtn.addEventListener("click", function () {
  content.innerHTML = "";
  mainLoad = (0, _about["default"])();
  content.append(mainLoad);
});
contactBtn.addEventListener("click", function () {
  content.innerHTML = "";
  mainLoad = (0, _contact["default"])();
  content.append(mainLoad);
});
menuBtn.addEventListener("click", function () {
  content.innerHTML = "";
  mainLoad = (0, _menu["default"])();
  content.append(mainLoad);
});
content.append(mainLoad);
footer.append(footerRestaurant());
src.append(navbar, content, footer);
document.body.appendChild(src);