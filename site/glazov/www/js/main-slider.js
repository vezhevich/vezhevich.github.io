/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-cssanimations-csscalc-csstransforms-csstransitions-dataset-flexbox-flexboxlegacy-flexboxtweener-inlinesvg-requestanimationframe !*/
! function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function s() {
        var e, n, t, s, i, o, a;
        for (var f in g)
            if (g.hasOwnProperty(f)) {
                if (e = [], n = g[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (s = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) o = e[i], a = o.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), x.push((s ? "" : "no-") + a.join("-"))
            }
    }

    function i(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function o() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : T ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function f(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function l(e, n, t) {
        var s;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (s = n[e[i]], r(s, "function") ? f(s, t || n) : s);
        return !1
    }

    function u(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function d() {
        var e = n.body;
        return e || (e = o(T ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, t, r, s) {
        var i, a, f, l, u = "modernizr",
            c = o("div"),
            p = d();
        if (parseInt(r, 10))
            for (; r--;) f = o("div"), f.id = s ? s[r] : u + (r + 1), c.appendChild(f);
        return i = o("style"), i.type = "text/css", i.id = "s" + u, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), c.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = w.style.overflow, w.style.overflow = "hidden", w.appendChild(p)), a = t(c, e), p.fake ? (p.parentNode.removeChild(p), w.style.overflow = l, w.offsetHeight) : c.parentNode.removeChild(c), !!a
    }

    function p(n, r) {
        var s = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; s--;)
                if (e.CSS.supports(u(n[s]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; s--;) i.push("(" + u(n[s]) + ":" + r + ")");
            return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function m(e, n, s, f) {
        function l() {
            d && (delete E.style, delete E.modElem)
        }
        if (f = r(f, "undefined") ? !1 : f, !r(s, "undefined")) {
            var u = p(e, s);
            if (!r(u, "undefined")) return u
        }
        for (var d, c, m, v, h, g = ["modernizr", "tspan", "samp"]; !E.style && g.length;) d = !0, E.modElem = o(g.shift()), E.style = E.modElem.style;
        for (m = e.length, c = 0; m > c; c++)
            if (v = e[c], h = E.style[v], a(v, "-") && (v = i(v)), E.style[v] !== t) {
                if (f || r(s, "undefined")) return l(), "pfx" == n ? v : !0;
                try {
                    E.style[v] = s
                } catch (y) {}
                if (E.style[v] != h) return l(), "pfx" == n ? v : !0
            }
        return l(), !1
    }

    function v(e, n, t, s, i) {
        var o = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + S.join(o + " ") + o).split(" ");
        return r(n, "string") || r(n, "undefined") ? m(a, n, s, i) : (a = (e + " " + A.join(o + " ") + o).split(" "), l(a, n, t))
    }

    function h(e, n, r) {
        return v(e, t, t, n, r)
    }
    var g = [],
        y = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                g.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                g.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = y, Modernizr = new Modernizr;
    var x = [],
        C = y._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    y._prefixes = C;
    var w = n.documentElement,
        T = "svg" === w.nodeName.toLowerCase();
    Modernizr.addTest("canvas", function() {
        var e = o("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("csscalc", function() {
        var e = "width:",
            n = "calc(10px);",
            t = o("a");
        return t.style.cssText = e + C.join(n + e), !!t.style.length
    }), Modernizr.addTest("dataset", function() {
        var e = o("div");
        return e.setAttribute("data-a-b", "c"), !(!e.dataset || "c" !== e.dataset.aB)
    });
    var _ = "Moz O ms Webkit",
        S = y._config.usePrefixes ? _.split(" ") : [];
    y._cssomPrefixes = S;
    var b = function(n) {
        var r, s = C.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n;
        for (var o = 0; s > o; o++) {
            var a = C[o],
                f = a.toUpperCase() + "_" + r;
            if (f in i) return "@-" + a.toLowerCase() + "-" + n
        }
        return !1
    };
    y.atRule = b;
    var A = y._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    y._domPrefixes = A;
    var z = {
        elem: o("modernizr")
    };
    Modernizr._q.push(function() {
        delete z.elem
    });
    var E = {
        style: z.elem.style
    };
    Modernizr._q.unshift(function() {
        delete E.style
    }), Modernizr.addTest("inlinesvg", function() {
        var e = o("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI)
    }), y.testAllProps = v;
    var P = y.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ? b(e) : (-1 != e.indexOf("-") && (e = i(e)), n ? v(e, n, t) : v(e, "pfx"))
    };
    Modernizr.addTest("requestanimationframe", !!P("requestAnimationFrame", e), {
        aliases: ["raf"]
    }), y.testAllProps = h, Modernizr.addTest("cssanimations", h("animationName", "a", !0)), Modernizr.addTest("flexbox", h("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", h("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", h("flexAlign", "end", !0)), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && h("transform", "scale(1)", !0)
    }), Modernizr.addTest("csstransitions", h("transition", "all", !0)), s(), delete y.addTest, delete y.addAsyncTest;
    for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
    e.Modernizr = Modernizr
}(window, document);
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.0.0",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : f.call(this)
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return a && "[object Object]" === k.call(a) ? (b = e(a)) ? (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n) : !0 : !1
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; d > f; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e) : void 0
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" === c || r.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a)
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e)
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            }
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = V.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return r.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);
            b = r.filter(b, a)
        }
        return r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        })
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; d > b; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; d > b; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return J(a, "nextSibling")
        },
        prev: function(a) {
            return J(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /\S+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(f > b)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    };
    var Q = r.Deferred();
    r.fn.ready = function(a) {
        return Q.then(a), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) S(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c
                } catch (e) {}
                W.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function(a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function(a, b) {
            W.remove(a, b)
        },
        _data: function(a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function(a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                W.set(this, a)
            }) : S(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = Z(f, a), void 0 !== c) return c
                } else this.each(function() {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        aa = ["Top", "Right", "Bottom", "Left"],
        ba = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        ca = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function da(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var ea = {};

    function fa(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ea[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e)
    }

    function ga(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; g > f; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ga(this, !0)
        },
        hide: function() {
            return ga(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ba(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ha = /^(?:checkbox|radio)$/i,
        ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ja = /^$|\/(?:java|ecma)script/i,
        ka = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;

    function la(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }
    var na = /<|&#?\w+;/;

    function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (na.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
            k = 0;
            while (f = g[k++]) ja.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var pa = d.documentElement,
        qa = /^key/,
        ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        sa = /^([^.]*)(?:\.(.+)|)/;

    function ta() {
        return !0
    }

    function ua() {
        return !1
    }

    function va() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function wa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) wa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--) h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    return this.originalEvent ? b(this.originalEvent) : void 0
                } : function() {
                    return this.originalEvent ? this.originalEvent[a] : void 0
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== va() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === va() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: ua,
        isPropagationStopped: ua,
        isImmediatePropagationStopped: ua,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return wa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return wa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ya = /<script|<style|<link/i,
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /^true\/(.*)/,
        Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ca(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Da(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = Aa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ga(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ha(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(la(e, "script"), Da), i = h.length; m > l; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; i > l; l++) j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k))
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(xa, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = la(h), f = la(a), d = 0, e = f.length; e > d; d++) Ga(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || la(a), g = g || la(h), d = 0, e = f.length; e > d; d++) Fa(f[d], g[d]);
                else Fa(a, h);
            return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return S(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ja = /^margin/,
        Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        La = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Ma(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Na(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ra = ["Webkit", "Moz", "ms"],
        Sa = d.createElement("div").style;

    function Ta(a) {
        if (a in Sa) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ra.length;
        while (c--)
            if (a = Ra[c] + b, a in Sa) return a
    }

    function Ua(a, b, c) {
        var d = _.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Va(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
        return g
    }

    function Wa(a, b, c) {
        var d, e = !0,
            f = La(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = Ma(a, b, f), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ma(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function() {
                    return Wa(a, b, d)
                }) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && La(a),
                    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ja.test(a) || (r.cssHooks[a + b].set = Ua)
    }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) {
                    for (d = La(a), e = b.length; e > g; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Xa(a, b, c, d, e) {
        return new Xa.prototype.init(a, b, c, d, e)
    }
    r.Tween = Xa, Xa.prototype = {
        constructor: Xa,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Xa.propHooks[this.prop];
            return a && a.get ? a.get(this) : Xa.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Xa.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this
        }
    }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = Xa.prototype.init, r.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = /queueHooks$/;

    function ab() {
        Za && (a.requestAnimationFrame(ab), r.fx.tick())
    }

    function bb() {
        return a.setTimeout(function() {
            Ya = void 0
        }), Ya = r.now()
    }

    function cb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = aa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function eb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ba(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ga([a], !0), m.done(function() {
                p || ga([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function fb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function gb(a, b, c) {
        var d, e, f = 0,
            g = gb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || bb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (fb(k, j.opts.specialEasing); g > f; f++)
            if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(gb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return da(c.elem, a, _.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b)
            },
            prefilters: [eb],
            prefilter: function(a, b) {
                b ? gb.prefilters.unshift(a) : gb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var e = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
                r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
            }, e
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(ba).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = gb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && _a.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: cb("show"),
            slideUp: cb("hide"),
            slideToggle: cb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (Ya = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Ya = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
        }, r.fx.interval = 13, r.fx.start = function() {
            Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval))
        }, r.fx.stop = function() {
            a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var hb, ib = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c);
        }
    }), hb = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ib[b] || r.find.attr;
        ib[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e
        }
    });
    var jb = /^(?:input|select|textarea|button)$/i,
        kb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });
    var lb = /[\t\r\n\f]/g;

    function mb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, mb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = r.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, mb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = r.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, mb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : r.trim(r.text(a)).replace(ob, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? r.event.trigger(a, b, c, !0) : void 0
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Ob = {
            0: 200,
            1223: 204
        },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        return o.cors || Pb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || pa
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this, function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Na(o.pixelPosition, function(a, c) {
            return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
});

/*!
Waypoints - 4.0.0
Copyright В© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s],
                    l = o.oldScroll < a.triggerPoint,
                    h = o.newScroll >= a.triggerPoint,
                    p = l && h,
                    u = !l && !h;
                (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : t.Dragdealer = e()
}(this, function() {
    function t(t) {
        var e = "Webkit Moz ms O".split(" "),
            s = document.documentElement.style;
        if (void 0 !== s[t]) return t;
        t = t.charAt(0).toUpperCase() + t.substr(1);
        for (var i = 0; i < e.length; i++)
            if (void 0 !== s[e[i] + t]) return e[i] + t
    }
    var e = function(t, e) {
        this.bindMethods(), this.options = this.applyDefaults(e || {}), this.wrapper = this.getWrapperElement(t), this.wrapper && (this.handle = this.getHandleElement(this.wrapper, this.options.handleClass), this.handle && (this.init(), this.bindEventListeners()))
    };
    e.prototype = {
        defaults: {
            disabled: !1,
            horizontal: !0,
            vertical: !1,
            slide: !0,
            steps: 0,
            snap: !1,
            loose: !1,
            speed: .1,
            xPrecision: 0,
            yPrecision: 0,
            handleClass: "handle",
            css3: !0,
            activeClass: "active",
            tapping: !0
        },
        init: function() {
            this.value = {
                prev: [-1, -1],
                current: [this.options.x || 0, this.options.y || 0],
                target: [this.options.x || 0, this.options.y || 0]
            }, this.offset = {
                wrapper: [0, 0],
                mouse: [0, 0],
                prev: [-999999, -999999],
                current: [0, 0],
                target: [0, 0]
            }, this.change = [0, 0], this.stepRatios = this.calculateStepRatios(), this.activity = !1, this.dragging = !1, this.tapping = !1, this.reflow(), this.options.disabled && this.disable()
        },
        applyDefaults: function(t) {
            for (var e in this.defaults) t.hasOwnProperty(e) || (t[e] = this.defaults[e]);
            return t
        },
        getWrapperElement: function(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        },
        getHandleElement: function(t, e) {
            var s, i, o;
            if (t.getElementsByClassName) {
                if (s = t.getElementsByClassName(e), s.length > 0) return s[0]
            } else
                for (i = new RegExp("(^|\\s)" + e + "(\\s|$)"), s = t.getElementsByTagName("*"), o = 0; o < s.length; o++)
                    if (i.test(s[o].className)) return s[o]
        },
        calculateStepRatios: function() {
            var t = [];
            if (this.options.steps > 1)
                for (var e = 0; e <= this.options.steps - 1; e++) t[e] = e / (this.options.steps - 1);
            return t
        },
        setWrapperOffset: function() {
            this.offset.wrapper = r.get(this.wrapper)
        },
        calculateBounds: function() {
            var t = {
                top: this.options.top || 0,
                bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
                left: this.options.left || 0,
                right: -(this.options.right || 0) + this.wrapper.offsetWidth
            };
            return t.availWidth = t.right - t.left - this.handle.offsetWidth, t.availHeight = t.bottom - t.top - this.handle.offsetHeight, t
        },
        calculateValuePrecision: function() {
            var t = this.options.xPrecision || Math.abs(this.bounds.availWidth),
                e = this.options.yPrecision || Math.abs(this.bounds.availHeight);
            return [t ? 1 / t : 0, e ? 1 / e : 0]
        },
        bindMethods: function() {
            this.onHandleMouseDown = s(this.onHandleMouseDown, this), this.onHandleTouchStart = s(this.onHandleTouchStart, this), this.onDocumentMouseMove = s(this.onDocumentMouseMove, this), this.onWrapperTouchMove = s(this.onWrapperTouchMove, this), this.onWrapperMouseDown = s(this.onWrapperMouseDown, this), this.onWrapperTouchStart = s(this.onWrapperTouchStart, this), this.onDocumentMouseUp = s(this.onDocumentMouseUp, this), this.onDocumentTouchEnd = s(this.onDocumentTouchEnd, this), this.onHandleClick = s(this.onHandleClick, this), this.onWindowResize = s(this.onWindowResize, this)
        },
        bindEventListeners: function() {
            i(this.handle, "mousedown", this.onHandleMouseDown), i(this.handle, "touchstart", this.onHandleTouchStart), i(document, "mousemove", this.onDocumentMouseMove), i(this.wrapper, "touchmove", this.onWrapperTouchMove), i(this.wrapper, "mousedown", this.onWrapperMouseDown), i(this.wrapper, "touchstart", this.onWrapperTouchStart), i(document, "mouseup", this.onDocumentMouseUp), i(document, "touchend", this.onDocumentTouchEnd), i(this.handle, "click", this.onHandleClick), i(window, "resize", this.onWindowResize);
            var t = this;
            this.interval = setInterval(function() {
                t.animate()
            }, 25), this.animate(!1, !0)
        },
        unbindEventListeners: function() {
            o(this.handle, "mousedown", this.onHandleMouseDown), o(this.handle, "touchstart", this.onHandleTouchStart), o(document, "mousemove", this.onDocumentMouseMove), o(this.wrapper, "touchmove", this.onWrapperTouchMove), o(this.wrapper, "mousedown", this.onWrapperMouseDown), o(this.wrapper, "touchstart", this.onWrapperTouchStart), o(document, "mouseup", this.onDocumentMouseUp), o(document, "touchend", this.onDocumentTouchEnd), o(this.handle, "click", this.onHandleClick), o(window, "resize", this.onWindowResize), clearInterval(this.interval)
        },
        onHandleMouseDown: function(t) {
            h.refresh(t), n(t), a(t), this.activity = !1, this.startDrag()
        },
        onHandleTouchStart: function(t) {
            h.refresh(t), a(t), this.activity = !1, this.startDrag()
        },
        onDocumentMouseMove: function(t) {
            h.refresh(t), this.dragging && (this.activity = !0)
        },
        onWrapperTouchMove: function(t) {
            return h.refresh(t), !this.activity && this.draggingOnDisabledAxis() ? void(this.dragging && this.stopDrag()) : (n(t), void(this.activity = !0))
        },
        onWrapperMouseDown: function(t) {
            h.refresh(t), n(t), this.startTap()
        },
        onWrapperTouchStart: function(t) {
            h.refresh(t), n(t), this.startTap()
        },
        onDocumentMouseUp: function(t) {
            this.stopDrag(), this.stopTap()
        },
        onDocumentTouchEnd: function(t) {
            this.stopDrag(), this.stopTap()
        },
        onHandleClick: function(t) {
            this.activity && (n(t), a(t))
        },
        onWindowResize: function(t) {
            this.reflow()
        },
        enable: function() {
            this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, "")
        },
        disable: function() {
            this.disabled = !0, this.handle.className += " disabled"
        },
        reflow: function() {
            this.setWrapperOffset(), this.bounds = this.calculateBounds(), this.valuePrecision = this.calculateValuePrecision(), this.updateOffsetFromValue()
        },
        getStep: function() {
            return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
        },
        getValue: function() {
            return this.value.target
        },
        setStep: function(t, e, s) {
            this.setValue(this.options.steps && t > 1 ? (t - 1) / (this.options.steps - 1) : 0, this.options.steps && e > 1 ? (e - 1) / (this.options.steps - 1) : 0, s)
        },
        setValue: function(t, e, s) {
            this.setTargetValue([t, e || 0]), s && (this.groupCopy(this.value.current, this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
        },
        startTap: function() {
            !this.disabled && this.options.tapping && (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([h.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, h.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
        },
        stopTap: function() {
            !this.disabled && this.tapping && (this.tapping = !1, this.setTargetValue(this.value.current))
        },
        startDrag: function() {
            this.disabled || (this.dragging = !0, this.setWrapperOffset(), this.offset.mouse = [h.x - r.get(this.handle)[0], h.y - r.get(this.handle)[1]], this.wrapper.className.match(this.options.activeClass) || (this.wrapper.className += " " + this.options.activeClass))
        },
        stopDrag: function() {
            if (!this.disabled && this.dragging) {
                this.dragging = !1;
                var t = this.groupClone(this.value.current);
                if (this.options.slide) {
                    var e = this.change;
                    t[0] += 4 * e[0], t[1] += 4 * e[1]
                }
                this.setTargetValue(t), this.wrapper.className = this.wrapper.className.replace(" " + this.options.activeClass, "")
            }
        },
        callAnimationCallback: function() {
            var t = this.value.current;
            this.options.snap && this.options.steps > 1 && (t = this.getClosestSteps(t)), this.groupCompare(t, this.value.prev) || ("function" == typeof this.options.animationCallback && this.options.animationCallback.call(this, t[0], t[1]), this.groupCopy(this.value.prev, t))
        },
        callTargetCallback: function() {
            "function" == typeof this.options.callback && this.options.callback.call(this, this.value.target[0], this.value.target[1])
        },
        animate: function(t, e) {
            if (!t || this.dragging) {
                if (this.dragging) {
                    var s = this.groupClone(this.value.target),
                        i = [h.x - this.offset.wrapper[0] - this.offset.mouse[0], h.y - this.offset.wrapper[1] - this.offset.mouse[1]];
                    this.setTargetValueByOffset(i, this.options.loose), this.change = [this.value.target[0] - s[0], this.value.target[1] - s[1]]
                }(this.dragging || e) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || e) && (this.updateOffsetFromValue(), this.callAnimationCallback())
            }
        },
        glide: function() {
            var t = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
            return t[0] || t[1] ? (Math.abs(t[0]) > this.valuePrecision[0] || Math.abs(t[1]) > this.valuePrecision[1] ? (this.value.current[0] += t[0] * this.options.speed, this.value.current[1] += t[1] * this.options.speed) : this.groupCopy(this.value.current, this.value.target), !0) : !1
        },
        updateOffsetFromValue: function() {
            this.options.snap ? this.offset.current = this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.offset.current = this.getOffsetsByRatios(this.value.current), this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
        },
        renderHandlePosition: function() {
            var t = "";
            return this.options.css3 && u.transform ? (this.options.horizontal && (t += "translate3d(" + this.offset.current[0] + "px, 0, 0)"), this.options.vertical && (t += " translate3d(0, " + this.offset.current[1] + "px, 0)"), void(this.handle.style[u.transform] = t)) : (this.options.horizontal && (this.handle.style.left = this.offset.current[0] + "px"), void(this.options.vertical && (this.handle.style.top = this.offset.current[1] + "px")))
        },
        setTargetValue: function(t, e) {
            var s = e ? this.getLooseValue(t) : this.getProperValue(t);
            this.groupCopy(this.value.target, s), this.offset.target = this.getOffsetsByRatios(s), this.callTargetCallback()
        },
        setTargetValueByOffset: function(t, e) {
            var s = this.getRatiosByOffsets(t),
                i = e ? this.getLooseValue(s) : this.getProperValue(s);
            this.groupCopy(this.value.target, i), this.offset.target = this.getOffsetsByRatios(i)
        },
        getLooseValue: function(t) {
            var e = this.getProperValue(t);
            return [e[0] + (t[0] - e[0]) / 4, e[1] + (t[1] - e[1]) / 4]
        },
        getProperValue: function(t) {
            var e = this.groupClone(t);
            return e[0] = Math.max(e[0], 0), e[1] = Math.max(e[1], 0), e[0] = Math.min(e[0], 1), e[1] = Math.min(e[1], 1), (!this.dragging && !this.tapping || this.options.snap) && this.options.steps > 1 && (e = this.getClosestSteps(e)), e
        },
        getRatiosByOffsets: function(t) {
            return [this.getRatioByOffset(t[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(t[1], this.bounds.availHeight, this.bounds.top)]
        },
        getRatioByOffset: function(t, e, s) {
            return e ? (t - s) / e : 0
        },
        getOffsetsByRatios: function(t) {
            return [this.getOffsetByRatio(t[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(t[1], this.bounds.availHeight, this.bounds.top)]
        },
        getOffsetByRatio: function(t, e, s) {
            return Math.round(t * e) + s
        },
        getStepNumber: function(t) {
            return this.getClosestStep(t) * (this.options.steps - 1) + 1
        },
        getClosestSteps: function(t) {
            return [this.getClosestStep(t[0]), this.getClosestStep(t[1])]
        },
        getClosestStep: function(t) {
            for (var e = 0, s = 1, i = 0; i <= this.options.steps - 1; i++) Math.abs(this.stepRatios[i] - t) < s && (s = Math.abs(this.stepRatios[i] - t), e = i);
            return this.stepRatios[e]
        },
        groupCompare: function(t, e) {
            return t[0] == e[0] && t[1] == e[1]
        },
        groupCopy: function(t, e) {
            t[0] = e[0], t[1] = e[1]
        },
        groupClone: function(t) {
            return [t[0], t[1]]
        },
        draggingOnDisabledAxis: function() {
            return !this.options.horizontal && h.xDiff > h.yDiff || !this.options.vertical && h.yDiff > h.xDiff
        }
    };
    var s = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        i = function(t, e, s) {
            t.addEventListener ? t.addEventListener(e, s, !1) : t.attachEvent && t.attachEvent("on" + e, s)
        },
        o = function(t, e, s) {
            t.removeEventListener ? t.removeEventListener(e, s, !1) : t.detachEvent && t.detachEvent("on" + e, s)
        },
        n = function(t) {
            t || (t = window.event), t.preventDefault && t.preventDefault(), t.returnValue = !1
        },
        a = function(t) {
            t || (t = window.event), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0
        },
        h = {
            x: 0,
            y: 0,
            xDiff: 0,
            yDiff: 0,
            refresh: function(t) {
                t || (t = window.event), "mousemove" == t.type ? this.set(t) : t.touches && this.set(t.touches[0])
            },
            set: function(t) {
                var e = this.x,
                    s = this.y;
                t.clientX || t.clientY ? (this.x = t.clientX, this.y = t.clientY) : (t.pageX || t.pageY) && (this.x = t.pageX - document.body.scrollLeft - document.documentElement.scrollLeft, this.y = t.pageY - document.body.scrollTop - document.documentElement.scrollTop), this.xDiff = Math.abs(this.x - e), this.yDiff = Math.abs(this.y - s)
            }
        },
        r = {
            get: function(t) {
                var e = {
                    left: 0,
                    top: 0
                };
                return void 0 !== t.getBoundingClientRect && (e = t.getBoundingClientRect()), [e.left, e.top]
            }
        },
        u = {
            transform: t("transform")
        };
    return e
});
/*! @vimeo/player v1.0.4 | (c) 2016 Vimeo | MIT License | https://github.com/vimeo/player.js */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
}(this, function() {
    "use strict";

    function e(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }

    function t(e, t, n) {
        var r = T.get(e.element) || {};
        t in r || (r[t] = []), r[t].push(n), T.set(e.element, r)
    }

    function n(e, t) {
        var n = T.get(e.element) || {};
        return n[t] || []
    }

    function r(e, t, n) {
        var r = T.get(e.element) || {};
        if (!r[t]) return !0;
        if (!n) return r[t] = [], T.set(e.element, r), !0;
        var o = r[t].indexOf(n);
        return o !== -1 && r[t].splice(o, 1), T.set(e.element, r), r[t] && 0 === r[t].length
    }

    function o(e, t) {
        var n = T.get(e);
        T.set(t, n), T.delete(e)
    }

    function i(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "" + t.toLowerCase() + e.substr(0, 1).toUpperCase() + e.substr(1)
    }

    function a(e) {
        return e instanceof window.HTMLElement
    }

    function u(e) {
        return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
    }

    function s(e) {
        return /^(https?:)?\/\/(player.)?vimeo.com/.test(e)
    }

    function c() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            t = e.id,
            n = e.url,
            r = t || n;
        if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (u(r)) return "https://vimeo.com/" + r;
        if (s(r)) return r.replace("http:", "https:");
        if (t) throw new TypeError("вЂњ" + t + "вЂќ is not a valid video id.");
        throw new TypeError("вЂњ" + r + "вЂќ is not a vimeo.com url.")
    }

    function f(e) {
        for (var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = _, r = Array.isArray(n), o = 0, n = r ? n : n[Symbol.iterator]();;) {
            var i;
            if (r) {
                if (o >= n.length) break;
                i = n[o++]
            } else {
                if (o = n.next(), o.done) break;
                i = o.value
            }
            var a = i,
                u = e.getAttribute("data-vimeo-" + a);
            (u || "" === u) && (t[a] = "" === u ? 1 : u)
        }
        return t
    }

    function l(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
        return new Promise(function(n, r) {
            if (!s(e)) throw new TypeError("вЂњ" + e + "вЂќ is not a vimeo.com url.");
            var o = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(e);
            for (var i in t) t.hasOwnProperty(i) && (o += "&" + i + "=" + encodeURIComponent(t[i]));
            var a = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            a.open("GET", o, !0), a.onload = function() {
                if (404 === a.status) return void r(new Error("вЂњ" + e + "вЂќ was not found."));
                if (403 === a.status) return void r(new Error("вЂњ" + e + "вЂќ is not embeddable."));
                try {
                    var t = JSON.parse(a.responseText);
                    n(t)
                } catch (e) {
                    r(e)
                }
            }, a.onerror = function() {
                var e = a.status ? " (" + a.status + ")" : "";
                r(new Error("There was an error fetching the embed code from Vimeo" + e + "."))
            }, a.send()
        })
    }

    function h(e, t) {
        var n = e.html;
        if (!t) throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
        var r = document.createElement("div");
        r.innerHTML = n;
        var o = r.firstChild;
        return t.appendChild(o), t.setAttribute("data-vimeo-initialized", "true"), o
    }

    function d() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0],
            t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
            n = function(e) {
                "console" in window && console.error && console.error("There was an error creating an embed: " + e)
            },
            r = function() {
                if (i) {
                    if (a >= o.length) return "break";
                    u = o[a++]
                } else {
                    if (a = o.next(), a.done) return "break";
                    u = a.value
                }
                var e = u;
                try {
                    if (null !== e.getAttribute("data-vimeo-defer")) return "continue";
                    var t = f(e),
                        r = c(t);
                    l(r, t).then(function(t) {
                        return h(t, e)
                    }).catch(n)
                } catch (e) {
                    n(e)
                }
            };
        e: for (var o = t, i = Array.isArray(o), a = 0, o = i ? o : o[Symbol.iterator]();;) {
            var u, s = r();
            switch (s) {
                case "break":
                    break e;
                case "continue":
                    continue
            }
        }
    }

    function p(e) {
        return "string" == typeof e && (e = JSON.parse(e)), e
    }

    function v(e, t, n) {
        if (e.element.contentWindow.postMessage) {
            var r = {
                method: t
            };
            void 0 !== n && (r.value = n);
            var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            o >= 8 && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin)
        }
    }

    function y(e, t) {
        t = p(t);
        var o = [],
            i = void 0;
        if (t.event) {
            if ("error" === t.event)
                for (var a = n(e, t.data.method), u = a, s = Array.isArray(u), c = 0, u = s ? u : u[Symbol.iterator]();;) {
                    var f;
                    if (s) {
                        if (c >= u.length) break;
                        f = u[c++]
                    } else {
                        if (c = u.next(), c.done) break;
                        f = c.value
                    }
                    var l = f,
                        h = new Error(t.data.message);
                    h.name = t.data.name, l.reject(h), r(e, t.data.method, l)
                }
            o = n(e, "event:" + t.event), i = t.data
        } else t.method && (o = n(e, t.method), i = t.value, r(e, t.method));
        for (var d = o, v = Array.isArray(d), y = 0, d = v ? d : d[Symbol.iterator]();;) {
            var m;
            if (v) {
                if (y >= d.length) break;
                m = d[y++]
            } else {
                if (y = d.next(), y.done) break;
                m = y.value
            }
            var g = m;
            try {
                if ("function" == typeof g) {
                    g.call(e, i);
                    continue
                }
                g.resolve(i)
            } catch (e) {}
        }
    }
    var m = "undefined" != typeof Array.prototype.indexOf,
        g = "undefined" != typeof window.postMessage;
    if (!m || !g) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var w = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        b = (e(function(e, t) {
            ! function(e) {
                function t(e, t) {
                    function r(e) {
                        return this && this.constructor === r ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = t, void(e && n.call(this, e))) : new r(e)
                    }
                    return t || w(e, "size", {
                        get: y
                    }), e.constructor = r, r.prototype = e, r
                }

                function n(e) {
                    this.add ? e.forEach(this.add, this) : e.forEach(function(e) {
                        this.set(e[0], e[1])
                    }, this)
                }

                function r(e) {
                    return this.has(e) && (this._keys.splice(g, 1), this._values.splice(g, 1), this._itp.forEach(function(e) {
                        g < e[0] && e[0]--
                    })), -1 < g
                }

                function o(e) {
                    return this.has(e) ? this._values[g] : void 0
                }

                function i(e, t) {
                    if (this.objectOnly && t !== Object(t)) throw new TypeError("Invalid value used as weak collection key");
                    if (t != t || 0 === t)
                        for (g = e.length; g-- && !b(e[g], t););
                    else g = e.indexOf(t);
                    return -1 < g
                }

                function a(e) {
                    return i.call(this, this._values, e)
                }

                function u(e) {
                    return i.call(this, this._keys, e)
                }

                function s(e, t) {
                    return this.has(e) ? this._values[g] = t : this._values[this._keys.push(e) - 1] = t, this
                }

                function c(e) {
                    return this.has(e) || this._values.push(e), this
                }

                function f() {
                    (this._keys || 0).length = this._values.length = 0
                }

                function l() {
                    return v(this._itp, this._keys)
                }

                function h() {
                    return v(this._itp, this._values)
                }

                function d() {
                    return v(this._itp, this._keys, this._values)
                }

                function p() {
                    return v(this._itp, this._values, this._values)
                }

                function v(e, t, n) {
                    var r = [0],
                        o = !1;
                    return e.push(r), {
                        next: function() {
                            var i, a = r[0];
                            return !o && a < t.length ? (i = n ? [t[a], n[a]] : t[a], r[0]++) : (o = !0, e.splice(e.indexOf(r), 1)), {
                                done: o,
                                value: i
                            }
                        }
                    }
                }

                function y() {
                    return this._values.length
                }

                function m(e, t) {
                    for (var n = this.entries();;) {
                        var r = n.next();
                        if (r.done) break;
                        e.call(t, r.value[1], r.value[0], this)
                    }
                }
                var g, w = Object.defineProperty,
                    b = function(e, t) {
                        return e === t || e !== e && t !== t
                    };
                "undefined" == typeof WeakMap && (e.WeakMap = t({
                    delete: r,
                    clear: f,
                    get: o,
                    has: u,
                    set: s
                }, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (e.Map = t({
                    delete: r,
                    has: u,
                    get: o,
                    set: s,
                    keys: l,
                    values: h,
                    entries: d,
                    forEach: m,
                    clear: f
                })), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (e.Set = t({
                    has: a,
                    add: c,
                    delete: r,
                    clear: f,
                    keys: h,
                    values: h,
                    entries: p,
                    forEach: m
                })), "undefined" == typeof WeakSet && (e.WeakSet = t({
                    delete: r,
                    add: c,
                    clear: f,
                    has: a
                }, !0))
            }("undefined" != typeof t && "undefined" != typeof w ? w : window)
        }), e(function(e) {
            ! function(t, n, r) {
                n[t] = n[t] || r(), "undefined" != typeof e && e.exports ? e.exports = n[t] : "function" == typeof define && define.amd && define(function() {
                    return n[t]
                })
            }("Promise", "undefined" != typeof w ? w : w, function() {
                function e(e, t) {
                    h.add(e, t), l || (l = p(h.drain))
                }

                function t(e) {
                    var t, n = typeof e;
                    return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t
                }

                function n() {
                    for (var e = 0; e < this.chain.length; e++) r(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                    this.chain.length = 0
                }

                function r(e, n, r) {
                    var o, i;
                    try {
                        n === !1 ? r.reject(e.msg) : (o = n === !0 ? e.msg : n.call(void 0, e.msg), o === r.promise ? r.reject(TypeError("Promise-chain cycle")) : (i = t(o)) ? i.call(o, r.resolve, r.reject) : r.resolve(o))
                    } catch (e) {
                        r.reject(e)
                    }
                }

                function o(r) {
                    var a, s = this;
                    if (!s.triggered) {
                        s.triggered = !0, s.def && (s = s.def);
                        try {
                            (a = t(r)) ? e(function() {
                                var e = new u(s);
                                try {
                                    a.call(r, function() {
                                        o.apply(e, arguments)
                                    }, function() {
                                        i.apply(e, arguments)
                                    })
                                } catch (t) {
                                    i.call(e, t)
                                }
                            }): (s.msg = r, s.state = 1, s.chain.length > 0 && e(n, s))
                        } catch (e) {
                            i.call(new u(s), e)
                        }
                    }
                }

                function i(t) {
                    var r = this;
                    r.triggered || (r.triggered = !0, r.def && (r = r.def), r.msg = t, r.state = 2, r.chain.length > 0 && e(n, r))
                }

                function a(e, t, n, r) {
                    for (var o = 0; o < t.length; o++) ! function(o) {
                        e.resolve(t[o]).then(function(e) {
                            n(o, e)
                        }, r)
                    }(o)
                }

                function u(e) {
                    this.def = e, this.triggered = !1
                }

                function s(e) {
                    this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                }

                function c(t) {
                    if ("function" != typeof t) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var r = new s(this);
                    this.then = function(t, o) {
                        var i = {
                            success: "function" != typeof t || t,
                            failure: "function" == typeof o && o
                        };
                        return i.promise = new this.constructor(function(e, t) {
                            if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                            i.resolve = e, i.reject = t
                        }), r.chain.push(i), 0 !== r.state && e(n, r), i.promise
                    }, this.catch = function(e) {
                        return this.then(void 0, e)
                    };
                    try {
                        t.call(void 0, function(e) {
                            o.call(r, e)
                        }, function(e) {
                            i.call(r, e)
                        })
                    } catch (e) {
                        i.call(r, e)
                    }
                }
                var f, l, h, d = Object.prototype.toString,
                    p = "undefined" != typeof setImmediate ? function(e) {
                        return setImmediate(e)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), f = function(e, t, n, r) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            writable: !0,
                            configurable: r !== !1
                        })
                    }
                } catch (e) {
                    f = function(e, t, n) {
                        return e[t] = n, e
                    }
                }
                h = function() {
                    function e(e, t) {
                        this.fn = e, this.self = t, this.next = void 0
                    }
                    var t, n, r;
                    return {
                        add: function(o, i) {
                            r = new e(o, i), n ? n.next = r : t = r, n = r, r = void 0
                        },
                        drain: function() {
                            var e = t;
                            for (t = n = l = void 0; e;) e.fn.call(e.self), e = e.next
                        }
                    }
                }();
                var v = f({}, "constructor", c, !1);
                return c.prototype = v, f(v, "__NPO__", 0, !1), f(c, "resolve", function(e) {
                    var t = this;
                    return e && "object" == typeof e && 1 === e.__NPO__ ? e : new t(function(t, n) {
                        if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        t(e)
                    })
                }), f(c, "reject", function(e) {
                    return new this(function(t, n) {
                        if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                        n(e)
                    })
                }), f(c, "all", function(e) {
                    var t = this;
                    return "[object Array]" != d.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t(function(n, r) {
                        if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                        var o = e.length,
                            i = Array(o),
                            u = 0;
                        a(t, e, function(e, t) {
                            i[e] = t, ++u === o && n(i)
                        }, r)
                    })
                }), f(c, "race", function(e) {
                    var t = this;
                    return "[object Array]" != d.call(e) ? t.reject(TypeError("Not an array")) : new t(function(n, r) {
                        if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                        a(t, e, function(e, t) {
                            n(t)
                        }, r)
                    })
                }), c
            })
        })),
        E = b && "object" == typeof b && "default" in b ? b.default : b,
        T = new WeakMap,
        _ = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"],
        k = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        x = new WeakMap,
        j = new WeakMap,
        Player = function() {
            function Player(e) {
                var t = this,
                    n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (k(this, Player), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "string" == typeof e && (e = document.getElementById(e)), !a(e)) throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" !== e.nodeName) {
                    var r = e.querySelector("iframe");
                    r && (e = r)
                }
                if ("IFRAME" === e.nodeName && !s(e.getAttribute("src") || "")) throw new Error("The player element passed isnвЂ™t a Vimeo embed.");
                if (x.has(e)) return x.get(e);
                this.element = e, this.origin = "*";
                var i = new E(function(r, i) {
                    var a = function(e) {
                        if (s(e.origin) && t.element.contentWindow === e.source) {
                            "*" === t.origin && (t.origin = e.origin);
                            var n = p(e.data),
                                o = "event" in n && "ready" === n.event,
                                i = "method" in n && "ping" === n.method;
                            return o || i ? (t.element.setAttribute("data-ready", "true"), void r()) : void y(t, n)
                        }
                    };
                    if (window.addEventListener ? window.addEventListener("message", a, !1) : window.attachEvent && window.attachEvent("onmessage", a), "IFRAME" !== t.element.nodeName) {
                        var u = f(e, n),
                            d = c(u);
                        l(d, u).then(function(n) {
                            var r = h(n, e);
                            return t.element = r, o(e, r), n
                        }).catch(function(e) {
                            return i(e)
                        })
                    }
                });
                return j.set(this, i), x.set(this.element, this), "IFRAME" === this.element.nodeName && v(this, "ping"), this
            }
            return Player.prototype.then = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1];
                return this.ready().then(e, t)
            }, Player.prototype.callMethod = function(e) {
                var n = this,
                    r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return new E(function(o, i) {
                    return n.ready().then(function() {
                        t(n, e, {
                            resolve: o,
                            reject: i
                        }), v(n, e, r)
                    })
                })
            }, Player.prototype.get = function(e) {
                var n = this;
                return new E(function(r, o) {
                    return e = i(e, "get"), n.ready().then(function() {
                        t(n, e, {
                            resolve: r,
                            reject: o
                        }), v(n, e)
                    })
                })
            }, Player.prototype.set = function(e, n) {
                var r = this;
                return E.resolve(n).then(function(n) {
                    if (e = i(e, "set"), void 0 === n || null === n) throw new TypeError("There must be a value to set.");
                    return r.ready().then(function() {
                        return new E(function(o, i) {
                            t(r, e, {
                                resolve: o,
                                reject: i
                            }), v(r, e, n)
                        })
                    })
                })
            }, Player.prototype.on = function(e, r) {
                if (!e) throw new TypeError("You must pass an event name.");
                if (!r) throw new TypeError("You must pass a callback function.");
                if ("function" != typeof r) throw new TypeError("The callback must be a function.");
                var o = n(this, "event:" + e);
                0 === o.length && this.callMethod("addEventListener", e).catch(function() {}), t(this, "event:" + e, r)
            }, Player.prototype.off = function(e, t) {
                if (!e) throw new TypeError("You must pass an event name.");
                if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                var n = r(this, "event:" + e, t);
                n && this.callMethod("removeEventListener", e).catch(function(e) {})
            }, Player.prototype.loadVideo = function(e) {
                return this.callMethod("loadVideo", e)
            }, Player.prototype.ready = function() {
                var e = j.get(this);
                return E.resolve(e)
            }, Player.prototype.enableTextTrack = function(e, t) {
                if (!e) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: e,
                    kind: t
                })
            }, Player.prototype.disableTextTrack = function() {
                return this.callMethod("disableTextTrack")
            }, Player.prototype.pause = function() {
                return this.callMethod("pause")
            }, Player.prototype.play = function() {
                return this.callMethod("play")
            }, Player.prototype.unload = function() {
                return this.callMethod("unload")
            }, Player.prototype.getAutopause = function() {
                return this.get("autopause")
            }, Player.prototype.setAutopause = function(e) {
                return this.set("autopause", e)
            }, Player.prototype.getColor = function() {
                return this.get("color")
            }, Player.prototype.setColor = function(e) {
                return this.set("color", e)
            }, Player.prototype.getCurrentTime = function() {
                return this.get("currentTime")
            }, Player.prototype.setCurrentTime = function(e) {
                return this.set("currentTime", e)
            }, Player.prototype.getDuration = function() {
                return this.get("duration")
            }, Player.prototype.getEnded = function() {
                return this.get("ended")
            }, Player.prototype.getLoop = function() {
                return this.get("loop")
            }, Player.prototype.setLoop = function(e) {
                return this.set("loop", e)
            }, Player.prototype.getPaused = function() {
                return this.get("paused")
            }, Player.prototype.getTextTracks = function() {
                return this.get("textTracks")
            }, Player.prototype.getVideoEmbedCode = function() {
                return this.get("videoEmbedCode")
            }, Player.prototype.getVideoId = function() {
                return this.get("videoId")
            }, Player.prototype.getVideoTitle = function() {
                return this.get("videoTitle")
            }, Player.prototype.getVideoWidth = function() {
                return this.get("videoWidth")
            }, Player.prototype.getVideoHeight = function() {
                return this.get("videoHeight")
            }, Player.prototype.getVideoUrl = function() {
                return this.get("videoUrl")
            }, Player.prototype.getVolume = function() {
                return this.get("volume")
            }, Player.prototype.setVolume = function(e) {
                return this.set("volume", e)
            }, Player
        }();
    return d(), Player
});
if (!window['YT']) {
    var YT = {
        loading: 0,
        loaded: 0
    };
}
if (!window['YTConfig']) {
    var YTConfig = {
        'host': 'http://www.youtube.com'
    };
}
if (!YT.loading) {
    YT.loading = 1;
    (function() {
        var l = [];
        YT.ready = function(f) {
            if (YT.loaded) {
                f();
            } else {
                l.push(f);
            }
        };
        window.onYTReady = function() {
            YT.loaded = 1;
            for (var i = 0; i < l.length; i++) {
                try {
                    l[i]();
                } catch (e) {}
            }
        };
        YT.setConfig = function(c) {
            for (var k in c) {
                if (c.hasOwnProperty(k)) {
                    YTConfig[k] = c[k];
                }
            }
        };
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.id = 'www-widgetapi-script';
        a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vfln353S3/www-widgetapi.js';
        a.async = true;
        var b = document.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b);
    })();
}

