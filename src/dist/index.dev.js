"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("./style.css");

var methods = _interopRequireWildcard(require("./components/methods"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var src = methods.divCreate("", "src");
var navbar = document.createElement("nav");
var content = document.createElement("main");
var footer = document.createElement("footer");
var navMenu = {
  logoContainer: methods.divCreate(methods.logoDefine(), "logo-container"),
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  contact: methods.h4Create("Contact", "contact"),
  menu: methods.h4Create("Menu", "menu")
};
var text = {
  MainInfo: "We are restaurant with long lasting tradition, we are famous for beautiful place, forest, mountains, rivers are us. For many years we bring best possible to your plates and with good prices, we restaurant One Time are one of most enjoyable things you on your little travelling adventure can have. ",
  timeHeader: "Running hours",
  openingInfo: ""
};

var contentRestaurant = function contentRestaurant() {
  var centerInfo = methods.divCreate("", "center-info");
  var timeDiv = methods.divCreate(methods.h2Create(text.timeHeader, "time-header"), "time-div");
  var aboutUs = methods.h2Create(text.MainInfo, "info-content");
  var days = {
    monday: "Monday:    8am - 6pm",
    tuesday: "Tuesday:   8am - 6pm",
    wednesday: "Wednesday: 8am - 6pm",
    thursday: "Thursday:  8am - 6pm",
    friday: "Friday:    8am - 7pm",
    saturday: "Saturday:  8am - 10pm",
    sunday: "Sunday:    8am - 10pm"
  };
  var dayPara = methods.pCreate(days, "none");
  timeDiv.append(dayPara);
  centerInfo.append(aboutUs, timeDiv);
  console.log(days.friday);
  return {
    centerInfo: centerInfo
  };
};

navbar.append(navMenu.logoContainer, navMenu.restaurant, navMenu.contact, navMenu.menu);
content.append(contentRestaurant().centerInfo);
src.append(navbar, content, footer);
document.body.appendChild(src);