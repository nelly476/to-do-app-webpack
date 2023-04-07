"use strict";
(self["webpackChunkto_do_app"] = self["webpackChunkto_do_app"] || []).push([["index"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Poppins-Regular.ttf */ "./src/assets/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Poppins-ExtraLight.ttf */ "./src/assets/fonts/Poppins-ExtraLight.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Fasthand-Regular.ttf */ "./src/assets/fonts/Fasthand-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Poppins-ExtraLight\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Fasthand-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Poppins-Regular\";\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\n.header {\n  background-color: #11324d;\n  color: white;\n  height: 9%;\n  display: flex;\n  align-items: center;\n  padding-left: 1em;\n}\n\n.content {\n  height: 91%;\n  display: flex;\n  position: relative;\n}\n\n.sidebar {\n  background-color: #ecf2ff;\n  width: 20%;\n  height: 100%;\n  padding-left: 1.3em;\n  /* padding-top: 1em; */\n  row-gap: 0.5em;\n}\n\n.sidebar h3 {\n  margin-top: 0.7em;\n  margin-bottom: 0.2em;\n}\n\n.sidebar h4 {\n  font-family: \"Poppins-ExtraLight\";\n  margin: 0;\n  /* margin-top: 0.3em;\n  margin-bottom: 0.5em; */\n}\n\n.addButton {\n  margin-top: 1.2em;\n  width: 2.2em;\n  height: 2.2em;\n  color: #11324d;\n  cursor: pointer;\n}\n\n.all-tasks-area {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 1.5em;\n}\n\n.task-element {\n  background-color: #ecf2ff;\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6em 0.6em;\n}\n\n.right-side-task-svg,\n.left-side-task-svg {\n  display: flex;\n  align-items: center;\n}\n\n.task-element p {\n  margin: 0;\n}\n\n.check-box-svg {\n  margin-right: 0.8em;\n}\n\n.check-box-svg,\n.right-side-task-svg svg {\n  width: 1.1em;\n  height: 1.1em;\n}\n\n.right-side-task-svg {\n  column-gap: 0.4em;\n}\n\n.to-do-module {\n  background-color: white;\n  padding: 0;\n  width: 40%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 1em;\n  margin: 0 auto;\n  border-radius: 15px;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.to-do-module h2 {\n  margin: 0;\n  width: 100%;\n  padding: 1em 1em;\n  color: white;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #11324d;\n}\n\n.newNoteTitle-area,\n.newNoteDescription-area,\n.deadline-area {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.3em;\n}\n\n.priority-area,\n.form-btn-area,\n.newNoteTitle-area,\n.newNoteDescription-area,\n.deadline-area {\n  margin: 1em 2em;\n}\n\n.priority-area {\n  display: flex;\n  column-gap: 1em;\n}\n\n.low-priority,\n.medium-priority,\n.high-priority {\n  width: 5em;\n  text-align: center;\n  padding: 0.3em;\n  border-radius: 10px;\n  font-size: smaller;\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n.low-priority {\n  border: 4px solid green;\n  color: green;\n}\n\n.medium-priority {\n  border: 4px solid #fde541;\n  color: #fde541;\n}\n\n.high-priority {\n  border: 4px solid red;\n  color: red;\n}\n\n.form-btn-area {\n  margin-top: 2.5em;\n  display: flex;\n  justify-content: end;\n  column-gap: 1em;\n}\n\n.close-module-button,\n.add-module-button {\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.4em 0.3em;\n  border-radius: 10px;\n  width: 5em;\n  text-align: center;\n  border: 2px solid #11324d;\n  background-color: #ecf2ff;\n}\n\n.add-module-button {\n  font-weight: bold;\n  background-color: #11324d;\n  color: #ecf2ff;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,+DAAiE;EACjE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,+DAAoE;EACpE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,+DAAkE;EAClE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,iCAAiC;EACjC,SAAS;EACT;yBACuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV,UAAU;EACV,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,QAAQ;EACR,cAAc;EACd,mBAAmB;EACnB,0DAA0D;EAC1D,uDAAuD;EACvD,kDAAkD;AACpD;;AAEA;EACE,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,4BAA4B;EAC5B,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;;;;EAKE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;;;EAGE,UAAU;EACV,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@font-face {\n  font-family: \"Poppins-Regular\";\n  src: url(\"./assets/fonts/Poppins-Regular.ttf\") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Poppins-ExtraLight\";\n  src: url(\"./assets/fonts/Poppins-ExtraLight.ttf\") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Fasthand-Regular\";\n  src: url(\"./assets/fonts/Fasthand-Regular.ttf\") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Poppins-Regular\";\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none;\n}\n\n.header {\n  background-color: #11324d;\n  color: white;\n  height: 9%;\n  display: flex;\n  align-items: center;\n  padding-left: 1em;\n}\n\n.content {\n  height: 91%;\n  display: flex;\n  position: relative;\n}\n\n.sidebar {\n  background-color: #ecf2ff;\n  width: 20%;\n  height: 100%;\n  padding-left: 1.3em;\n  /* padding-top: 1em; */\n  row-gap: 0.5em;\n}\n\n.sidebar h3 {\n  margin-top: 0.7em;\n  margin-bottom: 0.2em;\n}\n\n.sidebar h4 {\n  font-family: \"Poppins-ExtraLight\";\n  margin: 0;\n  /* margin-top: 0.3em;\n  margin-bottom: 0.5em; */\n}\n\n.addButton {\n  margin-top: 1.2em;\n  width: 2.2em;\n  height: 2.2em;\n  color: #11324d;\n  cursor: pointer;\n}\n\n.all-tasks-area {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 1.5em;\n}\n\n.task-element {\n  background-color: #ecf2ff;\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6em 0.6em;\n}\n\n.right-side-task-svg,\n.left-side-task-svg {\n  display: flex;\n  align-items: center;\n}\n\n.task-element p {\n  margin: 0;\n}\n\n.check-box-svg {\n  margin-right: 0.8em;\n}\n\n.check-box-svg,\n.right-side-task-svg svg {\n  width: 1.1em;\n  height: 1.1em;\n}\n\n.right-side-task-svg {\n  column-gap: 0.4em;\n}\n\n.to-do-module {\n  background-color: white;\n  padding: 0;\n  width: 40%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 1em;\n  margin: 0 auto;\n  border-radius: 15px;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n}\n\n.to-do-module h2 {\n  margin: 0;\n  width: 100%;\n  padding: 1em 1em;\n  color: white;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background-color: #11324d;\n}\n\n.newNoteTitle-area,\n.newNoteDescription-area,\n.deadline-area {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1.3em;\n}\n\n.priority-area,\n.form-btn-area,\n.newNoteTitle-area,\n.newNoteDescription-area,\n.deadline-area {\n  margin: 1em 2em;\n}\n\n.priority-area {\n  display: flex;\n  column-gap: 1em;\n}\n\n.low-priority,\n.medium-priority,\n.high-priority {\n  width: 5em;\n  text-align: center;\n  padding: 0.3em;\n  border-radius: 10px;\n  font-size: smaller;\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n.low-priority {\n  border: 4px solid green;\n  color: green;\n}\n\n.medium-priority {\n  border: 4px solid #fde541;\n  color: #fde541;\n}\n\n.high-priority {\n  border: 4px solid red;\n  color: red;\n}\n\n.form-btn-area {\n  margin-top: 2.5em;\n  display: flex;\n  justify-content: end;\n  column-gap: 1em;\n}\n\n.close-module-button,\n.add-module-button {\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 0.4em 0.3em;\n  border-radius: 10px;\n  width: 5em;\n  text-align: center;\n  border: 2px solid #11324d;\n  background-color: #ecf2ff;\n}\n\n.add-module-button {\n  font-weight: bold;\n  background-color: #11324d;\n  color: #ecf2ff;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");



_modules_UI__WEBPACK_IMPORTED_MODULE_1__.UI.addMainLayout();


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


const UI = (() => {
  function addMainLayout() {
    createHeader();
    createContentArea();
    initAddToDoButton();
    showAllTasksArea();
    // localStorage.clear();
  }

  function createHeader() {
    const header = document.createElement("div");
    header.className = "header";
    header.innerHTML = `
    <h1>TO DO</h1>`;
    document.body.appendChild(header);
  }

  function createContentArea() {
    const content = document.createElement("div");
    content.className = "content";

    const sideBar = document.createElement("div");
    sideBar.className = "sidebar";
    sideBar.innerHTML = `
    <h3>All</h3>
    <h4>Today</h4>
    <h4>Week</h4>
    <h3>Projects</h3>
    <h4>Study</h4>
    <h4>Work</h4>
    <svg class="addButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
    `;
    content.appendChild(sideBar);
    document.body.appendChild(content);
  }

  function initAddToDoButton() {
    const addButton = document.querySelector(".addButton");
    addButton.addEventListener("click", () => {
      showToDoModule();
    });
  }

  function showAllTasksArea() {
    const content = document.querySelector(".content");

    const allTasksArea = document.createElement("div");
    allTasksArea.className = "all-tasks-area";
    allTasksArea.innerHTML = `
    <h1>All Tasks</h1>`;
    content.appendChild(allTasksArea);
    if (_task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.length > 0) {
      showExistingTasks();
    }
  }

  function showExistingTasks() {
    _task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.map((item) => {
      createTaskElement(item);
      initTaskElemBtn(item);
    });
  }

  function initTaskElemBtn(item) {
    // document.querySelector(".delete-to-do-btn").addEventListener("click" => {

    // })
    console.log(item);
  }

  function createTaskElement(item) {
    const allTasksArea = document.querySelector(".all-tasks-area");
    const taskElement = document.createElement("div");
    taskElement.className = "task-element";
    taskElement.innerHTML = `
    <span class="left-side-task-svg">
    <svg class="check-box-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
     <p>${item.title}</p>
    </span>
     <span class="right-side-task-svg">
     <p>${item.dueDate}</p>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
      <svg class="delete-to-do-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"/></svg>

    </span>
     `;
    allTasksArea.appendChild(taskElement);
  }

  function showNewToDo() {
    const newTask = _task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection[_task__WEBPACK_IMPORTED_MODULE_0__.task.toDoCollection.length - 1];
    createTaskElement(newTask);
  }

  function showToDoModule() {
    const content = document.querySelector(".content");
    if (document.querySelector(".to-do-module")) {
      document.querySelector(".to-do-module").classList.remove("hidden");
    } else {
      const toDoModule = document.createElement("div");
      toDoModule.className = "to-do-module";
      toDoModule.innerHTML = `
      <h2>Add a new task</h2>
      <div class="newTaskForm">
        <div class="newNoteTitle-area">
          <label for="title">Title </label>
          <input type="text" name="title" id="title" required />
        </div>
        <div class="newNoteDescription-area">
          <label for="description">Description </label>
          <textarea id="description" name="description" rows="6" cols="33"></textarea>
        </div>
        <div class="deadline-area">
        <label for="deadline-date">Deadline</label>
        <input type="date" id="deadline-date" name="deadline-date">
        </div>
        <div class="priority-area">
        <p>Priority:</p>
        <p class="low-priority">LOW</p>
        <p class="medium-priority">MEDIUM</p>
        <p class="high-priority">HIGH</p></div>
        <div class="form-btn-area">
          <button class="close-module-button">Cancel</button>
          <input class="add-module-button" type="submit" value="Add" />
        </div>
      </div>
      </div>
      `;
      content.appendChild(toDoModule);
      initModuleBtn();
    }
  }

  function initModuleBtn() {
    const addNewToDoBtn = document.querySelector(".add-module-button");
    const closeModuleBtn = document.querySelector(".close-module-button");

    addNewToDoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addNewToDo();
      closeModule();
    });

    closeModuleBtn.addEventListener("click", () => {
      closeModule();
    });
  }

  function closeModule() {
    document.querySelector(".to-do-module").classList.add("hidden");
  }

  function addNewToDo() {
    const newNoteTitle = document.getElementById("title").value;
    const newNoteDescription = document.getElementById("description").value;
    const newNoteDeadline = document.getElementById("deadline-date").value;

    _task__WEBPACK_IMPORTED_MODULE_0__.task.addToCollection(newNoteTitle, newNoteDescription, newNoteDeadline);
    showNewToDo();
    // createTaskElement(task.addToCollection[-1]);
    // console.log();
  }

  return { addMainLayout };
})();




