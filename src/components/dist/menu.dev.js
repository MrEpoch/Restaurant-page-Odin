"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = menuRestaurant;

var methods = _interopRequireWildcard(require("./methods"));

var _text = _interopRequireDefault(require("./text"));

var _foodImages = _interopRequireDefault(require("./food-images"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Inside of this file i created my menu of for content of page
// I imported all my important text and methods, even images from food-images
// i created menuRestaurant() which returns centerInfo which holds all important parts of menu
function menuRestaurant() {
  var centerInfo = methods.divCreate("", "center-info"); // I used

  function OneCard(foodname, pictureLocation, description) {
    this.foodName = foodname;
    this.pictureLocation = pictureLocation;
    this.description = description;

    this.card = function () {
      var wholeCard = methods.divCreate("", "card");
      wholeCard.append(methods.h2Create(foodname, "h3-card"), methods.divCreate(pictureLocation, "img-card"), methods.pCreate(description, "card-desc"));
      return wholeCard;
    };
  }

  var steak = new OneCard("Steak on butter", (0, _foodImages["default"])().steak, _text["default"].steak);
  var soup = new OneCard("Tomato soup", (0, _foodImages["default"])().soup, _text["default"].soup);
  var chicken = new OneCard("Fresh chicken with salad", (0, _foodImages["default"])().chicken, _text["default"].chicken);
  var pork = new OneCard("Pork with pepper sauce", (0, _foodImages["default"])().pork, _text["default"].pork);
  var rice = new OneCard("Asien special rice", (0, _foodImages["default"])().rice, _text["default"].rice);
  var wine = new OneCard("Red wine", (0, _foodImages["default"])().wine, _text["default"].wine);
  var beer = new OneCard("Traditional beer", (0, _foodImages["default"])().beer, _text["default"].beer);
  centerInfo.append(steak.card(), soup.card(), chicken.card(), pork.card(), rice.card(), wine.card(), beer.card());
  return centerInfo;
}