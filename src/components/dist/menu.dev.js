"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = menuRestaurant;

var methods = _interopRequireWildcard(require("./methods"));

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function menuRestaurant() {
  var centerInfo = methods.divCreate("", "center-info");

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

  ;
  var steak = new OneCard("steak", "none", _text["default"].steak);
  var soup = new OneCard("soup", "none", _text["default"].soup);
  var chicken = new OneCard("steak", "none", _text["default"].chicken);
  var pork = new OneCard("steak", "none", _text["default"].pork);
  var rice = new OneCard("steak", "none", _text["default"].rice);
  var wine = new OneCard("steak", "none", _text["default"].wine);
  var beer = new OneCard("steak", "none", _text["default"].beer);
  centerInfo.append(steak.card(), soup.card(), chicken.card(), pork.card(), rice.card(), wine.card(), beer.card());
  return centerInfo;
}