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
/******/ 	return __webpack_require__inject_script_fix(__webpack_require__.s = 4);
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
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ====== Utility code
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
});

const components_1 = __webpack_require__(5);

const utils_1 = __webpack_require__(6);

const getNodeCss_1 = __webpack_require__(1); // @ts-ignore


function addCss2(rule) {
  let css = document.createElement('style');
  css.type = 'text/css';
  css.appendChild(document.createTextNode(rule)); // Support for the rest

  document.getElementsByTagName('head')[0].appendChild(css);
}

let isPickingImage = false;

function println(...args) {//hide on prod
  // return console.log(...args);
} // @ts-ignore


let done = null;
let created; // @ts-ignore

function communicateBackground(data) {
  var data = Object.assign({
    asyncId,
    type: 'asyncExec'
  }, data);
  return new Promise(resolve => {
    window.postMessage(data, '*');
    done = resolve;
  });
} // utils


function debounce(func, wait, immediate, context) {
  var result;
  var timeout = null;
  return function (...args) {
    var later = function () {
      timeout = null;
      if (!immediate) result = func(...args);
    };

    var callNow = immediate && !timeout; // Tant que la fonction est appelée, on reset le timeout.

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) result = func(...args);
    return result;
  };
}

function debounceImmediate(func, waitMs) {
  return debounce(func, waitMs, true);
}
/**
 * attach the MouseMove Event that will have a debounceImmediate
 */


let hoverImg = null;

function convertSvgElementToImageSource(svgEl) {
  let svgData = new XMLSerializer().serializeToString(svgEl);
  let img = new Image();
  img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData));
  return img.src;
}

function addImage(ev) {
  return __awaiter(this, void 0, void 0, function* () {
    if (hoverImg == null) {
      return;
    }

    ev.preventDefault();
    ev.stopPropagation();

    if (isPickingImage) {
      const css = (0, getNodeCss_1.getNodeCss)(hoverImg); // const fetchFaviconResp = await getCurrentPageFaviconAsBase64()
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
    }

    let imageUrl, imageBase64; // check if current image is svg instead

    if (hoverImg.tagName.toLowerCase() == 'svg') {
      imageBase64 = convertSvgElementToImageSource(hoverImg);
    } else if (hoverImg.src.startsWith('data:image/')) {
      imageBase64 = hoverImg.src;
    } else {
      imageUrl = hoverImg.src;
    }

    let {
      width,
      height
    } = getDimension(hoverImg);
    window.postMessage({
      type: 'FOUND_SELECT_IMAGE',
      imageUrl,
      imageBase64,
      width,
      height
    }, '*');
  });
}

function isInBound(el, x, y, padding) {
  if (!el) return false;
  let {
    left,
    right,
    top,
    bottom
  } = el.getBoundingClientRect();

  if (x >= left - padding && x <= right + padding && y >= bottom - padding && y <= top + padding) {
    return true;
  }

  return false;
}

function findImage(el, x, y) {
  if (!el) return null;

  if (el.tagName.toLowerCase() == 'img') {
    return el;
  }

  let img = el.querySelector('img');
  if (!isInBound(img, x, y, 0)) return null;
  return img;
}

function getSvgParent(el) {
  let tmp = el;
  let depth = 1;

  while (tmp && depth++ < 8) {
    if (tmp.tagName.toLowerCase() == 'svg') {
      return tmp;
    }

    tmp = tmp.parentElement;
  }

  return null;
}

function findSvg(el, x, y) {
  //find if
  if (!el) return null;

  if (el.tagName.toLowerCase() == 'svg') {
    return el;
  }

  const parentSvg = getSvgParent(el);
  if (isInBound(parentSvg, x, y, 5)) return parentSvg;
  let svgs = el.querySelectorAll('svg');

  if (!svgs.length) {
    // last check: check if it's a parent instead
    return null;
  }

  let i = 0;

  for (let svg of svgs) {
    if (isInBound(svg, x, y, 5)) {
      return svg;
    }

    if (i > 5) break;
    i++;
  }

  return null;
}

function attachAddImage(el) {
  hoverImg = el; // document.body.addEventListener("click", addImage);

  hoverImg.addEventListener('click', addImage);
  el.style.cursor = 'copy';

  el.onmouseleave = () => {
    el.style.cursor = '';
    hoverImg.removeEventListener('click', addImage);
    el.onmouseleave = null;
    hoverImg = null;
  };
}

const trackMouse = debounceImmediate(event => {
  // get mouse
  var eventDoc, doc, body;
  event = event || window.event; // IE-ism
  // If clientX/Y aren't available and clientX/Y are,
  // calculate clientX/Y - logic taken from jQuery.
  // (This is to support old IE)
  // if (event.clientX == null && event.clientX != null) {
  //   eventDoc = (event.target && event.target.ownerDocument) || document;
  //   doc = eventDoc.documentElement;
  //   body = eventDoc.body;
  // println("tracking mouse...", event.clientX, event.clientY, document.elementFromPoint(event.clientX, event.clientY));

  const el = document.elementFromPoint(event.clientX, event.clientY);
  let img = findImage(el, event.clientX, event.clientY); // check if there is an svg instead

  let svg = !img && findSvg(el, event.clientX, event.clientY);

  if (svg) {
    attachAddImage(svg);
  }

  if (img) {
    attachAddImage(img);
  } else {
    document.body.style.cursor = null;
  }
}, 10);

