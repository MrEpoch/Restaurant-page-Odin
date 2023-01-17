/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/background.jpg */ "./src/components/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./components/images/wood.jpg */ "./src/components/images/wood.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:wght@300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --main-color: #22c55e;\n  --side-color: #bbf7d095;\n  --border-black-color: rgba(0, 0, 0, 0.54);\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  min-height: 100%;\n  width: 100%;\n}\n\n.src {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 0.1fr 3fr 0.01fr;\n}\n\nnav {\n  width: 100%;\n  grid-row: 1 / 2;\n  display: grid;\n  grid-template-columns: 1fr repeat(3, 2fr);\n  justify-items: center;\n}\n\nnav > h4 {\n  align-self: center;\n  font-size: 25px;\n  letter-spacing: 1px;\n}\n\nnav > h4:hover {\n  color: var(--main-color);\n  cursor: pointer;\n}\n\n.logo-container {\n  display: flex;\n  justify-content: flex-start;\n  height: 75%;\n  width: 80%;\n}\n\n.logo-container > img {\n  width: 85%;\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.center-info {\n  color: rgb(239, 239, 239);\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-size: cover;\n  border-top: 2px solid var(--border-black-color);\n  grid-column: 2 / 3;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.h2-info-content {\n  text-align: center;\n  font-family: \"Dancing Script\", cursive;\n  font-size: 55px;\n}\n\n.info-content {\n  padding: 30px;\n  font-style: italic;\n  font-size: 20px;\n}\n\n.dividing-line {\n  width: 100%;\n  height: 8px;\n  background-image: repeating-linear-gradient(\n    to right,\n    #045c8c 0px,\n    #c4e17f 50px,\n    #f7fdca 50px,\n    #f7fdca 100px,\n    #e95e54 100px,\n    #fad071 150px,\n    #09cdb0 200px,\n    #5c7cf9 100px,\n    #32135a 200px,\n    #5e867c 300px,\n    #c17994 300px,\n    #6599e2 300px,\n    #045c8c 300px,\n    #909849 200px\n  );\n  background-size: 100% 10px;\n  background-repeat: no-repeat;\n}\n\n.time-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n}\n\n.time-h2 {\n  font-size: 30px;\n}\n\n.time-container > p {\n  padding: 5px;\n  font-size: 17px;\n}\n\nfooter {\n  border-top: 2px solid var(--border-black-color);\n}\n\n.footer-content {\n  width: 80%;\n  font-size: 15px;\n  display: flex;\n  justify-content: flex-start;\n  border-bottom: 20px solid transparent;\n}\n\n.card {\n  color: black;\n  background-color: rgba(255, 255, 255, 0.755);\n  margin: 30px;\n  width: 40%;\n  border: 4px solid black;\n  border-radius: 10px;\n}\n\n.h3-card {\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  padding: 8px;\n}\n\n.img-card {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n\n.img-card > img {\n  width: 90%;\n  height: 70%;\n}\n\n.card-desc {\n  font-style: italic;\n  width: 80%;\n  padding: 15px;\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 60%;\n  height: 100%;\n}\n\n.contact-info > h2 {\n  background-color: rgba(255, 255, 255, 0.834);\n  color: black;\n  padding: 20px;\n  width: 50%;\n  border: 3px solid gray;\n  border-radius: 15px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAIA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,yCAAyC;EACzC,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mDAAmD;EACnD,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,mDAA6C;EAC7C,2BAA2B;EAC3B,sBAAsB;EACtB,+CAA+C;EAC/C,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;EACtC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,WAAW;EACX;;;;;;;;;;;;;;;;GAgBC;EACD,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,UAAU;EACV,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,qCAAqC;AACvC;;AAEA;EACE,YAAY;EACZ,4CAA4C;EAC5C,YAAY;EACZ,UAAU;EACV,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;EACtC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,4CAA4C;EAC5C,YAAY;EACZ,aAAa;EACb,UAAU;EACV,sBAAsB;EACtB,mBAAmB;AACrB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:wght@300;400;500;700;900&display=swap\");\n\n:root {\n  --main-color: #22c55e;\n  --side-color: #bbf7d095;\n  --border-black-color: rgba(0, 0, 0, 0.54);\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  min-height: 100%;\n  width: 100%;\n}\n\n.src {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 0.1fr 3fr 0.01fr;\n}\n\nnav {\n  width: 100%;\n  grid-row: 1 / 2;\n  display: grid;\n  grid-template-columns: 1fr repeat(3, 2fr);\n  justify-items: center;\n}\n\nnav > h4 {\n  align-self: center;\n  font-size: 25px;\n  letter-spacing: 1px;\n}\n\nnav > h4:hover {\n  color: var(--main-color);\n  cursor: pointer;\n}\n\n.logo-container {\n  display: flex;\n  justify-content: flex-start;\n  height: 75%;\n  width: 80%;\n}\n\n.logo-container > img {\n  width: 85%;\n  height: 100%;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 4fr 1fr;\n  background: url(./components/images/background.jpg);\n  background-position: center;\n  background-size: cover;\n}\n\n.center-info {\n  color: rgb(239, 239, 239);\n  background: url(./components/images/wood.jpg);\n  background-position: center;\n  background-size: cover;\n  border-top: 2px solid var(--border-black-color);\n  grid-column: 2 / 3;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.h2-info-content {\n  text-align: center;\n  font-family: \"Dancing Script\", cursive;\n  font-size: 55px;\n}\n\n.info-content {\n  padding: 30px;\n  font-style: italic;\n  font-size: 20px;\n}\n\n.dividing-line {\n  width: 100%;\n  height: 8px;\n  background-image: repeating-linear-gradient(\n    to right,\n    #045c8c 0px,\n    #c4e17f 50px,\n    #f7fdca 50px,\n    #f7fdca 100px,\n    #e95e54 100px,\n    #fad071 150px,\n    #09cdb0 200px,\n    #5c7cf9 100px,\n    #32135a 200px,\n    #5e867c 300px,\n    #c17994 300px,\n    #6599e2 300px,\n    #045c8c 300px,\n    #909849 200px\n  );\n  background-size: 100% 10px;\n  background-repeat: no-repeat;\n}\n\n.time-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n}\n\n.time-h2 {\n  font-size: 30px;\n}\n\n.time-container > p {\n  padding: 5px;\n  font-size: 17px;\n}\n\nfooter {\n  border-top: 2px solid var(--border-black-color);\n}\n\n.footer-content {\n  width: 80%;\n  font-size: 15px;\n  display: flex;\n  justify-content: flex-start;\n  border-bottom: 20px solid transparent;\n}\n\n.card {\n  color: black;\n  background-color: rgba(255, 255, 255, 0.755);\n  margin: 30px;\n  width: 40%;\n  border: 4px solid black;\n  border-radius: 10px;\n}\n\n.h3-card {\n  font-family: \"Dancing Script\", cursive;\n  font-size: 30px;\n  padding: 8px;\n}\n\n.img-card {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n\n.img-card > img {\n  width: 90%;\n  height: 70%;\n}\n\n.card-desc {\n  font-style: italic;\n  width: 80%;\n  padding: 15px;\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 60%;\n  height: 100%;\n}\n\n.contact-info > h2 {\n  background-color: rgba(255, 255, 255, 0.834);\n  color: black;\n  padding: 20px;\n  width: 50%;\n  border: 3px solid gray;\n  border-radius: 15px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutRestaurant)
/* harmony export */ });
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods */ "./src/components/methods.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/components/text.js");



