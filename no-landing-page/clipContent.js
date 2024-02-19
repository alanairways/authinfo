/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	
function __webpack_require__inject_script_fix(moduleId) {
  if(installedModules[moduleId]) { return installedModules[moduleId].exports;}
var module = installedModules[moduleId] = {
 i: moduleId,
 l: false,
 exports: {}
};
const resp = modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
module.l = true;
return resp;
}
 function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__inject_script_fix(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finder", function() { return finder; });
var Limit
;(function (a) {
    ;(a[(a.All = 0)] = 'All'),
        (a[(a.Two = 1)] = 'Two'),
        (a[(a.One = 2)] = 'One')
})(Limit || (Limit = {}))
let config, rootDocument
function finder(a, b) {
    if (a.nodeType !== Node.ELEMENT_NODE)
        throw new Error(
            `Can't generate CSS selector for non-element node type.`
        )
    if ('html' === a.tagName.toLowerCase()) return 'html'
    const c = {
        root: document.body,
        idName: () => !0,
        className: () => !0,
        tagName: () => !0,
        attr: () => !1,
        seedMinLength: 1,
        optimizedMinLength: 2,
        threshold: 1e3,
        maxNumberOfTries: 1e4,
    }
    ;(config = Object.assign(Object.assign({}, c), b)),
        (rootDocument = findRootDocument(config.root, c))
    let d = bottomUpSearch(a, Limit.All, () =>
        bottomUpSearch(a, Limit.Two, () => bottomUpSearch(a, Limit.One))
    )
    if (d) {
        const b = sort(optimize(d, a))
        return 0 < b.length && (d = b[0]), selector(d)
    }
    throw new Error(`Selector was not found.`)
}
function findRootDocument(a, b) {
    return a.nodeType === Node.DOCUMENT_NODE
        ? a
        : a === b.root
        ? a.ownerDocument
        : a
}
function bottomUpSearch(a, b, c) {
    let d = null,
        e = [],
        f = a,
        g = 0
    for (; f && f !== config.root.parentElement; ) {
        let a = maybe(id(f)) ||
            maybe(...attr(f)) ||
            maybe(...classNames(f)) ||
            maybe(tagName(f)) || [any()]
        const h = index(f)
        if (b === Limit.All)
            h &&
                (a = a.concat(
                    a.filter(dispensableNth).map((a) => nthChild(a, h))
                ))
        else if (b === Limit.Two)
            (a = a.slice(0, 1)),
                h &&
                    (a = a.concat(
                        a.filter(dispensableNth).map((a) => nthChild(a, h))
                    ))
        else if (b === Limit.One) {
            const [b] = (a = a.slice(0, 1))
            h && dispensableNth(b) && (a = [nthChild(b, h)])
        }
        for (let b of a) b.level = g
        if (
            (e.push(a),
            e.length >= config.seedMinLength && ((d = findUniquePath(e, c)), d))
        )
            break
        ;(f = f.parentElement), g++
    }
    return d || (d = findUniquePath(e, c)), d
}
function findUniquePath(a, b) {
    const c = sort(combinations(a))
    if (c.length > config.threshold) return b ? b() : null
    for (let d of c) if (unique(d)) return d
    return null
}
function selector(a) {
    let b = a[0],
        c = b.name
    for (let d = 1; d < a.length; d++) {
        const e = a[d].level || 0
        ;(c = b.level === e - 1 ? `${a[d].name} > ${c}` : `${a[d].name} ${c}`),
            (b = a[d])
    }
    return c
}
function penalty(a) {
    return a.map((a) => a.penalty).reduce((a, b) => a + b, 0)
}
function unique(a) {
    switch (rootDocument.querySelectorAll(selector(a)).length) {
        case 0:
            throw new Error(
                `Can't select any node with this selector: ${selector(a)}`
            )
        case 1:
            return !0
        default:
            return !1
    }
}
function id(a) {
    const b = a.getAttribute('id')
    return b && config.idName(b)
        ? { name: '#' + cssesc(b, { isIdentifier: !0 }), penalty: 0 }
        : null
}
function attr(a) {
    const b = Array.from(a.attributes).filter((a) =>
        config.attr(a.name, a.value)
    )
    return b.map((a) => ({
        name:
            '[' +
            cssesc(a.name, { isIdentifier: !0 }) +
            '="' +
            cssesc(a.value) +
            '"]',
        penalty: 0.5,
    }))
}
function classNames(a) {
    const b = Array.from(a.classList).filter(config.className)
    return b.map((a) => ({
        name: '.' + cssesc(a, { isIdentifier: !0 }),
        penalty: 1,
    }))
}
function tagName(a) {
    const b = a.tagName.toLowerCase()
    return config.tagName(b) ? { name: b, penalty: 2 } : null
}
function any() {
    return { name: '*', penalty: 3 }
}
function index(a) {
    const b = a.parentNode
    if (!b) return null
    let c = b.firstChild
    if (!c) return null
    let d = 0
    for (; c && (c.nodeType === Node.ELEMENT_NODE && d++, c !== a); )
        c = c.nextSibling
    return d
}
function nthChild(a, b) {
    return { name: a.name + `:nth-child(${b})`, penalty: a.penalty + 1 }
}
function dispensableNth(a) {
    return 'html' !== a.name && !a.name.startsWith('#')
}
function maybe(...a) {
    const b = a.filter(notEmpty)
    return 0 < b.length ? b : null
}
function notEmpty(a) {
    return null !== a && a !== void 0
}
function* combinations(a, b = []) {
    if (0 < a.length)
        for (let c of a[0])
            yield* combinations(a.slice(1, a.length), b.concat(c))
    else yield b
}
function sort(a) {
    return Array.from(a).sort((c, a) => penalty(c) - penalty(a))
}
function* optimize(a, b, c = { counter: 0, visited: new Map() }) {
    if (2 < a.length && a.length > config.optimizedMinLength)
        for (let d = 1; d < a.length - 1; d++) {
            if (c.counter > config.maxNumberOfTries) return
            c.counter += 1
            const e = [...a]
            e.splice(d, 1)
            const f = selector(e)
            if (c.visited.has(f)) return
            unique(e) &&
                same(e, b) &&
                (yield e, c.visited.set(f, !0), yield* optimize(e, b, c))
        }
}
function same(a, b) {
    return rootDocument.querySelector(selector(a)) === b
}
const regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/,
    regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/,
    regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
    defaultOptions = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: 'single',
        wrap: !1,
    }