function evTrackMouse(ev) {
  trackMouse(ev);
}

function startSearchImageScript() {
  hoverImg = null;
  document.addEventListener('mousemove', evTrackMouse);
}

function cleanupSearchImageScript() {
  document.removeEventListener('mousemove', evTrackMouse);

  if (hoverImg) {
    println('remove hoverImg', hoverImg);
    hoverImg.style.cursor = '';
    hoverImg.onmouseleave = null;
    hoverImg.removeEventListener('click', addImage);
    hoverImg = null;
  }
} //@ts-ignore


function htmlString2El(s) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = s;
  return wrapper.children[0];
} //@ts-ignore


function comp2El(comp, vars) {
  const el = htmlString2El(comp.html(vars));
  Object.keys(vars).map(k => {
    let x = el.querySelector(`#btn-${k}`);
    x.addEventListener('click', () => {
      window.postMessage({
        type: vars[k]
      }, '*');
    });
  });
  addCss2(comp.css);
  return el;
}

function listenEscape(evt) {
  evt = evt || window.event;
  var isEscape = false;

  if ('key' in evt) {
    isEscape = evt.key === 'Escape' || evt.key === 'Esc';
  } else {
    isEscape = evt.keyCode === 27;
  }

  if (isEscape) {
    window.postMessage({
      type: 'CANCEL'
    }, '*');
  }
}

function listenEnterCapturePortion(evt) {
  evt = evt || window.event;
  var isEscape = false;

  if ('key' in evt) {
    isEscape = evt.key === 'Enter' || evt.key === 'Esc';
  } else {
    isEscape = evt.keyCode === 27;
  }

  if (isEscape) {
    window.postMessage({
      type: 'SAVE_CAPTURE_PORTION'
    }, '*');
  }
}

let oldCursor = document.body.style.cursor; // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ====== Business Logic Reusable Code
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function hideElement(id) {
  let el = document.getElementById(id);

  if (el) {
    el.style.display = 'none';
  }
}

function showElement(id) {
  let el = document.getElementById(id);

  if (el) {
    el.style.display = 'block';
  }
}

function hideDialog(id) {
  let el = document.getElementById(id);

  if (el) {
    el.close();
    el.style.display = 'none';
  }
}

function showDialog(id) {
  let el = document.getElementById(id);

  if (el) {
    el.showModal();
    el.style.display = 'block';
  }
}

function hidePopupIframe() {
  hideElement(`dialog-${idName}`);
  hideDialog("stn-quick-modal");
}

function showPopupIframeAndStopListening() {
  (0, utils_1.sleep)(50).then(() => stopContentScriptListener());
  showElement(`dialog-${idName}`);
  showDialog("stn-quick-modal");
} // function hidePopupIframe() {
//     let d: any = document.querySelector(`#dialog-${idName}`)
//     if (d) {
//         d.style.removeProperty('display')
//         d.style.display = 'none'
//     }
// }
// function showPopupIframeAndStopListening() {
//     sleep(50).then(() => stopContentScriptListener())
//     let d: any = document.querySelector(`#dialog-${idName}`)
//     if (!d) return
//     d.style.display = 'block'
// }


function removeCancelSnackbar() {
  let el = document.querySelector(`#cancelsnackbar-${idName}`);
  el === null || el === void 0 ? void 0 : el.parentNode.removeChild(el);
}

function displayCancelSnackbar(msg, actionCancel = 'CANCEL') {
  var _a;

  return __awaiter(this, void 0, void 0, function* () {
    const el = htmlString2El((0, components_1.getCancelSnackbarHtml)({
      msg,
      actionCancel
    }));
    (_a = el.querySelector(`#btn-actionCancel`)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
      window.postMessage({
        type: 'CANCEL'
      }, '*');
    });
    addCss2(`
    .outlined-button-small-${idName} {
      all: unset;
      display: block;
      height: 30px;
      padding: 4px 8px;
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
    
    `);
    document.body.appendChild(el);
  });
} // ======================================================
// ======================================================
// ====== Select Image
// ======================================================
// ======================================================


function getDimension(imageEl) {
  // get current width
  let width = imageEl.clientWidth; // get current height

  let height = imageEl.clientHeight;
  return {
    width,
    height
  };
}

