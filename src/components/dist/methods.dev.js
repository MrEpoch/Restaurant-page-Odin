"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.pCreate =
  exports.h4Create =
  exports.h2Create =
  exports.ImgCreate =
  exports.divCreate =
    void 0;

require("../style.css");

var divCreate = function divCreate(InsideDiv, classAdd) {
  var div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  return div;
};

exports.divCreate = divCreate;

var ImgCreate = function ImgCreate(image) {
  var img = new Image();
  img.src = image;
  return img;
};

exports.ImgCreate = ImgCreate;

var h2Create = function h2Create(TextInside, classAdd) {
  var h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);
  return h2;
};

exports.h2Create = h2Create;

var h4Create = function h4Create(TextInside, classAdd) {
  var h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  return h4;
};

exports.h4Create = h4Create;

var pCreate = function pCreate(TextInside, classAdd) {
  var p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);
  return p;
};

exports.pCreate = pCreate;