function apply(a, b) {
    return null != b ? Query.proxy(a, b) : a
}

function perform(a, b) {
    null != a && null != b ? Query.proxy(a, b)() : null != a && a()
}

function preventDefault(a) {
    a = a || window.event, a.preventDefault && a.preventDefault(), a.returnValue = !1
}

function ajax(a) {
    return Query.ajax(a)
}

function pad(a, b) {
    var c = "000000000" + a;
    return c.substr(c.length - b)
}

function getRandomInt(a, b) {
    return a = Math.ceil(a), b = Math.floor(b), Math.floor(Math.random() * (b - a)) + a
}

function getRandomIntInclusive(a, b) {
    return a = Math.ceil(a), b = Math.floor(b), Math.floor(Math.random() * (b - a + 1)) + a
}
var jQuery, Query = jQuery,
    Dragdealer, Waypoint, click = "click",
    keypress = "keypress",
    load = "load",
    touch = "touchstart click",
    resize = "resize",
    mouseenter = "mouseenter",
    mouseleave = "mouseleave",
    transitionEnd = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
    animationEnd = "webkitAnimationEnd mozAnimationEnd oAnimationEnd MSAnimationEnd animationend",
    _videoDebugEvents = "waiting stalled suspend",
    win = Query(window),
    doc = Query(document),
    docEl = document.documentElement,
    body = doc.find("body"),
    navMenu = body.find(".bottomnav"),
    navBar = body.find(".nav-bar"),
    burger = navBar.find("#burger"),
    container = body.find(".body-container"),
    mainContent = body.find(".main-content"),
    footer = body.find(".main-footer"),
    blinders = document.getElementById("tn-blinders"),
    cookie;
