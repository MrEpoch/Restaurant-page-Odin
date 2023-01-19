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

// Made by MrEpoch
// This file was made to be exported for use in other files, it holds methods for creating html elements in easier way
// divCreate function expression takes like first what is inside and then class and returns div at end
var divCreate = function divCreate(InsideDiv, classAdd) {
  var div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  return div;
}; // ImgCreate is returns takes Imported img and returns it ready for use to append to the div or other use

exports.divCreate = divCreate;

var ImgCreate = function ImgCreate(image) {
  var img = new Image();
  img.src = image;
  return img;
}; // h2Create creates h2 element which takes textContent and class and returns h2

exports.ImgCreate = ImgCreate;

var h2Create = function h2Create(TextInside, classAdd) {
  var h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);
  return h2;
}; // h4Create creates h4 element which takes textContent and class and returns h4

exports.h2Create = h2Create;

var h4Create = function h4Create(TextInside, classAdd) {
  var h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  return h4;
}; // pCreate creates paragrahp with first parameter text and second class and returns paragraph

exports.h4Create = h4Create;

var pCreate = function pCreate(TextInside, classAdd) {
  var p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);
  return p;
}; // exporting all functions

exports.pCreate = pCreate;