function STN_selectImage() {
  return __awaiter(this, void 0, void 0, function* () {
    println('selectImage', idName); //hide iframe

    hidePopupIframe();
    displayCancelSnackbar();
    setTimeout(() => {
      var _a;

      startSearchImageScript();
      (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur();
    }, 50);
    document.addEventListener('keydown', listenEscape);
  });
}

function STN_pickImageCss() {
  return __awaiter(this, void 0, void 0, function* () {
    println('selectImage', idName);
    isPickingImage = true; //hide iframe

    hidePopupIframe();
    displayCancelSnackbar('Pick an image on the page');
    setTimeout(() => {
      var _a;

      startSearchImageScript();
      (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur();
    }, 50);
    document.addEventListener('keydown', listenEscape);
  });
}

function STN_cancelSelectImage() {
  return __awaiter(this, void 0, void 0, function* () {
    cleanupSearchImageScript();
    showPopupIframeAndStopListening();
    document.removeEventListener('keydown', listenEscape); //remove cancelSnackBar

    removeCancelSnackbar();
  });
} // ======================================================
// ======================================================
// ====== Take Full Page Screenshot
// ======================================================
// ======================================================


function STN_takeScreenshot() {
  return __awaiter(this, void 0, void 0, function* () {
    //send message to background to take a screenshot
    hidePopupIframe();
    yield (0, utils_1.sleep)(50);
    chrome.runtime.sendMessage({
      type: 'asyncExecTakeScreenshot',
      asyncId
    }, function (response) {
      //screenshot has been took, we stop it
      showPopupIframeAndStopListening();
    });
  });
} // ======================================================
// ======================================================
// ====== Capture Portion Screenshot
// ======================================================
// ======================================================


function displayScreenshotFullPageScreen() {
  let el = comp2El(components_1.InjectableTakeScreenshotScreen, {
    actionCancelButton: 'CANCEL'
  }); //fix scrolling issue element not centered

  el.style.position = 'fixed'; //add for children too

  document.body.appendChild(el);
}

function removeScreenshotFullPageScreen() {
  const el = document.querySelector('#savetonotion-take-screenshot');
  el === null || el === void 0 ? void 0 : el.parentNode.removeChild(el);
}

let rect = {
  state: 'notInitialized',
  a: {
    x: null,
    y: null
  },
  b: {
    x: null,
    y: null
  },
  comp: {
    root: null,
    barBottom: null,
    selectableZone: null,
    captionButton: null
  }
};

function __setDimensionSelectableZone() {// rect.comp.selectableZone.height = "150px";
}

function makeResizableDiv(element) {
  const resizers = element.querySelectorAll('.resizer');
  const minimum_size = 20;
  let original_width = 0;
  let original_height = 0;
  let original_x = 0;
  let original_y = 0;
  let original_mouse_x = 0;
  let original_mouse_y = 0;

  for (let i = 0; i < resizers.length; i++) {
    const currentResizer = resizers[i];
    currentResizer.addEventListener('mousedown', function (e) {
      e.preventDefault();
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.clientX;
      original_mouse_y = e.clientY;
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
      if (currentResizer.classList.contains('bottom-right')) {
        const width = original_width + (e.clientX - original_mouse_x);
        const height = original_height + (e.clientY - original_mouse_y);

        if (width > minimum_size) {
          rect.a;
          element.style.width = width + 'px';
        }

        if (height > minimum_size) {
          element.style.height = height + 'px';
        }
      } else if (currentResizer.classList.contains('bottom-left')) {
        const height = original_height + (e.clientY - original_mouse_y);
        const width = original_width - (e.clientX - original_mouse_x);

        if (height > minimum_size) {
          element.style.height = height + 'px';
        }

        if (width > minimum_size) {
          element.style.width = width + 'px';
          element.style.left = original_x + (e.clientX - original_mouse_x) + 'px';
        }
      } else if (currentResizer.classList.contains('top-right')) {
        const width = original_width + (e.clientX - original_mouse_x);
        const height = original_height - (e.clientY - original_mouse_y);

        if (width > minimum_size) {
          element.style.width = width + 'px';
        }

        if (height > minimum_size) {
          element.style.height = height + 'px';
          element.style.top = original_y + (e.clientY - original_mouse_y) + 'px';
        }
      } else {
        const width = original_width - (e.clientX - original_mouse_x);
        const height = original_height - (e.clientY - original_mouse_y);

        if (width > minimum_size) {
          element.style.width = width + 'px';
          element.style.left = original_x + (e.clientX - original_mouse_x) + 'px';
        }

        if (height > minimum_size) {
          element.style.height = height + 'px';
          element.style.top = original_y + (e.clientY - original_mouse_y) + 'px';
        }
      }

      rect.a = {
        x: parseFloat(element.style.left),
        y: parseFloat(element.style.top)
      };
      rect.b = {
        x: parseFloat(element.style.left) + parseFloat(element.style.width),
        y: parseFloat(element.style.top) + parseFloat(element.style.height)
      };
      updateScreenshotSelectionMenuPos();
    }

    function stopResize() {
      window.removeEventListener('mousemove', resize);
    }
  }
}

function displayScreenshotSelection() {
  rect.comp.root = comp2El(components_1.InjectableTakeScreenshotSelection, {
    actionCloseButton: 'CANCEL',
    actionSaveButton: 'SAVE_CAPTURE_PORTION',
    actionCaptionButton: ''
  });
  rect.comp.barBottom = rect.comp.root.querySelector('.bar-bottom-info');
  rect.comp.root.style.background = 'transparent';
  rect.comp.barBottom.style.position = 'fixed'; //hide the bar

  rect.comp.selectableZone = rect.comp.root.querySelector('.bar-selectable-zone');
  rect.comp.selectableZone.style.position = 'fixed';
  rect.comp.captionButton = rect.comp.root.querySelector('.r-caption-button');
  rect.comp.selectableZone.style['box-shadow'] = '0 0 0 99999px rgba(0, 0, 0, .5)';
  rect.comp.captionButton.style.display = 'none';
  rect.comp.barBottom.style.display = 'none';

  __setDimensionSelectableZone();

  document.body.appendChild(rect.comp.root);
}

function removeScreenshotSelection() {
  var _a, _b;

  (_b = (_a = rect.comp.root) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(rect.comp.root);
  rect.comp.root = null;
  rect.comp.barBottom = null;
  rect.comp.selectableZone = null;
}

function __listenStartDrag(ev) {
  if (rect.state == 'notInitialized') {
    rect.state = 'waitingRectBigEnough';
    println('__listenStartDrag', ev);
    rect.a.x = ev.clientX;
    rect.a.y = ev.clientY;
  }
}

function updateScreenshotSelectionPos() {
  //move screenshot selection at the right pos;
  rect.comp.selectableZone.style.position = 'fixed';
  rect.comp.selectableZone.style.top = `${Math.min(rect.a.y, rect.b.y)}px`;
  rect.comp.selectableZone.style.left = `${Math.min(rect.a.x, rect.b.x)}px`;
  rect.comp.selectableZone.style.height = `${Math.abs(rect.a.y - rect.b.y)}px`;
  rect.comp.selectableZone.style.width = `${Math.abs(rect.a.x - rect.b.x)}px`;
}

function updateScreenshotSelectionMenuPos() {
  function getNb(s) {
    return parseFloat(s.replace('px', ''));
  }

  rect.comp.barBottom.style.position = 'fixed';
  rect.comp.barBottom.style.top = `${getNb(rect.comp.selectableZone.style.top) + getNb(rect.comp.selectableZone.style.height) + 15}px`;
  rect.comp.barBottom.style.right = `${Math.abs(window.innerWidth - (getNb(rect.comp.selectableZone.style.left) + getNb(rect.comp.selectableZone.style.width)))}px`;
}

function __listenDrag(ev) {
  if (rect.state == 'waitingRectBigEnough') {
    //store b
    rect.b.x = ev.clientX;
    rect.b.y = ev.clientY; //check big enough

    if (Math.abs(rect.a.x - rect.b.x) > 10 && Math.abs(rect.a.y - rect.b.y) > 10) {
      rect.state = 'capturing';
      document.body.style.cursor = 'default';
      displayScreenshotSelection();
      removeScreenshotFullPageScreen();
      updateScreenshotSelectionPos();
      document.addEventListener('keydown', listenEnterCapturePortion);
    }
  } else if (rect.state == 'capturing') {
    rect.b.x = ev.clientX;
    rect.b.y = ev.clientY;
    updateScreenshotSelectionPos();
  }
}

function __listenStopDrag(ev) {
  //fchang
  if (rect.state == 'capturing') {
    //pass in captured state
    rect.state = 'captured';
    updateScreenshotSelectionMenuPos();
    rect.comp.barBottom.style.display = '';
    setTimeout(() => {
      makeResizableDiv(rect.comp.selectableZone);
      stopCaptureMouseDragScreenshot();
    }, 50);
  } else if (rect.state == 'waitingRectBigEnough') {
    //cancel
    rect.state = 'notInitialized';
  }
}

function startCaptureMouseDragScreenshot() {
  document.addEventListener('mousedown', __listenStartDrag);
  document.addEventListener('mousemove', __listenDrag);
  document.addEventListener('mouseup', __listenStopDrag);
}

function stopCaptureMouseDragScreenshot() {
  document.removeEventListener('mousedown', __listenStartDrag);
  document.removeEventListener('mousemove', __listenDrag);
  document.removeEventListener('mouseup', __listenStopDrag);
}

function STN_capturePortion() {
  hidePopupIframe();
  displayScreenshotFullPageScreen();
  document.body.style.cursor = 'crosshair';
  setTimeout(() => {
    var _a;

    ;
    (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur();
  }, 50);
  document.addEventListener('keydown', listenEscape); //capture

  startCaptureMouseDragScreenshot();
}

function STN_removeCapturePortion() {
  stopCaptureMouseDragScreenshot();
  removeScreenshotFullPageScreen();
  removeScreenshotSelection();
  document.body.style.cursor = 'default';
  document.removeEventListener('keydown', listenEscape);
  document.removeEventListener('keydown', listenEnterCapturePortion);
}

function STN_cancelCapturePortion() {
  println('call');
  STN_removeCapturePortion();
  showPopupIframeAndStopListening();
}

function getCapturePortionDimension() {
  // from rect.comp.root
  const {
    width,
    height
  } = rect.comp.selectableZone.getBoundingClientRect();
  return {
    width,
    height
  };
}

function STN_saveCapturePortion() {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      width,
      height
    } = getCapturePortionDimension();
    STN_removeCapturePortion();
    yield (0, utils_1.sleep)(50);
    chrome.runtime.sendMessage({
      type: 'asyncExecTakeScreenshotGetImg',
      asyncId
    }, function (response) {
      return __awaiter(this, void 0, void 0, function* () {
        let imageBase64 = null; // println("resp1", response.imageBase64)

        try {
          imageBase64 = yield resizeImage(response.imageBase64);
        } catch (e) {//fail
        }

        chrome.runtime.sendMessage({
          type: 'asyncExecPassScreenshot',
          asyncId,
          imageBase64,
          width,
          height
        }, function () {});
        showPopupIframeAndStopListening();
      });
    });
  });
}

function resizeImage(imageBase64) {
  return __awaiter(this, void 0, void 0, function* () {
    let image = new Image();
    return new Promise(accept => {
      image.onload = function (e) {
        return __awaiter(this, void 0, void 0, function* () {
          rect.a;
          var res = crop(image, {
            x: rect.a.x * window.devicePixelRatio,
            y: rect.a.y * window.devicePixelRatio
          }, {
            x: rect.b.x * window.devicePixelRatio,
            y: rect.b.y * window.devicePixelRatio
          });
          accept(res);
        });
      };

      image.src = imageBase64;
    });
  });
}

function crop(img, a, b) {
  // check scale
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  println('got', `${img.width} x ${img.height} => ${a.x} x ${a.y} ||| ${b.x} x ${b.y}`);
  let dx = Math.min(a.x, b.x),
      dy = Math.min(a.y, b.y),
      dwidth = Math.abs(a.x - b.x),
      dheight = Math.abs(a.y - b.y);
  let ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  let imageData = ctx.getImageData(dx, dy, dwidth, dheight);
  let canvas1 = document.createElement('canvas');
  canvas1.width = dwidth;
  canvas1.height = dheight;
  let ctx1 = canvas1.getContext('2d');
  ctx1.rect(0, 0, dwidth, dheight);
  ctx1.fillStyle = 'white';
  ctx1.fill();
  ctx1.putImageData(imageData, 0, 0);
  return canvas1.toDataURL();
}

function getProxiedUrl(url) {
  // using images.weserv.nl
  return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
}

function STN_fetchImageAsBase64(url) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const res = yield fetch(getProxiedUrl(url));
      const data = yield res.blob();
      const reader = new FileReader();

      reader.onload = function (event) {
        var _a;

        const b64Image = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        if (!b64Image) throw new Error(`incorrect image`);
        const img = typeof b64Image == "string" ? b64Image : new TextDecoder("utf-8").decode(b64Image);
        window.postMessage({
          type: 'FOUND_SELECT_IMAGE',
          imageUrl: null,
          imageBase64: img,
          height: null,
          width: null
        }, '*');
      };

      reader.readAsDataURL(data); // base64
    } catch (e) {
      window.postMessage({
        type: 'CANCEL'
      }, '*');
    }
  });
} // ------------------------------------------------------
// ------------------------------------------------------
// ****** Main
// ------------------------------------------------------
// ------------------------------------------------------


