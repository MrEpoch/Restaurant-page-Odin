"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = aboutRestaurant;

var methods = _interopRequireWildcard(require("./methods"));

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function aboutRestaurant() {
  var centerInfo = methods.divCreate("", "center-info");
  var aboutUs = methods.divCreate(methods.h2Create("One Time", "h2-info-content"), "about-container");
  var dividingLine = methods.divCreate("", "dividing-line");
  var timeDiv = methods.divCreate(methods.h2Create(_text["default"].timeHeader, "time-h2"), "time-container");

  var aboutLoad = function aboutLoad() {
    var post = methods.pCreate(_text["default"].MainInfo, "info-content");
    aboutUs.append(post);
    return aboutUs;
  };

  var openingTime = function openingTime() {
    var days = function days() {
      var monday = methods.pCreate("   Monday:    8am - 6pm", "monday");
      var tuesday = methods.pCreate("  Tuesday:   8am - 6pm", "tuesday");
      var wednesday = methods.pCreate("Wednesday: 8am - 6pm", "wednesday");
      var thursday = methods.pCreate(" Thursday:  8am - 6pm", "thursday");
      var friday = methods.pCreate("   Friday:    8am - 7pm", "friday");
      var saturday = methods.pCreate(" Saturday:  8am - 10pm", "sunday");
      var sunday = methods.pCreate("   Sunday:    8am - 10pm", "saturday");
      return [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    };

    for (var assign = 0; assign < 7; assign += 1) {
      timeDiv.append(days()[assign]);
    }

    return timeDiv;
  };

  centerInfo.append(aboutLoad(), dividingLine, openingTime());
  return {
    centerInfo: centerInfo
  };
}

;