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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Default style reset for browser compatibility */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n\nbody {\n\tcolor: white;\n}\n\n.cover-img {\n    position: absolute;\n\toverflow: hidden;\n    width: 100%;\n\theight: 100%;\n    z-index: -2;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kDAAkD;;AAElD;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,wBAAwB;AACzB;;AAEA;CACC,YAAY;AACb;;AAEA;IACI,kBAAkB;CACrB,gBAAgB;IACb,WAAW;CACd,YAAY;IACT,WAAW;AACf","sourcesContent":["/* Default style reset for browser compatibility */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n\nbody {\n\tcolor: white;\n}\n\n.cover-img {\n    position: absolute;\n\toverflow: hidden;\n    width: 100%;\n\theight: 100%;\n    z-index: -2;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/contact-comp.js":
/*!*****************************!*\
  !*** ./src/contact-comp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContWrapEl": () => (/* binding */ createContWrapEl)
/* harmony export */ });
function createContactTitleEl() {
    const contactTitle = document.createElement('h2');
    contactTitle.innerText = 'Contact Us'
    contactTitle.classList.add('contact-title');
    return contactTitle;
}

function createContactTextEl() {
    const contactTextEl = document.createElement('p');
    contactTextEl.classList.add('contact-text');
    contactTextEl.innerText = '';
    return contactTextEl;
}

function createNameInputEl() {
    const nameInputEl = document.createElement("input");
    nameInputEl.type = 'text';
    nameInputEl.placeholder = 'Name'
    return nameInputEl;
}

function createEmailInputEl() {
    const emailInputEl = document.createElement("input");
    emailInputEl.type = 'email';
    emailInputEl.placeholder = 'Email'
    return emailInputEl;
}

function createPhoneInputEl() {
    const phoneInputEl = document.createElement("input");
    phoneInputEl.type = 'tel';
    phoneInputEl.placeholder = 'Phone Number'
    return phoneInputEl;
}

function createInquiryInputEl() {
    const inquiryInputEl = document.createElement('textarea');
    inquiryInputEl.classList.add('inquiry-input');
    inquiryInputEl.placeholder = 'What are you getting in touch about?';
    return inquiryInputEl;
}

function createSubmitBtnEl() {
    const submitBtnEl = document.createElement('input');
    submitBtnEl.type = 'submit'
    submitBtnEl.classList.add('submit-btn');
    return submitBtnEl;
}

function createFormEl() {
    const formEl = document.createElement('form');
    formEl.classList.add('contact-form');

    formEl.appendChild(createNameInputEl());
    formEl.appendChild(createEmailInputEl());
    formEl.appendChild(createPhoneInputEl());
    formEl.appendChild(createInquiryInputEl());
    formEl.appendChild(createSubmitBtnEl());
    return formEl;

}

function createContWrapEl() {
    const contactWrapEl = document.createElement('div');
    contactWrapEl.classList.add('contact-wrapper');

    contactWrapEl.appendChild(createContactTitleEl());
    contactWrapEl.appendChild(createContactTextEl())
    contactWrapEl.appendChild(createFormEl());
    return contactWrapEl;
}



/***/ }),

/***/ "./src/home-comp.js":
/*!**************************!*\
  !*** ./src/home-comp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomeWrapEl": () => (/* binding */ createHomeWrapEl),
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar)
/* harmony export */ });
function createNavbar() {
    const navbarWrapEl = document.createElement('div');
    navbarWrapEl.classList.add('navbar-wrapper');
    
    const navbarEl = document.createElement('ul');
    const homeEl = document.createElement('li');
    const menuEl = document.createElement('li');
    const contactEl = document.createElement('li');

    homeEl.classList.add('home');
    menuEl.classList.add('menu');
    contactEl.classList.add('contact');
    
    homeEl.innerText = 'Home';
    menuEl.innerText = 'Menu';
    contactEl.innerText = 'Contact';

    navbarEl.appendChild(homeEl);
    navbarEl.appendChild(menuEl);
    navbarEl.appendChild(contactEl);

    const headerWrapEl = document.createElement('div');
    headerWrapEl.classList.add('header-wrapper');
    const headerEl = document.createElement('h1');
    headerEl.innerText = 'Next to the Wormhole';
    headerEl.classList.add('res-title');
    headerWrapEl.appendChild(headerEl)

    navbarWrapEl.appendChild(headerWrapEl);
    navbarWrapEl.appendChild(navbarEl);
    return navbarWrapEl;
}


function createWelcome() {
    const welcomeWrapEl = document.createElement('div');
    welcomeWrapEl.classList.add('welcome-wrapper');
    const welcomeEl = document.createElement('p');
    
    welcomeEl.innerText = 'Welcome to Next to the Wormhole! We are a restaurant founded by space explorers who returned from a journey through a nearby wormhole. Our menu features unique dishes created using ingredients and cooking techniques from various planets and dimensions. We are a popular destination for both locals and intergalactic travelers alike. We hope you enjoy your dining experience with us!';

    welcomeEl.classList.add('welcome-message');
    
    welcomeWrapEl.appendChild(welcomeEl);
    return welcomeWrapEl;

}

function createHours() {
    const hoursWrapEl = document.createElement('div');
    hoursWrapEl.classList.add('hours-wrapper');
    
    const hoursTitleEl = document.createElement('h3');
    hoursTitleEl.innerText = 'Hours'
    
    const hoursEl = document.createElement('ul');
    
    const hourMonEl = document.createElement('li');
    const hourTuesEl = document.createElement('li');
    const hourWedEl = document.createElement('li');
    const hourThursEl = document.createElement('li');
    const hourFriEl = document.createElement('li');
    const hourSatEl = document.createElement('li');
    const hourSunEl = document.createElement('li');
    
    hourMonEl.innerText = 'Monday: 8AM-9PM';
    hourTuesEl.innerText = 'Tuesday: 8AM-9PM';
    hourWedEl.innerText = 'Wednesday: 8AM-9PM';
    hourThursEl.innerText = 'Thursday: 8AM-9PM';
    hourFriEl.innerText = 'Friday: 8AM-11PM';
    hourSatEl.innerText = 'Saturday: 8AM-11PM';
    hourSunEl.innerText = 'Sunday: 8AM-5PM';
    
    hoursEl.appendChild(hourMonEl);
    hoursEl.appendChild(hourTuesEl);
    hoursEl.appendChild(hourWedEl);
    hoursEl.appendChild(hourThursEl);
    hoursEl.appendChild(hourFriEl);
    hoursEl.appendChild(hourSatEl);
    hoursEl.appendChild(hourSunEl);
    
    hoursWrapEl.appendChild(hoursTitleEl);
    hoursWrapEl.appendChild(hoursEl);
    
    return hoursWrapEl;
}

