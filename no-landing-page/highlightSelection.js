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
/******/ 	return __webpack_require__inject_script_fix(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const finder_1 = __webpack_require__(0);

function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function realColor(elem) {
  const col = window.getComputedStyle(elem, null).getPropertyValue('color');

  if (col.startsWith('rgb')) {
    try {
      const [r, g, b] = col.match(/\((.*)\)/)[1].split(',').map(e => parseInt(e));
      return rgbToHex(r, g, b);
    } catch (e) {}
  }

  return '#000';
}

function haveDarkText(elem) {
  let c = realColor(elem);
  c = c.substring(1); // strip #

  var rgb = parseInt(c, 16); // convert rrggbb to decimal

  var r = rgb >> 16 & 0xff; // extract red

  var g = rgb >> 8 & 0xff; // extract green

  var b = rgb >> 0 & 0xff; // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma < 160;
}

function highlightRange(range, highlightId) {
  var newNode = document.createElement('highlight');
  newNode.setAttribute('x-id', highlightId.replace(/-/g, ''));
  const isDarkText = haveDarkText(range.startContainer.parentNode);
  const colors = {
    yellowish: '#FFE7A3',
    grayish: '#99844c'
  };
  newNode.setAttribute('style', `background-color: ${isDarkText ? colors.yellowish : colors.grayish}; display: inline;`);
  range.surroundContents(newNode);
}

function removeSelection(highlightId) {
  const highlightNodes = document.querySelectorAll(`highlight[x-id="${highlightId.replace(/-/g, '')}"]`); // console.log('remove', highlightId, highlightNodes)

  highlightNodes.forEach(highlightNode => {
    const parent = highlightNode.parentNode;

    while (highlightNode.firstChild) {
      parent.insertBefore(highlightNode.firstChild, highlightNode);
    }

    parent.removeChild(highlightNode);
  });
}

function getContainerOrText(css, isText) {
  const x = document.querySelector(css);

  if (x && isText) {
    return x.childNodes[0];
  }

  return x;
}

function getRangeFromSelectionRangePresentation(range) {
  const rangeObject = new Range();
  rangeObject.setStart(getContainerOrText(range.startContainerCss, range.startContainerIsText), range.startOffset);
  rangeObject.setEnd(getContainerOrText(range.endContainerCss, range.endContainerIsText), range.endOffset);
  return rangeObject;
}

function getSafeRanges(dangerous) {
  var a = dangerous.commonAncestorContainer; // Starts -- Work inward from the start, selecting the largest safe range

  var s = new Array(0),
      rs = new Array(0);
  if (dangerous.startContainer != a) for (var i = dangerous.startContainer; i != a; i = i.parentNode) s.push(i);
  if (0 < s.length) for (var i = 0; i < s.length; i++) {
    var xs = document.createRange();

    if (i) {
      xs.setStartAfter(s[i - 1]);
      xs.setEndAfter(s[i].lastChild);
    } else {
      xs.setStart(s[i], dangerous.startOffset);
      xs.setEndAfter(s[i].nodeType == Node.TEXT_NODE ? s[i] : s[i].lastChild);
    }

    rs.push(xs);
  } // Ends -- basically the same code reversed

  var e = new Array(0),
      re = new Array(0);
  if (dangerous.endContainer != a) for (var i = dangerous.endContainer; i != a; i = i.parentNode) e.push(i);
  if (0 < e.length) for (var i = 0; i < e.length; i++) {
    var xe = document.createRange();

    if (i) {
      xe.setStartBefore(e[i].firstChild);
      xe.setEndBefore(e[i - 1]);
    } else {
      xe.setStartBefore(e[i].nodeType == Node.TEXT_NODE ? e[i] : e[i].firstChild);
      xe.setEnd(e[i], dangerous.endOffset);
    }

    re.unshift(xe);
  } // Middle -- the uncaptured middle

  if (0 < s.length && 0 < e.length) {
    var xm = document.createRange();
    xm.setStartAfter(s[s.length - 1]);
    xm.setEndBefore(e[e.length - 1]);
  } else {
    return [dangerous];
  } // Concat


  rs.push(xm);
  let response = rs.concat(re); // Send to Console

  return response;
}

function findAllHighlights() {
  const highlights = __highlights;
  highlights.forEach(highlight => {
    if (!highlight.selectionRange) {
      return;
    }

    try {
      const range = getRangeFromSelectionRangePresentation(highlight.selectionRange); // console.log('try to find', highlight, range)

      addHighlightColorToSelectionRange(range, highlight.id);
    } catch (e) {// console.log('error', e)
      // ignore for now
    }
  });
}

function getNodeCss(node) {
  if (node.nodeType == Node.TEXT_NODE) {
    return getNodeCss(node.parentNode);
  }

  return (0, finder_1.finder)(node);
}

function getSelectionRangeRepresentation() {
  const selRange = window.getSelection().getRangeAt(0);
  const commonAncestorContainerCss = getNodeCss(selRange.commonAncestorContainer);
  const startContainerCss = selRange.startContainer == selRange.commonAncestorContainer ? commonAncestorContainerCss : getNodeCss(selRange.startContainer);
  const endContainerCss = selRange.endContainer == selRange.commonAncestorContainer ? commonAncestorContainerCss : selRange.endContainer == selRange.startContainer ? startContainerCss : getNodeCss(selRange.endContainer);
  if (!commonAncestorContainerCss || !startContainerCss || !endContainerCss) return null;
  return {
    type: 'range',
    collapsed: selRange.collapsed,
    commonAncestorContainerCss,
    commonAncestorContainerIsText: selRange.commonAncestorContainer.nodeType == Node.TEXT_NODE,
    endContainerCss,
    endContainerIsText: selRange.endContainer.nodeType == Node.TEXT_NODE,
    startContainerCss,
    startContainerIsText: selRange.startContainer.nodeType == Node.TEXT_NODE,
    startOffset: selRange.startOffset,
    endOffset: selRange.endOffset
  };
}

function addHighlightColorToSelectionRange(range, highlightId) {
  var safeRanges = getSafeRanges(range);

  for (var i = 0; i < safeRanges.length; i++) {
    highlightRange(safeRanges[i], highlightId);
  }
}

function highlightSelection() {
  if (window.location.href.endsWith('.pdf')) {
    return;
  }

  if (__action == 'getSelectionRangeRepresentation') {
    return getSelectionRangeRepresentation();
  }

  if (__action == 'removeSelection') {
    return removeSelection(__highlightId);
  }

  if (__highlights) {
    return findAllHighlights();
  }

  var userSelection = window.getSelection();
  addHighlightColorToSelectionRange(userSelection.getRangeAt(0), __highlightId);
  window.getSelection().removeAllRanges();
} // @ts-ignore


const response = highlightSelection();
return response;

/***/ })

/******/ });