/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \r\n    Author: Todd McLeod\r\n    Github: https://github.com/GoesToEleven\r\n*/\nhtml,\nbody,\ndiv,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nbutton,\np,\nblockquote,\npre,\na,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nb,\nu,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\nfigure,\nfigcaption,\nfooter,\nheader,\nnav,\noutput,\nsection,\ntime,\nmark,\naudio,\nvideo,\ninput,\ntextarea,\nselect {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  /* inherits the browser's font properties: font-size 16px */\n  font: inherit;\n  /*  specifies the vertical alignment of an inline element */\n  vertical-align: baseline;\n  box-sizing: border-box;\n  /*  specifies the height of line boxes within the element. */\n  line-height: 1;\n  border-radius: 0;\n  /* no outline around anything */\n  outline: none;\n  /* inherit the color value of the parent */\n  color: inherit; }\n\nol,\nul {\n  /* no bullets in lists */\n  list-style: none; }\n\na {\n  /* no underline */\n  text-decoration: none; }\n\nbutton {\n  cursor: pointer;\n  background-color: transparent; }\n\nblockquote,\nq {\n  /* no quotes */\n  quotes: none; }\n\ntable {\n  /* no spacing between cells*/\n  border-spacing: 0;\n  /*borders are collapsed - adjacent table cells share borders */\n  border-collapse: collapse; }\n\ninput,\nselect,\nprogress {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\nsvg {\n  width: 1.9em;\n  height: 1.9em;\n  fill: currentColor; }\n\n:root {\n  --background-color: #8bd3dd;\n  --header-background: #0045ff;\n  --list-background: #fff;\n  --disappear-duration: 0.75s; }\n\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  background-color: var(--background-color); }\n\ninput[type=\"text\"] {\n  appearance: textfield;\n  border: 1px solid black; }\n\n.header {\n  --font-color: white;\n  display: flex;\n  justify-content: center;\n  background-color: var(--header-background);\n  color: var(--font-color);\n  padding: 2rem; }\n  .header__title {\n    font-size: 5rem;\n    font-weight: bold; }\n\n.main__input {\n  margin-top: 5rem;\n  display: flex;\n  justify-content: center;\n  font-size: 2rem; }\n  .main__input #input {\n    padding: 0.5rem 1rem;\n    width: 40%;\n    background-color: transparent;\n    transition-property: background-color;\n    transition-duration: 0.5s;\n    transition-timing-function: linear; }\n    .main__input #input:hover, .main__input #input:focus {\n      background-color: white; }\n  .main__input #btn--add {\n    height: 4rem;\n    margin-left: 2rem;\n    padding: 0.25rem 4rem;\n    border: 0.25rem solid black;\n    border-radius: 0.75rem;\n    background: linear-gradient(#3da9fc 0 0) left/var(--d, 0%) 100% no-repeat;\n    transition: 0.5s; }\n    .main__input #btn--add:hover {\n      --d: 100%;\n      color: #fff; }\n\n.main__list {\n  display: flex;\n  justify-content: center;\n  margin-top: 6rem; }\n  .main__list #list {\n    font-size: 2rem;\n    display: inline-block;\n    width: 50vw;\n    min-height: 20rem;\n    background-color: transparent;\n    border: 0.5rem solid blue;\n    border-radius: 1rem;\n    padding: 1rem 0;\n    transition-property: all;\n    transition-duration: var(--disappear-duration);\n    transition-timing-function: ease; }\n\n.main__item {\n  --border-color: #a4581b;\n  min-height: 3rem;\n  border: 0.1rem solid var(--border-color);\n  margin: 1rem;\n  padding: 0.5rem 3rem 0.5rem 0.5rem;\n  position: relative;\n  word-break: break-word; }\n  .main__item:hover {\n    background-color: var(--list-background); }\n  .main__item:hover > .main__item-btn {\n    appearance: checkbox; }\n  .main__item-btn {\n    --border-color: #000;\n    position: absolute;\n    right: 1rem;\n    top: 0.75rem;\n    border: 0.25rem solid var(--border-color);\n    width: 1.5rem;\n    height: 1.5rem;\n    appearance: none; }\n\n.disappear {\n  animation-name: flyout;\n  animation-duration: var(--disappear-duration);\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: 1; }\n\n@keyframes flyout {\n  from {\n    opacity: 100%;\n    right: 0; }\n  to {\n    right: 100%;\n    opacity: 0; } }\n", "",{"version":3,"sources":["webpack://./src/styles/reset-css.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"AAAA;;;CCGC;ADED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAsEC,SAAS;EACT,UAAU;EACV,SAAS;EACT,2DAAA;EACA,aAAa;EACb,2DAAA;EACA,wBAAwB;EAExB,sBAAsB;EAEtB,4DAAA;EACA,cAAc;EAEd,gBAAgB;EAEhB,+BAAA;EACA,aAAa;EAEb,0CAAA;EACA,cAAc,EAAA;;AAGf;;EAEC,wBAAA;EACA,gBAAgB,EAAA;;AAGjB;EACC,iBAAA;EACA,qBAAqB,EAAA;;AAGtB;EACC,eAAe;EACf,6BAA6B,EAAA;;AAG9B;;EAEC,cAAA;EACA,YAAY,EAAA;;AAGb;EACC,4BAAA;EACA,iBAAiB;EACjB,8DAAA;EACA,yBAAyB,EAAA;;AAG1B;;;EAGC,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB,EAAA;;AAGjB;EACC,YAAY;EACZ,aAAa;EACb,kBAAkB,EAAA;;ACvInB;EACC,2BAAmB;EACnB,4BAAoB;EACpB,uBAAkB;EAClB,2BAAqB,EAAA;;AAItB;EACC,gBAAgB,EAAA;;AAGjB;EACC,yCAAyC,EAAA;;AAG1C;EACC,qBAAqB;EACrB,uBAAuB,EAAA;;AAIxB;EACC,mBAAa;EACb,aAAa;EACb,uBAAuB;EACvB,0CAA0C;EAC1C,wBAAwB;EACxB,aAAa,EAAA;EACb;IACC,eAAe;IACf,iBAAiB,EAAA;;AAalB;EACC,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,eAAe,EAAA;EAJf;IAOC,oBAAoB;IACpB,UAAU;IAhBZ,6BAA6B;IAC7B,qCAAqC;IACrC,yBAHoC;IAIpC,kCAAkC,EAAA;IAKjC;MAcE,uBAAuB,EAAA;EAdzB;IAmBC,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;IACrB,2BAA2B;IAC3B,sBAAsB;IACtB,yEACU;IACV,gBAAgB,EAAA;IA1BjB;MA4BE,SAAI;MACJ,WAAW,EAAA;;AAKd;EACC,aAAa;EACb,uBAAuB;EACvB,gBAAgB,EAAA;EAHhB;IAMC,eAAe;IACf,qBAAqB;IACrB,WAAW;IACX,iBAAiB;IACjB,6BAA6B;IAC7B,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IAEf,wBAAwB;IACxB,8CAA8C;IAC9C,gCAAgC,EAAA;;AAIlC;EACC,uBAAe;EACf,gBAAgB;EAChB,wCAAwC;EACxC,YAAY;EACZ,kCAAkC;EAClC,kBAAkB;EAClB,sBAAsB,EAAA;EAPtB;IAUC,wCAAwC,EAAA;EAVzC;IAcC,oBAAoB,EAAA;EAGrB;IACC,oBAAe;IACf,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,aAAa;IACb,cAAc;IACd,gBAAgB,EAAA;;AAKnB;EACC,sBAAsB;EACtB,6CAA6C;EAC7C,sCAAsC;EACtC,4BAA4B,EAAA;;AAG7B;EACC;IACC,aAAa;IACb,QAAQ,EAAA;EAET;IACC,WAAW;IACX,UAAU,EAAA,EAAA","sourcesContent":["/* \r\n    Author: Todd McLeod\r\n    Github: https://github.com/GoesToEleven\r\n*/\r\n\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nbutton,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\naddress,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrong,\r\nsub,\r\nsup,\r\nb,\r\nu,\r\ni,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nnav,\r\noutput,\r\nsection,\r\ntime,\r\nmark,\r\naudio,\r\nvideo,\r\ninput,\r\ntextarea,\r\nselect {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\t/* inherits the browser's font properties: font-size 16px */\r\n\tfont: inherit;\r\n\t/*  specifies the vertical alignment of an inline element */\r\n\tvertical-align: baseline;\r\n\r\n\tbox-sizing: border-box;\r\n\r\n\t/*  specifies the height of line boxes within the element. */\r\n\tline-height: 1;\r\n\r\n\tborder-radius: 0;\r\n\r\n\t/* no outline around anything */\r\n\toutline: none;\r\n\r\n\t/* inherit the color value of the parent */\r\n\tcolor: inherit;\r\n}\r\n\r\nol,\r\nul {\r\n\t/* no bullets in lists */\r\n\tlist-style: none;\r\n}\r\n\r\na {\r\n\t/* no underline */\r\n\ttext-decoration: none;\r\n}\r\n\r\nbutton {\r\n\tcursor: pointer;\r\n\tbackground-color: transparent;\r\n}\r\n\r\nblockquote,\r\nq {\r\n\t/* no quotes */\r\n\tquotes: none;\r\n}\r\n\r\ntable {\r\n\t/* no spacing between cells*/\r\n\tborder-spacing: 0;\r\n\t/*borders are collapsed - adjacent table cells share borders */\r\n\tborder-collapse: collapse;\r\n}\r\n\r\ninput,\r\nselect,\r\nprogress {\r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\tappearance: none;\r\n}\r\n\r\nsvg {\r\n\twidth: 1.9em;\r\n\theight: 1.9em;\r\n\tfill: currentColor;\r\n}\r\n","@import \"./reset-css.scss\";\n\n:root {\n\t--background-color: #8bd3dd;\n\t--header-background: #0045ff;\n\t--list-background: #fff;\n\t--disappear-duration: 0.75s;\n}\n\n// Initialize\nhtml {\n\tfont-size: 62.5%;\n}\n\nbody {\n\tbackground-color: var(--background-color);\n}\n\ninput[type=\"text\"] {\n\tappearance: textfield;\n\tborder: 1px solid black;\n}\n\n// Header section\n.header {\n\t--font-color: white;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbackground-color: var(--header-background);\n\tcolor: var(--font-color);\n\tpadding: 2rem;\n\t&__title {\n\t\tfont-size: 5rem;\n\t\tfont-weight: bold;\n\t}\n}\n\n@mixin transBackground($transDu: 0.5s) {\n\tbackground-color: transparent;\n\ttransition-property: background-color;\n\ttransition-duration: $transDu;\n\ttransition-timing-function: linear;\n}\n\n// List section\n.main {\n\t&__input {\n\t\tmargin-top: 5rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tfont-size: 2rem;\n\n\t\t#input {\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\twidth: 40%;\n\n\t\t\t@include transBackground();\n\n\t\t\t&:hover,\n\t\t\t&:focus {\n\t\t\t\tbackground-color: white;\n\t\t\t}\n\t\t}\n\n\t\t#btn--add {\n\t\t\theight: 4rem;\n\t\t\tmargin-left: 2rem;\n\t\t\tpadding: 0.25rem 4rem;\n\t\t\tborder: 0.25rem solid black;\n\t\t\tborder-radius: 0.75rem;\n\t\t\tbackground: linear-gradient(#3da9fc 0 0) left/var(--d, 0%) 100%\n\t\t\t\tno-repeat;\n\t\t\ttransition: 0.5s;\n\t\t\t&:hover {\n\t\t\t\t--d: 100%;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__list {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tmargin-top: 6rem;\n\n\t\t#list {\n\t\t\tfont-size: 2rem;\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 50vw;\n\t\t\tmin-height: 20rem;\n\t\t\tbackground-color: transparent;\n\t\t\tborder: 0.5rem solid blue;\n\t\t\tborder-radius: 1rem;\n\t\t\tpadding: 1rem 0;\n\n\t\t\ttransition-property: all;\n\t\t\ttransition-duration: var(--disappear-duration);\n\t\t\ttransition-timing-function: ease;\n\t\t}\n\t}\n\n\t&__item {\n\t\t--border-color: #a4581b;\n\t\tmin-height: 3rem;\n\t\tborder: 0.1rem solid var(--border-color);\n\t\tmargin: 1rem;\n\t\tpadding: 0.5rem 3rem 0.5rem 0.5rem;\n\t\tposition: relative;\n\t\tword-break: break-word;\n\n\t\t&:hover {\n\t\t\tbackground-color: var(--list-background);\n\t\t}\n\n\t\t&:hover > &-btn {\n\t\t\tappearance: checkbox;\n\t\t}\n\n\t\t&-btn {\n\t\t\t--border-color: #000;\n\t\t\tposition: absolute;\n\t\t\tright: 1rem;\n\t\t\ttop: 0.75rem;\n\t\t\tborder: 0.25rem solid var(--border-color);\n\t\t\twidth: 1.5rem;\n\t\t\theight: 1.5rem;\n\t\t\tappearance: none;\n\t\t}\n\t}\n}\n\n.disappear {\n\tanimation-name: flyout;\n\tanimation-duration: var(--disappear-duration);\n\tanimation-timing-function: ease-in-out;\n\tanimation-iteration-count: 1;\n}\n\n@keyframes flyout {\n\tfrom {\n\t\topacity: 100%;\n\t\tright: 0;\n\t}\n\tto {\n\t\tright: 100%;\n\t\topacity: 0;\n\t}\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scripts/Item.js":
/*!*****************************!*\
  !*** ./src/scripts/Item.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
class Item {
	constructor(id, content) {
		this.id = id;
		this.content = content;
	}

	static render(item) {
		let li = document.createElement("li");
		li.innerHTML = `${item.content} <input type="checkbox" class="main__item-btn"></input>`;
		li.classList.add("main__item");
		li.dataset.no = item.id;

		return li;
	}
}


/***/ }),

