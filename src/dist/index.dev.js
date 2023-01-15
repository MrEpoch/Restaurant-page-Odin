"use strict";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

require("./style.css");

var methods = _interopRequireWildcard(require("./components/methods"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var src = methods.divCreate("", "src");
var navbar = document.createElement("nav");
var content = document.createElement("main");
var footer = document.createElement("footer");
var navMenu = {
  logoContainer: methods.divCreate(methods.logoDefine(), "logo-container"),
  restaurant: methods.h4Create("One Time", "restaurant-name"),
  contact: methods.h4Create("Contact", "contact"),
  menu: methods.h4Create("Menu", "menu"),
};
var text = {
  MainInfo:
    "We are restaurant with long lasting tradition, we are famous for beautiful place, forest, mountains, rivers are us. For many years we bring best possible to your plates and with good prices, we restaurant One Time are one of most enjoyable things you on your little travelling adventure can have. ",
  timeHeader: "Running hours",
  place: "You can find us at ...",
  placeText: "123 NoPlace street TotallyRealPlace",
};

var contentRestaurant = function contentRestaurant() {
  var centerInfo = methods.divCreate("", "center-info");
  var aboutUs = methods.divCreate(
    methods.h2Create(text.MainInfo, "info-content"),
    "about-container"
  );
  var timeDiv = methods.divCreate(
    methods.h2Create(text.timeHeader, "time-h2"),
    "time-container"
  );
  var place = methods.divCreate(
    methods.h2Create(text.place, "place-h2"),
    "place-container"
  );

  var aboutLoad = function aboutLoad() {
    return aboutUs;
  };

  var openingTime = function openingTime() {
    var days = function days() {
      var monday = methods.pCreate("Monday:    8am - 6pm", "monday");
      var tuesday = methods.pCreate("Tuesday:   8am - 6pm", "tuesday");
      var wednesday = methods.pCreate("Wednesday: 8am - 6pm", "wednesday");
      var thursday = methods.pCreate("Thursday:  8am - 6pm", "thursday");
      var friday = methods.pCreate("Friday:    8am - 7pm", "friday");
      var saturday = methods.pCreate("Saturday:  8am - 10pm", "sunday");
      var sunday = methods.pCreate("Sunday:    8am - 10pm", "saturday");
      return [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    };

    for (var assign = 0; assign < 7; assign += 1) {
      timeDiv.append(days()[assign]);
    }

    return timeDiv;
  };

  var placeLoad = function placeLoad() {
    place.append(methods.pCreate(text.placeText, "text-place"));
    return place;
  };

  centerInfo.append(aboutLoad(), openingTime(), placeLoad());
  return {
    centerInfo: centerInfo,
  };
};

navbar.append(
  navMenu.logoContainer,
  navMenu.restaurant,
  navMenu.contact,
  navMenu.menu
);
content.append(contentRestaurant().centerInfo);
src.append(navbar, content, footer);
document.body.appendChild(src);