function aboutRestaurant() {
  const centerInfo = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "center-info");
  const aboutUs = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _methods__WEBPACK_IMPORTED_MODULE_0__.h2Create("One Time", "h2-info-content"),
    "about-container"
  );
  const dividingLine = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "dividing-line");
  const timeDiv = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(
    _methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(_text__WEBPACK_IMPORTED_MODULE_1__["default"].timeHeader, "time-h2"),
    "time-container"
  );

  const aboutLoad = () => {
    const post = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate(_text__WEBPACK_IMPORTED_MODULE_1__["default"].MainInfo, "info-content");
    aboutUs.append(post);
    return aboutUs;
  };
  const openingTime = () => {
    const days = () => {
      const monday = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate("   Monday:    8am - 6pm", "monday");
      const tuesday = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate("  Tuesday:   8am - 6pm", "tuesday");
      const wednesday = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate("Wednesday: 8am - 6pm", "wednesday");
      const thursday = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate(" Thursday:  8am - 6pm", "thursday");
      const friday = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate("   Friday:    8am - 7pm", "friday");
      const saturday = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate(" Saturday:  8am - 10pm", "sunday");
      const sunday = _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate("   Sunday:    8am - 10pm", "saturday");

      return [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
    };
    for (let assign = 0; assign < 7; assign += 1) {
      timeDiv.append(days()[assign]);
    }
    return timeDiv;
  };

  centerInfo.append(aboutLoad(), dividingLine, openingTime());
  return centerInfo;
}


/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactRest)
/* harmony export */ });
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods */ "./src/components/methods.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/components/text.js");



function contactRest() {
  const centerInfo = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "center-info");
  const contactInfo = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "contact-info");
  const name = _methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(_text__WEBPACK_IMPORTED_MODULE_1__["default"].contName, "cont-name");
  const number = _methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(_text__WEBPACK_IMPORTED_MODULE_1__["default"].contNum, "number");
  const email = _methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(_text__WEBPACK_IMPORTED_MODULE_1__["default"].contEmail, "email");
  contactInfo.append(name, number, email);
  centerInfo.append(contactInfo);

  return centerInfo;
}


/***/ }),

/***/ "./src/components/food-images.js":
/*!***************************************!*\
  !*** ./src/components/food-images.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ foodCreate)
/* harmony export */ });
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods */ "./src/components/methods.js");
/* harmony import */ var _images_steak_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/steak.jpg */ "./src/components/images/steak.jpg");
/* harmony import */ var _images_pork_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pork.jpg */ "./src/components/images/pork.jpg");
/* harmony import */ var _images_soup_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/soup.jpg */ "./src/components/images/soup.jpg");
/* harmony import */ var _images_rice_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/rice.jpg */ "./src/components/images/rice.jpg");
/* harmony import */ var _images_beer_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/beer.jpg */ "./src/components/images/beer.jpg");
/* harmony import */ var _images_wine_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/wine.jpg */ "./src/components/images/wine.jpg");
/* harmony import */ var _images_chicken_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/chicken.jpg */ "./src/components/images/chicken.jpg");









function foodCreate() {
  const steak = _methods__WEBPACK_IMPORTED_MODULE_0__.ImgCreate(_images_steak_jpg__WEBPACK_IMPORTED_MODULE_1__);
  const pork = _methods__WEBPACK_IMPORTED_MODULE_0__.ImgCreate(_images_pork_jpg__WEBPACK_IMPORTED_MODULE_2__);
  const soup = _methods__WEBPACK_IMPORTED_MODULE_0__.ImgCreate(_images_soup_jpg__WEBPACK_IMPORTED_MODULE_3__);
  const rice = _methods__WEBPACK_IMPORTED_MODULE_0__.ImgCreate(_images_rice_jpg__WEBPACK_IMPORTED_MODULE_4__);
  const beer = _methods__WEBPACK_IMPORTED_MODULE_0__.ImgCreate(_images_beer_jpg__WEBPACK_IMPORTED_MODULE_5__);
  const wine = _methods__WEBPACK_IMPORTED_MODULE_0__.ImgCreate(_images_wine_jpg__WEBPACK_IMPORTED_MODULE_6__);
  const chicken = _methods__WEBPACK_IMPORTED_MODULE_0__.ImgCreate(_images_chicken_jpg__WEBPACK_IMPORTED_MODULE_7__);
  return { steak, pork, soup, rice, beer, wine, chicken };
}


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuRestaurant)
/* harmony export */ });
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods */ "./src/components/methods.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/components/text.js");
/* harmony import */ var _food_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-images */ "./src/components/food-images.js");