! function(a) {
    function b(a) {
        var b = null;
        if (void 0 != document.cookie && "" != document.cookie)
            for (var c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                var e = Query.trim(c[d]);
                if (e.substring(0, a.length + 1) == a + "=") {
                    b = decodeURIComponent(e.substring(a.length + 1));
                    break
                }
            } else b = null;
        return b
    }
    a.get = b
}(cookie || (cookie = {}));
var swipe;
! function(a) {
    function b(b, c, d) {
        b.on("touchstart", function(b) {
            a.handleTouchStart(b)
        }).on("touchmove", function(b) {
            g || a.handleTouchMove(b, c, d)
        }).on("touchend", function() {
            g = !1, e = null, f = null
        })
    }

    function c(a) {
        e = a.originalEvent.touches[0].clientX, f = a.originalEvent.touches[0].clientY
    }

    function d(a, b, c) {
        var d = a.originalEvent.touches[0].clientX,
            h = a.originalEvent.touches[0].clientY,
            i = e - d,
            j = f - h,
            k = Math.abs(i) < Math.abs(j);
        switch (b) {
            case "up":
                k && j > 0 && (g = !0, perform(c));
                break;
            case "down":
                k && j < 0 && (g = !0, perform(c));
                break;
            case "left":
                !k && i > 0 && (g = !0, perform(c));
                break;
            case "right":
                !k && i < 0 && (g = !0, perform(c))
        }
    }
    var e = null,
        f = null,
        g = !1;
    a.init = b, a.handleTouchStart = c, a.handleTouchMove = d
}(swipe || (swipe = {}));
var regex;
! function(a) {
    function b(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
            c = b.exec(location.search);
        return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
    }
    a.isInQueryString = b
}(regex || (regex = {}));
var loop;
! function(a) {
    function b(a, b) {
        j.push(apply(b, a))
    }

    function c() {
        null == l && (l = l || window.requestAnimationFrame, l = l || window.webkitRequestAnimationFrame, l = l || window.mozRequestAnimationFrame, l = l || window.msRequestAnimationFrame, l = l || window.oRequestAnimationFrame, l = l || function(a) {
            return window.setTimeout(a, 1e3 / 60)
        })
    }

    function d() {
        null == k && (k = function() {
            for (var a = 0, b = j.length; a < b; a++) j[a]();
            l(k)
        }, l(k))
    }

    function e(a) {
        if (m[a.keyCode]) return preventDefault(a), !1
    }

    function f() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = e
    }

    function g() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
    }

    function h(a, e) {
        b(a, e), c(), d()
    }

    function i(b, c, d) {
        b.scrollCallbacks = b.scrollCallbacks || [], b.scrollCallbacks.push(apply(d, c)), null == b.scrollEvent && (b.scrollPosition = null, b.scrollVelocity = null, b.scrollEvent = function() {
            if (b.scrollTop() != b.scrollPosition) {
                b.scrollVelocity = null != b.scrollPosition ? b.scrollTop() - b.scrollPosition : 0, b.scrollPosition = b.scrollTop();
                for (var a = 0; a < b.scrollCallbacks.length; a++) b.scrollCallbacks[a](b.scrollPosition, b.scrollVelocity)
            }
        }, a.frame(c, b.scrollEvent))
    }
    var j = [],
        k = null,
        l = null,
        m = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        };
    a.disableScroll = f, a.enableScroll = g, a.frame = h, a.scroll = i
}(loop || (loop = {}));
var browser;
! function(a) {
    function b() {
        if (g == -1) {
            var a = f,
                b = a.indexOf("MSIE ");
            g = b > 0 ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : /Trident.*rv:11\./.test(a) ? 11 : 0
        }
        return g
    }

    function c() {
        var a = document;
        return a.documentElement.scrollHeight > a.body.scrollHeight && 0 == a.compatMode.indexOf("CSS1") ? doc : win
    }

    function d() {
        for (var a in Modernizr) 0 === a.indexOf("flexbox") ? 1 == Modernizr[a] && (i = !0) : "boolean" == typeof Modernizr[a] && 0 == Modernizr[a] && (h = !1);
        return h && i
    }

    function e() {
        switch (!0) {
            case isIOS:
                body.addClass("ios touchdevice"), isMobileChrome && body.addClass("mobile-chrome");
                break;
            case isAndroid:
                body.addClass("android touchdevice"), isMobileChrome && body.addClass("mobile-chrome");
                break;
            case isIE:
                body.addClass("msie");
                break;
            case isEdge:
                body.addClass("msedge");
                break;
            case isFirefox:
                body.addClass("firefox");
                break;
            case isSafari:
                body.addClass("safari")
        }
        isPC && body.addClass("pc"), "true" === document.cookie.replace(/(?:(?:^|.*;\s*)legacy_warned\s*\=\s*([^;]*).*$)|^.*$/, "$1") || a.meetsOurStandards() || (document.cookie = "legacy_warned=true; expires=Fri, 31 Dec 9999 23:59:59 GMT", body.find("#legacy-warning").addClass("show").on("click", ".close-btn", function(a) {
            a.delegateTarget.className = ""
        }))
    }
    var f = window.navigator.userAgent,
        g = (window.navigator.platform, -1),
        h = !0,
        i = !1;
    a.getInternetExplorerVersion = b, a.getScrollingElement = c, a.meetsOurStandards = d, a.init = e
}(browser || (browser = {}));
var video;
! function(a) {
    function b() {
        for (var a = 0, b = g.length; a < b; a++) g[a].destroy();
        g = [], h = []
    }

    function c(a, b, c, d, e, f) {
        return a.on("canplay", function() {
            c && a.get(0).play(), perform(c, b)
        }).on("pause", function() {
            perform(d, b)
        }).on("playing", function() {
            perform(e, b)
        }).on("ended", function() {
            perform(f, b)
        }), a.pause = function() {
            a.get(0).pause()
        }, a.seekTo = function(b) {
            a.get(0).currentTime = b
        }, a.play = function() {
            a.get(0).play()
        }, a
    }

    function d(a, b, c, d, e, f) {
        var g = new Vimeo.Player(a);
        return a.data("vimeoAutoplay") || g.loadVideo(parseInt(a.data("video-id"))).then(function() {
            a.trigger("loadSuccess")
        })["catch"](function(b) {
            console.log(b), a.trigger("errorVid", [b])
        }), c && g.ready().then(function() {
            perform(c, b)
        }), g.on("pause", function() {
            perform(d, b)
        }), g.on("play", function() {
            perform(e, b)
        }), g.on("ended", function() {
            perform(f, b)
        }), g.on("error", function(b) {
            a.trigger("errorVid", [b])
        }), g.destroy = function() {
            g.unload()
        }, h.push(g), g
    }

    function e(a, b, c, d, e, f) {
        function h(b) {
            var c;
            switch (b.data) {
                case 2:
                    c = "An invalid parameter value (typically the video ID) was set on the YT.Player";
                    break;
                case 5:
                    c = "An error occurred related to playing the video in an HTML5 player";
                    break;
                case 100:
                    c = "The requested video was not found. The video has possibly been removed";
                    break;
                case 101:
                    c = "The owner of the requested video does not allow embeds"
            }
            a.trigger("errorVid", [c])
        }

        function i() {
            a.trigger("loadSuccess"), c && perform(c, b)
        }

        function j(a) {
            switch (a.data) {
                case 0:
                    perform(f, b);
                    break;
                case 1:
                    perform(e, b);
                    break;
                case 2:
                    perform(d, b)
            }
        }
        var k = new YT.Player(a.attr("id"), {
            videoId: a.data("video-id"),
            events: {
                onReady: i,
                onStateChange: j,
                onError: h
            }
        });
        return k.pause = function() {
            this.pauseVideo()
        }, k.play = function() {
            this.playVideo()
        }, k.setCurrentTime = function(a) {
            this.seekTo(a, !0)
        }, g.push(k), k
    }

    function f(a, b, f, g, h, i, j) {
        switch (b.data("video-type")) {
            case "youtube":
                return b.attr("src", a), e(b, f, g, h, i, j);
            case "vimeo":
                return d(b, f, g, h, i, j);
            default:
                return b.attr("src", a), c(b, f, g, h, i, j)
        }
    }
    var g = [],
        h = [];
    Object.defineProperty(a, "youtubes", {
        get: function() {
            return g
        },
        set: function(a) {
            g = a
        }
    }), Object.defineProperty(a, "vimeos", {
        get: function() {
            return h
        },
        set: function(a) {
            h = a
        }
    }), a.clearVids = b, a.init = f
}(video || (video = {}));
var scrollElem = browser.getScrollingElement(),
    domain = body.data("domain"),
    isMobile = window.innerWidth < 768,
    isIOS = /iPad|iPhone|iPod/.test(window.navigator.platform),
    isPC = /^win/i.test(window.navigator.platform),
    isEdge = /Windows.*Edge/.test(window.navigator.userAgent),
    ieVer = browser.getInternetExplorerVersion(),
    isIE = ieVer > 0,
    isFirefox = /rv:.*(gecko)+/i.test(window.navigator.userAgent),
    isSafari = !!window.navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),
    isAndroid = /android/i.test(window.navigator.userAgent),
    isMobileChrome = !!navigator.userAgent.match(/CriOS/) || isAndroid && !!window.navigator.userAgent.match(/Chrome/i),
    isTouchDevice = isIOS || isAndroid,
    canAnim = Modernizr.cssanimations && Modernizr.csstransitions;
