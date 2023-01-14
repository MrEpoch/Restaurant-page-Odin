"use strict";

require("./style.css");

var _OneTime = _interopRequireDefault(require("./components/images/One-Time.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logoDefine = function logoDefine() {
  var img = new Image();
  img.src = _OneTime["default"];
  return img;
};

var def = document.createElement("h4");
def.innerHTML = "One Time";
var src = document.createElement('div');
var navbar = document.createElement('nav');
var navMenu = {
  logoContainer: document.createElement('div').appendChild(logoDefine()),
  name: def,
  about: document.createElement('h4').innerHTML = "ABOUT US",
  menu: document.createElement('h4').innerHTML = "MENU"
};
navMenu.logoContainer.classList.add("logo-container");
navbar.append(navMenu.logoContainer, navMenu.name);
document.body.appendChild(navbar);