function menuRestaurant() {
  const centerInfo = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "center-info");
  function OneCard(foodname, pictureLocation, description) {
    this.foodName = foodname;
    this.pictureLocation = pictureLocation;
    this.description = description;
    this.card = function () {
      const wholeCard = _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate("", "card");
      wholeCard.append(
        _methods__WEBPACK_IMPORTED_MODULE_0__.h2Create(foodname, "h3-card"),
        _methods__WEBPACK_IMPORTED_MODULE_0__.divCreate(pictureLocation, "img-card"),
        _methods__WEBPACK_IMPORTED_MODULE_0__.pCreate(description, "card-desc")
      );
      return wholeCard;
    };
  }
  const steak = new OneCard("Steak on butter", (0,_food_images__WEBPACK_IMPORTED_MODULE_2__["default"])().steak, _text__WEBPACK_IMPORTED_MODULE_1__["default"].steak);
  const soup = new OneCard("Tomato soup", (0,_food_images__WEBPACK_IMPORTED_MODULE_2__["default"])().soup, _text__WEBPACK_IMPORTED_MODULE_1__["default"].soup);
  const chicken = new OneCard(
    "Fresh chicken with salad",
    (0,_food_images__WEBPACK_IMPORTED_MODULE_2__["default"])().chicken,
    _text__WEBPACK_IMPORTED_MODULE_1__["default"].chicken
  );
  const pork = new OneCard("Pork with pepper sauce", (0,_food_images__WEBPACK_IMPORTED_MODULE_2__["default"])().pork, _text__WEBPACK_IMPORTED_MODULE_1__["default"].pork);
  const rice = new OneCard("Asien special rice", (0,_food_images__WEBPACK_IMPORTED_MODULE_2__["default"])().rice, _text__WEBPACK_IMPORTED_MODULE_1__["default"].rice);
  const wine = new OneCard("Red wine", (0,_food_images__WEBPACK_IMPORTED_MODULE_2__["default"])().wine, _text__WEBPACK_IMPORTED_MODULE_1__["default"].wine);
  const beer = new OneCard("Traditional beer", (0,_food_images__WEBPACK_IMPORTED_MODULE_2__["default"])().beer, _text__WEBPACK_IMPORTED_MODULE_1__["default"].beer);
  centerInfo.append(
    steak.card(),
    soup.card(),
    chicken.card(),
    pork.card(),
    rice.card(),
    wine.card(),
    beer.card()
  );
  return centerInfo;
}


/***/ }),

/***/ "./src/components/methods.js":
/*!***********************************!*\
  !*** ./src/components/methods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgCreate": () => (/* binding */ ImgCreate),
/* harmony export */   "divCreate": () => (/* binding */ divCreate),
/* harmony export */   "h2Create": () => (/* binding */ h2Create),
/* harmony export */   "h4Create": () => (/* binding */ h4Create),
/* harmony export */   "pCreate": () => (/* binding */ pCreate)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


const divCreate = (InsideDiv, classAdd) => {
  const div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  return div;
};

const ImgCreate = (image) => {
  const img = new Image();
  img.src = image;
  return img;
};

const h2Create = (TextInside, classAdd) => {
  const h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);
  return h2;
};

const h4Create = (TextInside, classAdd) => {
  const h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  return h4;
};

const pCreate = (TextInside, classAdd) => {
  const p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);
  return p;
};




/***/ }),

/***/ "./src/components/text.js":
/*!********************************!*\
  !*** ./src/components/text.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const text = {
  MainInfo:
    "We are restaurant with long lasting tradition, we are famous for beautiful place, forest, mountains, rivers are us. For many years we bring best possible to your plates and with good prices, we restaurant One Time are one of most enjoyable things you on your little travelling adventure can have. ",
  timeHeader: "Running hours",
  place: "You can find us at ...",
  placeText: "123 NoPlace street TotallyRealPlace",

  steak:
    "Our steak is most famous steak across long distane, it is tender with butter and fries, longlasting tradition",
  soup: "Tomato soup with garlic and cream",
  chicken: "Fresh chicken breast steak with salad, cooked on olive oil",
  pork: "Our juicy pork steak on garlic with pepper sauce and fries",
  rice: "Our rice carries ancient chine traditional cuisine with chicken",
  wine: "Red wine with most delicate process and taste like no other",
  beer: "Our beer is delivered from best breveries in the locality",
  contName: "MrEpoch NoCompany",
  contEmail: "nocompany@Nomail.no",
  contNum: "+111 222 333",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);


/***/ }),

/***/ "./src/components/images/One-Time.png":
/*!********************************************!*\
  !*** ./src/components/images/One-Time.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1106dd8fa8833268daf3.png";

/***/ }),

/***/ "./src/components/images/background.jpg":
/*!**********************************************!*\
  !*** ./src/components/images/background.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b972090a334b15b26b99.jpg";

/***/ }),

/***/ "./src/components/images/beer.jpg":
/*!****************************************!*\
  !*** ./src/components/images/beer.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb5122b45c40058b0a43.jpg";

/***/ }),

/***/ "./src/components/images/chicken.jpg":
/*!*******************************************!*\
  !*** ./src/components/images/chicken.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c544d48d49b5454048e.jpg";

/***/ }),

/***/ "./src/components/images/pork.jpg":
/*!****************************************!*\
  !*** ./src/components/images/pork.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09a4dc85a6d9f552182b.jpg";

/***/ }),

/***/ "./src/components/images/rice.jpg":
/*!****************************************!*\
  !*** ./src/components/images/rice.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e143da00670024239ad1.jpg";

/***/ }),

