"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h4Create = exports.logoDefine = exports.divCreate = void 0;

var _OneTime = _interopRequireDefault(require("./images/One-Time.png"));

require("../style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var divCreate = function divCreate(InsideDiv, classAdd) {
  var div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  return div;
};

exports.divCreate = divCreate;

var logoDefine = function logoDefine() {
  var img = new Image();
  img.src = _OneTime["default"];
  return img;
};

exports.logoDefine = logoDefine;

var h4Create = function h4Create(TextInside, classAdd) {
  var h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  return h4;
};

exports.h4Create = h4Create;