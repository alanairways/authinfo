var n, l$1, u$1, t$1, r$1, o$2, f$1, e$1, c$1 = {}, s$1 = [], a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h$1(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function v$1(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y$1(l2, u2, i2) {
  var t2, r2, o2, f2 = {};
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (o2 in l2.defaultProps)
      void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
  return p$1(l2, f2, t2, r2, null);
}
function p$1(n2, i2, t2, r2, o2) {
  var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u$1 : o2 };
  return null == o2 && null != l$1.vnode && l$1.vnode(f2), f2;
}
function d$1() {
  return { current: null };
}
function _$2(n2) {
  return n2.children;
}
function k$2(n2, l2) {
  this.props = n2, this.context = l2;
}
function b$1(n2, l2) {
  if (null == l2)
    return n2.__ ? b$1(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? b$1(n2) : null;
}
function g$2(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return g$2(n2);
  }
}
function m$1(n2) {
  (!n2.__d && (n2.__d = true) && t$1.push(n2) && !w$2.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$2)(w$2);
}
function w$2() {
  var n2, l2, u2, i2, r2, o2, e2, c2;
  for (t$1.sort(f$1); n2 = t$1.shift(); )
    n2.__d && (l2 = t$1.length, i2 = void 0, r2 = void 0, e2 = (o2 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (r2 = h$1({}, o2)).__v = o2.__v + 1, L$1(c2, o2, r2, u2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [e2] : null, i2, null == e2 ? b$1(o2) : e2, o2.__h), M$1(i2, o2), o2.__e != e2 && g$2(o2)), t$1.length > l2 && t$1.sort(f$1));
  w$2.__r = 0;
}
function x$2(n2, l2, u2, i2, t2, r2, o2, f2, e2, a2) {
  var h2, v2, y2, d2, k2, g2, m2, w2 = i2 && i2.__k || s$1, x2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (d2 = u2.__k[h2] = null == (d2 = l2[h2]) || "boolean" == typeof d2 || "function" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p$1(null, d2, null, null, d2) : Array.isArray(d2) ? p$1(_$2, { children: d2 }, null, null, null) : d2.__b > 0 ? p$1(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
      if (d2.__ = u2, d2.__b = u2.__b + 1, null === (y2 = w2[h2]) || y2 && d2.key == y2.key && d2.type === y2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < x2; v2++) {
          if ((y2 = w2[v2]) && d2.key == y2.key && d2.type === y2.type) {
            w2[v2] = void 0;
            break;
          }
          y2 = null;
        }
      L$1(n2, d2, y2 = y2 || c$1, t2, r2, o2, f2, e2, a2), k2 = d2.__e, (v2 = d2.ref) && y2.ref != v2 && (m2 || (m2 = []), y2.ref && m2.push(y2.ref, null, d2), m2.push(v2, d2.__c || k2, d2)), null != k2 ? (null == g2 && (g2 = k2), "function" == typeof d2.type && d2.__k === y2.__k ? d2.__d = e2 = A$2(d2, e2, n2) : e2 = C$1(n2, d2, y2, w2, k2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = b$1(y2));
    }
  for (u2.__e = g2, h2 = x2; h2--; )
    null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = $$1(i2).nextSibling), S(w2[h2], w2[h2]));
  if (m2)
    for (h2 = 0; h2 < m2.length; h2++)
      O$1(m2[h2], m2[++h2], m2[++h2]);
}
function A$2(n2, l2, u2) {
  for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? A$2(i2, l2, u2) : C$1(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function P$1(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    P$1(n3, l2);
  }) : l2.push(n2)), l2;
}
function C$1(n2, l2, u2, i2, t2, r2) {
  var o2, f2, e2;
  if (void 0 !== l2.__d)
    o2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != r2 || null == t2.parentNode)
    n:
      if (null == r2 || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return void 0 !== o2 ? o2 : t2.nextSibling;
}
function $$1(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = $$1(u2)))
        return i2;
  }
  return null;
}
function H$1(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || T$2(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || T$2(n2, r2, l2[r2], u2[r2], i2);
}
function I$1(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$1.test(l2) ? u2 : u2 + "px";
}
function T$2(n2, l2, u2, i2, t2) {
  var r2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || I$1(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || I$1(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? z$2 : j$2, r2) : n2.removeEventListener(l2, r2 ? z$2 : j$2, r2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j$2(n2) {
  return this.l[n2.type + false](l$1.event ? l$1.event(n2) : n2);
}
function z$2(n2) {
  return this.l[n2.type + true](l$1.event ? l$1.event(n2) : n2);
}
function L$1(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
  var s2, a2, v2, y2, p2, d2, b2, g2, m2, w2, A2, P2, C2, $2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l$1.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof I2) {
        if (g2 = u2.props, m2 = (s2 = I2.contextType) && t2[s2.__c], w2 = s2 ? m2 ? m2.props.value : s2.__ : t2, i2.__c ? b2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(g2, w2) : (u2.__c = a2 = new k$2(g2, w2), a2.constructor = I2, a2.render = q$2), m2 && m2.sub(a2), a2.props = g2, a2.state || (a2.state = {}), a2.context = w2, a2.__n = t2, v2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h$1({}, a2.__s)), h$1(a2.__s, I2.getDerivedStateFromProps(g2, a2.__s))), y2 = a2.props, p2 = a2.state, a2.__v = u2, v2)
          null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && g2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(g2, w2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(g2, a2.__s, w2) || u2.__v === i2.__v) {
            for (u2.__v !== i2.__v && (a2.props = g2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < a2._sb.length; A2++)
              a2.__h.push(a2._sb[A2]);
            a2._sb = [], a2.__h.length && f2.push(a2);
            break n;
          }
          null != a2.componentWillUpdate && a2.componentWillUpdate(g2, a2.__s, w2), null != a2.componentDidUpdate && a2.__h.push(function() {
            a2.componentDidUpdate(y2, p2, d2);
          });
        }
        if (a2.context = w2, a2.props = g2, a2.__P = n2, P2 = l$1.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (a2.state = a2.__s, a2.__d = false, P2 && P2(u2), s2 = a2.render(a2.props, a2.state, a2.context), $2 = 0; $2 < a2._sb.length; $2++)
            a2.__h.push(a2._sb[$2]);
          a2._sb = [];
        } else
          do {
            a2.__d = false, P2 && P2(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
          } while (a2.__d && ++C2 < 25);
        a2.state = a2.__s, null != a2.getChildContext && (t2 = h$1(h$1({}, t2), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d2 = a2.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s2 && s2.type === _$2 && null == s2.key ? s2.props.children : s2, x$2(n2, Array.isArray(H2) ? H2 : [H2], u2, i2, t2, r2, o2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), b2 && (a2.__E = a2.__ = null), a2.__e = false;
      } else
        null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N$1(i2.__e, u2, i2, t2, r2, o2, f2, c2);
    (s2 = l$1.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$1.__e(n3, u2, i2);
  }
}
function M$1(n2, u2) {
  l$1.__c && l$1.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$1.__e(n3, u3.__v);
    }
  });
}
function N$1(l2, u2, i2, t2, r2, o2, f2, e2) {
  var s2, a2, h2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if ("svg" === d2 && (r2 = true), null != o2) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, e2 = false;
  }
  if (null === d2)
    y2 === p2 || e2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i2.props || c$1).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e2) {
      if (null != o2)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
    }
    if (H$1(l2, p2, y2, r2, e2), h2)
      u2.__k = [];
    else if (_2 = u2.props.children, x$2(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && "foreignObject" !== d2, o2, f2, o2 ? o2[0] : i2.__k && b$1(i2, 0), e2), null != o2)
      for (_2 = o2.length; _2--; )
        null != o2[_2] && v$1(o2[_2]);
    e2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== l2.value || "progress" === d2 && !_2 || "option" === d2 && _2 !== y2.value) && T$2(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && T$2(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function O$1(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$1.__e(n3, i2);
  }
}
function S(n2, u2, i2) {
  var t2, r2;
  if (l$1.unmount && l$1.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O$1(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$1.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && S(t2[r2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || v$1(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q$2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$2(u2, i2, t2) {
  var r2, o2, f2;
  l$1.__ && l$1.__(u2, i2), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L$1(i2, u2 = (!r2 && t2 || i2).__k = y$1(_$2, null, [u2]), o2 || c$1, c$1, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), M$1(f2, u2);
}
function D$1(n2, l2) {
  B$2(n2, l2, D$1);
}
function E$1(l2, u2, i2) {
  var t2, r2, o2, f2 = h$1({}, l2.props);
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), p$1(l2.type, f2, t2 || l2.key, r2 || l2.ref, null);
}
function F$2(n2, l2) {
  var u2 = { __c: l2 = "__cC" + e$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, m$1(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = s$1.slice, l$1 = { __e: function(n2, l2, u2, i2) {
  for (var t2, r2, o2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), o2 = t2.__d), o2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$1 = 0, k$2.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n2 && (n2 = n2(h$1({}, u2), this.props)), n2 && h$1(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), m$1(this));
}, k$2.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$1(this));
}, k$2.prototype.render = _$2, t$1 = [], o$2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, w$2.__r = 0, e$1 = 0;
var t, r, u, i, o$1 = 0, f = [], c = [], e = l$1.__b, a = l$1.__r, v = l$1.diffed, l = l$1.__c, m = l$1.unmount;
function d(t2, u2) {
  l$1.__h && l$1.__h(r, t2, o$1 || u2), o$1 = 0;
  var i2 = r.__H || (r.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c }), i2.__[t2];
}
function h(n2) {
  return o$1 = 1, s(B$1, n2);
}
function s(n2, u2, i2) {
  var o2 = d(t++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B$1(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r, !r.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r.u = true;
    var c2 = r.shouldComponentUpdate, e2 = r.componentWillUpdate;
    r.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function p(u2, i2) {
  var o2 = d(t++, 3);
  !l$1.__s && z$1(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__H.__h.push(o2));
}
function y(u2, i2) {
  var o2 = d(t++, 4);
  !l$1.__s && z$1(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r.__h.push(o2));
}
function _$1(n2) {
  return o$1 = 5, F$1(function() {
    return { current: n2 };
  }, []);
}
function A$1(n2, t2, r2) {
  o$1 = 6, y(function() {
    return "function" == typeof n2 ? (n2(t2()), function() {
      return n2(null);
    }) : n2 ? (n2.current = t2(), function() {
      return n2.current = null;
    }) : void 0;
  }, null == r2 ? r2 : r2.concat(n2));
}
function F$1(n2, r2) {
  var u2 = d(t++, 7);
  return z$1(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
}
function T$1(n2, t2) {
  return o$1 = 8, F$1(function() {
    return n2;
  }, t2);
}
function q$1(n2) {
  var u2 = r.context[n2.__c], i2 = d(t++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r)), u2.props.value) : n2.__;
}
function x$1(t2, r2) {
  l$1.useDebugValue && l$1.useDebugValue(r2 ? r2(t2) : t2);
}
function V$1() {
  var n2 = d(t++, 11);
  if (!n2.__) {
    for (var u2 = r.__v; null !== u2 && !u2.__m && null !== u2.__; )
      u2 = u2.__;
    var i2 = u2.__m || (u2.__m = [0, 0]);
    n2.__ = "P" + i2[0] + "-" + i2[1]++;
  }
  return n2.__;
}
function b() {
  for (var t2; t2 = f.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k$1), t2.__H.__h.forEach(w$1), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$1.__e(r2, t2.__v);
      }
}
l$1.__b = function(n2) {
  r = null, e && e(n2);
}, l$1.__r = function(n2) {
  a && a(n2), t = 0;
  var i2 = (r = n2.__c).__H;
  i2 && (u === r ? (i2.__h = [], r.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k$1), i2.__h.forEach(w$1), i2.__h = [])), u = r;
}, l$1.diffed = function(t2) {
  v && v(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f.push(o2) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j$1)(b)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c;
  })), u = r = null;
}, l$1.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k$1), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w$1(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$1.__e(u2, t3.__v);
    }
  }), l && l(t2, r2);
}, l$1.unmount = function(t2) {
  m && m(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k$1(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$1.__e(r2, u2.__v));
};
var g$1 = "function" == typeof requestAnimationFrame;
function j$1(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g$1 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g$1 && (t2 = requestAnimationFrame(r2));
}
function k$1(n2) {
  var t2 = r, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r = t2;
}
function w$1(n2) {
  var t2 = r;
  n2.__c = n2.__(), r = t2;
}
function z$1(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B$1(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
function g(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C(n2, t2) {
  for (var e2 in n2)
    if ("__source" !== e2 && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && n2[r2] !== t2[r2])
      return true;
  return false;
}
function E(n2, t2) {
  return n2 === t2 && (0 !== n2 || 1 / n2 == 1 / t2) || n2 != n2 && t2 != t2;
}
function w(n2) {
  this.props = n2;
}
function x(n2, e2) {
  function r2(n3) {
    var t2 = this.props.ref, r3 = t2 == n3.ref;
    return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : C(this.props, n3);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, y$1(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
}
(w.prototype = new k$2()).isPureReactComponent = true, w.prototype.shouldComponentUpdate = function(n2, t2) {
  return C(this.props, n2) || C(this.state, t2);
};
var R = l$1.__b;
l$1.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k(n2) {
  function t2(t3) {
    var e2 = g({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = N, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var A = function(n2, t2) {
  return null == n2 ? null : P$1(P$1(n2).map(t2));
}, O = { map: A, forEach: A, count: function(n2) {
  return n2 ? P$1(n2).length : 0;
}, only: function(n2) {
  var t2 = P$1(n2);
  if (1 !== t2.length)
    throw "Children.only";
  return t2[0];
}, toArray: P$1 }, T = l$1.__e;
l$1.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  T(n2, t2, e2, r2);
};
var I = l$1.unmount;
function L(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L(n3, t2, e2);
  })), n2;
}
function U(n2, t2, e2) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function M(n2) {
  var e2, r2, u2;
  function o2(o3) {
    if (e2 || (e2 = n2()).then(function(n3) {
      r2 = n3.default || n3;
    }, function(n3) {
      u2 = n3;
    }), u2)
      throw u2;
    if (!r2)
      throw e2;
    return y$1(r2, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}
function V() {
  this.u = null, this.o = null;
}
l$1.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), I && I(n2);
}, (D.prototype = new k$2()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.t && (r2.t = []), r2.t.push(e2);
  var u2 = F(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, c2 = true === t2.__h;
  r2.__u++ || c2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, D.prototype.componentWillUnmount = function() {
  this.t = [];
}, D.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && y$1(_$2, null, n2.fallback);
  return i2 && (i2.__h = null), [y$1(_$2, null, e2.__a ? null : n2.children), i2];
};
var W = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function P(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function j(n2) {
  var e2 = this, r2 = n2.i;
  e2.componentWillUnmount = function() {
    B$2(null, e2.l), e2.l = null, e2.i = null;
  }, e2.i && e2.i !== r2 && e2.componentWillUnmount(), n2.__v ? (e2.l || (e2.i = r2, e2.l = { nodeType: 1, parentNode: r2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.i.removeChild(n3);
  } }), B$2(y$1(P, { context: e2.context }, n2.__v), e2.l)) : e2.l && e2.componentWillUnmount();
}
function z(n2, e2) {
  var r2 = y$1(j, { __v: n2, i: e2 });
  return r2.containerInfo = e2, r2;
}
(V.prototype = new k$2()).__a = function(n2) {
  var t2 = this, e2 = F(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), W(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, V.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = P$1(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    W(n2, e2, t2);
  });
};
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Y = /[A-Z0-9]/g, $ = "undefined" != typeof document, q = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function G(n2, t2, e2) {
  return null == t2.__k && (t2.textContent = ""), B$2(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
function J(n2, t2, e2) {
  return D$1(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
}
k$2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(k$2.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var K = l$1.event;
function Q() {
}
function X$1() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
l$1.event = function(n2) {
  return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X$1, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
};
var tn, en = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, rn = l$1.vnode;
l$1.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {};
    for (var o2 in t2) {
      var i2 = t2[o2];
      if (!("value" === o2 && "defaultValue" in t2 && null == i2 || $ && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
        var l2 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : "ondoubleclick" === l2 ? o2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || q(t2.type) ? "onfocus" === l2 ? o2 = "onfocusin" : "onblur" === l2 ? o2 = "onfocusout" : Z.test(o2) ? o2 = l2 : -1 === e2.indexOf("-") && H.test(o2) ? o2 = o2.replace(Y, "-$&").toLowerCase() : null === i2 && (i2 = void 0) : l2 = o2 = "oninput", "oninput" === l2 && u2[o2 = l2] && (o2 = "oninputCapture"), u2[o2] = i2;
      }
    }
    "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = P$1(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), "select" == e2 && null != u2.defaultValue && (u2.value = P$1(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", en)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
  }(n2), n2.$$typeof = B, rn && rn(n2);
};
var un = l$1.__r;
l$1.__r = function(n2) {
  un && un(n2), tn = n2.__c;
};
var on = l$1.diffed;
l$1.diffed = function(n2) {
  on && on(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), tn = null;
};
var ln = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return tn.__n[n2.__c].props.value;
} } } };
function fn(n2) {
  return y$1.bind(null, n2);
}
function an(n2) {
  return !!n2 && n2.$$typeof === B;
}
function sn(n2) {
  return an(n2) ? E$1.apply(null, arguments) : n2;
}
function hn(n2) {
  return !!n2.__k && (B$2(null, n2), true);
}
function vn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var dn = function(n2, t2) {
  return n2(t2);
}, pn = function(n2, t2) {
  return n2(t2);
}, mn = _$2;
function yn(n2) {
  n2();
}
function _n(n2) {
  return n2;
}
function bn() {
  return [false, yn];
}
var Sn = y;
function gn(n2, t2) {
  var e2 = t2(), r2 = h({ h: { __: e2, v: t2 } }), u2 = r2[0].h, o2 = r2[1];
  return y(function() {
    u2.__ = e2, u2.v = t2, E(u2.__, t2()) || o2({ h: u2 });
  }, [n2, e2, t2]), p(function() {
    return E(u2.__, u2.v()) || o2({ h: u2 }), n2(function() {
      E(u2.__, u2.v()) || o2({ h: u2 });
    });
  }, [n2]), e2;
}
var Cn = { useState: h, useId: V$1, useReducer: s, useEffect: p, useLayoutEffect: y, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: gn, startTransition: yn, useRef: _$1, useImperativeHandle: A$1, useMemo: F$1, useCallback: T$1, useContext: q$1, useDebugValue: x$1, version: "17.0.2", Children: O, render: G, hydrate: J, unmountComponentAtNode: hn, createPortal: z, createElement: y$1, createContext: F$2, createFactory: fn, cloneElement: sn, createRef: d$1, Fragment: _$2, isValidElement: an, findDOMNode: vn, Component: k$2, PureComponent: w, memo: x, forwardRef: k, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: D, SuspenseList: V, lazy: M, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ln };
const index = "";
const initElement = (elem) => {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  B$2(elem, appContainer);
};
function bgAsk(ev, props, opts) {
  const x2 = new Promise((accept) => {
    const r2 = [...(opts == null ? void 0 : opts.extensionId) ? [opts == null ? void 0 : opts.extensionId] : [], {
      event: ev,
      props,
      destination: "background",
      v2: true
    }, (resp) => {
      accept(resp);
    }];
    chrome.runtime.sendMessage(...r2);
  });
  if (opts == null ? void 0 : opts.debug) {
    x2.then((resp) => {
    });
  }
  return x2;
}
function classNames(...args) {
  var classes = [];
  for (var i2 = 0; i2 < arguments.length; i2++) {
    var arg = arguments[i2];
    if (!arg)
      continue;
    var argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        var inner = classNames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (argType === "object") {
      if (arg.toString === Object.prototype.toString) {
        for (var key in arg) {
          if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      } else {
        classes.push(arg.toString());
      }
    }
  }
  return classes.join(" ");
}
const isEmptyString = (value) => typeof value === "string" && value.length === 0;
const isNullOrEmptyString = (value) => value == null || isEmptyString(value);
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function mergeDeep(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source) && !isReactObject(source)) {
    for (const key in source) {
      if (isObject(source[key]) && !isReactObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
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
function isReactObject(source) {
  return source.$$typeof != null;
}
function combine(...arr) {
  return arr.reduce((res, cur) => mergeDeep(res, cur), {});
}
const ComponentPropsToStylePropsMap = {
  alignContent: "alignContent",
  alignItems: "alignItems",
  alignSelf: "alignSelf",
  area: "gridArea",
  autoColumns: "gridAutoColumns",
  autoFlow: "gridAutoFlow",
  autoRows: "gridAutoRows",
  backgroundColor: "backgroundColor",
  backgroundImage: "backgroundImage",
  basis: "flexBasis",
  textOverflow: "textOverflow",
  border: "border",
  ...{
    borderTop: "borderTop",
    borderBottom: "borderBottom",
    borderLeft: "borderLeft",
    borderRight: "borderRight"
  },
  borderRadius: "borderRadius",
  bottom: "bottom",
  boxShadow: "boxShadow",
  color: "color",
  column: "gridColumn",
  columnEnd: "gridColumnEnd",
  columnGap: "columnGap",
  columnSpan: "gridColumn",
  // Will set gridColumn if no `row` prop given
  columnStart: "gridColumnStart",
  direction: "flexDirection",
  display: "display",
  flex: "flex",
  fontFamily: "fontFamily",
  fontSize: "fontSize",
  fontStyle: "fontStyle",
  fontWeight: "fontWeight",
  gap: "gap",
  grow: "flexGrow",
  height: "height",
  justifyContent: "justifyContent",
  left: "left",
  letterSpacing: "letterSpacing",
  lineHeight: "lineHeight",
  margin: "margin",
  marginBlock: "marginBlock",
  marginBlockEnd: "marginBlockEnd",
  marginBlockStart: "marginBlockStart",
  marginBottom: "marginBlockEnd",
  marginInline: "marginInline",
  marginInlineEnd: "marginInlineEnd",
  marginInlineStart: "marginInlineStart",
  marginLeft: "marginInlineStart",
  marginRight: "marginInlineEnd",
  marginTop: "marginBlockStart",
  maxHeight: "maxHeight",
  maxWidth: "maxWidth",
  minHeight: "minHeight",
  minWidth: "minWidth",
  objectFit: "objectFit",
  objectPosition: "objectPosition",
  opacity: "opacity",
  order: "order",
  overflow: "overflow",
  padding: "padding",
  paddingBlock: "paddingBlock",
  paddingBlockEnd: "paddingBlockEnd",
  paddingBlockStart: "paddingBlockStart",
  paddingBottom: "paddingBlockEnd",
  paddingInline: "paddingInline",
  paddingInlineEnd: "paddingInlineEnd",
  paddingInlineStart: "paddingInlineStart",
  paddingLeft: "paddingInlineStart",
  paddingRight: "paddingInlineEnd",
  paddingTop: "paddingBlockStart",
  position: "position",
  resize: "resize",
  right: "right",
  row: "gridRow",
  rowEnd: "gridRowEnd",
  rowGap: "rowGap",
  rowSpan: "gridRow",
  // Will set gridRow if no `row` prop given
  rowStart: "gridRowStart",
  shrink: "flexShrink",
  templateAreas: "gridTemplateAreas",
  templateColumns: "gridTemplateColumns",
  templateRows: "gridTemplateRows",
  textAlign: "textAlign",
  textDecoration: "textDecoration",
  textTransform: "textTransform",
  top: "top",
  transform: "transform",
  transformOrigin: "transformOrigin",
  width: "width",
  whiteSpace: "whiteSpace",
  wrap: "flexWrap"
};
const getMediaQueries = ({
  breakpoints: breakpoints2
}) => {
  const sortedBreakpoints = Object.keys(breakpoints2).sort((a2, b2) => breakpoints2[b2] - breakpoints2[a2]);
  return sortedBreakpoints.map((breakpoint, index2) => {
    let query = "";
    let minWidth = breakpoints2[breakpoint];
    const nextBreakpoint = sortedBreakpoints[index2 - 1];
    const maxWidth = nextBreakpoint ? breakpoints2[nextBreakpoint] - 1 : null;
    if (minWidth >= 0) {
      query = `(min-width: ${minWidth}px)`;
    }
    if (maxWidth !== null) {
      if (query) {
        query += " and ";
      }
      query += `(max-width: ${maxWidth}px)`;
    }
    return {
      breakpoint,
      query,
      maxWidth,
      minWidth
    };
  });
};
const useBreakpoint = ({
  breakpoints: breakpoints2,
  defaultBreakpoint
}) => {
  const supportMatchMedia = typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
  const matchMedia = supportMatchMedia ? window.matchMedia : null;
  const mediaQueries = Cn.useMemo(() => getMediaQueries({
    breakpoints: breakpoints2
  }), [breakpoints2]);
  const [breakpoint, setBreakpoint] = Cn.useState(defaultBreakpoint);
  const updateBreakpoint = Cn.useCallback((matches, breakpoint2) => {
    if (matches) {
      setBreakpoint(breakpoint2);
    }
  }, [setBreakpoint]);
  useIsomorphicEffect(() => {
    if (!matchMedia)
      return;
    const unsubscribeList = mediaQueries.map(({
      query,
      breakpoint: breakpoint2
    }) => {
      const queryList = matchMedia(query);
      updateBreakpoint(queryList.matches, breakpoint2);
      const handleMediaChange = (event) => {
        if (event.matches) {
          setBreakpoint(breakpoint2);
        }
      };
      queryList.addEventListener("change", handleMediaChange);
      return () => queryList.removeEventListener("change", handleMediaChange);
    });
    return () => {
      unsubscribeList.forEach((unsubscribe) => unsubscribe());
    };
  }, [breakpoints2, setBreakpoint, matchMedia, mediaQueries]);
  Cn.useDebugValue(breakpoint, (breakpoint2) => breakpoint2);
  return breakpoint;
};
const useIsomorphicEffect = typeof window === "undefined" ? Cn.useEffect : Cn.useLayoutEffect;
const useTransformStyleProps = (props) => {
  const {
    rowSpan,
    columnSpan,
    row,
    column,
    ...rest
  } = props;
  const {
    rowFromSpanValue,
    columnFromSpanValue
  } = Cn.useMemo(() => {
    return {
      rowFromSpanValue: convertGridSpan(rowSpan),
      columnFromSpanValue: convertGridSpan(columnSpan)
    };
  }, [rowSpan, columnSpan]);
  return {
    row: !isNullOrEmptyString(row) ? row : rowFromSpanValue,
    column: !isNullOrEmptyString(column) ? column : columnFromSpanValue,
    ...rest
  };
};
const useStyles = (props, style) => {
  const {
    breakpoints: {
      values: breakpoints2,
      defaultBreakpoint
    }
  } = defaultTheme;
  const breakpoint = useBreakpoint({
    breakpoints: breakpoints2,
    defaultBreakpoint
  });
  const propStyles = useTransformStyleProps(props);
  return Cn.useMemo(() => convertStylePropsToStyleObj({
    props: propStyles,
    style,
    breakpoint,
    // @ts-ignore
    breakpoints: breakpoints2
  }), [propStyles, style, breakpoints2, breakpoint]);
};
const isSpanPrimitiveValue = (spanValue) => {
  return spanValue === "auto" || typeof spanValue === "number" && !isNaN(spanValue) || typeof spanValue === "string" && !isNaN(parseFloat(spanValue));
};
const convertGridSpan = (spanValue) => {
  if (isSpanPrimitiveValue(spanValue)) {
    return getGridSpan(spanValue);
  }
  if (Array.isArray(spanValue)) {
    return spanValue.map((value) => getGridSpan(value));
  }
  if (typeof spanValue === "object" && spanValue != null) {
    const newObj = {};
    Object.entries(spanValue).forEach(([key, value]) => {
      newObj[key] = getGridSpan(value);
    });
    return newObj;
  }
  return null;
};
const getGridSpan = (spanValue) => {
  return spanValue === "auto" ? "auto" : `span ${spanValue}`;
};
const convertStylePropsToStyleObj = ({
  props = {},
  style = {},
  breakpoint,
  breakpoints: breakpoints2
}) => {
  const nonStyleProps = {};
  Object.keys(props).filter((propKey) => props[propKey] != null).forEach((propKey) => {
    if (!(propKey in ComponentPropsToStylePropsMap)) {
      nonStyleProps[propKey] = props[propKey];
    } else if (!isEmptyString(props[propKey])) {
      let value = props[propKey];
      value = getValueAtCurrentBreakpoint(value, breakpoint, breakpoints2, propKey);
      const reactStyleProp = ComponentPropsToStylePropsMap[propKey];
      style = {
        ...style,
        [reactStyleProp]: value
      };
    }
  });
  return {
    propStyles: style,
    nonStyleProps
  };
};
function isDesignToken(arg) {
  if (typeof arg === "object" && arg !== null) {
    return arg.hasOwnProperty("value");
  } else {
    return false;
  }
}
function getValueAtCurrentBreakpoint(values, breakpoint, breakpoints2, propKey) {
  if (isDesignToken(values)) {
    return values.toString();
  }
  if (typeof values !== "object") {
    return getCSSVariableIfValueIsThemeKey(propKey, values);
  }
  let breakpointCompatValues = {};
  const breakpointsAscending = Object.keys(breakpoints2).sort((a2, b2) => breakpoints2[a2] - breakpoints2[b2]);
  if (Array.isArray(values)) {
    values.map((value, index2) => {
      breakpointCompatValues[breakpointsAscending[index2]] = value;
    });
  } else {
    breakpointCompatValues = values;
  }
  return getClosestValueByBreakpoint(
    // @ts-ignore
    propKey,
    breakpointCompatValues,
    breakpoint,
    breakpoints2
  );
}
function getClosestValueByBreakpoint(propKey, values, breakpoint, breakpoints2) {
  if (values.hasOwnProperty(breakpoint)) {
    const value = values[breakpoint];
    return isDesignToken(value) ? value.toString() : getCSSVariableIfValueIsThemeKey(propKey, value);
  }
  const breakpointsDesc = Object.keys(breakpoints2).sort((a2, b2) => breakpoints2[b2] - breakpoints2[a2]);
  const lowerBreakpoints = breakpointsDesc.slice(breakpointsDesc.indexOf(breakpoint));
  for (const breakpoint2 of lowerBreakpoints) {
    if (values.hasOwnProperty(breakpoint2)) {
      const value = values[breakpoint2];
      return isDesignToken(value) ? value.toString() : getCSSVariableIfValueIsThemeKey(propKey, value);
    }
  }
  return null;
}
const kebabCase = (string) => string.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
const CSS_VARIABLE_PREFIX = "amplify";
function cssNameTransform({
  path = []
}) {
  return `${kebabCase([CSS_VARIABLE_PREFIX, ...path].join(" "))}`;
}
function getCSSVariableIfValueIsThemeKey(propKey, value) {
  if (typeof value !== "string") {
    return value;
  }
  if (value.includes(" ")) {
    return value.split(" ").map((val) => getCSSVariableIfValueIsThemeKey(propKey, val)).join(" ");
  }
  const path = value.split(".");
  let {
    tokens
  } = defaultTheme;
  tokens = tokens[stylePropsToThemeKeys[propKey]];
  for (let i2 = 0; i2 < path.length; i2++) {
    if (tokens) {
      tokens = tokens[path[i2]];
      continue;
    }
    break;
  }
  return isDesignToken(tokens) ? `var(--${cssNameTransform({
    path: [stylePropsToThemeKeys[propKey], ...path]
  })})` : value;
}
const breakpoints = {
  values: {
    base: 0,
    small: 480,
    // breakpoint unit is px
    medium: 768,
    large: 992,
    xl: 1280,
    xxl: 1536
  },
  defaultBreakpoint: "base"
};
const defaultTheme = {
  tokens: {},
  breakpoints,
  name: "default-theme"
};
const stylePropsToThemeKeys = {
  backgroundColor: "colors",
  color: "colors",
  borderRadius: "radii",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  fontFamily: "fonts",
  lineHeight: "lineHeights",
  opacity: "opacities",
  boxShadow: "shadows",
  transform: "transforms",
  left: "space",
  right: "space",
  top: "space",
  bottom: "space",
  height: "space",
  width: "space",
  letterSpacing: "space",
  margin: "space",
  marginBlock: "space",
  marginBlockEnd: "space",
  marginBlockStart: "space",
  marginInline: "space",
  marginInlineEnd: "space",
  marginInlineStart: "space",
  marginLeft: "space",
  marginRight: "space",
  marginTop: "space",
  marginBottom: "space",
  maxHeight: "space",
  maxWidth: "space",
  minHeight: "space",
  minWidth: "space",
  padding: "space",
  paddingBlock: "space",
  paddingBlockEnd: "space",
  paddingBlockStart: "space",
  paddingInline: "space",
  paddingInlineEnd: "space",
  paddingInlineStart: "space",
  paddingLeft: "space",
  paddingRight: "space",
  paddingTop: "space",
  paddingBottom: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space"
};
const classNameModifier = (base, modifier) => {
  return modifier ? `${base}--${modifier}` : null;
};
const classNameModifierByFlag = (base, modifier, flag) => {
  return flag ? `${base}--${modifier}` : null;
};
var _ = 0;
function o(o2, e2, n2, t2, f2, l2) {
  var s2, u2, a2 = {};
  for (u2 in e2)
    "ref" == u2 ? s2 = e2[u2] : a2[u2] = e2[u2];
  var i2 = { type: o2, props: a2, key: n2, ref: s2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_, __source: f2, __self: l2 };
  if ("function" == typeof o2 && (s2 = o2.defaultProps))
    for (u2 in s2)
      void 0 === a2[u2] && (a2[u2] = s2[u2]);
  return l$1.vnode && l$1.vnode(i2), i2;
}
const ViewPrimitive = ({
  as = "div",
  // @ts-ignore
  children,
  testId,
  ariaLabel,
  isDisabled,
  style,
  ...rest
}, ref) => {
  const {
    propStyles,
    nonStyleProps
  } = useStyles(rest, style);
  if (nonStyleProps.show === false) {
    return o(_$2, {});
  }
  return y$1(as, {
    "aria-label": ariaLabel,
    "data-testid": testId,
    disabled: isDisabled,
    ref,
    style: propStyles,
    ...nonStyleProps,
    show: void 0
  }, children);
};
const View = k(ViewPrimitive);
View.displayName = "View";
const FlexPrimitive = ({
  className,
  children,
  ...rest
}, ref) => o(View, {
  className: classNames("flex", className),
  ref,
  ...rest,
  children
});
const BaseFlex = k(FlexPrimitive);
Flex.displayName = "Flex";
function Flex(props) {
  const {
    wrap,
    render,
    ...restProps
  } = props;
  if (wrap) {
    return o(_$2, {
      children: wrap({
        ...restProps,
        children: o(BaseFlex, {
          ...restProps,
          children: render || props.children
        })
      })
    });
  }
  return o(BaseFlex, {
    ...restProps,
    children: render || props.children
  });
}
const defaultViewBox = {
  minX: 0,
  minY: 0,
  width: 24,
  height: 24
};
const IconPrimitive = ({
  className,
  // as can be used to render other icon react components too
  as = "svg",
  fill = "currentColor",
  pathData,
  viewBox = defaultViewBox,
  children,
  paths,
  ...rest
}, ref) => {
  const minX = viewBox.minX ? viewBox.minX : defaultViewBox.minX;
  const minY = viewBox.minY ? viewBox.minY : defaultViewBox.minY;
  const width = viewBox.width ? viewBox.width : defaultViewBox.width;
  const height = viewBox.height ? viewBox.height : defaultViewBox.height;
  let _children;
  if (children) {
    _children = children;
  }
  if (paths) {
    _children = paths.map((path, index2) => y$1("path", {
      ...path,
      key: index2
    }));
  }
  if (pathData) {
    _children = o("path", {
      d: pathData,
      fill
    });
  }
  return o(View, {
    as,
    className: classNames("icon", className),
    ref,
    width,
    height,
    viewBox: `${minX} ${minY} ${width} ${height}`,
    ...rest,
    children: _children
  });
};
const Icon = k(IconPrimitive);
Icon.displayName = "Icon";
const TextPrimitive = ({
  as = "p",
  className,
  children,
  label,
  modifiers,
  isTruncated,
  variation,
  display,
  ...rest
}, ref) => {
  const hasModifiers = modifiers == null ? void 0 : modifiers.length;
  const componentClasses = classNames("text", classNameModifier("text", variation), classNameModifierByFlag("text", "truncated", isTruncated), className);
  return o(View, {
    as,
    className: componentClasses,
    "data-truncate": isTruncated,
    "data-variation": variation,
    ref,
    ...!hasModifiers && {
      display
    },
    ...rest,
    children: hasModifiers ? o(LabelWithModifiers, {
      label,
      modifiers
    }) : label ?? children
  });
};
function LabelWithModifiers(props) {
  const arr = F$1(() => buildLabelArray(props.label, props.modifiers), [props.label, props.modifiers]);
  return o(_$2, {
    children: arr.map((item, i2) => {
      const text = props.label.substring(item.range[0], item.range[1] + 1);
      return item.modifier ? o(View, {
        as: "span",
        ...item.modifier.overrides,
        children: text
      }, i2) : o(_$2, {
        children: text
      }, i2);
    })
  });
}
const Text = k(TextPrimitive);
Text.displayName = "Text";
function buildLabelArray(label, modifiers) {
  const arr = [{
    modifier: null,
    range: [0, label.length - 1]
  }];
  for (let modifier of modifiers) {
    for (let i2 = 0; i2 < arr.length; i2++) {
      if (arr[i2].modifier == null && isModifierInRange(modifier, arr[i2].range)) {
        const notModifiedLeftItem = {
          modifier: null,
          range: [arr[i2].range[0], modifier.range[0] - 1]
        };
        const modifiedItem = {
          modifier,
          range: [modifier.range[0], modifier.range[1]]
        };
        const notModifiedEndItem = {
          modifier: null,
          range: [modifier.range[1] + 1, arr[i2].range[1]]
        };
        arr.splice(i2, 1, notModifiedLeftItem, modifiedItem, notModifiedEndItem);
      }
    }
  }
  return arr;
}
function isModifierInRange(modifier, range) {
  return modifier.range[0] >= range[0] && modifier.range[1] <= range[1];
}
function InstanceSwap(props) {
  const {
    swap,
    overrides,
    ...restProps
  } = props;
  return o(_$2, {
    children: swap(restProps)
  });
}
const getOverrideProps = (overrides, elementHierarchy) => {
  if (!overrides) {
    return null;
  }
  const componentOverrides = Object.entries(overrides).filter(([key]) => key === elementHierarchy).flatMap(([, value]) => Object.entries(value)).filter((m2) => m2 == null ? void 0 : m2[0]);
  return Object.fromEntries(componentOverrides);
};
function CheckmarkV2Icon(props) {
  const {
    overrides,
    swap,
    ...rootProps
  } = props;
  if (swap) {
    return o(InstanceSwap, {
      ...props
    });
  }
  return o(Icon, {
    width: "26px",
    height: "26px",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px",
    viewBox: {
      "minX": 0,
      "minY": 0,
      "width": 26,
      "height": 26
    },
    paths: [{
      "d": "M10.8333 0C4.85333 0 0 4.85333 0 10.8333C0 16.8133 4.85333 21.6667 10.8333 21.6667C16.8133 21.6667 21.6667 16.8133 21.6667 10.8333C21.6667 4.85333 16.8133 0 10.8333 0ZM10.8333 19.5C6.05583 19.5 2.16667 15.6108 2.16667 10.8333C2.16667 6.05583 6.05583 2.16667 10.8333 2.16667C15.6108 2.16667 19.5 6.05583 19.5 10.8333C19.5 15.6108 15.6108 19.5 10.8333 19.5ZM15.0367 6.81417L8.66667 13.1842L6.63 11.1475C6.42744 10.9449 6.15271 10.8311 5.86625 10.8311C5.57979 10.8311 5.30506 10.9449 5.1025 11.1475C4.89994 11.3501 4.78614 11.6248 4.78614 11.9112C4.78614 12.1977 4.89994 12.4724 5.1025 12.675L7.90833 15.4808C8.33083 15.9033 9.01333 15.9033 9.43583 15.4808L16.575 8.34167C16.6754 8.24144 16.7551 8.1224 16.8095 7.99134C16.8638 7.86029 16.8918 7.7198 16.8918 7.57792C16.8918 7.43603 16.8638 7.29554 16.8095 7.16449C16.7551 7.03344 16.6754 6.91439 16.575 6.81417C16.1525 6.39167 15.4592 6.39167 15.0367 6.81417L15.0367 6.81417Z",
      "fill": "currentColor",
      "fillRule": "nonzero",
      "style": {
        "transform": "translate(8.33%, 8.33%)"
      }
    }],
    color: "rgba(120,113,108,1)",
    ...rootProps,
    ...getOverrideProps(overrides, "checkmarkV2Icon")
  });
}
function X(props) {
  const {
    overrides,
    swap,
    ...rootProps
  } = props;
  if (swap) {
    return o(InstanceSwap, {
      ...props
    });
  }
  return o(Icon, {
    width: "16px",
    height: "16px",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px",
    viewBox: {
      "minX": 0,
      "minY": 0,
      "width": 16,
      "height": 16
    },
    paths: [{
      "d": "M0.234229 0.244231C0.384251 0.0942539 0.587698 0.0100014 0.799829 0.0100014C1.01196 0.0100014 1.21541 0.0942539 1.36543 0.244231L4.79983 3.67863L8.23423 0.244231C8.30803 0.167823 8.3963 0.106877 8.49391 0.0649495C8.59151 0.0230223 8.69649 0.000953259 8.80271 3.02056e-05C8.90893 -0.000892847 9.01428 0.0193483 9.11259 0.0595731C9.21091 0.0997978 9.30023 0.1592 9.37535 0.234314C9.45046 0.309429 9.50986 0.39875 9.55009 0.497067C9.59031 0.595384 9.61055 0.700728 9.60963 0.806952C9.60871 0.913175 9.58664 1.01815 9.54471 1.11575C9.50278 1.21336 9.44184 1.30163 9.36543 1.37543L5.93103 4.80983L9.36543 8.24423C9.51116 8.39511 9.59179 8.59719 9.58997 8.80695C9.58815 9.01671 9.50401 9.21736 9.35568 9.36569C9.20736 9.51401 9.00671 9.59815 8.79695 9.59997C8.58719 9.60179 8.38511 9.52116 8.23423 9.37543L4.79983 5.94103L1.36543 9.37543C1.21455 9.52116 1.01247 9.60179 0.802708 9.59997C0.592951 9.59815 0.392301 9.51401 0.243974 9.36569C0.0956478 9.21736 0.0115124 9.01671 0.00968971 8.80695C0.00786698 8.59719 0.0885028 8.39511 0.234229 8.24423L3.66863 4.80983L0.234229 1.37543C0.0842524 1.22541 0 1.02196 0 0.809831C0 0.597699 0.0842524 0.394253 0.234229 0.244231L0.234229 0.244231Z",
      "fill": "currentColor",
      "fillRule": "evenodd",
      "style": {
        "transform": "translate(20%, 19.94%)"
      }
    }],
    color: "rgba(168,162,158,1)",
    ...rootProps,
    ...getOverrideProps(overrides, "x")
  });
}
function ToastV2$1(props) {
  const {
    overrides,
    swap,
    ...rootProps
  } = props;
  if (swap) {
    return o(InstanceSwap, {
      ...props
    });
  }
  return o(Flex, {
    gap: 0,
    direction: "column",
    overflow: "hidden",
    position: "relative",
    borderRadius: "6px",
    padding: "8px 8px 8px 8px",
    ...rootProps,
    ...getOverrideProps(overrides, "toastV2"),
    children: o(Flex, {
      gap: 0,
      direction: "row",
      alignItems: "center",
      shrink: 0,
      alignSelf: "stretch",
      objectFit: "cover",
      position: "relative",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.10000000149011612), 0px 2px 4px rgba(0, 0, 0, 0.05999999865889549)",
      borderRadius: "4px",
      padding: "0px 0px 0px 0px",
      backgroundColor: "rgba(68,64,60,1)",
      ...getOverrideProps(overrides, "toast"),
      children: [o(Flex, {
        gap: "6px",
        direction: "row",
        width: "251px",
        alignItems: "center",
        grow: 1,
        basis: "251px",
        position: "relative",
        padding: "12px 4px 12px 12px",
        ...getOverrideProps(overrides, "cont"),
        children: [o(Flex, {
          gap: 0,
          direction: "row",
          width: "fit-content",
          alignItems: "center",
          shrink: 0,
          position: "relative",
          padding: "0px 0px 0px 0px",
          ...getOverrideProps(overrides, "iconWrapper"),
          children: o(CheckmarkV2Icon, {
            width: "18px",
            height: "18px",
            shrink: 0,
            ...getOverrideProps(overrides, "icon")
          })
        }), o(Text, {
          fontFamily: "Helvetica Neue",
          fontSize: "12px",
          label: "Saved to Notion",
          fontWeight: 400,
          color: "rgba(231,229,228,1)",
          lineHeight: "18px",
          textAlign: "left",
          display: "flex",
          direction: "column",
          justifyContent: "flex-start",
          width: "211px",
          grow: 1,
          basis: "211px",
          position: "relative",
          padding: "0px 0px 0px 0px",
          whiteSpace: "pre-wrap",
          ...getOverrideProps(overrides, "title")
        })]
      }), o(Flex, {
        gap: 0,
        direction: "row",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        shrink: 0,
        alignSelf: "stretch",
        objectFit: "cover",
        position: "relative",
        padding: "0px 0px 0px 0px",
        ...getOverrideProps(overrides, "actionButton"),
        children: [o(View, {
          width: "1px",
          height: "20px",
          shrink: 0,
          position: "relative",
          borderRadius: "3px",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(120,113,108,1)",
          ...getOverrideProps(overrides, "divider")
        }), o(Flex, {
          gap: "4px",
          direction: "row",
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          shrink: 0,
          alignSelf: "stretch",
          objectFit: "cover",
          position: "relative",
          borderRadius: "4px",
          padding: "0px 12px 0px 12px",
          ...getOverrideProps(overrides, "actionOne"),
          children: o(Text, {
            fontFamily: "Helvetica Neue",
            fontSize: "12px",
            label: "Open",
            fontWeight: 700,
            color: "rgba(231,229,228,1)",
            lineHeight: "18px",
            textAlign: "left",
            display: "flex",
            direction: "column",
            justifyContent: "flex-start",
            shrink: 0,
            position: "relative",
            padding: "0px 0px 0px 0px",
            whiteSpace: "pre-wrap",
            ...getOverrideProps(overrides, "open")
          })
        })]
      }), o(Flex, {
        gap: 0,
        direction: "row",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center",
        shrink: 0,
        alignSelf: "stretch",
        objectFit: "cover",
        position: "relative",
        padding: "0px 0px 0px 0px",
        ...getOverrideProps(overrides, "closeButton"),
        children: [o(View, {
          width: "1px",
          height: "20px",
          shrink: 0,
          position: "relative",
          borderRadius: "3px",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(120,113,108,1)",
          ...getOverrideProps(overrides, "divider")
        }), o(Flex, {
          gap: "4px",
          direction: "row",
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          shrink: 0,
          alignSelf: "stretch",
          objectFit: "cover",
          position: "relative",
          borderRadius: "4px",
          padding: "0px 12px 0px 12px",
          ...getOverrideProps(overrides, "actionClose"),
          children: o(Flex, {
            gap: 0,
            direction: "row",
            width: "fit-content",
            height: "17px",
            justifyContent: "flex-end",
            alignItems: "center",
            shrink: 0,
            position: "relative",
            padding: "0px 0px 0px 0px",
            ...getOverrideProps(overrides, "closeButton"),
            children: o(X, {
              shrink: 0,
              ...getOverrideProps(overrides, "x")
            })
          })
        })]
      })]
    })
  });
}
function LoadingIconV2$1(props) {
  const {
    overrides,
    swap,
    ...rootProps
  } = props;
  if (swap) {
    return o(InstanceSwap, {
      ...props
    });
  }
  return o(Flex, {
    gap: 0,
    direction: "row",
    alignItems: "flex-start",
    overflow: "hidden",
    position: "relative",
    padding: "0px 0px 0px 0px",
    ...rootProps,
    ...getOverrideProps(overrides, "loadingIconV2"),
    children: o(View, {
      width: "30px",
      height: "30px",
      shrink: 0,
      overflow: "hidden",
      position: "relative",
      padding: "0px 0px 0px 0px",
      ...getOverrideProps(overrides, "content"),
      children: o(Icon, {
        width: "12.5px",
        height: "12.5px",
        viewBox: {
          "minX": 0,
          "minY": 0,
          "width": 12.5,
          "height": 12.5
        },
        paths: [{
          "d": "M12.5 2.5L12.5 0C10.8585 -8.32667e-16 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 2.22045e-15 9.18479 0 12.5L2.5 12.5C2.5 9.84783 3.55357 7.3043 5.42893 5.42893C7.3043 3.55357 9.84783 2.5 12.5 2.5Z",
          "fill": "currentColor",
          "fillRule": "nonzero"
        }],
        position: "absolute",
        top: "8.33%",
        bottom: "50%",
        left: "8.33%",
        right: "50%",
        color: "rgba(168,162,158,1)",
        ...getOverrideProps(overrides, "vector")
      })
    })
  });
}
function LoadingIconV2(props) {
  return o(LoadingIconV2$1, {
    ...props,
    overrides: combine(props.overrides, {
      content: {
        className: "animate-spin",
        ...props.size ? {
          width: props.size,
          height: props.size
        } : {}
      },
      ...props.size ? {
        vector: {
          width: 12.5 * getScaleMult(props.size, 30),
          height: 12.5 * getScaleMult(props.size, 30)
        }
      } : {}
    })
  });
}
function getScaleMult(a2, b2) {
  return a2 / b2;
}
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function WrapperProgressBar(props) {
  const [hover, setHover] = Cn.useState(false);
  const timeoutRef = Cn.useRef(void 0);
  Cn.useEffect(() => {
    if (!props.event.timeout) {
      return;
    }
    if (hover) {
      clearTimeout(timeoutRef.current);
    } else {
      timeoutRef.current = setTimeout(() => {
        props.onBgAction("closeToast", {
          id: props.event.id
        });
      }, props.event.timeout);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [hover, props.event.timeout]);
  if (!props.event.timeout) {
    return o(_$2, {
      children: props.children
    });
  }
  return o("div", {
    onMouseEnter: () => {
      setHover(true);
    },
    onMouseLeave: () => {
      setHover(false);
    },
    children: props.children
  });
}
function ToastV2(props) {
  return o(WrapperProgressBar, {
    ...props,
    children: o(ToastV2$1, {
      ...props,
      overrides: combine(props.overrides, {
        toastV2: {
          width: "100%",
          flex: 1
        },
        ...props.event.type == "error" && {
          toast: {
            backgroundColor: "#b91c1c"
          },
          iconWrapper: {
            render: o(_$2, {})
          }
        },
        // toast: props.event.timeout ? {
        //   borderRadius: "4px 4px 0 0",
        //   wrap: ({ children }) => <WrapperProgressBar event={props.event}>{children}</WrapperProgressBar>
        // } : {},
        icon: {
          color: "#A8A29E"
        },
        title: {
          label: props.event.message,
          width: void 0,
          basis: void 0,
          flex: 1
        },
        cont: {
          width: void 0,
          minWidth: "155px",
          basis: void 0
        },
        actionButton: {
          show: props.event.action ? true : false
        },
        ...props.event.type == "progress" && {
          iconWrapper: {
            render: o(LoadingIconV2, {
              size: 18
            })
          }
        },
        ...props.event.action && {
          actionOne: {
            "x-navigable": "true",
            ..."url" in props.event.action ? {
              as: "a",
              href: props.event.action.url,
              onClick: (ev) => {
                ev.preventDefault();
                props.onOpenPage(props.event.action.url);
              }
            } : {
              as: "button",
              onClick: async (ev) => {
                ev.preventDefault();
                props.onBgAction(props.event.action.bgAction, props.event.action.bgActionProps);
                await sleep(50);
                await props.onBgAction("closeToast", {
                  id: props.event.id
                });
              }
            },
            className: "group"
          },
          open: {
            className: "group-hover:!text-[#fff] cursor-pointer",
            label: props.event.action.message
          }
        },
        ...props.event.action ? {
          actionClose: {
            "x-navigable": "true",
            className: "group",
            as: "button",
            onClick: (ev) => {
              ev.preventDefault();
              props.onBgAction("closeToast", {
                id: props.event.id
              });
            }
          },
          x: {
            className: "group-hover:!text-[#fff] cursor-pointer"
          }
        } : {
          actionClose: {
            show: false
          }
        }
      })
    })
  });
}
function promisifyResponse(sendResponse, fn2) {
  new Promise(async (ok) => {
    sendResponse(await fn2());
  });
  return true;
}
function useReceiveMessage({
  destination,
  actionsMap
}) {
  Cn.useEffect(() => {
    var _a, _b;
    function handleMessage(request, sender, sendResponse) {
      console.log(`[${destination}] useReceiveMessage`, request);
      if (request.destination == destination) {
        return promisifyResponse(sendResponse, () => {
          var _a2;
          return (_a2 = actionsMap[request.event]) == null ? void 0 : _a2.call(actionsMap, request.props);
        });
      }
    }
    (_b = (_a = chrome == null ? void 0 : chrome.runtime) == null ? void 0 : _a.onMessage) == null ? void 0 : _b.addListener(handleMessage);
    return () => {
      var _a2, _b2;
      (_b2 = (_a2 = chrome == null ? void 0 : chrome.runtime) == null ? void 0 : _a2.onMessage) == null ? void 0 : _b2.removeListener(handleMessage);
    };
  }, []);
}
function Providers(props) {
  return o(_$2, {
    children: props.children
  });
}
function Tooltip() {
  const [session, setSession] = Cn.useState(null);
  function loadToastSession() {
    return bgAsk("loadToastSession", void 0).then(setSession);
  }
  Cn.useEffect(() => {
    loadToastSession();
  }, []);
  useReceiveMessage({
    destination: "toast",
    actionsMap: {
      "updateToastEvent": async (ev) => {
        loadToastSession();
      },
      "removeToastEvent": async (ev) => {
        loadToastSession().then((x2) => {
        });
      }
    }
  });
  function removeToast(event2) {
    bgAsk("closeToast", void 0);
  }
  if (!session)
    return o(_$2, {});
  if (session.events.length == 0)
    return o(Removing, {});
  const event = session.events[0];
  return o(Flex, {
    width: "100%",
    maxWidth: "324px",
    children: o(ToastV2, {
      event,
      onOpenPage: (url) => {
        bgAsk("openPage", {
          url
        });
        removeToast();
      },
      onBgAction: (action, props) => bgAsk(action, props)
    })
  });
}
function Removing() {
  Cn.useEffect(() => {
    bgAsk("closeToast", void 0);
  }, []);
  return o(_$2, {});
}
initElement(o(Providers, {
  children: o(Tooltip, {})
}));