/***/ "./src/components/images/soup.jpg":
/*!****************************************!*\
  !*** ./src/components/images/soup.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efa183347bd49c40da9f.jpg";

/***/ }),

/***/ "./src/components/images/steak.jpg":
/*!*****************************************!*\
  !*** ./src/components/images/steak.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fd05b740fe44dcf8e87.jpg";

/***/ }),

/***/ "./src/components/images/wine.jpg":
/*!****************************************!*\
  !*** ./src/components/images/wine.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75850981621bbd83d903.jpg";

/***/ }),

/***/ "./src/components/images/wood.jpg":
/*!****************************************!*\
  !*** ./src/components/images/wood.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6da4249e919bbc95cc9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/methods */ "./src/components/methods.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/text */ "./src/components/text.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about */ "./src/components/about.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _components_images_One_Time_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/images/One-Time.png */ "./src/components/images/One-Time.png");








const src = _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "src");
const navbar = document.createElement("nav");
const content = document.createElement("main");
const footer = document.createElement("footer");

let mainLoad = (0,_components_about__WEBPACK_IMPORTED_MODULE_3__["default"])();

const navMenu = {
  logoContainer: _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate(_components_methods__WEBPACK_IMPORTED_MODULE_1__.ImgCreate(_components_images_One_Time_png__WEBPACK_IMPORTED_MODULE_6__), "logo-container"),
  restaurant: _components_methods__WEBPACK_IMPORTED_MODULE_1__.h4Create("One Time", "restaurant-name"),
  contact: _components_methods__WEBPACK_IMPORTED_MODULE_1__.h4Create("Contact", "contact"),
  menu: _components_methods__WEBPACK_IMPORTED_MODULE_1__.h4Create("Menu", "menu"),
};

const footerRestaurant = () => {
  const footerContent = _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "footer-content");
  const place = _components_methods__WEBPACK_IMPORTED_MODULE_1__.divCreate(
    _components_methods__WEBPACK_IMPORTED_MODULE_1__.h2Create(_components_text__WEBPACK_IMPORTED_MODULE_2__["default"].place, "place-h2"),
    "place-container"
  );
  const placeLoad = () => {
    place.append(_components_methods__WEBPACK_IMPORTED_MODULE_1__.pCreate(_components_text__WEBPACK_IMPORTED_MODULE_2__["default"].placeText, "text-place"));

    return place;
  };

  footerContent.append(placeLoad());

  return footerContent;
};

navbar.append(
  navMenu.logoContainer,
  navMenu.restaurant,
  navMenu.contact,
  navMenu.menu
);

const navBarChildren = navbar.children;
const aboutBtn = navBarChildren[1];
const contactBtn = navBarChildren[2];
const menuBtn = navBarChildren[3];

aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  mainLoad = (0,_components_about__WEBPACK_IMPORTED_MODULE_3__["default"])();
  content.append(mainLoad);
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  mainLoad = (0,_components_contact__WEBPACK_IMPORTED_MODULE_5__["default"])();
  content.append(mainLoad);
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  mainLoad = (0,_components_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
  content.append(mainLoad);
});

content.append(mainLoad);
footer.append(footerRestaurant());

src.append(navbar, content, footer);