/***/ "./src/scripts/List.js":
/*!*****************************!*\
  !*** ./src/scripts/List.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/scripts/Item.js");


class List {
	static listElement = document.getElementById("list");

	static clearList() {
		List.listElement.innerHTML = "";
	}

	constructor(type) {
		this.type = type;

		// If there is a record of this type in local storage
		if (localStorage.getItem(type)) {
			this.items = JSON.parse(localStorage.getItem(type));
			this.render();
			return;
		}

		this.items = [];
	}

	addToList(itemContent) {
		this.items.push(new _Item__WEBPACK_IMPORTED_MODULE_0__.Item(this.items.length, itemContent));
	}

	removeItem(no = -1) {
		this.items.splice(
			this.items.findIndex((item) => item.id === no),
			1
		);
		this.save();
	}

	renderTopEl() {
		List.listElement.append(_Item__WEBPACK_IMPORTED_MODULE_0__.Item.render(this.items[this.items.length - 1]));
	}

	render() {
		this.items.forEach((item) => {
			List.listElement.append(_Item__WEBPACK_IMPORTED_MODULE_0__.Item.render(item));
		});
	}

	save() {
		localStorage.setItem(this.type, JSON.stringify(this.items));
	}
}


/***/ }),

/***/ "./src/scripts/Page.js":
/*!*****************************!*\
  !*** ./src/scripts/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/scripts/List.js");


class App {
	constructor() {
		this.addBtn = document.getElementById("btn--add");
		this.input = document.getElementById("input");
		this.list = new _List__WEBPACK_IMPORTED_MODULE_0__.List("todo-list");
	}

	clearInput() {
		this.input.value = "";
	}

	isValidInput() {
		return this.input.value.trim() !== "";
	}

	addToList() {
		this.list.addToList(this.input.value.trim());
		this.clearInput();
		this.list.renderTopEl();
		this.list.save();
	}

	active() {
		this.input.addEventListener("keydown", (e) => {
			if (e.key === "Enter" && this.isValidInput()) {
				this.addToList();
			}
		});

		this.addBtn.addEventListener("click", (e) => {
			if (this.isValidInput()) {
				this.addToList();
			}
		});

		_List__WEBPACK_IMPORTED_MODULE_0__.List.listElement.addEventListener("click", (e) => {
			if (e.target.classList.contains("main__item-btn")) {
				let li = e.target.closest("li");
				this.list.removeItem(Number(li.dataset.no));
				li.classList.add("disappear");
				setTimeout(() => li.remove(), 750);
			}
		});
	}
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ "./src/scripts/Page.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");



let app = new _Page__WEBPACK_IMPORTED_MODULE_0__.App();
app.active();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/ZTVkOCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NjcmlwdHMvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2NyaXB0cy9MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJB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QTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDhDQUFXO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsOENBQVc7QUFDdEMsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0M4Qjs7QUFFdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUNBQUk7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEVBQUUsb0VBQWlDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7O1VDOUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0M7O0FBRTlCLGNBQWMsc0NBQUc7QUFDakIiLCJmaWxlIjoibWFpbi0xM2NmZTFkOGI2ODkzYWFmODUwYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogXFxyXFxuICAgIEF1dGhvcjogVG9kZCBNY0xlb2RcXHJcXG4gICAgR2l0aHViOiBodHRwczovL2dpdGh1Yi5jb20vR29lc1RvRWxldmVuXFxyXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuYnV0dG9uLFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFkZHJlc3MsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxuYixcXG51LFxcbmksXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbm5hdixcXG5vdXRwdXQsXFxuc2VjdGlvbixcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8sXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICAvKiBpbmhlcml0cyB0aGUgYnJvd3NlcidzIGZvbnQgcHJvcGVydGllczogZm9udC1zaXplIDE2cHggKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAgc3BlY2lmaWVzIHRoZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYW4gaW5saW5lIGVsZW1lbnQgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAgc3BlY2lmaWVzIHRoZSBoZWlnaHQgb2YgbGluZSBib3hlcyB3aXRoaW4gdGhlIGVsZW1lbnQuICovXFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAvKiBubyBvdXRsaW5lIGFyb3VuZCBhbnl0aGluZyAqL1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC8qIGluaGVyaXQgdGhlIGNvbG9yIHZhbHVlIG9mIHRoZSBwYXJlbnQgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyB9XFxuXFxub2wsXFxudWwge1xcbiAgLyogbm8gYnVsbGV0cyBpbiBsaXN0cyAqL1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmEge1xcbiAgLyogbm8gdW5kZXJsaW5lICovXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgLyogbm8gcXVvdGVzICovXFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICAvKiBubyBzcGFjaW5nIGJldHdlZW4gY2VsbHMqL1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuICAvKmJvcmRlcnMgYXJlIGNvbGxhcHNlZCAtIGFkamFjZW50IHRhYmxlIGNlbGxzIHNoYXJlIGJvcmRlcnMgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxucHJvZ3Jlc3Mge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbnN2ZyB7XFxuICB3aWR0aDogMS45ZW07XFxuICBoZWlnaHQ6IDEuOWVtO1xcbiAgZmlsbDogY3VycmVudENvbG9yOyB9XFxuXFxuOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkO1xcbiAgLS1oZWFkZXItYmFja2dyb3VuZDogIzAwNDVmZjtcXG4gIC0tbGlzdC1iYWNrZ3JvdW5kOiAjZmZmO1xcbiAgLS1kaXNhcHBlYXItZHVyYXRpb246IDAuNzVzOyB9XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTsgfVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgfVxcblxcbi5oZWFkZXIge1xcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDJyZW07IH1cXG4gIC5oZWFkZXJfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tYWluX19pbnB1dCB7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtOyB9XFxuICAubWFpbl9faW5wdXQgI2lucHV0IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOyB9XFxuICAgIC5tYWluX19pbnB1dCAjaW5wdXQ6aG92ZXIsIC5tYWluX19pbnB1dCAjaW5wdXQ6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XFxuICAubWFpbl9faW5wdXQgI2J0bi0tYWRkIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSA0cmVtO1xcbiAgICBib3JkZXI6IDAuMjVyZW0gc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjM2RhOWZjIDAgMCkgbGVmdC92YXIoLS1kLCAwJSkgMTAwJSBuby1yZXBlYXQ7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgLm1haW5fX2lucHV0ICNidG4tLWFkZDpob3ZlciB7XFxuICAgICAgLS1kOiAxMDAlO1xcbiAgICAgIGNvbG9yOiAjZmZmOyB9XFxuXFxuLm1haW5fX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNnJlbTsgfVxcbiAgLm1haW5fX2xpc3QgI2xpc3Qge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwLjVyZW0gc29saWQgYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLWRpc2FwcGVhci1kdXJhdGlvbik7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlOyB9XFxuXFxuLm1haW5fX2l0ZW0ge1xcbiAgLS1ib3JkZXItY29sb3I6ICNhNDU4MWI7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtIDAuNXJlbSAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyB9XFxuICAubWFpbl9faXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpc3QtYmFja2dyb3VuZCk7IH1cXG4gIC5tYWluX19pdGVtOmhvdmVyID4gLm1haW5fX2l0ZW0tYnRuIHtcXG4gICAgYXBwZWFyYW5jZTogY2hlY2tib3g7IH1cXG4gIC5tYWluX19pdGVtLWJ0biB7XFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjMDAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICB0b3A6IDAuNzVyZW07XFxuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi5kaXNhcHBlYXIge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZseW91dDtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZGlzYXBwZWFyLWR1cmF0aW9uKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsgfVxcblxcbkBrZXlmcmFtZXMgZmx5b3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICByaWdodDogMDsgfVxcbiAgdG8ge1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMDsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC1jc3Muc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0NHQztBREVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBc0VDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULDJEQUFBO0VBQ0EsYUFBYTtFQUNiLDJEQUFBO0VBQ0Esd0JBQXdCO0VBRXhCLHNCQUFzQjtFQUV0Qiw0REFBQTtFQUNBLGNBQWM7RUFFZCxnQkFBZ0I7RUFFaEIsK0JBQUE7RUFDQSxhQUFhO0VBRWIsMENBQUE7RUFDQSxjQUFjLEVBQUE7O0FBR2Y7O0VBRUMsd0JBQUE7RUFDQSxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxpQkFBQTtFQUNBLHFCQUFxQixFQUFBOztBQUd0QjtFQUNDLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTs7QUFHOUI7O0VBRUMsY0FBQTtFQUNBLFlBQVksRUFBQTs7QUFHYjtFQUNDLDRCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLDhEQUFBO0VBQ0EseUJBQXlCLEVBQUE7O0FBRzFCOzs7RUFHQyx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FDdkluQjtFQUNDLDJCQUFtQjtFQUNuQiw0QkFBb0I7RUFDcEIsdUJBQWtCO0VBQ2xCLDJCQUFxQixFQUFBOztBQUl0QjtFQUNDLGdCQUFnQixFQUFBOztBQUdqQjtFQUNDLHlDQUF5QyxFQUFBOztBQUcxQztFQUNDLHFCQUFxQjtFQUNyQix1QkFBdUIsRUFBQTs7QUFJeEI7RUFDQyxtQkFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLHdCQUF3QjtFQUN4QixhQUFhLEVBQUE7RUFDYjtJQUNDLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUFhbEI7RUFDQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7RUFKZjtJQU9DLG9CQUFvQjtJQUNwQixVQUFVO0lBaEJaLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMseUJBSG9DO0lBSXBDLGtDQUFrQyxFQUFBO0lBS2pDO01BY0UsdUJBQXVCLEVBQUE7RUFkekI7SUFtQkMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qix5RUFDVTtJQUNWLGdCQUFnQixFQUFBO0lBMUJqQjtNQTRCRSxTQUFJO01BQ0osV0FBVyxFQUFBOztBQUtkO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTtFQUhoQjtJQU1DLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0lBRWYsd0JBQXdCO0lBQ3hCLDhDQUE4QztJQUM5QyxnQ0FBZ0MsRUFBQTs7QUFJbEM7RUFDQyx1QkFBZTtFQUNmLGdCQUFnQjtFQUNoQix3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUE7RUFQdEI7SUFVQyx3Q0FBd0MsRUFBQTtFQVZ6QztJQWNDLG9CQUFvQixFQUFBO0VBR3JCO0lBQ0Msb0JBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFLbkI7RUFDQyxzQkFBc0I7RUFDdEIsNkNBQTZDO0VBQzdDLHNDQUFzQztFQUN0Qyw0QkFBNEIsRUFBQTs7QUFHN0I7RUFDQztJQUNDLGFBQWE7SUFDYixRQUFRLEVBQUE7RUFFVDtJQUNDLFdBQVc7SUFDWCxVQUFVLEVBQUEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBcXHJcXG4gICAgQXV0aG9yOiBUb2RkIE1jTGVvZFxcclxcbiAgICBHaXRodWI6IGh0dHBzOi8vZ2l0aHViLmNvbS9Hb2VzVG9FbGV2ZW5cXHJcXG4qL1xcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSxcXHJcXG5kaXYsXFxyXFxuc3BhbixcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5idXR0b24sXFxyXFxucCxcXHJcXG5ibG9ja3F1b3RlLFxcclxcbnByZSxcXHJcXG5hLFxcclxcbmFiYnIsXFxyXFxuYWRkcmVzcyxcXHJcXG5jaXRlLFxcclxcbmNvZGUsXFxyXFxuZGVsLFxcclxcbmRmbixcXHJcXG5lbSxcXHJcXG5pbWcsXFxyXFxuaW5zLFxcclxcbmtiZCxcXHJcXG5xLFxcclxcbnMsXFxyXFxuc2FtcCxcXHJcXG5zbWFsbCxcXHJcXG5zdHJvbmcsXFxyXFxuc3ViLFxcclxcbnN1cCxcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5kbCxcXHJcXG5kdCxcXHJcXG5kZCxcXHJcXG5vbCxcXHJcXG51bCxcXHJcXG5saSxcXHJcXG5maWVsZHNldCxcXHJcXG5mb3JtLFxcclxcbmxhYmVsLFxcclxcbmxlZ2VuZCxcXHJcXG50YWJsZSxcXHJcXG5jYXB0aW9uLFxcclxcbnRib2R5LFxcclxcbnRmb290LFxcclxcbnRoZWFkLFxcclxcbnRyLFxcclxcbnRoLFxcclxcbnRkLFxcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuY2FudmFzLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5zZWN0aW9uLFxcclxcbnRpbWUsXFxyXFxubWFyayxcXHJcXG5hdWRpbyxcXHJcXG52aWRlbyxcXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHQvKiBpbmhlcml0cyB0aGUgYnJvd3NlcidzIGZvbnQgcHJvcGVydGllczogZm9udC1zaXplIDE2cHggKi9cXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdC8qICBzcGVjaWZpZXMgdGhlIHZlcnRpY2FsIGFsaWdubWVudCBvZiBhbiBpbmxpbmUgZWxlbWVudCAqL1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG5cXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcblxcdC8qICBzcGVjaWZpZXMgdGhlIGhlaWdodCBvZiBsaW5lIGJveGVzIHdpdGhpbiB0aGUgZWxlbWVudC4gKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwO1xcclxcblxcclxcblxcdC8qIG5vIG91dGxpbmUgYXJvdW5kIGFueXRoaW5nICovXFxyXFxuXFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHJcXG5cXHQvKiBpbmhlcml0IHRoZSBjb2xvciB2YWx1ZSBvZiB0aGUgcGFyZW50ICovXFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsIHtcXHJcXG5cXHQvKiBubyBidWxsZXRzIGluIGxpc3RzICovXFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuXFx0Lyogbm8gdW5kZXJsaW5lICovXFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5xIHtcXHJcXG5cXHQvKiBubyBxdW90ZXMgKi9cXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIHtcXHJcXG5cXHQvKiBubyBzcGFjaW5nIGJldHdlZW4gY2VsbHMqL1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcblxcdC8qYm9yZGVycyBhcmUgY29sbGFwc2VkIC0gYWRqYWNlbnQgdGFibGUgY2VsbHMgc2hhcmUgYm9yZGVycyAqL1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnNlbGVjdCxcXHJcXG5wcm9ncmVzcyB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcblxcdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zdmcge1xcclxcblxcdHdpZHRoOiAxLjllbTtcXHJcXG5cXHRoZWlnaHQ6IDEuOWVtO1xcclxcblxcdGZpbGw6IGN1cnJlbnRDb2xvcjtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuL3Jlc2V0LWNzcy5zY3NzXFxcIjtcXG5cXG46cm9vdCB7XFxuXFx0LS1iYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2RkO1xcblxcdC0taGVhZGVyLWJhY2tncm91bmQ6ICMwMDQ1ZmY7XFxuXFx0LS1saXN0LWJhY2tncm91bmQ6ICNmZmY7XFxuXFx0LS1kaXNhcHBlYXItZHVyYXRpb246IDAuNzVzO1xcbn1cXG5cXG4vLyBJbml0aWFsaXplXFxuaHRtbCB7XFxuXFx0Zm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0YXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4vLyBIZWFkZXIgc2VjdGlvblxcbi5oZWFkZXIge1xcblxcdC0tZm9udC1jb2xvcjogd2hpdGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZCk7XFxuXFx0Y29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcblxcdHBhZGRpbmc6IDJyZW07XFxuXFx0Jl9fdGl0bGUge1xcblxcdFxcdGZvbnQtc2l6ZTogNXJlbTtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxufVxcblxcbkBtaXhpbiB0cmFuc0JhY2tncm91bmQoJHRyYW5zRHU6IDAuNXMpIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xcblxcdHRyYW5zaXRpb24tZHVyYXRpb246ICR0cmFuc0R1O1xcblxcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxufVxcblxcbi8vIExpc3Qgc2VjdGlvblxcbi5tYWluIHtcXG5cXHQmX19pbnB1dCB7XFxuXFx0XFx0bWFyZ2luLXRvcDogNXJlbTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXG5cXHRcXHQjaW5wdXQge1xcblxcdFxcdFxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcdFxcdFxcdHdpZHRoOiA0MCU7XFxuXFxuXFx0XFx0XFx0QGluY2x1ZGUgdHJhbnNCYWNrZ3JvdW5kKCk7XFxuXFxuXFx0XFx0XFx0Jjpob3ZlcixcXG5cXHRcXHRcXHQmOmZvY3VzIHtcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdCNidG4tLWFkZCB7XFxuXFx0XFx0XFx0aGVpZ2h0OiA0cmVtO1xcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAycmVtO1xcblxcdFxcdFxcdHBhZGRpbmc6IDAuMjVyZW0gNHJlbTtcXG5cXHRcXHRcXHRib3JkZXI6IDAuMjVyZW0gc29saWQgYmxhY2s7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzNkYTlmYyAwIDApIGxlZnQvdmFyKC0tZCwgMCUpIDEwMCVcXG5cXHRcXHRcXHRcXHRuby1yZXBlYXQ7XFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogMC41cztcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXG5cXHRcXHRcXHRcXHQtLWQ6IDEwMCU7XFxuXFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jl9fbGlzdCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRtYXJnaW4tdG9wOiA2cmVtO1xcblxcblxcdFxcdCNsaXN0IHtcXG5cXHRcXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0XFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdFxcdFxcdHdpZHRoOiA1MHZ3O1xcblxcdFxcdFxcdG1pbi1oZWlnaHQ6IDIwcmVtO1xcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdFxcdFxcdGJvcmRlcjogMC41cmVtIHNvbGlkIGJsdWU7XFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMXJlbTtcXG5cXHRcXHRcXHRwYWRkaW5nOiAxcmVtIDA7XFxuXFxuXFx0XFx0XFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcblxcdFxcdFxcdHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLWRpc2FwcGVhci1kdXJhdGlvbik7XFxuXFx0XFx0XFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmX19pdGVtIHtcXG5cXHRcXHQtLWJvcmRlci1jb2xvcjogI2E0NTgxYjtcXG5cXHRcXHRtaW4taGVpZ2h0OiAzcmVtO1xcblxcdFxcdGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0XFx0bWFyZ2luOiAxcmVtO1xcblxcdFxcdHBhZGRpbmc6IDAuNXJlbSAzcmVtIDAuNXJlbSAwLjVyZW07XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuXFxuXFx0XFx0Jjpob3ZlciB7XFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlzdC1iYWNrZ3JvdW5kKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jjpob3ZlciA+ICYtYnRuIHtcXG5cXHRcXHRcXHRhcHBlYXJhbmNlOiBjaGVja2JveDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Ji1idG4ge1xcblxcdFxcdFxcdC0tYm9yZGVyLWNvbG9yOiAjMDAwO1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRcXHRyaWdodDogMXJlbTtcXG5cXHRcXHRcXHR0b3A6IDAuNzVyZW07XFxuXFx0XFx0XFx0Ym9yZGVyOiAwLjI1cmVtIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0XFx0XFx0d2lkdGg6IDEuNXJlbTtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRcXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblxcbi5kaXNhcHBlYXIge1xcblxcdGFuaW1hdGlvbi1uYW1lOiBmbHlvdXQ7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1kaXNhcHBlYXItZHVyYXRpb24pO1xcblxcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcblxcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcblxcbkBrZXlmcmFtZXMgZmx5b3V0IHtcXG5cXHRmcm9tIHtcXG5cXHRcXHRvcGFjaXR5OiAxMDAlO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdH1cXG5cXHR0byB7XFxuXFx0XFx0cmlnaHQ6IDEwMCU7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBjbGFzcyBJdGVtIHtcclxuXHRjb25zdHJ1Y3RvcihpZCwgY29udGVudCkge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW5kZXIoaXRlbSkge1xyXG5cdFx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cdFx0bGkuaW5uZXJIVE1MID0gYCR7aXRlbS5jb250ZW50fSA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJtYWluX19pdGVtLWJ0blwiPjwvaW5wdXQ+YDtcclxuXHRcdGxpLmNsYXNzTGlzdC5hZGQoXCJtYWluX19pdGVtXCIpO1xyXG5cdFx0bGkuZGF0YXNldC5ubyA9IGl0ZW0uaWQ7XHJcblxyXG5cdFx0cmV0dXJuIGxpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vSXRlbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3Qge1xyXG5cdHN0YXRpYyBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcclxuXHJcblx0c3RhdGljIGNsZWFyTGlzdCgpIHtcclxuXHRcdExpc3QubGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG5cdFx0Ly8gSWYgdGhlcmUgaXMgYSByZWNvcmQgb2YgdGhpcyB0eXBlIGluIGxvY2FsIHN0b3JhZ2VcclxuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSkge1xyXG5cdFx0XHR0aGlzLml0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0eXBlKSk7XHJcblx0XHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLml0ZW1zID0gW107XHJcblx0fVxyXG5cclxuXHRhZGRUb0xpc3QoaXRlbUNvbnRlbnQpIHtcclxuXHRcdHRoaXMuaXRlbXMucHVzaChuZXcgSXRlbSh0aGlzLml0ZW1zLmxlbmd0aCwgaXRlbUNvbnRlbnQpKTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUl0ZW0obm8gPSAtMSkge1xyXG5cdFx0dGhpcy5pdGVtcy5zcGxpY2UoXHJcblx0XHRcdHRoaXMuaXRlbXMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09PSBubyksXHJcblx0XHRcdDFcclxuXHRcdCk7XHJcblx0XHR0aGlzLnNhdmUoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclRvcEVsKCkge1xyXG5cdFx0TGlzdC5saXN0RWxlbWVudC5hcHBlbmQoSXRlbS5yZW5kZXIodGhpcy5pdGVtc1t0aGlzLml0ZW1zLmxlbmd0aCAtIDFdKSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0TGlzdC5saXN0RWxlbWVudC5hcHBlbmQoSXRlbS5yZW5kZXIoaXRlbSkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzYXZlKCkge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50eXBlLCBKU09OLnN0cmluZ2lmeSh0aGlzLml0ZW1zKSk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9MaXN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tLWFkZFwiKTtcclxuXHRcdHRoaXMuaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpO1xyXG5cdFx0dGhpcy5saXN0ID0gbmV3IExpc3QoXCJ0b2RvLWxpc3RcIik7XHJcblx0fVxyXG5cclxuXHRjbGVhcklucHV0KCkge1xyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRpc1ZhbGlkSW5wdXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCI7XHJcblx0fVxyXG5cclxuXHRhZGRUb0xpc3QoKSB7XHJcblx0XHR0aGlzLmxpc3QuYWRkVG9MaXN0KHRoaXMuaW5wdXQudmFsdWUudHJpbSgpKTtcclxuXHRcdHRoaXMuY2xlYXJJbnB1dCgpO1xyXG5cdFx0dGhpcy5saXN0LnJlbmRlclRvcEVsKCk7XHJcblx0XHR0aGlzLmxpc3Quc2F2ZSgpO1xyXG5cdH1cclxuXHJcblx0YWN0aXZlKCkge1xyXG5cdFx0dGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG5cdFx0XHRpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiB0aGlzLmlzVmFsaWRJbnB1dCgpKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRUb0xpc3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRcdGlmICh0aGlzLmlzVmFsaWRJbnB1dCgpKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRUb0xpc3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0TGlzdC5saXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1haW5fX2l0ZW0tYnRuXCIpKSB7XHJcblx0XHRcdFx0bGV0IGxpID0gZS50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xyXG5cdFx0XHRcdHRoaXMubGlzdC5yZW1vdmVJdGVtKE51bWJlcihsaS5kYXRhc2V0Lm5vKSk7XHJcblx0XHRcdFx0bGkuY2xhc3NMaXN0LmFkZChcImRpc2FwcGVhclwiKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IGxpLnJlbW92ZSgpLCA3NTApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL1BhZ2VcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcclxuXHJcbmxldCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5hY3RpdmUoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==