/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");


const task = (() => {
  let tasksFromLocalStorage = JSON.parse(localStorage.getItem("allTasks"));
  let toDoCollection = [];

  if (tasksFromLocalStorage) {
    toDoCollection = tasksFromLocalStorage;
  }

  const newTask = (title, description, dueDate) => ({
    title,
    description,
    dueDate,
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(),
  });

  function addToCollection(title, description, dueDate) {
    // localStorage.clear();
    const newToDo = newTask(title, description, dueDate);
    toDoCollection.push(newToDo);
    localStorage.setItem("allTasks", JSON.stringify(toDoCollection));

    // console.log(toDoCollection);
  }
  return { addToCollection, toDoCollection };
})();




/***/ }),

/***/ "./src/assets/fonts/Fasthand-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Fasthand-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83ad7a92c1580f6e78b8.ttf";

/***/ }),

/***/ "./src/assets/fonts/Poppins-ExtraLight.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Poppins-ExtraLight.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333cb30c20e31999802a.ttf";

/***/ }),

/***/ "./src/assets/fonts/Poppins-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Poppins-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0k7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9uYW5vaWQvaW5kZXguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMtRXh0cmFMaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9GYXN0aGFuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMtRXh0cmFMaWdodFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZhc3RoYW5kLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zLVJlZ3VsYXJcXFwiO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzMjRkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA5JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogOTElO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjJmZjtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xcbiAgLyogcGFkZGluZy10b3A6IDFlbTsgKi9cXG4gIHJvdy1nYXA6IDAuNWVtO1xcbn1cXG5cXG4uc2lkZWJhciBoMyB7XFxuICBtYXJnaW4tdG9wOiAwLjdlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbn1cXG5cXG4uc2lkZWJhciBoNCB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMtRXh0cmFMaWdodFxcXCI7XFxuICBtYXJnaW46IDA7XFxuICAvKiBtYXJnaW4tdG9wOiAwLjNlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtOyAqL1xcbn1cXG5cXG4uYWRkQnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEuMmVtO1xcbiAgd2lkdGg6IDIuMmVtO1xcbiAgaGVpZ2h0OiAyLjJlbTtcXG4gIGNvbG9yOiAjMTEzMjRkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWxsLXRhc2tzLWFyZWEge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDEuNWVtO1xcbn1cXG5cXG4udGFzay1lbGVtZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YyZmY7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNmVtIDAuNmVtO1xcbn1cXG5cXG4ucmlnaHQtc2lkZS10YXNrLXN2ZyxcXG4ubGVmdC1zaWRlLXRhc2stc3ZnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1lbGVtZW50IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY2hlY2stYm94LXN2ZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xcbn1cXG5cXG4uY2hlY2stYm94LXN2ZyxcXG4ucmlnaHQtc2lkZS10YXNrLXN2ZyBzdmcge1xcbiAgd2lkdGg6IDEuMWVtO1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG59XFxuXFxuLnJpZ2h0LXNpZGUtdGFzay1zdmcge1xcbiAgY29sdW1uLWdhcDogMC40ZW07XFxufVxcblxcbi50by1kby1tb2R1bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDQwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMWVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMnB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDJweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggMnB4IHJnYmEoMzQsIDYwLCA4MCwgMC4yKTtcXG59XFxuXFxuLnRvLWRvLW1vZHVsZSBoMiB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFlbSAxZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEzMjRkO1xcbn1cXG5cXG4ubmV3Tm90ZVRpdGxlLWFyZWEsXFxuLm5ld05vdGVEZXNjcmlwdGlvbi1hcmVhLFxcbi5kZWFkbGluZS1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4zZW07XFxufVxcblxcbi5wcmlvcml0eS1hcmVhLFxcbi5mb3JtLWJ0bi1hcmVhLFxcbi5uZXdOb3RlVGl0bGUtYXJlYSxcXG4ubmV3Tm90ZURlc2NyaXB0aW9uLWFyZWEsXFxuLmRlYWRsaW5lLWFyZWEge1xcbiAgbWFyZ2luOiAxZW0gMmVtO1xcbn1cXG5cXG4ucHJpb3JpdHktYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMWVtO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5LFxcbi5tZWRpdW0tcHJpb3JpdHksXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgd2lkdGg6IDVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM2VtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW47XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZkZTU0MTtcXG4gIGNvbG9yOiAjZmRlNTQxO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDRweCBzb2xpZCByZWQ7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZm9ybS1idG4tYXJlYSB7XFxuICBtYXJnaW4tdG9wOiAyLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGNvbHVtbi1nYXA6IDFlbTtcXG59XFxuXFxuLmNsb3NlLW1vZHVsZS1idXR0b24sXFxuLmFkZC1tb2R1bGUtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuM2VtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA1ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMTEzMjRkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjJmZjtcXG59XFxuXFxuLmFkZC1tb2R1bGUtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMzI0ZDtcXG4gIGNvbG9yOiAjZWNmMmZmO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsK0RBQWlFO0VBQ2pFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsK0RBQW9FO0VBQ3BFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsK0RBQWtFO0VBQ2xFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0VBQ1Q7eUJBQ3VCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMERBQTBEO0VBQzFELHVEQUF1RDtFQUN2RCxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBOzs7OztFQUtFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zLUV4dHJhTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMtRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmFzdGhhbmQtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvRmFzdGhhbmQtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGlucy1SZWd1bGFyXFxcIjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMzI0ZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogOSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDkxJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YyZmY7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjNlbTtcXG4gIC8qIHBhZGRpbmctdG9wOiAxZW07ICovXFxuICByb3ctZ2FwOiAwLjVlbTtcXG59XFxuXFxuLnNpZGViYXIgaDMge1xcbiAgbWFyZ2luLXRvcDogMC43ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG59XFxuXFxuLnNpZGViYXIgaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zLUV4dHJhTGlnaHRcXFwiO1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogbWFyZ2luLXRvcDogMC4zZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTsgKi9cXG59XFxuXFxuLmFkZEJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxLjJlbTtcXG4gIHdpZHRoOiAyLjJlbTtcXG4gIGhlaWdodDogMi4yZW07XFxuICBjb2xvcjogIzExMzI0ZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFsbC10YXNrcy1hcmVhIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICByb3ctZ2FwOiAxLjVlbTtcXG59XFxuXFxuLnRhc2stZWxlbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMmZmO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjZlbSAwLjZlbTtcXG59XFxuXFxuLnJpZ2h0LXNpZGUtdGFzay1zdmcsXFxuLmxlZnQtc2lkZS10YXNrLXN2ZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZWxlbWVudCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNoZWNrLWJveC1zdmcge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcXG59XFxuXFxuLmNoZWNrLWJveC1zdmcsXFxuLnJpZ2h0LXNpZGUtdGFzay1zdmcgc3ZnIHtcXG4gIHdpZHRoOiAxLjFlbTtcXG4gIGhlaWdodDogMS4xZW07XFxufVxcblxcbi5yaWdodC1zaWRlLXRhc2stc3ZnIHtcXG4gIGNvbHVtbi1nYXA6IDAuNGVtO1xcbn1cXG5cXG4udG8tZG8tbW9kdWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiA0MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDFlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDJweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggMTBweCAycHggcmdiYSgzNCwgNjAsIDgwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDJweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XFxufVxcblxcbi50by1kby1tb2R1bGUgaDIge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxZW0gMWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMzI0ZDtcXG59XFxuXFxuLm5ld05vdGVUaXRsZS1hcmVhLFxcbi5uZXdOb3RlRGVzY3JpcHRpb24tYXJlYSxcXG4uZGVhZGxpbmUtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1ib3R0b206IDEuM2VtO1xcbn1cXG5cXG4ucHJpb3JpdHktYXJlYSxcXG4uZm9ybS1idG4tYXJlYSxcXG4ubmV3Tm90ZVRpdGxlLWFyZWEsXFxuLm5ld05vdGVEZXNjcmlwdGlvbi1hcmVhLFxcbi5kZWFkbGluZS1hcmVhIHtcXG4gIG1hcmdpbjogMWVtIDJlbTtcXG59XFxuXFxuLnByaW9yaXR5LWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDFlbTtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSxcXG4ubWVkaXVtLXByaW9yaXR5LFxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIHdpZHRoOiA1ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVuO1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZGU1NDE7XFxuICBjb2xvcjogI2ZkZTU0MTtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyOiA0cHggc29saWQgcmVkO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmZvcm0tYnRuLWFyZWEge1xcbiAgbWFyZ2luLXRvcDogMi41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBjb2x1bW4tZ2FwOiAxZW07XFxufVxcblxcbi5jbG9zZS1tb2R1bGUtYnV0dG9uLFxcbi5hZGQtbW9kdWxlLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAwLjRlbSAwLjNlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzExMzI0ZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YyZmY7XFxufVxcblxcbi5hZGQtbW9kdWxlLWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTMyNGQ7XFxuICBjb2xvcjogI2VjZjJmZjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBVSSB9IGZyb20gXCIuL21vZHVsZXMvVUlcIjtcblxuVUkuYWRkTWFpbkxheW91dCgpO1xuIiwiaW1wb3J0IHsgdGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY29uc3QgVUkgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBhZGRNYWluTGF5b3V0KCkge1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNyZWF0ZUNvbnRlbnRBcmVhKCk7XG4gICAgaW5pdEFkZFRvRG9CdXR0b24oKTtcbiAgICBzaG93QWxsVGFza3NBcmVhKCk7XG4gICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5UTyBETzwvaDE+YDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDb250ZW50QXJlYSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xuXG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZUJhci5jbGFzc05hbWUgPSBcInNpZGViYXJcIjtcbiAgICBzaWRlQmFyLmlubmVySFRNTCA9IGBcbiAgICA8aDM+QWxsPC9oMz5cbiAgICA8aDQ+VG9kYXk8L2g0PlxuICAgIDxoND5XZWVrPC9oND5cbiAgICA8aDM+UHJvamVjdHM8L2gzPlxuICAgIDxoND5TdHVkeTwvaDQ+XG4gICAgPGg0Pldvcms8L2g0PlxuICAgIDxzdmcgY2xhc3M9XCJhZGRCdXR0b25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjMuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0yNTYgNTEyYzE0MS40IDAgMjU2LTExNC42IDI1Ni0yNTZTMzk3LjQgMCAyNTYgMFMwIDExNC42IDAgMjU2UzExNC42IDUxMiAyNTYgNTEyek0yMzIgMzQ0VjI4MEgxNjhjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRoNjRWMTY4YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjR2NjRoNjRjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRIMjgwdjY0YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0elwiLz48L3N2Zz5cbiAgICBgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRBZGRUb0RvQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2hvd1RvRG9Nb2R1bGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dBbGxUYXNrc0FyZWEoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGFsbFRhc2tzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWxsVGFza3NBcmVhLmNsYXNzTmFtZSA9IFwiYWxsLXRhc2tzLWFyZWFcIjtcbiAgICBhbGxUYXNrc0FyZWEuaW5uZXJIVE1MID0gYFxuICAgIDxoMT5BbGwgVGFza3M8L2gxPmA7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhbGxUYXNrc0FyZWEpO1xuICAgIGlmICh0YXNrLnRvRG9Db2xsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgIHNob3dFeGlzdGluZ1Rhc2tzKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0V4aXN0aW5nVGFza3MoKSB7XG4gICAgdGFzay50b0RvQ29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNyZWF0ZVRhc2tFbGVtZW50KGl0ZW0pO1xuICAgICAgaW5pdFRhc2tFbGVtQnRuKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFRhc2tFbGVtQnRuKGl0ZW0pIHtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS10by1kby1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgPT4ge1xuXG4gICAgLy8gfSlcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KGl0ZW0pIHtcbiAgICBjb25zdCBhbGxUYXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrcy1hcmVhXCIpO1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRWxlbWVudC5jbGFzc05hbWUgPSBcInRhc2stZWxlbWVudFwiO1xuICAgIHRhc2tFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImxlZnQtc2lkZS10YXNrLXN2Z1wiPlxuICAgIDxzdmcgY2xhc3M9XCJjaGVjay1ib3gtc3ZnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi40LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNjQgODBjLTguOCAwLTE2IDcuMi0xNiAxNlY0MTZjMCA4LjggNy4yIDE2IDE2IDE2SDM4NGM4LjggMCAxNi03LjIgMTYtMTZWOTZjMC04LjgtNy4yLTE2LTE2LTE2SDY0ek0wIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMySDM4NGMzNS4zIDAgNjQgMjguNyA2NCA2NFY0MTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRINjRjLTM1LjMgMC02NC0yOC43LTY0LTY0Vjk2ek0zMzcgMjA5TDIwOSAzMzdjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC02NC02NGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlzMjQuNi05LjQgMzMuOSAwbDQ3IDQ3TDMwMyAxNzVjOS40LTkuNCAyNC42LTkuNCAzMy45IDBzOS40IDI0LjYgMCAzMy45elwiLz48L3N2Zz5cbiAgICAgPHA+JHtpdGVtLnRpdGxlfTwvcD5cbiAgICA8L3NwYW4+XG4gICAgIDxzcGFuIGNsYXNzPVwicmlnaHQtc2lkZS10YXNrLXN2Z1wiPlxuICAgICA8cD4ke2l0ZW0uZHVlRGF0ZX08L3A+XG4gICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTkyIDUxMlwiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi40LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjMgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9XCJNNDggODBhNDggNDggMCAxIDEgOTYgMEE0OCA0OCAwIDEgMSA0OCA4MHpNMCAyMjRjMC0xNy43IDE0LjMtMzIgMzItMzJIOTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJWNDQ4aDMyYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMySDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDY0VjI1NkgzMmMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6XCIvPjwvc3ZnPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk00NzEuNiAyMS43Yy0yMS45LTIxLjktNTcuMy0yMS45LTc5LjIgMEwzNjIuMyA1MS43bDk3LjkgOTcuOSAzMC4xLTMwLjFjMjEuOS0yMS45IDIxLjktNTcuMyAwLTc5LjJMNDcxLjYgMjEuN3ptLTI5OS4yIDIyMGMtNi4xIDYuMS0xMC44IDEzLjYtMTMuNSAyMS45bC0yOS42IDg4LjhjLTIuOSA4LjYtLjYgMTguMSA1LjggMjQuNnMxNS45IDguNyAyNC42IDUuOGw4OC44LTI5LjZjOC4yLTIuNyAxNS43LTcuNCAyMS45LTEzLjVMNDM3LjcgMTcyLjMgMzM5LjcgNzQuMyAxNzIuNCAyNDEuN3pNOTYgNjRDNDMgNjQgMCAxMDcgMCAxNjBWNDE2YzAgNTMgNDMgOTYgOTYgOTZIMzUyYzUzIDAgOTYtNDMgOTYtOTZWMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMydjk2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDk2Yy0xNy43IDAtMzItMTQuMy0zMi0zMlYxNjBjMC0xNy43IDE0LjMtMzIgMzItMzJoOTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIOTZ6XCIvPjwvc3ZnPlxuICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZS10by1kby1idG5cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCI+PCEtLSEgRm9udCBBd2Vzb21lIFBybyA2LjQuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyMyBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD1cIk0yOTAuNyA1Ny40TDU3LjQgMjkwLjdjLTI1IDI1LTI1IDY1LjUgMCA5MC41bDgwIDgwYzEyIDEyIDI4LjMgMTguNyA0NS4zIDE4LjdIMjg4aDkuNEg1MTJjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJIMzg3LjlMNTE4LjYgMjg1LjNjMjUtMjUgMjUtNjUuNSAwLTkwLjVMMzgxLjMgNTcuNGMtMjUtMjUtNjUuNS0yNS05MC41IDB6TTI5Ny40IDQxNkgyODhsLTEwNS40IDAtODAtODBMMjI3LjMgMjExLjMgMzY0LjcgMzQ4LjcgMjk3LjQgNDE2elwiLz48L3N2Zz5cblxuICAgIDwvc3Bhbj5cbiAgICAgYDtcbiAgICBhbGxUYXNrc0FyZWEuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd05ld1RvRG8oKSB7XG4gICAgY29uc3QgbmV3VGFzayA9IHRhc2sudG9Eb0NvbGxlY3Rpb25bdGFzay50b0RvQ29sbGVjdGlvbi5sZW5ndGggLSAxXTtcbiAgICBjcmVhdGVUYXNrRWxlbWVudChuZXdUYXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dUb0RvTW9kdWxlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tbW9kdWxlXCIpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLW1vZHVsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b0RvTW9kdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvRG9Nb2R1bGUuY2xhc3NOYW1lID0gXCJ0by1kby1tb2R1bGVcIjtcbiAgICAgIHRvRG9Nb2R1bGUuaW5uZXJIVE1MID0gYFxuICAgICAgPGgyPkFkZCBhIG5ldyB0YXNrPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJuZXdUYXNrRm9ybVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3Tm90ZVRpdGxlLWFyZWFcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZSA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5ld05vdGVEZXNjcmlwdGlvbi1hcmVhXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI2XCIgY29scz1cIjMzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWFkbGluZS1hcmVhXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZWFkbGluZS1kYXRlXCI+RGVhZGxpbmU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRlYWRsaW5lLWRhdGVcIiBuYW1lPVwiZGVhZGxpbmUtZGF0ZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5LWFyZWFcIj5cbiAgICAgICAgPHA+UHJpb3JpdHk6PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImxvdy1wcmlvcml0eVwiPkxPVzwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJtZWRpdW0tcHJpb3JpdHlcIj5NRURJVU08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwiaGlnaC1wcmlvcml0eVwiPkhJR0g8L3A+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0bi1hcmVhXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLW1vZHVsZS1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJhZGQtbW9kdWxlLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvRG9Nb2R1bGUpO1xuICAgICAgaW5pdE1vZHVsZUJ0bigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRNb2R1bGVCdG4oKSB7XG4gICAgY29uc3QgYWRkTmV3VG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLW1vZHVsZS1idXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VNb2R1bGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW1vZHVsZS1idXR0b25cIik7XG5cbiAgICBhZGROZXdUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkTmV3VG9EbygpO1xuICAgICAgY2xvc2VNb2R1bGUoKTtcbiAgICB9KTtcblxuICAgIGNsb3NlTW9kdWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbG9zZU1vZHVsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2R1bGUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50by1kby1tb2R1bGVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5ld1RvRG8oKSB7XG4gICAgY29uc3QgbmV3Tm90ZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdOb3RlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld05vdGVEZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVhZGxpbmUtZGF0ZVwiKS52YWx1ZTtcblxuICAgIHRhc2suYWRkVG9Db2xsZWN0aW9uKG5ld05vdGVUaXRsZSwgbmV3Tm90ZURlc2NyaXB0aW9uLCBuZXdOb3RlRGVhZGxpbmUpO1xuICAgIHNob3dOZXdUb0RvKCk7XG4gICAgLy8gY3JlYXRlVGFza0VsZW1lbnQodGFzay5hZGRUb0NvbGxlY3Rpb25bLTFdKTtcbiAgICAvLyBjb25zb2xlLmxvZygpO1xuICB9XG5cbiAgcmV0dXJuIHsgYWRkTWFpbkxheW91dCB9O1xufSkoKTtcblxuZXhwb3J0IHsgVUkgfTtcbiIsImltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcblxuY29uc3QgdGFzayA9ICgoKSA9PiB7XG4gIGxldCB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsVGFza3NcIikpO1xuICBsZXQgdG9Eb0NvbGxlY3Rpb24gPSBbXTtcblxuICBpZiAodGFza3NGcm9tTG9jYWxTdG9yYWdlKSB7XG4gICAgdG9Eb0NvbGxlY3Rpb24gPSB0YXNrc0Zyb21Mb2NhbFN0b3JhZ2U7XG4gIH1cblxuICBjb25zdCBuZXdUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkgPT4gKHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGlkOiBuYW5vaWQoKSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkVG9Db2xsZWN0aW9uKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIGNvbnN0IG5ld1RvRG8gPSBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XG4gICAgdG9Eb0NvbGxlY3Rpb24ucHVzaChuZXdUb0RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9Db2xsZWN0aW9uKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0b0RvQ29sbGVjdGlvbik7XG4gIH1cbiAgcmV0dXJuIHsgYWRkVG9Db2xsZWN0aW9uLCB0b0RvQ29sbGVjdGlvbiB9O1xufSkoKTtcblxuZXhwb3J0IHsgdGFzayB9O1xuIiwiZXhwb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmV4cG9ydCBsZXQgcmFuZG9tID0gYnl0ZXMgPT4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShieXRlcykpXG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaiA9IHN0ZXBcbiAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbal0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+XG4gIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpLnJlZHVjZSgoaWQsIGJ5dGUpID0+IHtcbiAgICBieXRlICY9IDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgaWQgKz0gKGJ5dGUgLSAyNikudG9TdHJpbmcoMzYpLnRvVXBwZXJDYXNlKClcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPiA2Mikge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH1cbiAgICByZXR1cm4gaWRcbiAgfSwgJycpXG4iLCJleHBvcnQgY29uc3QgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==