document.body.appendChild(src);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsaUJBQWlCLHdEQUFlLENBQUMsa0VBQWM7O0FBRS9DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQWU7QUFDNUI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxhQUFhLCtEQUFpQjtBQUM5QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGFBQWEsNERBQWM7QUFDM0I7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvY29tcG9uZW50cy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvY29tcG9uZW50cy9mb29kLWltYWdlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvY29tcG9uZW50cy9tZXRob2RzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2NvbXBvbmVudHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9jb21wb25lbnRzL2ltYWdlcy93b29kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6ICMyMmM1NWU7XFxuICAtLXNpZGUtY29sb3I6ICNiYmY3ZDA5NTtcXG4gIC0tYm9yZGVyLWJsYWNrLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xcbn1cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNyYyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDNmciAwLjAxZnI7XFxufVxcblxcbm5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciByZXBlYXQoMywgMmZyKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2ID4gaDQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxubmF2ID4gaDQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGhlaWdodDogNzUlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyID4gaW1nIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmNlbnRlci1pbmZvIHtcXG4gIGNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItYmxhY2stY29sb3IpO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oMi1pbmZvLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJEYW5jaW5nIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDU1cHg7XFxufVxcblxcbi5pbmZvLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmRpdmlkaW5nLWxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxuICAgIHRvIHJpZ2h0LFxcbiAgICAjMDQ1YzhjIDBweCxcXG4gICAgI2M0ZTE3ZiA1MHB4LFxcbiAgICAjZjdmZGNhIDUwcHgsXFxuICAgICNmN2ZkY2EgMTAwcHgsXFxuICAgICNlOTVlNTQgMTAwcHgsXFxuICAgICNmYWQwNzEgMTUwcHgsXFxuICAgICMwOWNkYjAgMjAwcHgsXFxuICAgICM1YzdjZjkgMTAwcHgsXFxuICAgICMzMjEzNWEgMjAwcHgsXFxuICAgICM1ZTg2N2MgMzAwcHgsXFxuICAgICNjMTc5OTQgMzAwcHgsXFxuICAgICM2NTk5ZTIgMzAwcHgsXFxuICAgICMwNDVjOGMgMzAwcHgsXFxuICAgICM5MDk4NDkgMjAwcHhcXG4gICk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi50aW1lLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50aW1lLWgyIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLnRpbWUtY29udGFpbmVyID4gcCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWJsYWNrLWNvbG9yKTtcXG59XFxuXFxuLmZvb3Rlci1jb250ZW50IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcmQge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1NSk7XFxuICBtYXJnaW46IDMwcHg7XFxuICB3aWR0aDogNDAlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaDMtY2FyZCB7XFxuICBmb250LWZhbWlseTogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLmltZy1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pbWctY2FyZCA+IGltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxufVxcblxcbi5jYXJkLWRlc2Mge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvID4gaDIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzNCk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbURBQW1EO0VBQ25ELDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbURBQTZDO0VBQzdDLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsK0NBQStDO0VBQy9DLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCQztFQUNELDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiAjMjJjNTVlO1xcbiAgLS1zaWRlLWNvbG9yOiAjYmJmN2QwOTU7XFxuICAtLWJvcmRlci1ibGFjay1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zcmMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAzZnIgMC4wMWZyO1xcbn1cXG5cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIDJmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm5hdiA+IGg0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbm5hdiA+IGg0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciA+IGltZyB7XFxuICB3aWR0aDogODUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbiAgYmFja2dyb3VuZDogdXJsKC4vY29tcG9uZW50cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmNlbnRlci1pbmZvIHtcXG4gIGNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9jb21wb25lbnRzL2ltYWdlcy93b29kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1ibGFjay1jb2xvcik7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmgyLWluZm8tY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogNTVweDtcXG59XFxuXFxuLmluZm8tY29udGVudCB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZGl2aWRpbmctbGluZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcXG4gICAgdG8gcmlnaHQsXFxuICAgICMwNDVjOGMgMHB4LFxcbiAgICAjYzRlMTdmIDUwcHgsXFxuICAgICNmN2ZkY2EgNTBweCxcXG4gICAgI2Y3ZmRjYSAxMDBweCxcXG4gICAgI2U5NWU1NCAxMDBweCxcXG4gICAgI2ZhZDA3MSAxNTBweCxcXG4gICAgIzA5Y2RiMCAyMDBweCxcXG4gICAgIzVjN2NmOSAxMDBweCxcXG4gICAgIzMyMTM1YSAyMDBweCxcXG4gICAgIzVlODY3YyAzMDBweCxcXG4gICAgI2MxNzk5NCAzMDBweCxcXG4gICAgIzY1OTllMiAzMDBweCxcXG4gICAgIzA0NWM4YyAzMDBweCxcXG4gICAgIzkwOTg0OSAyMDBweFxcbiAgKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnRpbWUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRpbWUtaDIge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4udGltZS1jb250YWluZXIgPiBwIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItYmxhY2stY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVyLWNvbnRlbnQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzU1KTtcXG4gIG1hcmdpbjogMzBweDtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5oMy1jYXJkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGFuY2luZyBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4uaW1nLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmltZy1jYXJkID4gaW1nIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDcwJTtcXG59XFxuXFxuLmNhcmQtZGVzYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICB3aWR0aDogODAlO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBoMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODM0KTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyOiAzcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gXCIuL21ldGhvZHNcIjtcbmltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRSZXN0YXVyYW50KCkge1xuICBjb25zdCBjZW50ZXJJbmZvID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJjZW50ZXItaW5mb1wiKTtcbiAgY29uc3QgYWJvdXRVcyA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIG1ldGhvZHMuaDJDcmVhdGUoXCJPbmUgVGltZVwiLCBcImgyLWluZm8tY29udGVudFwiKSxcbiAgICBcImFib3V0LWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IGRpdmlkaW5nTGluZSA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwiZGl2aWRpbmctbGluZVwiKTtcbiAgY29uc3QgdGltZURpdiA9IG1ldGhvZHMuZGl2Q3JlYXRlKFxuICAgIG1ldGhvZHMuaDJDcmVhdGUodGV4dC50aW1lSGVhZGVyLCBcInRpbWUtaDJcIiksXG4gICAgXCJ0aW1lLWNvbnRhaW5lclwiXG4gICk7XG5cbiAgY29uc3QgYWJvdXRMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc3QgPSBtZXRob2RzLnBDcmVhdGUodGV4dC5NYWluSW5mbywgXCJpbmZvLWNvbnRlbnRcIik7XG4gICAgYWJvdXRVcy5hcHBlbmQocG9zdCk7XG4gICAgcmV0dXJuIGFib3V0VXM7XG4gIH07XG4gIGNvbnN0IG9wZW5pbmdUaW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGRheXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtb25kYXkgPSBtZXRob2RzLnBDcmVhdGUoXCIgICBNb25kYXk6ICAgIDhhbSAtIDZwbVwiLCBcIm1vbmRheVwiKTtcbiAgICAgIGNvbnN0IHR1ZXNkYXkgPSBtZXRob2RzLnBDcmVhdGUoXCIgIFR1ZXNkYXk6ICAgOGFtIC0gNnBtXCIsIFwidHVlc2RheVwiKTtcbiAgICAgIGNvbnN0IHdlZG5lc2RheSA9IG1ldGhvZHMucENyZWF0ZShcIldlZG5lc2RheTogOGFtIC0gNnBtXCIsIFwid2VkbmVzZGF5XCIpO1xuICAgICAgY29uc3QgdGh1cnNkYXkgPSBtZXRob2RzLnBDcmVhdGUoXCIgVGh1cnNkYXk6ICA4YW0gLSA2cG1cIiwgXCJ0aHVyc2RheVwiKTtcbiAgICAgIGNvbnN0IGZyaWRheSA9IG1ldGhvZHMucENyZWF0ZShcIiAgIEZyaWRheTogICAgOGFtIC0gN3BtXCIsIFwiZnJpZGF5XCIpO1xuICAgICAgY29uc3Qgc2F0dXJkYXkgPSBtZXRob2RzLnBDcmVhdGUoXCIgU2F0dXJkYXk6ICA4YW0gLSAxMHBtXCIsIFwic3VuZGF5XCIpO1xuICAgICAgY29uc3Qgc3VuZGF5ID0gbWV0aG9kcy5wQ3JlYXRlKFwiICAgU3VuZGF5OiAgICA4YW0gLSAxMHBtXCIsIFwic2F0dXJkYXlcIik7XG5cbiAgICAgIHJldHVybiBbbW9uZGF5LCB0dWVzZGF5LCB3ZWRuZXNkYXksIHRodXJzZGF5LCBmcmlkYXksIHNhdHVyZGF5LCBzdW5kYXldO1xuICAgIH07XG4gICAgZm9yIChsZXQgYXNzaWduID0gMDsgYXNzaWduIDwgNzsgYXNzaWduICs9IDEpIHtcbiAgICAgIHRpbWVEaXYuYXBwZW5kKGRheXMoKVthc3NpZ25dKTtcbiAgICB9XG4gICAgcmV0dXJuIHRpbWVEaXY7XG4gIH07XG5cbiAgY2VudGVySW5mby5hcHBlbmQoYWJvdXRMb2FkKCksIGRpdmlkaW5nTGluZSwgb3BlbmluZ1RpbWUoKSk7XG4gIHJldHVybiBjZW50ZXJJbmZvO1xufVxuIiwiaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tIFwiLi9tZXRob2RzXCI7XG5pbXBvcnQgdGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RSZXN0KCkge1xuICBjb25zdCBjZW50ZXJJbmZvID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJjZW50ZXItaW5mb1wiKTtcbiAgY29uc3QgY29udGFjdEluZm8gPSBtZXRob2RzLmRpdkNyZWF0ZShcIlwiLCBcImNvbnRhY3QtaW5mb1wiKTtcbiAgY29uc3QgbmFtZSA9IG1ldGhvZHMuaDJDcmVhdGUodGV4dC5jb250TmFtZSwgXCJjb250LW5hbWVcIik7XG4gIGNvbnN0IG51bWJlciA9IG1ldGhvZHMuaDJDcmVhdGUodGV4dC5jb250TnVtLCBcIm51bWJlclwiKTtcbiAgY29uc3QgZW1haWwgPSBtZXRob2RzLmgyQ3JlYXRlKHRleHQuY29udEVtYWlsLCBcImVtYWlsXCIpO1xuICBjb250YWN0SW5mby5hcHBlbmQobmFtZSwgbnVtYmVyLCBlbWFpbCk7XG4gIGNlbnRlckluZm8uYXBwZW5kKGNvbnRhY3RJbmZvKTtcblxuICByZXR1cm4gY2VudGVySW5mbztcbn1cbiIsImltcG9ydCAqIGFzIG1ldGhvZHMgZnJvbSBcIi4vbWV0aG9kc1wiO1xuaW1wb3J0IHN0ZWFrSW1nIGZyb20gXCIuL2ltYWdlcy9zdGVhay5qcGdcIjtcbmltcG9ydCBwb3JrSW1nIGZyb20gXCIuL2ltYWdlcy9wb3JrLmpwZ1wiO1xuaW1wb3J0IHNvdXBJbWcgZnJvbSBcIi4vaW1hZ2VzL3NvdXAuanBnXCI7XG5pbXBvcnQgcmljZUltZyBmcm9tIFwiLi9pbWFnZXMvcmljZS5qcGdcIjtcbmltcG9ydCBiZWVySW1nIGZyb20gXCIuL2ltYWdlcy9iZWVyLmpwZ1wiO1xuaW1wb3J0IHdpbmVJbWcgZnJvbSBcIi4vaW1hZ2VzL3dpbmUuanBnXCI7XG5pbXBvcnQgY2hpY2tlbkltZyBmcm9tIFwiLi9pbWFnZXMvY2hpY2tlbi5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vZENyZWF0ZSgpIHtcbiAgY29uc3Qgc3RlYWsgPSBtZXRob2RzLkltZ0NyZWF0ZShzdGVha0ltZyk7XG4gIGNvbnN0IHBvcmsgPSBtZXRob2RzLkltZ0NyZWF0ZShwb3JrSW1nKTtcbiAgY29uc3Qgc291cCA9IG1ldGhvZHMuSW1nQ3JlYXRlKHNvdXBJbWcpO1xuICBjb25zdCByaWNlID0gbWV0aG9kcy5JbWdDcmVhdGUocmljZUltZyk7XG4gIGNvbnN0IGJlZXIgPSBtZXRob2RzLkltZ0NyZWF0ZShiZWVySW1nKTtcbiAgY29uc3Qgd2luZSA9IG1ldGhvZHMuSW1nQ3JlYXRlKHdpbmVJbWcpO1xuICBjb25zdCBjaGlja2VuID0gbWV0aG9kcy5JbWdDcmVhdGUoY2hpY2tlbkltZyk7XG4gIHJldHVybiB7IHN0ZWFrLCBwb3JrLCBzb3VwLCByaWNlLCBiZWVyLCB3aW5lLCBjaGlja2VuIH07XG59XG4iLCJpbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gXCIuL21ldGhvZHNcIjtcbmltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCBmb29kIGZyb20gXCIuL2Zvb2QtaW1hZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVSZXN0YXVyYW50KCkge1xuICBjb25zdCBjZW50ZXJJbmZvID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJjZW50ZXItaW5mb1wiKTtcbiAgZnVuY3Rpb24gT25lQ2FyZChmb29kbmFtZSwgcGljdHVyZUxvY2F0aW9uLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZm9vZE5hbWUgPSBmb29kbmFtZTtcbiAgICB0aGlzLnBpY3R1cmVMb2NhdGlvbiA9IHBpY3R1cmVMb2NhdGlvbjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgd2hvbGVDYXJkID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJjYXJkXCIpO1xuICAgICAgd2hvbGVDYXJkLmFwcGVuZChcbiAgICAgICAgbWV0aG9kcy5oMkNyZWF0ZShmb29kbmFtZSwgXCJoMy1jYXJkXCIpLFxuICAgICAgICBtZXRob2RzLmRpdkNyZWF0ZShwaWN0dXJlTG9jYXRpb24sIFwiaW1nLWNhcmRcIiksXG4gICAgICAgIG1ldGhvZHMucENyZWF0ZShkZXNjcmlwdGlvbiwgXCJjYXJkLWRlc2NcIilcbiAgICAgICk7XG4gICAgICByZXR1cm4gd2hvbGVDYXJkO1xuICAgIH07XG4gIH1cbiAgY29uc3Qgc3RlYWsgPSBuZXcgT25lQ2FyZChcIlN0ZWFrIG9uIGJ1dHRlclwiLCBmb29kKCkuc3RlYWssIHRleHQuc3RlYWspO1xuICBjb25zdCBzb3VwID0gbmV3IE9uZUNhcmQoXCJUb21hdG8gc291cFwiLCBmb29kKCkuc291cCwgdGV4dC5zb3VwKTtcbiAgY29uc3QgY2hpY2tlbiA9IG5ldyBPbmVDYXJkKFxuICAgIFwiRnJlc2ggY2hpY2tlbiB3aXRoIHNhbGFkXCIsXG4gICAgZm9vZCgpLmNoaWNrZW4sXG4gICAgdGV4dC5jaGlja2VuXG4gICk7XG4gIGNvbnN0IHBvcmsgPSBuZXcgT25lQ2FyZChcIlBvcmsgd2l0aCBwZXBwZXIgc2F1Y2VcIiwgZm9vZCgpLnBvcmssIHRleHQucG9yayk7XG4gIGNvbnN0IHJpY2UgPSBuZXcgT25lQ2FyZChcIkFzaWVuIHNwZWNpYWwgcmljZVwiLCBmb29kKCkucmljZSwgdGV4dC5yaWNlKTtcbiAgY29uc3Qgd2luZSA9IG5ldyBPbmVDYXJkKFwiUmVkIHdpbmVcIiwgZm9vZCgpLndpbmUsIHRleHQud2luZSk7XG4gIGNvbnN0IGJlZXIgPSBuZXcgT25lQ2FyZChcIlRyYWRpdGlvbmFsIGJlZXJcIiwgZm9vZCgpLmJlZXIsIHRleHQuYmVlcik7XG4gIGNlbnRlckluZm8uYXBwZW5kKFxuICAgIHN0ZWFrLmNhcmQoKSxcbiAgICBzb3VwLmNhcmQoKSxcbiAgICBjaGlja2VuLmNhcmQoKSxcbiAgICBwb3JrLmNhcmQoKSxcbiAgICByaWNlLmNhcmQoKSxcbiAgICB3aW5lLmNhcmQoKSxcbiAgICBiZWVyLmNhcmQoKVxuICApO1xuICByZXR1cm4gY2VudGVySW5mbztcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBkaXZDcmVhdGUgPSAoSW5zaWRlRGl2LCBjbGFzc0FkZCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuYXBwZW5kKEluc2lkZURpdik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IEltZ0NyZWF0ZSA9IChpbWFnZSkgPT4ge1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IGltYWdlO1xuICByZXR1cm4gaW1nO1xufTtcblxuY29uc3QgaDJDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQpID0+IHtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDIuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIHJldHVybiBoMjtcbn07XG5cbmNvbnN0IGg0Q3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkKSA9PiB7XG4gIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBoNC50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGg0LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICByZXR1cm4gaDQ7XG59O1xuXG5jb25zdCBwQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkKSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcC50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIHAuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIHJldHVybiBwO1xufTtcblxuZXhwb3J0IHsgZGl2Q3JlYXRlLCBJbWdDcmVhdGUsIGgyQ3JlYXRlLCBoNENyZWF0ZSwgcENyZWF0ZSB9O1xuIiwiY29uc3QgdGV4dCA9IHtcbiAgTWFpbkluZm86XG4gICAgXCJXZSBhcmUgcmVzdGF1cmFudCB3aXRoIGxvbmcgbGFzdGluZyB0cmFkaXRpb24sIHdlIGFyZSBmYW1vdXMgZm9yIGJlYXV0aWZ1bCBwbGFjZSwgZm9yZXN0LCBtb3VudGFpbnMsIHJpdmVycyBhcmUgdXMuIEZvciBtYW55IHllYXJzIHdlIGJyaW5nIGJlc3QgcG9zc2libGUgdG8geW91ciBwbGF0ZXMgYW5kIHdpdGggZ29vZCBwcmljZXMsIHdlIHJlc3RhdXJhbnQgT25lIFRpbWUgYXJlIG9uZSBvZiBtb3N0IGVuam95YWJsZSB0aGluZ3MgeW91IG9uIHlvdXIgbGl0dGxlIHRyYXZlbGxpbmcgYWR2ZW50dXJlIGNhbiBoYXZlLiBcIixcbiAgdGltZUhlYWRlcjogXCJSdW5uaW5nIGhvdXJzXCIsXG4gIHBsYWNlOiBcIllvdSBjYW4gZmluZCB1cyBhdCAuLi5cIixcbiAgcGxhY2VUZXh0OiBcIjEyMyBOb1BsYWNlIHN0cmVldCBUb3RhbGx5UmVhbFBsYWNlXCIsXG5cbiAgc3RlYWs6XG4gICAgXCJPdXIgc3RlYWsgaXMgbW9zdCBmYW1vdXMgc3RlYWsgYWNyb3NzIGxvbmcgZGlzdGFuZSwgaXQgaXMgdGVuZGVyIHdpdGggYnV0dGVyIGFuZCBmcmllcywgbG9uZ2xhc3RpbmcgdHJhZGl0aW9uXCIsXG4gIHNvdXA6IFwiVG9tYXRvIHNvdXAgd2l0aCBnYXJsaWMgYW5kIGNyZWFtXCIsXG4gIGNoaWNrZW46IFwiRnJlc2ggY2hpY2tlbiBicmVhc3Qgc3RlYWsgd2l0aCBzYWxhZCwgY29va2VkIG9uIG9saXZlIG9pbFwiLFxuICBwb3JrOiBcIk91ciBqdWljeSBwb3JrIHN0ZWFrIG9uIGdhcmxpYyB3aXRoIHBlcHBlciBzYXVjZSBhbmQgZnJpZXNcIixcbiAgcmljZTogXCJPdXIgcmljZSBjYXJyaWVzIGFuY2llbnQgY2hpbmUgdHJhZGl0aW9uYWwgY3Vpc2luZSB3aXRoIGNoaWNrZW5cIixcbiAgd2luZTogXCJSZWQgd2luZSB3aXRoIG1vc3QgZGVsaWNhdGUgcHJvY2VzcyBhbmQgdGFzdGUgbGlrZSBubyBvdGhlclwiLFxuICBiZWVyOiBcIk91ciBiZWVyIGlzIGRlbGl2ZXJlZCBmcm9tIGJlc3QgYnJldmVyaWVzIGluIHRoZSBsb2NhbGl0eVwiLFxuICBjb250TmFtZTogXCJNckVwb2NoIE5vQ29tcGFueVwiLFxuICBjb250RW1haWw6IFwibm9jb21wYW55QE5vbWFpbC5ub1wiLFxuICBjb250TnVtOiBcIisxMTEgMjIyIDMzM1wiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGV4dDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tIFwiLi9jb21wb25lbnRzL21ldGhvZHNcIjtcbmltcG9ydCB0ZXh0IGZyb20gXCIuL2NvbXBvbmVudHMvdGV4dFwiO1xuaW1wb3J0IGFib3V0UmVzdGF1cmFudCBmcm9tIFwiLi9jb21wb25lbnRzL2Fib3V0XCI7XG5pbXBvcnQgbWVudVJlc3RhdXJhbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51XCI7XG5pbXBvcnQgY29udGFjdFJlc3RhdXJhbnQgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9jb21wb25lbnRzL2ltYWdlcy9PbmUtVGltZS5wbmdcIjtcblxuY29uc3Qgc3JjID0gbWV0aG9kcy5kaXZDcmVhdGUoXCJcIiwgXCJzcmNcIik7XG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxubGV0IG1haW5Mb2FkID0gYWJvdXRSZXN0YXVyYW50KCk7XG5cbmNvbnN0IG5hdk1lbnUgPSB7XG4gIGxvZ29Db250YWluZXI6IG1ldGhvZHMuZGl2Q3JlYXRlKG1ldGhvZHMuSW1nQ3JlYXRlKGxvZ28pLCBcImxvZ28tY29udGFpbmVyXCIpLFxuICByZXN0YXVyYW50OiBtZXRob2RzLmg0Q3JlYXRlKFwiT25lIFRpbWVcIiwgXCJyZXN0YXVyYW50LW5hbWVcIiksXG4gIGNvbnRhY3Q6IG1ldGhvZHMuaDRDcmVhdGUoXCJDb250YWN0XCIsIFwiY29udGFjdFwiKSxcbiAgbWVudTogbWV0aG9kcy5oNENyZWF0ZShcIk1lbnVcIiwgXCJtZW51XCIpLFxufTtcblxuY29uc3QgZm9vdGVyUmVzdGF1cmFudCA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyQ29udGVudCA9IG1ldGhvZHMuZGl2Q3JlYXRlKFwiXCIsIFwiZm9vdGVyLWNvbnRlbnRcIik7XG4gIGNvbnN0IHBsYWNlID0gbWV0aG9kcy5kaXZDcmVhdGUoXG4gICAgbWV0aG9kcy5oMkNyZWF0ZSh0ZXh0LnBsYWNlLCBcInBsYWNlLWgyXCIpLFxuICAgIFwicGxhY2UtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgcGxhY2VMb2FkID0gKCkgPT4ge1xuICAgIHBsYWNlLmFwcGVuZChtZXRob2RzLnBDcmVhdGUodGV4dC5wbGFjZVRleHQsIFwidGV4dC1wbGFjZVwiKSk7XG5cbiAgICByZXR1cm4gcGxhY2U7XG4gIH07XG5cbiAgZm9vdGVyQ29udGVudC5hcHBlbmQocGxhY2VMb2FkKCkpO1xuXG4gIHJldHVybiBmb290ZXJDb250ZW50O1xufTtcblxubmF2YmFyLmFwcGVuZChcbiAgbmF2TWVudS5sb2dvQ29udGFpbmVyLFxuICBuYXZNZW51LnJlc3RhdXJhbnQsXG4gIG5hdk1lbnUuY29udGFjdCxcbiAgbmF2TWVudS5tZW51XG4pO1xuXG5jb25zdCBuYXZCYXJDaGlsZHJlbiA9IG5hdmJhci5jaGlsZHJlbjtcbmNvbnN0IGFib3V0QnRuID0gbmF2QmFyQ2hpbGRyZW5bMV07XG5jb25zdCBjb250YWN0QnRuID0gbmF2QmFyQ2hpbGRyZW5bMl07XG5jb25zdCBtZW51QnRuID0gbmF2QmFyQ2hpbGRyZW5bM107XG5cbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgbWFpbkxvYWQgPSBhYm91dFJlc3RhdXJhbnQoKTtcbiAgY29udGVudC5hcHBlbmQobWFpbkxvYWQpO1xufSk7XG5cbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBtYWluTG9hZCA9IGNvbnRhY3RSZXN0YXVyYW50KCk7XG4gIGNvbnRlbnQuYXBwZW5kKG1haW5Mb2FkKTtcbn0pO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgbWFpbkxvYWQgPSBtZW51UmVzdGF1cmFudCgpO1xuICBjb250ZW50LmFwcGVuZChtYWluTG9hZCk7XG59KTtcblxuY29udGVudC5hcHBlbmQobWFpbkxvYWQpO1xuZm9vdGVyLmFwcGVuZChmb290ZXJSZXN0YXVyYW50KCkpO1xuXG5zcmMuYXBwZW5kKG5hdmJhciwgY29udGVudCwgZm9vdGVyKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcmMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9