function createLocation() {
    const locationWrapEl = document.createElement('div');
    locationWrapEl.classList.add('location-wrapper');

    const locationTitleEl = document.createElement('h3');
    locationTitleEl.innerText = 'Location';
    
    const locationEl = document.createElement('div');
    locationEl.innerText = "40.36194°N 74.038775°W, Teegarden c, Teegarden's Star, Milkyway"
    
    locationWrapEl.appendChild(locationTitleEl);
    locationWrapEl.appendChild(locationEl);


    return locationWrapEl;
}

function createHomeWrapEl() {
    const homeWrapEl = document.createElement('div');
    homeWrapEl.classList.add('home-wrapper');


    homeWrapEl.appendChild(createWelcome());
    homeWrapEl.appendChild(createHours());
    homeWrapEl.appendChild(createLocation());

    return homeWrapEl;
}



/***/ }),

/***/ "./src/menu-comp.js":
/*!**************************!*\
  !*** ./src/menu-comp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuWrapEl": () => (/* binding */ createMenuWrapEl)
/* harmony export */ });
function createMenuTitleEl() {
    const menuTitleEl = document.createElement('h2');
    menuTitleEl.innerText = 'Menu'
    return menuTitleEl;
}

function createStartTitleEl() {
    const startTitle = document.createElement('h3');
    startTitle.innerText = 'Starters'
    startTitle.classList.add('category-title');
    return startTitle;
}


function createCalamariEl() {
    const calCardEl = document.createElement('div');
    calCardEl.classList.add('dishcard');

    const calamariTitle = document.createElement('div');
    calamariTitle.innerText = 'Cosmic Calamari';
    calamariTitle.classList.add('dish-title');

    const calamariEl = document.createElement('p');
    calamariEl.innerText = 'Fried calamari served with a side of extraterrestrial aioli';

    calCardEl.appendChild(calamariTitle);
    calCardEl.appendChild(calamariEl);
    
    return calCardEl;
}


function createSoupEl() {
    const soupCardEl = document.createElement('div');
    soupCardEl.classList.add('dishcard');
    
    const soupTitle = document.createElement('div');
    soupTitle.innerText = 'Starry Soup';
    soupTitle.classList.add('dish-title');
    
    const soupEl = document.createElement('p');
    soupEl.innerText = 'A hearty soup made with space-grown vegetables and spices';
    
    soupCardEl.appendChild(soupTitle);
    soupCardEl.appendChild(soupEl);
    
    return soupCardEl;
}

function createAntipastoEl() {
    const antiCardEl = document.createElement('div');
    antiCardEl.classList.add('dishcard');
    
    const antiTitle = document.createElement('div');
    antiTitle.innerText = 'Alien Antipasto';
    antiTitle.classList.add('dish-title');
    
    const antiEl = document.createElement('p');
    antiEl.innerText = 'A selection of intergalactic cured meats, cheeses, and vegetables';
    
    antiCardEl.appendChild(antiTitle);
    antiCardEl.appendChild(antiEl);
    
    return antiCardEl;
}


function createEntreeTitleEl() {
    const entreeTitle = document.createElement('h3');
    entreeTitle.innerText = 'Entrees'
    entreeTitle.classList.add('category-title');
    return entreeTitle;
}

function createBurgEl() {
    const burgerCardEl = document.createElement('div');
    burgerCardEl.classList.add('dishcard');
    
    const burgerTitle = document.createElement('div');
    burgerTitle.innerText = 'Wormhole Burger';
    burgerTitle.classList.add('dish-title');
    
    const burgerEl = document.createElement('p');
    burgerEl.innerText = 'A juicy patty topped with space-aged cheddar, lettuce, tomato, and wormhole sauce on a cosmic bun';
    
    burgerCardEl.appendChild(burgerTitle);
    burgerCardEl.appendChild(burgerEl);
    
    return burgerCardEl;
}

function createRibEl() {
    const ribCardEl = document.createElement('div');
    ribCardEl.classList.add('dishcard');
    
    const ribTitle = document.createElement('div');
    ribTitle.innerText = 'Red Dwarf Rib-eye';
    ribTitle.classList.add('dish-title');
    
    const ribEl = document.createElement('p');
    ribEl.innerText = 'A perfectly grilled rib-eye served with a side of Teegarden c potatoes and gravy';
    
    ribCardEl.appendChild(ribTitle);
    ribCardEl.appendChild(ribEl);
    
    return ribCardEl;
}

function createDillaEl() {
    const dillaCardEl = document.createElement('div');
    dillaCardEl.classList.add('dishcard');
    
    const dillaTitle = document.createElement('div');
    dillaTitle.innerText = 'Quasar Quesadilla';
    dillaTitle.classList.add('dish-title');
    
    const dillaEl = document.createElement('p');
    dillaEl.innerText = 'A crispy quesadilla filled with space-raised chicken, cheese, and veggies, served with a side of galactic salsa';
    
    dillaCardEl.appendChild(dillaTitle);
    dillaCardEl.appendChild(dillaEl);
    
    return dillaCardEl;
}

function createDessertTitleEl() {
    const dessertTitle = document.createElement('h3');
    dessertTitle.innerText = 'Desserts'
    dessertTitle.classList.add('category-title');
    return dessertTitle;
}


function createPieEl() {
    const pieCardEl = document.createElement('div');
    pieCardEl.classList.add('dishcard');
    
    const pieTitle = document.createElement('div');
    pieTitle.innerText = 'Moon Pie';
    pieTitle.classList.add('dish-title');
    
    const pieEl = document.createElement('p');
    pieEl.innerText = 'A creamy and rich pie made with Teegarden c moon dust and served with a side of stardust whipped cream';
    
    pieCardEl.appendChild(pieTitle);
    pieCardEl.appendChild(pieEl);
    
    return pieCardEl;
}