let currentAction = 'selectImage';

if (extraParamsJson) {
  println(extraParamsJson);
  let v = JSON.parse(extraParamsJson);
  currentAction = v.type;

  if (v.type == 'selectImage') {
    STN_selectImage();
  } else if (v.type == 'takeScreenshot') {
    STN_takeScreenshot();
  } else if (v.type == 'capturePortion') {
    STN_capturePortion();
  } else if (v.type == 'pickImageCss') {
    STN_pickImageCss();
  } else if (v.type == "fetchImageAsBase64") {
    STN_fetchImageAsBase64(v.url);
  } else {
    console.log('unknown command');
  }
}

function listener(event) {
  var _a, _b; // We only accept messages from ourselves


  if (event.source != window) return;
  if (!((_a = event.data) === null || _a === void 0 ? void 0 : _a.type)) return;
  println('received listener', event.data);

  switch ((_b = event.data) === null || _b === void 0 ? void 0 : _b.type) {
    case 'FOUND_SELECT_IMAGE':
      communicateBackground({
        success: true,
        imageUrl: event.data.imageUrl,
        imageBase64: event.data.imageBase64,
        height: event.data.height,
        width: event.data.width
      });
      STN_cancelSelectImage();
      break;

    case 'CANCEL':
      switch (currentAction) {
        case 'capturePortion':
          communicateBackground({
            success: false
          });
          STN_cancelCapturePortion();
          break;

        case 'fetchImageAsBase64':
          communicateBackground({
            success: false
          });
          break;

        default:
          communicateBackground({
            success: false
          });
          STN_cancelSelectImage();
          break;
      }

      break;

    case 'SAVE_CAPTURE_PORTION':
      STN_saveCapturePortion();
      break;

    case 'asyncExec':
      // try {
      chrome.runtime.sendMessage(event.data, function (response) {
        println('async exec response:', response); // done(response)
        // done = null
      }); // } catch (e) {
      //   done({ success: false, message: "please reload the page" })
      // }

      break;
  }
}

