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
___CSS_LOADER_EXPORT___.push([module.id, "/* Default style reset for browser compatibility */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n\nbody {\n\tcolor: white;\n}\n\n.cover-img {\n    position: absolute;\n\toverflow: hidden;\n    width: 100%;\n\theight: 100%;\n    z-index: -2;\n}\n\n.navbar-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.navbar-el {\n\tdisplay: flex;\n\tgap: 1rem;\n\tfont-size: 1.5rem;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: white;\n}\n\na:hover {\n\tcolor: gray;\n}\na:active {\n\tcolor: gray;\n}\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kDAAkD;;AAElD;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,wBAAwB;AACzB;;AAEA;CACC,YAAY;AACb;;AAEA;IACI,kBAAkB;CACrB,gBAAgB;IACb,WAAW;CACd,YAAY;IACT,WAAW;AACf;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,SAAS;CACT,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;CACrB,YAAY;AACb;;AAEA;CACC,WAAW;AACZ;AACA;CACC,WAAW;AACZ","sourcesContent":["/* Default style reset for browser compatibility */\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n\nbody {\n\tcolor: white;\n}\n\n.cover-img {\n    position: absolute;\n\toverflow: hidden;\n    width: 100%;\n\theight: 100%;\n    z-index: -2;\n}\n\n.navbar-wrapper {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-evenly;\n}\n\n.navbar-el {\n\tdisplay: flex;\n\tgap: 1rem;\n\tfont-size: 1.5rem;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: white;\n}\n\na:hover {\n\tcolor: gray;\n}\na:active {\n\tcolor: gray;\n}\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
    contactWrapEl.classList.add('wrapper');

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
    const homeEl = document.createElement('a');
    const menuEl = document.createElement('a');
    const contactEl = document.createElement('a');

    homeEl.href = '#home';
    menuEl.href = '#menu';
    contactEl.href = '#contact';

    navbarEl.classList.add('navbar-el');
    homeEl.classList.add('nav-el');
    menuEl.classList.add('nav-el');
    contactEl.classList.add('nav-el');
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
    homeWrapEl.classList.add('wrapper');


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
    menuWrapEl.classList.add('wrapper');
    
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
/* harmony export */   "initialEls": () => (/* binding */ initialEls)
/* harmony export */ });
/* harmony import */ var _home_comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-comp */ "./src/home-comp.js");
/* harmony import */ var _menu_comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-comp */ "./src/menu-comp.js");
/* harmony import */ var _contact_comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-comp */ "./src/contact-comp.js");
/* harmony import */ var _images_milkyway_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/milkyway.jpg */ "./src/images/milkyway.jpg");







function initialEls() {
    

const initialWrap = document.createElement('div');
initialWrap.classList.add('initial-wrapper');

const coverImg = new Image();
coverImg.src = _images_milkyway_jpg__WEBPACK_IMPORTED_MODULE_3__;
coverImg.classList.add('cover-img');
initialWrap.appendChild(coverImg);
initialWrap.appendChild((0,_home_comp__WEBPACK_IMPORTED_MODULE_0__.createNavbar)());

return initialWrap;

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
/* harmony import */ var _home_comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-comp */ "./src/home-comp.js");
/* harmony import */ var _menu_comp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-comp */ "./src/menu-comp.js");
/* harmony import */ var _contact_comp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-comp */ "./src/contact-comp.js");






const content = document.getElementById('content');
const homeEls = (0,_home_comp__WEBPACK_IMPORTED_MODULE_2__.createHomeWrapEl)()
content.appendChild((0,_page_load__WEBPACK_IMPORTED_MODULE_1__.initialEls)());
content.appendChild(homeEls);

const menuEls = (0,_menu_comp__WEBPACK_IMPORTED_MODULE_3__.createMenuWrapEl)();
const contactEls = (0,_contact_comp__WEBPACK_IMPORTED_MODULE_4__.createContWrapEl)();

function renderHomeOnClick(e) {
    if(!e.target.classList.contains('home')) {
        return
    }
        let currentWrap = document.querySelector('.wrapper');   
        content.replaceChild(homeEls, currentWrap);
}

function renderMenuOnClick(e) {
    if(!e.target.classList.contains('menu')) {
        return
    }
        let currentWrap = document.querySelector('.wrapper');
        content.replaceChild(menuEls, currentWrap);
}
    
function renderContactOnClick(e) {
    if(!e.target.classList.contains('contact')) {
        return
    }
        let currentWrap = document.querySelector('.wrapper');
        content.replaceChild(contactEls, currentWrap);
}