function createParfEl() {
    const parfCardEl = document.createElement('div');
    parfCardEl.classList.add('dishcard');
    
    const parfTitle = document.createElement('div');
    parfTitle.innerText = 'Planetary Parfait';
    parfTitle.classList.add('dish-title');
    
    const parfEl = document.createElement('p');
    parfEl.innerText = 'Layers of space-grown fruit, yogurt, and crunchy granola';
    
    parfCardEl.appendChild(parfTitle);
    parfCardEl.appendChild(parfEl);
    
    return parfCardEl;
}

function createBrownieEl() {
    const brownieCardEl = document.createElement('div');
    brownieCardEl.classList.add('dishcard');
    
    const brownieTitle = document.createElement('div');
    brownieTitle.innerText = 'Black Hole Brownie';
    brownieTitle.classList.add('dish-title');
    
    const brownieEl = document.createElement('p');
    brownieEl.innerText = 'A warm, gooey brownie with a molten chocolate center, served with a side of space ice cream';
    
    brownieCardEl.appendChild(brownieTitle);
    brownieCardEl.appendChild(brownieEl);
    
    return brownieCardEl;
}

function createDrinkTitleEl() {
    const drinkTitle = document.createElement('h3');
    drinkTitle.innerText = 'Drinks'
    drinkTitle.classList.add('category-title');
    return drinkTitle;
}

function createCoolerEl() {
    const coolerCardEl = document.createElement('div');
    coolerCardEl.classList.add('dishcard');
    
    const coolerTitle = document.createElement('div');
    coolerTitle.innerText = 'Cosmic Cooler';
    coolerTitle.classList.add('dish-title');
    
    const coolerEl = document.createElement('p');
    coolerEl.innerText = 'A refreshing blend of space-grown fruit and spices';
    
    coolerCardEl.appendChild(coolerTitle);
    coolerCardEl.appendChild(coolerEl);
    
    return coolerCardEl;
}

function createSpritEl() {
    const spritzCardEl = document.createElement('div');
    spritzCardEl.classList.add('dishcard');
    
    const spritzTitle = document.createElement('div');
    spritzTitle.innerText = 'Starlight Spritzer';
    spritzTitle.classList.add('dish-title');
    
    const spritzEl = document.createElement('p');
    spritzEl.innerText = 'A sparkling water with a hint of intergalactic flavor';
    
    spritzCardEl.appendChild(spritzTitle);
    spritzCardEl.appendChild(spritzEl);
    
    return spritzCardEl;
}

function createWhiskEl() {
    const whiskCardEl = document.createElement('div');
    whiskCardEl.classList.add('dishcard');
    
    const whiskTitle = document.createElement('div');
    whiskTitle.innerText = 'Wormhole Whiskey';
    whiskTitle.classList.add('dish-title');
    
    const whiskEl = document.createElement('p');
    whiskEl.innerText = 'A smooth, aged whiskey from the planet Teegarden c';
    
    whiskCardEl.appendChild(whiskTitle);
    whiskCardEl.appendChild(whiskEl);
    
    return whiskCardEl;
}

function createMenuWrapEl() {
    const menuWrapEl = document.createElement('div');
    menuWrapEl.classList.add('menu-wrapper');
    
    menuWrapEl.appendChild(createMenuTitleEl());
    menuWrapEl.appendChild(createStartTitleEl());
    menuWrapEl.appendChild(createCalamariEl());
    menuWrapEl.appendChild(createSoupEl());
    menuWrapEl.appendChild(createAntipastoEl());
    menuWrapEl.appendChild(createEntreeTitleEl());
    menuWrapEl.appendChild(createBurgEl());
    menuWrapEl.appendChild(createRibEl());
    menuWrapEl.appendChild(createDillaEl());
    menuWrapEl.appendChild(createDessertTitleEl());
    menuWrapEl.appendChild(createPieEl());
    menuWrapEl.appendChild(createParfEl());
    menuWrapEl.appendChild(createBrownieEl());
    menuWrapEl.appendChild(createDrinkTitleEl());
    menuWrapEl.appendChild(createCoolerEl());
    menuWrapEl.appendChild(createSpritEl());
    menuWrapEl.appendChild(createWhiskEl());
    
    return menuWrapEl;
}



/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad),
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad),
/* harmony export */   "initLoad": () => (/* binding */ initLoad),
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _home_comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-comp */ "./src/home-comp.js");
/* harmony import */ var _menu_comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-comp */ "./src/menu-comp.js");
/* harmony import */ var _contact_comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-comp */ "./src/contact-comp.js");
/* harmony import */ var _images_milkyway_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/milkyway.jpg */ "./src/images/milkyway.jpg");







function initLoad() {
    
const content = document.getElementById('content');

const coverImg = new Image();
coverImg.src = _images_milkyway_jpg__WEBPACK_IMPORTED_MODULE_3__;
coverImg.classList.add('cover-img');
content.appendChild(coverImg);
content.appendChild((0,_home_comp__WEBPACK_IMPORTED_MODULE_0__.createNavbar)());

}


function homeLoad() {
    const content = document.getElementById('content');
    content.appendChild((0,_home_comp__WEBPACK_IMPORTED_MODULE_0__.createHomeWrapEl)());
}


function menuLoad() {
    const content = document.getElementById('content');
    content.appendChild((0,_menu_comp__WEBPACK_IMPORTED_MODULE_1__.createMenuWrapEl)())
}

function contactLoad() {
    const content = document.getElementById('content');
    content.appendChild((0,_contact_comp__WEBPACK_IMPORTED_MODULE_2__.createContWrapEl)());
}



/***/ }),