function stopContentScriptListener() {
  window.removeEventListener('message', listener);
}

if (!created) {
  created = true;
  window.addEventListener('message', listener, false);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCancelSnackbarHtml = exports.InjectableTakeScreenshotSelection = exports.InjectableTakeScreenshotScreen = void 0; // @ts-ignore

exports.InjectableTakeScreenshotScreen = {
  css: `
  .savetonotion-button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
  
  .savetonotion-button:focus {
    outline: none;
    box-shadow: none;
  }
  
  
  
  .outlined-button-small {
    display: block;
    height: 30px;
    padding: 4px 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #2e83e6;
    border-radius: 6px;
    background-color: transparent;
    color: #2e83e6;
    text-decoration: none;
    cursor: pointer;
  }
  
  .outlined-button-small:hover {
    background-color: rgba(46, 131, 230, 0.1);
  }
  
  .outlined-button-small:active {
    background-color: rgba(46, 131, 230, 0.2);
  }
  
  .outlined-button-small:focus {
    background-color: rgba(46, 131, 230, 0.1);
  }
  
  .outlined-button-small.stn {
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  .div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: -10px;
    margin-left: -9px;
    padding: 12px 10px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
  }
  
  .sym-injectable-take-screenshot-screen {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 2000000000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 10px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
  
  .text-block-21 {
    color: #fff;
    font-size: 21px !important;
    text-align: center;
  }
  
  .div-block-132 {
    margin-top: 20px;
  }
  
  .image-10 {
    margin-bottom: 0px;
  }
  
  .text-btn.stn {
    font-weight: 400 !important;
    font-size: 15px !important;
  }
  
  .div-block-133 {
    margin-bottom: 15px;
  }`,
  html: ({
    actionCancelButton
  }) => `<div id="savetonotion-take-screenshot" class="sym-injectable-take-screenshot-screen" style="display:fixed;">
          <div class="div-block-133"><svg xmlns="http://www.w3.org/2000/svg"  width="82" alt="" class="image-10"   height="82" alt="" class="image-10"  fill="currentcolor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="168 48 208 48 208 88" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="88 208 48 208 48 168" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="208 168 208 208 168 208" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="48 88 48 48 88 48" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></div>
          <div class="text-block-21">Drag or Click on the page to select a <br>region. Press ESC to cancel.</div>
          <div class="div-block-132">
            <button class="savetonotion-button outlined-button-small stn r-cancel-button w-inline-block" id="btn-actionCancelButton">
              <div class="text-btn stn">Cancel</div>
            </button>
          </div>
        </div>`
}; // @ts-ignore

exports.InjectableTakeScreenshotSelection = {
  css: `
  .savetonotion-button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }
  
  .savetonotion-button:focus {
    outline: none;
    box-shadow: none;
  }
  
  
  
  .primary-button {
    display: block;
    padding: 9px 15px;
    border-radius: 6px;
    background-color: #2e83e6;
  }
  
  .primary-button:hover {
    background-color: #2876d1;
  }
  
  .primary-button:active {
    background-color: #246dc2;
  }
  
  .primary-button:focus {
    background-color: #2876d1;
  }
  
  .primary-button.with-icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    padding: 4px 11px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  
  .primary-button.with-icon.r-save-button {
    height: 33px;
  }
  
  .div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-right: -10px;
    margin-left: -9px;
    padding: 12px 10px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
  }
  
  .sym-injectable-take-screenshot-selection {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 2000000000;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 10px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
  }
  
  .white-button {
    display: block;
    padding: 9px 15px;
    border-radius: 6px;
    background-color: #2e83e6;
  }
  
  .white-button:hover {
    background-color: #2876d1;
  }
  
  .white-button:active {
    background-color: #246dc2;
  }
  
  .white-button:focus {
    background-color: #2876d1;
  }
  
  .white-button.with-icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    padding: 4px 11px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  
  .white-button.with-icon.r-save-button {
    height: 33px;
    padding: 3px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #fff;
    color: #333;
  }
  
  .white-button.with-icon.r-save-button:hover {
    background-color: #d6d6d6;
  }
  
  .white-button.with-icon.r-save-button:active {
    background-color: #c5c5c5;
  }
  
  .white-button.with-icon.r-close-button {
    height: 33px;
    padding: 3px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #fff;
    color: #333;
  }
  
  .white-button.with-icon.r-close-button:hover {
    background-color: #d6d6d6;
  }
  
  .white-button.with-icon.r-close-button:active {
    background-color: #c5c5c5;
  }
  
  .white-button.no-icon {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    padding: 4px 11px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  
  .white-button.no-icon.r-caption-button {
    height: 33px;
    padding: 3px 11px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #fff;
    color: #333;
  }
  
  .white-button.no-icon.r-caption-button:hover {
    background-color: #d6d6d6;
  }
  
  .white-button.no-icon.r-caption-button:active {
    background-color: #c5c5c5;
  }
  
  .mr5 {
    margin-right: 5px !important;
  }
  
  .bar-bottom-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0px !important;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  
  .bar-selectable-zone {
    position: relative;
    width: 150px;
    height: 150px;
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
  }
  
  .div-block-135 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  
  .resizer {
    width: 15px;
    height: 15px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: -1px -1px 3px 0 rgba(0, 0, 0, 0.3), 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
  }
  
  .resizer.top-left {
    position: absolute;
    left: 0%;
    top: 0%;
    right: auto;
    bottom: auto;
    margin-top: -8px;
    margin-left: -8px;
    cursor: nwse-resize;
  }
  
  .resizer.top-right {
    position: absolute;
    left: auto;
    top: 0%;
    right: 0%;
    bottom: auto;
    margin-top: -8px;
    margin-right: -8px;
    cursor: nesw-resize;
  }
  
  .resizer.bottom-left {
    position: absolute;
    left: 0%;
    top: auto;
    right: auto;
    bottom: 0%;
    margin-bottom: -8px;
    margin-left: -8px;
    cursor: nesw-resize;
  }

  .v-text {
    font-weight: 400 !important;
    font-size: 15px !important;
    font-family: 'Inter' !important;
  }
  
  .resizer.bottom-right {
    position: absolute;
    left: auto;
    top: auto;
    right: 0%;
    bottom: 0%;
    margin-right: -8px;
    margin-bottom: -8px;
    cursor: nwse-resize;
  }`,
  html: ({
    actionCloseButton,
    actionCaptionButton,
    actionSaveButton
  }) => `<div id="savetonotion-take-screenshot" class="sym-injectable-take-screenshot-selection">
          <div class="div-block-135">
            <div class="bar-selectable-zone">
              <div class="resizer top-left"></div>
              <div class="resizer top-right"></div>
              <div class="resizer bottom-left"></div>
              <div class="resizer bottom-right"></div>
            </div>
            <div class="bar-bottom-info">
              <div class="mr5">
                <button id="btn-actionCloseButton" class="savetonotion-button white-button with-icon r-close-button w-inline-block"><svg xmlns="http://www.w3.org/2000/svg"  width="28" alt=""   height="28" alt=""  fill="currentcolor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg></button>
              </div>
              <div class="mr5">
                <button id="btn-actionCaptionButton" class="savetonotion-button white-button no-icon r-caption-button w-inline-block">
                  <div class="v-text">Add Caption</div>
                </button>
              </div>
              <button id="btn-actionSaveButton" class="savetonotion-button primary-button with-icon r-save-button w-inline-block">
                <div class="v-text">Save Screenshot</div>
              </button>
            </div>
          </div>
        </div>`
};

const getCancelSnackbarHtml = ({
  msg,
  actionCancel
}) => `
    <div id="${`cancelsnackbar-${idName}`}" class="sym-injectable-select-image" style="
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
    padding: 20px 10px !important;
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
    margin-right: 10px;
            ">${msg || 'Click on an image on the page'}, "Escape" to cancel</div>
            <div class="g-cancel-button"><button id="btn-actionCancel" class="outlined-button-small-${idName}"
            >
                <div class="v-text">Cancel</div>
              </button></div>
          </div>
    </div>
  `;

exports.getCancelSnackbarHtml = getCancelSnackbarHtml;

/***/ }),
/* 6 */
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
});
exports.isNil = exports.combine = exports.mergeDeep = exports.pick = exports.omit = exports.timeAgo = exports.getTodayDate = exports.formatNotionDateToIsoDate = exports.formatDateToNotionDate = exports.arrayMove = exports.getChipColor = exports.throttle = exports.sleep = exports.print = exports.makeid = exports.call = exports.dataURItoBlob = exports.ConcurrentQueue = exports.promisifyCallback = exports.promisify = exports.a2r = exports.sortByKey = void 0;