content.addEventListener('click', renderHomeOnClick);
content.addEventListener('click', renderMenuOnClick);
content.addEventListener('click', renderContactOnClick);








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVE2RDtBQUNkO0FBQ0c7O0FBRVI7OztBQUcxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGlEQUFLO0FBQ3BCO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVk7O0FBRXBDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDb0I7QUFDTTtBQUNBO0FBQ0c7O0FBRWxEO0FBQ0EsZ0JBQWdCLDREQUFnQjtBQUNoQyxvQkFBb0Isc0RBQVU7QUFDOUI7O0FBRUEsZ0JBQWdCLDREQUFnQjtBQUNoQyxtQkFBbUIsK0RBQWdCOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LWNvbXAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUtY29tcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS1jb21wLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERlZmF1bHQgc3R5bGUgcmVzZXQgZm9yIGJyb3dzZXIgY29tcGF0aWJpbGl0eSAqL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY292ZXItaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogLTI7XFxufVxcblxcbi5uYXZiYXItd3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ubmF2YmFyLWVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYTpob3ZlciB7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcbmE6YWN0aXZlIHtcXG5cXHRjb2xvcjogZ3JheTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrREFBa0Q7O0FBRWxEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1Qsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0NBQ3JCLGdCQUFnQjtJQUNiLFdBQVc7Q0FDZCxZQUFZO0lBQ1QsV0FBVztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztDQUNULGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEZWZhdWx0IHN0eWxlIHJlc2V0IGZvciBicm93c2VyIGNvbXBhdGliaWxpdHkgKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvdmVyLWltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IC0yO1xcbn1cXG5cXG4ubmF2YmFyLXdyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLm5hdmJhci1lbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbmE6aG92ZXIge1xcblxcdGNvbG9yOiBncmF5O1xcbn1cXG5hOmFjdGl2ZSB7XFxuXFx0Y29sb3I6IGdyYXk7XFxufVxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUaXRsZUVsKCkge1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdFRpdGxlLmlubmVyVGV4dCA9ICdDb250YWN0IFVzJ1xuICAgIGNvbnRhY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRpdGxlJyk7XG4gICAgcmV0dXJuIGNvbnRhY3RUaXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFRleHRFbCgpIHtcbiAgICBjb25zdCBjb250YWN0VGV4dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RUZXh0RWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0Jyk7XG4gICAgY29udGFjdFRleHRFbC5pbm5lclRleHQgPSAnJztcbiAgICByZXR1cm4gY29udGFjdFRleHRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmFtZUlucHV0RWwoKSB7XG4gICAgY29uc3QgbmFtZUlucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0RWwudHlwZSA9ICd0ZXh0JztcbiAgICBuYW1lSW5wdXRFbC5wbGFjZWhvbGRlciA9ICdOYW1lJ1xuICAgIHJldHVybiBuYW1lSW5wdXRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1haWxJbnB1dEVsKCkge1xuICAgIGNvbnN0IGVtYWlsSW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlbWFpbElucHV0RWwudHlwZSA9ICdlbWFpbCc7XG4gICAgZW1haWxJbnB1dEVsLnBsYWNlaG9sZGVyID0gJ0VtYWlsJ1xuICAgIHJldHVybiBlbWFpbElucHV0RWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBob25lSW5wdXRFbCgpIHtcbiAgICBjb25zdCBwaG9uZUlucHV0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGhvbmVJbnB1dEVsLnR5cGUgPSAndGVsJztcbiAgICBwaG9uZUlucHV0RWwucGxhY2Vob2xkZXIgPSAnUGhvbmUgTnVtYmVyJ1xuICAgIHJldHVybiBwaG9uZUlucHV0RWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucXVpcnlJbnB1dEVsKCkge1xuICAgIGNvbnN0IGlucXVpcnlJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBpbnF1aXJ5SW5wdXRFbC5jbGFzc0xpc3QuYWRkKCdpbnF1aXJ5LWlucHV0Jyk7XG4gICAgaW5xdWlyeUlucHV0RWwucGxhY2Vob2xkZXIgPSAnV2hhdCBhcmUgeW91IGdldHRpbmcgaW4gdG91Y2ggYWJvdXQ/JztcbiAgICByZXR1cm4gaW5xdWlyeUlucHV0RWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN1Ym1pdEJ0bkVsKCkge1xuICAgIGNvbnN0IHN1Ym1pdEJ0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRCdG5FbC50eXBlID0gJ3N1Ym1pdCdcbiAgICBzdWJtaXRCdG5FbC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnRuJyk7XG4gICAgcmV0dXJuIHN1Ym1pdEJ0bkVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRWwoKSB7XG4gICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm1FbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWZvcm0nKTtcblxuICAgIGZvcm1FbC5hcHBlbmRDaGlsZChjcmVhdGVOYW1lSW5wdXRFbCgpKTtcbiAgICBmb3JtRWwuYXBwZW5kQ2hpbGQoY3JlYXRlRW1haWxJbnB1dEVsKCkpO1xuICAgIGZvcm1FbC5hcHBlbmRDaGlsZChjcmVhdGVQaG9uZUlucHV0RWwoKSk7XG4gICAgZm9ybUVsLmFwcGVuZENoaWxkKGNyZWF0ZUlucXVpcnlJbnB1dEVsKCkpO1xuICAgIGZvcm1FbC5hcHBlbmRDaGlsZChjcmVhdGVTdWJtaXRCdG5FbCgpKTtcbiAgICByZXR1cm4gZm9ybUVsO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRXcmFwRWwoKSB7XG4gICAgY29uc3QgY29udGFjdFdyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RXcmFwRWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC13cmFwcGVyJyk7XG4gICAgY29udGFjdFdyYXBFbC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG5cbiAgICBjb250YWN0V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RUaXRsZUVsKCkpO1xuICAgIGNvbnRhY3RXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFRleHRFbCgpKVxuICAgIGNvbnRhY3RXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybUVsKCkpO1xuICAgIHJldHVybiBjb250YWN0V3JhcEVsO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb250V3JhcEVsIH07IiwiZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICAgIGNvbnN0IG5hdmJhcldyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhcldyYXBFbC5jbGFzc0xpc3QuYWRkKCduYXZiYXItd3JhcHBlcicpO1xuICAgIFxuICAgIGNvbnN0IG5hdmJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBob21lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgbWVudUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGNvbnRhY3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgIGhvbWVFbC5ocmVmID0gJyNob21lJztcbiAgICBtZW51RWwuaHJlZiA9ICcjbWVudSc7XG4gICAgY29udGFjdEVsLmhyZWYgPSAnI2NvbnRhY3QnO1xuXG4gICAgbmF2YmFyRWwuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWVsJyk7XG4gICAgaG9tZUVsLmNsYXNzTGlzdC5hZGQoJ25hdi1lbCcpO1xuICAgIG1lbnVFbC5jbGFzc0xpc3QuYWRkKCduYXYtZWwnKTtcbiAgICBjb250YWN0RWwuY2xhc3NMaXN0LmFkZCgnbmF2LWVsJyk7XG4gICAgaG9tZUVsLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBtZW51RWwuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGNvbnRhY3RFbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgXG4gICAgaG9tZUVsLmlubmVyVGV4dCA9ICdIb21lJztcbiAgICBtZW51RWwuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIGNvbnRhY3RFbC5pbm5lclRleHQgPSAnQ29udGFjdCc7XG5cbiAgICBuYXZiYXJFbC5hcHBlbmRDaGlsZChob21lRWwpO1xuICAgIG5hdmJhckVsLmFwcGVuZENoaWxkKG1lbnVFbCk7XG4gICAgbmF2YmFyRWwuYXBwZW5kQ2hpbGQoY29udGFjdEVsKTtcblxuICAgIGNvbnN0IGhlYWRlcldyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlcldyYXBFbC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItd3JhcHBlcicpO1xuICAgIGNvbnN0IGhlYWRlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkZXJFbC5pbm5lclRleHQgPSAnTmV4dCB0byB0aGUgV29ybWhvbGUnO1xuICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ3Jlcy10aXRsZScpO1xuICAgIGhlYWRlcldyYXBFbC5hcHBlbmRDaGlsZChoZWFkZXJFbClcblxuICAgIG5hdmJhcldyYXBFbC5hcHBlbmRDaGlsZChoZWFkZXJXcmFwRWwpO1xuICAgIG5hdmJhcldyYXBFbC5hcHBlbmRDaGlsZChuYXZiYXJFbCk7XG4gICAgcmV0dXJuIG5hdmJhcldyYXBFbDtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVXZWxjb21lKCkge1xuICAgIGNvbnN0IHdlbGNvbWVXcmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3ZWxjb21lV3JhcEVsLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUtd3JhcHBlcicpO1xuICAgIGNvbnN0IHdlbGNvbWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBcbiAgICB3ZWxjb21lRWwuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8gTmV4dCB0byB0aGUgV29ybWhvbGUhIFdlIGFyZSBhIHJlc3RhdXJhbnQgZm91bmRlZCBieSBzcGFjZSBleHBsb3JlcnMgd2hvIHJldHVybmVkIGZyb20gYSBqb3VybmV5IHRocm91Z2ggYSBuZWFyYnkgd29ybWhvbGUuIE91ciBtZW51IGZlYXR1cmVzIHVuaXF1ZSBkaXNoZXMgY3JlYXRlZCB1c2luZyBpbmdyZWRpZW50cyBhbmQgY29va2luZyB0ZWNobmlxdWVzIGZyb20gdmFyaW91cyBwbGFuZXRzIGFuZCBkaW1lbnNpb25zLiBXZSBhcmUgYSBwb3B1bGFyIGRlc3RpbmF0aW9uIGZvciBib3RoIGxvY2FscyBhbmQgaW50ZXJnYWxhY3RpYyB0cmF2ZWxlcnMgYWxpa2UuIFdlIGhvcGUgeW91IGVuam95IHlvdXIgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aCB1cyEnO1xuXG4gICAgd2VsY29tZUVsLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUtbWVzc2FnZScpO1xuICAgIFxuICAgIHdlbGNvbWVXcmFwRWwuYXBwZW5kQ2hpbGQod2VsY29tZUVsKTtcbiAgICByZXR1cm4gd2VsY29tZVdyYXBFbDtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcbiAgICBjb25zdCBob3Vyc1dyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzV3JhcEVsLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLXdyYXBwZXInKTtcbiAgICBcbiAgICBjb25zdCBob3Vyc1RpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhvdXJzVGl0bGVFbC5pbm5lclRleHQgPSAnSG91cnMnXG4gICAgXG4gICAgY29uc3QgaG91cnNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgaG91ck1vbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob3VyVHVlc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob3VyV2VkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhvdXJUaHVyc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob3VyRnJpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhvdXJTYXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaG91clN1bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBcbiAgICBob3VyTW9uRWwuaW5uZXJUZXh0ID0gJ01vbmRheTogOEFNLTlQTSc7XG4gICAgaG91clR1ZXNFbC5pbm5lclRleHQgPSAnVHVlc2RheTogOEFNLTlQTSc7XG4gICAgaG91cldlZEVsLmlubmVyVGV4dCA9ICdXZWRuZXNkYXk6IDhBTS05UE0nO1xuICAgIGhvdXJUaHVyc0VsLmlubmVyVGV4dCA9ICdUaHVyc2RheTogOEFNLTlQTSc7XG4gICAgaG91ckZyaUVsLmlubmVyVGV4dCA9ICdGcmlkYXk6IDhBTS0xMVBNJztcbiAgICBob3VyU2F0RWwuaW5uZXJUZXh0ID0gJ1NhdHVyZGF5OiA4QU0tMTFQTSc7XG4gICAgaG91clN1bkVsLmlubmVyVGV4dCA9ICdTdW5kYXk6IDhBTS01UE0nO1xuICAgIFxuICAgIGhvdXJzRWwuYXBwZW5kQ2hpbGQoaG91ck1vbkVsKTtcbiAgICBob3Vyc0VsLmFwcGVuZENoaWxkKGhvdXJUdWVzRWwpO1xuICAgIGhvdXJzRWwuYXBwZW5kQ2hpbGQoaG91cldlZEVsKTtcbiAgICBob3Vyc0VsLmFwcGVuZENoaWxkKGhvdXJUaHVyc0VsKTtcbiAgICBob3Vyc0VsLmFwcGVuZENoaWxkKGhvdXJGcmlFbCk7XG4gICAgaG91cnNFbC5hcHBlbmRDaGlsZChob3VyU2F0RWwpO1xuICAgIGhvdXJzRWwuYXBwZW5kQ2hpbGQoaG91clN1bkVsKTtcbiAgICBcbiAgICBob3Vyc1dyYXBFbC5hcHBlbmRDaGlsZChob3Vyc1RpdGxlRWwpO1xuICAgIGhvdXJzV3JhcEVsLmFwcGVuZENoaWxkKGhvdXJzRWwpO1xuICAgIFxuICAgIHJldHVybiBob3Vyc1dyYXBFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgbG9jYXRpb25XcmFwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbldyYXBFbC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi13cmFwcGVyJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvblRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxvY2F0aW9uVGl0bGVFbC5pbm5lclRleHQgPSAnTG9jYXRpb24nO1xuICAgIFxuICAgIGNvbnN0IGxvY2F0aW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbkVsLmlubmVyVGV4dCA9IFwiNDAuMzYxOTTCsE4gNzQuMDM4Nzc1wrBXLCBUZWVnYXJkZW4gYywgVGVlZ2FyZGVuJ3MgU3RhciwgTWlsa3l3YXlcIlxuICAgIFxuICAgIGxvY2F0aW9uV3JhcEVsLmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGVFbCk7XG4gICAgbG9jYXRpb25XcmFwRWwuYXBwZW5kQ2hpbGQobG9jYXRpb25FbCk7XG5cblxuICAgIHJldHVybiBsb2NhdGlvbldyYXBFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVdyYXBFbCgpIHtcbiAgICBjb25zdCBob21lV3JhcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZVdyYXBFbC5jbGFzc0xpc3QuYWRkKCdob21lLXdyYXBwZXInKTtcbiAgICBob21lV3JhcEVsLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcblxuXG4gICAgaG9tZVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVXZWxjb21lKCkpO1xuICAgIGhvbWVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XG4gICAgaG9tZVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcblxuICAgIHJldHVybiBob21lV3JhcEVsO1xufVxuXG5leHBvcnQgeyBjcmVhdGVOYXZiYXIsIGNyZWF0ZUhvbWVXcmFwRWwgfTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51VGl0bGVFbCgpIHtcbiAgICBjb25zdCBtZW51VGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRpdGxlRWwuaW5uZXJUZXh0ID0gJ01lbnUnXG4gICAgcmV0dXJuIG1lbnVUaXRsZUVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGFydFRpdGxlRWwoKSB7XG4gICAgY29uc3Qgc3RhcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc3RhcnRUaXRsZS5pbm5lclRleHQgPSAnU3RhcnRlcnMnXG4gICAgc3RhcnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS10aXRsZScpO1xuICAgIHJldHVybiBzdGFydFRpdGxlO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGFtYXJpRWwoKSB7XG4gICAgY29uc3QgY2FsQ2FyZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FsQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG5cbiAgICBjb25zdCBjYWxhbWFyaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FsYW1hcmlUaXRsZS5pbm5lclRleHQgPSAnQ29zbWljIENhbGFtYXJpJztcbiAgICBjYWxhbWFyaVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcblxuICAgIGNvbnN0IGNhbGFtYXJpRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FsYW1hcmlFbC5pbm5lclRleHQgPSAnRnJpZWQgY2FsYW1hcmkgc2VydmVkIHdpdGggYSBzaWRlIG9mIGV4dHJhdGVycmVzdHJpYWwgYWlvbGknO1xuXG4gICAgY2FsQ2FyZEVsLmFwcGVuZENoaWxkKGNhbGFtYXJpVGl0bGUpO1xuICAgIGNhbENhcmRFbC5hcHBlbmRDaGlsZChjYWxhbWFyaUVsKTtcbiAgICBcbiAgICByZXR1cm4gY2FsQ2FyZEVsO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNvdXBFbCgpIHtcbiAgICBjb25zdCBzb3VwQ2FyZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cENhcmRFbC5jbGFzc0xpc3QuYWRkKCdkaXNoY2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IHNvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNvdXBUaXRsZS5pbm5lclRleHQgPSAnU3RhcnJ5IFNvdXAnO1xuICAgIHNvdXBUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNoLXRpdGxlJyk7XG4gICAgXG4gICAgY29uc3Qgc291cEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNvdXBFbC5pbm5lclRleHQgPSAnQSBoZWFydHkgc291cCBtYWRlIHdpdGggc3BhY2UtZ3Jvd24gdmVnZXRhYmxlcyBhbmQgc3BpY2VzJztcbiAgICBcbiAgICBzb3VwQ2FyZEVsLmFwcGVuZENoaWxkKHNvdXBUaXRsZSk7XG4gICAgc291cENhcmRFbC5hcHBlbmRDaGlsZChzb3VwRWwpO1xuICAgIFxuICAgIHJldHVybiBzb3VwQ2FyZEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbnRpcGFzdG9FbCgpIHtcbiAgICBjb25zdCBhbnRpQ2FyZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW50aUNhcmRFbC5jbGFzc0xpc3QuYWRkKCdkaXNoY2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IGFudGlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFudGlUaXRsZS5pbm5lclRleHQgPSAnQWxpZW4gQW50aXBhc3RvJztcbiAgICBhbnRpVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IGFudGlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhbnRpRWwuaW5uZXJUZXh0ID0gJ0Egc2VsZWN0aW9uIG9mIGludGVyZ2FsYWN0aWMgY3VyZWQgbWVhdHMsIGNoZWVzZXMsIGFuZCB2ZWdldGFibGVzJztcbiAgICBcbiAgICBhbnRpQ2FyZEVsLmFwcGVuZENoaWxkKGFudGlUaXRsZSk7XG4gICAgYW50aUNhcmRFbC5hcHBlbmRDaGlsZChhbnRpRWwpO1xuICAgIFxuICAgIHJldHVybiBhbnRpQ2FyZEVsO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUVudHJlZVRpdGxlRWwoKSB7XG4gICAgY29uc3QgZW50cmVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGVudHJlZVRpdGxlLmlubmVyVGV4dCA9ICdFbnRyZWVzJ1xuICAgIGVudHJlZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LXRpdGxlJyk7XG4gICAgcmV0dXJuIGVudHJlZVRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXJnRWwoKSB7XG4gICAgY29uc3QgYnVyZ2VyQ2FyZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVyZ2VyQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3QgYnVyZ2VyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXJnZXJUaXRsZS5pbm5lclRleHQgPSAnV29ybWhvbGUgQnVyZ2VyJztcbiAgICBidXJnZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNoLXRpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgYnVyZ2VyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYnVyZ2VyRWwuaW5uZXJUZXh0ID0gJ0EganVpY3kgcGF0dHkgdG9wcGVkIHdpdGggc3BhY2UtYWdlZCBjaGVkZGFyLCBsZXR0dWNlLCB0b21hdG8sIGFuZCB3b3JtaG9sZSBzYXVjZSBvbiBhIGNvc21pYyBidW4nO1xuICAgIFxuICAgIGJ1cmdlckNhcmRFbC5hcHBlbmRDaGlsZChidXJnZXJUaXRsZSk7XG4gICAgYnVyZ2VyQ2FyZEVsLmFwcGVuZENoaWxkKGJ1cmdlckVsKTtcbiAgICBcbiAgICByZXR1cm4gYnVyZ2VyQ2FyZEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSaWJFbCgpIHtcbiAgICBjb25zdCByaWJDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWJDYXJkRWwuY2xhc3NMaXN0LmFkZCgnZGlzaGNhcmQnKTtcbiAgICBcbiAgICBjb25zdCByaWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpYlRpdGxlLmlubmVyVGV4dCA9ICdSZWQgRHdhcmYgUmliLWV5ZSc7XG4gICAgcmliVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IHJpYkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJpYkVsLmlubmVyVGV4dCA9ICdBIHBlcmZlY3RseSBncmlsbGVkIHJpYi1leWUgc2VydmVkIHdpdGggYSBzaWRlIG9mIFRlZWdhcmRlbiBjIHBvdGF0b2VzIGFuZCBncmF2eSc7XG4gICAgXG4gICAgcmliQ2FyZEVsLmFwcGVuZENoaWxkKHJpYlRpdGxlKTtcbiAgICByaWJDYXJkRWwuYXBwZW5kQ2hpbGQocmliRWwpO1xuICAgIFxuICAgIHJldHVybiByaWJDYXJkRWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpbGxhRWwoKSB7XG4gICAgY29uc3QgZGlsbGFDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaWxsYUNhcmRFbC5jbGFzc0xpc3QuYWRkKCdkaXNoY2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IGRpbGxhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaWxsYVRpdGxlLmlubmVyVGV4dCA9ICdRdWFzYXIgUXVlc2FkaWxsYSc7XG4gICAgZGlsbGFUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNoLXRpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgZGlsbGFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkaWxsYUVsLmlubmVyVGV4dCA9ICdBIGNyaXNweSBxdWVzYWRpbGxhIGZpbGxlZCB3aXRoIHNwYWNlLXJhaXNlZCBjaGlja2VuLCBjaGVlc2UsIGFuZCB2ZWdnaWVzLCBzZXJ2ZWQgd2l0aCBhIHNpZGUgb2YgZ2FsYWN0aWMgc2Fsc2EnO1xuICAgIFxuICAgIGRpbGxhQ2FyZEVsLmFwcGVuZENoaWxkKGRpbGxhVGl0bGUpO1xuICAgIGRpbGxhQ2FyZEVsLmFwcGVuZENoaWxkKGRpbGxhRWwpO1xuICAgIFxuICAgIHJldHVybiBkaWxsYUNhcmRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVzc2VydFRpdGxlRWwoKSB7XG4gICAgY29uc3QgZGVzc2VydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkZXNzZXJ0VGl0bGUuaW5uZXJUZXh0ID0gJ0Rlc3NlcnRzJ1xuICAgIGRlc3NlcnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS10aXRsZScpO1xuICAgIHJldHVybiBkZXNzZXJ0VGl0bGU7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlUGllRWwoKSB7XG4gICAgY29uc3QgcGllQ2FyZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGllQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3QgcGllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaWVUaXRsZS5pbm5lclRleHQgPSAnTW9vbiBQaWUnO1xuICAgIHBpZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBwaWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaWVFbC5pbm5lclRleHQgPSAnQSBjcmVhbXkgYW5kIHJpY2ggcGllIG1hZGUgd2l0aCBUZWVnYXJkZW4gYyBtb29uIGR1c3QgYW5kIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBzdGFyZHVzdCB3aGlwcGVkIGNyZWFtJztcbiAgICBcbiAgICBwaWVDYXJkRWwuYXBwZW5kQ2hpbGQocGllVGl0bGUpO1xuICAgIHBpZUNhcmRFbC5hcHBlbmRDaGlsZChwaWVFbCk7XG4gICAgXG4gICAgcmV0dXJuIHBpZUNhcmRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFyZkVsKCkge1xuICAgIGNvbnN0IHBhcmZDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJmQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3QgcGFyZlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyZlRpdGxlLmlubmVyVGV4dCA9ICdQbGFuZXRhcnkgUGFyZmFpdCc7XG4gICAgcGFyZlRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBwYXJmRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyZkVsLmlubmVyVGV4dCA9ICdMYXllcnMgb2Ygc3BhY2UtZ3Jvd24gZnJ1aXQsIHlvZ3VydCwgYW5kIGNydW5jaHkgZ3Jhbm9sYSc7XG4gICAgXG4gICAgcGFyZkNhcmRFbC5hcHBlbmRDaGlsZChwYXJmVGl0bGUpO1xuICAgIHBhcmZDYXJkRWwuYXBwZW5kQ2hpbGQocGFyZkVsKTtcbiAgICBcbiAgICByZXR1cm4gcGFyZkNhcmRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnJvd25pZUVsKCkge1xuICAgIGNvbnN0IGJyb3duaWVDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBicm93bmllQ2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2hjYXJkJyk7XG4gICAgXG4gICAgY29uc3QgYnJvd25pZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnJvd25pZVRpdGxlLmlubmVyVGV4dCA9ICdCbGFjayBIb2xlIEJyb3duaWUnO1xuICAgIGJyb3duaWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdkaXNoLXRpdGxlJyk7XG4gICAgXG4gICAgY29uc3QgYnJvd25pZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJyb3duaWVFbC5pbm5lclRleHQgPSAnQSB3YXJtLCBnb29leSBicm93bmllIHdpdGggYSBtb2x0ZW4gY2hvY29sYXRlIGNlbnRlciwgc2VydmVkIHdpdGggYSBzaWRlIG9mIHNwYWNlIGljZSBjcmVhbSc7XG4gICAgXG4gICAgYnJvd25pZUNhcmRFbC5hcHBlbmRDaGlsZChicm93bmllVGl0bGUpO1xuICAgIGJyb3duaWVDYXJkRWwuYXBwZW5kQ2hpbGQoYnJvd25pZUVsKTtcbiAgICBcbiAgICByZXR1cm4gYnJvd25pZUNhcmRFbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJpbmtUaXRsZUVsKCkge1xuICAgIGNvbnN0IGRyaW5rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGRyaW5rVGl0bGUuaW5uZXJUZXh0ID0gJ0RyaW5rcydcbiAgICBkcmlua1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LXRpdGxlJyk7XG4gICAgcmV0dXJuIGRyaW5rVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvb2xlckVsKCkge1xuICAgIGNvbnN0IGNvb2xlckNhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvb2xlckNhcmRFbC5jbGFzc0xpc3QuYWRkKCdkaXNoY2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IGNvb2xlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29vbGVyVGl0bGUuaW5uZXJUZXh0ID0gJ0Nvc21pYyBDb29sZXInO1xuICAgIGNvb2xlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCBjb29sZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb29sZXJFbC5pbm5lclRleHQgPSAnQSByZWZyZXNoaW5nIGJsZW5kIG9mIHNwYWNlLWdyb3duIGZydWl0IGFuZCBzcGljZXMnO1xuICAgIFxuICAgIGNvb2xlckNhcmRFbC5hcHBlbmRDaGlsZChjb29sZXJUaXRsZSk7XG4gICAgY29vbGVyQ2FyZEVsLmFwcGVuZENoaWxkKGNvb2xlckVsKTtcbiAgICBcbiAgICByZXR1cm4gY29vbGVyQ2FyZEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcHJpdEVsKCkge1xuICAgIGNvbnN0IHNwcml0ekNhcmRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwcml0ekNhcmRFbC5jbGFzc0xpc3QuYWRkKCdkaXNoY2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IHNwcml0elRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ByaXR6VGl0bGUuaW5uZXJUZXh0ID0gJ1N0YXJsaWdodCBTcHJpdHplcic7XG4gICAgc3ByaXR6VGl0bGUuY2xhc3NMaXN0LmFkZCgnZGlzaC10aXRsZScpO1xuICAgIFxuICAgIGNvbnN0IHNwcml0ekVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNwcml0ekVsLmlubmVyVGV4dCA9ICdBIHNwYXJrbGluZyB3YXRlciB3aXRoIGEgaGludCBvZiBpbnRlcmdhbGFjdGljIGZsYXZvcic7XG4gICAgXG4gICAgc3ByaXR6Q2FyZEVsLmFwcGVuZENoaWxkKHNwcml0elRpdGxlKTtcbiAgICBzcHJpdHpDYXJkRWwuYXBwZW5kQ2hpbGQoc3ByaXR6RWwpO1xuICAgIFxuICAgIHJldHVybiBzcHJpdHpDYXJkRWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdoaXNrRWwoKSB7XG4gICAgY29uc3Qgd2hpc2tDYXJkRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aGlza0NhcmRFbC5jbGFzc0xpc3QuYWRkKCdkaXNoY2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IHdoaXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aGlza1RpdGxlLmlubmVyVGV4dCA9ICdXb3JtaG9sZSBXaGlza2V5JztcbiAgICB3aGlza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtdGl0bGUnKTtcbiAgICBcbiAgICBjb25zdCB3aGlza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdoaXNrRWwuaW5uZXJUZXh0ID0gJ0Egc21vb3RoLCBhZ2VkIHdoaXNrZXkgZnJvbSB0aGUgcGxhbmV0IFRlZWdhcmRlbiBjJztcbiAgICBcbiAgICB3aGlza0NhcmRFbC5hcHBlbmRDaGlsZCh3aGlza1RpdGxlKTtcbiAgICB3aGlza0NhcmRFbC5hcHBlbmRDaGlsZCh3aGlza0VsKTtcbiAgICBcbiAgICByZXR1cm4gd2hpc2tDYXJkRWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVXcmFwRWwoKSB7XG4gICAgY29uc3QgbWVudVdyYXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVXcmFwRWwuY2xhc3NMaXN0LmFkZCgnbWVudS13cmFwcGVyJyk7XG4gICAgbWVudVdyYXBFbC5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgXG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVNZW51VGl0bGVFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZVN0YXJ0VGl0bGVFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUNhbGFtYXJpRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVTb3VwRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVBbnRpcGFzdG9FbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZUVudHJlZVRpdGxlRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVCdXJnRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVSaWJFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZURpbGxhRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0VGl0bGVFbCgpKTtcbiAgICBtZW51V3JhcEVsLmFwcGVuZENoaWxkKGNyZWF0ZVBpZUVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyZkVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlQnJvd25pZUVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlRHJpbmtUaXRsZUVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlQ29vbGVyRWwoKSk7XG4gICAgbWVudVdyYXBFbC5hcHBlbmRDaGlsZChjcmVhdGVTcHJpdEVsKCkpO1xuICAgIG1lbnVXcmFwRWwuYXBwZW5kQ2hpbGQoY3JlYXRlV2hpc2tFbCgpKTtcbiAgICBcbiAgICByZXR1cm4gbWVudVdyYXBFbDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudVdyYXBFbCB9OyIsImltcG9ydCB7IGNyZWF0ZU5hdmJhciwgY3JlYXRlSG9tZVdyYXBFbCB9IGZyb20gJy4vaG9tZS1jb21wJztcbmltcG9ydCB7IGNyZWF0ZU1lbnVXcmFwRWwgfSBmcm9tICcuL21lbnUtY29tcCc7XG5pbXBvcnQgeyBjcmVhdGVDb250V3JhcEVsIH0gZnJvbSAnLi9jb250YWN0LWNvbXAnO1xuXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9pbWFnZXMvbWlsa3l3YXkuanBnJztcblxuXG5mdW5jdGlvbiBpbml0aWFsRWxzKCkge1xuICAgIFxuXG5jb25zdCBpbml0aWFsV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5pdGlhbFdyYXAuY2xhc3NMaXN0LmFkZCgnaW5pdGlhbC13cmFwcGVyJyk7XG5cbmNvbnN0IGNvdmVySW1nID0gbmV3IEltYWdlKCk7XG5jb3ZlckltZy5zcmMgPSBpbWFnZTtcbmNvdmVySW1nLmNsYXNzTGlzdC5hZGQoJ2NvdmVyLWltZycpO1xuaW5pdGlhbFdyYXAuYXBwZW5kQ2hpbGQoY292ZXJJbWcpO1xuaW5pdGlhbFdyYXAuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuXG5yZXR1cm4gaW5pdGlhbFdyYXA7XG5cbn1cblxuXG5cblxuZXhwb3J0IHsgaW5pdGlhbEVscyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGluaXRpYWxFbHMgfSBmcm9tICcuL3BhZ2UtbG9hZCc7XG5pbXBvcnQgeyBjcmVhdGVIb21lV3JhcEVsIH0gZnJvbSAnLi9ob21lLWNvbXAnO1xuaW1wb3J0IHsgY3JlYXRlTWVudVdyYXBFbCB9IGZyb20gJy4vbWVudS1jb21wJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRXcmFwRWwgfSBmcm9tICcuL2NvbnRhY3QtY29tcCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaG9tZUVscyA9IGNyZWF0ZUhvbWVXcmFwRWwoKVxuY29udGVudC5hcHBlbmRDaGlsZChpbml0aWFsRWxzKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChob21lRWxzKTtcblxuY29uc3QgbWVudUVscyA9IGNyZWF0ZU1lbnVXcmFwRWwoKTtcbmNvbnN0IGNvbnRhY3RFbHMgPSBjcmVhdGVDb250V3JhcEVsKCk7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVPbkNsaWNrKGUpIHtcbiAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lJykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgICAgICBsZXQgY3VycmVudFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpOyAgIFxuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZChob21lRWxzLCBjdXJyZW50V3JhcCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnVPbkNsaWNrKGUpIHtcbiAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51JykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgICAgICBsZXQgY3VycmVudFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZChtZW51RWxzLCBjdXJyZW50V3JhcCk7XG59XG4gICAgXG5mdW5jdGlvbiByZW5kZXJDb250YWN0T25DbGljayhlKSB7XG4gICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29udGFjdCcpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnRXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbiAgICAgICAgY29udGVudC5yZXBsYWNlQ2hpbGQoY29udGFjdEVscywgY3VycmVudFdyYXApO1xufVxuXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVySG9tZU9uQ2xpY2spO1xuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck1lbnVPbkNsaWNrKTtcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJDb250YWN0T25DbGljayk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==