/***/ "./src/images/milkyway.jpg":
/*!*********************************!*\
  !*** ./src/images/milkyway.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74926bb19c94b1652c58.jpg";

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
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");



(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.initLoad)()
;(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.homeLoad)()
;(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.menuLoad)()
;(0,_page_load__WEBPACK_IMPORTED_MODULE_1__.contactLoad)()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsMmxCQUEybEIsY0FBYyxlQUFlLGNBQWMsNkJBQTZCLEdBQUcsVUFBVSxpQkFBaUIsR0FBRyxnQkFBZ0IseUJBQXlCLHFCQUFxQixrQkFBa0IsaUJBQWlCLGtCQUFrQixHQUFHLGlCQUFpQix3RkFBd0Ysa0JBQWtCLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxVQUFVLFVBQVUsVUFBVSwwa0JBQTBrQixjQUFjLGVBQWUsY0FBYyw2QkFBNkIsR0FBRyxVQUFVLGlCQUFpQixHQUFHLGdCQUFnQix5QkFBeUIscUJBQXFCLGtCQUFrQixpQkFBaUIsa0JBQWtCLEdBQUcsNkJBQTZCO0FBQzczRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pRNkQ7QUFDZDtBQUNHOztBQUVSOzs7QUFHMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxpREFBSztBQUNwQjtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFZOztBQUVoQzs7O0FBR0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBZ0I7QUFDeEM7OztBQUdBO0FBQ0E7QUFDQSx3QkFBd0IsNERBQWdCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWdCO0FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDbUQ7O0FBRXhFLG9EQUFRO0FBQ1IscURBQVE7QUFDUixxREFBUTtBQUNSLHdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LWNvbXAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtY29tcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1jb21wLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERlZmF1bHQgc3R5bGUgcmVzZXQgZm9yIGJyb3dzZXIgY29tcGF0aWJpbGl0eSAqL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY292ZXItaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogLTI7XFxufVxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0RBQWtEOztBQUVsRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtDQUNyQixnQkFBZ0I7SUFDYixXQUFXO0NBQ2QsWUFBWTtJQUNULFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEZWZhdWx0IHN0eWxlIHJlc2V0IGZvciBicm93c2VyIGNvbXBhdGliaWxpdHkgKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvdmVyLWltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0yO1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0VGl0bGVFbCgpIHtcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RUaXRsZS5pbm5lclRleHQgPSAnQ29udGFjdCBVcydcbiAgICBjb250YWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10aXRsZScpO1xuICAgIHJldHVybiBjb250YWN0VGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUZXh0RWwoKSB7XG4gICAgY29uc3QgY29udGFjdFRleHRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0VGV4dEVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtdGV4dCcpO1xuICAgIGNvbnRhY3RUZXh0RWwuaW5uZXJUZXh0ID0gJyc7XG4gICAgcmV0dXJuIGNvbnRhY3RUZXh0RWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hbWVJbnB1dEVsKCkge1xuICAgIGNvbnN0IG5hbWVJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dEVsLnR5cGUgPSAndGV4dCc7XG4gICAgbmFtZUlucHV0RWwucGxhY2Vob2xkZXIgPSAnTmFtZSdcbiAgICByZXR1cm4gbmFtZUlucHV0RWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsSW5wdXRFbCgpIHtcbiAgICBjb25zdCBlbWFpbElucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZW1haWxJbnB1dEVsLnR5cGUgPSAnZW1haWwnO1xuICAgIGVtYWlsSW5wdXRFbC5wbGFjZWhvbGRlciA9ICdFbWFpbCdcbiAgICByZXR1cm4gZW1haWxJbnB1dEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQaG9uZUlucHV0RWwoKSB7XG4gICAgY29uc3QgcGhvbmVJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHBob25lSW5wdXRFbC50eXBlID0gJ3RlbCc7XG4gICAgcGhvbmVJbnB1dEVsLnBsYWNlaG9sZGVyID0gJ1Bob25lIE51bWJlcidcbiAgICByZXR1cm4gcGhvbmVJbnB1dEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnF1aXJ5SW5wdXRFbCgpIHtcbiAgICBjb25zdCBpbnF1aXJ5SW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgaW5xdWlyeUlucHV0RWwuY2xhc3NMaXN0LmFkZCgnaW5xdWlyeS1pbnB1dCcpO1xuICAgIGlucXVpcnlJbnB1dEVsLnBsYWNlaG9sZGVyID0gJ1doYXQgYXJlIHlvdSBnZXR0aW5nIGluIHRvdWNoIGFib3V0Pyc7XG4gICAgcmV0dXJuIGlucXVpcnlJbnB1dEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdWJtaXRCdG5FbCgpIHtcbiAgICBjb25zdCBzdWJtaXRCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgc3VibWl0QnRuRWwudHlwZSA9ICdzdWJtaXQnXG4gICAgc3VibWl0QnRuRWwuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpO1xuICAgIHJldHVybiBzdWJtaXRCdG5FbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybUVsKCkge1xuICAgIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtRWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1mb3JtJyk7XG5cbiAgICBmb3JtRWwuYXBwZW5kQ2hpbGQoY3JlYXRlTmFtZUlucHV0RWwoKSk7XG4gICAgZm9ybUVsLmFwcGVuZENoaWxkKGNyZWF0ZUVtYWlsSW5wdXRFbCgpKTtcbiAgICBmb3JtRWwuYXBwZW5kQ2hpbGQoY3JlYXRlUGhvbmVJbnB1dEVsKCkpO1xuICAgIGZvcm1FbC5hcHBlbmRDaGlsZChjcmVhdGVJbnF1aXJ5SW5wdXRFbCgpKTtcbiAgICBmb3JtRWwuYXBwZW5kQ2hpbGQoY3JlYXRlU3VibWl0QnRuRWwoKSk7XG4gICAgcmV0dXJuIGZvcm1FbDtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250V3JhcEVsKCkge1xuICAgIGNvbnN0IGNvbnRhY3RXcmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0V3JhcEVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtd3JhcHBlcicpO1xuXG4gICAgY29udGFjdFdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0VGl0bGVFbCgpKTtcbiAgICBjb250YWN0V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RUZXh0RWwoKSlcbiAgICBjb250YWN0V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm1FbCgpKTtcbiAgICByZXR1cm4gY29udGFjdFdyYXBFbDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ29udFdyYXBFbCB9OyIsImZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgICBjb25zdCBuYXZiYXJXcmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXJXcmFwRWwuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXdyYXBwZXInKTtcbiAgICBcbiAgICBjb25zdCBuYXZiYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgaG9tZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBtZW51RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBob21lRWwuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgY29udGFjdEVsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICBcbiAgICBob21lRWwuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIG1lbnVFbC5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgY29udGFjdEVsLmlubmVyVGV4dCA9ICdDb250YWN0JztcblxuICAgIG5hdmJhckVsLmFwcGVuZENoaWxkKGhvbWVFbCk7XG4gICAgbmF2YmFyRWwuYXBwZW5kQ2hpbGQobWVudUVsKTtcbiAgICBuYXZiYXJFbC5hcHBlbmRDaGlsZChjb250YWN0RWwpO1xuXG4gICAgY29uc3QgaGVhZGVyV3JhcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyV3JhcEVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci13cmFwcGVyJyk7XG4gICAgY29uc3QgaGVhZGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlckVsLmlubmVyVGV4dCA9ICdOZXh0IHRvIHRoZSBXb3JtaG9sZSc7XG4gICAgaGVhZGVyRWwuY2xhc3NMaXN0LmFkZCgncmVzLXRpdGxlJyk7XG4gICAgaGVhZGVyV3JhcEVsLmFwcGVuZENoaWxkKGhlYWRlckVsKVxuXG4gICAgbmF2YmFyV3JhcEVsLmFwcGVuZENoaWxkKGhlYWRlcldyYXBFbCk7XG4gICAgbmF2YmFyV3JhcEVsLmFwcGVuZENoaWxkKG5hdmJhckVsKTtcbiAgICByZXR1cm4gbmF2YmFyV3JhcEVsO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVdlbGNvbWUoKSB7XG4gICAgY29uc3Qgd2VsY29tZVdyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlbGNvbWVXcmFwRWwuY2xhc3NMaXN0LmFkZCgnd2VsY29tZS13cmFwcGVyJyk7XG4gICAgY29uc3Qgd2VsY29tZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIFxuICAgIHdlbGNvbWVFbC5pbm5lclRleHQgPSAnV2VsY29tZSB0byBOZXh0IHRvIHRoZSBXb3JtaG9sZSEgV2UgYXJlIGEgcmVzdGF1cmFudCBmb3VuZGVkIGJ5IHNwYWNlIGV4cGxvcmVycyB3aG8gcmV0dXJuZWQgZnJvbSBhIGpvdXJuZXkgdGhyb3VnaCBhIG5lYXJieSB3b3JtaG9sZS4gT3VyIG1lbnUgZmVhdHVyZXMgdW5pcXVlIGRpc2hlcyBjcmVhdGVkIHVzaW5nIGluZ3JlZGllbnRzIGFuZCBjb29raW5nIHRlY2huaXF1ZXMgZnJvbSB2YXJpb3VzIHBsYW5ldHMgYW5kIGRpbWVuc2lvbnMuIFdlIGFyZSBhIHBvcHVsYXIgZGVzdGluYXRpb24gZm9yIGJvdGggbG9jYWxzIGFuZCBpbnRlcmdhbGFjdGljIHRyYXZlbGVycyBhbGlrZS4gV2UgaG9wZSB5b3UgZW5qb3kgeW91ciBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIHVzISc7XG5cbiAgICB3ZWxjb21lRWwuY2xhc3NMaXN0LmFkZCgnd2VsY29tZS1tZXNzYWdlJyk7XG4gICAgXG4gICAgd2VsY29tZVdyYXBFbC5hcHBlbmRDaGlsZCh3ZWxjb21lRWwpO1xuICAgIHJldHVybiB3ZWxjb21lV3JhcEVsO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xuICAgIGNvbnN0IGhvdXJzV3JhcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnNXcmFwRWwuY2xhc3NMaXN0LmFkZCgnaG91cnMtd3JhcHBlcicpO1xuICAgIFxuICAgIGNvbnN0IGhvdXJzVGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaG91cnNUaXRsZUVsLmlubmVyVGV4dCA9ICdIb3VycydcbiAgICBcbiAgICBjb25zdCBob3Vyc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBjb25zdCBob3VyTW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhvdXJUdWVzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhvdXJXZWRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaG91clRodXJzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhvdXJGcmlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaG91clNhdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob3VyU3VuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIFxuICAgIGhvdXJNb25FbC5pbm5lclRleHQgPSAnTW9uZGF5OiA4QU0tOVBNJztcbiAgICBob3VyVHVlc0VsLmlubmVyVGV4dCA9ICdUdWVzZGF5OiA4QU0tOVBNJztcbiAgICBob3VyV2VkRWwuaW5uZXJUZXh0ID0gJ1dlZG5lc2RheTogOEFNLTlQTSc7XG4gICAgaG91clRodXJzRWwuaW5uZXJUZXh0ID0gJ1RodXJzZGF5OiA4QU0tOVBNJztcbiAgICBob3VyRnJpRWwuaW5uZXJUZXh0ID0gJ0ZyaWRheTogOEFNLTExUE0nO1xuICAgIGhvdXJTYXRFbC5pbm5lclRleHQgPSAnU2F0dXJkYXk6IDhBTS0xMVBNJztcbiAgICBob3VyU3VuRWwuaW5uZXJUZXh0ID0gJ1N1bmRheTogOEFNLTVQTSc7XG4gICAgXG4gICAgaG91cnNFbC5hcHBlbmRDaGlsZChob3VyTW9uRWwpO1xuICAgIGhvdXJzRWwuYXBwZW5kQ2hpbGQoaG91clR1ZXNFbCk7XG4gICAgaG91cnNFbC5hcHBlbmRDaGlsZChob3VyV2VkRWwpO1xuICAgIGhvdXJzRWwuYXBwZW5kQ2hpbGQoaG91clRodXJzRWwpO1xuICAgIGhvdXJzRWwuYXBwZW5kQ2hpbGQoaG91ckZyaUVsKTtcbiAgICBob3Vyc0VsLmFwcGVuZENoaWxkKGhvdXJTYXRFbCk7XG4gICAgaG91cnNFbC5hcHBlbmRDaGlsZChob3VyU3VuRWwpO1xuICAgIFxuICAgIGhvdXJzV3JhcEVsLmFwcGVuZENoaWxkKGhvdXJzVGl0bGVFbCk7XG4gICAgaG91cnNXcmFwRWwuYXBwZW5kQ2hpbGQoaG91cnNFbCk7XG4gICAgXG4gICAgcmV0dXJuIGhvdXJzV3JhcEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBsb2NhdGlvbldyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uV3JhcEVsLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLXdyYXBwZXInKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uVGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbG9jYXRpb25UaXRsZUVsLmlubmVyVGV4dCA9ICdMb2NhdGlvbic7XG4gICAgXG4gICAgY29uc3QgbG9jYXRpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uRWwuaW5uZXJUZXh0ID0gXCI0MC4zNjE5NMKwTiA3NC4wMzg3NzXCsFcsIFRlZWdhcmRlbiBjLCBUZWVnYXJkZW4ncyBTdGFyLCBNaWxreXdheVwiXG4gICAgXG4gICAgbG9jYXRpb25XcmFwRWwuYXBwZW5kQ2hpbGQobG9jYXRpb25UaXRsZUVsKTtcbiAgICBsb2NhdGlvbldyYXBFbC5hcHBlbmRDaGlsZChsb2NhdGlvbkVsKTtcblxuXG4gICAgcmV0dXJuIGxvY2F0aW9uV3JhcEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lV3JhcEVsKCkge1xuICAgIGNvbnN0IGhvbWVXcmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lV3JhcEVsLmNsYXNzTGlzdC5hZGQoJ2hvbWUtd3JhcHBlcicpO1xuXG5cbiAgICBob21lV3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZVdlbGNvbWUoKSk7XG4gICAgaG9tZVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcbiAgICBob21lV3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xuXG4gICAgcmV0dXJuIGhvbWVXcmFwRWw7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdmJhciwgY3JlYXRlSG9tZVdyYXBFbCB9OyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnVUaXRsZUVsKCkge1xuICAgIGNvbnN0IG1lbnVUaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51VGl0bGVFbC5pbm5lclRleHQgPSAnTWVudSdcbiAgICByZXR1cm4gbWVudVRpdGxlRWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXJ0VGl0bGVFbCgpIHtcbiAgICBjb25zdCBzdGFydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdGFydFRpdGxlLmlubmVyVGV4dCA9ICdTdGFydGVycydcbiAgICBzdGFydFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LXRpdGxlJyk7XG4gICAgcmV0dXJuIHN0YXJ0VGl0bGU7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlQ2FsYW1hcmlFbCgpIHtcbiAgICBjb25zdCBjYWxDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYWxDYXJkRWwuY2xhc3NMaXN0LmFkZCgnZGlzaGNhcmQnKTtcblxuICAgIGNvbnN0IGNhbGFtYXJpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYWxhbWFyaVRpdGxlLmlubmVyVGV4dCA9ICdDb3NtaWMgQ2FsYW1hcmknO1xuICAgIGNhbGFtYXJpVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuXG4gICAgY29uc3QgY2FsYW1hcmlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYWxhbWFyaUVsLmlubmVyVGV4dCA9ICdGcmllZCBjYWxhbWFyaSBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgZXh0cmF0ZXJyZXN0cmlhbCBhaW9saSc7XG5cbiAgICBjYWxDYXJkRWwuYXBwZW5kQ2hpbGQoY2FsYW1hcmlUaXRsZSk7XG4gICAgY2FsQ2FyZEVsLmFwcGVuZENoaWxkKGNhbGFtYXJpRWwpO1xuICAgIFxuICAgIHJldHVybiBjYWxDYXJkRWw7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlU291cEVsKCkge1xuICAgIGNvbnN0IHNvdXBDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzb3VwQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3Qgc291cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cFRpdGxlLmlubmVyVGV4dCA9ICdTdGFycnkgU291cCc7XG4gICAgc291cFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBzb3VwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc291cEVsLmlubmVyVGV4dCA9ICdBIGhlYXJ0eSBzb3VwIG1hZGUgd2l0aCBzcGFjZS1ncm93biB2ZWdldGFibGVzIGFuZCBzcGljZXMnO1xuICAgIFxuICAgIHNvdXBDYXJkRWwuYXBwZW5kQ2hpbGQoc291cFRpdGxlKTtcbiAgICBzb3VwQ2FyZEVsLmFwcGVuZENoaWxkKHNvdXBFbCk7XG4gICAgXG4gICAgcmV0dXJuIHNvdXBDYXJkRWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFudGlwYXN0b0VsKCkge1xuICAgIGNvbnN0IGFudGlDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbnRpQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3QgYW50aVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW50aVRpdGxlLmlubmVyVGV4dCA9ICdBbGllbiBBbnRpcGFzdG8nO1xuICAgIGFudGlUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNoLXRpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgYW50aUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFudGlFbC5pbm5lclRleHQgPSAnQSBzZWxlY3Rpb24gb2YgaW50ZXJnYWxhY3RpYyBjdXJlZCBtZWF0cywgY2hlZXNlcywgYW5kIHZlZ2V0YWJsZXMnO1xuICAgIFxuICAgIGFudGlDYXJkRWwuYXBwZW5kQ2hpbGQoYW50aVRpdGxlKTtcbiAgICBhbnRpQ2FyZEVsLmFwcGVuZENoaWxkKGFudGlFbCk7XG4gICAgXG4gICAgcmV0dXJuIGFudGlDYXJkRWw7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRW50cmVlVGl0bGVFbCgpIHtcbiAgICBjb25zdCBlbnRyZWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZW50cmVlVGl0bGUuaW5uZXJUZXh0ID0gJ0VudHJlZXMnXG4gICAgZW50cmVlVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktdGl0bGUnKTtcbiAgICByZXR1cm4gZW50cmVlVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1cmdFbCgpIHtcbiAgICBjb25zdCBidXJnZXJDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXJnZXJDYXJkRWwuY2xhc3NMaXN0LmFkZCgnZGlzaGNhcmQnKTtcbiAgICBcbiAgICBjb25zdCBidXJnZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1cmdlclRpdGxlLmlubmVyVGV4dCA9ICdXb3JtaG9sZSBCdXJnZXInO1xuICAgIGJ1cmdlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBidXJnZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBidXJnZXJFbC5pbm5lclRleHQgPSAnQSBqdWljeSBwYXR0eSB0b3BwZWQgd2l0aCBzcGFjZS1hZ2VkIGNoZWRkYXIsIGxldHR1Y2UsIHRvbWF0bywgYW5kIHdvcm1ob2xlIHNhdWNlIG9uIGEgY29zbWljIGJ1bic7XG4gICAgXG4gICAgYnVyZ2VyQ2FyZEVsLmFwcGVuZENoaWxkKGJ1cmdlclRpdGxlKTtcbiAgICBidXJnZXJDYXJkRWwuYXBwZW5kQ2hpbGQoYnVyZ2VyRWwpO1xuICAgIFxuICAgIHJldHVybiBidXJnZXJDYXJkRWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJpYkVsKCkge1xuICAgIGNvbnN0IHJpYkNhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpYkNhcmRFbC5jbGFzc0xpc3QuYWRkKCdkaXNoY2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IHJpYlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmliVGl0bGUuaW5uZXJUZXh0ID0gJ1JlZCBEd2FyZiBSaWItZXllJztcbiAgICByaWJUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNoLXRpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgcmliRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmliRWwuaW5uZXJUZXh0ID0gJ0EgcGVyZmVjdGx5IGdyaWxsZWQgcmliLWV5ZSBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgVGVlZ2FyZGVuIGMgcG90YXRvZXMgYW5kIGdyYXZ5JztcbiAgICBcbiAgICByaWJDYXJkRWwuYXBwZW5kQ2hpbGQocmliVGl0bGUpO1xuICAgIHJpYkNhcmRFbC5hcHBlbmRDaGlsZChyaWJFbCk7XG4gICAgXG4gICAgcmV0dXJuIHJpYkNhcmRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlsbGFFbCgpIHtcbiAgICBjb25zdCBkaWxsYUNhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpbGxhQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3QgZGlsbGFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpbGxhVGl0bGUuaW5uZXJUZXh0ID0gJ1F1YXNhciBRdWVzYWRpbGxhJztcbiAgICBkaWxsYVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBkaWxsYUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRpbGxhRWwuaW5uZXJUZXh0ID0gJ0EgY3Jpc3B5IHF1ZXNhZGlsbGEgZmlsbGVkIHdpdGggc3BhY2UtcmFpc2VkIGNoaWNrZW4sIGNoZWVzZSwgYW5kIHZlZ2dpZXMsIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBnYWxhY3RpYyBzYWxzYSc7XG4gICAgXG4gICAgZGlsbGFDYXJkRWwuYXBwZW5kQ2hpbGQoZGlsbGFUaXRsZSk7XG4gICAgZGlsbGFDYXJkRWwuYXBwZW5kQ2hpbGQoZGlsbGFFbCk7XG4gICAgXG4gICAgcmV0dXJuIGRpbGxhQ2FyZEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0VGl0bGVFbCgpIHtcbiAgICBjb25zdCBkZXNzZXJ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRlc3NlcnRUaXRsZS5pbm5lclRleHQgPSAnRGVzc2VydHMnXG4gICAgZGVzc2VydFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LXRpdGxlJyk7XG4gICAgcmV0dXJuIGRlc3NlcnRUaXRsZTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVQaWVFbCgpIHtcbiAgICBjb25zdCBwaWVDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaWVDYXJkRWwuY2xhc3NMaXN0LmFkZCgnZGlzaGNhcmQnKTtcbiAgICBcbiAgICBjb25zdCBwaWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBpZVRpdGxlLmlubmVyVGV4dCA9ICdNb29uIFBpZSc7XG4gICAgcGllVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IHBpZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBpZUVsLmlubmVyVGV4dCA9ICdBIGNyZWFteSBhbmQgcmljaCBwaWUgbWFkZSB3aXRoIFRlZWdhcmRlbiBjIG1vb24gZHVzdCBhbmQgc2VydmVkIHdpdGggYSBzaWRlIG9mIHN0YXJkdXN0IHdoaXBwZWQgY3JlYW0nO1xuICAgIFxuICAgIHBpZUNhcmRFbC5hcHBlbmRDaGlsZChwaWVUaXRsZSk7XG4gICAgcGllQ2FyZEVsLmFwcGVuZENoaWxkKHBpZUVsKTtcbiAgICBcbiAgICByZXR1cm4gcGllQ2FyZEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJmRWwoKSB7XG4gICAgY29uc3QgcGFyZkNhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmZDYXJkRWwuY2xhc3NMaXN0LmFkZCgnZGlzaGNhcmQnKTtcbiAgICBcbiAgICBjb25zdCBwYXJmVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJmVGl0bGUuaW5uZXJUZXh0ID0gJ1BsYW5ldGFyeSBQYXJmYWl0JztcbiAgICBwYXJmVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IHBhcmZFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJmRWwuaW5uZXJUZXh0ID0gJ0xheWVycyBvZiBzcGFjZS1ncm93biBmcnVpdCwgeW9ndXJ0LCBhbmQgY3J1bmNoeSBncmFub2xhJztcbiAgICBcbiAgICBwYXJmQ2FyZEVsLmFwcGVuZENoaWxkKHBhcmZUaXRsZSk7XG4gICAgcGFyZkNhcmRFbC5hcHBlbmRDaGlsZChwYXJmRWwpO1xuICAgIFxuICAgIHJldHVybiBwYXJmQ2FyZEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCcm93bmllRWwoKSB7XG4gICAgY29uc3QgYnJvd25pZUNhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJyb3duaWVDYXJkRWwuY2xhc3NMaXN0LmFkZCgnZGlzaGNhcmQnKTtcbiAgICBcbiAgICBjb25zdCBicm93bmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBicm93bmllVGl0bGUuaW5uZXJUZXh0ID0gJ0JsYWNrIEhvbGUgQnJvd25pZSc7XG4gICAgYnJvd25pZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBicm93bmllRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYnJvd25pZUVsLmlubmVyVGV4dCA9ICdBIHdhcm0sIGdvb2V5IGJyb3duaWUgd2l0aCBhIG1vbHRlbiBjaG9jb2xhdGUgY2VudGVyLCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2Ygc3BhY2UgaWNlIGNyZWFtJztcbiAgICBcbiAgICBicm93bmllQ2FyZEVsLmFwcGVuZENoaWxkKGJyb3duaWVUaXRsZSk7XG4gICAgYnJvd25pZUNhcmRFbC5hcHBlbmRDaGlsZChicm93bmllRWwpO1xuICAgIFxuICAgIHJldHVybiBicm93bmllQ2FyZEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcmlua1RpdGxlRWwoKSB7XG4gICAgY29uc3QgZHJpbmtUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZHJpbmtUaXRsZS5pbm5lclRleHQgPSAnRHJpbmtzJ1xuICAgIGRyaW5rVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktdGl0bGUnKTtcbiAgICByZXR1cm4gZHJpbmtUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29vbGVyRWwoKSB7XG4gICAgY29uc3QgY29vbGVyQ2FyZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29vbGVyQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3QgY29vbGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb29sZXJUaXRsZS5pbm5lclRleHQgPSAnQ29zbWljIENvb2xlcic7XG4gICAgY29vbGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IGNvb2xlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvb2xlckVsLmlubmVyVGV4dCA9ICdBIHJlZnJlc2hpbmcgYmxlbmQgb2Ygc3BhY2UtZ3Jvd24gZnJ1aXQgYW5kIHNwaWNlcyc7XG4gICAgXG4gICAgY29vbGVyQ2FyZEVsLmFwcGVuZENoaWxkKGNvb2xlclRpdGxlKTtcbiAgICBjb29sZXJDYXJkRWwuYXBwZW5kQ2hpbGQoY29vbGVyRWwpO1xuICAgIFxuICAgIHJldHVybiBjb29sZXJDYXJkRWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwcml0RWwoKSB7XG4gICAgY29uc3Qgc3ByaXR6Q2FyZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ByaXR6Q2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3Qgc3ByaXR6VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcHJpdHpUaXRsZS5pbm5lclRleHQgPSAnU3RhcmxpZ2h0IFNwcml0emVyJztcbiAgICBzcHJpdHpUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNoLXRpdGxlJyk7XG4gICAgXG4gICAgY29uc3Qgc3ByaXR6RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3ByaXR6RWwuaW5uZXJUZXh0ID0gJ0Egc3BhcmtsaW5nIHdhdGVyIHdpdGggYSBoaW50IG9mIGludGVyZ2FsYWN0aWMgZmxhdm9yJztcbiAgICBcbiAgICBzcHJpdHpDYXJkRWwuYXBwZW5kQ2hpbGQoc3ByaXR6VGl0bGUpO1xuICAgIHNwcml0ekNhcmRFbC5hcHBlbmRDaGlsZChzcHJpdHpFbCk7XG4gICAgXG4gICAgcmV0dXJuIHNwcml0ekNhcmRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2hpc2tFbCgpIHtcbiAgICBjb25zdCB3aGlza0NhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdoaXNrQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3Qgd2hpc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdoaXNrVGl0bGUuaW5uZXJUZXh0ID0gJ1dvcm1ob2xlIFdoaXNrZXknO1xuICAgIHdoaXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IHdoaXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2hpc2tFbC5pbm5lclRleHQgPSAnQSBzbW9vdGgsIGFnZWQgd2hpc2tleSBmcm9tIHRoZSBwbGFuZXQgVGVlZ2FyZGVuIGMnO1xuICAgIFxuICAgIHdoaXNrQ2FyZEVsLmFwcGVuZENoaWxkKHdoaXNrVGl0bGUpO1xuICAgIHdoaXNrQ2FyZEVsLmFwcGVuZENoaWxkKHdoaXNrRWwpO1xuICAgIFxuICAgIHJldHVybiB3aGlza0NhcmRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudVdyYXBFbCgpIHtcbiAgICBjb25zdCBtZW51V3JhcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVdyYXBFbC5jbGFzc0xpc3QuYWRkKCdtZW51LXdyYXBwZXInKTtcbiAgICBcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVUaXRsZUVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlU3RhcnRUaXRsZUVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FsYW1hcmlFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZVNvdXBFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUFudGlwYXN0b0VsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlRW50cmVlVGl0bGVFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUJ1cmdFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZVJpYkVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlRGlsbGFFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZURlc3NlcnRUaXRsZUVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlUGllRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVQYXJmRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVCcm93bmllRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVEcmlua1RpdGxlRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVDb29sZXJFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZVNwcml0RWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVXaGlza0VsKCkpO1xuICAgIFxuICAgIHJldHVybiBtZW51V3JhcEVsO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNZW51V3JhcEVsIH07IiwiaW1wb3J0IHsgY3JlYXRlTmF2YmFyLCBjcmVhdGVIb21lV3JhcEVsIH0gZnJvbSAnLi9ob21lLWNvbXAnO1xuaW1wb3J0IHsgY3JlYXRlTWVudVdyYXBFbCB9IGZyb20gJy4vbWVudS1jb21wJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRXcmFwRWwgfSBmcm9tICcuL2NvbnRhY3QtY29tcCc7XG5cbmltcG9ydCBpbWFnZSBmcm9tICcuL2ltYWdlcy9taWxreXdheS5qcGcnO1xuXG5cbmZ1bmN0aW9uIGluaXRMb2FkKCkge1xuICAgIFxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGNvdmVySW1nID0gbmV3IEltYWdlKCk7XG5jb3ZlckltZy5zcmMgPSBpbWFnZTtcbmNvdmVySW1nLmNsYXNzTGlzdC5hZGQoJ2NvdmVyLWltZycpO1xuY29udGVudC5hcHBlbmRDaGlsZChjb3ZlckltZyk7XG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKTtcblxufVxuXG5cbmZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVdyYXBFbCgpKTtcbn1cblxuXG5mdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVXcmFwRWwoKSlcbn1cblxuZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250V3JhcEVsKCkpO1xufVxuXG5leHBvcnQgeyBpbml0TG9hZCwgaG9tZUxvYWQsIG1lbnVMb2FkLCBjb250YWN0TG9hZCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhvbWVMb2FkLCBpbml0TG9hZCwgbWVudUxvYWQsIGNvbnRhY3RMb2FkIH0gZnJvbSAnLi9wYWdlLWxvYWQnO1xuXG5pbml0TG9hZCgpXG5ob21lTG9hZCgpXG5tZW51TG9hZCgpXG5jb250YWN0TG9hZCgpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9