const appConfig_1 = __webpack_require__(7);

function sortByKey(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    if (!x || !y) return 1;
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

exports.sortByKey = sortByKey;

function a2r(arr, key) {
  let m = {};
  arr.forEach(e => {
    if (typeof e == 'string') {
      m[e] = e;
    } else {
      m[e[key]] = e;
    }
  });
  return m;
}

exports.a2r = a2r;

function promisify(fn) {
  return new Promise((accept, cancel) => {
    fn(accept);
  });
}

exports.promisify = promisify;

function promisifyCallback(fn, options) {
  return new Promise((accept, cancel) => {
    fn(options, accept);
  });
}

exports.promisifyCallback = promisifyCallback;

class ConcurrentQueue {
  constructor(concurrency = 1) {
    this.running = 0;
    this.taskQueue = [];
    this._resolve = null;
    this.concurrency = concurrency;
  }

  _checkDone() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this._resolve && this.running == 0 && this.taskQueue.length == 0) {
        this._resolve();

        this._resolve = null;
      }
    });
  }

  _runTask(task) {
    return __awaiter(this, void 0, void 0, function* () {
      this.running++;

      try {
        yield task();
      } catch (e) {
        //assum its an error but continue
        (0, exports.print)('error', e);
      }

      this.running--;

      if (this.taskQueue.length > 0) {
        this._runTask(this.taskQueue.shift());
      } //check to cancel totally empty


      this._checkDone();
    });
  }

  _enqueueTask(task) {
    this.taskQueue.push(task);
  }

  push(task) {
    if (this.running < this.concurrency) this._runTask(task);else this._enqueueTask(task);
  }

  totallyEmpty() {
    return __awaiter(this, void 0, void 0, function* () {
      return new Promise(resolve => {
        if (this._resolve) throw `error queue only one`;
        this._resolve = resolve;

        this._checkDone();
      });
    });
  }

}