function cssesc(a, b = {}) {
    const c = Object.assign(Object.assign({}, defaultOptions), b)
    'single' != c.quotes && 'double' != c.quotes && (c.quotes = 'single')
    const d = 'double' == c.quotes ? '"' : "'",
        e = c.isIdentifier,
        f = a.charAt(0)
    let g = '',
        h = 0
    for (const f = a.length; h < f; ) {
        const b = a.charAt(h++)
        let i,
            j = b.charCodeAt(0)
        if (32 > j || 126 < j) {
            if (55296 <= j && 56319 >= j && h < f) {
                const b = a.charCodeAt(h++)
                56320 == (64512 & b)
                    ? (j = ((1023 & j) << 10) + (1023 & b) + 65536)
                    : h--
            }
            i = '\\' + j.toString(16).toUpperCase() + ' '
        } else
            i = c.escapeEverything
                ? regexAnySingleEscape.test(b)
                    ? '\\' + b
                    : '\\' + j.toString(16).toUpperCase() + ' '
                : /[\t\n\f\r\x0B]/.test(b)
                ? '\\' + j.toString(16).toUpperCase() + ' '
                : '\\' == b ||
                  (!e && (('"' == b && d == b) || ("'" == b && d == b))) ||
                  (e && regexSingleEscape.test(b))
                ? '\\' + b
                : b
        g += i
    }
    return (
        e &&
            (/^-[-\d]/.test(g)
                ? (g = '\\-' + g.slice(1))
                : /\d/.test(f) && (g = '\\3' + f + ' ' + g.slice(1))),
        (g = g.replace(regexExcessiveSpaces, function (a, b, c) {
            return b && b.length % 2 ? a : (b || '') + c
        })),
        !e && c.wrap ? d + g + d : g
    )
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeCss = void 0;

const finder_1 = __webpack_require__(0);

function getNodeCss(node) {
  if (node.nodeType == Node.TEXT_NODE) {
    return getNodeCss(node.parentNode);
  }

  return (0, finder_1.finder)(node);
}

exports.getNodeCss = getNodeCss;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/* eslint-disable no-param-reassign */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroy = exports.rescale = exports.draw = exports.clear = exports.init = void 0;

function getDocumentWidthAndHeight() {
  return {
    width: global.document.documentElement.clientWidth,
    height: global.document.documentElement.clientHeight
  };
}

function createCanvas() {
  const canvas = global.document.createElement('canvas');
  canvas.id = 'stn-clip-content-canvas';
  const context = canvas.getContext('2d'); // Set canvas width & height

  const {
    width,
    height
  } = getDocumentWidthAndHeight();
  console.log('createCanvas', width, height);
  setCanvasWidthAndHeight(canvas, context, {
    width,
    height
  }); // Position canvas

  canvas.style.position = 'fixed';
  canvas.style.left = '0';
  canvas.style.top = '0';
  canvas.style.zIndex = '2147483647'; // Disable any user interactions

  canvas.style.pointerEvents = 'none';
  global.document.body.appendChild(canvas);
  return {
    canvas,
    context,
    width,
    height
  };
}

function setCanvasWidthAndHeight(canvas, context, {
  width,
  height
}) {
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`; // Scale

  const scale = global.window.devicePixelRatio;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale); // Normalize coordinate system to use css pixels.

  context.scale(scale, scale);
}

let state = {};

function init() {
  if (!state.canvas) {
    state = createCanvas();
  }
}

exports.init = init;

function clear() {
  if (state.context) {
    state.context.clearRect(0, 0, state.width, state.height);
  }
}

exports.clear = clear;

function draw(callback) {
  clear();
  callback(state.context);
}

exports.draw = draw;

function rescale() {
  // First reset so that the canvas size doesn't impact the container size
  setCanvasWidthAndHeight(state.canvas, state.context, {
    width: 0,
    height: 0
  });
  const {
    width,
    height
  } = getDocumentWidthAndHeight();
  setCanvasWidthAndHeight(state.canvas, state.context, {
    width,
    height
  }); // update state

  state.width = width;
  state.height = height;
}

exports.rescale = rescale;

function destroy() {
  if (state.canvas) {
    clear();
    state.canvas.parentNode.removeChild(state.canvas);
    state = {};
  }
}

exports.destroy = destroy;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { htmlString2El, addCss2, comp2El } from '../clipper/clipperUtil'

const cancelSnackBar_1 = __webpack_require__(21);

const canvas_1 = __webpack_require__(3);

const visualizer_1 = __webpack_require__(22);

const utils_1 = __webpack_require__(23);

const confirmSelectionDialog_1 = __webpack_require__(24);

const getNodeCss_1 = __webpack_require__(1);

function htmlString2El(s) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = s;
  return wrapper.children[0];
}

function addCss2(rule) {
  let css = document.createElement('style');
  css.type = 'text/css';
  css.appendChild(document.createTextNode(rule)); // Support for the rest

  document.getElementsByTagName('head')[0].appendChild(css);
}

function comp2El(comp, vars) {
  const el = htmlString2El(comp.html(vars));
  addCss2(typeof comp.css == 'function' ? comp.css(vars) : comp.css);
  return el;
} // const topleftBoxContainer = {
//     css: ``,
//     html: ({}) => `<div id="clipcontent" style="
//     all:unset;
//     cursor: pointer;
//     justify-items: center;
//     display: flex;
//     flex-direction: row;
//     position:absolute;
//     align-items: center;
//     width: fit-content;
//     background-color:transparent;
//     left:10px;
//     top:10px;
//     gap:8px;
//     ">
//     </div>
// `,
// }


let currentNode;
const pointer = {
  x: 0,
  y: 0
};
const FORBIDDEN_PARENT_IDS = [`cancelsnackbar-${idName}`];

function hasForbiddenParents(a, forbiddenParentIds) {
  let node = a;
  let forbiddenParentIdsMap = Object.fromEntries(forbiddenParentIds.map(x => [x, true]));

  while (node) {
    if (node.id in forbiddenParentIdsMap) {
      return true;
    }

    node = node.parentElement;
  }

  return false;
}

function selectAndDrawElement(element) {
  currentNode = element;
  (0, visualizer_1.drawSelectedElement)(currentNode);
}

function findAndDrawElement(x, y, forbiddenParentIds) {
  currentNode = (0, utils_1.deepElementFromPoint)(x, y);

  if (hasForbiddenParents(currentNode, forbiddenParentIds)) {
    selectAndDrawElement(null);
    return;
  }

  selectAndDrawElement(currentNode);
}

let stack = [];

function drawParent() {
  if (currentNode) {
    stack.push(currentNode);
    selectAndDrawElement(findFirstParentWithDifferentDimension(currentNode));
  }
}

function findFirstParentWithDifferentDimension(node) {
  let parent = node.parentElement;
  const bound = node.getBoundingClientRect();

  while (parent) {
    const parentBound = parent.getBoundingClientRect();

    if (parentBound.width != bound.width || parentBound.height != bound.height || parentBound.x != bound.x || parentBound.y != bound.y) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return null;
}

function drawNextInStack() {
  if (stack.length) {
    const x = stack.pop();
    selectAndDrawElement(x);
  } else {
    selectAndDrawElement(currentNode.firstElementChild);
  }
}

const onMouseOver = event => {
  window.requestAnimationFrame(() => {
    event.stopPropagation();
    findAndDrawElement(event.clientX, event.clientY, FORBIDDEN_PARENT_IDS);
  });
};

const onMouseMove = event => {
  window.requestAnimationFrame(() => {
    event.stopPropagation();
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
};

function onMouseClick(event) {
  if (hasForbiddenParents(event.target, FORBIDDEN_PARENT_IDS)) {
    return;
  }

  event.stopPropagation();
  event.preventDefault();
  manager.startConfirmSelection({
    x: event.clientX,
    y: event.clientY
  });
  return true;
}

const confirmState = {
  onMouseClick(event) {
    var _a; // check if its outside the confirm selection box
    // if yes, cancel


    if (((_a = event.target.closest(`#confirm-selection-${idName}`)) === null || _a === void 0 ? void 0 : _a.id) != `confirm-selection-${idName}`) {
      confirmState.cancel();
    }
  },

  clipContent() {
    confirmState._cancelConfirmSelectionDialog();

    manager.clipContent();
  },

  _startListenEvents() {
    document.addEventListener('click', confirmState.onMouseClick);
  },

  _stopListenEvents() {
    document.removeEventListener('click', confirmState.onMouseClick);
  },

  _resetStack() {
    stack = [];
  },

  _disableButton(name) {
    document.getElementById(`confirm-selection-${idName}`).querySelector(`#stn-${name}-button`).setAttribute('disabled', 'true');
  },

  _enableButton(name) {
    document.getElementById(`confirm-selection-${idName}`).querySelector(`#stn-${name}-button`).removeAttribute('disabled');
  },

  _updatePlusMinusButton() {
    console.log('update', currentNode.firstElementChild);

    if (!currentNode.firstElementChild) {
      console.log("can't go plus");

      confirmState._disableButton('plus');
    } else {
      confirmState._enableButton('plus');
    }

    if (currentNode == document.body) {
      confirmState._disableButton('minus');
    } else {
      confirmState._enableButton('minus');
    }
  },

  _onClickMinusButton() {
    drawParent();

    confirmState._updatePlusMinusButton();
  },

  _onClickPlusButton() {
    drawNextInStack();

    confirmState._updatePlusMinusButton();
  },

  _onClickConfirmButton() {// extract current content
  },

  _addConfirmSelectionDialog(p) {
    const confirmSelectionDialogEl = comp2El(confirmSelectionDialog_1.confirmSelectionDialog, {
      idName
    });
    confirmSelectionDialogEl.style.top = `${p.y - 55}px`;
    confirmSelectionDialogEl.style.left = `${p.x - Math.floor(186 / 2)}px`;
    const minusButtonEl = confirmSelectionDialogEl.querySelector('#stn-minus-button');
    minusButtonEl.addEventListener('click', confirmState._onClickMinusButton);
    const plusButtonEl = confirmSelectionDialogEl.querySelector('#stn-plus-button');
    plusButtonEl.addEventListener('click', confirmState._onClickPlusButton);
    const confirmButtonEl = confirmSelectionDialogEl.querySelector('#stn-confirm-button');
    confirmButtonEl.addEventListener('click', confirmState._onClickConfirmButton);
    confirmButtonEl.addEventListener('click', confirmState.clipContent);
    document.body.appendChild(confirmSelectionDialogEl);

    confirmState._updatePlusMinusButton();
  },

  _removeConfirmSelectionDialog() {
    const confirmSelectionDialog = document.querySelector(`#confirm-selection-${idName}`);
    confirmSelectionDialog === null || confirmSelectionDialog === void 0 ? void 0 : confirmSelectionDialog.remove();
  },

  setup(p) {
    console.log('open confirm selection dialog');

    confirmState._resetStack();

    confirmState._startListenEvents();

    confirmState._addConfirmSelectionDialog(p);
  },

  _cancelConfirmSelectionDialog() {
    confirmState._stopListenEvents();

    confirmState._removeConfirmSelectionDialog();

    confirmState._resetStack();
  },

  cancel() {
    confirmState._cancelConfirmSelectionDialog();

    manager.stopClipZone(false);
    manager.startSelectZone();
  }

};
const selectZoneState = {
  setup() {}

};

function hidePopupIframe() {
  let d = document.querySelector(`#dialog-${idName}`);

  if (d) {
    d.style.removeProperty('display');
    d.style.display = 'none';
  }
}

function showPopupIframe() {
  let d = document.querySelector(`#dialog-${idName}`);

  if (d) {
    d.style.removeProperty('display');
    d.style.display = 'block';
    chrome.runtime.sendMessage({
      popup: {
        name: 'showPopupIframe',
        args: {}
      }
    });
  }
}

function onUserPressEscape(event) {
  if (event.key == 'Escape') {
    event.stopPropagation();
    event.preventDefault();
    manager.stopClipZone();
  }
}

const manager = {
  status: 'stopped',
  confirmState,
  selectZoneState,

  startSelectZone() {
    (0, canvas_1.init)();

    manager._startListenSelectZoneEvents();

    manager._hideDialogAndShowCancelButton();

    manager.status = 'select-zone';
  },

  _hideDialogAndShowCancelButton() {
    hidePopupIframe();
    const cancelSnackBarEl = comp2El(cancelSnackBar_1.cancelSnackBar, {
      idName,
      msg: action == 'pickData' ? 'Click on the data you would like to extract' : 'Click on the content you would like to clip'
    });
    cancelSnackBarEl.querySelector(`#btn-actionCancel`).addEventListener('click', () => manager.stopClipZone(true));
    setTimeout(() => document.querySelector(`#cancelsnackbar-${idName}`).focus(), 50);
    document.addEventListener('keydown', onUserPressEscape);
    document.body.appendChild(cancelSnackBarEl);
  },

  _removeCancelButton() {
    let el = document.querySelector(`#cancelsnackbar-${idName}`);
    el === null || el === void 0 ? void 0 : el.parentNode.removeChild(el);
    document.removeEventListener('keydown', onUserPressEscape);
  },

  _startListenSelectZoneEvents() {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('click', onMouseClick, true);
  },

  _stopListenSelectZoneEvents() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseover', onMouseOver);
    document.removeEventListener('click', onMouseClick, true);
  },

  startConfirmSelection({
    x,
    y
  }) {
    manager._stopListenSelectZoneEvents();

    manager.confirmState.setup({
      x,
      y
    });
    manager.status = 'confirm-selection';
  },

  stopClipZone(showIframe = true) {
    manager._stopListenSelectZoneEvents();

    manager._removeCancelButton();

    (0, canvas_1.destroy)();
    manager.status = 'stopped';

    if (showIframe) {
      showPopupIframe();
    }
  },

  clipContent() {
    var _a;

    return __awaiter(this, void 0, void 0, function* () {
      if (action == 'pickData') {
        const css = (0, getNodeCss_1.getNodeCss)(currentNode); // const fetchFaviconResp = await getCurrentPageFaviconAsBase64()
        // console.log('fetchFaviconResp', fetchFaviconResp)

        chrome.runtime.sendMessage({
          popup: {
            name: 'pickDataAdded',
            args: {
              css,
              domain: window.location.hostname || 'unknown',
              faviconImageBase64: null // fetchFaviconResp.imageBase64 || null,

            }
          }
        });
      } else {
        const html = currentNode === null || currentNode === void 0 ? void 0 : currentNode.outerHTML;
        chrome.runtime.sendMessage({
          popup: {
            name: 'clipContentAdded',
            args: {
              html,
              previewString: ((_a = currentNode === null || currentNode === void 0 ? void 0 : currentNode.innerText) === null || _a === void 0 ? void 0 : _a.substring(0, 1024)) || ''
            }
          }
        });
      }

      manager.stopClipZone();
    });
  }

}; // function injectStartStop() {
//     const x = comp2El(topleftBoxContainer, {})
//     const startButtonEl = comp2El(startButton, {})
//     const stopButtonEl = comp2El(stopButton, {})
//     startButtonEl.addEventListener('click', () => {
//         manager.startSelectZone()
//     })
//     stopButtonEl.addEventListener('click', () => {
//         manager.stopClipZone()
//     })
//     x.appendChild(startButtonEl)
//     x.appendChild(stopButtonEl)
//     document.body.appendChild(x)
// }
// in small dimension: 10x10, fetch as chrome extension
// async function getCurrentPageFaviconAsBase64(): Promise<{
//     success: boolean
//     imageBase64?: string
// }> {
// return new Promise((resolve, reject) => {
//     chrome.runtime.sendMessage({ action: 'getFavicon' }, function (
//         response
//     ) {
//         console.log(response)
//         resolve({ success: true, imageBase64: response })
//     })
//     chrome.tabs.query({ active: true, currentWindow: true }, function (
//         tabs
//     ) {
//     })
// if (faviconEl) {
//     const faviconUrl = faviconEl.getAttribute('href')
//     if (faviconUrl) {
//         try {
//             const favicon = new Image()
//             favicon.crossOrigin = 'anonymous'
//             favicon.src = faviconUrl
//             favicon.onload = () => {
//                 const canvas = document.createElement('canvas')
//                 canvas.width = favicon.width
//                 canvas.height = favicon.height
//                 const ctx = canvas.getContext('2d')
//                 // reduce size to 10x10
//                 ctx.drawImage(favicon, 0, 0, 10, 10)
//                 const dataURL = canvas.toDataURL('image/png')
//                 resolve({ success: true, imageBase64: dataURL })
//             }
//             favicon.onerror = () => {
//                 resolve({ success: false })
//             }
//         } catch (e) {
//             console.error(e)
//             resolve({ success: false })
//         }
//     }
// } else {
//     console.log("can't find favicon")
//     resolve({ success: false })
// }
// })
// }

function clipContent(action, props) {
  switch (action) {
    case 'startClipContent':
      return manager.startSelectZone();

    case 'pickData':
      return manager.startSelectZone();
  }
}

clipContent(action, props);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelSnackBar = void 0;
exports.cancelSnackBar = {
  css: ({
    idName
  }) => `
  .outlined-button-small-${idName} {
      all:unset;
      display: block;
      height: 30px !important;
      padding: 4px 8px !important;
      border-style: solid;
      border-width: 1px;
      border-color: #2e83e6;
      border-radius: 6px;
      background-color: transparent;
      color: #2e83e6;
      text-decoration: none;
      cursor: pointer;
            margin: 0;
            width: auto;
            overflow: visible;
            background: transparent;
            font: inherit;
            line-height: normal;
            -webkit-font-smoothing: inherit;
            -moz-osx-font-smoothing: inherit;
            -webkit-appearance: none;
    }
    
    .outlined-button-small-${idName}:hover {
      background-color: rgba(46, 131, 230, 0.1);
    }
    
    .outlined-button-small-${idName}:active {
      background-color: rgba(46, 131, 230, 0.2);
    }
    
    .outlined-button-small-${idName}:focus {
      background-color: rgba(46, 131, 230, 0.1);
    }

  `,
  html: ({
    idName,
    msg
  }) => `
  <div id="${`cancelsnackbar-${idName}`}" class="sym-injectable-select-image" style="
  all:unset;
  z-index: 2000000000 !important;
  position: fixed;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 20px 10px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  ">
        <div class="oklm flex" style="
        all:unset;
        padding: 10px;
        border-radius: 7px;
        background-color: rgba(0, 0, 0, 0.85);
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        text-align: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        ">
          <div class="mr5" style="
          all:unset;
  margin-right: 10px;
          ">${msg || 'Click on an image on the page'}, "Escape" to cancel</div>
          <div class="g-cancel-button"><button id="btn-actionCancel" class="outlined-button-small-${idName}"
          >
              <div class="v-text">Cancel</div>
            </button></div>
        </div>
  </div>

  `
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawSelectedElement = void 0;
/* eslint-disable operator-assignment */

/**
 * Based on https://gist.github.com/awestbro/e668c12662ad354f02a413205b65fce7
 */

const canvas_1 = __webpack_require__(3);

const colors = {
  // margin: '#f6b26ba8',
  // border: '#ffe599a8',
  // padding: '#93c47d8c',
  margin: '#6fa8dca8',
  border: '#6fa8dca8',
  padding: '#6fa8dca8',
  content: '#6fa8dca8'
};
const SMALL_NODE_SIZE = 30;

function pxToNumber(px) {
  return parseInt(px.replace('px', ''), 10);
}

function round(value) {
  return Number.isInteger(value) ? value : value.toFixed(2);
} // function filterZeroValues(labels: LabelStack): LabelStack {
//     return labels.filter((l) => l.text !== 0 && l.text !== '0')
// }
// function floatingAlignment(extremities: Extremities): FloatingAlignment {
//     const windowExtremities = {
//         top: global.window.scrollY,
//         bottom: global.window.scrollY + global.window.innerHeight,
//         left: global.window.scrollX,
//         right: global.window.scrollX + global.window.innerWidth,
//     }
//     const distances = {
//         top: Math.abs(windowExtremities.top - extremities.top),
//         bottom: Math.abs(windowExtremities.bottom - extremities.bottom),
//         left: Math.abs(windowExtremities.left - extremities.left),
//         right: Math.abs(windowExtremities.right - extremities.right),
//     }
//     return {
//         x: distances.left > distances.right ? 'left' : 'right',
//         y: distances.top > distances.bottom ? 'top' : 'bottom',
//     }
// }


function measureElement(element) {
  const style = global.getComputedStyle(element); // eslint-disable-next-line prefer-const

  let {
    top,
    left,
    right,
    bottom,
    width,
    height
  } = element.getBoundingClientRect();
  const {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    borderBottomWidth,
    borderTopWidth,
    borderLeftWidth,
    borderRightWidth
  } = style; // top = top + global.window.scrollY
  // left = left + global.window.scrollX
  // bottom = bottom + global.window.scrollY
  // right = right + global.window.scrollX

  const margin = {
    top: pxToNumber(marginTop),
    bottom: pxToNumber(marginBottom),
    left: pxToNumber(marginLeft),
    right: pxToNumber(marginRight)
  };
  const padding = {
    top: pxToNumber(paddingTop),
    bottom: pxToNumber(paddingBottom),
    left: pxToNumber(paddingLeft),
    right: pxToNumber(paddingRight)
  };
  const border = {
    top: pxToNumber(borderTopWidth),
    bottom: pxToNumber(borderBottomWidth),
    left: pxToNumber(borderLeftWidth),
    right: pxToNumber(borderRightWidth)
  };
  const extremities = {
    top: top - margin.top,
    bottom: bottom + margin.bottom,
    left: left - margin.left,
    right: right + margin.right
  };
  return {
    margin,
    padding,
    border,
    top,
    left,
    bottom,
    right,
    width,
    height,
    extremities // floatingAlignment: floatingAlignment(extremities),

  };
}

function drawMargin(context, {
  margin,
  width,
  height,
  top,
  left,
  bottom,
  right
}) {
  // Draw Margin
  const marginHeight = height + margin.bottom + margin.top;
  context.fillStyle = colors.margin; // Top margin rect

  context.fillRect(left, top - margin.top, width, margin.top); // Right margin rect

  context.fillRect(right, top - margin.top, margin.right, marginHeight); // Bottom margin rect

  context.fillRect(left, bottom, width, margin.bottom); // Left margin rect

  context.fillRect(left - margin.left, top - margin.top, margin.left, marginHeight); // const marginLabels: LabelStack = [
  //     {
  //         type: 'margin',
  //         text: round(margin.top),
  //         position: 'top',
  //     },
  //     {
  //         type: 'margin',
  //         text: round(margin.right),
  //         position: 'right',
  //     },
  //     {
  //         type: 'margin',
  //         text: round(margin.bottom),
  //         position: 'bottom',
  //     },
  //     {
  //         type: 'margin',
  //         text: round(margin.left),
  //         position: 'left',
  //     },
  // ]
  // return filterZeroValues(marginLabels)
}

function drawPadding(context, {
  padding,
  border,
  width,
  height,
  top,
  left,
  bottom,
  right
}) {
  const paddingWidth = width - border.left - border.right;
  const paddingHeight = height - padding.top - padding.bottom - border.top - border.bottom;
  context.fillStyle = colors.padding; // Top padding rect

  context.fillRect(left + border.left, top + border.top, paddingWidth, padding.top); // Right padding rect

  context.fillRect(right - padding.right - border.right, top + padding.top + border.top, padding.right, paddingHeight); // Bottom padding rect

  context.fillRect(left + border.left, bottom - padding.bottom - border.bottom, paddingWidth, padding.bottom); // Left padding rect

  context.fillRect(left + border.left, top + padding.top + border.top, padding.left, paddingHeight); // const paddingLabels: LabelStack = [
  //     {
  //         type: 'padding',
  //         text: padding.top,
  //         position: 'top',
  //     },
  //     {
  //         type: 'padding',
  //         text: padding.right,
  //         position: 'right',
  //     },
  //     {
  //         type: 'padding',
  //         text: padding.bottom,
  //         position: 'bottom',
  //     },
  //     {
  //         type: 'padding',
  //         text: padding.left,
  //         position: 'left',
  //     },
  // ]
  // return filterZeroValues(paddingLabels)
}

function drawBorder(context, {
  border,
  width,
  height,
  top,
  left,
  bottom,
  right
}) {
  const borderHeight = height - border.top - border.bottom;
  context.fillStyle = colors.border; // Top border rect

  context.fillRect(left, top, width, border.top); // Bottom border rect

  context.fillRect(left, bottom - border.bottom, width, border.bottom); // Left border rect

  context.fillRect(left, top + border.top, border.left, borderHeight); // Right border rect

  context.fillRect(right - border.right, top + border.top, border.right, borderHeight); // const borderLabels: LabelStack = [
  //     {
  //         type: 'border',
  //         text: border.top,
  //         position: 'top',
  //     },
  //     {
  //         type: 'border',
  //         text: border.right,
  //         position: 'right',
  //     },
  //     {
  //         type: 'border',
  //         text: border.bottom,
  //         position: 'bottom',
  //     },
  //     {
  //         type: 'border',
  //         text: border.left,
  //         position: 'left',
  //     },
  // ]
  // return filterZeroValues(borderLabels)
}

function drawContent(context, {
  padding,
  border,
  width,
  height,
  top,
  left
}) {
  const contentWidth = width - border.left - border.right - padding.left - padding.right;
  const contentHeight = height - padding.top - padding.bottom - border.top - border.bottom;
  context.fillStyle = colors.content; // content rect

  context.fillRect(left + border.left + padding.left, top + border.top + padding.top, contentWidth, contentHeight); // Dimension label
  // return [
  //     {
  //         type: 'content',
  //         position: 'center',
  //         text: `${round(contentWidth)} x ${round(contentHeight)}`,
  //     },
  // ]
}

function drawBoxModel(element) {
  return context => {
    if (element && context) {
      const measurements = measureElement(element);
      drawMargin(context, measurements);
      drawPadding(context, measurements);
      drawBorder(context, measurements);
      drawContent(context, measurements); // const externalLabels =
      //     measurements.width <= SMALL_NODE_SIZE * 3 ||
      //     measurements.height <= SMALL_NODE_SIZE
      // labelStacks(
      //     context,
      //     measurements,
      //     [
      //         ...contentLabels,
      //         ...paddingLabels,
      //         ...borderLabels,
      //         ...marginLabels,
      //     ],
      //     externalLabels
      // )
    }
  };
}

function drawSelectedElement(element) {
  console.log('drawSelectedElement', element);
  (0, canvas_1.draw)(drawBoxModel(element));
}

exports.drawSelectedElement = drawSelectedElement;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepElementFromPoint = void 0;

const deepElementFromPoint = (x, y) => {
  const element = global.document.elementFromPoint(x, y);

  const crawlShadows = node => {
    if (node && node.shadowRoot) {
      // elementFromPoint() doesn't exist in ShadowRoot type
      const nestedElement = node.shadowRoot.elementFromPoint(x, y); // Nested node is same as the root one

      if (node.isEqualNode(nestedElement)) {
        return node;
      } // The nested node has shadow DOM too so continue crawling


      if (nestedElement.shadowRoot) {
        return crawlShadows(nestedElement);
      } // No more shadow DOM


      return nestedElement;
    }

    return node;
  };

  const shadowElement = crawlShadows(element);
  return shadowElement || element;
};

exports.deepElementFromPoint = deepElementFromPoint;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmSelectionDialog = void 0;
exports.confirmSelectionDialog = {
  css: ({
    idName
  }) => `

.stn-touchable:hover {
  background-color: #E7E5E4 !important;
}

.stn-touchable:disabled > div {
  opacity:0.5 !important;
  background-color: #fff !important;
}

#stn-leftpanel
{
  all:unset;
height:22px !important;
width:50px !important;
align-self:flex-start !important;
left:8px !important;
top:8px !important;
position:absolute !important;
padding:0px !important;
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:flex-start;
gap:4px !important;
}

#stn-minus-button
{
  all:unset;
height:22px !important;
width:23px !important;
padding:0px !important;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
position:relative;
}
#stn-content
{
  all:unset;
height:22px !important;
width:23px !important;
border-radius:4px;
display:flex;
flex-direction:row;
flex-wrap:nowrap;
justify-content:center;
align-items:center;
position:relative;
border: 1px solid #D6D3D1;
border-radius: 4px;
}
#stn-minusicon
{
  all:unset;
height:14px !important;
width:14px !important;
align-self:flex-start;
left:4.5px;
top:4px;
position:absolute;
padding:0px;
}
#stn-plus-button
{
  all:unset;
height:22px !important;
width:23px !important;
align-self:flex-start;
left:27px;
top:0px;
position:absolute;
padding:0px !important;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
}
#stn-content2
{
  all:unset;
height:22px !important;
width:23px !important;
border-radius:4px !important;
padding:0px !important;
display:flex;
flex-direction:row;
flex-wrap:nowrap;
justify-content:center;
align-items:center;
position:relative;
/* warnGray/200-border */

border: 1px solid #D6D3D1;
border-radius: 4px;
}
#stn-plusicon
{
height:14px;
width:14px;
align-self:flex-start;
left:4.5px;
top:4px;
position:absolute;
padding:0px;
}
#stn-confirm-button
{
  all:unset;
height:22px !important;
width:107px !important;
align-self:flex-start !important;
left:66px !important;
top:8px !important;
position:absolute !important;
padding:0px !important;
display:flex !important;
flex-direction:row !important;
justify-content:center !important;
align-items:center !important;
}
#stn-content3
{
  all:unset;
height:22px;
width:107px;
border-radius:4px;
padding-left:4px;
padding-right:4px;
display:flex;
flex-direction:row;
flex-wrap:nowrap;
justify-content:center;
align-items:center;
position:relative;
/* warnGray/200-border */
border: 1px solid #D6D3D1;
border-radius: 4px;
}
#stn-confirmselection
{
  all:unset;
color:#228be6;
text-align:left;
vertical-align:text-middle;
font-size:12px;
font-family:Helvetica Neue;
align-self:flex-start;
left:4px;
top:2px;
position:absolute;
line-height:150%;
width:99px;
}
    `,
  html: ({
    idName
  }) => `
    <div id="confirm-selection-${idName}" style="
    all:unset;
    cursor: pointer; 
    position:fixed;
    align-items: center;
    left:10px;
    top:-25px;
    gap:8px;
    z-index: 2147483647;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 4px;
    isolation: isolate;
    height: 24px;
    width: 169px;
    border-radius: 4px;
    background: #FFFFFF;
    box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
    ">

    <div  id='stn-leftpanel'>
			<button class='stn-touchable' id='stn-minus-button'>
			<div  id='stn-content'>
        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.75 0.125H0.25V1.875H10.75V0.125Z" fill="#78716C"/>
        </svg>
			</div></button><button class='stn-touchable' id='stn-plus-button'>
			<div  id='stn-content2'>
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.47987 13.0926C6.836 13.0926 7.1335 12.8091 7.1335 12.46V7.62999H11.8252C12.1744 7.62999 12.4727 7.33249 12.4727 6.97637C12.4709 6.80537 12.4021 6.64192 12.281 6.52116C12.1599 6.4004 11.9963 6.33198 11.8252 6.33062H7.1335V1.49274C7.1335 1.14449 6.836 0.860992 6.47987 0.860992C6.31045 0.859356 6.14728 0.924917 6.02609 1.04332C5.9049 1.16173 5.83556 1.32333 5.83325 1.49274V6.33062H1.1345C0.963496 6.33198 0.799858 6.4004 0.678773 6.52116C0.557688 6.64192 0.488828 6.80537 0.487 6.97637C0.487 7.33249 0.785375 7.62999 1.1345 7.62999H5.83325V12.46C5.83325 12.8091 6.12375 13.0926 6.47987 13.0926Z" fill="#78716C"/>
        </svg>
			</div></button>
		</div><button class='stn-touchable' id='stn-confirm-button'>
		<div id='stn-content3'>
			<div  id='stn-confirmselection'>
				Confirm Selection
			</div>
		</div>
    </button>

    <div style="
    all:unset;
    position: absolute;
width: 6.93px;
height: 5.25px;
left: 90.5px;
bottom: -5px;

/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;
z-index: 2;
    ">
    <svg style="all:unset; position:absolute; top:0px; left:0px;" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8L8.36626e-08 -1.49012e-07H10L5 8Z" fill="white"/>
</svg>

    </div>
    </div>
    `
};

/***/ })
/******/ ]);