Query.prototype.contains = function(a) {
    return this.find(a).length > 0
}, Query.prototype.enumerate = function(a, b) {
    return body.find(a).each(function(a, c) {
        perform(b, Query(this))
    })
}, Query.prototype.transitionClass = function(a, b, c) {
    this.one(transitionEnd, b, function() {
        null != c && (perform(c, b), c = null)
    }), null != a && this.toggleClass(a)
}, Query.prototype.animateClass = function(a, b, c) {
    this.one(animationEnd, b, function() {
        null != c && (perform(c, b), c = null)
    }), null != a && this.toggleClass(a)
}, Query.prototype.replaceClass = function(a, b) {
    this.removeClass(a), this.addClass(b)
}, Query.prototype.hoverToggle = function(a) {
    var b = a ? this.find(a) : this,
        c = this;
    this.hover(this, function() {
        this.replaceClass("hover-toggled-off hover-toggling-off hover-toggled-on", "hover-toggling-on"), b.one("transitionend", function() {
            c.replaceClass("hover-toggling-on hover-toggling-off hover-toggled-off", "hover-toggled-on")
        })
    }, function() {
        this.replaceClass("hover-toggled-on hover-toggling-on hover-toggled-off", "hover-toggling-off"), b.one("transitionend", function() {
            c.replaceClass("hover-toggling-off hover-toggled-on hover-toggling-on", "hover-toggled-off")
        })
    })
}, Query.prototype.handle = function(a, b, c) {
    this.on(a, apply(c, b || this))
}, Query.prototype.handleOnce = function(a, b, c) {
    this.one(a, apply(c, b || this))
}, Query.prototype.click = function(a, b) {
    this.handle(click, a, function(c) {
        c.preventDefault(), apply(b, a || this)(c)
    })
}, Query.prototype.returnPress = function(a, b) {
    this.handle(keypress, a, function(c) {
        13 == (c.keyCode || c.which) && (c.preventDefault(), apply(b, a || this)(c))
    })
}, Query.prototype.escapePress = function(a, b) {
    this.handle("keyup", a, function(c) {
        27 == (c.keyCode || c.which) && apply(b, a || this)(c)
    })
}, Query.prototype.touch = function(a, b) {
    this.handle(touch, a, function(c) {
        c.preventDefault(), apply(b, a || this)(c)
    })
}, Query.prototype.resize = function(a, b) {
    this.handle(resize, a, function(c) {
        apply(b, a || this)(c)
    })
}, Query.prototype.hover = function(a, b, c) {
    this.handle(mouseenter, a, function(c) {
        apply(b, a || this)(c)
    }), this.handle(mouseleave, a, function(d) {
        apply(c || b, a || this)(d)
    })
}, Query.HoverDir = function(a, b) {
    this.$el = Query(b), this._init(a)
}, Query.HoverDir.defaults = {
    speed: 300,
    easing: "ease",
    hoverDelay: 0,
    inverse: !1,
    hoverElem: "div",
    fadeElem: "p"
}, Query.HoverDir.prototype = {
    _init: function(a) {
        this.options = Query.extend(!0, {}, Query.HoverDir.defaults, a), this.transitionProp = "transform " + this.options.speed + "ms " + this.options.easing, this._loadEvents()
    },
    _loadEvents: function() {
        var a = this;
        this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(b) {
            var c = Query(this),
                d = c.find(a.options.hoverElem),
                e = c.find(a.options.fadeElem),
                f = a._getDir(c, {
                    x: b.pageX,
                    y: b.pageY
                }),
                g = a._getStyle(f);
            "mouseenter" === b.type ? (d.css(g.from), e.length > 0 && e.css(g.innerFrom), clearTimeout(a.tmhover), a.tmhover = setTimeout(function() {
                d.show(0, function() {
                    var b = Query(this);
                    b.css("transition", a.transitionProp), e.length > 0 && (e.css("transition", a.transitionProp), e.addClass("hovered"), a._applyAnimation(e, g.to, a.options.speed)), a._applyAnimation(b, g.to, a.options.speed)
                })
            }, a.options.hoverDelay)) : (d.css("transition", a.transitionProp), e.length > 0 && (e.css("transition", a.transitionProp), e.removeClass("hovered"), a._applyAnimation(e, g.innerFrom, a.options.speed)), a.tmhover && clearTimeout(a.tmhover), a._applyAnimation(d, g.from, a.options.speed))
        })
    },
    _getDir: function(a, b) {
        var c = a.width(),
            d = a.height(),
            e = (b.x - a.offset().left - c / 2) * (c > d ? d / c : 1),
            f = (b.y - a.offset().top - d / 2) * (d > c ? c / d : 1);
        return Math.round((Math.atan2(f, e) * (180 / Math.PI) + 180) / 90 + 3) % 4
    },
    _getStyle: function(a) {
        var b, c, d, e = {
                transform: "translateY(-100%)"
            },
            f = {
                transform: "translateY(100%)"
            },
            g = {
                transform: "translateX(-100%)"
            },
            h = {
                transform: "translateX(100%)"
            },
            i = {
                transform: "translate(0, 0)"
            },
            j = {
                transform: "translate(0, 0)"
            };
        switch (a) {
            case 0:
                b = this.options.inverse ? f : e, d = this.options.inverse ? e : f, c = i;
                break;
            case 1:
                b = this.options.inverse ? g : h, d = this.options.inverse ? h : g, c = j;
                break;
            case 2:
                b = this.options.inverse ? e : f, d = this.options.inverse ? f : e, c = i;
                break;
            case 3:
                b = this.options.inverse ? h : g, d = this.options.inverse ? g : h, c = j
        }
        return {
            from: b,
            to: c,
            innerFrom: d
        }
    },
    _applyAnimation: function(a, b, c) {
        a.stop().css(b, Query.extend(!0, [], {
            duration: c + "ms"
        }))
    }
}, Query.fn.hoverdir = function(a) {
    var b = Query.data(this, "hoverdir");
    if ("string" == typeof a) {
        var c = Array.prototype.slice.call(arguments, 1);
        this.each(function() {
            b && Query.isFunction(b[a]) && "_" !== a.charAt(0) && b[a].apply(b, c)
        })
    } else this.each(function() {
        b ? b._init() : b = Query.data(this, "hoverdir", new Query.HoverDir(a, this))
    });
    return b
}, Query.prototype.scroll = function(a, b) {
    loop.scroll(this, a, b)
}, Query.prototype.isScrolledBottom = function() {
    return this.scrollTop() + this.height() >= this.children().first().height()
}, Query.prototype.setupVideo = function(a, b, c, d, e, f) {
    return video.init(a, this, b, c, d, e, f)
}, Query.prototype.setCurrentTime = function(a) {
    return this.get(0).currentTime = a, this
}, Query.prototype.loadContent = function() {
    doc.handleOnce("loadcomplete", this, function() {
        this.find(".waypoint-load").waypoint({
            handler: function() {
                this.element.className += " loaded", this.destroy()
            },
            offset: "85%"
        }), this.find(".waypoint-fixed-toggle").waypoint({
            handler: function() {
                Query(this.element).addClass("fixed")
            },
            offset: function() {
                var a = this.element.dataset.offset || "";
                return a.indexOf("%") === -1 ? parseInt(a) : a
            }
        })
    }), new TransNavigator(this.find(".trans-navigator"), this.find(".tn-introducer")), this.find(".parallax-wrap").each(function() {
        var a = new Parallax(this);
        a.update()
    }), this.enumerate(".slideshow-wrap", function() {
        new Slideshow(this)
    }), this.enumerate(".dragdealer-carousel", function() {
        new DragdealerCarousel(this)
    }), this.enumerate(".hover-gif-base", function() {
        new HoverGif(this)
    }), this.enumerate(".video-container", function() {
        new VideoPlayer(this)
    }), this.enumerate(".pointer-toggle-wrap", function() {
        new PointerToggle(this)
    }), this.enumerate(".hover-toggle-self", function() {
        this.hoverToggle()
    }), this.enumerate(".hover-toggle-child", function() {
        this.hoverToggle(".hover-toggle-watcher")
    })
};
var Navigation = function() {
        function a() {
            window.isOpen = !1, this.isAnimating = !1, this.isFixed = !1, this.navCols = navMenu.find(".nav-link"), this.transListener = isMobile ? navMenu.get(0) : this.navCols.last().get(0), burger.click(this, this.navToggle), body.find(".nav-waypoint-toggler").waypoint({
                handler: function(a) {
                    "down" === a ? navBar.addClass("fixed") : navBar.removeClass("fixed")
                }
            }), this.navCols.click(this, this.removeHovers), body.find("a").handle("click", this, this.handleAnchors), doc.handle("keydown", this, this.handleRefresh)
        }
        return a.prototype.handleRefresh = function(a) {
            82 == (a.keyCode || a.which) && (a.ctrlKey || a.metaKey) && (a.preventDefault(), body.addClass("tn-leaving-final"), setTimeout(function() {
                window.location.reload()
            }, 400))
        }, a.prototype.handleAnchors = function(a) {
            window.blankClick = "_blank" === a.delegateTarget.target, 0 === a.delegateTarget.href.indexOf("mailto:") && (a.preventDefault(), window.location = a.target.href)
        }, a.prototype.removeHovers = function() {
            this.navCols.closest(".nav-col").off("mouseenter mouseleave mousemove").filter(function(a, b) {
                return b.classList.contains("hover-toggling-on") || b.classList.contains("hover-toggled-on")
            }).replaceClass("hover-toggling-on hover-toggled-on", "hover-toggling-off")
        }, a.prototype.navOpen = function() {
            var a = this,
                b = function(c) {
                    c.target === c.currentTarget && (window.isOpen = !window.isOpen, a.isAnimating = !1, body.replaceClass("nav-opening", "nav-open"), a.transListener.removeEventListener("transitionend", b, !0))
                };
            body.replaceClass("nav-closed", "nav-opening"), this.transListener.addEventListener("transitionend", b, !0), loop.disableScroll(), doc.on("keyup.bottomNav", function(b) {
                27 === b.keyCode && (a.navToggle(), doc.off(".bottomNav"))
            })
        }, a.prototype.navClose = function() {
            var a = this,
                b = function(c) {
                    c.target === c.currentTarget && (window.isOpen = !window.isOpen, a.isAnimating = !1, body.replaceClass("nav-closing", "nav-closed"), a.transListener.removeEventListener("transitionend", b, !0))
                };
            body.replaceClass("nav-open", "nav-closing"), this.transListener.addEventListener("transitionend", b, !0), loop.enableScroll(), doc.off(".bottomNav")
        }, a.prototype.navToggle = function() {
            if (!this.isAnimating) switch (this.isAnimating = !0, window.isOpen) {
                case !0:
                    this.navClose();
                    break;
                default:
                    this.navOpen()
            }
        }, a
    }(),
    HighlightCanvasSingle = function() {
        function a(a) {
            "string" == typeof a ? (this.isImage = !0, this.mediaElem = new Image, this.mediaElem.src = a) : (this.isImage = !1, this.mediaElem = a)
        }
        return a.prototype.handleOffsets = function() {
            var a = this;
            0 === this.mediaElem.width ? this.mediaElem.onload = function() {
                a.setOffsets()
            } : this.setOffsets()
        }, a.prototype.setOffsets = function() {
            var a = this.mediaElem,
                b = Math.min(this.cvsWidth / a.width, this.cvsHeight / a.height),
                c = a.width * b,
                d = a.height * b,
                e = 1;
            c < this.cvsWidth && (e = this.cvsWidth / c), Math.abs(e - 1) < 1e-14 && d < this.cvsHeight && (e = this.cvsHeight / d), c *= e, d *= e, this.sWidth = Math.min(a.width / (c / this.cvsWidth), a.width), this.sHeight = Math.min(a.height / (d / this.cvsHeight), a.height), this.sx = Math.max(.5 * (a.width - this.sWidth), 0), this.sy = Math.max(.5 * (a.height - this.sHeight), 0), this.colWidth = this.sWidth / 5
        }, a
    }(),
    HighlightCanvas = function() {
        function a(a) {
            this.mainCanvas = a, this.mainCanvas.mozOpaque = !0, this.mainCtx = this.mainCanvas.getContext("2d"), this.resizeRunning = !1, this.transRunning = !1, this.elems = [], this.transProgress = 0, this.transDur = Math.ceil(72), this.transDelay = Math.ceil(9), this.transTotalLen = 4 * this.transDelay + this.transDur, win.resize(this, function(a) {
                isTouchDevice || this.throttleResize(a)
            }), win.handle("orientationchange", this, this.throttleResize)
        }
        return a.prototype.addElem = function(a) {
            var b = new HighlightCanvasSingle(a);
            this.elems.push(b)
        }, a.prototype.throttleResize = function(a) {
            var b = this;
            this.resizeRunning || (this.resizeRunning = !0, requestAnimationFrame(function() {
                b.setSizes(a.target.innerWidth, a.target.innerHeight), b.resizeRunning = !1, !b.transRunning && b.currEl.isImage && b.drawBaseImg()
            }))
        }, a.prototype.setSizes = function(a, b) {
            this.cvsWidth = a, this.cvsHeight = b, this.colWidth = this.cvsWidth / 5, this.mainCanvas.width = this.cvsWidth, this.mainCanvas.height = this.cvsHeight;
            for (var c = 0, d = this.elems.length; c < d; c++) this.elems[c].cvsWidth = this.cvsWidth, this.elems[c].cvsHeight = this.cvsHeight, this.elems[c].handleOffsets()
        }, a.prototype.drawBaseImg = function() {
            this.mainCtx.drawImage(this.currEl.mediaElem, this.currEl.sx, this.currEl.sy, this.currEl.sWidth, this.currEl.sHeight, 0, 0, this.cvsWidth, this.cvsHeight)
        }, a.prototype.drawBaseVid = function() {
            var a = this;
            this.transRunning || (this.baseInterval = requestAnimationFrame(function() {
                a.drawBaseImg(), a.drawBaseVid()
            }))
        }, a.prototype.drawBase = function() {
            this.transRunning || (this.currEl.isImage ? this.drawBaseImg() : this.drawBaseVid())
        }, a.prototype.easeOutCubic = function(a, b) {
            return this.colWidth * ((a = a / this.transDur - 1) * a * a + 1) + b
        }, a.prototype.drawTrans = function() {
            var a = this;
            if (this.transProgress === this.transTotalLen) return clearInterval(this.transInterval), this.transProgress = 0, this.transRunning = !1, this.currEl = this.newEl, void this.drawBase();
            this.transProgress++, this.drawBaseImg();
            for (var b = 0; b < 5; b++)
                if (this.transProgress > b * this.transDelay) {
                    var c = Math.round(100 * this.easeOutCubic(this.transProgress - b * this.transDelay, b * this.colWidth)) / 100,
                        d = Math.max(c - b * this.colWidth, 0) / this.colWidth;
                    this.mainCtx.drawImage(this.newEl.mediaElem, this.newEl.sx + b * this.newEl.colWidth, this.newEl.sy, this.newEl.colWidth * d, this.newEl.sHeight, b * this.colWidth, 0, d * this.colWidth, this.cvsHeight)
                }
            requestAnimationFrame(function() {
                a.drawTrans()
            })
        }, a.prototype.handleTrans = function(a) {
            this.newEl = this.elems[a], this.transRunning = !0, this.transProgress = 0, cancelAnimationFrame(this.baseInterval), this.transInterval = this.drawTrans()
        }, a.prototype.init = function() {
            this.setSizes(window.innerWidth, window.innerHeight), this.currEl = this.elems[0], this.drawBase()
        }, a
    }(),
    HighlightSlide = function() {
        function a(a, b) {
            this.slide = a, this.parent = b, this.reelWrap = this.slide.find(".reel-player"), this.reelFrame = this.slide.find(".video-player"), this.reelError = this.slide.find(".reel-error"), this.closePlayer = this.slide.find(".close-reel"), this.idx = this.slide.data("idx"), this.skipBgVid = isMobile || isIOS || isFirefox || isAndroid, this.skipBgVid ? this.canvasMedia = this.slide.data("imgFallback") : (this.bgVideo = this.slide.find(".highlight-bg-video"), this.slide.handleOnce("playBg", this, this.playBg), this.canvasMedia = this.bgVideo[0]), this.slide.handle("playVid", this, this.playVid), this.slide.handle("loadVid", this, this.loadVid), this.closePlayer.click(this, this.onReelEnded)
        }
        return a.prototype.handlePlayError = function(a) {
            this.reelError.html("Oh no! Sorry, it looks like we're having trouble talking to " + this.reelError.data("source") + ".<br>We'd love to tell you more about it in person, though. Click the link below, and let us show off our chops.").addClass("error-occurred"), a && console.log(a)
        }, a.prototype.handleLoadError = function(a) {
            var b = this;
            body.find(".play-reel-" + this.idx).off("click").click(this, function() {
                body.addClass("tn-leaving tn-home2work tn-home2work-step1").find(".tn-blinders-inner").last().handle("transitionend", b, function() {
                    window.location = b.reelWrap.find(".highlight-cta-link").attr("href")
                })
            }), a ? this.handlePlayError("Slide " + this.idx + " (" + this.reelError.data("source") + "): " + a[0]) : this.handlePlayError("There was an error loading the " + this.reelError.data("source") + " iframe on Slide " + this.idx), setTimeout(function() {
                b.playerInst.destroy()
            }, 1e3), this.frameComplete()
        }, a.prototype.onReelReady = function() {
            this.skipBgVid || this.bgVideo.attr("src", this.bgVideo[0].dataset.src).get(0).load()
        }, a.prototype.onReelEnded = function(a) {
            var b = this;
            switch (this.reelFrame.data("video-type")) {
                case "vimeo":
                    this.playerInst.pause().then()["catch"](function(a) {
                        b.handlePlayError(a)
                    });
                    break;
                default:
                    this.playerInst.pause(), this.reelWrap.handleOnce("transitionend", this, function() {
                        this.playerInst.setCurrentTime(0)
                    })
            }
            doc.off("keyup"), a.delegateTarget.classList.contains("trans-navigator") || body.removeClass("video-loaded reel-faded")
        }, a.prototype.playVid = function() {
            var a = this;
            if (body.replaceClass("video-loading", "video-loaded"), doc.escapePress(this, this.onReelEnded), !isMobile && !isIOS && !isAndroid) switch (this.reelFrame.data("video-type")) {
                case "youtube":
                    this.playerInst.playVideo();
                    break;
                case "vimeo":
                    this.playerInst.play().then()["catch"](function(b) {
                        a.handlePlayError(b)
                    });
                    break;
                case "raw_video":
                    this.playerInst.play()
            }
        }, a.prototype.triggerParent = function() {
            this.parent.trigger({
                type: "slideLoaded",
                canvasMedia: this.canvasMedia
            })
        }, a.prototype.frameComplete = function() {
            this.reelLoaded = !0, updateLoader(), this.bgLoaded && !this.slideLoaded && (this.slideLoaded = !0, this.triggerParent())
        }, a.prototype.bgComplete = function() {
            this.bgLoaded = !0, updateLoader(), this.reelLoaded && !this.slideLoaded && (this.slideLoaded = !0, this.triggerParent())
        }, a.prototype.playBg = function() {
            this.skipBgVid || this.bgVideo.get(0).play()
        }, a.prototype.handleTimers = function() {
            var a = this,
                b = 5e3;
            this.skipBgVid || (this.bgTimer = setTimeout(function() {
                console.log("the bg video timed out"), a.canvasMedia = a.slide.data("imgFallback"), a.bgVideo.off("canplaythrough"), a.slide.addClass("bg-video-failed"), a.bgComplete()
            }, b)), this.frameTimer = setTimeout(function() {
                a.reelFrame.off("loadFail").off("loadSuccess"), a.handleLoadError(["The " + a.reelError.data("source") + " iframe timed out"])
            }, b)
        }, a.prototype.loadVid = function() {
            this.onReelReady(), this.reelFrame.handle("errorVid", this, function(a) {
                clearTimeout(this.frameTimer), this.handleLoadError(a)
            }), this.reelFrame.handleOnce("loadSuccess", this, function() {
                clearTimeout(this.frameTimer), this.frameComplete()
            }), this.skipBgVid ? (this.bgLoaded = !0, updateLoader()) : this.bgVideo.handleOnce("canplaythrough", this, function() {
                clearTimeout(this.bgTimer), this.slide.addClass("bg-video-loaded"), this.bgComplete()
            }), this.playerInst = this.playerInst ? this.playerInst : this.reelFrame.setupVideo(this.reelFrame.data("src"), this, null, null, null, this.onReelEnded), this.handleTimers()
        }, a
    }(),
    Highlights = function() {
        function a(a) {
            var b = this;
            this.loadIdx = 0, this.frame = a, this.frameInfo = this.frame.siblings(".highlight-info-wrap"), this.reelBtn = this.frameInfo.find(".play-reel-wrap"), this.slides = this.frame.find(".highlight-slide"), this.slashLine = this.frameInfo.find(".slash-intro-line"), this.activeSlide = this.slides.first(), this.nums = this.frameInfo.find(".highlight-num"), this.canvas = new HighlightCanvas(body.find("#highlights-back-canvas")[0]), this.minVelocity = isTouchDevice || isSafari ? 26 : 80, this.arrow = body.find(".arrow-anchor"), loop.disableScroll(), this.nums.click(this, function(a) {
                var b = parseInt(a.delegateTarget.dataset.idx, 10);
                this.activeSlide.data("idx") !== b && this.handleNums(b)
            }), this.frame.handle("slideLoaded", this, function(a) {
                this.canvas.addElem(a.canvasMedia), this.loadNextSlide()
            }), this.slides.each(function() {
                new HighlightSlide(Query(this), b.frame)
            }), this.arrow.handleOnce("animationend", this, function() {
                loop.enableScroll(), win.scroll(this, function(a, b) {
                    b > this.minVelocity && !/(nav-open|nav-closing|reel-|tn-leaving)/.test(body.get(0).className) ? this.arrow.trigger("click") : a >= .75 * doc.height() - win.height() && this.arrow.trigger("click")
                })
            }), isTouchDevice && "number" == typeof window.orientation && (this.bgImgOverlay = body.find(".background-image-overlay"), this.calculateMobile(window.orientation), win.handle("orientationchange", this, function() {
                this.calculateMobile(window.orientation)
            })), this.init()
        }
        return a.prototype.handleNums = function(a) {
            var b = this.slides.filter(function(a, b) {
                    return Query(b).hasClass("active")
                }),
                c = b.data("idx");
            body.hasClass("slide-transitioning") || (this.canvas.handleTrans(a), body.replaceClass("slide-" + c, "slide-" + a + " slide-" + c + "-leaving slide-" + a + "-entering slide-transitioning"), b.replaceClass("active", "deactivated"), this.activeSlide = this.slides.eq(a), this.activeSlide.replaceClass("deactivated", "active"), isIE ? setTimeout(function() {
                body.removeClass("slide-transitioning slide-" + c + "-leaving slide-" + a + "-entering")
            }, 900) : this.slashLine.handleOnce("animationend", this, function() {
                body.removeClass("slide-transitioning slide-" + c + "-leaving slide-" + a + "-entering")
            }))
        }, a.prototype.handleBtnClick = function() {
            var a = this;
            body.addClass("reel-fading video-loading"), this.reelBtn.transitionClass(null, this, function() {
                a.activeSlide.trigger("playVid"), body.replaceClass("reel-fading", "reel-faded")
            })
        }, a.prototype.loadNextSlide = function() {
            this.loadIdx < this.slides.length ? (this.slides.eq(this.loadIdx).trigger("loadVid"), this.loadIdx++) : (this.canvas.init(), isIOS || isMobile || this.slides.trigger("playBg"))
        }, a.prototype.getInfoBottom = function() {
            return .5 * window.innerHeight - .5 * this.frameInfo.innerHeight() + 10
        }, a.prototype.calculateMobile = function(a) {
            switch (!0) {
                case 90 !== Math.abs(a):
                    this.landscapeBottom = this.landscapeBottom || this.getInfoBottom(), this.frameInfo.css("bottom", this.landscapeBottom);
                    break;
                default:
                    this.portraitBottom = this.portraitBottom || this.getInfoBottom(), this.frameInfo.css("bottom", this.portraitBottom)
            }
            this.bgImgOverlay.height(window.innerHeight)
        }, a.prototype.init = function() {
            this.loadNextSlide(), this.reelBtn.find(".play-reel-cover").handle("click", this, this.handleBtnClick)
        }, a
    }(),
    Slideshow = function() {
        function a(a) {
            this.animating = !1, this.container = a, this.slideshow = this.container.find(".slideshow-inner"), this.slides = this.slideshow.find(".slide"), this.currentSlide = this.slides.first(), this.nextSlide = this.currentSlide.next(), this.controls = this.container.find(".slideshow-control"), this.counter = this.container.find(".slideshow-counter-current"), this.touchstartX = 0, this.touchstartY = 0, this.controls.click(this, function(a) {
                this.animating || (this.animating = !0, this.handleTrans(a))
            }), isTouchDevice ? (this.slideshow.handle("touchstart", this, function(a) {
                this.animating || (this.touchstartX = a.originalEvent.touches[0].clientX, this.touchstartY = a.originalEvent.touches[0].clientY)
            }), this.slideshow.handle("touchend", this, function(a) {
                this.animating || (this.touchendX = a.originalEvent.changedTouches[0].clientX, this.touchendY = a.originalEvent.changedTouches[0].clientY, this.touchDiffX = this.touchstartX - this.touchendX, this.touchDiffY = this.touchstartY - this.touchendY, Math.abs(this.touchDiffX) > Math.abs(this.touchDiffY) && this.handleGesture())
            }), this.controls.filter(function() {
                return this.classList.contains("slideshow-arrow-wrap")
            })) : this.controls.hover(this, this.handlePeek)
        }
        return a.prototype.updateCounter = function(a) {
            this.counter.text(a)
        }, a.prototype.transToggle = function(a, b) {
            this.currentSlide.addClass("slide-from-current"), this.controls.removeClass("no-pointer"), a.replaceClass("peek", "slide-to-current"), this.controls.one("mouseleave", function() {
                a.siblings().removeClass("peek")
            }), this.updateCounter(a.data("idx")), a.handleOnce("transitionend", this, function() {
                switch (b) {
                    case "prev":
                        a.replaceClass("slide-prev slide-to-current", "slide-current"), this.currentSlide.replaceClass("slide-current", "slide-next");
                        break;
                    case "next":
                        a.replaceClass("slide-next slide-to-current", "slide-current"), this.currentSlide.replaceClass("slide-current", "slide-prev")
                }
                this.currentSlide = a, this.nextSlide = this.currentSlide.next().hasClass("slide") ? this.currentSlide.next() : void 0, this.prevSlide = this.currentSlide.prev().hasClass("slide") ? this.currentSlide.prev() : void 0, this.slides.removeClass("peek"), this.animating = !1
            })
        }, a.prototype.handleTrans = function(a) {
            switch (a.delegateTarget.dataset.dir) {
                case "prev":
                    this.prevSlide ? this.transToggle(this.prevSlide, "prev") : this.currentSlide.addClass("bounce-prev").handleOnce("animationend", this, function(a) {
                        a.delegateTarget.classList.remove("bounce-prev"), this.animating = !1
                    });
                    break;
                case "next":
                    this.nextSlide ? this.transToggle(this.nextSlide, "next") : this.currentSlide.addClass("bounce-next").handleOnce("animationend", this, function(a) {
                        a.delegateTarget.classList.remove("bounce-next"), this.animating = !1
                    })
            }
        }, a.prototype.handlePeek = function(a) {
            switch (a.delegateTarget.dataset.dir) {
                case "prev":
                    this.prevSlide ? this.container.toggleClass("peek-prev") : this.container.removeClass("peek-prev"), this.prevSlide && !this.animating ? (this.slides.removeClass("slide-from-current"), this.prevSlide.toggleClass("peek")) : Query(a.target).addClass("no-pointer");
                    break;
                case "next":
                    this.nextSlide ? this.container.toggleClass("peek-next") : this.container.removeClass("peek-next"), this.nextSlide && !this.animating ? (this.slides.removeClass("slide-from-current"), this.nextSlide.toggleClass("peek")) : Query(a.target).addClass("no-pointer")
            }
        }, a.prototype.handleGesture = function() {
            this.nextSlide && this.touchDiffX > 75 ? (this.animating = !0, this.transToggle(this.nextSlide, "next")) : this.prevSlide && this.touchDiffX < -75 && (this.animating = !0, this.transToggle(this.prevSlide, "prev"))
        }, a
    }(),
    parallaxerKeyCounter = 0,
    allParallaxers = {},
    Parallax = function() {
        function a(a) {
            this.elem = a, this.key = "parallaxer-" + parallaxerKeyCounter, this.init(), this.calculate(), win.resize(this, function() {
                isMobileChrome || this.calculate()
            }), this.supportedPerspectiveOrigin && scrollElem.scroll(this, this.update)
        }
        return a.prototype.calculate = function() {
            this.winHeight = win.height()
        }, a.prototype.update = function() {
            var a = this.elem.getBoundingClientRect(),
                b = (this.winHeight / 2 - a.bottom) / 3 + 100;
            a.bottom > -100 && a.top < this.winHeight + 100 && (this.elem.style[this.supportedPerspectiveOrigin] = "50% " + b + "%")
        }, a.prototype.reveal = function() {
            this.elem.className += " revealed"
        }, a.prototype.invokeAll = function(a) {
            var b = [];
            for (var c in allParallaxers) b.push(allParallaxers[c]);
            for (var d = 0, e = b.length; d < e; d++) b[d][a]()
        }, a.prototype.updateAll = function(a) {
            this.invokeAll("update"), a && this.revealAll()
        }, a.prototype.revealAll = function() {
            this.invokeAll("reveal")
        }, a.prototype.init = function() {
            var a, b = ["WebkitPerspectiveOrigin", "perspectiveOrigin"];
            for (allParallaxers[this.key] = this, parallaxerKeyCounter += 1, a = 0; a < b.length; a++) b[a] in docEl.style && (this.supportedPerspectiveOrigin = b[a])
        }, a
    }(),
    PointerToggle = function() {
        function a(a) {
            var b = this;
            this.triggers = a.find(".pointer-toggle-trigger"), this.targets = a.find(".pointer-toggle-target"), this.triggers.mouseenter(function(a) {
                var c = a.delegateTarget;
                c.classList.contains("active") || c.classList.contains("init-active") || (b.triggers.filter(".active").replaceClass("active", "deactivated"), b.triggers.filter(".init-active").replaceClass("init-active", "deactivated"), b.targets.filter(".active").replaceClass("active", "deactivated"), b.targets.filter(".init-active").replaceClass("init-active", "deactivated"),
                    c.classList.remove("deactivated"), c.classList.add("active"), b.targets[c.dataset.idx].classList.remove("deactivated"), b.targets[c.dataset.idx].classList.add("active"))
            })
        }
        return a
    }(),
    HoverGif = function() {
        function a(a) {
            this.outer = a, this.inner = a.find(".hover-gif-inner"), this.outer.hover(this, this.mouseIn, this.mouseOut)
        }
        return a.prototype.mouseIn = function() {
            this.inner.addClass("active").css("background-image", function() {
                return "url(" + this.dataset.gif + ")"
            })
        }, a.prototype.mouseOut = function() {
            this.inner.removeClass("active"), this.inner.transitionClass(null, this, function() {
                this.inner.css("background-image", "")
            })
        }, a
    }(),
    VideoPlayer = function() {
        function a(a) {
            this.container = a, this.buttons = a.find(".play-button"), this.player = a.find(".video-player"), this.errorWindow = a.find(".video-error"), a.hasClass("case-study-player") && (this.studyRow = a.closest(".study-content-row")), this.buttons.parent().click(this, this.clickInit), this.player.handleOnce("errorVid", this, this.handleError)
        }
        return a.prototype.handleError = function() {
            var a = this;
            this.errorWindow.html("Oh no! Looks like we're having trouble talking to " + this.errorWindow.data("source") + ". Try again soon?"), this.container.addClass("error-occurred"), window.clearTimeout(this.errorTimeout), setTimeout(function() {
                a.playerInst.destroy()
            }, 1e3), this.studyRow && this.studyRow.removeClass("video-playing")
        }, a.prototype.handleReady = function() {
            this.container.replaceClass("video-loading", "video-loaded"), this.studyRow && (body.find(".active-video-row").removeClass("active-video-row"), this.studyRow.addClass("video-playing active-video-row")), window.clearTimeout(this.errorTimeout), !isTouchDevice && this.player.data("autoplay") && this.playerInst.play()
        }, a.prototype.handlePause = function() {
            this.container.replaceClass("playing", "paused"), this.studyRow && this.studyRow.replaceClass("video-playing", "video-paused")
        }, a.prototype.handlePlay = function() {
            this.container.replaceClass("paused", "playing"), this.studyRow && (body.find(".active-video-row").removeClass("active-video-row"), this.studyRow.addClass("video-playing active-video-row"))
        }, a.prototype.handleEnd = function() {
            this.container.removeClass("playing paused hide-overlays video-loaded"), this.studyRow && this.studyRow.removeClass("video-playing")
        }, a.prototype.clickInit = function(a) {
            var b = this;
            this.container.addClass("video-loading"), this.playerInst = this.player.setupVideo(a.delegateTarget.dataset.src, this, this.handleReady, this.handlePause, this.handlePlay, this.handleEnd), window.clearTimeout(this.errorTimeout), this.errorTimeout = setTimeout(function() {
                b.handleError()
            }, 8e3), this.player.handleOnce("transitionend", this, function() {
                this.container.addClass("hide-overlays")
            })
        }, a
    }(),
    ClickToggle = function() {
        function a(a) {
            this.container = a, this.target = this.container.hasClass("click-toggle-target") ? this.container : this.container.find(".click-toggle-target"), this.target.click(this, this.handleToggle)
        }
        return a.prototype.handleToggle = function() {
            this.container.hasClass("click-toggle-transition") ? this.handleTransition() : this.container.toggleClass("click-toggled-on")
        }, a.prototype.handleTransition = function() {
            this.container.hasClass("click-toggled-off") ? (this.container.replaceClass("click-toggled-off", "click-toggling-on"), this.container.transitionClass(null, this, function() {
                this.container.replaceClass("click-toggling-on", "click-toggled-on")
            })) : (this.container.replaceClass("click-toggled-on", "click-toggling-off"), this.container.transitionClass(null, this, function() {
                this.container.replaceClass("click-toggling-off", "click-toggled-off")
            }))
        }, a
    }(),
    JobOpenings = function() {
        function a(a) {
            this.container = a, this.jobs = a.find(".job-opening-row"), this.jobTitle = a.find(".careers-job-title"), this.clickTarget = isMobile ? this.jobTitle : this.jobs, this.bodyHTML = Query("body, html"), this.windowWidth = win.width(), this.windowHeight = win.height(), this.jobsOffset = a.offset();
            var b = this;
            this.clickTarget.click(this, function(a) {
                a.target.href ? window.location = a.target.href : b.handleClick(a)
            }), this.setTitleHeights(this.jobs), win.resize(this, function() {
                isMobileChrome || (this.windowHeight = win.height(), this.jobsOffset = a.offset(), win.width() != this.windowWidth && (this.setTitleHeights(this.jobs), this.windowWidth = win.width()))
            }), Query.extend(Query.easing, {
                easeInOutQuint: function(a, b, c, d, e) {
                    return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
                }
            })
        }
        return a.prototype.setTitleHeights = function(a) {
            a.each(function() {
                var a = Query(this),
                    b = a.find(".careers-job-title").outerHeight();
                this.dataset.titleheight = b.toString(), a.css("height", b)
            })
        }, a.prototype.handleClick = function(a) {
            var b, c = isMobile ? Query(a.delegateTarget).parents(".job-opening-row") : Query(a.delegateTarget),
                d = c.find(".careers-job-title").outerHeight(),
                e = c.find(".careers-job-description-span").outerHeight(),
                f = navBar.outerHeight(),
                g = doc.scrollTop();
            c.hasClass("opened") ? c.removeClass("opened").css("height", d) : (b = c.offset().top - f, isMobile || this.windowHeight < 900 || this.windowHeight >= 900 && this.jobsOffset.top > g + this.windowHeight / 2 || b - g < -20 ? this.bodyHTML.animate({
                scrollTop: c.offset().top - f
            }, 1e3, "easeInOutQuint", function() {
                c.addClass("opened"), c.css("height", d + e + 40)
            }) : (c.addClass("opened"), c.css("height", d + e + 40)))
        }, a
    }(),
    DragdealerCarousel = function() {
        function a(a) {
            this.slideshow = a, this.slides = this.slideshow.find(".drag-slide"), this.steps = this.slideshow.data("steps"), this.count = this.slides.length, this.offset = null != this.slideshow.data("offset") ? Number(this.slideshow.data("offset")) : 0, this.init()
        }
        return a.prototype.init = function() {
            this.slideshow.find(".handle").css("width", this.count * this.slides.width()), "latest" !== body.data("page") ? (this.slideshow.find(".handle").css("width", this.count + "00%"), this.slides.css("width", 100 / this.count + "%")) : this.count <= 3 && this.slideshow.css("maxWidth", 320 * this.count), new Dragdealer(this.slideshow.attr("id"), {
                steps: this.steps,
                speed: .4,
                loose: !0,
                requestAnimationFrame: !0,
                x: this.offset
            })
        }, a
    }(),
    DragSlider = function() {
        function a(a, b) {
            this.container = a, this.colPadding = b, this.slides = this.container.find(".mobile-drag-col"), this.handle = this.container.find(".handle"), this.counter = this.container.find(".slideshow-counter-current"), this.count = this.slides.length;
            var c = this;
            c.init()
        }
        return a.prototype.init = function() {
            var a = this,
                b = [];
            this.slides.each(function(a) {
                b[a] = this.clientWidth
            });
            var c = Math.max.apply(Math, b),
                d = c + this.colPadding;
            this.slides.each(function() {
                this.style.width = d + "px"
            }), this.handle.css("width", d * this.count), this.container.css("height", this.handle.innerHeight()), this.container.css("flex", "0 0 " + d + "px"), new Dragdealer(this.container.attr("id"), {
                steps: this.count,
                speed: .4,
                loose: !0,
                requestAnimationFrame: !0,
                callback: function(b, c) {
                    var d = this.getStep()[0];
                    a.counter.text(d)
                }
            })
        }, a
    }(),
    WorkGrid = function() {
        function a(a, b) {
            this.fixed = !1, this.atBottom = !1, this.allYears = a, this.yearBox = this.allYears.filter(function() {
                return Query(this).hasClass("year-handler")
            }), this.twentyBox = this.allYears.filter(function() {
                return Query(this).hasClass("work-grid-twenty")
            }), this.slideHandle = this.yearBox.find(".year-slide-wrap"), this.slides = this.yearBox.find(".slide-number"), this.slideLength = this.slides.length, this.workGrid = b, this.lastStudy = this.workGrid.find(".case-study-wrap").last(), this.scrollPercentage = 0, this.scrollLength = 0, this.calculate(), this.init(), win.resize(this, this.calculate), scrollElem.scroll(this, this.handleParallax)
        }
        return a.prototype.calculate = function() {
            var a = this.workGrid.offset().top,
                b = doc.height(),
                c = b - this.lastStudy.offset().top;
            this.gridDifference = a - parseInt(this.yearBox.data("offset")), this.handleOffset = this.slides.innerHeight() / this.slideHandle.innerHeight(), this.allYears.css("top", a), this.scrollLength = doc.height() - (this.gridDifference + c)
        }, a.prototype.handleParallax = function(a) {
            var b, c, d, e;
            this.fixed ? (b = Math.min((a - this.gridDifference) / this.scrollLength, 1), c = Math.min(100 * b, 100), d = c - 100 * this.handleOffset * b, e = Math.min(d, (this.slideLength - 1) / this.slideLength * 100), this.yearBox.css("transform", "translateY(" + c / 2 + "%)"), this.slideHandle.css("transform", "translateY(-" + e + "%)"), this.twentyBox.css("transform", "translateY(" + c / 4 + "%)")) : this.atBottom || (this.allYears.css({
                transform: "",
                top: this.workGrid.offset().top
            }), this.slideHandle.css("transform", ""))
        }, a.prototype.init = function() {
            var a = this;
            this.workGrid.waypoint({
                handler: function() {
                    a.allYears.toggleClass("fixed"), a.fixed = !a.fixed, a.fixed ? a.allYears.css("top", "150px") : a.allYears.css("top", a.workGrid.offset().top)
                },
                offset: parseInt(a.yearBox.data("offset"))
            }), this.lastStudy.waypoint({
                handler: function() {
                    a.allYears.toggleClass("fixed hit-bottom"), a.fixed = !a.fixed, a.atBottom = !a.atBottom, a.atBottom ? a.allYears.css("top", a.lastStudy.offset().top + parseInt(a.yearBox.data("offset"))) : a.allYears.css("top", "150px")
                }
            })
        }, a
    }(),
    TalkInput = function() {
        function a(a) {
            var b = this;
            this.form = a, this.input = this.form.find("#talk-input-elem"), this.sysMessage = this.form.find("#talk-sys-message"), this.button = this.form.find("#talk-input-submit"), this.placeholder = this.sysMessage.data("placeholder"), this.isTyping = !1, this.submitCount = 0, this.limitMessages = ["Alright motormouth, that's plenty...", "Slow your roll", "There are no dumb questions, only dumb...", "Go ask your Mother.", "Magic 8-ball says.. Ask again later.", "Perhaps Siri has an appropriate answer.", "Get back to work.", "Shut your mouth when you're talking to me", "Put a cork in it", "STFU", "lmgtfy.com"], this.input.val("").keypress(function() {
                if (b.input.val().length > 0) return b.sysMessage.addClass("hide_me"), b.input.val().length < 200
            }).blur(function() {
                0 === b.input.val().length && b.sysMessage.removeClass("hide_me")
            }).returnPress(this, this.handleSubmit), this.form.handle("submit", this, function(a) {
                a.preventDefault(), b.handleSubmit()
            }), this.sysMessage.handleOnce("transitionend", this, function() {
                b.handleMessage(b.placeholder, "type")
            })
        }
        return a.prototype.handleSubmit = function() {
            this.input.val().length > 0 && (this.input.blur(), this.form.addClass("submitting"), this.sysMessage.text(""), this.input.handleOnce("transitionend", this, function() {
                var a = this;
                this.sysMessage.removeClass("hide_me"), this.submitCount < 3 ? (this.submitCount++, this.handleMessage("Sending...", "type"), ajax({
                    type: "POST",
                    url: this.form.data("action"),
                    data: this.form.serialize(),
                    success: function(b) {
                        a.input.val(""), 200 == b.status ? a.handleAjaxMessage("Success!") : (a.handleAjaxMessage("Sorry, an error occurred."), console.log("FAIL WHALE"), console.log(b.error))
                    }
                }).fail(function(b, c) {
                    a.input.val(""), a.handleAjaxMessage("Sorry, an error occurred."), console.log(c)
                })) : (this.form.addClass("limit-reached"), this.input.val(""), this.handleAjaxMessage(this.limitMessages[getRandomIntInclusive(0, this.limitMessages.length)]))
            }))
        }, a.prototype.handleAjaxMessage = function(a) {
            var b = this;
            this.isTyping ? this.sysMessage.one("finished", function() {
                setTimeout(function() {
                    b.ajaxMessage(a)
                }, 500)
            }) : setTimeout(function() {
                b.ajaxMessage(a)
            }, 500)
        }, a.prototype.ajaxMessage = function(a) {
            var b = this;
            this.handleMessage(this.sysMessage.text(), "delete"), this.sysMessage.one("finishedDeleting", function() {
                b.handleMessage(a, "type"), b.sysMessage.one("finishedTyping", function() {
                    setTimeout(function() {
                        b.handleMessage(b.sysMessage.text(), "delete"), b.sysMessage.one("finishedDeleting", function() {
                            b.form.replaceClass("submitting limit-reached", "submitted"), b.button.handleOnce("animationend", b, function() {
                                b.form.removeClass("submitted")
                            }), b.handleMessage(b.placeholder, "type")
                        })
                    }, 1250)
                })
            })
        }, a.prototype.handleMessage = function(a, b) {
            if (!this.isTyping) {
                var c = a.length;
                switch (this.isTyping = !0, b) {
                    case "type":
                        this.handleType(a, c);
                        break;
                    case "delete":
                        this.handleDelete(a, c)
                }
            }
        }, a.prototype.handleType = function(a, b) {
            var c = this,
                d = 0,
                e = b,
                f = setInterval(function() {
                    if (d > e) c.isTyping = !1, c.sysMessage.trigger("finishedTyping").trigger("finished"), clearInterval(f);
                    else {
                        var b = d === e ? e : -e + d;
                        c.sysMessage.text(a.slice(0, b)), d++
                    }
                }, 75)
        }, a.prototype.handleDelete = function(a, b) {
            var c = this,
                d = b,
                e = setInterval(function() {
                    d > 0 ? (d--, c.sysMessage.text(a.slice(0, d))) : (c.isTyping = !1, c.sysMessage.trigger("finishedDeleting").trigger("finished"), clearInterval(e))
                }, 50)
        }, a
    }(),
    TransNavigator = function() {
        function a(a, b) {
            this.anchors = a, this.introElems = b, this.blinders = body.find("tn-blinders-wrap"), this.introElems.length > 0 && canAnim ? (this.introProg = 0, this.handleIntro()) : (body.replaceClass("loading load-complete introducing", "introduced"), doc.trigger("introduced")), win.handle("beforeunload", this, this.transDefault), this.anchors.click(this, this.setupNav)
        }
        return a.prototype.handleIntro = function() {
            var a = this;
            this.introElems.each(function() {
                var b = Query(this),
                    c = b.data("tnIntroUseanim") ? "animationend" : "transitionend";
                ieVer >= 10 && b.closest("svg").length > 0 ? a.introProg++ : b.one(c, function() {
                    a.introProg++, a.introProg === a.introElems.length && (body.replaceClass("loading load-complete introducing", "introduced"), doc.trigger("introduced"))
                })
            })
        }, a.prototype.setupNav = function(a) {
            this.target = a.delegateTarget, body.hasClass("introducing") ? window.location = this.target.href : (this.data = this.target.dataset, this.steps = this.data.tnListeners.replace(" ", "").split(","), this.name = this.data.tnName ? this.target.dataset.tnName : this.target.href.replace(/\/$/, "").split("/").pop(), this.handleTrans(this.data.tnOutroUseanim ? "animationend" : "transitionend"))
        }, a.prototype.transDefault = function() {
            window.blankClick || (body.addClass("tn-leaving tn-leaving-final"), blinders.addEventListener("transitionend", function() {
                window.scrollTo(0, 0)
            }, !0))
        }, a.prototype.handleTrans = function(a) {
            var b = this,
                c = this.steps.length,
                d = this.data.tnTimeout ? parseInt(this.data.tnTimeout, 10) : 1e3;
            body.addClass("tn-leaving tn-" + this.name + " tn-" + this.name + "-step1");
            for (var e = 0; e < c; e++) {
                var f, g = body.find(this.steps[e]).last();
                g.addClass("tn-listener tn-listener-" + (e + 1)), g.parent().addClass("tn-listener-parent tn-listener-parent-" + (e + 1)), e + 1 === c ? (g.handle(a, this, function() {
                    body.addClass("tn-leaving-final"), window.location = this.target.href
                }), setTimeout(function() {
                    window.location = b.target.href
                }, d)) : (f = "tn-" + this.name + "-step" + (e + 2), g.handle(a, this, function() {
                    body.addClass(f)
                }))
            }
        }, a
    }(),
    Polyline = function() {
        function a() {}
        return a.prototype._encode = function(a, b) {
            a = Math.round(a * b), a <<= 1, a < 0 && (a = ~a);
            for (var c = ""; a >= 32;) c += String.fromCharCode((32 | 31 & a) + 63), a >>= 5;
            return c += String.fromCharCode(a + 63)
        }, a.prototype.decode = function(a, b) {
            for (var c, d, e = 0, f = 0, g = 0, h = [], i = 0, j = 0, k = null, l = Math.pow(10, b || 5); e < a.length;) {
                k = null, i = 0, j = 0;
                do k = a.charCodeAt(e++) - 63, j |= (31 & k) << i, i += 5; while (k >= 32);
                c = 1 & j ? ~(j >> 1) : j >> 1, i = j = 0;
                do k = a.charCodeAt(e++) - 63, j |= (31 & k) << i, i += 5; while (k >= 32);
                d = 1 & j ? ~(j >> 1) : j >> 1, f += c, g += d, h.push([f / l, g / l])
            }
            return h
        }, a.prototype.encode = function(a, b) {
            if (!a.length) return "";
            for (var c = Math.pow(10, b || 5), d = this._encode(a[0][0], c) + this._encode(a[0][1], c), e = 1; e < a.length; e++) {
                var f = a[e],
                    g = a[e - 1];
                d += this._encode(f[0] - g[0], c), d += this._encode(f[1] - g[1], c)
            }
            return d
        }, a.prototype._flipped = function(a) {
            for (var b = [], c = 0; c < a.length; c++) b.push(a[c].slice().reverse());
            return b
        }, a.prototype.fromGeoJSON = function(a, b) {
            if (a && "Feature" === a.type && (a = a.geometry), !a || "LineString" !== a.type) throw new Error("Input must be a GeoJSON LineString");
            return this.encode(this._flipped(a.coordinates), b)
        }, a.prototype.toGeoJSON = function(a, b) {
            var c = this.decode(a, b);
            return {
                type: "LineString",
                coordinates: this._flipped(c)
            }
        }, a
    }(),
    StravaMap = function() {
        function a(a, b) {
            this.dataLayers = [], this.locationLayers = [], this.trailsActive = !1, this.wlsHQ = [-111.8865011, 40.7636138], this.popup = new mapboxgl.Popup({
                closeButton: !1,
                closeOnClick: !1
            }), this.container = a, this.accessToken = this.container.data("access-token"), this.data = b, this.createMap()
        }
        return a.prototype.createMap = function() {
            mapboxgl.accessToken = this.accessToken, this.map = new mapboxgl.Map({
                container: this.container.attr("id"),
                style: "mapbox://styles/shrdnar/cimdny7ef00g69lm1mi9csb5s",
                zoom: 9,
                center: this.wlsHQ
            }), this.map.scrollZoom.disable(), this.map.on("style.load", this.onLoad.bind(this))
        }, a.prototype.onLoad = function() {
            this.map.resize(), this.data.forEach(function(a) {
                if ("Trails" === a.category_name) a.locations.forEach(function(a) {
                    this.addPolyline(a)
                }, this);
                else {
                    var b = [];
                    a.locations.forEach(function(a) {
                        a.label = a.name + " - " + a.distance + " mi";
                        var c = {
                            type: "Feature",
                            properties: a,
                            geometry: {
                                type: "Point",
                                coordinates: a.lnglat
                            }
                        };
                        b.push(c)
                    });
                    var c = {
                        type: "FeatureCollection",
                        features: b,
                        properties: {
                            active: !1
                        }
                    };
                    this.map.addSource("category" + a.category_id, {
                        type: "geojson",
                        data: c
                    });
                    var d = {
                        id: "category" + a.category_id,
                        type: "circle",
                        source: "category" + a.category_id,
                        layout: {
                            visibility: "none"
                        },
                        paint: {
                            "circle-radius": 6,
                            "circle-color": "#" + a.color,
                            "circle-opacity": .8
                        }
                    };
                    this.locationLayers.push("category" + a.category_id), this.map.addLayer(d)
                }
            }, this);
            for (var a = Array(body.find(".category-item")), b = 0, c = a; b < c.length; b++) {
                var d = c[b];
                d = Query(d), d.click(this, this.categoryItemClick)
            }
            var e = document.getElementById("wls-icon");
            new mapboxgl.Marker(e).setLngLat(this.wlsHQ).addTo(this.map)
        }, a.prototype.onMouseMove = function(a) {
            var b = this.dataLayers.concat(this.locationLayers),
                c = this.map.queryRenderedFeatures(a.point, {
                    layers: b
                });
            if (this.map.getCanvas().style.cursor = c.length ? "pointer" : "", !c.length) return void this.popup.remove();
            var d = c[0];
            this.popup.setLngLat(a.lngLat).setHTML(d.properties.label).addTo(this.map)
        }, a.prototype.addPolyline = function(a) {
            var b = new Polyline,
                c = b.toGeoJSON(a.map.polyline);
            a.label = a.name + " - " + a.distance.miles.toFixed(1) + " mi", this.map.addSource("route" + a.id, {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: a,
                    geometry: c
                }
            });
            var d = {
                id: "route" + a.id,
                type: "line",
                source: "route" + a.id,
                layout: {
                    visibility: "none",
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": "#f76f37",
                    "line-width": 5
                }
            };
            this.dataLayers.push("route" + a.id), this.map.addLayer(d), this.map.setPaintProperty("route" + a.id, "line-opacity", .6)
        }, a.getBoundingBox = function(a) {
            for (var b, c, d = {}, e = 0; e < a.length; e++) c = a[e][0], b = a[e][1], d.xMin = d.xMin < c ? d.xMin : c, d.xMax = d.xMax > c ? d.xMax : c, d.yMin = d.yMin < b ? d.yMin : b, d.yMax = d.yMax > b ? d.yMax : b;
            var f = .001,
                g = [
                    [d.xMin - f, d.yMin - f],
                    [d.xMax + f, d.yMax + f]
                ];
            return mapboxgl.LngLatBounds.convert(g)
        }, a.prototype.startIntro = function() {
            this.map.on("mousemove", this.onMouseMove.bind(this)), this.container.addClass("active"), body.find(".contact-business-address").addClass("hide"), body.find("#wls-icon").addClass("active"), body.find("#mapbox-logo").addClass("active"), body.find("#strava-logo").addClass("active"), this.flyToHQ();
            var a = 50,
                b = body.find(".category-item"),
                c = 0;
            for (c; c < b.length; c++) {
                var d = Query(b[c]);
                d.delay(c * a + 1e3).queue(function(a) {
                    Query(this).addClass("active"), a()
                })
            }
        }, a.prototype.flyToHQ = function(a) {
            void 0 === a && (a = .5), this.map.flyTo({
                center: this.wlsHQ,
                zoom: 15,
                speed: a,
                curve: 1
            })
        }, a.prototype.categoryItemClick = function(b) {
            this.hideAllLayers();
            var c = parseInt(b.currentTarget.getAttribute("id"));
            if (2 !== c) {
                var d = this.map.getSource("category" + c);
                if (this.trailsActive = !1, this.locationLayers.forEach(function(a) {
                        if (a !== d.id) {
                            var b = this.map.getSource(a);
                            b._data.properties.active = !1
                        }
                    }, this), d._data.properties.active = !d._data.properties.active, d._data.properties.active) {
                    this.map.setLayoutProperty("category" + c, "visibility", "visible");
                    var e = [];
                    d._data.features.forEach(function(a) {
                        e.push(a.geometry.coordinates)
                    }), this.map.fitBounds(a.getBoundingBox(e), {
                        padding: 50
                    })
                } else this.flyToHQ(1)
            } else {
                var f = [];
                this.locationLayers.forEach(function(a) {
                    var b = this.map.getSource(a);
                    b._data.properties.active = !1
                }, this), this.trailsActive = !this.trailsActive, this.trailsActive ? (this.dataLayers.forEach(function(a) {
                    var b = this.map.getSource(a),
                        c = this.map.getLayer(a);
                    b._data.geometry.coordinates.forEach(function(a) {
                        f.push(a)
                    }), this.map.setLayoutProperty(a, "visibility", "none" === c.layout.visibility ? "visible" : "none")
                }, this), this.map.fitBounds(a.getBoundingBox(f), {
                    padding: 50
                })) : this.flyToHQ(1)
            }
        }, a.prototype.hideAllLayers = function() {
            var a = this.dataLayers.concat(this.locationLayers);
            a.forEach(function(a) {
                this.map.setLayoutProperty(a, "visibility", "none")
            }, this)
        }, a
    }(),
    Body;