exports.ConcurrentQueue = ConcurrentQueue;

function dataURItoBlob(dataURI) {
  var binary = atob(dataURI.split(',')[1]);
  var array = [];

  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  return new Blob([new Uint8Array(array)], {
    type: 'image/jpeg'
  });
}

exports.dataURItoBlob = dataURItoBlob;

function call(cb) {
  new Promise((resolve, cancel) => {
    resolve(cb());
  });
}

exports.call = call;

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

exports.makeid = makeid;
exports.print =  true ? (...args) => {} : undefined;

const sleep = ms => __awaiter(void 0, void 0, void 0, function* () {
  return new Promise(resolve => setTimeout(resolve, ms));
});

exports.sleep = sleep; //dead simple implementation. more robust here: https://stackoverflow.com/questions/27078285/simple-throttle-in-js

function throttle(fn, waitMs) {
  let last;
  let prevFn;
  let prevTimer;
  return (...args) => {
    const now = new Date();

    if (prevFn) {
      prevFn(undefined);
      clearTimeout(prevTimer);
      prevFn = null;
    }

    return new Promise(resolve => {
      const x = last ? Math.max(0, waitMs - (now.getTime() - last.getTime())) : 0;
      prevFn = resolve;
      prevTimer = setTimeout(function () {
        last = now;
        prevFn = null;
        resolve(fn.apply(null, args));
      }, x);
    });
  };
}

exports.throttle = throttle;

function getChipColor(option) {
  return option.color in appConfig_1.notionColors ? appConfig_1.notionColors[option.color] : appConfig_1.notionColors.default;
}

exports.getChipColor = getChipColor;

const arrayMoveMutate = (array, from, to) => {
  const startIndex = to < 0 ? array.length + to : to;
  const item = array.splice(from, 1)[0];
  array.splice(startIndex, 0, item);
};

const arrayMove = (array, from, to) => {
  array = array.slice();
  arrayMoveMutate(array, from, to);
  return array;
};

exports.arrayMove = arrayMove;

