"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = foodCreate;

var methods = _interopRequireWildcard(require("./methods"));

var _steak = _interopRequireDefault(require("./images/steak.jpg"));

var _pork = _interopRequireDefault(require("./images/pork.jpg"));

var _soup = _interopRequireDefault(require("./images/soup.jpg"));

var _rice = _interopRequireDefault(require("./images/rice.jpg"));

var _beer = _interopRequireDefault(require("./images/beer.jpg"));

var _wine = _interopRequireDefault(require("./images/wine.jpg"));

var _chicken = _interopRequireDefault(require("./images/chicken.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// In this file are my images for menu items loaded
// It simply returns <img> <img> with location of used picture
function foodCreate() {
  var steak = methods.ImgCreate(_steak["default"]);
  var pork = methods.ImgCreate(_pork["default"]);
  var soup = methods.ImgCreate(_soup["default"]);
  var rice = methods.ImgCreate(_rice["default"]);
  var beer = methods.ImgCreate(_beer["default"]);
  var wine = methods.ImgCreate(_wine["default"]);
  var chicken = methods.ImgCreate(_chicken["default"]);
  return {
    steak: steak,
    pork: pork,
    soup: soup,
    rice: rice,
    beer: beer,
    wine: wine,
    chicken: chicken
  };
}