! function(a) {
    function b(a) {
        switch (a) {
            case "homepage":
                new Highlights(body.find(".ontop"));
                break;
            case "workpage":
                isTouchDevice || (new WorkGrid(body.find(".work-grid-year"), mainContent.find(".work-grid-row")), body.enumerate(".case-study-wrap", function() {
                    this.hoverdir({
                        hoverElem: ".case-study-info",
                        fadeElem: ".info-inner",
                        speed: "900"
                    })
                }));
                break;
            case "careers":
                new JobOpenings(body.find("#jobs"));
                break;
            case "case-study":
                var b = body.find(".study-hero-row"),
                    c = b.find(".study-title"),
                    d = -(c.height() / 4) + 2 * navBar.height();
                c.one("animationend", function() {
                    b.removeClass("animating")
                }), c.waypoint({
                    handler: function() {
                        b.addClass("reverse-scroll-anim"), b.toggleClass("scrolled-past")
                    },
                    offset: d
                });
                break;
            case "contact":
                var e = body.find("#map-box");
                setTimeout(function() {
                    e.mouseover(function() {
                        window.stravaMap.startIntro(), e.unbind("mouseover")
                    })
                }, 3e3), isMobile && new DragSlider(body.find("#contact-drag"), 10);
                break;
            case "talk":
                new TalkInput(body.find("#talk-input"));
                break;
            case "team":
                var f = body.find("#awards-col");
                f.waypoint({
                    handler: function() {
                        f.addClass("loading").find(".loaded").find(".awards-list").one("transitionend", function() {
                            f.replaceClass("loading", "loaded")
                        }), this.destroy()
                    },
                    offset: "60%"
                }), f.find(".award-underline").on("transitionend", function(a) {
                    Query(a.target).closest(".awards-info").removeClass("deactivated")
                }), isMobile && new DragSlider(body.find("#capabilities-drag"), 65)
        }
    }

    function c() {
        var a;
        win.on("load", function() {
            winLoaded = !0, clearTimeout(a), body.data("hasLoader") ? updateLoader() : (body.addClass("introducing"), setTimeout(function() {
                doc.trigger("loadcomplete")
            }, 200))
        }), browser.init(), new Navigation, body.loadContent(), window.onpageshow = function(a) {
            a.persisted && setTimeout(function() {
                window.location.reload()
            }, 1e3)
        }, b(body.data("page")), a = setTimeout(function() {
            skipLoader(), ga("send", "event", "Timeouts", "Timeout Occurred", "Master Timeout")
        }, 9e3)
    }
    a.init = c
}(Body || (Body = {})), Body.init();