function formatDateToNotionDate(date) {
  let ndate = typeof date == 'string' ? new Date(date) : date;
  var nDay = new Date(ndate.getTime());
  var dd = String(nDay.getDate()).padStart(2, '0');
  var mm = String(nDay.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = nDay.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

exports.formatDateToNotionDate = formatDateToNotionDate;

function formatNotionDateToIsoDate(date) {
  return new Date(date).toISOString();
}

exports.formatNotionDateToIsoDate = formatNotionDateToIsoDate;

function getTodayDate(dayPlus = 0) {
  var current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567

  var nDay = new Date(current.getTime() + 86400000 * dayPlus);
  var dd = String(nDay.getDate()).padStart(2, '0');
  var mm = String(nDay.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = nDay.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

exports.getTodayDate = getTodayDate;

function timeAgo(previous) {
  const current = new Date();
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;
  var elapsed = Date.parse(current.toString()) - Date.parse(previous.toString());

  const s = d => d > 1 ? 's' : '';

  if (elapsed < msPerMinute) {
    return 'just now'; //const d = Math.round(elapsed/1000)
    //return  d + ` second${s(d)} ago`;
  } else if (elapsed < msPerHour) {
    const d = Math.round(elapsed / msPerMinute);
    return d + ` minute${s(d)} ago`;
  } else if (elapsed < msPerDay) {
    const d = Math.round(elapsed / msPerHour);
    return Math.round(elapsed / msPerHour) + ` hour${s(d)} ago`;
  } else if (elapsed < msPerMonth) {
    const d = Math.round(elapsed / msPerDay);
    return d + ` day${s(d)} ago`;
  } else if (elapsed < msPerYear) {
    const d = Math.round(elapsed / msPerMonth);
    return d + ` month${s(d)} ago`;
  } else {
    const d = Math.round(elapsed / msPerYear);
    return d + ` year${s(d)} ago`;
  }
}

exports.timeAgo = timeAgo;

const omit = (obj, ...keys) => {
  const ret = {};
  let key;

  for (key in obj) {
    if (!keys.includes(key)) {
      ret[key] = obj[key];
    }
  }

  return ret;
};

exports.omit = omit;

function pick(obj, ...keys) {
  const ret = {};

  for (const key of keys) {
    if (key in obj) {
      ret[key] = obj[key];
    }
  }

  return ret;
}

exports.pick = pick;
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */


function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

exports.mergeDeep = mergeDeep;

function combine(arr) {
  return arr.reduce((res, cur) => mergeDeep(res, cur), {});
}

exports.combine = combine;

function isNil(value) {
  return value === undefined || value === null;
}

exports.isNil = isNil;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorCodesMap = exports.randomNotionColor = exports.notionColors = exports.NOTION_ACTIVE_USER_ID = exports.NOTION_CLIENT_DATA_KEY = exports.COOKIE_KEY = exports.WHATS_NEW_LINK = exports.APP_VERSION_FULL = exports.APP_VERSION = exports.APP_NAME_SLUG = exports.APP_NAME = void 0;
exports.APP_NAME = 'Save to Notion';
exports.APP_NAME_SLUG = 'save-to-notion';
exports.APP_VERSION = '1.1.4';
exports.APP_VERSION_FULL = '1.1.4';
exports.WHATS_NEW_LINK = 'https://www.notion.so/What-s-new-Save-To-Notion-b85cff00e8c24b10a893a6aa18a887fa';
exports.COOKIE_KEY = 'cookie';
exports.NOTION_CLIENT_DATA_KEY = 'notion-client-data-v2';
exports.NOTION_ACTIVE_USER_ID = 'notion-active-user-id';
exports.notionColors = {
  default: 'rgba(206, 205, 202, 0.5)',
  gray: 'rgba(155, 154, 151, 0.4)',
  brown: 'rgba(140, 46, 0, 0.2)',
  yellow: 'rgba(233, 168, 0, 0.2)',
  green: 'rgba(0, 135, 107, 0.2)',
  orange: 'rgba(245, 93, 0, 0.2)',
  blue: 'rgba(0, 120, 223, 0.2)',
  purple: 'rgba(103, 36, 222, 0.2)',
  pink: 'rgba(221, 0, 129, 0.2)',
  red: 'rgba(255, 0, 26, 0.2)'
};

function randomNotionColor() {
  return Object.keys(exports.notionColors)[Math.floor(Math.random() * Object.keys(exports.notionColors).length)];
}

exports.randomNotionColor = randomNotionColor;
exports.errorCodesMap = {
  NO_INTERNET: "Wasn't able to send this item to Notion, ensure you are connected to internet",
  BACKGROUND_ON_SUBMIT_NOT_LOGGED_IN_TO_NOTION: 'it seems you are not logged in to Notion, please log in and try again',
  BACKGROUND_FORMATING_ERROR: 'Formatting error, please contact the developer',
  BACKGROUND_FAILED_TO_FETCH_NOTION_TEMPLATE: 'failed to fetch the Notion Template, please check that it exists',
  BACKGROUND_FAILED_TO_CREATE_PAGE: 'failed to create the page',
  BACKGROUND_FAILED_CODE: "An error occurred while saving the page. Please ensure you are logged in to notion.so in this browser with access to the correct workspace, then try again with the clipper.",
  BACKGROUND_TOKEN_EXPIRED: "Can't access the workspace - please go to notion.so on this browser and check you are logged in to the right workspace"
};

/***/ })
/******/ ]);