(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const f of r)
      if (f.type === "childList")
        for (const o of f.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(r) {
    const f = {};
    return (
      r.integrity && (f.integrity = r.integrity),
      r.referrerPolicy && (f.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const f = u(r);
    fetch(r.href, f);
  }
})();
function Ey(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default")
    ? d.default
    : d;
}
var C0 = { exports: {} },
  Xr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yp;
function xy() {
  if (Yp) return Xr;
  Yp = 1;
  var d = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function u(i, r, f) {
    var o = null;
    if (
      (f !== void 0 && (o = "" + f),
      r.key !== void 0 && (o = "" + r.key),
      "key" in r)
    ) {
      f = {};
      for (var h in r) h !== "key" && (f[h] = r[h]);
    } else f = r;
    return (
      (r = f.ref),
      { $$typeof: d, type: i, key: o, ref: r !== void 0 ? r : null, props: f }
    );
  }
  return (Xr.Fragment = n), (Xr.jsx = u), (Xr.jsxs = u), Xr;
}
var Vp;
function Ay() {
  return Vp || ((Vp = 1), (C0.exports = xy())), C0.exports;
}
var E = Ay(),
  R0 = { exports: {} },
  xt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zp;
function My() {
  if (Zp) return xt;
  Zp = 1;
  var d = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    o = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    y = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function b(M) {
    return M === null || typeof M != "object"
      ? null
      : ((M = (S && M[S]) || M["@@iterator"]),
        typeof M == "function" ? M : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    C = {};
  function V(M, G, I) {
    (this.props = M),
      (this.context = G),
      (this.refs = C),
      (this.updater = I || z);
  }
  (V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (M, G) {
      if (typeof M != "object" && typeof M != "function" && M != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, M, G, "setState");
    }),
    (V.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    });
  function O() {}
  O.prototype = V.prototype;
  function Q(M, G, I) {
    (this.props = M),
      (this.context = G),
      (this.refs = C),
      (this.updater = I || z);
  }
  var B = (Q.prototype = new O());
  (B.constructor = Q), T(B, V.prototype), (B.isPureReactComponent = !0);
  var X = Array.isArray;
  function P() {}
  var x = { H: null, A: null, T: null, S: null },
    Y = Object.prototype.hasOwnProperty;
  function k(M, G, I) {
    var tt = I.ref;
    return {
      $$typeof: d,
      type: M,
      key: G,
      ref: tt !== void 0 ? tt : null,
      props: I,
    };
  }
  function W(M, G) {
    return k(M.type, G, M.props);
  }
  function rt(M) {
    return typeof M == "object" && M !== null && M.$$typeof === d;
  }
  function lt(M) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      M.replace(/[=:]/g, function (I) {
        return G[I];
      })
    );
  }
  var at = /\/+/g;
  function ht(M, G) {
    return typeof M == "object" && M !== null && M.key != null
      ? lt("" + M.key)
      : G.toString(36);
  }
  function _t(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (
          (typeof M.status == "string"
            ? M.then(P, P)
            : ((M.status = "pending"),
              M.then(
                function (G) {
                  M.status === "pending" &&
                    ((M.status = "fulfilled"), (M.value = G));
                },
                function (G) {
                  M.status === "pending" &&
                    ((M.status = "rejected"), (M.reason = G));
                }
              )),
          M.status)
        ) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function H(M, G, I, tt, st) {
    var ft = typeof M;
    (ft === "undefined" || ft === "boolean") && (M = null);
    var dt = !1;
    if (M === null) dt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case d:
            case n:
              dt = !0;
              break;
            case _:
              return (dt = M._init), H(dt(M._payload), G, I, tt, st);
          }
      }
    if (dt)
      return (
        (st = st(M)),
        (dt = tt === "" ? "." + ht(M, 0) : tt),
        X(st)
          ? ((I = ""),
            dt != null && (I = dt.replace(at, "$&/") + "/"),
            H(st, G, I, "", function (Re) {
              return Re;
            }))
          : st != null &&
            (rt(st) &&
              (st = W(
                st,
                I +
                  (st.key == null || (M && M.key === st.key)
                    ? ""
                    : ("" + st.key).replace(at, "$&/") + "/") +
                  dt
              )),
            G.push(st)),
        1
      );
    dt = 0;
    var zt = tt === "" ? "." : tt + ":";
    if (X(M))
      for (var Tt = 0; Tt < M.length; Tt++)
        (tt = M[Tt]), (ft = zt + ht(tt, Tt)), (dt += H(tt, G, I, ft, st));
    else if (((Tt = b(M)), typeof Tt == "function"))
      for (M = Tt.call(M), Tt = 0; !(tt = M.next()).done; )
        (tt = tt.value), (ft = zt + ht(tt, Tt++)), (dt += H(tt, G, I, ft, st));
    else if (ft === "object") {
      if (typeof M.then == "function") return H(_t(M), G, I, tt, st);
      throw (
        ((G = String(M)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(M).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return dt;
  }
  function K(M, G, I) {
    if (M == null) return M;
    var tt = [],
      st = 0;
    return (
      H(M, tt, "", "", function (ft) {
        return G.call(I, ft, st++);
      }),
      tt
    );
  }
  function et(M) {
    if (M._status === -1) {
      var G = M._result;
      (G = G()),
        G.then(
          function (I) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = I));
          },
          function (I) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = I));
          }
        ),
        M._status === -1 && ((M._status = 0), (M._result = G));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var ct =
      typeof reportError == "function"
        ? reportError
        : function (M) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof M == "object" &&
                  M !== null &&
                  typeof M.message == "string"
                    ? String(M.message)
                    : String(M),
                error: M,
              });
              if (!window.dispatchEvent(G)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", M);
              return;
            }
            console.error(M);
          },
    N = {
      map: K,
      forEach: function (M, G, I) {
        K(
          M,
          function () {
            G.apply(this, arguments);
          },
          I
        );
      },
      count: function (M) {
        var G = 0;
        return (
          K(M, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (M) {
        return (
          K(M, function (G) {
            return G;
          }) || []
        );
      },
      only: function (M) {
        if (!rt(M))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return M;
      },
    };
  return (
    (xt.Activity = y),
    (xt.Children = N),
    (xt.Component = V),
    (xt.Fragment = u),
    (xt.Profiler = r),
    (xt.PureComponent = Q),
    (xt.StrictMode = i),
    (xt.Suspense = g),
    (xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (xt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (M) {
        return x.H.useMemoCache(M);
      },
    }),
    (xt.cache = function (M) {
      return function () {
        return M.apply(null, arguments);
      };
    }),
    (xt.cacheSignal = function () {
      return null;
    }),
    (xt.cloneElement = function (M, G, I) {
      if (M == null)
        throw Error(
          "The argument must be a React element, but you passed " + M + "."
        );
      var tt = T({}, M.props),
        st = M.key;
      if (G != null)
        for (ft in (G.key !== void 0 && (st = "" + G.key), G))
          !Y.call(G, ft) ||
            ft === "key" ||
            ft === "__self" ||
            ft === "__source" ||
            (ft === "ref" && G.ref === void 0) ||
            (tt[ft] = G[ft]);
      var ft = arguments.length - 2;
      if (ft === 1) tt.children = I;
      else if (1 < ft) {
        for (var dt = Array(ft), zt = 0; zt < ft; zt++)
          dt[zt] = arguments[zt + 2];
        tt.children = dt;
      }
      return k(M.type, st, tt);
    }),
    (xt.createContext = function (M) {
      return (
        (M = {
          $$typeof: o,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (M.Provider = M),
        (M.Consumer = { $$typeof: f, _context: M }),
        M
      );
    }),
    (xt.createElement = function (M, G, I) {
      var tt,
        st = {},
        ft = null;
      if (G != null)
        for (tt in (G.key !== void 0 && (ft = "" + G.key), G))
          Y.call(G, tt) &&
            tt !== "key" &&
            tt !== "__self" &&
            tt !== "__source" &&
            (st[tt] = G[tt]);
      var dt = arguments.length - 2;
      if (dt === 1) st.children = I;
      else if (1 < dt) {
        for (var zt = Array(dt), Tt = 0; Tt < dt; Tt++)
          zt[Tt] = arguments[Tt + 2];
        st.children = zt;
      }
      if (M && M.defaultProps)
        for (tt in ((dt = M.defaultProps), dt))
          st[tt] === void 0 && (st[tt] = dt[tt]);
      return k(M, ft, st);
    }),
    (xt.createRef = function () {
      return { current: null };
    }),
    (xt.forwardRef = function (M) {
      return { $$typeof: h, render: M };
    }),
    (xt.isValidElement = rt),
    (xt.lazy = function (M) {
      return { $$typeof: _, _payload: { _status: -1, _result: M }, _init: et };
    }),
    (xt.memo = function (M, G) {
      return { $$typeof: p, type: M, compare: G === void 0 ? null : G };
    }),
    (xt.startTransition = function (M) {
      var G = x.T,
        I = {};
      x.T = I;
      try {
        var tt = M(),
          st = x.S;
        st !== null && st(I, tt),
          typeof tt == "object" &&
            tt !== null &&
            typeof tt.then == "function" &&
            tt.then(P, ct);
      } catch (ft) {
        ct(ft);
      } finally {
        G !== null && I.types !== null && (G.types = I.types), (x.T = G);
      }
    }),
    (xt.unstable_useCacheRefresh = function () {
      return x.H.useCacheRefresh();
    }),
    (xt.use = function (M) {
      return x.H.use(M);
    }),
    (xt.useActionState = function (M, G, I) {
      return x.H.useActionState(M, G, I);
    }),
    (xt.useCallback = function (M, G) {
      return x.H.useCallback(M, G);
    }),
    (xt.useContext = function (M) {
      return x.H.useContext(M);
    }),
    (xt.useDebugValue = function () {}),
    (xt.useDeferredValue = function (M, G) {
      return x.H.useDeferredValue(M, G);
    }),
    (xt.useEffect = function (M, G) {
      return x.H.useEffect(M, G);
    }),
    (xt.useEffectEvent = function (M) {
      return x.H.useEffectEvent(M);
    }),
    (xt.useId = function () {
      return x.H.useId();
    }),
    (xt.useImperativeHandle = function (M, G, I) {
      return x.H.useImperativeHandle(M, G, I);
    }),
    (xt.useInsertionEffect = function (M, G) {
      return x.H.useInsertionEffect(M, G);
    }),
    (xt.useLayoutEffect = function (M, G) {
      return x.H.useLayoutEffect(M, G);
    }),
    (xt.useMemo = function (M, G) {
      return x.H.useMemo(M, G);
    }),
    (xt.useOptimistic = function (M, G) {
      return x.H.useOptimistic(M, G);
    }),
    (xt.useReducer = function (M, G, I) {
      return x.H.useReducer(M, G, I);
    }),
    (xt.useRef = function (M) {
      return x.H.useRef(M);
    }),
    (xt.useState = function (M) {
      return x.H.useState(M);
    }),
    (xt.useSyncExternalStore = function (M, G, I) {
      return x.H.useSyncExternalStore(M, G, I);
    }),
    (xt.useTransition = function () {
      return x.H.useTransition();
    }),
    (xt.version = "19.2.0"),
    xt
  );
}
var qp;
function Oh() {
  return qp || ((qp = 1), (R0.exports = My())), R0.exports;
}
var w = Oh();
const Oy = Ey(w);
var H0 = { exports: {} },
  Gr = {},
  U0 = { exports: {} },
  j0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xp;
function zy() {
  return (
    Xp ||
      ((Xp = 1),
      (function (d) {
        function n(H, K) {
          var et = H.length;
          H.push(K);
          t: for (; 0 < et; ) {
            var ct = (et - 1) >>> 1,
              N = H[ct];
            if (0 < r(N, K)) (H[ct] = K), (H[et] = N), (et = ct);
            else break t;
          }
        }
        function u(H) {
          return H.length === 0 ? null : H[0];
        }
        function i(H) {
          if (H.length === 0) return null;
          var K = H[0],
            et = H.pop();
          if (et !== K) {
            H[0] = et;
            t: for (var ct = 0, N = H.length, M = N >>> 1; ct < M; ) {
              var G = 2 * (ct + 1) - 1,
                I = H[G],
                tt = G + 1,
                st = H[tt];
              if (0 > r(I, et))
                tt < N && 0 > r(st, I)
                  ? ((H[ct] = st), (H[tt] = et), (ct = tt))
                  : ((H[ct] = I), (H[G] = et), (ct = G));
              else if (tt < N && 0 > r(st, et))
                (H[ct] = st), (H[tt] = et), (ct = tt);
              else break t;
            }
          }
          return K;
        }
        function r(H, K) {
          var et = H.sortIndex - K.sortIndex;
          return et !== 0 ? et : H.id - K.id;
        }
        if (
          ((d.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          d.unstable_now = function () {
            return f.now();
          };
        } else {
          var o = Date,
            h = o.now();
          d.unstable_now = function () {
            return o.now() - h;
          };
        }
        var g = [],
          p = [],
          _ = 1,
          y = null,
          S = 3,
          b = !1,
          z = !1,
          T = !1,
          C = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function B(H) {
          for (var K = u(p); K !== null; ) {
            if (K.callback === null) i(p);
            else if (K.startTime <= H)
              i(p), (K.sortIndex = K.expirationTime), n(g, K);
            else break;
            K = u(p);
          }
        }
        function X(H) {
          if (((T = !1), B(H), !z))
            if (u(g) !== null) (z = !0), P || ((P = !0), lt());
            else {
              var K = u(p);
              K !== null && _t(X, K.startTime - H);
            }
        }
        var P = !1,
          x = -1,
          Y = 5,
          k = -1;
        function W() {
          return C ? !0 : !(d.unstable_now() - k < Y);
        }
        function rt() {
          if (((C = !1), P)) {
            var H = d.unstable_now();
            k = H;
            var K = !0;
            try {
              t: {
                (z = !1), T && ((T = !1), O(x), (x = -1)), (b = !0);
                var et = S;
                try {
                  e: {
                    for (
                      B(H), y = u(g);
                      y !== null && !(y.expirationTime > H && W());

                    ) {
                      var ct = y.callback;
                      if (typeof ct == "function") {
                        (y.callback = null), (S = y.priorityLevel);
                        var N = ct(y.expirationTime <= H);
                        if (((H = d.unstable_now()), typeof N == "function")) {
                          (y.callback = N), B(H), (K = !0);
                          break e;
                        }
                        y === u(g) && i(g), B(H);
                      } else i(g);
                      y = u(g);
                    }
                    if (y !== null) K = !0;
                    else {
                      var M = u(p);
                      M !== null && _t(X, M.startTime - H), (K = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (S = et), (b = !1);
                }
                K = void 0;
              }
            } finally {
              K ? lt() : (P = !1);
            }
          }
        }
        var lt;
        if (typeof Q == "function")
          lt = function () {
            Q(rt);
          };
        else if (typeof MessageChannel < "u") {
          var at = new MessageChannel(),
            ht = at.port2;
          (at.port1.onmessage = rt),
            (lt = function () {
              ht.postMessage(null);
            });
        } else
          lt = function () {
            V(rt, 0);
          };
        function _t(H, K) {
          x = V(function () {
            H(d.unstable_now());
          }, K);
        }
        (d.unstable_IdlePriority = 5),
          (d.unstable_ImmediatePriority = 1),
          (d.unstable_LowPriority = 4),
          (d.unstable_NormalPriority = 3),
          (d.unstable_Profiling = null),
          (d.unstable_UserBlockingPriority = 2),
          (d.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (d.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Y = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (d.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (d.unstable_next = function (H) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = S;
            }
            var et = S;
            S = K;
            try {
              return H();
            } finally {
              S = et;
            }
          }),
          (d.unstable_requestPaint = function () {
            C = !0;
          }),
          (d.unstable_runWithPriority = function (H, K) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var et = S;
            S = H;
            try {
              return K();
            } finally {
              S = et;
            }
          }),
          (d.unstable_scheduleCallback = function (H, K, et) {
            var ct = d.unstable_now();
            switch (
              (typeof et == "object" && et !== null
                ? ((et = et.delay),
                  (et = typeof et == "number" && 0 < et ? ct + et : ct))
                : (et = ct),
              H)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = et + N),
              (H = {
                id: _++,
                callback: K,
                priorityLevel: H,
                startTime: et,
                expirationTime: N,
                sortIndex: -1,
              }),
              et > ct
                ? ((H.sortIndex = et),
                  n(p, H),
                  u(g) === null &&
                    H === u(p) &&
                    (T ? (O(x), (x = -1)) : (T = !0), _t(X, et - ct)))
                : ((H.sortIndex = N),
                  n(g, H),
                  z || b || ((z = !0), P || ((P = !0), lt()))),
              H
            );
          }),
          (d.unstable_shouldYield = W),
          (d.unstable_wrapCallback = function (H) {
            var K = S;
            return function () {
              var et = S;
              S = K;
              try {
                return H.apply(this, arguments);
              } finally {
                S = et;
              }
            };
          });
      })(j0)),
    j0
  );
}
var Gp;
function wy() {
  return Gp || ((Gp = 1), (U0.exports = zy())), U0.exports;
}
var L0 = { exports: {} },
  ml = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qp;
function Dy() {
  if (Qp) return ml;
  Qp = 1;
  var d = Oh();
  function n(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        p += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var i = {
      d: {
        f: u,
        r: function () {
          throw Error(n(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function f(g, p, _) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: y == null ? null : "" + y,
      children: g,
      containerInfo: p,
      implementation: _,
    };
  }
  var o = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ml.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (ml.createPortal = function (g, p) {
      var _ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(n(299));
      return f(g, p, null, _);
    }),
    (ml.flushSync = function (g) {
      var p = o.T,
        _ = i.p;
      try {
        if (((o.T = null), (i.p = 2), g)) return g();
      } finally {
        (o.T = p), (i.p = _), i.d.f();
      }
    }),
    (ml.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        i.d.C(g, p));
    }),
    (ml.prefetchDNS = function (g) {
      typeof g == "string" && i.d.D(g);
    }),
    (ml.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var _ = p.as,
          y = h(_, p.crossOrigin),
          S = typeof p.integrity == "string" ? p.integrity : void 0,
          b = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        _ === "style"
          ? i.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: y,
              integrity: S,
              fetchPriority: b,
            })
          : _ === "script" &&
            i.d.X(g, {
              crossOrigin: y,
              integrity: S,
              fetchPriority: b,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ml.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var _ = h(p.as, p.crossOrigin);
            i.d.M(g, {
              crossOrigin: _,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(g);
    }),
    (ml.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var _ = p.as,
          y = h(_, p.crossOrigin);
        i.d.L(g, _, {
          crossOrigin: y,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ml.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var _ = h(p.as, p.crossOrigin);
          i.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: _,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else i.d.m(g);
    }),
    (ml.requestFormReset = function (g) {
      i.d.r(g);
    }),
    (ml.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (ml.useFormState = function (g, p, _) {
      return o.H.useFormState(g, p, _);
    }),
    (ml.useFormStatus = function () {
      return o.H.useHostTransitionStatus();
    }),
    (ml.version = "19.2.0"),
    ml
  );
}
var kp;
function Ny() {
  if (kp) return L0.exports;
  kp = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (n) {
        console.error(n);
      }
  }
  return d(), (L0.exports = Dy()), L0.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kp;
function Cy() {
  if (Kp) return Gr;
  Kp = 1;
  var d = wy(),
    n = Oh(),
    u = Ny();
  function i(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function o(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (f(t) !== t) throw Error(i(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(i(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var s = l.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((a = s.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === l) return g(s), t;
          if (c === a) return g(s), e;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (l.return !== a.return) (l = s), (a = c);
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === l) {
            (m = !0), (l = s), (a = c);
            break;
          }
          if (v === a) {
            (m = !0), (a = s), (l = c);
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = c.child; v; ) {
            if (v === l) {
              (m = !0), (l = c), (a = s);
              break;
            }
            if (v === a) {
              (m = !0), (a = c), (l = s);
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (l.alternate !== a) throw Error(i(190));
    }
    if (l.tag !== 3) throw Error(i(188));
    return l.stateNode.current === l ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = _(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign,
    S = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    T = Symbol.for("react.fragment"),
    C = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    O = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    B = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    x = Symbol.for("react.memo"),
    Y = Symbol.for("react.lazy"),
    k = Symbol.for("react.activity"),
    W = Symbol.for("react.memo_cache_sentinel"),
    rt = Symbol.iterator;
  function lt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (rt && t[rt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var at = Symbol.for("react.client.reference");
  function ht(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === at ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case T:
        return "Fragment";
      case V:
        return "Profiler";
      case C:
        return "StrictMode";
      case X:
        return "Suspense";
      case P:
        return "SuspenseList";
      case k:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case z:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case O:
          return (t._context.displayName || "Context") + ".Consumer";
        case B:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case x:
          return (
            (e = t.displayName || null), e !== null ? e : ht(t.type) || "Memo"
          );
        case Y:
          (e = t._payload), (t = t._init);
          try {
            return ht(t(e));
          } catch {}
      }
    return null;
  }
  var _t = Array.isArray,
    H = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = { pending: !1, data: null, method: null, action: null },
    ct = [],
    N = -1;
  function M(t) {
    return { current: t };
  }
  function G(t) {
    0 > N || ((t.current = ct[N]), (ct[N] = null), N--);
  }
  function I(t, e) {
    N++, (ct[N] = t.current), (t.current = e);
  }
  var tt = M(null),
    st = M(null),
    ft = M(null),
    dt = M(null);
  function zt(t, e) {
    switch ((I(ft, e), I(st, t), I(tt, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sp(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = sp(e)), (t = cp(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    G(tt), I(tt, t);
  }
  function Tt() {
    G(tt), G(st), G(ft);
  }
  function Re(t) {
    t.memoizedState !== null && I(dt, t);
    var e = tt.current,
      l = cp(e, t.type);
    e !== l && (I(st, t), I(tt, l));
  }
  function Wt(t) {
    st.current === t && (G(tt), G(st)),
      dt.current === t && (G(dt), (Yr._currentValue = et));
  }
  var ve, Et;
  function kt(t) {
    if (ve === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (ve = (e && e[1]) || ""),
          (Et =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      ve +
      t +
      Et
    );
  }
  var ye = !1;
  function Ke(t, e) {
    if (!t || ye) return "";
    ye = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var $ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty($.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct($, []);
                } catch (q) {
                  var L = q;
                }
                Reflect.construct(t, [], $);
              } else {
                try {
                  $.call();
                } catch (q) {
                  L = q;
                }
                t.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                L = q;
              }
              ($ = t()) &&
                typeof $.catch == "function" &&
                $.catch(function () {});
            }
          } catch (q) {
            if (q && L && typeof q.stack == "string") return [q.stack, L.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = a.DetermineComponentFrameRoot(),
        m = c[0],
        v = c[1];
      if (m && v) {
        var A = m.split(`
`),
          j = v.split(`
`);
        for (
          s = a = 0;
          a < A.length && !A[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; s < j.length && !j[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === A.length || s === j.length)
          for (
            a = A.length - 1, s = j.length - 1;
            1 <= a && 0 <= s && A[a] !== j[s];

          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (A[a] !== j[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || A[a] !== j[s])) {
                  var J =
                    `
` + A[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      J.includes("<anonymous>") &&
                      (J = J.replace("<anonymous>", t.displayName)),
                    J
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      (ye = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? kt(l) : "";
  }
  function Z(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return kt(t.type);
      case 16:
        return kt("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? kt("Suspense Fallback")
          : kt("Suspense");
      case 19:
        return kt("SuspenseList");
      case 0:
      case 15:
        return Ke(t.type, !1);
      case 11:
        return Ke(t.type.render, !1);
      case 1:
        return Ke(t.type, !0);
      case 31:
        return kt("Activity");
      default:
        return "";
    }
  }
  function Je(t) {
    try {
      var e = "",
        l = null;
      do (e += Z(t, l)), (l = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var cl = Object.prototype.hasOwnProperty,
    Nl = d.unstable_scheduleCallback,
    Pt = d.unstable_cancelCallback,
    fl = d.unstable_shouldYield,
    It = d.unstable_requestPaint,
    Zt = d.unstable_now,
    te = d.unstable_getCurrentPriorityLevel,
    Oe = d.unstable_ImmediatePriority,
    ee = d.unstable_UserBlockingPriority,
    ol = d.unstable_NormalPriority,
    Cl = d.unstable_LowPriority,
    pn = d.unstable_IdlePriority,
    _i = d.log,
    ze = d.unstable_setDisableYieldValue,
    qn = null,
    be = null;
  function Sl(t) {
    if (
      (typeof _i == "function" && ze(t),
      be && typeof be.setStrictMode == "function")
    )
      try {
        be.setStrictMode(qn, t);
      } catch {}
  }
  var Ye = Math.clz32 ? Math.clz32 : wt,
    Xn = Math.log,
    aa = Math.LN2;
  function wt(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Xn(t) / aa) | 0)) | 0;
  }
  var gn = 256,
    hl = 262144,
    dl = 4194304;
  function Fe(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function _n(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      c = t.suspendedLanes,
      m = t.pingedLanes;
    t = t.warmLanes;
    var v = a & 134217727;
    return (
      v !== 0
        ? ((a = v & ~c),
          a !== 0
            ? (s = Fe(a))
            : ((m &= v),
              m !== 0
                ? (s = Fe(m))
                : l || ((l = v & ~t), l !== 0 && (s = Fe(l)))))
        : ((v = a & ~c),
          v !== 0
            ? (s = Fe(v))
            : m !== 0
            ? (s = Fe(m))
            : l || ((l = a & ~t), l !== 0 && (s = Fe(l)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          (e & c) === 0 &&
          ((c = s & -s),
          (l = e & -e),
          c >= l || (c === 32 && (l & 4194048) !== 0))
        ? e
        : s
    );
  }
  function vn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Ln(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ca() {
    var t = dl;
    return (dl <<= 1), (dl & 62914560) === 0 && (dl = 4194304), t;
  }
  function bt(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function mt(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Qt(t, e, l, a, s, c) {
    var m = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var v = t.entanglements,
      A = t.expirationTimes,
      j = t.hiddenUpdates;
    for (l = m & ~l; 0 < l; ) {
      var J = 31 - Ye(l),
        $ = 1 << J;
      (v[J] = 0), (A[J] = -1);
      var L = j[J];
      if (L !== null)
        for (j[J] = null, J = 0; J < L.length; J++) {
          var q = L[J];
          q !== null && (q.lane &= -536870913);
        }
      l &= ~$;
    }
    a !== 0 && nt(t, a, 0),
      c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e));
  }
  function nt(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - Ye(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930));
  }
  function St(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - Ye(l),
        s = 1 << a;
      (s & e) | (t[a] & e) && (t[a] |= e), (l &= ~s);
    }
  }
  function pt(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : yt(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function yt(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function we(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Rt() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Cp(t.type));
  }
  function pe(t, e) {
    var l = K.p;
    try {
      return (K.p = t), e();
    } finally {
      K.p = l;
    }
  }
  var oe = Math.random().toString(36).slice(2),
    Ot = "__reactFiber$" + oe,
    Dt = "__reactProps$" + oe,
    Gt = "__reactContainer$" + oe,
    Tl = "__reactEvents$" + oe,
    he = "__reactListeners$" + oe,
    El = "__reactHandles$" + oe,
    Jl = "__reactResources$" + oe,
    Se = "__reactMarker$" + oe;
  function He(t) {
    delete t[Ot], delete t[Dt], delete t[Tl], delete t[he], delete t[El];
  }
  function Te(t) {
    var e = t[Ot];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Gt] || l[Ot])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = gp(t); t !== null; ) {
            if ((l = t[Ot])) return l;
            t = gp(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Rl(t) {
    if ((t = t[Ot] || t[Gt])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Gn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(i(33));
  }
  function Ee(t) {
    var e = t[Jl];
    return (
      e ||
        (e = t[Jl] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Ht(t) {
    t[Se] = !0;
  }
  var Fl = new Set(),
    tu = {};
  function Qn(t, e) {
    yn(t, e), yn(t + "Capture", e);
  }
  function yn(t, e) {
    for (tu[t] = e, t = 0; t < e.length; t++) Fl.add(e[t]);
  }
  var bn = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ra = {},
    vi = {};
  function kn(t) {
    return cl.call(vi, t)
      ? !0
      : cl.call(Ra, t)
      ? !1
      : bn.test(t)
      ? (vi[t] = !0)
      : ((Ra[t] = !0), !1);
  }
  function xs(t, e, l) {
    if (kn(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function As(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function ia(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function Sn(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function td(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function g2(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        c = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (m) {
            (l = "" + m), c.call(this, m);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (m) {
            l = "" + m;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function xf(t) {
    if (!t._valueTracker) {
      var e = td(t) ? "checked" : "value";
      t._valueTracker = g2(t, e, "" + t[e]);
    }
  }
  function ed(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = td(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Ms(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var _2 = /[\n"\\]/g;
  function Tn(t) {
    return t.replace(_2, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Af(t, e, l, a, s, c, m, v) {
    (t.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.type = m)
        : t.removeAttribute("type"),
      e != null
        ? m === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Sn(e))
          : t.value !== "" + Sn(e) && (t.value = "" + Sn(e))
        : (m !== "submit" && m !== "reset") || t.removeAttribute("value"),
      e != null
        ? Mf(t, m, Sn(e))
        : l != null
        ? Mf(t, m, Sn(l))
        : a != null && t.removeAttribute("value"),
      s == null && c != null && (t.defaultChecked = !!c),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Sn(v))
        : t.removeAttribute("name");
  }
  function ld(t, e, l, a, s, c, m, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || l != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) {
        xf(t);
        return;
      }
      (l = l != null ? "" + Sn(l) : ""),
        (e = e != null ? "" + Sn(e) : l),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = v ? t.checked : !!a),
      (t.defaultChecked = !!a),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (t.name = m),
      xf(t);
  }
  function Mf(t, e, l) {
    (e === "number" && Ms(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function eu(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < l.length; s++) e["$" + l[s]] = !0;
      for (l = 0; l < t.length; l++)
        (s = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== s && (t[l].selected = s),
          s && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Sn(l), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === l) {
          (t[s].selected = !0), a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function nd(t, e, l) {
    if (
      e != null &&
      ((e = "" + Sn(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Sn(l) : "";
  }
  function ad(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(i(92));
        if (_t(a)) {
          if (1 < a.length) throw Error(i(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = Sn(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      xf(t);
  }
  function lu(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var v2 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function id(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || v2.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function ud(t, e, l) {
    if (e != null && typeof e != "object") throw Error(i(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var s in e)
        (a = e[s]), e.hasOwnProperty(s) && l[s] !== a && id(t, s, a);
    } else for (var c in e) e.hasOwnProperty(c) && id(t, c, e[c]);
  }
  function Of(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var y2 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    b2 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Os(t) {
    return b2.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function ua() {}
  var zf = null;
  function wf(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var nu = null,
    au = null;
  function rd(t) {
    var e = Rl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Dt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Af(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Tn("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var s = a[Dt] || null;
                if (!s) throw Error(i(90));
                Af(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && ed(a);
          }
          break t;
        case "textarea":
          nd(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && eu(t, !!l.multiple, e, !1);
      }
    }
  }
  var Df = !1;
  function sd(t, e, l) {
    if (Df) return t(e, l);
    Df = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Df = !1),
        (nu !== null || au !== null) &&
          (mc(), nu && ((e = nu), (t = au), (au = nu = null), rd(e), t)))
      )
        for (e = 0; e < t.length; e++) rd(t[e]);
    }
  }
  function lr(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Dt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(i(231, e, typeof l));
    return l;
  }
  var ra = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Nf = !1;
  if (ra)
    try {
      var nr = {};
      Object.defineProperty(nr, "passive", {
        get: function () {
          Nf = !0;
        },
      }),
        window.addEventListener("test", nr, nr),
        window.removeEventListener("test", nr, nr);
    } catch {
      Nf = !1;
    }
  var Ha = null,
    Cf = null,
    zs = null;
  function cd() {
    if (zs) return zs;
    var t,
      e = Cf,
      l = e.length,
      a,
      s = "value" in Ha ? Ha.value : Ha.textContent,
      c = s.length;
    for (t = 0; t < l && e[t] === s[t]; t++);
    var m = l - t;
    for (a = 1; a <= m && e[l - a] === s[c - a]; a++);
    return (zs = s.slice(t, 1 < a ? 1 - a : void 0));
  }
  function ws(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ds() {
    return !0;
  }
  function fd() {
    return !1;
  }
  function Hl(t) {
    function e(l, a, s, c, m) {
      (this._reactName = l),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = m),
        (this.currentTarget = null);
      for (var v in t)
        t.hasOwnProperty(v) && ((l = t[v]), (this[v] = l ? l(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? Ds
          : fd),
        (this.isPropagationStopped = fd),
        this
      );
    }
    return (
      y(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Ds));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Ds));
        },
        persist: function () {},
        isPersistent: Ds,
      }),
      e
    );
  }
  var yi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ns = Hl(yi),
    ar = y({}, yi, { view: 0, detail: 0 }),
    S2 = Hl(ar),
    Rf,
    Hf,
    ir,
    Cs = y({}, ar, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: jf,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ir &&
              (ir && t.type === "mousemove"
                ? ((Rf = t.screenX - ir.screenX), (Hf = t.screenY - ir.screenY))
                : (Hf = Rf = 0),
              (ir = t)),
            Rf);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Hf;
      },
    }),
    od = Hl(Cs),
    T2 = y({}, Cs, { dataTransfer: 0 }),
    E2 = Hl(T2),
    x2 = y({}, ar, { relatedTarget: 0 }),
    Uf = Hl(x2),
    A2 = y({}, yi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    M2 = Hl(A2),
    O2 = y({}, yi, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    z2 = Hl(O2),
    w2 = y({}, yi, { data: 0 }),
    hd = Hl(w2),
    D2 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    N2 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    C2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function R2(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = C2[t])
      ? !!e[t]
      : !1;
  }
  function jf() {
    return R2;
  }
  var H2 = y({}, ar, {
      key: function (t) {
        if (t.key) {
          var e = D2[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = ws(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? N2[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: jf,
      charCode: function (t) {
        return t.type === "keypress" ? ws(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? ws(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    U2 = Hl(H2),
    j2 = y({}, Cs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    dd = Hl(j2),
    L2 = y({}, ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: jf,
    }),
    B2 = Hl(L2),
    Y2 = y({}, yi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    V2 = Hl(Y2),
    Z2 = y({}, Cs, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    q2 = Hl(Z2),
    X2 = y({}, yi, { newState: 0, oldState: 0 }),
    G2 = Hl(X2),
    Q2 = [9, 13, 27, 32],
    Lf = ra && "CompositionEvent" in window,
    ur = null;
  ra && "documentMode" in document && (ur = document.documentMode);
  var k2 = ra && "TextEvent" in window && !ur,
    md = ra && (!Lf || (ur && 8 < ur && 11 >= ur)),
    pd = " ",
    gd = !1;
  function _d(t, e) {
    switch (t) {
      case "keyup":
        return Q2.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var iu = !1;
  function K2(t, e) {
    switch (t) {
      case "compositionend":
        return vd(e);
      case "keypress":
        return e.which !== 32 ? null : ((gd = !0), pd);
      case "textInput":
        return (t = e.data), t === pd && gd ? null : t;
      default:
        return null;
    }
  }
  function J2(t, e) {
    if (iu)
      return t === "compositionend" || (!Lf && _d(t, e))
        ? ((t = cd()), (zs = Cf = Ha = null), (iu = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return md && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var F2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function yd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!F2[t.type] : e === "textarea";
  }
  function bd(t, e, l, a) {
    nu ? (au ? au.push(a) : (au = [a])) : (nu = a),
      (e = Sc(e, "onChange")),
      0 < e.length &&
        ((l = new Ns("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var rr = null,
    sr = null;
  function W2(t) {
    lp(t, 0);
  }
  function Rs(t) {
    var e = Gn(t);
    if (ed(e)) return t;
  }
  function Sd(t, e) {
    if (t === "change") return e;
  }
  var Td = !1;
  if (ra) {
    var Bf;
    if (ra) {
      var Yf = "oninput" in document;
      if (!Yf) {
        var Ed = document.createElement("div");
        Ed.setAttribute("oninput", "return;"),
          (Yf = typeof Ed.oninput == "function");
      }
      Bf = Yf;
    } else Bf = !1;
    Td = Bf && (!document.documentMode || 9 < document.documentMode);
  }
  function xd() {
    rr && (rr.detachEvent("onpropertychange", Ad), (sr = rr = null));
  }
  function Ad(t) {
    if (t.propertyName === "value" && Rs(sr)) {
      var e = [];
      bd(e, sr, t, wf(t)), sd(W2, e);
    }
  }
  function $2(t, e, l) {
    t === "focusin"
      ? (xd(), (rr = e), (sr = l), rr.attachEvent("onpropertychange", Ad))
      : t === "focusout" && xd();
  }
  function P2(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Rs(sr);
  }
  function I2(t, e) {
    if (t === "click") return Rs(e);
  }
  function tv(t, e) {
    if (t === "input" || t === "change") return Rs(e);
  }
  function ev(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Wl = typeof Object.is == "function" ? Object.is : ev;
  function cr(t, e) {
    if (Wl(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var s = l[a];
      if (!cl.call(e, s) || !Wl(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Md(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Od(t, e) {
    var l = Md(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Md(l);
    }
  }
  function zd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? zd(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function wd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ms(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Ms(t.document);
    }
    return e;
  }
  function Vf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var lv = ra && "documentMode" in document && 11 >= document.documentMode,
    uu = null,
    Zf = null,
    fr = null,
    qf = !1;
  function Dd(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    qf ||
      uu == null ||
      uu !== Ms(a) ||
      ((a = uu),
      "selectionStart" in a && Vf(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (fr && cr(fr, a)) ||
        ((fr = a),
        (a = Sc(Zf, "onSelect")),
        0 < a.length &&
          ((e = new Ns("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = uu))));
  }
  function bi(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var ru = {
      animationend: bi("Animation", "AnimationEnd"),
      animationiteration: bi("Animation", "AnimationIteration"),
      animationstart: bi("Animation", "AnimationStart"),
      transitionrun: bi("Transition", "TransitionRun"),
      transitionstart: bi("Transition", "TransitionStart"),
      transitioncancel: bi("Transition", "TransitionCancel"),
      transitionend: bi("Transition", "TransitionEnd"),
    },
    Xf = {},
    Nd = {};
  ra &&
    ((Nd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ru.animationend.animation,
      delete ru.animationiteration.animation,
      delete ru.animationstart.animation),
    "TransitionEvent" in window || delete ru.transitionend.transition);
  function Si(t) {
    if (Xf[t]) return Xf[t];
    if (!ru[t]) return t;
    var e = ru[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Nd) return (Xf[t] = e[l]);
    return t;
  }
  var Cd = Si("animationend"),
    Rd = Si("animationiteration"),
    Hd = Si("animationstart"),
    nv = Si("transitionrun"),
    av = Si("transitionstart"),
    iv = Si("transitioncancel"),
    Ud = Si("transitionend"),
    jd = new Map(),
    Gf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Gf.push("scrollEnd");
  function Bn(t, e) {
    jd.set(t, e), Qn(e, [t]);
  }
  var Hs =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    En = [],
    su = 0,
    Qf = 0;
  function Us() {
    for (var t = su, e = (Qf = su = 0); e < t; ) {
      var l = En[e];
      En[e++] = null;
      var a = En[e];
      En[e++] = null;
      var s = En[e];
      En[e++] = null;
      var c = En[e];
      if (((En[e++] = null), a !== null && s !== null)) {
        var m = a.pending;
        m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
          (a.pending = s);
      }
      c !== 0 && Ld(l, s, c);
    }
  }
  function js(t, e, l, a) {
    (En[su++] = t),
      (En[su++] = e),
      (En[su++] = l),
      (En[su++] = a),
      (Qf |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function kf(t, e, l, a) {
    return js(t, e, l, a), Ls(t);
  }
  function Ti(t, e) {
    return js(t, null, null, e), Ls(t);
  }
  function Ld(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var s = !1, c = t.return; c !== null; )
      (c.childLanes |= l),
        (a = c.alternate),
        a !== null && (a.childLanes |= l),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = c),
        (c = c.return);
    return t.tag === 3
      ? ((c = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - Ye(l)),
          (t = c.hiddenUpdates),
          (a = t[s]),
          a === null ? (t[s] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        c)
      : null;
  }
  function Ls(t) {
    if (50 < Cr) throw ((Cr = 0), (l0 = null), Error(i(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var cu = {};
  function uv(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function $l(t, e, l, a) {
    return new uv(t, e, l, a);
  }
  function Kf(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function sa(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = $l(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Bd(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Bs(t, e, l, a, s, c) {
    var m = 0;
    if (((a = t), typeof t == "function")) Kf(t) && (m = 1);
    else if (typeof t == "string")
      m = oy(t, l, tt.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case k:
          return (t = $l(31, l, e, s)), (t.elementType = k), (t.lanes = c), t;
        case T:
          return Ei(l.children, s, c, e);
        case C:
          (m = 8), (s |= 24);
          break;
        case V:
          return (
            (t = $l(12, l, e, s | 2)), (t.elementType = V), (t.lanes = c), t
          );
        case X:
          return (t = $l(13, l, e, s)), (t.elementType = X), (t.lanes = c), t;
        case P:
          return (t = $l(19, l, e, s)), (t.elementType = P), (t.lanes = c), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
                m = 10;
                break t;
              case O:
                m = 9;
                break t;
              case B:
                m = 11;
                break t;
              case x:
                m = 14;
                break t;
              case Y:
                (m = 16), (a = null);
                break t;
            }
          (m = 29),
            (l = Error(i(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = $l(m, l, e, s)), (e.elementType = t), (e.type = a), (e.lanes = c), e
    );
  }
  function Ei(t, e, l, a) {
    return (t = $l(7, t, a, e)), (t.lanes = l), t;
  }
  function Jf(t, e, l) {
    return (t = $l(6, t, null, e)), (t.lanes = l), t;
  }
  function Yd(t) {
    var e = $l(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function Ff(t, e, l) {
    return (
      (e = $l(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Vd = new WeakMap();
  function xn(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Vd.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Je(e) }), Vd.set(t, e), e);
    }
    return { value: t, source: e, stack: Je(e) };
  }
  var fu = [],
    ou = 0,
    Ys = null,
    or = 0,
    An = [],
    Mn = 0,
    Ua = null,
    Kn = 1,
    Jn = "";
  function ca(t, e) {
    (fu[ou++] = or), (fu[ou++] = Ys), (Ys = t), (or = e);
  }
  function Zd(t, e, l) {
    (An[Mn++] = Kn), (An[Mn++] = Jn), (An[Mn++] = Ua), (Ua = t);
    var a = Kn;
    t = Jn;
    var s = 32 - Ye(a) - 1;
    (a &= ~(1 << s)), (l += 1);
    var c = 32 - Ye(e) + s;
    if (30 < c) {
      var m = s - (s % 5);
      (c = (a & ((1 << m) - 1)).toString(32)),
        (a >>= m),
        (s -= m),
        (Kn = (1 << (32 - Ye(e) + s)) | (l << s) | a),
        (Jn = c + t);
    } else (Kn = (1 << c) | (l << s) | a), (Jn = t);
  }
  function Wf(t) {
    t.return !== null && (ca(t, 1), Zd(t, 1, 0));
  }
  function $f(t) {
    for (; t === Ys; )
      (Ys = fu[--ou]), (fu[ou] = null), (or = fu[--ou]), (fu[ou] = null);
    for (; t === Ua; )
      (Ua = An[--Mn]),
        (An[Mn] = null),
        (Jn = An[--Mn]),
        (An[Mn] = null),
        (Kn = An[--Mn]),
        (An[Mn] = null);
  }
  function qd(t, e) {
    (An[Mn++] = Kn),
      (An[Mn++] = Jn),
      (An[Mn++] = Ua),
      (Kn = e.id),
      (Jn = e.overflow),
      (Ua = t);
  }
  var nl = null,
    de = null,
    qt = !1,
    ja = null,
    On = !1,
    Pf = Error(i(519));
  function La(t) {
    var e = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (hr(xn(e, t)), Pf);
  }
  function Xd(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Ot] = t), (e[Dt] = a), l)) {
      case "dialog":
        Bt("cancel", e), Bt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Bt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Hr.length; l++) Bt(Hr[l], e);
        break;
      case "source":
        Bt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Bt("error", e), Bt("load", e);
        break;
      case "details":
        Bt("toggle", e);
        break;
      case "input":
        Bt("invalid", e),
          ld(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        Bt("invalid", e);
        break;
      case "textarea":
        Bt("invalid", e), ad(e, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      up(e.textContent, l)
        ? (a.popover != null && (Bt("beforetoggle", e), Bt("toggle", e)),
          a.onScroll != null && Bt("scroll", e),
          a.onScrollEnd != null && Bt("scrollend", e),
          a.onClick != null && (e.onclick = ua),
          (e = !0))
        : (e = !1),
      e || La(t, !0);
  }
  function Gd(t) {
    for (nl = t.return; nl; )
      switch (nl.tag) {
        case 5:
        case 31:
        case 13:
          On = !1;
          return;
        case 27:
        case 3:
          On = !0;
          return;
        default:
          nl = nl.return;
      }
  }
  function hu(t) {
    if (t !== nl) return !1;
    if (!qt) return Gd(t), (qt = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || _0(t.type, t.memoizedProps))),
        (l = !l)),
      l && de && La(t),
      Gd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      de = pp(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(i(317));
      de = pp(t);
    } else
      e === 27
        ? ((e = de), $a(t.type) ? ((t = T0), (T0 = null), (de = t)) : (de = e))
        : (de = nl ? wn(t.stateNode.nextSibling) : null);
    return !0;
  }
  function xi() {
    (de = nl = null), (qt = !1);
  }
  function If() {
    var t = ja;
    return (
      t !== null &&
        (Bl === null ? (Bl = t) : Bl.push.apply(Bl, t), (ja = null)),
      t
    );
  }
  function hr(t) {
    ja === null ? (ja = [t]) : ja.push(t);
  }
  var to = M(null),
    Ai = null,
    fa = null;
  function Ba(t, e, l) {
    I(to, e._currentValue), (e._currentValue = l);
  }
  function oa(t) {
    (t._currentValue = to.current), G(to);
  }
  function eo(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function lo(t, e, l, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var m = s.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = s;
          for (var A = 0; A < e.length; A++)
            if (v.context === e[A]) {
              (c.lanes |= l),
                (v = c.alternate),
                v !== null && (v.lanes |= l),
                eo(c.return, l, t),
                a || (m = null);
              break t;
            }
          c = v.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(i(341));
        (m.lanes |= l),
          (c = m.alternate),
          c !== null && (c.lanes |= l),
          eo(m, l, t),
          (m = null);
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (((s = m.sibling), s !== null)) {
            (s.return = m.return), (m = s);
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function du(t, e, l, a) {
    t = null;
    for (var s = e, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(i(387));
        if (((m = m.memoizedProps), m !== null)) {
          var v = s.type;
          Wl(s.pendingProps.value, m.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (s === dt.current) {
        if (((m = s.alternate), m === null)) throw Error(i(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(Yr) : (t = [Yr]));
      }
      s = s.return;
    }
    t !== null && lo(e, t, l, a), (e.flags |= 262144);
  }
  function Vs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Wl(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Mi(t) {
    (Ai = t),
      (fa = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function al(t) {
    return Qd(Ai, t);
  }
  function Zs(t, e) {
    return Ai === null && Mi(t), Qd(t, e);
  }
  function Qd(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), fa === null)) {
      if (t === null) throw Error(i(308));
      (fa = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else fa = fa.next = e;
    return l;
  }
  var rv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    sv = d.unstable_scheduleCallback,
    cv = d.unstable_NormalPriority,
    Ve = {
      $$typeof: Q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function no() {
    return { controller: new rv(), data: new Map(), refCount: 0 };
  }
  function dr(t) {
    t.refCount--,
      t.refCount === 0 &&
        sv(cv, function () {
          t.controller.abort();
        });
  }
  var mr = null,
    ao = 0,
    mu = 0,
    pu = null;
  function fv(t, e) {
    if (mr === null) {
      var l = (mr = []);
      (ao = 0),
        (mu = s0()),
        (pu = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return ao++, e.then(kd, kd), e;
  }
  function kd() {
    if (--ao === 0 && mr !== null) {
      pu !== null && (pu.status = "fulfilled");
      var t = mr;
      (mr = null), (mu = 0), (pu = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function ov(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          l.push(s);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var s = 0; s < l.length; s++) (0, l[s])(e);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < l.length; s++)
            (0, l[s])(void 0);
        }
      ),
      a
    );
  }
  var Kd = H.S;
  H.S = function (t, e) {
    (Dm = Zt()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        fv(t, e),
      Kd !== null && Kd(t, e);
  };
  var Oi = M(null);
  function io() {
    var t = Oi.current;
    return t !== null ? t : se.pooledCache;
  }
  function qs(t, e) {
    e === null ? I(Oi, Oi.current) : I(Oi, e.pool);
  }
  function Jd() {
    var t = io();
    return t === null ? null : { parent: Ve._currentValue, pool: t };
  }
  var gu = Error(i(460)),
    uo = Error(i(474)),
    Xs = Error(i(542)),
    Gs = { then: function () {} };
  function Fd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Wd(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(ua, ua), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Pd(t), t);
      default:
        if (typeof e.status == "string") e.then(ua, ua);
        else {
          if (((t = se), t !== null && 100 < t.shellSuspendCounter))
            throw Error(i(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Pd(t), t);
        }
        throw ((wi = e), gu);
    }
  }
  function zi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((wi = l), gu)
        : l;
    }
  }
  var wi = null;
  function $d() {
    if (wi === null) throw Error(i(459));
    var t = wi;
    return (wi = null), t;
  }
  function Pd(t) {
    if (t === gu || t === Xs) throw Error(i(483));
  }
  var _u = null,
    pr = 0;
  function Qs(t) {
    var e = pr;
    return (pr += 1), _u === null && (_u = []), Wd(_u, t, e);
  }
  function gr(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function ks(t, e) {
    throw e.$$typeof === S
      ? Error(i(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          i(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Id(t) {
    function e(R, D) {
      if (t) {
        var U = R.deletions;
        U === null ? ((R.deletions = [D]), (R.flags |= 16)) : U.push(D);
      }
    }
    function l(R, D) {
      if (!t) return null;
      for (; D !== null; ) e(R, D), (D = D.sibling);
      return null;
    }
    function a(R) {
      for (var D = new Map(); R !== null; )
        R.key !== null ? D.set(R.key, R) : D.set(R.index, R), (R = R.sibling);
      return D;
    }
    function s(R, D) {
      return (R = sa(R, D)), (R.index = 0), (R.sibling = null), R;
    }
    function c(R, D, U) {
      return (
        (R.index = U),
        t
          ? ((U = R.alternate),
            U !== null
              ? ((U = U.index), U < D ? ((R.flags |= 67108866), D) : U)
              : ((R.flags |= 67108866), D))
          : ((R.flags |= 1048576), D)
      );
    }
    function m(R) {
      return t && R.alternate === null && (R.flags |= 67108866), R;
    }
    function v(R, D, U, F) {
      return D === null || D.tag !== 6
        ? ((D = Jf(U, R.mode, F)), (D.return = R), D)
        : ((D = s(D, U)), (D.return = R), D);
    }
    function A(R, D, U, F) {
      var gt = U.type;
      return gt === T
        ? J(R, D, U.props.children, F, U.key)
        : D !== null &&
          (D.elementType === gt ||
            (typeof gt == "object" &&
              gt !== null &&
              gt.$$typeof === Y &&
              zi(gt) === D.type))
        ? ((D = s(D, U.props)), gr(D, U), (D.return = R), D)
        : ((D = Bs(U.type, U.key, U.props, null, R.mode, F)),
          gr(D, U),
          (D.return = R),
          D);
    }
    function j(R, D, U, F) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== U.containerInfo ||
        D.stateNode.implementation !== U.implementation
        ? ((D = Ff(U, R.mode, F)), (D.return = R), D)
        : ((D = s(D, U.children || [])), (D.return = R), D);
    }
    function J(R, D, U, F, gt) {
      return D === null || D.tag !== 7
        ? ((D = Ei(U, R.mode, F, gt)), (D.return = R), D)
        : ((D = s(D, U)), (D.return = R), D);
    }
    function $(R, D, U) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return (D = Jf("" + D, R.mode, U)), (D.return = R), D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return (
              (U = Bs(D.type, D.key, D.props, null, R.mode, U)),
              gr(U, D),
              (U.return = R),
              U
            );
          case z:
            return (D = Ff(D, R.mode, U)), (D.return = R), D;
          case Y:
            return (D = zi(D)), $(R, D, U);
        }
        if (_t(D) || lt(D))
          return (D = Ei(D, R.mode, U, null)), (D.return = R), D;
        if (typeof D.then == "function") return $(R, Qs(D), U);
        if (D.$$typeof === Q) return $(R, Zs(R, D), U);
        ks(R, D);
      }
      return null;
    }
    function L(R, D, U, F) {
      var gt = D !== null ? D.key : null;
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return gt !== null ? null : v(R, D, "" + U, F);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case b:
            return U.key === gt ? A(R, D, U, F) : null;
          case z:
            return U.key === gt ? j(R, D, U, F) : null;
          case Y:
            return (U = zi(U)), L(R, D, U, F);
        }
        if (_t(U) || lt(U)) return gt !== null ? null : J(R, D, U, F, null);
        if (typeof U.then == "function") return L(R, D, Qs(U), F);
        if (U.$$typeof === Q) return L(R, D, Zs(R, U), F);
        ks(R, U);
      }
      return null;
    }
    function q(R, D, U, F, gt) {
      if (
        (typeof F == "string" && F !== "") ||
        typeof F == "number" ||
        typeof F == "bigint"
      )
        return (R = R.get(U) || null), v(D, R, "" + F, gt);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case b:
            return (
              (R = R.get(F.key === null ? U : F.key) || null), A(D, R, F, gt)
            );
          case z:
            return (
              (R = R.get(F.key === null ? U : F.key) || null), j(D, R, F, gt)
            );
          case Y:
            return (F = zi(F)), q(R, D, U, F, gt);
        }
        if (_t(F) || lt(F)) return (R = R.get(U) || null), J(D, R, F, gt, null);
        if (typeof F.then == "function") return q(R, D, U, Qs(F), gt);
        if (F.$$typeof === Q) return q(R, D, U, Zs(D, F), gt);
        ks(D, F);
      }
      return null;
    }
    function it(R, D, U, F) {
      for (
        var gt = null, Kt = null, ot = D, Mt = (D = 0), Vt = null;
        ot !== null && Mt < U.length;
        Mt++
      ) {
        ot.index > Mt ? ((Vt = ot), (ot = null)) : (Vt = ot.sibling);
        var Jt = L(R, ot, U[Mt], F);
        if (Jt === null) {
          ot === null && (ot = Vt);
          break;
        }
        t && ot && Jt.alternate === null && e(R, ot),
          (D = c(Jt, D, Mt)),
          Kt === null ? (gt = Jt) : (Kt.sibling = Jt),
          (Kt = Jt),
          (ot = Vt);
      }
      if (Mt === U.length) return l(R, ot), qt && ca(R, Mt), gt;
      if (ot === null) {
        for (; Mt < U.length; Mt++)
          (ot = $(R, U[Mt], F)),
            ot !== null &&
              ((D = c(ot, D, Mt)),
              Kt === null ? (gt = ot) : (Kt.sibling = ot),
              (Kt = ot));
        return qt && ca(R, Mt), gt;
      }
      for (ot = a(ot); Mt < U.length; Mt++)
        (Vt = q(ot, R, Mt, U[Mt], F)),
          Vt !== null &&
            (t &&
              Vt.alternate !== null &&
              ot.delete(Vt.key === null ? Mt : Vt.key),
            (D = c(Vt, D, Mt)),
            Kt === null ? (gt = Vt) : (Kt.sibling = Vt),
            (Kt = Vt));
      return (
        t &&
          ot.forEach(function (li) {
            return e(R, li);
          }),
        qt && ca(R, Mt),
        gt
      );
    }
    function vt(R, D, U, F) {
      if (U == null) throw Error(i(151));
      for (
        var gt = null,
          Kt = null,
          ot = D,
          Mt = (D = 0),
          Vt = null,
          Jt = U.next();
        ot !== null && !Jt.done;
        Mt++, Jt = U.next()
      ) {
        ot.index > Mt ? ((Vt = ot), (ot = null)) : (Vt = ot.sibling);
        var li = L(R, ot, Jt.value, F);
        if (li === null) {
          ot === null && (ot = Vt);
          break;
        }
        t && ot && li.alternate === null && e(R, ot),
          (D = c(li, D, Mt)),
          Kt === null ? (gt = li) : (Kt.sibling = li),
          (Kt = li),
          (ot = Vt);
      }
      if (Jt.done) return l(R, ot), qt && ca(R, Mt), gt;
      if (ot === null) {
        for (; !Jt.done; Mt++, Jt = U.next())
          (Jt = $(R, Jt.value, F)),
            Jt !== null &&
              ((D = c(Jt, D, Mt)),
              Kt === null ? (gt = Jt) : (Kt.sibling = Jt),
              (Kt = Jt));
        return qt && ca(R, Mt), gt;
      }
      for (ot = a(ot); !Jt.done; Mt++, Jt = U.next())
        (Jt = q(ot, R, Mt, Jt.value, F)),
          Jt !== null &&
            (t &&
              Jt.alternate !== null &&
              ot.delete(Jt.key === null ? Mt : Jt.key),
            (D = c(Jt, D, Mt)),
            Kt === null ? (gt = Jt) : (Kt.sibling = Jt),
            (Kt = Jt));
      return (
        t &&
          ot.forEach(function (Ty) {
            return e(R, Ty);
          }),
        qt && ca(R, Mt),
        gt
      );
    }
    function re(R, D, U, F) {
      if (
        (typeof U == "object" &&
          U !== null &&
          U.type === T &&
          U.key === null &&
          (U = U.props.children),
        typeof U == "object" && U !== null)
      ) {
        switch (U.$$typeof) {
          case b:
            t: {
              for (var gt = U.key; D !== null; ) {
                if (D.key === gt) {
                  if (((gt = U.type), gt === T)) {
                    if (D.tag === 7) {
                      l(R, D.sibling),
                        (F = s(D, U.props.children)),
                        (F.return = R),
                        (R = F);
                      break t;
                    }
                  } else if (
                    D.elementType === gt ||
                    (typeof gt == "object" &&
                      gt !== null &&
                      gt.$$typeof === Y &&
                      zi(gt) === D.type)
                  ) {
                    l(R, D.sibling),
                      (F = s(D, U.props)),
                      gr(F, U),
                      (F.return = R),
                      (R = F);
                    break t;
                  }
                  l(R, D);
                  break;
                } else e(R, D);
                D = D.sibling;
              }
              U.type === T
                ? ((F = Ei(U.props.children, R.mode, F, U.key)),
                  (F.return = R),
                  (R = F))
                : ((F = Bs(U.type, U.key, U.props, null, R.mode, F)),
                  gr(F, U),
                  (F.return = R),
                  (R = F));
            }
            return m(R);
          case z:
            t: {
              for (gt = U.key; D !== null; ) {
                if (D.key === gt)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === U.containerInfo &&
                    D.stateNode.implementation === U.implementation
                  ) {
                    l(R, D.sibling),
                      (F = s(D, U.children || [])),
                      (F.return = R),
                      (R = F);
                    break t;
                  } else {
                    l(R, D);
                    break;
                  }
                else e(R, D);
                D = D.sibling;
              }
              (F = Ff(U, R.mode, F)), (F.return = R), (R = F);
            }
            return m(R);
          case Y:
            return (U = zi(U)), re(R, D, U, F);
        }
        if (_t(U)) return it(R, D, U, F);
        if (lt(U)) {
          if (((gt = lt(U)), typeof gt != "function")) throw Error(i(150));
          return (U = gt.call(U)), vt(R, D, U, F);
        }
        if (typeof U.then == "function") return re(R, D, Qs(U), F);
        if (U.$$typeof === Q) return re(R, D, Zs(R, U), F);
        ks(R, U);
      }
      return (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
        ? ((U = "" + U),
          D !== null && D.tag === 6
            ? (l(R, D.sibling), (F = s(D, U)), (F.return = R), (R = F))
            : (l(R, D), (F = Jf(U, R.mode, F)), (F.return = R), (R = F)),
          m(R))
        : l(R, D);
    }
    return function (R, D, U, F) {
      try {
        pr = 0;
        var gt = re(R, D, U, F);
        return (_u = null), gt;
      } catch (ot) {
        if (ot === gu || ot === Xs) throw ot;
        var Kt = $l(29, ot, null, R.mode);
        return (Kt.lanes = F), (Kt.return = R), Kt;
      } finally {
      }
    };
  }
  var Di = Id(!0),
    t1 = Id(!1),
    Ya = !1;
  function ro(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function so(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Va(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Za(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ft & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (a.pending = e),
        (e = Ls(t)),
        Ld(t, null, l),
        e
      );
    }
    return js(t, a, e, l), Ls(t);
  }
  function _r(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), St(t, l);
    }
  }
  function co(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var s = null,
        c = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var m = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          c === null ? (s = c = m) : (c = c.next = m), (l = l.next);
        } while (l !== null);
        c === null ? (s = c = e) : (c = c.next = e);
      } else s = c = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var fo = !1;
  function vr() {
    if (fo) {
      var t = pu;
      if (t !== null) throw t;
    }
  }
  function yr(t, e, l, a) {
    fo = !1;
    var s = t.updateQueue;
    Ya = !1;
    var c = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var A = v,
        j = A.next;
      (A.next = null), m === null ? (c = j) : (m.next = j), (m = A);
      var J = t.alternate;
      J !== null &&
        ((J = J.updateQueue),
        (v = J.lastBaseUpdate),
        v !== m &&
          (v === null ? (J.firstBaseUpdate = j) : (v.next = j),
          (J.lastBaseUpdate = A)));
    }
    if (c !== null) {
      var $ = s.baseState;
      (m = 0), (J = j = A = null), (v = c);
      do {
        var L = v.lane & -536870913,
          q = L !== v.lane;
        if (q ? (Yt & L) === L : (a & L) === L) {
          L !== 0 && L === mu && (fo = !0),
            J !== null &&
              (J = J.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var it = t,
              vt = v;
            L = e;
            var re = l;
            switch (vt.tag) {
              case 1:
                if (((it = vt.payload), typeof it == "function")) {
                  $ = it.call(re, $, L);
                  break t;
                }
                $ = it;
                break t;
              case 3:
                it.flags = (it.flags & -65537) | 128;
              case 0:
                if (
                  ((it = vt.payload),
                  (L = typeof it == "function" ? it.call(re, $, L) : it),
                  L == null)
                )
                  break t;
                $ = y({}, $, L);
                break t;
              case 2:
                Ya = !0;
            }
          }
          (L = v.callback),
            L !== null &&
              ((t.flags |= 64),
              q && (t.flags |= 8192),
              (q = s.callbacks),
              q === null ? (s.callbacks = [L]) : q.push(L));
        } else
          (q = {
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            J === null ? ((j = J = q), (A = $)) : (J = J.next = q),
            (m |= L);
        if (((v = v.next), v === null)) {
          if (((v = s.shared.pending), v === null)) break;
          (q = v),
            (v = q.next),
            (q.next = null),
            (s.lastBaseUpdate = q),
            (s.shared.pending = null);
        }
      } while (!0);
      J === null && (A = $),
        (s.baseState = A),
        (s.firstBaseUpdate = j),
        (s.lastBaseUpdate = J),
        c === null && (s.shared.lanes = 0),
        (ka |= m),
        (t.lanes = m),
        (t.memoizedState = $);
    }
  }
  function e1(t, e) {
    if (typeof t != "function") throw Error(i(191, t));
    t.call(e);
  }
  function l1(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) e1(l[t], e);
  }
  var vu = M(null),
    Ks = M(0);
  function n1(t, e) {
    (t = ba), I(Ks, t), I(vu, e), (ba = t | e.baseLanes);
  }
  function oo() {
    I(Ks, ba), I(vu, vu.current);
  }
  function ho() {
    (ba = Ks.current), G(vu), G(Ks);
  }
  var Pl = M(null),
    zn = null;
  function qa(t) {
    var e = t.alternate;
    I(Ue, Ue.current & 1),
      I(Pl, t),
      zn === null &&
        (e === null || vu.current !== null || e.memoizedState !== null) &&
        (zn = t);
  }
  function mo(t) {
    I(Ue, Ue.current), I(Pl, t), zn === null && (zn = t);
  }
  function a1(t) {
    t.tag === 22
      ? (I(Ue, Ue.current), I(Pl, t), zn === null && (zn = t))
      : Xa();
  }
  function Xa() {
    I(Ue, Ue.current), I(Pl, Pl.current);
  }
  function Il(t) {
    G(Pl), zn === t && (zn = null), G(Ue);
  }
  var Ue = M(0);
  function Js(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || b0(l) || S0(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var ha = 0,
    At = null,
    ie = null,
    Ze = null,
    Fs = !1,
    yu = !1,
    Ni = !1,
    Ws = 0,
    br = 0,
    bu = null,
    hv = 0;
  function De() {
    throw Error(i(321));
  }
  function po(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Wl(t[l], e[l])) return !1;
    return !0;
  }
  function go(t, e, l, a, s, c) {
    return (
      (ha = c),
      (At = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (H.H = t === null || t.memoizedState === null ? Z1 : No),
      (Ni = !1),
      (c = l(a, s)),
      (Ni = !1),
      yu && (c = u1(e, l, a, s)),
      i1(t),
      c
    );
  }
  function i1(t) {
    H.H = Er;
    var e = ie !== null && ie.next !== null;
    if (((ha = 0), (Ze = ie = At = null), (Fs = !1), (br = 0), (bu = null), e))
      throw Error(i(300));
    t === null ||
      qe ||
      ((t = t.dependencies), t !== null && Vs(t) && (qe = !0));
  }
  function u1(t, e, l, a) {
    At = t;
    var s = 0;
    do {
      if ((yu && (bu = null), (br = 0), (yu = !1), 25 <= s))
        throw Error(i(301));
      if (((s += 1), (Ze = ie = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (H.H = q1), (c = e(l, a));
    } while (yu);
    return c;
  }
  function dv() {
    var t = H.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Sr(e) : e),
      (t = t.useState()[0]),
      (ie !== null ? ie.memoizedState : null) !== t && (At.flags |= 1024),
      e
    );
  }
  function _o() {
    var t = Ws !== 0;
    return (Ws = 0), t;
  }
  function vo(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function yo(t) {
    if (Fs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Fs = !1;
    }
    (ha = 0), (Ze = ie = At = null), (yu = !1), (br = Ws = 0), (bu = null);
  }
  function xl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ze === null ? (At.memoizedState = Ze = t) : (Ze = Ze.next = t), Ze;
  }
  function je() {
    if (ie === null) {
      var t = At.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ie.next;
    var e = Ze === null ? At.memoizedState : Ze.next;
    if (e !== null) (Ze = e), (ie = t);
    else {
      if (t === null)
        throw At.alternate === null ? Error(i(467)) : Error(i(310));
      (ie = t),
        (t = {
          memoizedState: ie.memoizedState,
          baseState: ie.baseState,
          baseQueue: ie.baseQueue,
          queue: ie.queue,
          next: null,
        }),
        Ze === null ? (At.memoizedState = Ze = t) : (Ze = Ze.next = t);
    }
    return Ze;
  }
  function $s() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Sr(t) {
    var e = br;
    return (
      (br += 1),
      bu === null && (bu = []),
      (t = Wd(bu, t, e)),
      (e = At),
      (Ze === null ? e.memoizedState : Ze.next) === null &&
        ((e = e.alternate),
        (H.H = e === null || e.memoizedState === null ? Z1 : No)),
      t
    );
  }
  function Ps(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Sr(t);
      if (t.$$typeof === Q) return al(t);
    }
    throw Error(i(438, String(t)));
  }
  function bo(t) {
    var e = null,
      l = At.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = At.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = $s()), (At.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = W;
    return e.index++, l;
  }
  function da(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Is(t) {
    var e = je();
    return So(e, ie, t);
  }
  function So(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = l;
    var s = t.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (s !== null) {
        var m = s.next;
        (s.next = c.next), (c.next = m);
      }
      (e.baseQueue = s = c), (a.pending = null);
    }
    if (((c = t.baseState), s === null)) t.memoizedState = c;
    else {
      e = s.next;
      var v = (m = null),
        A = null,
        j = e,
        J = !1;
      do {
        var $ = j.lane & -536870913;
        if ($ !== j.lane ? (Yt & $) === $ : (ha & $) === $) {
          var L = j.revertLane;
          if (L === 0)
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              $ === mu && (J = !0);
          else if ((ha & L) === L) {
            (j = j.next), L === mu && (J = !0);
            continue;
          } else
            ($ = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              A === null ? ((v = A = $), (m = c)) : (A = A.next = $),
              (At.lanes |= L),
              (ka |= L);
          ($ = j.action),
            Ni && l(c, $),
            (c = j.hasEagerState ? j.eagerState : l(c, $));
        } else
          (L = {
            lane: $,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            A === null ? ((v = A = L), (m = c)) : (A = A.next = L),
            (At.lanes |= $),
            (ka |= $);
        j = j.next;
      } while (j !== null && j !== e);
      if (
        (A === null ? (m = c) : (A.next = v),
        !Wl(c, t.memoizedState) && ((qe = !0), J && ((l = pu), l !== null)))
      )
        throw l;
      (t.memoizedState = c),
        (t.baseState = m),
        (t.baseQueue = A),
        (a.lastRenderedState = c);
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function To(t) {
    var e = je(),
      l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      s = l.pending,
      c = e.memoizedState;
    if (s !== null) {
      l.pending = null;
      var m = (s = s.next);
      do (c = t(c, m.action)), (m = m.next);
      while (m !== s);
      Wl(c, e.memoizedState) || (qe = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (l.lastRenderedState = c);
    }
    return [c, a];
  }
  function r1(t, e, l) {
    var a = At,
      s = je(),
      c = qt;
    if (c) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else l = e();
    var m = !Wl((ie || s).memoizedState, l);
    if (
      (m && ((s.memoizedState = l), (qe = !0)),
      (s = s.queue),
      Ao(f1.bind(null, a, s, t), [t]),
      s.getSnapshot !== e || m || (Ze !== null && Ze.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Su(9, { destroy: void 0 }, c1.bind(null, a, s, l, e), null),
        se === null)
      )
        throw Error(i(349));
      c || (ha & 127) !== 0 || s1(a, e, l);
    }
    return l;
  }
  function s1(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = At.updateQueue),
      e === null
        ? ((e = $s()), (At.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function c1(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), o1(e) && h1(t);
  }
  function f1(t, e, l) {
    return l(function () {
      o1(e) && h1(t);
    });
  }
  function o1(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Wl(t, l);
    } catch {
      return !0;
    }
  }
  function h1(t) {
    var e = Ti(t, 2);
    e !== null && Yl(e, t, 2);
  }
  function Eo(t) {
    var e = xl();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Ni)) {
        Sl(!0);
        try {
          l();
        } finally {
          Sl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: da,
        lastRenderedState: t,
      }),
      e
    );
  }
  function d1(t, e, l, a) {
    return (t.baseState = l), So(t, ie, typeof a == "function" ? a : da);
  }
  function mv(t, e, l, a, s) {
    if (lc(t)) throw Error(i(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          c.listeners.push(m);
        },
      };
      H.T !== null ? l(!0) : (c.isTransition = !1),
        a(c),
        (l = e.pending),
        l === null
          ? ((c.next = e.pending = c), m1(e, c))
          : ((c.next = l.next), (e.pending = l.next = c));
    }
  }
  function m1(t, e) {
    var l = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var c = H.T,
        m = {};
      H.T = m;
      try {
        var v = l(s, a),
          A = H.S;
        A !== null && A(m, v), p1(t, e, v);
      } catch (j) {
        xo(t, e, j);
      } finally {
        c !== null && m.types !== null && (c.types = m.types), (H.T = c);
      }
    } else
      try {
        (c = l(s, a)), p1(t, e, c);
      } catch (j) {
        xo(t, e, j);
      }
  }
  function p1(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            g1(t, e, a);
          },
          function (a) {
            return xo(t, e, a);
          }
        )
      : g1(t, e, l);
  }
  function g1(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      _1(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), m1(t, l)));
  }
  function xo(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), _1(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function _1(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function v1(t, e) {
    return e;
  }
  function y1(t, e) {
    if (qt) {
      var l = se.formState;
      if (l !== null) {
        t: {
          var a = At;
          if (qt) {
            if (de) {
              e: {
                for (var s = de, c = On; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break e;
                  }
                  if (((s = wn(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (c = s.data), (s = c === "F!" || c === "F" ? s : null);
              }
              if (s) {
                (de = wn(s.nextSibling)), (a = s.data === "F!");
                break t;
              }
            }
            La(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = xl()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: v1,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = B1.bind(null, At, a)),
      (a.dispatch = l),
      (a = Eo(!1)),
      (c = Do.bind(null, At, !1, a.queue)),
      (a = xl()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = s),
      (l = mv.bind(null, At, s, c, l)),
      (s.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function b1(t) {
    var e = je();
    return S1(e, ie, t);
  }
  function S1(t, e, l) {
    if (
      ((e = So(t, e, v1)[0]),
      (t = Is(da)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Sr(e);
      } catch (m) {
        throw m === gu ? Xs : m;
      }
    else a = e;
    e = je();
    var s = e.queue,
      c = s.dispatch;
    return (
      l !== e.memoizedState &&
        ((At.flags |= 2048),
        Su(9, { destroy: void 0 }, pv.bind(null, s, l), null)),
      [a, c, t]
    );
  }
  function pv(t, e) {
    t.action = e;
  }
  function T1(t) {
    var e = je(),
      l = ie;
    if (l !== null) return S1(e, l, t);
    je(), (e = e.memoizedState), (l = je());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function Su(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = At.updateQueue),
      e === null && ((e = $s()), (At.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function E1() {
    return je().memoizedState;
  }
  function tc(t, e, l, a) {
    var s = xl();
    (At.flags |= t),
      (s.memoizedState = Su(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      ));
  }
  function ec(t, e, l, a) {
    var s = je();
    a = a === void 0 ? null : a;
    var c = s.memoizedState.inst;
    ie !== null && a !== null && po(a, ie.memoizedState.deps)
      ? (s.memoizedState = Su(e, c, l, a))
      : ((At.flags |= t), (s.memoizedState = Su(1 | e, c, l, a)));
  }
  function x1(t, e) {
    tc(8390656, 8, t, e);
  }
  function Ao(t, e) {
    ec(2048, 8, t, e);
  }
  function gv(t) {
    At.flags |= 4;
    var e = At.updateQueue;
    if (e === null) (e = $s()), (At.updateQueue = e), (e.events = [t]);
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function A1(t) {
    var e = je().memoizedState;
    return (
      gv({ ref: e, nextImpl: t }),
      function () {
        if ((Ft & 2) !== 0) throw Error(i(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function M1(t, e) {
    return ec(4, 2, t, e);
  }
  function O1(t, e) {
    return ec(4, 4, t, e);
  }
  function z1(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function w1(t, e, l) {
    (l = l != null ? l.concat([t]) : null), ec(4, 4, z1.bind(null, e, t), l);
  }
  function Mo() {}
  function D1(t, e) {
    var l = je();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && po(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function N1(t, e) {
    var l = je();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && po(e, a[1])) return a[0];
    if (((a = t()), Ni)) {
      Sl(!0);
      try {
        t();
      } finally {
        Sl(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function Oo(t, e, l) {
    return l === void 0 || ((ha & 1073741824) !== 0 && (Yt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Cm()), (At.lanes |= t), (ka |= t), l);
  }
  function C1(t, e, l, a) {
    return Wl(l, e)
      ? l
      : vu.current !== null
      ? ((t = Oo(t, l, a)), Wl(t, e) || (qe = !0), t)
      : (ha & 42) === 0 || ((ha & 1073741824) !== 0 && (Yt & 261930) === 0)
      ? ((qe = !0), (t.memoizedState = l))
      : ((t = Cm()), (At.lanes |= t), (ka |= t), e);
  }
  function R1(t, e, l, a, s) {
    var c = K.p;
    K.p = c !== 0 && 8 > c ? c : 8;
    var m = H.T,
      v = {};
    (H.T = v), Do(t, !1, e, l);
    try {
      var A = s(),
        j = H.S;
      if (
        (j !== null && j(v, A),
        A !== null && typeof A == "object" && typeof A.then == "function")
      ) {
        var J = ov(A, a);
        Tr(t, e, J, ln(t));
      } else Tr(t, e, a, ln(t));
    } catch ($) {
      Tr(t, e, { then: function () {}, status: "rejected", reason: $ }, ln());
    } finally {
      (K.p = c),
        m !== null && v.types !== null && (m.types = v.types),
        (H.T = m);
    }
  }
  function _v() {}
  function zo(t, e, l, a) {
    if (t.tag !== 5) throw Error(i(476));
    var s = H1(t).queue;
    R1(
      t,
      s,
      e,
      et,
      l === null
        ? _v
        : function () {
            return U1(t), l(a);
          }
    );
  }
  function H1(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: da,
        lastRenderedState: et,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: da,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function U1(t) {
    var e = H1(t);
    e.next === null && (e = t.alternate.memoizedState),
      Tr(t, e.next.queue, {}, ln());
  }
  function wo() {
    return al(Yr);
  }
  function j1() {
    return je().memoizedState;
  }
  function L1() {
    return je().memoizedState;
  }
  function vv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ln();
          t = Va(l);
          var a = Za(e, t, l);
          a !== null && (Yl(a, e, l), _r(a, e, l)),
            (e = { cache: no() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function yv(t, e, l) {
    var a = ln();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      lc(t)
        ? Y1(e, l)
        : ((l = kf(t, e, l, a)), l !== null && (Yl(l, t, a), V1(l, e, a)));
  }
  function B1(t, e, l) {
    var a = ln();
    Tr(t, e, l, a);
  }
  function Tr(t, e, l, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (lc(t)) Y1(e, s);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var m = e.lastRenderedState,
            v = c(m, l);
          if (((s.hasEagerState = !0), (s.eagerState = v), Wl(v, m)))
            return js(t, e, s, 0), se === null && Us(), !1;
        } catch {
        } finally {
        }
      if (((l = kf(t, e, s, a)), l !== null))
        return Yl(l, t, a), V1(l, e, a), !0;
    }
    return !1;
  }
  function Do(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: s0(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      lc(t))
    ) {
      if (e) throw Error(i(479));
    } else (e = kf(t, l, a, 2)), e !== null && Yl(e, t, 2);
  }
  function lc(t) {
    var e = t.alternate;
    return t === At || (e !== null && e === At);
  }
  function Y1(t, e) {
    yu = Fs = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function V1(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), St(t, l);
    }
  }
  var Er = {
    readContext: al,
    use: Ps,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useLayoutEffect: De,
    useInsertionEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useSyncExternalStore: De,
    useId: De,
    useHostTransitionStatus: De,
    useFormState: De,
    useActionState: De,
    useOptimistic: De,
    useMemoCache: De,
    useCacheRefresh: De,
  };
  Er.useEffectEvent = De;
  var Z1 = {
      readContext: al,
      use: Ps,
      useCallback: function (t, e) {
        return (xl().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: al,
      useEffect: x1,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          tc(4194308, 4, z1.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return tc(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        tc(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = xl();
        e = e === void 0 ? null : e;
        var a = t();
        if (Ni) {
          Sl(!0);
          try {
            t();
          } finally {
            Sl(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = xl();
        if (l !== void 0) {
          var s = l(e);
          if (Ni) {
            Sl(!0);
            try {
              l(e);
            } finally {
              Sl(!1);
            }
          }
        } else s = e;
        return (
          (a.memoizedState = a.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (a.queue = t),
          (t = t.dispatch = yv.bind(null, At, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = xl();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Eo(t);
        var e = t.queue,
          l = B1.bind(null, At, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Mo,
      useDeferredValue: function (t, e) {
        var l = xl();
        return Oo(l, t, e);
      },
      useTransition: function () {
        var t = Eo(!1);
        return (
          (t = R1.bind(null, At, t.queue, !0, !1)),
          (xl().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = At,
          s = xl();
        if (qt) {
          if (l === void 0) throw Error(i(407));
          l = l();
        } else {
          if (((l = e()), se === null)) throw Error(i(349));
          (Yt & 127) !== 0 || s1(a, e, l);
        }
        s.memoizedState = l;
        var c = { value: l, getSnapshot: e };
        return (
          (s.queue = c),
          x1(f1.bind(null, a, c, t), [t]),
          (a.flags |= 2048),
          Su(9, { destroy: void 0 }, c1.bind(null, a, c, l, e), null),
          l
        );
      },
      useId: function () {
        var t = xl(),
          e = se.identifierPrefix;
        if (qt) {
          var l = Jn,
            a = Kn;
          (l = (a & ~(1 << (32 - Ye(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = Ws++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_");
        } else (l = hv++), (e = "_" + e + "r_" + l.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: wo,
      useFormState: y1,
      useActionState: y1,
      useOptimistic: function (t) {
        var e = xl();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Do.bind(null, At, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: bo,
      useCacheRefresh: function () {
        return (xl().memoizedState = vv.bind(null, At));
      },
      useEffectEvent: function (t) {
        var e = xl(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((Ft & 2) !== 0) throw Error(i(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    No = {
      readContext: al,
      use: Ps,
      useCallback: D1,
      useContext: al,
      useEffect: Ao,
      useImperativeHandle: w1,
      useInsertionEffect: M1,
      useLayoutEffect: O1,
      useMemo: N1,
      useReducer: Is,
      useRef: E1,
      useState: function () {
        return Is(da);
      },
      useDebugValue: Mo,
      useDeferredValue: function (t, e) {
        var l = je();
        return C1(l, ie.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Is(da)[0],
          e = je().memoizedState;
        return [typeof t == "boolean" ? t : Sr(t), e];
      },
      useSyncExternalStore: r1,
      useId: j1,
      useHostTransitionStatus: wo,
      useFormState: b1,
      useActionState: b1,
      useOptimistic: function (t, e) {
        var l = je();
        return d1(l, ie, t, e);
      },
      useMemoCache: bo,
      useCacheRefresh: L1,
    };
  No.useEffectEvent = A1;
  var q1 = {
    readContext: al,
    use: Ps,
    useCallback: D1,
    useContext: al,
    useEffect: Ao,
    useImperativeHandle: w1,
    useInsertionEffect: M1,
    useLayoutEffect: O1,
    useMemo: N1,
    useReducer: To,
    useRef: E1,
    useState: function () {
      return To(da);
    },
    useDebugValue: Mo,
    useDeferredValue: function (t, e) {
      var l = je();
      return ie === null ? Oo(l, t, e) : C1(l, ie.memoizedState, t, e);
    },
    useTransition: function () {
      var t = To(da)[0],
        e = je().memoizedState;
      return [typeof t == "boolean" ? t : Sr(t), e];
    },
    useSyncExternalStore: r1,
    useId: j1,
    useHostTransitionStatus: wo,
    useFormState: T1,
    useActionState: T1,
    useOptimistic: function (t, e) {
      var l = je();
      return ie !== null
        ? d1(l, ie, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: bo,
    useCacheRefresh: L1,
  };
  q1.useEffectEvent = A1;
  function Co(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : y({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Ro = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ln(),
        s = Va(a);
      (s.payload = e),
        l != null && (s.callback = l),
        (e = Za(t, s, a)),
        e !== null && (Yl(e, t, a), _r(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ln(),
        s = Va(a);
      (s.tag = 1),
        (s.payload = e),
        l != null && (s.callback = l),
        (e = Za(t, s, a)),
        e !== null && (Yl(e, t, a), _r(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ln(),
        a = Va(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = Za(t, a, l)),
        e !== null && (Yl(e, t, l), _r(e, t, l));
    },
  };
  function X1(t, e, l, a, s, c, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, c, m)
        : e.prototype && e.prototype.isPureReactComponent
        ? !cr(l, a) || !cr(s, c)
        : !0
    );
  }
  function G1(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && Ro.enqueueReplaceState(e, e.state, null);
  }
  function Ci(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = y({}, l));
      for (var s in t) l[s] === void 0 && (l[s] = t[s]);
    }
    return l;
  }
  function Q1(t) {
    Hs(t);
  }
  function k1(t) {
    console.error(t);
  }
  function K1(t) {
    Hs(t);
  }
  function nc(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function J1(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Ho(t, e, l) {
    return (
      (l = Va(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        nc(t, e);
      }),
      l
    );
  }
  function F1(t) {
    return (t = Va(t)), (t.tag = 3), t;
  }
  function W1(t, e, l, a) {
    var s = l.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = a.value;
      (t.payload = function () {
        return s(c);
      }),
        (t.callback = function () {
          J1(e, l, a);
        });
    }
    var m = l.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (t.callback = function () {
        J1(e, l, a),
          typeof s != "function" &&
            (Ka === null ? (Ka = new Set([this])) : Ka.add(this));
        var v = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function bv(t, e, l, a, s) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && du(e, l, s, !0),
        (l = Pl.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              zn === null ? pc() : l.alternate === null && Ne === 0 && (Ne = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = s),
              a === Gs
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  i0(t, a, s)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Gs
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  i0(t, a, s)),
              !1
            );
        }
        throw Error(i(435, l.tag));
      }
      return i0(t, a, s), pc(), !1;
    }
    if (qt)
      return (
        (e = Pl.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            a !== Pf && ((t = Error(i(422), { cause: a })), hr(xn(t, l))))
          : (a !== Pf && ((e = Error(i(423), { cause: a })), hr(xn(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (a = xn(a, l)),
            (s = Ho(t.stateNode, a, s)),
            co(t, s),
            Ne !== 4 && (Ne = 2)),
        !1
      );
    var c = Error(i(520), { cause: a });
    if (
      ((c = xn(c, l)),
      Nr === null ? (Nr = [c]) : Nr.push(c),
      Ne !== 4 && (Ne = 2),
      e === null)
    )
      return !0;
    (a = xn(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = s & -s),
            (l.lanes |= t),
            (t = Ho(l.stateNode, a, t)),
            co(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (c = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Ka === null || !Ka.has(c)))))
          )
            return (
              (l.flags |= 65536),
              (s &= -s),
              (l.lanes |= s),
              (s = F1(s)),
              W1(s, t, l, a),
              co(l, s),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Uo = Error(i(461)),
    qe = !1;
  function il(t, e, l, a) {
    e.child = t === null ? t1(e, null, l, a) : Di(e, t.child, l, a);
  }
  function $1(t, e, l, a, s) {
    l = l.render;
    var c = e.ref;
    if ("ref" in a) {
      var m = {};
      for (var v in a) v !== "ref" && (m[v] = a[v]);
    } else m = a;
    return (
      Mi(e),
      (a = go(t, e, l, m, c, s)),
      (v = _o()),
      t !== null && !qe
        ? (vo(t, e, s), ma(t, e, s))
        : (qt && v && Wf(e), (e.flags |= 1), il(t, e, a, s), e.child)
    );
  }
  function P1(t, e, l, a, s) {
    if (t === null) {
      var c = l.type;
      return typeof c == "function" &&
        !Kf(c) &&
        c.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = c), I1(t, e, c, a, s))
        : ((t = Bs(l.type, null, a, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !Xo(t, s))) {
      var m = c.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : cr), l(m, a) && t.ref === e.ref)
      )
        return ma(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = sa(c, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function I1(t, e, l, a, s) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (cr(c, a) && t.ref === e.ref)
        if (((qe = !1), (e.pendingProps = a = c), Xo(t, s)))
          (t.flags & 131072) !== 0 && (qe = !0);
        else return (e.lanes = t.lanes), ma(t, e, s);
    }
    return jo(t, e, l, a, s);
  }
  function tm(t, e, l, a) {
    var s = a.children,
      c = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, s = 0; a !== null; )
            (s = s | a.lanes | a.childLanes), (a = a.sibling);
          a = s & ~c;
        } else (a = 0), (e.child = null);
        return em(t, e, c, l, a);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && qs(e, c !== null ? c.cachePool : null),
          c !== null ? n1(e, c) : oo(),
          a1(e);
      else
        return (
          (a = e.lanes = 536870912),
          em(t, e, c !== null ? c.baseLanes | l : l, l, a)
        );
    } else
      c !== null
        ? (qs(e, c.cachePool), n1(e, c), Xa(), (e.memoizedState = null))
        : (t !== null && qs(e, null), oo(), Xa());
    return il(t, e, s, l), e.child;
  }
  function xr(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function em(t, e, l, a, s) {
    var c = io();
    return (
      (c = c === null ? null : { parent: Ve._currentValue, pool: c }),
      (e.memoizedState = { baseLanes: l, cachePool: c }),
      t !== null && qs(e, null),
      oo(),
      a1(e),
      t !== null && du(t, e, a, !0),
      (e.childLanes = s),
      null
    );
  }
  function ac(t, e) {
    return (
      (e = uc({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function lm(t, e, l) {
    return (
      Di(e, t.child, null, l),
      (t = ac(e, e.pendingProps)),
      (t.flags |= 2),
      Il(e),
      (e.memoizedState = null),
      t
    );
  }
  function Sv(t, e, l) {
    var a = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (qt) {
        if (a.mode === "hidden")
          return (t = ac(e, a)), (e.lanes = 536870912), xr(null, t);
        if (
          (mo(e),
          (t = de)
            ? ((t = mp(t, On)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ua !== null ? { id: Kn, overflow: Jn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Yd(t)),
                (l.return = e),
                (e.child = l),
                (nl = e),
                (de = null)))
            : (t = null),
          t === null)
        )
          throw La(e);
        return (e.lanes = 536870912), null;
      }
      return ac(e, a);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var m = c.dehydrated;
      if ((mo(e), s))
        if (e.flags & 256) (e.flags &= -257), (e = lm(t, e, l));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(i(558));
      else if (
        (qe || du(t, e, l, !1), (s = (l & t.childLanes) !== 0), qe || s)
      ) {
        if (
          ((a = se),
          a !== null && ((m = pt(a, l)), m !== 0 && m !== c.retryLane))
        )
          throw ((c.retryLane = m), Ti(t, m), Yl(a, t, m), Uo);
        pc(), (e = lm(t, e, l));
      } else
        (t = c.treeContext),
          (de = wn(m.nextSibling)),
          (nl = e),
          (qt = !0),
          (ja = null),
          (On = !1),
          t !== null && qd(e, t),
          (e = ac(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = sa(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ic(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(i(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function jo(t, e, l, a, s) {
    return (
      Mi(e),
      (l = go(t, e, l, a, void 0, s)),
      (a = _o()),
      t !== null && !qe
        ? (vo(t, e, s), ma(t, e, s))
        : (qt && a && Wf(e), (e.flags |= 1), il(t, e, l, s), e.child)
    );
  }
  function nm(t, e, l, a, s, c) {
    return (
      Mi(e),
      (e.updateQueue = null),
      (l = u1(e, a, l, s)),
      i1(t),
      (a = _o()),
      t !== null && !qe
        ? (vo(t, e, c), ma(t, e, c))
        : (qt && a && Wf(e), (e.flags |= 1), il(t, e, l, c), e.child)
    );
  }
  function am(t, e, l, a, s) {
    if ((Mi(e), e.stateNode === null)) {
      var c = cu,
        m = l.contextType;
      typeof m == "object" && m !== null && (c = al(m)),
        (c = new l(a, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Ro),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = a),
        (c.state = e.memoizedState),
        (c.refs = {}),
        ro(e),
        (m = l.contextType),
        (c.context = typeof m == "object" && m !== null ? al(m) : cu),
        (c.state = e.memoizedState),
        (m = l.getDerivedStateFromProps),
        typeof m == "function" && (Co(e, l, m, a), (c.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((m = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          m !== c.state && Ro.enqueueReplaceState(c, c.state, null),
          yr(e, a, c, s),
          vr(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps,
        A = Ci(l, v);
      c.props = A;
      var j = c.context,
        J = l.contextType;
      (m = cu), typeof J == "object" && J !== null && (m = al(J));
      var $ = l.getDerivedStateFromProps;
      (J =
        typeof $ == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        J ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || j !== m) && G1(e, c, a, m)),
        (Ya = !1);
      var L = e.memoizedState;
      (c.state = L),
        yr(e, a, c, s),
        vr(),
        (j = e.memoizedState),
        v || L !== j || Ya
          ? (typeof $ == "function" && (Co(e, l, $, a), (j = e.memoizedState)),
            (A = Ya || X1(e, l, A, a, L, j, m))
              ? (J ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = j)),
            (c.props = a),
            (c.state = j),
            (c.context = m),
            (a = A))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (c = e.stateNode),
        so(t, e),
        (m = e.memoizedProps),
        (J = Ci(l, m)),
        (c.props = J),
        ($ = e.pendingProps),
        (L = c.context),
        (j = l.contextType),
        (A = cu),
        typeof j == "object" && j !== null && (A = al(j)),
        (v = l.getDerivedStateFromProps),
        (j =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((m !== $ || L !== A) && G1(e, c, a, A)),
        (Ya = !1),
        (L = e.memoizedState),
        (c.state = L),
        yr(e, a, c, s),
        vr();
      var q = e.memoizedState;
      m !== $ ||
      L !== q ||
      Ya ||
      (t !== null && t.dependencies !== null && Vs(t.dependencies))
        ? (typeof v == "function" && (Co(e, l, v, a), (q = e.memoizedState)),
          (J =
            Ya ||
            X1(e, l, J, a, L, q, A) ||
            (t !== null && t.dependencies !== null && Vs(t.dependencies)))
            ? (j ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(a, q, A),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(a, q, A)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (m === t.memoizedProps && L === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (m === t.memoizedProps && L === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = q)),
          (c.props = a),
          (c.state = q),
          (c.context = A),
          (a = J))
        : (typeof c.componentDidUpdate != "function" ||
            (m === t.memoizedProps && L === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (m === t.memoizedProps && L === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      ic(t, e),
      (a = (e.flags & 128) !== 0),
      c || a
        ? ((c = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Di(e, t.child, null, s)),
              (e.child = Di(e, null, l, s)))
            : il(t, e, l, s),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = ma(t, e, s)),
      t
    );
  }
  function im(t, e, l, a) {
    return xi(), (e.flags |= 256), il(t, e, l, a), e.child;
  }
  var Lo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Bo(t) {
    return { baseLanes: t, cachePool: Jd() };
  }
  function Yo(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= en), t;
  }
  function um(t, e, l) {
    var a = e.pendingProps,
      s = !1,
      c = (e.flags & 128) !== 0,
      m;
    if (
      ((m = c) ||
        (m =
          t !== null && t.memoizedState === null ? !1 : (Ue.current & 2) !== 0),
      m && ((s = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (qt) {
        if (
          (s ? qa(e) : Xa(),
          (t = de)
            ? ((t = mp(t, On)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ua !== null ? { id: Kn, overflow: Jn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Yd(t)),
                (l.return = e),
                (e.child = l),
                (nl = e),
                (de = null)))
            : (t = null),
          t === null)
        )
          throw La(e);
        return S0(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var v = a.children;
      return (
        (a = a.fallback),
        s
          ? (Xa(),
            (s = e.mode),
            (v = uc({ mode: "hidden", children: v }, s)),
            (a = Ei(a, s, l, null)),
            (v.return = e),
            (a.return = e),
            (v.sibling = a),
            (e.child = v),
            (a = e.child),
            (a.memoizedState = Bo(l)),
            (a.childLanes = Yo(t, m, l)),
            (e.memoizedState = Lo),
            xr(null, a))
          : (qa(e), Vo(e, v))
      );
    }
    var A = t.memoizedState;
    if (A !== null && ((v = A.dehydrated), v !== null)) {
      if (c)
        e.flags & 256
          ? (qa(e), (e.flags &= -257), (e = Zo(t, e, l)))
          : e.memoizedState !== null
          ? (Xa(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Xa(),
            (v = a.fallback),
            (s = e.mode),
            (a = uc({ mode: "visible", children: a.children }, s)),
            (v = Ei(v, s, l, null)),
            (v.flags |= 2),
            (a.return = e),
            (v.return = e),
            (a.sibling = v),
            (e.child = a),
            Di(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = Bo(l)),
            (a.childLanes = Yo(t, m, l)),
            (e.memoizedState = Lo),
            (e = xr(null, a)));
      else if ((qa(e), S0(v))) {
        if (((m = v.nextSibling && v.nextSibling.dataset), m)) var j = m.dgst;
        (m = j),
          (a = Error(i(419))),
          (a.stack = ""),
          (a.digest = m),
          hr({ value: a, source: null, stack: null }),
          (e = Zo(t, e, l));
      } else if (
        (qe || du(t, e, l, !1), (m = (l & t.childLanes) !== 0), qe || m)
      ) {
        if (
          ((m = se),
          m !== null && ((a = pt(m, l)), a !== 0 && a !== A.retryLane))
        )
          throw ((A.retryLane = a), Ti(t, a), Yl(m, t, a), Uo);
        b0(v) || pc(), (e = Zo(t, e, l));
      } else
        b0(v)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = A.treeContext),
            (de = wn(v.nextSibling)),
            (nl = e),
            (qt = !0),
            (ja = null),
            (On = !1),
            t !== null && qd(e, t),
            (e = Vo(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Xa(),
        (v = a.fallback),
        (s = e.mode),
        (A = t.child),
        (j = A.sibling),
        (a = sa(A, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = A.subtreeFlags & 65011712),
        j !== null ? (v = sa(j, v)) : ((v = Ei(v, s, l, null)), (v.flags |= 2)),
        (v.return = e),
        (a.return = e),
        (a.sibling = v),
        (e.child = a),
        xr(null, a),
        (a = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Bo(l))
          : ((s = v.cachePool),
            s !== null
              ? ((A = Ve._currentValue),
                (s = s.parent !== A ? { parent: A, pool: A } : s))
              : (s = Jd()),
            (v = { baseLanes: v.baseLanes | l, cachePool: s })),
        (a.memoizedState = v),
        (a.childLanes = Yo(t, m, l)),
        (e.memoizedState = Lo),
        xr(t.child, a))
      : (qa(e),
        (l = t.child),
        (t = l.sibling),
        (l = sa(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((m = e.deletions),
          m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Vo(t, e) {
    return (
      (e = uc({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function uc(t, e) {
    return (t = $l(22, t, null, e)), (t.lanes = 0), t;
  }
  function Zo(t, e, l) {
    return (
      Di(e, t.child, null, l),
      (t = Vo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function rm(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), eo(t.return, e, l);
  }
  function qo(t, e, l, a, s, c) {
    var m = t.memoizedState;
    m === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: s,
          treeForkCount: c,
        })
      : ((m.isBackwards = e),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = a),
        (m.tail = l),
        (m.tailMode = s),
        (m.treeForkCount = c));
  }
  function sm(t, e, l) {
    var a = e.pendingProps,
      s = a.revealOrder,
      c = a.tail;
    a = a.children;
    var m = Ue.current,
      v = (m & 2) !== 0;
    if (
      (v ? ((m = (m & 1) | 2), (e.flags |= 128)) : (m &= 1),
      I(Ue, m),
      il(t, e, a, l),
      (a = qt ? or : 0),
      !v && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && rm(t, l, e);
        else if (t.tag === 19) rm(t, l, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (s) {
      case "forwards":
        for (l = e.child, s = null; l !== null; )
          (t = l.alternate),
            t !== null && Js(t) === null && (s = l),
            (l = l.sibling);
        (l = s),
          l === null
            ? ((s = e.child), (e.child = null))
            : ((s = l.sibling), (l.sibling = null)),
          qo(e, !1, s, l, c, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Js(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = l), (l = s), (s = t);
        }
        qo(e, !0, l, null, c, a);
        break;
      case "together":
        qo(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function ma(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ka |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((du(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(i(153));
    if (e.child !== null) {
      for (
        t = e.child, l = sa(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = sa(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function Xo(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Vs(t)));
  }
  function Tv(t, e, l) {
    switch (e.tag) {
      case 3:
        zt(e, e.stateNode.containerInfo),
          Ba(e, Ve, t.memoizedState.cache),
          xi();
        break;
      case 27:
      case 5:
        Re(e);
        break;
      case 4:
        zt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ba(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), mo(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (qa(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? um(t, e, l)
            : (qa(e), (t = ma(t, e, l)), t !== null ? t.sibling : null);
        qa(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (du(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          s)
        ) {
          if (a) return sm(t, e, l);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          I(Ue, Ue.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), tm(t, e, l, e.pendingProps);
      case 24:
        Ba(e, Ve, t.memoizedState.cache);
    }
    return ma(t, e, l);
  }
  function cm(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qe = !0;
      else {
        if (!Xo(t, l) && (e.flags & 128) === 0) return (qe = !1), Tv(t, e, l);
        qe = (t.flags & 131072) !== 0;
      }
    else (qe = !1), qt && (e.flags & 1048576) !== 0 && Zd(e, or, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = zi(e.elementType)), (e.type = t), typeof t == "function"))
            Kf(t)
              ? ((a = Ci(t, a)), (e.tag = 1), (e = am(null, e, t, a, l)))
              : ((e.tag = 0), (e = jo(null, e, t, a, l)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === B) {
                (e.tag = 11), (e = $1(null, e, t, a, l));
                break t;
              } else if (s === x) {
                (e.tag = 14), (e = P1(null, e, t, a, l));
                break t;
              }
            }
            throw ((e = ht(t) || t), Error(i(306, e, "")));
          }
        }
        return e;
      case 0:
        return jo(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (s = Ci(a, e.pendingProps)), am(t, e, a, s, l);
      case 3:
        t: {
          if ((zt(e, e.stateNode.containerInfo), t === null))
            throw Error(i(387));
          a = e.pendingProps;
          var c = e.memoizedState;
          (s = c.element), so(t, e), yr(e, a, null, l);
          var m = e.memoizedState;
          if (
            ((a = m.cache),
            Ba(e, Ve, a),
            a !== c.cache && lo(e, [Ve], l, !0),
            vr(),
            (a = m.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = im(t, e, a, l);
              break t;
            } else if (a !== s) {
              (s = xn(Error(i(424)), e)), hr(s), (e = im(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                de = wn(t.firstChild),
                  nl = e,
                  qt = !0,
                  ja = null,
                  On = !0,
                  l = t1(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((xi(), a === s)) {
              e = ma(t, e, l);
              break t;
            }
            il(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ic(t, e),
          t === null
            ? (l = bp(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : qt ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Tc(ft.current).createElement(l)),
                (a[Ot] = e),
                (a[Dt] = t),
                ul(a, l, t),
                Ht(a),
                (e.stateNode = a))
            : (e.memoizedState = bp(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Re(e),
          t === null &&
            qt &&
            ((a = e.stateNode = _p(e.type, e.pendingProps, ft.current)),
            (nl = e),
            (On = !0),
            (s = de),
            $a(e.type) ? ((T0 = s), (de = wn(a.firstChild))) : (de = s)),
          il(t, e, e.pendingProps.children, l),
          ic(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            qt &&
            ((s = a = de) &&
              ((a = Pv(a, e.type, e.pendingProps, On)),
              a !== null
                ? ((e.stateNode = a),
                  (nl = e),
                  (de = wn(a.firstChild)),
                  (On = !1),
                  (s = !0))
                : (s = !1)),
            s || La(e)),
          Re(e),
          (s = e.type),
          (c = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (a = c.children),
          _0(s, c) ? (a = null) : m !== null && _0(s, m) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = go(t, e, dv, null, null, l)), (Yr._currentValue = s)),
          ic(t, e),
          il(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            qt &&
            ((t = l = de) &&
              ((l = Iv(l, e.pendingProps, On)),
              l !== null
                ? ((e.stateNode = l), (nl = e), (de = null), (t = !0))
                : (t = !1)),
            t || La(e)),
          null
        );
      case 13:
        return um(t, e, l);
      case 4:
        return (
          zt(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Di(e, null, a, l)) : il(t, e, a, l),
          e.child
        );
      case 11:
        return $1(t, e, e.type, e.pendingProps, l);
      case 7:
        return il(t, e, e.pendingProps, l), e.child;
      case 8:
        return il(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return il(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          Ba(e, e.type, a.value),
          il(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (a = e.pendingProps.children),
          Mi(e),
          (s = al(s)),
          (a = a(s)),
          (e.flags |= 1),
          il(t, e, a, l),
          e.child
        );
      case 14:
        return P1(t, e, e.type, e.pendingProps, l);
      case 15:
        return I1(t, e, e.type, e.pendingProps, l);
      case 19:
        return sm(t, e, l);
      case 31:
        return Sv(t, e, l);
      case 22:
        return tm(t, e, l, e.pendingProps);
      case 24:
        return (
          Mi(e),
          (a = al(Ve)),
          t === null
            ? ((s = io()),
              s === null &&
                ((s = se),
                (c = no()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= l),
                (s = c)),
              (e.memoizedState = { parent: a, cache: s }),
              ro(e),
              Ba(e, Ve, s))
            : ((t.lanes & l) !== 0 && (so(t, e), yr(e, null, null, l), vr()),
              (s = t.memoizedState),
              (c = e.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Ba(e, Ve, a))
                : ((a = c.cache),
                  Ba(e, Ve, a),
                  a !== s.cache && lo(e, [Ve], l, !0))),
          il(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(i(156, e.tag));
  }
  function pa(t) {
    t.flags |= 4;
  }
  function Go(t, e, l, a, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (jm()) t.flags |= 8192;
        else throw ((wi = Gs), uo);
    } else t.flags &= -16777217;
  }
  function fm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Ap(e)))
      if (jm()) t.flags |= 8192;
      else throw ((wi = Gs), uo);
  }
  function rc(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Ca() : 536870912), (t.lanes |= e), (Au |= e));
  }
  function Ar(t, e) {
    if (!qt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function me(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (l |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (l |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function Ev(t, e, l) {
    var a = e.pendingProps;
    switch (($f(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return me(e), null;
      case 1:
        return me(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          oa(Ve),
          Tt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (hu(e)
              ? pa(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), If())),
          me(e),
          null
        );
      case 26:
        var s = e.type,
          c = e.memoizedState;
        return (
          t === null
            ? (pa(e),
              c !== null ? (me(e), fm(e, c)) : (me(e), Go(e, s, null, a, l)))
            : c
            ? c !== t.memoizedState
              ? (pa(e), me(e), fm(e, c))
              : (me(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && pa(e),
              me(e),
              Go(e, s, t, a, l)),
          null
        );
      case 27:
        if (
          (Wt(e),
          (l = ft.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && pa(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(i(166));
            return me(e), null;
          }
          (t = tt.current),
            hu(e) ? Xd(e) : ((t = _p(s, a, l)), (e.stateNode = t), pa(e));
        }
        return me(e), null;
      case 5:
        if ((Wt(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && pa(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(i(166));
            return me(e), null;
          }
          if (((c = tt.current), hu(e))) Xd(e);
          else {
            var m = Tc(ft.current);
            switch (c) {
              case 1:
                c = m.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = m.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = m.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (c = m.createElement("div")),
                      (c.innerHTML = "<script></script>"),
                      (c = c.removeChild(c.firstChild));
                    break;
                  case "select":
                    (c =
                      typeof a.is == "string"
                        ? m.createElement("select", { is: a.is })
                        : m.createElement("select")),
                      a.multiple
                        ? (c.multiple = !0)
                        : a.size && (c.size = a.size);
                    break;
                  default:
                    c =
                      typeof a.is == "string"
                        ? m.createElement(s, { is: a.is })
                        : m.createElement(s);
                }
            }
            (c[Ot] = e), (c[Dt] = a);
            t: for (m = e.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) c.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                (m.child.return = m), (m = m.child);
                continue;
              }
              if (m === e) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === e) break t;
                m = m.return;
              }
              (m.sibling.return = m.return), (m = m.sibling);
            }
            e.stateNode = c;
            t: switch ((ul(c, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && pa(e);
          }
        }
        return (
          me(e),
          Go(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && pa(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(i(166));
          if (((t = ft.current), hu(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (s = nl),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            (t[Ot] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                up(t.nodeValue, l)
              )),
              t || La(e, !0);
          } else (t = Tc(t).createTextNode(a)), (t[Ot] = e), (e.stateNode = t);
        }
        return me(e), null;
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = hu(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(i(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(i(557));
              t[Ot] = e;
            } else
              xi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            me(e), (t = !1);
          } else
            (l = If()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0);
          if (!t) return e.flags & 256 ? (Il(e), e) : (Il(e), null);
          if ((e.flags & 128) !== 0) throw Error(i(558));
        }
        return me(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = hu(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(i(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(i(317));
              s[Ot] = e;
            } else
              xi(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            me(e), (s = !1);
          } else
            (s = If()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (Il(e), e) : (Il(e), null);
        }
        return (
          Il(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (c = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (c = a.memoizedState.cachePool.pool),
                c !== s && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              rc(e, e.updateQueue),
              me(e),
              null)
        );
      case 4:
        return Tt(), t === null && h0(e.stateNode.containerInfo), me(e), null;
      case 10:
        return oa(e.type), me(e), null;
      case 19:
        if ((G(Ue), (a = e.memoizedState), a === null)) return me(e), null;
        if (((s = (e.flags & 128) !== 0), (c = a.rendering), c === null))
          if (s) Ar(a, !1);
          else {
            if (Ne !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Js(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      Ar(a, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      rc(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    Bd(l, t), (l = l.sibling);
                  return (
                    I(Ue, (Ue.current & 1) | 2),
                    qt && ca(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              Zt() > hc &&
              ((e.flags |= 128), (s = !0), Ar(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = Js(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                rc(e, t),
                Ar(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !c.alternate &&
                  !qt)
              )
                return me(e), null;
            } else
              2 * Zt() - a.renderingStartTime > hc &&
                l !== 536870912 &&
                ((e.flags |= 128), (s = !0), Ar(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = a.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (a.last = c));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = Zt()),
            (t.sibling = null),
            (l = Ue.current),
            I(Ue, s ? (l & 1) | 2 : l & 1),
            qt && ca(e, a.treeForkCount),
            t)
          : (me(e), null);
      case 22:
      case 23:
        return (
          Il(e),
          ho(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (me(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : me(e),
          (l = e.updateQueue),
          l !== null && rc(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && G(Oi),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          oa(Ve),
          me(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, e.tag));
  }
  function xv(t, e) {
    switch (($f(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          oa(Ve),
          Tt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Wt(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Il(e), e.alternate === null)) throw Error(i(340));
          xi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Il(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(i(340));
          xi();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return G(Ue), null;
      case 4:
        return Tt(), null;
      case 10:
        return oa(e.type), null;
      case 22:
      case 23:
        return (
          Il(e),
          ho(),
          t !== null && G(Oi),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return oa(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function om(t, e) {
    switch (($f(e), e.tag)) {
      case 3:
        oa(Ve), Tt();
        break;
      case 26:
      case 27:
      case 5:
        Wt(e);
        break;
      case 4:
        Tt();
        break;
      case 31:
        e.memoizedState !== null && Il(e);
        break;
      case 13:
        Il(e);
        break;
      case 19:
        G(Ue);
        break;
      case 10:
        oa(e.type);
        break;
      case 22:
      case 23:
        Il(e), ho(), t !== null && G(Oi);
        break;
      case 24:
        oa(Ve);
    }
  }
  function Mr(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        l = s;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var c = l.create,
              m = l.inst;
            (a = c()), (m.destroy = a);
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (v) {
      ne(e, e.return, v);
    }
  }
  function Ga(t, e, l) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        a = c;
        do {
          if ((a.tag & t) === t) {
            var m = a.inst,
              v = m.destroy;
            if (v !== void 0) {
              (m.destroy = void 0), (s = e);
              var A = l,
                j = v;
              try {
                j();
              } catch (J) {
                ne(s, A, J);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (J) {
      ne(e, e.return, J);
    }
  }
  function hm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        l1(e, l);
      } catch (a) {
        ne(t, t.return, a);
      }
    }
  }
  function dm(t, e, l) {
    (l.props = Ci(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      ne(t, e, a);
    }
  }
  function Or(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (s) {
      ne(t, e, s);
    }
  }
  function Fn(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          ne(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (s) {
          ne(t, e, s);
        }
      else l.current = null;
  }
  function mm(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (s) {
      ne(t, t.return, s);
    }
  }
  function Qo(t, e, l) {
    try {
      var a = t.stateNode;
      kv(a, t.type, l, e), (a[Dt] = e);
    } catch (s) {
      ne(t, t.return, s);
    }
  }
  function pm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && $a(t.type)) ||
      t.tag === 4
    );
  }
  function ko(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || pm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && $a(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ko(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = ua));
    else if (
      a !== 4 &&
      (a === 27 && $a(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Ko(t, e, l), t = t.sibling; t !== null; )
        Ko(t, e, l), (t = t.sibling);
  }
  function sc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && $a(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (sc(t, e, l), t = t.sibling; t !== null; )
        sc(t, e, l), (t = t.sibling);
  }
  function gm(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      ul(e, a, l), (e[Ot] = t), (e[Dt] = l);
    } catch (c) {
      ne(t, t.return, c);
    }
  }
  var ga = !1,
    Xe = !1,
    Jo = !1,
    _m = typeof WeakSet == "function" ? WeakSet : Set,
    Ie = null;
  function Av(t, e) {
    if (((t = t.containerInfo), (p0 = wc), (t = wd(t)), Vf(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var s = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, c.nodeType;
            } catch {
              l = null;
              break t;
            }
            var m = 0,
              v = -1,
              A = -1,
              j = 0,
              J = 0,
              $ = t,
              L = null;
            e: for (;;) {
              for (
                var q;
                $ !== l || (s !== 0 && $.nodeType !== 3) || (v = m + s),
                  $ !== c || (a !== 0 && $.nodeType !== 3) || (A = m + a),
                  $.nodeType === 3 && (m += $.nodeValue.length),
                  (q = $.firstChild) !== null;

              )
                (L = $), ($ = q);
              for (;;) {
                if ($ === t) break e;
                if (
                  (L === l && ++j === s && (v = m),
                  L === c && ++J === a && (A = m),
                  (q = $.nextSibling) !== null)
                )
                  break;
                ($ = L), (L = $.parentNode);
              }
              $ = q;
            }
            l = v === -1 || A === -1 ? null : { start: v, end: A };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      g0 = { focusedElem: t, selectionRange: l }, wc = !1, Ie = e;
      Ie !== null;

    )
      if (
        ((e = Ie), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Ie = t);
      else
        for (; Ie !== null; ) {
          switch (((e = Ie), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  (s = t[l]), (s.ref.impl = s.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                (t = void 0),
                  (l = e),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (a = l.stateNode);
                try {
                  var it = Ci(l.type, s);
                  (t = a.getSnapshotBeforeUpdate(it, c)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (vt) {
                  ne(l, l.return, vt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  y0(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      y0(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(i(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Ie = t);
            break;
          }
          Ie = e.return;
        }
  }
  function vm(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        va(t, l), a & 4 && Mr(5, l);
        break;
      case 1:
        if ((va(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              ne(l, l.return, m);
            }
          else {
            var s = Ci(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              ne(l, l.return, m);
            }
          }
        a & 64 && hm(l), a & 512 && Or(l, l.return);
        break;
      case 3:
        if ((va(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            l1(t, e);
          } catch (m) {
            ne(l, l.return, m);
          }
        }
        break;
      case 27:
        e === null && a & 4 && gm(l);
      case 26:
      case 5:
        va(t, l), e === null && a & 4 && mm(l), a & 512 && Or(l, l.return);
        break;
      case 12:
        va(t, l);
        break;
      case 31:
        va(t, l), a & 4 && Sm(t, l);
        break;
      case 13:
        va(t, l),
          a & 4 && Tm(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Hv.bind(null, l)), ty(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || ga), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Xe), (s = ga);
          var c = Xe;
          (ga = a),
            (Xe = e) && !c ? ya(t, l, (l.subtreeFlags & 8772) !== 0) : va(t, l),
            (ga = s),
            (Xe = c);
        }
        break;
      case 30:
        break;
      default:
        va(t, l);
    }
  }
  function ym(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), ym(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && He(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var ge = null,
    Ul = !1;
  function _a(t, e, l) {
    for (l = l.child; l !== null; ) bm(t, e, l), (l = l.sibling);
  }
  function bm(t, e, l) {
    if (be && typeof be.onCommitFiberUnmount == "function")
      try {
        be.onCommitFiberUnmount(qn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Xe || Fn(l, e),
          _a(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Xe || Fn(l, e);
        var a = ge,
          s = Ul;
        $a(l.type) && ((ge = l.stateNode), (Ul = !1)),
          _a(t, e, l),
          jr(l.stateNode),
          (ge = a),
          (Ul = s);
        break;
      case 5:
        Xe || Fn(l, e);
      case 6:
        if (
          ((a = ge),
          (s = Ul),
          (ge = null),
          _a(t, e, l),
          (ge = a),
          (Ul = s),
          ge !== null)
        )
          if (Ul)
            try {
              (ge.nodeType === 9
                ? ge.body
                : ge.nodeName === "HTML"
                ? ge.ownerDocument.body
                : ge
              ).removeChild(l.stateNode);
            } catch (c) {
              ne(l, e, c);
            }
          else
            try {
              ge.removeChild(l.stateNode);
            } catch (c) {
              ne(l, e, c);
            }
        break;
      case 18:
        ge !== null &&
          (Ul
            ? ((t = ge),
              hp(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              Ru(t))
            : hp(ge, l.stateNode));
        break;
      case 4:
        (a = ge),
          (s = Ul),
          (ge = l.stateNode.containerInfo),
          (Ul = !0),
          _a(t, e, l),
          (ge = a),
          (Ul = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ga(2, l, e), Xe || Ga(4, l, e), _a(t, e, l);
        break;
      case 1:
        Xe ||
          (Fn(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && dm(l, e, a)),
          _a(t, e, l);
        break;
      case 21:
        _a(t, e, l);
        break;
      case 22:
        (Xe = (a = Xe) || l.memoizedState !== null), _a(t, e, l), (Xe = a);
        break;
      default:
        _a(t, e, l);
    }
  }
  function Sm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ru(t);
      } catch (l) {
        ne(e, e.return, l);
      }
    }
  }
  function Tm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ru(t);
      } catch (l) {
        ne(e, e.return, l);
      }
  }
  function Mv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new _m()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new _m()),
          e
        );
      default:
        throw Error(i(435, t.tag));
    }
  }
  function cc(t, e) {
    var l = Mv(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var s = Uv.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function jl(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var s = l[a],
          c = t,
          m = e,
          v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if ($a(v.type)) {
                (ge = v.stateNode), (Ul = !1);
                break t;
              }
              break;
            case 5:
              (ge = v.stateNode), (Ul = !1);
              break t;
            case 3:
            case 4:
              (ge = v.stateNode.containerInfo), (Ul = !0);
              break t;
          }
          v = v.return;
        }
        if (ge === null) throw Error(i(160));
        bm(c, m, s),
          (ge = null),
          (Ul = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) Em(e, t), (e = e.sibling);
  }
  var Yn = null;
  function Em(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        jl(e, t),
          Ll(t),
          a & 4 && (Ga(3, t, t.return), Mr(3, t), Ga(5, t, t.return));
        break;
      case 1:
        jl(e, t),
          Ll(t),
          a & 512 && (Xe || l === null || Fn(l, l.return)),
          a & 64 &&
            ga &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var s = Yn;
        if (
          (jl(e, t),
          Ll(t),
          a & 512 && (Xe || l === null || Fn(l, l.return)),
          a & 4)
        ) {
          var c = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (a) {
                    case "title":
                      (c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[Se] ||
                          c[Ot] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(a)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title")
                          )),
                        ul(c, a, l),
                        (c[Ot] = t),
                        Ht(c),
                        (a = c);
                      break t;
                    case "link":
                      var m = Ep("link", "href", s).get(a + (l.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              c.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              c.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              c.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      (c = s.createElement(a)),
                        ul(c, a, l),
                        s.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (m = Ep("meta", "content", s).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              c.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              c.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              c.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      (c = s.createElement(a)),
                        ul(c, a, l),
                        s.head.appendChild(c);
                      break;
                    default:
                      throw Error(i(468, a));
                  }
                  (c[Ot] = t), Ht(c), (a = c);
                }
                t.stateNode = a;
              } else xp(s, t.type, t.stateNode);
            else t.stateNode = Tp(s, a, t.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : c.count--,
                a === null
                  ? xp(s, t.type, t.stateNode)
                  : Tp(s, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Qo(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        jl(e, t),
          Ll(t),
          a & 512 && (Xe || l === null || Fn(l, l.return)),
          l !== null && a & 4 && Qo(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (jl(e, t),
          Ll(t),
          a & 512 && (Xe || l === null || Fn(l, l.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            lu(s, "");
          } catch (it) {
            ne(t, t.return, it);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Qo(t, s, l !== null ? l.memoizedProps : s)),
          a & 1024 && (Jo = !0);
        break;
      case 6:
        if ((jl(e, t), Ll(t), a & 4)) {
          if (t.stateNode === null) throw Error(i(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (it) {
            ne(t, t.return, it);
          }
        }
        break;
      case 3:
        if (
          ((Ac = null),
          (s = Yn),
          (Yn = Ec(e.containerInfo)),
          jl(e, t),
          (Yn = s),
          Ll(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ru(e.containerInfo);
          } catch (it) {
            ne(t, t.return, it);
          }
        Jo && ((Jo = !1), xm(t));
        break;
      case 4:
        (a = Yn),
          (Yn = Ec(t.stateNode.containerInfo)),
          jl(e, t),
          Ll(t),
          (Yn = a);
        break;
      case 12:
        jl(e, t), Ll(t);
        break;
      case 31:
        jl(e, t),
          Ll(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), cc(t, a)));
        break;
      case 13:
        jl(e, t),
          Ll(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (oc = Zt()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), cc(t, a)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var A = l !== null && l.memoizedState !== null,
          j = ga,
          J = Xe;
        if (
          ((ga = j || s),
          (Xe = J || A),
          jl(e, t),
          (Xe = J),
          (ga = j),
          Ll(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (l === null || A || ga || Xe || Ri(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                A = l = e;
                try {
                  if (((c = A.stateNode), s))
                    (m = c.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none");
                  else {
                    v = A.stateNode;
                    var $ = A.memoizedProps.style,
                      L =
                        $ != null && $.hasOwnProperty("display")
                          ? $.display
                          : null;
                    v.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (it) {
                  ne(A, A.return, it);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                A = e;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (it) {
                  ne(A, A.return, it);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                A = e;
                try {
                  var q = A.stateNode;
                  s ? dp(q, !0) : dp(A.stateNode, !1);
                } catch (it) {
                  ne(A, A.return, it);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), cc(t, l))));
        break;
      case 19:
        jl(e, t),
          Ll(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), cc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        jl(e, t), Ll(t);
    }
  }
  function Ll(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (pm(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(i(160));
        switch (l.tag) {
          case 27:
            var s = l.stateNode,
              c = ko(t);
            sc(t, c, s);
            break;
          case 5:
            var m = l.stateNode;
            l.flags & 32 && (lu(m, ""), (l.flags &= -33));
            var v = ko(t);
            sc(t, v, m);
            break;
          case 3:
          case 4:
            var A = l.stateNode.containerInfo,
              j = ko(t);
            Ko(t, j, A);
            break;
          default:
            throw Error(i(161));
        }
      } catch (J) {
        ne(t, t.return, J);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function xm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        xm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function va(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) vm(t, e.alternate, e), (e = e.sibling);
  }
  function Ri(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ga(4, e, e.return), Ri(e);
          break;
        case 1:
          Fn(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && dm(e, e.return, l),
            Ri(e);
          break;
        case 27:
          jr(e.stateNode);
        case 26:
        case 5:
          Fn(e, e.return), Ri(e);
          break;
        case 22:
          e.memoizedState === null && Ri(e);
          break;
        case 30:
          Ri(e);
          break;
        default:
          Ri(e);
      }
      t = t.sibling;
    }
  }
  function ya(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        s = t,
        c = e,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ya(s, c, l), Mr(4, c);
          break;
        case 1:
          if (
            (ya(s, c, l),
            (a = c),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (j) {
              ne(a, a.return, j);
            }
          if (((a = c), (s = a.updateQueue), s !== null)) {
            var v = a.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  e1(A[s], v);
            } catch (j) {
              ne(a, a.return, j);
            }
          }
          l && m & 64 && hm(c), Or(c, c.return);
          break;
        case 27:
          gm(c);
        case 26:
        case 5:
          ya(s, c, l), l && a === null && m & 4 && mm(c), Or(c, c.return);
          break;
        case 12:
          ya(s, c, l);
          break;
        case 31:
          ya(s, c, l), l && m & 4 && Sm(s, c);
          break;
        case 13:
          ya(s, c, l), l && m & 4 && Tm(s, c);
          break;
        case 22:
          c.memoizedState === null && ya(s, c, l), Or(c, c.return);
          break;
        case 30:
          break;
        default:
          ya(s, c, l);
      }
      e = e.sibling;
    }
  }
  function Fo(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && dr(l));
  }
  function Wo(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && dr(t));
  }
  function Vn(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Am(t, e, l, a), (e = e.sibling);
  }
  function Am(t, e, l, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Vn(t, e, l, a), s & 2048 && Mr(9, e);
        break;
      case 1:
        Vn(t, e, l, a);
        break;
      case 3:
        Vn(t, e, l, a),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && dr(t)));
        break;
      case 12:
        if (s & 2048) {
          Vn(t, e, l, a), (t = e.stateNode);
          try {
            var c = e.memoizedProps,
              m = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                m,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (A) {
            ne(e, e.return, A);
          }
        } else Vn(t, e, l, a);
        break;
      case 31:
        Vn(t, e, l, a);
        break;
      case 13:
        Vn(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (c = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? Vn(t, e, l, a)
              : zr(t, e)
            : c._visibility & 2
            ? Vn(t, e, l, a)
            : ((c._visibility |= 2),
              Tu(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Fo(m, e);
        break;
      case 24:
        Vn(t, e, l, a), s & 2048 && Wo(e.alternate, e);
        break;
      default:
        Vn(t, e, l, a);
    }
  }
  function Tu(t, e, l, a, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var c = t,
        m = e,
        v = l,
        A = a,
        j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Tu(c, m, v, A, s), Mr(8, m);
          break;
        case 23:
          break;
        case 22:
          var J = m.stateNode;
          m.memoizedState !== null
            ? J._visibility & 2
              ? Tu(c, m, v, A, s)
              : zr(c, m)
            : ((J._visibility |= 2), Tu(c, m, v, A, s)),
            s && j & 2048 && Fo(m.alternate, m);
          break;
        case 24:
          Tu(c, m, v, A, s), s && j & 2048 && Wo(m.alternate, m);
          break;
        default:
          Tu(c, m, v, A, s);
      }
      e = e.sibling;
    }
  }
  function zr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            zr(l, a), s & 2048 && Fo(a.alternate, a);
            break;
          case 24:
            zr(l, a), s & 2048 && Wo(a.alternate, a);
            break;
          default:
            zr(l, a);
        }
        e = e.sibling;
      }
  }
  var wr = 8192;
  function Eu(t, e, l) {
    if (t.subtreeFlags & wr)
      for (t = t.child; t !== null; ) Mm(t, e, l), (t = t.sibling);
  }
  function Mm(t, e, l) {
    switch (t.tag) {
      case 26:
        Eu(t, e, l),
          t.flags & wr &&
            t.memoizedState !== null &&
            hy(l, Yn, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Eu(t, e, l);
        break;
      case 3:
      case 4:
        var a = Yn;
        (Yn = Ec(t.stateNode.containerInfo)), Eu(t, e, l), (Yn = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = wr), (wr = 16777216), Eu(t, e, l), (wr = a))
            : Eu(t, e, l));
        break;
      default:
        Eu(t, e, l);
    }
  }
  function Om(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Dr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Ie = a), wm(a, t);
        }
      Om(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) zm(t), (t = t.sibling);
  }
  function zm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dr(t), t.flags & 2048 && Ga(9, t, t.return);
        break;
      case 3:
        Dr(t);
        break;
      case 12:
        Dr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), fc(t))
          : Dr(t);
        break;
      default:
        Dr(t);
    }
  }
  function fc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Ie = a), wm(a, t);
        }
      Om(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Ga(8, e, e.return), fc(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), fc(e));
          break;
        default:
          fc(e);
      }
      t = t.sibling;
    }
  }
  function wm(t, e) {
    for (; Ie !== null; ) {
      var l = Ie;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ga(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          dr(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Ie = a);
      else
        t: for (l = t; Ie !== null; ) {
          a = Ie;
          var s = a.sibling,
            c = a.return;
          if ((ym(a), a === l)) {
            Ie = null;
            break t;
          }
          if (s !== null) {
            (s.return = c), (Ie = s);
            break t;
          }
          Ie = c;
        }
    }
  }
  var Ov = {
      getCacheForType: function (t) {
        var e = al(Ve),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
      cacheSignal: function () {
        return al(Ve).controller.signal;
      },
    },
    zv = typeof WeakMap == "function" ? WeakMap : Map,
    Ft = 0,
    se = null,
    Lt = null,
    Yt = 0,
    le = 0,
    tn = null,
    Qa = !1,
    xu = !1,
    $o = !1,
    ba = 0,
    Ne = 0,
    ka = 0,
    Hi = 0,
    Po = 0,
    en = 0,
    Au = 0,
    Nr = null,
    Bl = null,
    Io = !1,
    oc = 0,
    Dm = 0,
    hc = 1 / 0,
    dc = null,
    Ka = null,
    We = 0,
    Ja = null,
    Mu = null,
    Sa = 0,
    t0 = 0,
    e0 = null,
    Nm = null,
    Cr = 0,
    l0 = null;
  function ln() {
    return (Ft & 2) !== 0 && Yt !== 0 ? Yt & -Yt : H.T !== null ? s0() : Rt();
  }
  function Cm() {
    if (en === 0)
      if ((Yt & 536870912) === 0 || qt) {
        var t = hl;
        (hl <<= 1), (hl & 3932160) === 0 && (hl = 262144), (en = t);
      } else en = 536870912;
    return (t = Pl.current), t !== null && (t.flags |= 32), en;
  }
  function Yl(t, e, l) {
    ((t === se && (le === 2 || le === 9)) || t.cancelPendingCommit !== null) &&
      (Ou(t, 0), Fa(t, Yt, en, !1)),
      mt(t, l),
      ((Ft & 2) === 0 || t !== se) &&
        (t === se &&
          ((Ft & 2) === 0 && (Hi |= l), Ne === 4 && Fa(t, Yt, en, !1)),
        Wn(t));
  }
  function Rm(t, e, l) {
    if ((Ft & 6) !== 0) throw Error(i(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || vn(t, e),
      s = a ? Nv(t, e) : a0(t, e, !0),
      c = a;
    do {
      if (s === 0) {
        xu && !a && Fa(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), c && !wv(l))) {
          (s = a0(t, e, !1)), (c = !1);
          continue;
        }
        if (s === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var m = 0;
          else
            (m = t.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0);
          if (m !== 0) {
            e = m;
            t: {
              var v = t;
              s = Nr;
              var A = v.current.memoizedState.isDehydrated;
              if ((A && (Ou(v, m).flags |= 256), (m = a0(v, m, !1)), m !== 2)) {
                if ($o && !A) {
                  (v.errorRecoveryDisabledLanes |= c), (Hi |= c), (s = 4);
                  break t;
                }
                (c = Bl),
                  (Bl = s),
                  c !== null && (Bl === null ? (Bl = c) : Bl.push.apply(Bl, c));
              }
              s = m;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Ou(t, 0), Fa(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (c = s), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Fa(a, e, en, !Qa);
              break t;
            case 2:
              Bl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((e & 62914560) === e && ((s = oc + 300 - Zt()), 10 < s)) {
            if ((Fa(a, e, en, !Qa), _n(a, 0, !0) !== 0)) break t;
            (Sa = e),
              (a.timeoutHandle = fp(
                Hm.bind(
                  null,
                  a,
                  l,
                  Bl,
                  dc,
                  Io,
                  e,
                  en,
                  Hi,
                  Au,
                  Qa,
                  c,
                  "Throttled",
                  -0,
                  0
                ),
                s
              ));
            break t;
          }
          Hm(a, l, Bl, dc, Io, e, en, Hi, Au, Qa, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Wn(t);
  }
  function Hm(t, e, l, a, s, c, m, v, A, j, J, $, L, q) {
    if (
      ((t.timeoutHandle = -1),
      ($ = e.subtreeFlags),
      $ & 8192 || ($ & 16785408) === 16785408)
    ) {
      ($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ua,
      }),
        Mm(e, c, $);
      var it =
        (c & 62914560) === c ? oc - Zt() : (c & 4194048) === c ? Dm - Zt() : 0;
      if (((it = dy($, it)), it !== null)) {
        (Sa = c),
          (t.cancelPendingCommit = it(
            qm.bind(null, t, e, c, l, a, s, m, v, A, J, $, null, L, q)
          )),
          Fa(t, c, m, !j);
        return;
      }
    }
    qm(t, e, c, l, a, s, m, v, A);
  }
  function wv(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var s = l[a],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!Wl(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Fa(t, e, l, a) {
    (e &= ~Po),
      (e &= ~Hi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var c = 31 - Ye(s),
        m = 1 << c;
      (a[c] = -1), (s &= ~m);
    }
    l !== 0 && nt(t, l, e);
  }
  function mc() {
    return (Ft & 6) === 0 ? (Rr(0), !1) : !0;
  }
  function n0() {
    if (Lt !== null) {
      if (le === 0) var t = Lt.return;
      else (t = Lt), (fa = Ai = null), yo(t), (_u = null), (pr = 0), (t = Lt);
      for (; t !== null; ) om(t.alternate, t), (t = t.return);
      Lt = null;
    }
  }
  function Ou(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Fv(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (Sa = 0),
      n0(),
      (se = t),
      (Lt = l = sa(t.current, null)),
      (Yt = e),
      (le = 0),
      (tn = null),
      (Qa = !1),
      (xu = vn(t, e)),
      ($o = !1),
      (Au = en = Po = Hi = ka = Ne = 0),
      (Bl = Nr = null),
      (Io = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var s = 31 - Ye(a),
          c = 1 << s;
        (e |= t[s]), (a &= ~c);
      }
    return (ba = e), Us(), l;
  }
  function Um(t, e) {
    (At = null),
      (H.H = Er),
      e === gu || e === Xs
        ? ((e = $d()), (le = 3))
        : e === uo
        ? ((e = $d()), (le = 4))
        : (le =
            e === Uo
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (tn = e),
      Lt === null && ((Ne = 1), nc(t, xn(e, t.current)));
  }
  function jm() {
    var t = Pl.current;
    return t === null
      ? !0
      : (Yt & 4194048) === Yt
      ? zn === null
      : (Yt & 62914560) === Yt || (Yt & 536870912) !== 0
      ? t === zn
      : !1;
  }
  function Lm() {
    var t = H.H;
    return (H.H = Er), t === null ? Er : t;
  }
  function Bm() {
    var t = H.A;
    return (H.A = Ov), t;
  }
  function pc() {
    (Ne = 4),
      Qa || ((Yt & 4194048) !== Yt && Pl.current !== null) || (xu = !0),
      ((ka & 134217727) === 0 && (Hi & 134217727) === 0) ||
        se === null ||
        Fa(se, Yt, en, !1);
  }
  function a0(t, e, l) {
    var a = Ft;
    Ft |= 2;
    var s = Lm(),
      c = Bm();
    (se !== t || Yt !== e) && ((dc = null), Ou(t, e)), (e = !1);
    var m = Ne;
    t: do
      try {
        if (le !== 0 && Lt !== null) {
          var v = Lt,
            A = tn;
          switch (le) {
            case 8:
              n0(), (m = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Pl.current === null && (e = !0);
              var j = le;
              if (((le = 0), (tn = null), zu(t, v, A, j), l && xu)) {
                m = 0;
                break t;
              }
              break;
            default:
              (j = le), (le = 0), (tn = null), zu(t, v, A, j);
          }
        }
        Dv(), (m = Ne);
        break;
      } catch (J) {
        Um(t, J);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (fa = Ai = null),
      (Ft = a),
      (H.H = s),
      (H.A = c),
      Lt === null && ((se = null), (Yt = 0), Us()),
      m
    );
  }
  function Dv() {
    for (; Lt !== null; ) Ym(Lt);
  }
  function Nv(t, e) {
    var l = Ft;
    Ft |= 2;
    var a = Lm(),
      s = Bm();
    se !== t || Yt !== e
      ? ((dc = null), (hc = Zt() + 500), Ou(t, e))
      : (xu = vn(t, e));
    t: do
      try {
        if (le !== 0 && Lt !== null) {
          e = Lt;
          var c = tn;
          e: switch (le) {
            case 1:
              (le = 0), (tn = null), zu(t, e, c, 1);
              break;
            case 2:
            case 9:
              if (Fd(c)) {
                (le = 0), (tn = null), Vm(e);
                break;
              }
              (e = function () {
                (le !== 2 && le !== 9) || se !== t || (le = 7), Wn(t);
              }),
                c.then(e, e);
              break t;
            case 3:
              le = 7;
              break t;
            case 4:
              le = 5;
              break t;
            case 7:
              Fd(c)
                ? ((le = 0), (tn = null), Vm(e))
                : ((le = 0), (tn = null), zu(t, e, c, 7));
              break;
            case 5:
              var m = null;
              switch (Lt.tag) {
                case 26:
                  m = Lt.memoizedState;
                case 5:
                case 27:
                  var v = Lt;
                  if (m ? Ap(m) : v.stateNode.complete) {
                    (le = 0), (tn = null);
                    var A = v.sibling;
                    if (A !== null) Lt = A;
                    else {
                      var j = v.return;
                      j !== null ? ((Lt = j), gc(j)) : (Lt = null);
                    }
                    break e;
                  }
              }
              (le = 0), (tn = null), zu(t, e, c, 5);
              break;
            case 6:
              (le = 0), (tn = null), zu(t, e, c, 6);
              break;
            case 8:
              n0(), (Ne = 6);
              break t;
            default:
              throw Error(i(462));
          }
        }
        Cv();
        break;
      } catch (J) {
        Um(t, J);
      }
    while (!0);
    return (
      (fa = Ai = null),
      (H.H = a),
      (H.A = s),
      (Ft = l),
      Lt !== null ? 0 : ((se = null), (Yt = 0), Us(), Ne)
    );
  }
  function Cv() {
    for (; Lt !== null && !fl(); ) Ym(Lt);
  }
  function Ym(t) {
    var e = cm(t.alternate, t, ba);
    (t.memoizedProps = t.pendingProps), e === null ? gc(t) : (Lt = e);
  }
  function Vm(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = nm(l, e, e.pendingProps, e.type, void 0, Yt);
        break;
      case 11:
        e = nm(l, e, e.pendingProps, e.type.render, e.ref, Yt);
        break;
      case 5:
        yo(e);
      default:
        om(l, e), (e = Lt = Bd(e, ba)), (e = cm(l, e, ba));
    }
    (t.memoizedProps = t.pendingProps), e === null ? gc(t) : (Lt = e);
  }
  function zu(t, e, l, a) {
    (fa = Ai = null), yo(e), (_u = null), (pr = 0);
    var s = e.return;
    try {
      if (bv(t, s, e, l, Yt)) {
        (Ne = 1), nc(t, xn(l, t.current)), (Lt = null);
        return;
      }
    } catch (c) {
      if (s !== null) throw ((Lt = s), c);
      (Ne = 1), nc(t, xn(l, t.current)), (Lt = null);
      return;
    }
    e.flags & 32768
      ? (qt || a === 1
          ? (t = !0)
          : xu || (Yt & 536870912) !== 0
          ? (t = !1)
          : ((Qa = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Pl.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Zm(e, t))
      : gc(e);
  }
  function gc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Zm(e, Qa);
        return;
      }
      t = e.return;
      var l = Ev(e.alternate, e, ba);
      if (l !== null) {
        Lt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Lt = e;
        return;
      }
      Lt = e = t;
    } while (e !== null);
    Ne === 0 && (Ne = 5);
  }
  function Zm(t, e) {
    do {
      var l = xv(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (Lt = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Lt = t;
        return;
      }
      Lt = t = l;
    } while (t !== null);
    (Ne = 6), (Lt = null);
  }
  function qm(t, e, l, a, s, c, m, v, A) {
    t.cancelPendingCommit = null;
    do _c();
    while (We !== 0);
    if ((Ft & 6) !== 0) throw Error(i(327));
    if (e !== null) {
      if (e === t.current) throw Error(i(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= Qf),
        Qt(t, l, c, m, v, A),
        t === se && ((Lt = se = null), (Yt = 0)),
        (Mu = e),
        (Ja = t),
        (Sa = l),
        (t0 = c),
        (e0 = s),
        (Nm = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            jv(ol, function () {
              return Km(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = H.T), (H.T = null), (s = K.p), (K.p = 2), (m = Ft), (Ft |= 4);
        try {
          Av(t, e, l);
        } finally {
          (Ft = m), (K.p = s), (H.T = a);
        }
      }
      (We = 1), Xm(), Gm(), Qm();
    }
  }
  function Xm() {
    if (We === 1) {
      We = 0;
      var t = Ja,
        e = Mu,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = H.T), (H.T = null);
        var a = K.p;
        K.p = 2;
        var s = Ft;
        Ft |= 4;
        try {
          Em(e, t);
          var c = g0,
            m = wd(t.containerInfo),
            v = c.focusedElem,
            A = c.selectionRange;
          if (
            m !== v &&
            v &&
            v.ownerDocument &&
            zd(v.ownerDocument.documentElement, v)
          ) {
            if (A !== null && Vf(v)) {
              var j = A.start,
                J = A.end;
              if ((J === void 0 && (J = j), "selectionStart" in v))
                (v.selectionStart = j),
                  (v.selectionEnd = Math.min(J, v.value.length));
              else {
                var $ = v.ownerDocument || document,
                  L = ($ && $.defaultView) || window;
                if (L.getSelection) {
                  var q = L.getSelection(),
                    it = v.textContent.length,
                    vt = Math.min(A.start, it),
                    re = A.end === void 0 ? vt : Math.min(A.end, it);
                  !q.extend && vt > re && ((m = re), (re = vt), (vt = m));
                  var R = Od(v, vt),
                    D = Od(v, re);
                  if (
                    R &&
                    D &&
                    (q.rangeCount !== 1 ||
                      q.anchorNode !== R.node ||
                      q.anchorOffset !== R.offset ||
                      q.focusNode !== D.node ||
                      q.focusOffset !== D.offset)
                  ) {
                    var U = $.createRange();
                    U.setStart(R.node, R.offset),
                      q.removeAllRanges(),
                      vt > re
                        ? (q.addRange(U), q.extend(D.node, D.offset))
                        : (U.setEnd(D.node, D.offset), q.addRange(U));
                  }
                }
              }
            }
            for ($ = [], q = v; (q = q.parentNode); )
              q.nodeType === 1 &&
                $.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < $.length;
              v++
            ) {
              var F = $[v];
              (F.element.scrollLeft = F.left), (F.element.scrollTop = F.top);
            }
          }
          (wc = !!p0), (g0 = p0 = null);
        } finally {
          (Ft = s), (K.p = a), (H.T = l);
        }
      }
      (t.current = e), (We = 2);
    }
  }
  function Gm() {
    if (We === 2) {
      We = 0;
      var t = Ja,
        e = Mu,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = H.T), (H.T = null);
        var a = K.p;
        K.p = 2;
        var s = Ft;
        Ft |= 4;
        try {
          vm(t, e.alternate, e);
        } finally {
          (Ft = s), (K.p = a), (H.T = l);
        }
      }
      We = 3;
    }
  }
  function Qm() {
    if (We === 4 || We === 3) {
      (We = 0), It();
      var t = Ja,
        e = Mu,
        l = Sa,
        a = Nm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (We = 5)
        : ((We = 0), (Mu = Ja = null), km(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Ka = null),
        we(l),
        (e = e.stateNode),
        be && typeof be.onCommitFiberRoot == "function")
      )
        try {
          be.onCommitFiberRoot(qn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = H.T), (s = K.p), (K.p = 2), (H.T = null);
        try {
          for (var c = t.onRecoverableError, m = 0; m < a.length; m++) {
            var v = a[m];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          (H.T = e), (K.p = s);
        }
      }
      (Sa & 3) !== 0 && _c(),
        Wn(t),
        (s = t.pendingLanes),
        (l & 261930) !== 0 && (s & 42) !== 0
          ? t === l0
            ? Cr++
            : ((Cr = 0), (l0 = t))
          : (Cr = 0),
        Rr(0);
    }
  }
  function km(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), dr(e)));
  }
  function _c() {
    return Xm(), Gm(), Qm(), Km();
  }
  function Km() {
    if (We !== 5) return !1;
    var t = Ja,
      e = t0;
    t0 = 0;
    var l = we(Sa),
      a = H.T,
      s = K.p;
    try {
      (K.p = 32 > l ? 32 : l), (H.T = null), (l = e0), (e0 = null);
      var c = Ja,
        m = Sa;
      if (((We = 0), (Mu = Ja = null), (Sa = 0), (Ft & 6) !== 0))
        throw Error(i(331));
      var v = Ft;
      if (
        ((Ft |= 4),
        zm(c.current),
        Am(c, c.current, m, l),
        (Ft = v),
        Rr(0, !1),
        be && typeof be.onPostCommitFiberRoot == "function")
      )
        try {
          be.onPostCommitFiberRoot(qn, c);
        } catch {}
      return !0;
    } finally {
      (K.p = s), (H.T = a), km(t, e);
    }
  }
  function Jm(t, e, l) {
    (e = xn(l, e)),
      (e = Ho(t.stateNode, e, 2)),
      (t = Za(t, e, 2)),
      t !== null && (mt(t, 2), Wn(t));
  }
  function ne(t, e, l) {
    if (t.tag === 3) Jm(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Jm(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Ka === null || !Ka.has(a)))
          ) {
            (t = xn(l, t)),
              (l = F1(2)),
              (a = Za(e, l, 2)),
              a !== null && (W1(l, a, e, t), mt(a, 2), Wn(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function i0(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new zv();
      var s = new Set();
      a.set(e, s);
    } else (s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s));
    s.has(l) ||
      (($o = !0), s.add(l), (t = Rv.bind(null, t, e, l)), e.then(t, t));
  }
  function Rv(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      se === t &&
        (Yt & l) === l &&
        (Ne === 4 || (Ne === 3 && (Yt & 62914560) === Yt && 300 > Zt() - oc)
          ? (Ft & 2) === 0 && Ou(t, 0)
          : (Po |= l),
        Au === Yt && (Au = 0)),
      Wn(t);
  }
  function Fm(t, e) {
    e === 0 && (e = Ca()), (t = Ti(t, e)), t !== null && (mt(t, e), Wn(t));
  }
  function Hv(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Fm(t, l);
  }
  function Uv(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (l = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(e), Fm(t, l);
  }
  function jv(t, e) {
    return Nl(t, e);
  }
  var vc = null,
    wu = null,
    u0 = !1,
    yc = !1,
    r0 = !1,
    Wa = 0;
  function Wn(t) {
    t !== wu &&
      t.next === null &&
      (wu === null ? (vc = wu = t) : (wu = wu.next = t)),
      (yc = !0),
      u0 || ((u0 = !0), Bv());
  }
  function Rr(t, e) {
    if (!r0 && yc) {
      r0 = !0;
      do
        for (var l = !1, a = vc; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var m = a.suspendedLanes,
                v = a.pingedLanes;
              (c = (1 << (31 - Ye(42 | t) + 1)) - 1),
                (c &= s & ~(m & ~v)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((l = !0), Im(a, c));
          } else
            (c = Yt),
              (c = _n(
                a,
                a === se ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (c & 3) === 0 || vn(a, c) || ((l = !0), Im(a, c));
          a = a.next;
        }
      while (l);
      r0 = !1;
    }
  }
  function Lv() {
    Wm();
  }
  function Wm() {
    yc = u0 = !1;
    var t = 0;
    Wa !== 0 && Jv() && (t = Wa);
    for (var e = Zt(), l = null, a = vc; a !== null; ) {
      var s = a.next,
        c = $m(a, e);
      c === 0
        ? ((a.next = null),
          l === null ? (vc = s) : (l.next = s),
          s === null && (wu = l))
        : ((l = a), (t !== 0 || (c & 3) !== 0) && (yc = !0)),
        (a = s);
    }
    (We !== 0 && We !== 5) || Rr(t), Wa !== 0 && (Wa = 0);
  }
  function $m(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        s = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;

    ) {
      var m = 31 - Ye(c),
        v = 1 << m,
        A = s[m];
      A === -1
        ? ((v & l) === 0 || (v & a) !== 0) && (s[m] = Ln(v, e))
        : A <= e && (t.expiredLanes |= v),
        (c &= ~v);
    }
    if (
      ((e = se),
      (l = Yt),
      (l = _n(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (le === 2 || le === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Pt(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || vn(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && Pt(a), we(l))) {
        case 2:
        case 8:
          l = ee;
          break;
        case 32:
          l = ol;
          break;
        case 268435456:
          l = pn;
          break;
        default:
          l = ol;
      }
      return (
        (a = Pm.bind(null, t)),
        (l = Nl(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && Pt(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Pm(t, e) {
    if (We !== 0 && We !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (_c() && t.callbackNode !== l) return null;
    var a = Yt;
    return (
      (a = _n(
        t,
        t === se ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Rm(t, a, e),
          $m(t, Zt()),
          t.callbackNode != null && t.callbackNode === l
            ? Pm.bind(null, t)
            : null)
    );
  }
  function Im(t, e) {
    if (_c()) return null;
    Rm(t, e, !0);
  }
  function Bv() {
    Wv(function () {
      (Ft & 6) !== 0 ? Nl(Oe, Lv) : Wm();
    });
  }
  function s0() {
    if (Wa === 0) {
      var t = mu;
      t === 0 && ((t = gn), (gn <<= 1), (gn & 261888) === 0 && (gn = 256)),
        (Wa = t);
    }
    return Wa;
  }
  function tp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Os("" + t);
  }
  function ep(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Yv(t, e, l, a, s) {
    if (e === "submit" && l && l.stateNode === s) {
      var c = tp((s[Dt] || null).action),
        m = a.submitter;
      m &&
        ((e = (e = m[Dt] || null)
          ? tp(e.formAction)
          : m.getAttribute("formAction")),
        e !== null && ((c = e), (m = null)));
      var v = new Ns("action", "action", null, a, s);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Wa !== 0) {
                  var A = m ? ep(s, m) : new FormData(s);
                  zo(
                    l,
                    { pending: !0, data: A, method: s.method, action: c },
                    null,
                    A
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (A = m ? ep(s, m) : new FormData(s)),
                  zo(
                    l,
                    { pending: !0, data: A, method: s.method, action: c },
                    c,
                    A
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var c0 = 0; c0 < Gf.length; c0++) {
    var f0 = Gf[c0],
      Vv = f0.toLowerCase(),
      Zv = f0[0].toUpperCase() + f0.slice(1);
    Bn(Vv, "on" + Zv);
  }
  Bn(Cd, "onAnimationEnd"),
    Bn(Rd, "onAnimationIteration"),
    Bn(Hd, "onAnimationStart"),
    Bn("dblclick", "onDoubleClick"),
    Bn("focusin", "onFocus"),
    Bn("focusout", "onBlur"),
    Bn(nv, "onTransitionRun"),
    Bn(av, "onTransitionStart"),
    Bn(iv, "onTransitionCancel"),
    Bn(Ud, "onTransitionEnd"),
    yn("onMouseEnter", ["mouseout", "mouseover"]),
    yn("onMouseLeave", ["mouseout", "mouseover"]),
    yn("onPointerEnter", ["pointerout", "pointerover"]),
    yn("onPointerLeave", ["pointerout", "pointerover"]),
    Qn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Qn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Qn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Hr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    qv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Hr)
    );
  function lp(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        s = a.event;
      a = a.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var m = a.length - 1; 0 <= m; m--) {
            var v = a[m],
              A = v.instance,
              j = v.currentTarget;
            if (((v = v.listener), A !== c && s.isPropagationStopped()))
              break t;
            (c = v), (s.currentTarget = j);
            try {
              c(s);
            } catch (J) {
              Hs(J);
            }
            (s.currentTarget = null), (c = A);
          }
        else
          for (m = 0; m < a.length; m++) {
            if (
              ((v = a[m]),
              (A = v.instance),
              (j = v.currentTarget),
              (v = v.listener),
              A !== c && s.isPropagationStopped())
            )
              break t;
            (c = v), (s.currentTarget = j);
            try {
              c(s);
            } catch (J) {
              Hs(J);
            }
            (s.currentTarget = null), (c = A);
          }
      }
    }
  }
  function Bt(t, e) {
    var l = e[Tl];
    l === void 0 && (l = e[Tl] = new Set());
    var a = t + "__bubble";
    l.has(a) || (np(e, t, 2, !1), l.add(a));
  }
  function o0(t, e, l) {
    var a = 0;
    e && (a |= 4), np(l, t, a, e);
  }
  var bc = "_reactListening" + Math.random().toString(36).slice(2);
  function h0(t) {
    if (!t[bc]) {
      (t[bc] = !0),
        Fl.forEach(function (l) {
          l !== "selectionchange" && (qv.has(l) || o0(l, !1, t), o0(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[bc] || ((e[bc] = !0), o0("selectionchange", !1, e));
    }
  }
  function np(t, e, l, a) {
    switch (Cp(e)) {
      case 2:
        var s = gy;
        break;
      case 8:
        s = _y;
        break;
      default:
        s = O0;
    }
    (l = s.bind(null, e, l, t)),
      (s = void 0),
      !Nf ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: s })
          : t.addEventListener(e, l, !0)
        : s !== void 0
        ? t.addEventListener(e, l, { passive: s })
        : t.addEventListener(e, l, !1);
  }
  function d0(t, e, l, a, s) {
    var c = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var m = a.tag;
        if (m === 3 || m === 4) {
          var v = a.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = a.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (((m = Te(v)), m === null)) return;
            if (((A = m.tag), A === 5 || A === 6 || A === 26 || A === 27)) {
              a = c = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        a = a.return;
      }
    sd(function () {
      var j = c,
        J = wf(l),
        $ = [];
      t: {
        var L = jd.get(t);
        if (L !== void 0) {
          var q = Ns,
            it = t;
          switch (t) {
            case "keypress":
              if (ws(l) === 0) break t;
            case "keydown":
            case "keyup":
              q = U2;
              break;
            case "focusin":
              (it = "focus"), (q = Uf);
              break;
            case "focusout":
              (it = "blur"), (q = Uf);
              break;
            case "beforeblur":
            case "afterblur":
              q = Uf;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = od;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = E2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = B2;
              break;
            case Cd:
            case Rd:
            case Hd:
              q = M2;
              break;
            case Ud:
              q = V2;
              break;
            case "scroll":
            case "scrollend":
              q = S2;
              break;
            case "wheel":
              q = q2;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = z2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = dd;
              break;
            case "toggle":
            case "beforetoggle":
              q = G2;
          }
          var vt = (e & 4) !== 0,
            re = !vt && (t === "scroll" || t === "scrollend"),
            R = vt ? (L !== null ? L + "Capture" : null) : L;
          vt = [];
          for (var D = j, U; D !== null; ) {
            var F = D;
            if (
              ((U = F.stateNode),
              (F = F.tag),
              (F !== 5 && F !== 26 && F !== 27) ||
                U === null ||
                R === null ||
                ((F = lr(D, R)), F != null && vt.push(Ur(D, F, U))),
              re)
            )
              break;
            D = D.return;
          }
          0 < vt.length &&
            ((L = new q(L, it, null, l, J)),
            $.push({ event: L, listeners: vt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((L = t === "mouseover" || t === "pointerover"),
            (q = t === "mouseout" || t === "pointerout"),
            L &&
              l !== zf &&
              (it = l.relatedTarget || l.fromElement) &&
              (Te(it) || it[Gt]))
          )
            break t;
          if (
            (q || L) &&
            ((L =
              J.window === J
                ? J
                : (L = J.ownerDocument)
                ? L.defaultView || L.parentWindow
                : window),
            q
              ? ((it = l.relatedTarget || l.toElement),
                (q = j),
                (it = it ? Te(it) : null),
                it !== null &&
                  ((re = f(it)),
                  (vt = it.tag),
                  it !== re || (vt !== 5 && vt !== 27 && vt !== 6)) &&
                  (it = null))
              : ((q = null), (it = j)),
            q !== it)
          ) {
            if (
              ((vt = od),
              (F = "onMouseLeave"),
              (R = "onMouseEnter"),
              (D = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((vt = dd),
                (F = "onPointerLeave"),
                (R = "onPointerEnter"),
                (D = "pointer")),
              (re = q == null ? L : Gn(q)),
              (U = it == null ? L : Gn(it)),
              (L = new vt(F, D + "leave", q, l, J)),
              (L.target = re),
              (L.relatedTarget = U),
              (F = null),
              Te(J) === j &&
                ((vt = new vt(R, D + "enter", it, l, J)),
                (vt.target = U),
                (vt.relatedTarget = re),
                (F = vt)),
              (re = F),
              q && it)
            )
              e: {
                for (vt = Xv, R = q, D = it, U = 0, F = R; F; F = vt(F)) U++;
                F = 0;
                for (var gt = D; gt; gt = vt(gt)) F++;
                for (; 0 < U - F; ) (R = vt(R)), U--;
                for (; 0 < F - U; ) (D = vt(D)), F--;
                for (; U--; ) {
                  if (R === D || (D !== null && R === D.alternate)) {
                    vt = R;
                    break e;
                  }
                  (R = vt(R)), (D = vt(D));
                }
                vt = null;
              }
            else vt = null;
            q !== null && ap($, L, q, vt, !1),
              it !== null && re !== null && ap($, re, it, vt, !0);
          }
        }
        t: {
          if (
            ((L = j ? Gn(j) : window),
            (q = L.nodeName && L.nodeName.toLowerCase()),
            q === "select" || (q === "input" && L.type === "file"))
          )
            var Kt = Sd;
          else if (yd(L))
            if (Td) Kt = tv;
            else {
              Kt = P2;
              var ot = $2;
            }
          else
            (q = L.nodeName),
              !q ||
              q.toLowerCase() !== "input" ||
              (L.type !== "checkbox" && L.type !== "radio")
                ? j && Of(j.elementType) && (Kt = Sd)
                : (Kt = I2);
          if (Kt && (Kt = Kt(t, j))) {
            bd($, Kt, l, J);
            break t;
          }
          ot && ot(t, L, j),
            t === "focusout" &&
              j &&
              L.type === "number" &&
              j.memoizedProps.value != null &&
              Mf(L, "number", L.value);
        }
        switch (((ot = j ? Gn(j) : window), t)) {
          case "focusin":
            (yd(ot) || ot.contentEditable === "true") &&
              ((uu = ot), (Zf = j), (fr = null));
            break;
          case "focusout":
            fr = Zf = uu = null;
            break;
          case "mousedown":
            qf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (qf = !1), Dd($, l, J);
            break;
          case "selectionchange":
            if (lv) break;
          case "keydown":
          case "keyup":
            Dd($, l, J);
        }
        var Mt;
        if (Lf)
          t: {
            switch (t) {
              case "compositionstart":
                var Vt = "onCompositionStart";
                break t;
              case "compositionend":
                Vt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Vt = "onCompositionUpdate";
                break t;
            }
            Vt = void 0;
          }
        else
          iu
            ? _d(t, l) && (Vt = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (Vt = "onCompositionStart");
        Vt &&
          (md &&
            l.locale !== "ko" &&
            (iu || Vt !== "onCompositionStart"
              ? Vt === "onCompositionEnd" && iu && (Mt = cd())
              : ((Ha = J),
                (Cf = "value" in Ha ? Ha.value : Ha.textContent),
                (iu = !0))),
          (ot = Sc(j, Vt)),
          0 < ot.length &&
            ((Vt = new hd(Vt, t, null, l, J)),
            $.push({ event: Vt, listeners: ot }),
            Mt
              ? (Vt.data = Mt)
              : ((Mt = vd(l)), Mt !== null && (Vt.data = Mt)))),
          (Mt = k2 ? K2(t, l) : J2(t, l)) &&
            ((Vt = Sc(j, "onBeforeInput")),
            0 < Vt.length &&
              ((ot = new hd("onBeforeInput", "beforeinput", null, l, J)),
              $.push({ event: ot, listeners: Vt }),
              (ot.data = Mt))),
          Yv($, t, j, l, J);
      }
      lp($, e);
    });
  }
  function Ur(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Sc(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var s = t,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = lr(t, l)),
          s != null && a.unshift(Ur(t, s, c)),
          (s = lr(t, e)),
          s != null && a.push(Ur(t, s, c))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Xv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ap(t, e, l, a, s) {
    for (var c = e._reactName, m = []; l !== null && l !== a; ) {
      var v = l,
        A = v.alternate,
        j = v.stateNode;
      if (((v = v.tag), A !== null && A === a)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        j === null ||
        ((A = j),
        s
          ? ((j = lr(l, c)), j != null && m.unshift(Ur(l, j, A)))
          : s || ((j = lr(l, c)), j != null && m.push(Ur(l, j, A)))),
        (l = l.return);
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var Gv = /\r\n?/g,
    Qv = /\u0000|\uFFFD/g;
  function ip(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Gv,
        `
`
      )
      .replace(Qv, "");
  }
  function up(t, e) {
    return (e = ip(e)), ip(t) === e;
  }
  function ue(t, e, l, a, s, c) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || lu(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            lu(t, "" + a);
        break;
      case "className":
        As(t, "class", a);
        break;
      case "tabIndex":
        As(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        As(t, l, a);
        break;
      case "style":
        ud(t, a, c);
        break;
      case "data":
        if (e !== "object") {
          As(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Os("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (l === "formAction"
              ? (e !== "input" && ue(t, e, "name", s.name, s, null),
                ue(t, e, "formEncType", s.formEncType, s, null),
                ue(t, e, "formMethod", s.formMethod, s, null),
                ue(t, e, "formTarget", s.formTarget, s, null))
              : (ue(t, e, "encType", s.encType, s, null),
                ue(t, e, "method", s.method, s, null),
                ue(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Os("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = ua);
        break;
      case "onScroll":
        a != null && Bt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Bt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((l = a.__html), l != null)) {
            if (s.children != null) throw Error(i(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Os("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        Bt("beforetoggle", t), Bt("toggle", t), xs(t, "popover", a);
        break;
      case "xlinkActuate":
        ia(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        ia(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        ia(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        ia(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        ia(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        ia(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        ia(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        ia(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        ia(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        xs(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = y2.get(l) || l), xs(t, l, a));
    }
  }
  function m0(t, e, l, a, s, c) {
    switch (l) {
      case "style":
        ud(t, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((l = a.__html), l != null)) {
            if (s.children != null) throw Error(i(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? lu(t, a)
          : (typeof a == "number" || typeof a == "bigint") && lu(t, "" + a);
        break;
      case "onScroll":
        a != null && Bt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Bt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = ua);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!tu.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((s = l.endsWith("Capture")),
              (e = l.slice(2, s ? l.length - 7 : void 0)),
              (c = t[Dt] || null),
              (c = c != null ? c[l] : null),
              typeof c == "function" && t.removeEventListener(e, c, s),
              typeof a == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, s);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : xs(t, l, a);
          }
    }
  }
  function ul(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Bt("error", t), Bt("load", t);
        var a = !1,
          s = !1,
          c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var m = l[c];
            if (m != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, e));
                default:
                  ue(t, e, c, m, l, null);
              }
          }
        s && ue(t, e, "srcSet", l.srcSet, l, null),
          a && ue(t, e, "src", l.src, l, null);
        return;
      case "input":
        Bt("invalid", t);
        var v = (c = m = s = null),
          A = null,
          j = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var J = l[a];
            if (J != null)
              switch (a) {
                case "name":
                  s = J;
                  break;
                case "type":
                  m = J;
                  break;
                case "checked":
                  A = J;
                  break;
                case "defaultChecked":
                  j = J;
                  break;
                case "value":
                  c = J;
                  break;
                case "defaultValue":
                  v = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null) throw Error(i(137, e));
                  break;
                default:
                  ue(t, e, a, J, l, null);
              }
          }
        ld(t, c, v, A, j, m, s, !1);
        return;
      case "select":
        Bt("invalid", t), (a = m = c = null);
        for (s in l)
          if (l.hasOwnProperty(s) && ((v = l[s]), v != null))
            switch (s) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                a = v;
              default:
                ue(t, e, s, v, l, null);
            }
        (e = c),
          (l = m),
          (t.multiple = !!a),
          e != null ? eu(t, !!a, e, !1) : l != null && eu(t, !!a, l, !0);
        return;
      case "textarea":
        Bt("invalid", t), (c = s = a = null);
        for (m in l)
          if (l.hasOwnProperty(m) && ((v = l[m]), v != null))
            switch (m) {
              case "value":
                a = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(i(91));
                break;
              default:
                ue(t, e, m, v, l, null);
            }
        ad(t, a, s, c);
        return;
      case "option":
        for (A in l)
          if (l.hasOwnProperty(A) && ((a = l[A]), a != null))
            switch (A) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                ue(t, e, A, a, l, null);
            }
        return;
      case "dialog":
        Bt("beforetoggle", t), Bt("toggle", t), Bt("cancel", t), Bt("close", t);
        break;
      case "iframe":
      case "object":
        Bt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Hr.length; a++) Bt(Hr[a], t);
        break;
      case "image":
        Bt("error", t), Bt("load", t);
        break;
      case "details":
        Bt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Bt("error", t), Bt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in l)
          if (l.hasOwnProperty(j) && ((a = l[j]), a != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, e));
              default:
                ue(t, e, j, a, l, null);
            }
        return;
      default:
        if (Of(e)) {
          for (J in l)
            l.hasOwnProperty(J) &&
              ((a = l[J]), a !== void 0 && m0(t, e, J, a, l, void 0));
          return;
        }
    }
    for (v in l)
      l.hasOwnProperty(v) && ((a = l[v]), a != null && ue(t, e, v, a, l, null));
  }
  function kv(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          m = null,
          v = null,
          A = null,
          j = null,
          J = null;
        for (q in l) {
          var $ = l[q];
          if (l.hasOwnProperty(q) && $ != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = $;
              default:
                a.hasOwnProperty(q) || ue(t, e, q, null, a, $);
            }
        }
        for (var L in a) {
          var q = a[L];
          if ((($ = l[L]), a.hasOwnProperty(L) && (q != null || $ != null)))
            switch (L) {
              case "type":
                c = q;
                break;
              case "name":
                s = q;
                break;
              case "checked":
                j = q;
                break;
              case "defaultChecked":
                J = q;
                break;
              case "value":
                m = q;
                break;
              case "defaultValue":
                v = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(i(137, e));
                break;
              default:
                q !== $ && ue(t, e, L, q, a, $);
            }
        }
        Af(t, m, v, A, j, J, c, s);
        return;
      case "select":
        q = m = v = L = null;
        for (c in l)
          if (((A = l[c]), l.hasOwnProperty(c) && A != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                q = A;
              default:
                a.hasOwnProperty(c) || ue(t, e, c, null, a, A);
            }
        for (s in a)
          if (
            ((c = a[s]),
            (A = l[s]),
            a.hasOwnProperty(s) && (c != null || A != null))
          )
            switch (s) {
              case "value":
                L = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== A && ue(t, e, s, c, a, A);
            }
        (e = v),
          (l = m),
          (a = q),
          L != null
            ? eu(t, !!l, L, !1)
            : !!a != !!l &&
              (e != null ? eu(t, !!l, e, !0) : eu(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        q = L = null;
        for (v in l)
          if (
            ((s = l[v]),
            l.hasOwnProperty(v) && s != null && !a.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                ue(t, e, v, null, a, s);
            }
        for (m in a)
          if (
            ((s = a[m]),
            (c = l[m]),
            a.hasOwnProperty(m) && (s != null || c != null))
          )
            switch (m) {
              case "value":
                L = s;
                break;
              case "defaultValue":
                q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== c && ue(t, e, m, s, a, c);
            }
        nd(t, L, q);
        return;
      case "option":
        for (var it in l)
          if (
            ((L = l[it]),
            l.hasOwnProperty(it) && L != null && !a.hasOwnProperty(it))
          )
            switch (it) {
              case "selected":
                t.selected = !1;
                break;
              default:
                ue(t, e, it, null, a, L);
            }
        for (A in a)
          if (
            ((L = a[A]),
            (q = l[A]),
            a.hasOwnProperty(A) && L !== q && (L != null || q != null))
          )
            switch (A) {
              case "selected":
                t.selected =
                  L && typeof L != "function" && typeof L != "symbol";
                break;
              default:
                ue(t, e, A, L, a, q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var vt in l)
          (L = l[vt]),
            l.hasOwnProperty(vt) &&
              L != null &&
              !a.hasOwnProperty(vt) &&
              ue(t, e, vt, null, a, L);
        for (j in a)
          if (
            ((L = a[j]),
            (q = l[j]),
            a.hasOwnProperty(j) && L !== q && (L != null || q != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(i(137, e));
                break;
              default:
                ue(t, e, j, L, a, q);
            }
        return;
      default:
        if (Of(e)) {
          for (var re in l)
            (L = l[re]),
              l.hasOwnProperty(re) &&
                L !== void 0 &&
                !a.hasOwnProperty(re) &&
                m0(t, e, re, void 0, a, L);
          for (J in a)
            (L = a[J]),
              (q = l[J]),
              !a.hasOwnProperty(J) ||
                L === q ||
                (L === void 0 && q === void 0) ||
                m0(t, e, J, L, a, q);
          return;
        }
    }
    for (var R in l)
      (L = l[R]),
        l.hasOwnProperty(R) &&
          L != null &&
          !a.hasOwnProperty(R) &&
          ue(t, e, R, null, a, L);
    for ($ in a)
      (L = a[$]),
        (q = l[$]),
        !a.hasOwnProperty($) ||
          L === q ||
          (L == null && q == null) ||
          ue(t, e, $, L, a, q);
  }
  function rp(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Kv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var s = l[a],
          c = s.transferSize,
          m = s.initiatorType,
          v = s.duration;
        if (c && v && rp(m)) {
          for (m = 0, v = s.responseEnd, a += 1; a < l.length; a++) {
            var A = l[a],
              j = A.startTime;
            if (j > v) break;
            var J = A.transferSize,
              $ = A.initiatorType;
            J &&
              rp($) &&
              ((A = A.responseEnd), (m += J * (A < v ? 1 : (v - j) / (A - j))));
          }
          if ((--a, (e += (8 * (c + m)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var p0 = null,
    g0 = null;
  function Tc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function cp(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function _0(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var v0 = null;
  function Jv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === v0
        ? !1
        : ((v0 = t), !0)
      : ((v0 = null), !1);
  }
  var fp = typeof setTimeout == "function" ? setTimeout : void 0,
    Fv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    op = typeof Promise == "function" ? Promise : void 0,
    Wv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof op < "u"
        ? function (t) {
            return op.resolve(null).then(t).catch($v);
          }
        : fp;
  function $v(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function $a(t) {
    return t === "head";
  }
  function hp(t, e) {
    var l = e,
      a = 0;
    do {
      var s = l.nextSibling;
      if ((t.removeChild(l), s && s.nodeType === 8))
        if (((l = s.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            t.removeChild(s), Ru(e);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") jr(t.ownerDocument.documentElement);
        else if (l === "head") {
          (l = t.ownerDocument.head), jr(l);
          for (var c = l.firstChild; c; ) {
            var m = c.nextSibling,
              v = c.nodeName;
            c[Se] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(c),
              (c = m);
          }
        } else l === "body" && jr(t.ownerDocument.body);
      l = s;
    } while (l);
    Ru(e);
  }
  function dp(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function y0(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          y0(l), He(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Pv(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var s = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Se])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = wn(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Iv(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = wn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function mp(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = wn(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function b0(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function S0(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function ty(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function wn(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var T0 = null;
  function pp(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return wn(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function gp(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function _p(t, e, l) {
    switch (((e = Tc(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(i(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(i(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(i(454));
        return t;
      default:
        throw Error(i(451));
    }
  }
  function jr(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    He(t);
  }
  var Dn = new Map(),
    vp = new Set();
  function Ec(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Ta = K.d;
  K.d = { f: ey, r: ly, D: ny, C: ay, L: iy, m: uy, X: sy, S: ry, M: cy };
  function ey() {
    var t = Ta.f(),
      e = mc();
    return t || e;
  }
  function ly(t) {
    var e = Rl(t);
    e !== null && e.tag === 5 && e.type === "form" ? U1(e) : Ta.r(t);
  }
  var Du = typeof document > "u" ? null : document;
  function yp(t, e, l) {
    var a = Du;
    if (a && typeof e == "string" && e) {
      var s = Tn(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof l == "string" && (s += '[crossorigin="' + l + '"]'),
        vp.has(s) ||
          (vp.add(s),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(s) === null &&
            ((e = a.createElement("link")),
            ul(e, "link", t),
            Ht(e),
            a.head.appendChild(e)));
    }
  }
  function ny(t) {
    Ta.D(t), yp("dns-prefetch", t, null);
  }
  function ay(t, e) {
    Ta.C(t, e), yp("preconnect", t, e);
  }
  function iy(t, e, l) {
    Ta.L(t, e, l);
    var a = Du;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Tn(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((s += '[imagesrcset="' + Tn(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (s += '[imagesizes="' + Tn(l.imageSizes) + '"]'))
        : (s += '[href="' + Tn(t) + '"]');
      var c = s;
      switch (e) {
        case "style":
          c = Nu(t);
          break;
        case "script":
          c = Cu(t);
      }
      Dn.has(c) ||
        ((t = y(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        Dn.set(c, t),
        a.querySelector(s) !== null ||
          (e === "style" && a.querySelector(Lr(c))) ||
          (e === "script" && a.querySelector(Br(c))) ||
          ((e = a.createElement("link")),
          ul(e, "link", t),
          Ht(e),
          a.head.appendChild(e)));
    }
  }
  function uy(t, e) {
    Ta.m(t, e);
    var l = Du;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Tn(a) + '"][href="' + Tn(t) + '"]',
        c = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Cu(t);
      }
      if (
        !Dn.has(c) &&
        ((t = y({ rel: "modulepreload", href: t }, e)),
        Dn.set(c, t),
        l.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Br(c))) return;
        }
        (a = l.createElement("link")),
          ul(a, "link", t),
          Ht(a),
          l.head.appendChild(a);
      }
    }
  }
  function ry(t, e, l) {
    Ta.S(t, e, l);
    var a = Du;
    if (a && t) {
      var s = Ee(a).hoistableStyles,
        c = Nu(t);
      e = e || "default";
      var m = s.get(c);
      if (!m) {
        var v = { loading: 0, preload: null };
        if ((m = a.querySelector(Lr(c)))) v.loading = 5;
        else {
          (t = y({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Dn.get(c)) && E0(t, l);
          var A = (m = a.createElement("link"));
          Ht(A),
            ul(A, "link", t),
            (A._p = new Promise(function (j, J) {
              (A.onload = j), (A.onerror = J);
            })),
            A.addEventListener("load", function () {
              v.loading |= 1;
            }),
            A.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            xc(m, e, a);
        }
        (m = { type: "stylesheet", instance: m, count: 1, state: v }),
          s.set(c, m);
      }
    }
  }
  function sy(t, e) {
    Ta.X(t, e);
    var l = Du;
    if (l && t) {
      var a = Ee(l).hoistableScripts,
        s = Cu(t),
        c = a.get(s);
      c ||
        ((c = l.querySelector(Br(s))),
        c ||
          ((t = y({ src: t, async: !0 }, e)),
          (e = Dn.get(s)) && x0(t, e),
          (c = l.createElement("script")),
          Ht(c),
          ul(c, "link", t),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function cy(t, e) {
    Ta.M(t, e);
    var l = Du;
    if (l && t) {
      var a = Ee(l).hoistableScripts,
        s = Cu(t),
        c = a.get(s);
      c ||
        ((c = l.querySelector(Br(s))),
        c ||
          ((t = y({ src: t, async: !0, type: "module" }, e)),
          (e = Dn.get(s)) && x0(t, e),
          (c = l.createElement("script")),
          Ht(c),
          ul(c, "link", t),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function bp(t, e, l, a) {
    var s = (s = ft.current) ? Ec(s) : null;
    if (!s) throw Error(i(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Nu(l.href)),
            (l = Ee(s).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Nu(l.href);
          var c = Ee(s).hoistableStyles,
            m = c.get(t);
          if (
            (m ||
              ((s = s.ownerDocument || s),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, m),
              (c = s.querySelector(Lr(t))) &&
                !c._p &&
                ((m.instance = c), (m.state.loading = 5)),
              Dn.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Dn.set(t, l),
                c || fy(s, t, l, m.state))),
            e && a === null)
          )
            throw Error(i(528, ""));
          return m;
        }
        if (e && a !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Cu(l)),
              (l = Ee(s).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, t));
    }
  }
  function Nu(t) {
    return 'href="' + Tn(t) + '"';
  }
  function Lr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Sp(t) {
    return y({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function fy(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ul(e, "link", l),
        Ht(e),
        t.head.appendChild(e));
  }
  function Cu(t) {
    return '[src="' + Tn(t) + '"]';
  }
  function Br(t) {
    return "script[async]" + t;
  }
  function Tp(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Tn(l.href) + '"]');
          if (a) return (e.instance = a), Ht(a), a;
          var s = y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Ht(a),
            ul(a, "style", s),
            xc(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          s = Nu(l.href);
          var c = t.querySelector(Lr(s));
          if (c) return (e.state.loading |= 4), (e.instance = c), Ht(c), c;
          (a = Sp(l)),
            (s = Dn.get(s)) && E0(a, s),
            (c = (t.ownerDocument || t).createElement("link")),
            Ht(c);
          var m = c;
          return (
            (m._p = new Promise(function (v, A) {
              (m.onload = v), (m.onerror = A);
            })),
            ul(c, "link", a),
            (e.state.loading |= 4),
            xc(c, l.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = Cu(l.src)),
            (s = t.querySelector(Br(c)))
              ? ((e.instance = s), Ht(s), s)
              : ((a = l),
                (s = Dn.get(c)) && ((a = y({}, l)), x0(a, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Ht(s),
                ul(s, "link", a),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), xc(a, l.precedence, t));
    return e.instance;
  }
  function xc(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = a.length ? a[a.length - 1] : null,
        c = s,
        m = 0;
      m < a.length;
      m++
    ) {
      var v = a[m];
      if (v.dataset.precedence === e) c = v;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function E0(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function x0(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Ac = null;
  function Ep(t, e, l) {
    if (Ac === null) {
      var a = new Map(),
        s = (Ac = new Map());
      s.set(l, a);
    } else (s = Ac), (a = s.get(l)), a || ((a = new Map()), s.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), s = 0;
      s < l.length;
      s++
    ) {
      var c = l[s];
      if (
        !(
          c[Se] ||
          c[Ot] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = c.getAttribute(e) || "";
        m = t + m;
        var v = a.get(m);
        v ? v.push(c) : a.set(m, [c]);
      }
    }
    return a;
  }
  function xp(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function oy(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ap(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function hy(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var s = Nu(a.href),
          c = e.querySelector(Lr(s));
        if (c) {
          (e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Mc.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = c),
            Ht(c);
          return;
        }
        (c = e.ownerDocument || e),
          (a = Sp(a)),
          (s = Dn.get(s)) && E0(a, s),
          (c = c.createElement("link")),
          Ht(c);
        var m = c;
        (m._p = new Promise(function (v, A) {
          (m.onload = v), (m.onerror = A);
        })),
          ul(c, "link", a),
          (l.instance = c);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = Mc.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l));
    }
  }
  var A0 = 0;
  function dy(t, e) {
    return (
      t.stylesheets && t.count === 0 && zc(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && zc(t, t.stylesheets), t.unsuspend)) {
                var c = t.unsuspend;
                (t.unsuspend = null), c();
              }
            }, 6e4 + e);
            0 < t.imgBytes && A0 === 0 && (A0 = 62500 * Kv());
            var s = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && zc(t, t.stylesheets), t.unsuspend))
              ) {
                var c = t.unsuspend;
                (t.unsuspend = null), c();
              }
            }, (t.imgBytes > A0 ? 50 : 800) + e);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Mc() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) zc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Oc = null;
  function zc(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Oc = new Map()),
        e.forEach(my, t),
        (Oc = null),
        Mc.call(t));
  }
  function my(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Oc.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Oc.set(t, l);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var m = s[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (l.set(m.dataset.precedence, m), (a = m));
        }
        a && l.set(null, a);
      }
      (s = e.instance),
        (m = s.getAttribute("data-precedence")),
        (c = l.get(m) || a),
        c === a && l.set(null, s),
        l.set(m, s),
        this.count++,
        (a = Mc.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Yr = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0,
  };
  function py(t, e, l, a, s, c, m, v, A) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = bt(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = bt(0)),
      (this.hiddenUpdates = bt(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = A),
      (this.incompleteTransitions = new Map());
  }
  function Mp(t, e, l, a, s, c, m, v, A, j, J, $) {
    return (
      (t = new py(t, e, l, m, A, j, J, $, v)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = $l(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = no()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: a, isDehydrated: l, cache: e }),
      ro(c),
      t
    );
  }
  function Op(t) {
    return t ? ((t = cu), t) : cu;
  }
  function zp(t, e, l, a, s, c) {
    (s = Op(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = Va(e)),
      (a.payload = { element: l }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (l = Za(t, a, e)),
      l !== null && (Yl(l, t, e), _r(l, t, e));
  }
  function wp(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function M0(t, e) {
    wp(t, e), (t = t.alternate) && wp(t, e);
  }
  function Dp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ti(t, 67108864);
      e !== null && Yl(e, t, 67108864), M0(t, 67108864);
    }
  }
  function Np(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ln();
      e = yt(e);
      var l = Ti(t, e);
      l !== null && Yl(l, t, e), M0(t, e);
    }
  }
  var wc = !0;
  function gy(t, e, l, a) {
    var s = H.T;
    H.T = null;
    var c = K.p;
    try {
      (K.p = 2), O0(t, e, l, a);
    } finally {
      (K.p = c), (H.T = s);
    }
  }
  function _y(t, e, l, a) {
    var s = H.T;
    H.T = null;
    var c = K.p;
    try {
      (K.p = 8), O0(t, e, l, a);
    } finally {
      (K.p = c), (H.T = s);
    }
  }
  function O0(t, e, l, a) {
    if (wc) {
      var s = z0(a);
      if (s === null) d0(t, e, a, Dc, l), Rp(t, a);
      else if (yy(s, t, e, l, a)) a.stopPropagation();
      else if ((Rp(t, a), e & 4 && -1 < vy.indexOf(t))) {
        for (; s !== null; ) {
          var c = Rl(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var m = Fe(c.pendingLanes);
                  if (m !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << (31 - Ye(m));
                      (v.entanglements[1] |= A), (m &= ~A);
                    }
                    Wn(c), (Ft & 6) === 0 && ((hc = Zt() + 500), Rr(0));
                  }
                }
                break;
              case 31:
              case 13:
                (v = Ti(c, 2)), v !== null && Yl(v, c, 2), mc(), M0(c, 2);
            }
          if (((c = z0(a)), c === null && d0(t, e, a, Dc, l), c === s)) break;
          s = c;
        }
        s !== null && a.stopPropagation();
      } else d0(t, e, a, null, l);
    }
  }
  function z0(t) {
    return (t = wf(t)), w0(t);
  }
  var Dc = null;
  function w0(t) {
    if (((Dc = null), (t = Te(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = o(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Dc = t), null;
  }
  function Cp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (te()) {
          case Oe:
            return 2;
          case ee:
            return 8;
          case ol:
          case Cl:
            return 32;
          case pn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var D0 = !1,
    Pa = null,
    Ia = null,
    ti = null,
    Vr = new Map(),
    Zr = new Map(),
    ei = [],
    vy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Rp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Pa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ia = null;
        break;
      case "mouseover":
      case "mouseout":
        ti = null;
        break;
      case "pointerover":
      case "pointerout":
        Vr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zr.delete(e.pointerId);
    }
  }
  function qr(t, e, l, a, s, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [s],
        }),
        e !== null && ((e = Rl(e)), e !== null && Dp(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function yy(t, e, l, a, s) {
    switch (e) {
      case "focusin":
        return (Pa = qr(Pa, t, e, l, a, s)), !0;
      case "dragenter":
        return (Ia = qr(Ia, t, e, l, a, s)), !0;
      case "mouseover":
        return (ti = qr(ti, t, e, l, a, s)), !0;
      case "pointerover":
        var c = s.pointerId;
        return Vr.set(c, qr(Vr.get(c) || null, t, e, l, a, s)), !0;
      case "gotpointercapture":
        return (
          (c = s.pointerId), Zr.set(c, qr(Zr.get(c) || null, t, e, l, a, s)), !0
        );
    }
    return !1;
  }
  function Hp(t) {
    var e = Te(t.target);
    if (e !== null) {
      var l = f(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = o(l)), e !== null)) {
            (t.blockedOn = e),
              pe(t.priority, function () {
                Np(l);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = h(l)), e !== null)) {
            (t.blockedOn = e),
              pe(t.priority, function () {
                Np(l);
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Nc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = z0(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (zf = a), l.target.dispatchEvent(a), (zf = null);
      } else return (e = Rl(l)), e !== null && Dp(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function Up(t, e, l) {
    Nc(t) && l.delete(e);
  }
  function by() {
    (D0 = !1),
      Pa !== null && Nc(Pa) && (Pa = null),
      Ia !== null && Nc(Ia) && (Ia = null),
      ti !== null && Nc(ti) && (ti = null),
      Vr.forEach(Up),
      Zr.forEach(Up);
  }
  function Cc(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      D0 ||
        ((D0 = !0),
        d.unstable_scheduleCallback(d.unstable_NormalPriority, by)));
  }
  var Rc = null;
  function jp(t) {
    Rc !== t &&
      ((Rc = t),
      d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
        Rc === t && (Rc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            s = t[e + 2];
          if (typeof a != "function") {
            if (w0(a || l) === null) continue;
            break;
          }
          var c = Rl(l);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            zo(c, { pending: !0, data: s, method: l.method, action: a }, a, s));
        }
      }));
  }
  function Ru(t) {
    function e(A) {
      return Cc(A, t);
    }
    Pa !== null && Cc(Pa, t),
      Ia !== null && Cc(Ia, t),
      ti !== null && Cc(ti, t),
      Vr.forEach(e),
      Zr.forEach(e);
    for (var l = 0; l < ei.length; l++) {
      var a = ei[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ei.length && ((l = ei[0]), l.blockedOn === null); )
      Hp(l), l.blockedOn === null && ei.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var s = l[a],
          c = l[a + 1],
          m = s[Dt] || null;
        if (typeof c == "function") m || jp(l);
        else if (m) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (m = c[Dt] || null))) v = m.formAction;
            else if (w0(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? (l[a + 1] = v) : (l.splice(a, 3), (a -= 3)),
            jp(l);
        }
      }
  }
  function Lp() {
    function t(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (s = m);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      s !== null && (s(), (s = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null));
        }
      );
    }
  }
  function N0(t) {
    this._internalRoot = t;
  }
  (Hc.prototype.render = N0.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(i(409));
      var l = e.current,
        a = ln();
      zp(l, a, t, e, null, null);
    }),
    (Hc.prototype.unmount = N0.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          zp(t.current, 2, null, t, null, null), mc(), (e[Gt] = null);
        }
      });
  function Hc(t) {
    this._internalRoot = t;
  }
  Hc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Rt();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < ei.length && e !== 0 && e < ei[l].priority; l++);
      ei.splice(l, 0, t), l === 0 && Hp(t);
    }
  };
  var Bp = n.version;
  if (Bp !== "19.2.0") throw Error(i(527, Bp, "19.2.0"));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(i(188))
        : ((t = Object.keys(t).join(",")), Error(i(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? _(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Sy = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uc.isDisabled && Uc.supportsFiber)
      try {
        (qn = Uc.inject(Sy)), (be = Uc);
      } catch {}
  }
  return (
    (Gr.createRoot = function (t, e) {
      if (!r(t)) throw Error(i(299));
      var l = !1,
        a = "",
        s = Q1,
        c = k1,
        m = K1;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError)),
        (e = Mp(t, 1, !1, null, null, l, a, null, s, c, m, Lp)),
        (t[Gt] = e.current),
        h0(t),
        new N0(e)
      );
    }),
    (Gr.hydrateRoot = function (t, e, l) {
      if (!r(t)) throw Error(i(299));
      var a = !1,
        s = "",
        c = Q1,
        m = k1,
        v = K1,
        A = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (s = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
          l.onCaughtError !== void 0 && (m = l.onCaughtError),
          l.onRecoverableError !== void 0 && (v = l.onRecoverableError),
          l.formState !== void 0 && (A = l.formState)),
        (e = Mp(t, 1, !0, e, l ?? null, a, s, A, c, m, v, Lp)),
        (e.context = Op(null)),
        (l = e.current),
        (a = ln()),
        (a = yt(a)),
        (s = Va(a)),
        (s.callback = null),
        Za(l, s, a),
        (l = a),
        (e.current.lanes = l),
        mt(e, l),
        Wn(e),
        (t[Gt] = e.current),
        h0(t),
        new Hc(e)
      );
    }),
    (Gr.version = "19.2.0"),
    Gr
  );
}
var Jp;
function Ry() {
  if (Jp) return H0.exports;
  Jp = 1;
  function d() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (n) {
        console.error(n);
      }
  }
  return d(), (H0.exports = Cy()), H0.exports;
}
var Fp = Ry();
const Hy = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
          opacity: "0.2",
        }),
        w.createElement("path", {
          d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
        })
      ),
    ],
  ]),
  Uy = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M180,64H40A12,12,0,0,0,28,76V216a12,12,0,0,0,12,12H180a12,12,0,0,0,12-12V76A12,12,0,0,0,180,64ZM168,204H52V88H168ZM228,40V180a12,12,0,0,1-24,0V52H76a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", { d: "M184,72V216H40V72Z", opacity: "0.2" }),
        w.createElement("path", {
          d: "M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M192,72V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184A8,8,0,0,1,192,72Zm24-40H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M184,66H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H184a6,6,0,0,0,6-6V72A6,6,0,0,0,184,66Zm-6,144H46V78H178ZM222,40V184a6,6,0,0,1-12,0V46H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M184,68H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4V72A4,4,0,0,0,184,68Zm-4,144H44V76H180ZM220,40V184a4,4,0,0,1-8,0V44H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Z",
        })
      ),
    ],
  ]),
  jy = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", { d: "M216,64V192H40V64Z", opacity: "0.2" }),
        w.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z",
        })
      ),
    ],
  ]),
  Ly = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z",
          opacity: "0.2",
        }),
        w.createElement("path", {
          d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z",
        })
      ),
    ],
  ]),
  By = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M234.49,111.07,90.41,22.94A20,20,0,0,0,60,39.87V216.13a20,20,0,0,0,30.41,16.93l144.08-88.13a19.82,19.82,0,0,0,0-33.86ZM84,208.85V47.15L216.16,128Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M228.23,134.69,84.15,222.81A8,8,0,0,1,72,216.12V39.88a8,8,0,0,1,12.15-6.69l144.08,88.12A7.82,7.82,0,0,1,228.23,134.69Z",
          opacity: "0.2",
        }),
        w.createElement("path", {
          d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M231.36,116.19,87.28,28.06a14,14,0,0,0-14.18-.27A13.69,13.69,0,0,0,66,39.87V216.13a13.69,13.69,0,0,0,7.1,12.08,14,14,0,0,0,14.18-.27l144.08-88.13a13.82,13.82,0,0,0,0-23.62Zm-6.26,13.38L81,217.7a2,2,0,0,1-2.06,0,1.78,1.78,0,0,1-1-1.61V39.87a1.78,1.78,0,0,1,1-1.61A2.06,2.06,0,0,1,80,38a2,2,0,0,1,1,.31L225.1,126.43a1.82,1.82,0,0,1,0,3.14Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M230.32,117.9,86.24,29.79a11.91,11.91,0,0,0-12.17-.23A11.71,11.71,0,0,0,68,39.89V216.11a11.71,11.71,0,0,0,6.07,10.33,11.91,11.91,0,0,0,12.17-.23L230.32,138.1a11.82,11.82,0,0,0,0-20.2Zm-4.18,13.37L82.06,219.39a4,4,0,0,1-4.07.07,3.77,3.77,0,0,1-2-3.35V39.89a3.77,3.77,0,0,1,2-3.35,4,4,0,0,1,4.07.07l144.08,88.12a3.8,3.8,0,0,1,0,6.54Z",
        })
      ),
    ],
  ]),
  Yy = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
          opacity: "0.2",
        }),
        w.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z",
        })
      ),
    ],
  ]),
  Vy = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
          opacity: "0.2",
        }),
        w.createElement("path", {
          d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z",
        })
      ),
    ],
  ]),
  Zy = new Map([
    [
      "bold",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z",
        })
      ),
    ],
    [
      "duotone",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M208,216H160L48,40H96Z",
          opacity: "0.2",
        }),
        w.createElement("path", {
          d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
        })
      ),
    ],
    [
      "fill",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z",
        })
      ),
    ],
    [
      "light",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z",
        })
      ),
    ],
    [
      "regular",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
        })
      ),
    ],
    [
      "thin",
      w.createElement(
        w.Fragment,
        null,
        w.createElement("path", {
          d: "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z",
        })
      ),
    ],
  ]),
  qy = w.createContext({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: !1,
  }),
  Na = w.forwardRef((d, n) => {
    const {
        alt: u,
        color: i,
        size: r,
        weight: f,
        mirrored: o,
        children: h,
        weights: g,
        ...p
      } = d,
      {
        color: _ = "currentColor",
        size: y,
        weight: S = "regular",
        mirrored: b = !1,
        ...z
      } = w.useContext(qy);
    return w.createElement(
      "svg",
      {
        ref: n,
        xmlns: "http://www.w3.org/2000/svg",
        width: r ?? y,
        height: r ?? y,
        fill: i ?? _,
        viewBox: "0 0 256 256",
        transform: o || b ? "scale(-1, 1)" : void 0,
        ...z,
        ...p,
      },
      !!u && w.createElement("title", null, u),
      h,
      g.get(f ?? S)
    );
  });
Na.displayName = "IconBase";
const Vg = w.forwardRef((d, n) =>
  w.createElement(Na, { ref: n, ...d, weights: Hy })
);
Vg.displayName = "CheckIcon";
const th = Vg,
  Zg = w.forwardRef((d, n) =>
    w.createElement(Na, { ref: n, ...d, weights: Uy })
  );
Zg.displayName = "CopySimpleIcon";
const Xy = Zg,
  qg = w.forwardRef((d, n) =>
    w.createElement(Na, { ref: n, ...d, weights: jy })
  );
qg.displayName = "ListIcon";
const Gy = qg,
  Xg = w.forwardRef((d, n) =>
    w.createElement(Na, { ref: n, ...d, weights: Ly })
  );
Xg.displayName = "PauseIcon";
const Qy = Xg,
  Gg = w.forwardRef((d, n) =>
    w.createElement(Na, { ref: n, ...d, weights: By })
  );
Gg.displayName = "PlayIcon";
const ky = Gg,
  Qg = w.forwardRef((d, n) =>
    w.createElement(Na, { ref: n, ...d, weights: Yy })
  );
Qg.displayName = "PlusIcon";
const Wp = Qg,
  kg = w.forwardRef((d, n) =>
    w.createElement(Na, { ref: n, ...d, weights: Vy })
  );
kg.displayName = "XIcon";
const $p = kg,
  Kg = w.forwardRef((d, n) =>
    w.createElement(Na, { ref: n, ...d, weights: Zy })
  );
Kg.displayName = "XLogoIcon";
const B0 = Kg;
function xa(d) {
  if (d === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return d;
}
function Jg(d, n) {
  (d.prototype = Object.create(n.prototype)),
    (d.prototype.constructor = d),
    (d.__proto__ = n);
}
/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var hn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  ds = { duration: 0.5, overwrite: !1, delay: 0 },
  zh,
  sl,
  _e,
  Hn = 1e8,
  fe = 1 / Hn,
  eh = Math.PI * 2,
  Ky = eh / 4,
  Jy = 0,
  Fg = Math.sqrt,
  Fy = Math.cos,
  Wy = Math.sin,
  ll = function (n) {
    return typeof n == "string";
  },
  Ce = function (n) {
    return typeof n == "function";
  },
  wa = function (n) {
    return typeof n == "number";
  },
  wh = function (n) {
    return typeof n > "u";
  },
  na = function (n) {
    return typeof n == "object";
  },
  Xl = function (n) {
    return n !== !1;
  },
  Dh = function () {
    return typeof window < "u";
  },
  jc = function (n) {
    return Ce(n) || ll(n);
  },
  Wg =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  bl = Array.isArray,
  $y = /random\([^)]+\)/g,
  Py = /,\s*/g,
  Pp = /(?:-?\.?\d|\.)+/gi,
  $g = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Vu = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Y0 = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Pg = /[+-]=-?[.\d]+/,
  Iy = /[^,'"\[\]\s]+/gi,
  t6 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ae,
  $n,
  lh,
  Nh,
  dn = {},
  sf = {},
  Ig,
  t_ = function (n) {
    return (sf = Wu(n, dn)) && Kl;
  },
  Ch = function (n, u) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      u,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ms = function (n, u) {
    return !u && console.warn(n);
  },
  e_ = function (n, u) {
    return (n && (dn[n] = u) && sf && (sf[n] = u)) || dn;
  },
  ps = function () {
    return 0;
  },
  e6 = { suppressEvents: !0, isStart: !0, kill: !1 },
  $c = { suppressEvents: !0, kill: !1 },
  l6 = { suppressEvents: !0 },
  Rh = {},
  ci = [],
  nh = {},
  l_,
  un = {},
  V0 = {},
  Ip = 30,
  Pc = [],
  Hh = "",
  Uh = function (n) {
    var u = n[0],
      i,
      r;
    if ((na(u) || Ce(u) || (n = [n]), !(i = (u._gsap || {}).harness))) {
      for (r = Pc.length; r-- && !Pc[r].targetTest(u); );
      i = Pc[r];
    }
    for (r = n.length; r--; )
      (n[r] && (n[r]._gsap || (n[r]._gsap = new x_(n[r], i)))) ||
        n.splice(r, 1);
    return n;
  },
  Xi = function (n) {
    return n._gsap || Uh(Un(n))[0]._gsap;
  },
  n_ = function (n, u, i) {
    return (i = n[u]) && Ce(i)
      ? n[u]()
      : (wh(i) && n.getAttribute && n.getAttribute(u)) || i;
  },
  Gl = function (n, u) {
    return (n = n.split(",")).forEach(u) || n;
  },
  Le = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  xe = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  Xu = function (n, u) {
    var i = u.charAt(0),
      r = parseFloat(u.substr(2));
    return (
      (n = parseFloat(n)),
      i === "+" ? n + r : i === "-" ? n - r : i === "*" ? n * r : n / r
    );
  },
  n6 = function (n, u) {
    for (var i = u.length, r = 0; n.indexOf(u[r]) < 0 && ++r < i; );
    return r < i;
  },
  cf = function () {
    var n = ci.length,
      u = ci.slice(0),
      i,
      r;
    for (nh = {}, ci.length = 0, i = 0; i < n; i++)
      (r = u[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  jh = function (n) {
    return !!(n._initted || n._startAt || n.add);
  },
  a_ = function (n, u, i, r) {
    ci.length && !sl && cf(),
      n.render(u, i, !!(sl && u < 0 && jh(n))),
      ci.length && !sl && cf();
  },
  i_ = function (n) {
    var u = parseFloat(n);
    return (u || u === 0) && (n + "").match(Iy).length < 2
      ? u
      : ll(n)
      ? n.trim()
      : n;
  },
  u_ = function (n) {
    return n;
  },
  mn = function (n, u) {
    for (var i in u) i in n || (n[i] = u[i]);
    return n;
  },
  a6 = function (n) {
    return function (u, i) {
      for (var r in i)
        r in u || (r === "duration" && n) || r === "ease" || (u[r] = i[r]);
    };
  },
  Wu = function (n, u) {
    for (var i in u) n[i] = u[i];
    return n;
  },
  tg = function d(n, u) {
    for (var i in u)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (n[i] = na(u[i]) ? d(n[i] || (n[i] = {}), u[i]) : u[i]);
    return n;
  },
  ff = function (n, u) {
    var i = {},
      r;
    for (r in n) r in u || (i[r] = n[r]);
    return i;
  },
  es = function (n) {
    var u = n.parent || Ae,
      i = n.keyframes ? a6(bl(n.keyframes)) : mn;
    if (Xl(n.inherit))
      for (; u; ) i(n, u.vars.defaults), (u = u.parent || u._dp);
    return n;
  },
  i6 = function (n, u) {
    for (var i = n.length, r = i === u.length; r && i-- && n[i] === u[i]; );
    return i < 0;
  },
  r_ = function (n, u, i, r, f) {
    var o = n[r],
      h;
    if (f) for (h = u[f]; o && o[f] > h; ) o = o._prev;
    return (
      o ? ((u._next = o._next), (o._next = u)) : ((u._next = n[i]), (n[i] = u)),
      u._next ? (u._next._prev = u) : (n[r] = u),
      (u._prev = o),
      (u.parent = u._dp = n),
      u
    );
  },
  bf = function (n, u, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var f = u._prev,
      o = u._next;
    f ? (f._next = o) : n[i] === u && (n[i] = o),
      o ? (o._prev = f) : n[r] === u && (n[r] = f),
      (u._next = u._prev = u.parent = null);
  },
  hi = function (n, u) {
    n.parent &&
      (!u || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0);
  },
  Gi = function (n, u) {
    if (n && (!u || u._end > n._dur || u._start < 0))
      for (var i = n; i; ) (i._dirty = 1), (i = i.parent);
    return n;
  },
  u6 = function (n) {
    for (var u = n.parent; u && u.parent; )
      (u._dirty = 1), u.totalDuration(), (u = u.parent);
    return n;
  },
  ah = function (n, u, i, r) {
    return (
      n._startAt &&
      (sl
        ? n._startAt.revert($c)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(u, !0, r))
    );
  },
  r6 = function d(n) {
    return !n || (n._ts && d(n.parent));
  },
  eg = function (n) {
    return n._repeat ? $u(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  $u = function (n, u) {
    var i = Math.floor((n = xe(n / u)));
    return n && i === n ? i - 1 : i;
  },
  of = function (n, u) {
    return (
      (n - u._start) * u._ts +
      (u._ts >= 0 ? 0 : u._dirty ? u.totalDuration() : u._tDur)
    );
  },
  Sf = function (n) {
    return (n._end = xe(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || fe) || 0)
    ));
  },
  Tf = function (n, u) {
    var i = n._dp;
    return (
      i &&
        i.smoothChildTiming &&
        n._ts &&
        ((n._start = xe(
          i._time -
            (n._ts > 0
              ? u / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - u) / -n._ts)
        )),
        Sf(n),
        i._dirty || Gi(i, n)),
      n
    );
  },
  s_ = function (n, u) {
    var i;
    if (
      ((u._time ||
        (!u._dur && u._initted) ||
        (u._start < n._time && (u._dur || !u.add))) &&
        ((i = of(n.rawTime(), u)),
        (!u._dur || Es(0, u.totalDuration(), i) - u._tTime > fe) &&
          u.render(i, !0)),
      Gi(n, u)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (i = n; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      n._zTime = -fe;
    }
  },
  In = function (n, u, i, r) {
    return (
      u.parent && hi(u),
      (u._start = xe(
        (wa(i) ? i : i || n !== Ae ? Nn(n, i, u) : n._time) + u._delay
      )),
      (u._end = xe(
        u._start + (u.totalDuration() / Math.abs(u.timeScale()) || 0)
      )),
      r_(n, u, "_first", "_last", n._sort ? "_start" : 0),
      ih(u) || (n._recent = u),
      r || s_(n, u),
      n._ts < 0 && Tf(n, n._tTime),
      n
    );
  },
  c_ = function (n, u) {
    return (
      (dn.ScrollTrigger || Ch("scrollTrigger", u)) &&
      dn.ScrollTrigger.create(u, n)
    );
  },
  f_ = function (n, u, i, r, f) {
    if ((Bh(n, u, f), !n._initted)) return 1;
    if (
      !i &&
      n._pt &&
      !sl &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      l_ !== sn.frame
    )
      return ci.push(n), (n._lazy = [f, r]), 1;
  },
  s6 = function d(n) {
    var u = n.parent;
    return u && u._ts && u._initted && !u._lock && (u.rawTime() < 0 || d(u));
  },
  ih = function (n) {
    var u = n.data;
    return u === "isFromStart" || u === "isStart";
  },
  c6 = function (n, u, i, r) {
    var f = n.ratio,
      o =
        u < 0 ||
        (!u &&
          ((!n._start && s6(n) && !(!n._initted && ih(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !ih(n))))
          ? 0
          : 1,
      h = n._rDelay,
      g = 0,
      p,
      _,
      y;
    if (
      (h &&
        n._repeat &&
        ((g = Es(0, n._tDur, u)),
        (_ = $u(g, h)),
        n._yoyo && _ & 1 && (o = 1 - o),
        _ !== $u(n._tTime, h) &&
          ((f = 1 - o), n.vars.repeatRefresh && n._initted && n.invalidate())),
      o !== f || sl || r || n._zTime === fe || (!u && n._zTime))
    ) {
      if (!n._initted && f_(n, u, r, i, g)) return;
      for (
        y = n._zTime,
          n._zTime = u || (i ? fe : 0),
          i || (i = u && !y),
          n.ratio = o,
          n._from && (o = 1 - o),
          n._time = 0,
          n._tTime = g,
          p = n._pt;
        p;

      )
        p.r(o, p.d), (p = p._next);
      u < 0 && ah(n, u, i, !0),
        n._onUpdate && !i && fn(n, "onUpdate"),
        g && n._repeat && !i && n.parent && fn(n, "onRepeat"),
        (u >= n._tDur || u < 0) &&
          n.ratio === o &&
          (o && hi(n, 1),
          !i &&
            !sl &&
            (fn(n, o ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom()));
    } else n._zTime || (n._zTime = u);
  },
  f6 = function (n, u, i) {
    var r;
    if (i > u)
      for (r = n._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > u) return r;
        r = r._next;
      }
    else
      for (r = n._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < u) return r;
        r = r._prev;
      }
  },
  Pu = function (n, u, i, r) {
    var f = n._repeat,
      o = xe(u) || 0,
      h = n._tTime / n._tDur;
    return (
      h && !r && (n._time *= o / n._dur),
      (n._dur = o),
      (n._tDur = f ? (f < 0 ? 1e10 : xe(o * (f + 1) + n._rDelay * f)) : o),
      h > 0 && !r && Tf(n, (n._tTime = n._tDur * h)),
      n.parent && Sf(n),
      i || Gi(n.parent, n),
      n
    );
  },
  lg = function (n) {
    return n instanceof ql ? Gi(n) : Pu(n, n._dur);
  },
  o6 = { _start: 0, endTime: ps, totalDuration: ps },
  Nn = function d(n, u, i) {
    var r = n.labels,
      f = n._recent || o6,
      o = n.duration() >= Hn ? f.endTime(!1) : n._dur,
      h,
      g,
      p;
    return ll(u) && (isNaN(u) || u in r)
      ? ((g = u.charAt(0)),
        (p = u.substr(-1) === "%"),
        (h = u.indexOf("=")),
        g === "<" || g === ">"
          ? (h >= 0 && (u = u.replace(/=/, "")),
            (g === "<" ? f._start : f.endTime(f._repeat >= 0)) +
              (parseFloat(u.substr(1)) || 0) *
                (p ? (h < 0 ? f : i).totalDuration() / 100 : 1))
          : h < 0
          ? (u in r || (r[u] = o), r[u])
          : ((g = parseFloat(u.charAt(h - 1) + u.substr(h + 1))),
            p && i && (g = (g / 100) * (bl(i) ? i[0] : i).totalDuration()),
            h > 1 ? d(n, u.substr(0, h - 1), i) + g : o + g))
      : u == null
      ? o
      : +u;
  },
  ls = function (n, u, i) {
    var r = wa(u[1]),
      f = (r ? 2 : 1) + (n < 2 ? 0 : 1),
      o = u[f],
      h,
      g;
    if ((r && (o.duration = u[1]), (o.parent = i), n)) {
      for (h = o, g = i; g && !("immediateRender" in h); )
        (h = g.vars.defaults || {}), (g = Xl(g.vars.inherit) && g.parent);
      (o.immediateRender = Xl(h.immediateRender)),
        n < 2 ? (o.runBackwards = 1) : (o.startAt = u[f - 1]);
    }
    return new ke(u[0], o, u[f + 1]);
  },
  gi = function (n, u) {
    return n || n === 0 ? u(n) : u;
  },
  Es = function (n, u, i) {
    return i < n ? n : i > u ? u : i;
  },
  vl = function (n, u) {
    return !ll(n) || !(u = t6.exec(n)) ? "" : u[1];
  },
  h6 = function (n, u, i) {
    return gi(i, function (r) {
      return Es(n, u, r);
    });
  },
  uh = [].slice,
  o_ = function (n, u) {
    return (
      n &&
      na(n) &&
      "length" in n &&
      ((!u && !n.length) || (n.length - 1 in n && na(n[0]))) &&
      !n.nodeType &&
      n !== $n
    );
  },
  d6 = function (n, u, i) {
    return (
      i === void 0 && (i = []),
      n.forEach(function (r) {
        var f;
        return (ll(r) && !u) || o_(r, 1)
          ? (f = i).push.apply(f, Un(r))
          : i.push(r);
      }) || i
    );
  },
  Un = function (n, u, i) {
    return _e && !u && _e.selector
      ? _e.selector(n)
      : ll(n) && !i && (lh || !Iu())
      ? uh.call((u || Nh).querySelectorAll(n), 0)
      : bl(n)
      ? d6(n, i)
      : o_(n)
      ? uh.call(n, 0)
      : n
      ? [n]
      : [];
  },
  rh = function (n) {
    return (
      (n = Un(n)[0] || ms("Invalid scope") || {}),
      function (u) {
        var i = n.current || n.nativeElement || n;
        return Un(
          u,
          i.querySelectorAll
            ? i
            : i === n
            ? ms("Invalid scope") || Nh.createElement("div")
            : n
        );
      }
    );
  },
  h_ = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  d_ = function (n) {
    if (Ce(n)) return n;
    var u = na(n) ? n : { each: n },
      i = Qi(u.ease),
      r = u.from || 0,
      f = parseFloat(u.base) || 0,
      o = {},
      h = r > 0 && r < 1,
      g = isNaN(r) || h,
      p = u.axis,
      _ = r,
      y = r;
    return (
      ll(r)
        ? (_ = y = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !h && g && ((_ = r[0]), (y = r[1])),
      function (S, b, z) {
        var T = (z || u).length,
          C = o[T],
          V,
          O,
          Q,
          B,
          X,
          P,
          x,
          Y,
          k;
        if (!C) {
          if (((k = u.grid === "auto" ? 0 : (u.grid || [1, Hn])[1]), !k)) {
            for (
              x = -Hn;
              x < (x = z[k++].getBoundingClientRect().left) && k < T;

            );
            k < T && k--;
          }
          for (
            C = o[T] = [],
              V = g ? Math.min(k, T) * _ - 0.5 : r % k,
              O = k === Hn ? 0 : g ? (T * y) / k - 0.5 : (r / k) | 0,
              x = 0,
              Y = Hn,
              P = 0;
            P < T;
            P++
          )
            (Q = (P % k) - V),
              (B = O - ((P / k) | 0)),
              (C[P] = X = p ? Math.abs(p === "y" ? B : Q) : Fg(Q * Q + B * B)),
              X > x && (x = X),
              X < Y && (Y = X);
          r === "random" && h_(C),
            (C.max = x - Y),
            (C.min = Y),
            (C.v = T =
              (parseFloat(u.amount) ||
                parseFloat(u.each) *
                  (k > T
                    ? T - 1
                    : p
                    ? p === "y"
                      ? T / k
                      : k
                    : Math.max(k, T / k)) ||
                0) * (r === "edges" ? -1 : 1)),
            (C.b = T < 0 ? f - T : f),
            (C.u = vl(u.amount || u.each) || 0),
            (i = i && T < 0 ? M6(i) : i);
        }
        return (
          (T = (C[S] - C.min) / C.max || 0),
          xe(C.b + (i ? i(T) : T) * C.v) + C.u
        );
      }
    );
  },
  sh = function (n) {
    var u = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (i) {
      var r = xe(Math.round(parseFloat(i) / n) * n * u);
      return (r - (r % 1)) / u + (wa(i) ? 0 : vl(i));
    };
  },
  m_ = function (n, u) {
    var i = bl(n),
      r,
      f;
    return (
      !i &&
        na(n) &&
        ((r = i = n.radius || Hn),
        n.values
          ? ((n = Un(n.values)), (f = !wa(n[0])) && (r *= r))
          : (n = sh(n.increment))),
      gi(
        u,
        i
          ? Ce(n)
            ? function (o) {
                return (f = n(o)), Math.abs(f - o) <= r ? f : o;
              }
            : function (o) {
                for (
                  var h = parseFloat(f ? o.x : o),
                    g = parseFloat(f ? o.y : 0),
                    p = Hn,
                    _ = 0,
                    y = n.length,
                    S,
                    b;
                  y--;

                )
                  f
                    ? ((S = n[y].x - h), (b = n[y].y - g), (S = S * S + b * b))
                    : (S = Math.abs(n[y] - h)),
                    S < p && ((p = S), (_ = y));
                return (
                  (_ = !r || p <= r ? n[_] : o),
                  f || _ === o || wa(o) ? _ : _ + vl(o)
                );
              }
          : sh(n)
      )
    );
  },
  p_ = function (n, u, i, r) {
    return gi(bl(n) ? !u : i === !0 ? !!(i = 0) : !r, function () {
      return bl(n)
        ? n[~~(Math.random() * n.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - i / 2 + Math.random() * (u - n + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  m6 = function () {
    for (var n = arguments.length, u = new Array(n), i = 0; i < n; i++)
      u[i] = arguments[i];
    return function (r) {
      return u.reduce(function (f, o) {
        return o(f);
      }, r);
    };
  },
  p6 = function (n, u) {
    return function (i) {
      return n(parseFloat(i)) + (u || vl(i));
    };
  },
  g6 = function (n, u, i) {
    return __(n, u, 0, 1, i);
  },
  g_ = function (n, u, i) {
    return gi(i, function (r) {
      return n[~~u(r)];
    });
  },
  _6 = function d(n, u, i) {
    var r = u - n;
    return bl(n)
      ? g_(n, d(0, n.length), u)
      : gi(i, function (f) {
          return ((r + ((f - n) % r)) % r) + n;
        });
  },
  v6 = function d(n, u, i) {
    var r = u - n,
      f = r * 2;
    return bl(n)
      ? g_(n, d(0, n.length - 1), u)
      : gi(i, function (o) {
          return (o = (f + ((o - n) % f)) % f || 0), n + (o > r ? f - o : o);
        });
  },
  gs = function (n) {
    return n.replace($y, function (u) {
      var i = u.indexOf("[") + 1,
        r = u.substring(i || 7, i ? u.indexOf("]") : u.length - 1).split(Py);
      return p_(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5);
    });
  },
  __ = function (n, u, i, r, f) {
    var o = u - n,
      h = r - i;
    return gi(f, function (g) {
      return i + (((g - n) / o) * h || 0);
    });
  },
  y6 = function d(n, u, i, r) {
    var f = isNaN(n + u)
      ? 0
      : function (b) {
          return (1 - b) * n + b * u;
        };
    if (!f) {
      var o = ll(n),
        h = {},
        g,
        p,
        _,
        y,
        S;
      if ((i === !0 && (r = 1) && (i = null), o))
        (n = { p: n }), (u = { p: u });
      else if (bl(n) && !bl(u)) {
        for (_ = [], y = n.length, S = y - 2, p = 1; p < y; p++)
          _.push(d(n[p - 1], n[p]));
        y--,
          (f = function (z) {
            z *= y;
            var T = Math.min(S, ~~z);
            return _[T](z - T);
          }),
          (i = u);
      } else r || (n = Wu(bl(n) ? [] : {}, n));
      if (!_) {
        for (g in u) Lh.call(h, n, g, "get", u[g]);
        f = function (z) {
          return Zh(z, h) || (o ? n.p : n);
        };
      }
    }
    return gi(i, f);
  },
  ng = function (n, u, i) {
    var r = n.labels,
      f = Hn,
      o,
      h,
      g;
    for (o in r)
      (h = r[o] - u),
        h < 0 == !!i && h && f > (h = Math.abs(h)) && ((g = o), (f = h));
    return g;
  },
  fn = function (n, u, i) {
    var r = n.vars,
      f = r[u],
      o = _e,
      h = n._ctx,
      g,
      p,
      _;
    if (f)
      return (
        (g = r[u + "Params"]),
        (p = r.callbackScope || n),
        i && ci.length && cf(),
        h && (_e = h),
        (_ = g ? f.apply(p, g) : f.call(p)),
        (_e = o),
        _
      );
  },
  Jr = function (n) {
    return (
      hi(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!sl),
      n.progress() < 1 && fn(n, "onInterrupt"),
      n
    );
  },
  Zu,
  v_ = [],
  y_ = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), Dh() || n.headless)) {
        var u = n.name,
          i = Ce(n),
          r =
            u && !i && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          f = {
            init: ps,
            render: Zh,
            add: Lh,
            kill: j6,
            modifier: U6,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Vh,
            aliases: {},
            register: 0,
          };
        if ((Iu(), n !== r)) {
          if (un[u]) return;
          mn(r, mn(ff(n, f), o)),
            Wu(r.prototype, Wu(f, ff(n, o))),
            (un[(r.prop = u)] = r),
            n.targetTest && (Pc.push(r), (Rh[u] = 1)),
            (u =
              (u === "css" ? "CSS" : u.charAt(0).toUpperCase() + u.substr(1)) +
              "Plugin");
        }
        e_(u, r), n.register && n.register(Kl, r, Ql);
      } else v_.push(n);
  },
  ce = 255,
  Fr = {
    aqua: [0, ce, ce],
    lime: [0, ce, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ce],
    navy: [0, 0, 128],
    white: [ce, ce, ce],
    olive: [128, 128, 0],
    yellow: [ce, ce, 0],
    orange: [ce, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ce, 0, 0],
    pink: [ce, 192, 203],
    cyan: [0, ce, ce],
    transparent: [ce, ce, ce, 0],
  },
  Z0 = function (n, u, i) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? u + (i - u) * n * 6
        : n < 0.5
        ? i
        : n * 3 < 2
        ? u + (i - u) * (2 / 3 - n) * 6
        : u) *
        ce +
        0.5) |
        0
    );
  },
  b_ = function (n, u, i) {
    var r = n ? (wa(n) ? [n >> 16, (n >> 8) & ce, n & ce] : 0) : Fr.black,
      f,
      o,
      h,
      g,
      p,
      _,
      y,
      S,
      b,
      z;
    if (!r) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), Fr[n]))
        r = Fr[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((f = n.charAt(1)),
            (o = n.charAt(2)),
            (h = n.charAt(3)),
            (n =
              "#" +
              f +
              f +
              o +
              o +
              h +
              h +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (r = parseInt(n.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & ce, r & ce, parseInt(n.substr(7), 16) / 255]
          );
        (n = parseInt(n.substr(1), 16)), (r = [n >> 16, (n >> 8) & ce, n & ce]);
      } else if (n.substr(0, 3) === "hsl") {
        if (((r = z = n.match(Pp)), !u))
          (g = (+r[0] % 360) / 360),
            (p = +r[1] / 100),
            (_ = +r[2] / 100),
            (o = _ <= 0.5 ? _ * (p + 1) : _ + p - _ * p),
            (f = _ * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Z0(g + 1 / 3, f, o)),
            (r[1] = Z0(g, f, o)),
            (r[2] = Z0(g - 1 / 3, f, o));
        else if (~n.indexOf("="))
          return (r = n.match($g)), i && r.length < 4 && (r[3] = 1), r;
      } else r = n.match(Pp) || Fr.transparent;
      r = r.map(Number);
    }
    return (
      u &&
        !z &&
        ((f = r[0] / ce),
        (o = r[1] / ce),
        (h = r[2] / ce),
        (y = Math.max(f, o, h)),
        (S = Math.min(f, o, h)),
        (_ = (y + S) / 2),
        y === S
          ? (g = p = 0)
          : ((b = y - S),
            (p = _ > 0.5 ? b / (2 - y - S) : b / (y + S)),
            (g =
              y === f
                ? (o - h) / b + (o < h ? 6 : 0)
                : y === o
                ? (h - f) / b + 2
                : (f - o) / b + 4),
            (g *= 60)),
        (r[0] = ~~(g + 0.5)),
        (r[1] = ~~(p * 100 + 0.5)),
        (r[2] = ~~(_ * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  S_ = function (n) {
    var u = [],
      i = [],
      r = -1;
    return (
      n.split(fi).forEach(function (f) {
        var o = f.match(Vu) || [];
        u.push.apply(u, o), i.push((r += o.length + 1));
      }),
      (u.c = i),
      u
    );
  },
  ag = function (n, u, i) {
    var r = "",
      f = (n + r).match(fi),
      o = u ? "hsla(" : "rgba(",
      h = 0,
      g,
      p,
      _,
      y;
    if (!f) return n;
    if (
      ((f = f.map(function (S) {
        return (
          (S = b_(S, u, 1)) &&
          o +
            (u ? S[0] + "," + S[1] + "%," + S[2] + "%," + S[3] : S.join(",")) +
            ")"
        );
      })),
      i && ((_ = S_(n)), (g = i.c), g.join(r) !== _.c.join(r)))
    )
      for (p = n.replace(fi, "1").split(Vu), y = p.length - 1; h < y; h++)
        r +=
          p[h] +
          (~g.indexOf(h)
            ? f.shift() || o + "0,0,0,0)"
            : (_.length ? _ : f.length ? f : i).shift());
    if (!p)
      for (p = n.split(fi), y = p.length - 1; h < y; h++) r += p[h] + f[h];
    return r + p[y];
  },
  fi = (function () {
    var d =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in Fr) d += "|" + n + "\\b";
    return new RegExp(d + ")", "gi");
  })(),
  b6 = /hsl[a]?\(/,
  T_ = function (n) {
    var u = n.join(" "),
      i;
    if (((fi.lastIndex = 0), fi.test(u)))
      return (
        (i = b6.test(u)),
        (n[1] = ag(n[1], i)),
        (n[0] = ag(n[0], i, S_(n[1]))),
        !0
      );
  },
  _s,
  sn = (function () {
    var d = Date.now,
      n = 500,
      u = 33,
      i = d(),
      r = i,
      f = 1e3 / 240,
      o = f,
      h = [],
      g,
      p,
      _,
      y,
      S,
      b,
      z = function T(C) {
        var V = d() - r,
          O = C === !0,
          Q,
          B,
          X,
          P;
        if (
          ((V > n || V < 0) && (i += V - u),
          (r += V),
          (X = r - i),
          (Q = X - o),
          (Q > 0 || O) &&
            ((P = ++y.frame),
            (S = X - y.time * 1e3),
            (y.time = X = X / 1e3),
            (o += Q + (Q >= f ? 4 : f - Q)),
            (B = 1)),
          O || (g = p(T)),
          B)
        )
          for (b = 0; b < h.length; b++) h[b](X, S, P, C);
      };
    return (
      (y = {
        time: 0,
        frame: 0,
        tick: function () {
          z(!0);
        },
        deltaRatio: function (C) {
          return S / (1e3 / (C || 60));
        },
        wake: function () {
          Ig &&
            (!lh &&
              Dh() &&
              (($n = lh = window),
              (Nh = $n.document || {}),
              (dn.gsap = Kl),
              ($n.gsapVersions || ($n.gsapVersions = [])).push(Kl.version),
              t_(sf || $n.GreenSockGlobals || (!$n.gsap && $n) || {}),
              v_.forEach(y_)),
            (_ = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            g && y.sleep(),
            (p =
              _ ||
              function (C) {
                return setTimeout(C, (o - y.time * 1e3 + 1) | 0);
              }),
            (_s = 1),
            z(2));
        },
        sleep: function () {
          (_ ? cancelAnimationFrame : clearTimeout)(g), (_s = 0), (p = ps);
        },
        lagSmoothing: function (C, V) {
          (n = C || 1 / 0), (u = Math.min(V || 33, n));
        },
        fps: function (C) {
          (f = 1e3 / (C || 240)), (o = y.time * 1e3 + f);
        },
        add: function (C, V, O) {
          var Q = V
            ? function (B, X, P, x) {
                C(B, X, P, x), y.remove(Q);
              }
            : C;
          return y.remove(C), h[O ? "unshift" : "push"](Q), Iu(), Q;
        },
        remove: function (C, V) {
          ~(V = h.indexOf(C)) && h.splice(V, 1) && b >= V && b--;
        },
        _listeners: h,
      }),
      y
    );
  })(),
  Iu = function () {
    return !_s && sn.wake();
  },
  Xt = {},
  S6 = /^[\d.\-M][\d.\-,\s]/,
  T6 = /["']/g,
  E6 = function (n) {
    for (
      var u = {},
        i = n.substr(1, n.length - 3).split(":"),
        r = i[0],
        f = 1,
        o = i.length,
        h,
        g,
        p;
      f < o;
      f++
    )
      (g = i[f]),
        (h = f !== o - 1 ? g.lastIndexOf(",") : g.length),
        (p = g.substr(0, h)),
        (u[r] = isNaN(p) ? p.replace(T6, "").trim() : +p),
        (r = g.substr(h + 1).trim());
    return u;
  },
  x6 = function (n) {
    var u = n.indexOf("(") + 1,
      i = n.indexOf(")"),
      r = n.indexOf("(", u);
    return n.substring(u, ~r && r < i ? n.indexOf(")", i + 1) : i);
  },
  A6 = function (n) {
    var u = (n + "").split("("),
      i = Xt[u[0]];
    return i && u.length > 1 && i.config
      ? i.config.apply(
          null,
          ~n.indexOf("{") ? [E6(u[1])] : x6(n).split(",").map(i_)
        )
      : Xt._CE && S6.test(n)
      ? Xt._CE("", n)
      : i;
  },
  M6 = function (n) {
    return function (u) {
      return 1 - n(1 - u);
    };
  },
  Qi = function (n, u) {
    return (n && (Ce(n) ? n : Xt[n] || A6(n))) || u;
  },
  Ii = function (n, u, i, r) {
    i === void 0 &&
      (i = function (g) {
        return 1 - u(1 - g);
      }),
      r === void 0 &&
        (r = function (g) {
          return g < 0.5 ? u(g * 2) / 2 : 1 - u((1 - g) * 2) / 2;
        });
    var f = { easeIn: u, easeOut: i, easeInOut: r },
      o;
    return (
      Gl(n, function (h) {
        (Xt[h] = dn[h] = f), (Xt[(o = h.toLowerCase())] = i);
        for (var g in f)
          Xt[
            o + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")
          ] = Xt[h + "." + g] = f[g];
      }),
      f
    );
  },
  E_ = function (n) {
    return function (u) {
      return u < 0.5 ? (1 - n(1 - u * 2)) / 2 : 0.5 + n((u - 0.5) * 2) / 2;
    };
  },
  q0 = function d(n, u, i) {
    var r = u >= 1 ? u : 1,
      f = (i || (n ? 0.3 : 0.45)) / (u < 1 ? u : 1),
      o = (f / eh) * (Math.asin(1 / r) || 0),
      h = function (_) {
        return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * Wy((_ - o) * f) + 1;
      },
      g =
        n === "out"
          ? h
          : n === "in"
          ? function (p) {
              return 1 - h(1 - p);
            }
          : E_(h);
    return (
      (f = eh / f),
      (g.config = function (p, _) {
        return d(n, p, _);
      }),
      g
    );
  },
  X0 = function d(n, u) {
    u === void 0 && (u = 1.70158);
    var i = function (o) {
        return o ? --o * o * ((u + 1) * o + u) + 1 : 0;
      },
      r =
        n === "out"
          ? i
          : n === "in"
          ? function (f) {
              return 1 - i(1 - f);
            }
          : E_(i);
    return (
      (r.config = function (f) {
        return d(n, f);
      }),
      r
    );
  };
Gl("Linear,Quad,Cubic,Quart,Quint,Strong", function (d, n) {
  var u = n < 5 ? n + 1 : n;
  Ii(
    d + ",Power" + (u - 1),
    n
      ? function (i) {
          return Math.pow(i, u);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, u);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, u) / 2
        : 1 - Math.pow((1 - i) * 2, u) / 2;
    }
  );
});
Xt.Linear.easeNone = Xt.none = Xt.Linear.easeIn;
Ii("Elastic", q0("in"), q0("out"), q0());
(function (d, n) {
  var u = 1 / n,
    i = 2 * u,
    r = 2.5 * u,
    f = function (h) {
      return h < u
        ? d * h * h
        : h < i
        ? d * Math.pow(h - 1.5 / n, 2) + 0.75
        : h < r
        ? d * (h -= 2.25 / n) * h + 0.9375
        : d * Math.pow(h - 2.625 / n, 2) + 0.984375;
    };
  Ii(
    "Bounce",
    function (o) {
      return 1 - f(1 - o);
    },
    f
  );
})(7.5625, 2.75);
Ii("Expo", function (d) {
  return Math.pow(2, 10 * (d - 1)) * d + d * d * d * d * d * d * (1 - d);
});
Ii("Circ", function (d) {
  return -(Fg(1 - d * d) - 1);
});
Ii("Sine", function (d) {
  return d === 1 ? 1 : -Fy(d * Ky) + 1;
});
Ii("Back", X0("in"), X0("out"), X0());
Xt.SteppedEase =
  Xt.steps =
  dn.SteppedEase =
    {
      config: function (n, u) {
        n === void 0 && (n = 1);
        var i = 1 / n,
          r = n + (u ? 0 : 1),
          f = u ? 1 : 0,
          o = 1 - fe;
        return function (h) {
          return (((r * Es(0, o, h)) | 0) + f) * i;
        };
      },
    };
ds.ease = Xt["quad.out"];
Gl(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (d) {
    return (Hh += d + "," + d + "Params,");
  }
);
var x_ = function (n, u) {
    (this.id = Jy++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = u),
      (this.get = u ? u.get : n_),
      (this.set = u ? u.getSetter : Vh);
  },
  vs = (function () {
    function d(u) {
      (this.vars = u),
        (this._delay = +u.delay || 0),
        (this._repeat = u.repeat === 1 / 0 ? -2 : u.repeat || 0) &&
          ((this._rDelay = u.repeatDelay || 0),
          (this._yoyo = !!u.yoyo || !!u.yoyoEase)),
        (this._ts = 1),
        Pu(this, +u.duration, 1, 1),
        (this.data = u.data),
        _e && ((this._ctx = _e), _e.data.push(this)),
        _s || sn.wake();
    }
    var n = d.prototype;
    return (
      (n.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (n.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Pu(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (n.totalTime = function (i, r) {
        if ((Iu(), !arguments.length)) return this._tTime;
        var f = this._dp;
        if (f && f.smoothChildTiming && this._ts) {
          for (Tf(this, i), !f._dp || f.parent || s_(f, this); f && f.parent; )
            f.parent._time !==
              f._start +
                (f._ts >= 0
                  ? f._tTime / f._ts
                  : (f.totalDuration() - f._tTime) / -f._ts) &&
              f.totalTime(f._tTime, !0),
              (f = f.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            In(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === fe) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), a_(this, i, r)),
          this
        );
      }),
      (n.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + eg(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (n.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (n.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                eg(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (n.iteration = function (i, r) {
        var f = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * f, r)
          : this._repeat
          ? $u(this._tTime, f) + 1
          : 1;
      }),
      (n.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -fe ? 0 : this._rts;
        if (this._rts === i) return this;
        var f =
          this.parent && this._ts ? of(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -fe ? 0 : this._rts),
          this.totalTime(
            Es(-Math.abs(this._delay), this.totalDuration(), f),
            r !== !1
          ),
          Sf(this),
          u6(this)
        );
      }),
      (n.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Iu(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== fe &&
                      (this._tTime -= fe)
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (i) {
        if (arguments.length) {
          this._start = xe(i);
          var r = this.parent || this._dp;
          return (
            r &&
              (r._sort || !this.parent) &&
              In(r, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (n.endTime = function (i) {
        return (
          this._start +
          (Xl(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? of(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (n.revert = function (i) {
        i === void 0 && (i = l6);
        var r = sl;
        return (
          (sl = i),
          jh(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (sl = r),
          this
        );
      }),
      (n.globalTime = function (i) {
        for (var r = this, f = arguments.length ? i : r.rawTime(); r; )
          (f = r._start + f / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : f;
      }),
      (n.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), lg(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (n.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), lg(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (n.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (n.seek = function (i, r) {
        return this.totalTime(Nn(this, i), Xl(r));
      }),
      (n.restart = function (i, r) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Xl(r)),
          this._dur || (this._zTime = -fe),
          this
        );
      }),
      (n.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (n.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -fe : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -fe), this;
      }),
      (n.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          f;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (f = i.rawTime(!0)) >= r &&
            f < this.endTime(!0) - fe)
        );
      }),
      (n.eventCallback = function (i, r, f) {
        var o = this.vars;
        return arguments.length > 1
          ? (r
              ? ((o[i] = r),
                f && (o[i + "Params"] = f),
                i === "onUpdate" && (this._onUpdate = r))
              : delete o[i],
            this)
          : o[i];
      }),
      (n.then = function (i) {
        var r = this,
          f = r._prom;
        return new Promise(function (o) {
          var h = Ce(i) ? i : u_,
            g = function () {
              var _ = r.then;
              (r.then = null),
                f && f(),
                Ce(h) && (h = h(r)) && (h.then || h === r) && (r.then = _),
                o(h),
                (r.then = _);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? g()
            : (r._prom = g);
        });
      }),
      (n.kill = function () {
        Jr(this);
      }),
      d
    );
  })();
mn(vs.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -fe,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var ql = (function (d) {
  Jg(n, d);
  function n(i, r) {
    var f;
    return (
      i === void 0 && (i = {}),
      (f = d.call(this, i) || this),
      (f.labels = {}),
      (f.smoothChildTiming = !!i.smoothChildTiming),
      (f.autoRemoveChildren = !!i.autoRemoveChildren),
      (f._sort = Xl(i.sortChildren)),
      Ae && In(i.parent || Ae, xa(f), r),
      i.reversed && f.reverse(),
      i.paused && f.paused(!0),
      i.scrollTrigger && c_(xa(f), i.scrollTrigger),
      f
    );
  }
  var u = n.prototype;
  return (
    (u.to = function (r, f, o) {
      return ls(0, arguments, this), this;
    }),
    (u.from = function (r, f, o) {
      return ls(1, arguments, this), this;
    }),
    (u.fromTo = function (r, f, o, h) {
      return ls(2, arguments, this), this;
    }),
    (u.set = function (r, f, o) {
      return (
        (f.duration = 0),
        (f.parent = this),
        es(f).repeatDelay || (f.repeat = 0),
        (f.immediateRender = !!f.immediateRender),
        new ke(r, f, Nn(this, o), 1),
        this
      );
    }),
    (u.call = function (r, f, o) {
      return In(this, ke.delayedCall(0, r, f), o);
    }),
    (u.staggerTo = function (r, f, o, h, g, p, _) {
      return (
        (o.duration = f),
        (o.stagger = o.stagger || h),
        (o.onComplete = p),
        (o.onCompleteParams = _),
        (o.parent = this),
        new ke(r, o, Nn(this, g)),
        this
      );
    }),
    (u.staggerFrom = function (r, f, o, h, g, p, _) {
      return (
        (o.runBackwards = 1),
        (es(o).immediateRender = Xl(o.immediateRender)),
        this.staggerTo(r, f, o, h, g, p, _)
      );
    }),
    (u.staggerFromTo = function (r, f, o, h, g, p, _, y) {
      return (
        (h.startAt = o),
        (es(h).immediateRender = Xl(h.immediateRender)),
        this.staggerTo(r, f, h, g, p, _, y)
      );
    }),
    (u.render = function (r, f, o) {
      var h = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        _ = r <= 0 ? 0 : xe(r),
        y = this._zTime < 0 != r < 0 && (this._initted || !p),
        S,
        b,
        z,
        T,
        C,
        V,
        O,
        Q,
        B,
        X,
        P,
        x;
      if (
        (this !== Ae && _ > g && r >= 0 && (_ = g), _ !== this._tTime || o || y)
      ) {
        if (
          (h !== this._time &&
            p &&
            ((_ += this._time - h), (r += this._time - h)),
          (S = _),
          (B = this._start),
          (Q = this._ts),
          (V = !Q),
          y && (p || (h = this._zTime), (r || !f) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((P = this._yoyo),
            (C = p + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(C * 100 + r, f, o);
          if (
            ((S = xe(_ % C)),
            _ === g
              ? ((T = this._repeat), (S = p))
              : ((X = xe(_ / C)),
                (T = ~~X),
                T && T === X && ((S = p), T--),
                S > p && (S = p)),
            (X = $u(this._tTime, C)),
            !h &&
              this._tTime &&
              X !== T &&
              this._tTime - X * C - this._dur <= 0 &&
              (X = T),
            P && T & 1 && ((S = p - S), (x = 1)),
            T !== X && !this._lock)
          ) {
            var Y = P && X & 1,
              k = Y === (P && T & 1);
            if (
              (T < X && (Y = !Y),
              (h = Y ? 0 : _ % p ? p : _),
              (this._lock = 1),
              (this.render(h || (x ? 0 : xe(T * C)), f, !p)._lock = 0),
              (this._tTime = _),
              !f && this.parent && fn(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !x &&
                ((this.invalidate()._lock = 1), (X = T)),
              (h && h !== this._time) ||
                V !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((p = this._dur),
              (g = this._tDur),
              k &&
                ((this._lock = 2),
                (h = Y ? p : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !x && this.invalidate()),
              (this._lock = 0),
              !this._ts && !V)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((O = f6(this, xe(h), xe(S))), O && (_ -= S - (S = O._start))),
          (this._tTime = _),
          (this._time = S),
          (this._act = !!Q),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (h = 0)),
          !h && _ && p && !f && !X && (fn(this, "onStart"), this._tTime !== _))
        )
          return this;
        if (S >= h && r >= 0)
          for (b = this._first; b; ) {
            if (
              ((z = b._next), (b._act || S >= b._start) && b._ts && O !== b)
            ) {
              if (b.parent !== this) return this.render(r, f, o);
              if (
                (b.render(
                  b._ts > 0
                    ? (S - b._start) * b._ts
                    : (b._dirty ? b.totalDuration() : b._tDur) +
                        (S - b._start) * b._ts,
                  f,
                  o
                ),
                S !== this._time || (!this._ts && !V))
              ) {
                (O = 0), z && (_ += this._zTime = -fe);
                break;
              }
            }
            b = z;
          }
        else {
          b = this._last;
          for (var W = r < 0 ? r : S; b; ) {
            if (((z = b._prev), (b._act || W <= b._end) && b._ts && O !== b)) {
              if (b.parent !== this) return this.render(r, f, o);
              if (
                (b.render(
                  b._ts > 0
                    ? (W - b._start) * b._ts
                    : (b._dirty ? b.totalDuration() : b._tDur) +
                        (W - b._start) * b._ts,
                  f,
                  o || (sl && jh(b))
                ),
                S !== this._time || (!this._ts && !V))
              ) {
                (O = 0), z && (_ += this._zTime = W ? -fe : fe);
                break;
              }
            }
            b = z;
          }
        }
        if (
          O &&
          !f &&
          (this.pause(),
          (O.render(S >= h ? 0 : -fe)._zTime = S >= h ? 1 : -1),
          this._ts)
        )
          return (this._start = B), Sf(this), this.render(r, f, o);
        this._onUpdate && !f && fn(this, "onUpdate", !0),
          ((_ === g && this._tTime >= this.totalDuration()) || (!_ && h)) &&
            (B === this._start || Math.abs(Q) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !p) &&
                ((_ === g && this._ts > 0) || (!_ && this._ts < 0)) &&
                hi(this, 1),
              !f &&
                !(r < 0 && !h) &&
                (_ || h || !g) &&
                (fn(
                  this,
                  _ === g && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(_ < g && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (u.add = function (r, f) {
      var o = this;
      if ((wa(f) || (f = Nn(this, f, r)), !(r instanceof vs))) {
        if (bl(r))
          return (
            r.forEach(function (h) {
              return o.add(h, f);
            }),
            this
          );
        if (ll(r)) return this.addLabel(r, f);
        if (Ce(r)) r = ke.delayedCall(0, r);
        else return this;
      }
      return this !== r ? In(this, r, f) : this;
    }),
    (u.getChildren = function (r, f, o, h) {
      r === void 0 && (r = !0),
        f === void 0 && (f = !0),
        o === void 0 && (o = !0),
        h === void 0 && (h = -Hn);
      for (var g = [], p = this._first; p; )
        p._start >= h &&
          (p instanceof ke
            ? f && g.push(p)
            : (o && g.push(p), r && g.push.apply(g, p.getChildren(!0, f, o)))),
          (p = p._next);
      return g;
    }),
    (u.getById = function (r) {
      for (var f = this.getChildren(1, 1, 1), o = f.length; o--; )
        if (f[o].vars.id === r) return f[o];
    }),
    (u.remove = function (r) {
      return ll(r)
        ? this.removeLabel(r)
        : Ce(r)
        ? this.killTweensOf(r)
        : (r.parent === this && bf(this, r),
          r === this._recent && (this._recent = this._last),
          Gi(this));
    }),
    (u.totalTime = function (r, f) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = xe(
              sn.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          d.prototype.totalTime.call(this, r, f),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (u.addLabel = function (r, f) {
      return (this.labels[r] = Nn(this, f)), this;
    }),
    (u.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (u.addPause = function (r, f, o) {
      var h = ke.delayedCall(0, f || ps, o);
      return (
        (h.data = "isPause"), (this._hasPause = 1), In(this, h, Nn(this, r))
      );
    }),
    (u.removePause = function (r) {
      var f = this._first;
      for (r = Nn(this, r); f; )
        f._start === r && f.data === "isPause" && hi(f), (f = f._next);
    }),
    (u.killTweensOf = function (r, f, o) {
      for (var h = this.getTweensOf(r, o), g = h.length; g--; )
        ai !== h[g] && h[g].kill(r, f);
      return this;
    }),
    (u.getTweensOf = function (r, f) {
      for (var o = [], h = Un(r), g = this._first, p = wa(f), _; g; )
        g instanceof ke
          ? n6(g._targets, h) &&
            (p
              ? (!ai || (g._initted && g._ts)) &&
                g.globalTime(0) <= f &&
                g.globalTime(g.totalDuration()) > f
              : !f || g.isActive()) &&
            o.push(g)
          : (_ = g.getTweensOf(h, f)).length && o.push.apply(o, _),
          (g = g._next);
      return o;
    }),
    (u.tweenTo = function (r, f) {
      f = f || {};
      var o = this,
        h = Nn(o, r),
        g = f,
        p = g.startAt,
        _ = g.onStart,
        y = g.onStartParams,
        S = g.immediateRender,
        b,
        z = ke.to(
          o,
          mn(
            {
              ease: f.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                f.duration ||
                Math.abs(
                  (h - (p && "time" in p ? p.time : o._time)) / o.timeScale()
                ) ||
                fe,
              onStart: function () {
                if ((o.pause(), !b)) {
                  var C =
                    f.duration ||
                    Math.abs(
                      (h - (p && "time" in p ? p.time : o._time)) /
                        o.timeScale()
                    );
                  z._dur !== C && Pu(z, C, 0, 1).render(z._time, !0, !0),
                    (b = 1);
                }
                _ && _.apply(z, y || []);
              },
            },
            f
          )
        );
      return S ? z.render(0) : z;
    }),
    (u.tweenFromTo = function (r, f, o) {
      return this.tweenTo(f, mn({ startAt: { time: Nn(this, r) } }, o));
    }),
    (u.recent = function () {
      return this._recent;
    }),
    (u.nextLabel = function (r) {
      return r === void 0 && (r = this._time), ng(this, Nn(this, r));
    }),
    (u.previousLabel = function (r) {
      return r === void 0 && (r = this._time), ng(this, Nn(this, r), 1);
    }),
    (u.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + fe);
    }),
    (u.shiftChildren = function (r, f, o) {
      o === void 0 && (o = 0);
      var h = this._first,
        g = this.labels,
        p;
      for (r = xe(r); h; )
        h._start >= o && ((h._start += r), (h._end += r)), (h = h._next);
      if (f) for (p in g) g[p] >= o && (g[p] += r);
      return Gi(this);
    }),
    (u.invalidate = function (r) {
      var f = this._first;
      for (this._lock = 0; f; ) f.invalidate(r), (f = f._next);
      return d.prototype.invalidate.call(this, r);
    }),
    (u.clear = function (r) {
      r === void 0 && (r = !0);
      for (var f = this._first, o; f; ) (o = f._next), this.remove(f), (f = o);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Gi(this)
      );
    }),
    (u.totalDuration = function (r) {
      var f = 0,
        o = this,
        h = o._last,
        g = Hn,
        p,
        _,
        y;
      if (arguments.length)
        return o.timeScale(
          (o._repeat < 0 ? o.duration() : o.totalDuration()) /
            (o.reversed() ? -r : r)
        );
      if (o._dirty) {
        for (y = o.parent; h; )
          (p = h._prev),
            h._dirty && h.totalDuration(),
            (_ = h._start),
            _ > g && o._sort && h._ts && !o._lock
              ? ((o._lock = 1), (In(o, h, _ - h._delay, 1)._lock = 0))
              : (g = _),
            _ < 0 &&
              h._ts &&
              ((f -= _),
              ((!y && !o._dp) || (y && y.smoothChildTiming)) &&
                ((o._start += xe(_ / o._ts)), (o._time -= _), (o._tTime -= _)),
              o.shiftChildren(-_, !1, -1 / 0),
              (g = 0)),
            h._end > f && h._ts && (f = h._end),
            (h = p);
        Pu(o, o === Ae && o._time > f ? o._time : f, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (n.updateRoot = function (r) {
      if ((Ae._ts && (a_(Ae, of(r, Ae)), (l_ = sn.frame)), sn.frame >= Ip)) {
        Ip += hn.autoSleep || 120;
        var f = Ae._first;
        if ((!f || !f._ts) && hn.autoSleep && sn._listeners.length < 2) {
          for (; f && !f._ts; ) f = f._next;
          f || sn.sleep();
        }
      }
    }),
    n
  );
})(vs);
mn(ql.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var O6 = function (n, u, i, r, f, o, h) {
    var g = new Ql(this._pt, n, u, 0, 1, D_, null, f),
      p = 0,
      _ = 0,
      y,
      S,
      b,
      z,
      T,
      C,
      V,
      O;
    for (
      g.b = i,
        g.e = r,
        i += "",
        r += "",
        (V = ~r.indexOf("random(")) && (r = gs(r)),
        o && ((O = [i, r]), o(O, n, u), (i = O[0]), (r = O[1])),
        S = i.match(Y0) || [];
      (y = Y0.exec(r));

    )
      (z = y[0]),
        (T = r.substring(p, y.index)),
        b ? (b = (b + 1) % 5) : T.substr(-5) === "rgba(" && (b = 1),
        z !== S[_++] &&
          ((C = parseFloat(S[_ - 1]) || 0),
          (g._pt = {
            _next: g._pt,
            p: T || _ === 1 ? T : ",",
            s: C,
            c: z.charAt(1) === "=" ? Xu(C, z) - C : parseFloat(z) - C,
            m: b && b < 4 ? Math.round : 0,
          }),
          (p = Y0.lastIndex));
    return (
      (g.c = p < r.length ? r.substring(p, r.length) : ""),
      (g.fp = h),
      (Pg.test(r) || V) && (g.e = 0),
      (this._pt = g),
      g
    );
  },
  Lh = function (n, u, i, r, f, o, h, g, p, _) {
    Ce(r) && (r = r(f || 0, n, o));
    var y = n[u],
      S =
        i !== "get"
          ? i
          : Ce(y)
          ? p
            ? n[
                u.indexOf("set") || !Ce(n["get" + u.substr(3)])
                  ? u
                  : "get" + u.substr(3)
              ](p)
            : n[u]()
          : y,
      b = Ce(y) ? (p ? C6 : z_) : Yh,
      z;
    if (
      (ll(r) &&
        (~r.indexOf("random(") && (r = gs(r)),
        r.charAt(1) === "=" &&
          ((z = Xu(S, r) + (vl(S) || 0)), (z || z === 0) && (r = z))),
      !_ || S !== r || ch)
    )
      return !isNaN(S * r) && r !== ""
        ? ((z = new Ql(
            this._pt,
            n,
            u,
            +S || 0,
            r - (S || 0),
            typeof y == "boolean" ? H6 : w_,
            0,
            b
          )),
          p && (z.fp = p),
          h && z.modifier(h, this, n),
          (this._pt = z))
        : (!y && !(u in n) && Ch(u, r),
          O6.call(this, n, u, S, r, b, g || hn.stringFilter, p));
  },
  z6 = function (n, u, i, r, f) {
    if (
      (Ce(n) && (n = ns(n, f, u, i, r)),
      !na(n) || (n.style && n.nodeType) || bl(n) || Wg(n))
    )
      return ll(n) ? ns(n, f, u, i, r) : n;
    var o = {},
      h;
    for (h in n) o[h] = ns(n[h], f, u, i, r);
    return o;
  },
  A_ = function (n, u, i, r, f, o) {
    var h, g, p, _;
    if (
      un[n] &&
      (h = new un[n]()).init(
        f,
        h.rawVars ? u[n] : z6(u[n], r, f, o, i),
        i,
        r,
        o
      ) !== !1 &&
      ((i._pt = g = new Ql(i._pt, f, n, 0, 1, h.render, h, 0, h.priority)),
      i !== Zu)
    )
      for (p = i._ptLookup[i._targets.indexOf(f)], _ = h._props.length; _--; )
        p[h._props[_]] = g;
    return h;
  },
  ai,
  ch,
  Bh = function d(n, u, i) {
    var r = n.vars,
      f = r.ease,
      o = r.startAt,
      h = r.immediateRender,
      g = r.lazy,
      p = r.onUpdate,
      _ = r.runBackwards,
      y = r.yoyoEase,
      S = r.keyframes,
      b = r.autoRevert,
      z = n._dur,
      T = n._startAt,
      C = n._targets,
      V = n.parent,
      O = V && V.data === "nested" ? V.vars.targets : C,
      Q = n._overwrite === "auto" && !zh,
      B = n.timeline,
      X = r.easeReverse || y,
      P,
      x,
      Y,
      k,
      W,
      rt,
      lt,
      at,
      ht,
      _t,
      H,
      K,
      et;
    if (
      (B && (!S || !f) && (f = "none"),
      (n._ease = Qi(f, ds.ease)),
      (n._rEase = X && (Qi(X) || n._ease)),
      (n._from = !B && !!r.runBackwards),
      n._from && (n.ratio = 1),
      !B || (S && !r.stagger))
    ) {
      if (
        ((at = C[0] ? Xi(C[0]).harness : 0),
        (K = at && r[at.prop]),
        (P = ff(r, Rh)),
        T &&
          (T._zTime < 0 && T.progress(1),
          u < 0 && _ && h && !b ? T.render(-1, !0) : T.revert(_ && z ? $c : e6),
          (T._lazy = 0)),
        o)
      ) {
        if (
          (hi(
            (n._startAt = ke.set(
              C,
              mn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: V,
                  immediateRender: !0,
                  lazy: !T && Xl(g),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    p &&
                    function () {
                      return fn(n, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          u < 0 && (sl || (!h && !b)) && n._startAt.revert($c),
          h && z && u <= 0 && i <= 0)
        ) {
          u && (n._zTime = u);
          return;
        }
      } else if (_ && z && !T) {
        if (
          (u && (h = !1),
          (Y = mn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !T && Xl(g),
              immediateRender: h,
              stagger: 0,
              parent: V,
            },
            P
          )),
          K && (Y[at.prop] = K),
          hi((n._startAt = ke.set(C, Y))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          u < 0 && (sl ? n._startAt.revert($c) : n._startAt.render(-1, !0)),
          (n._zTime = u),
          !h)
        )
          d(n._startAt, fe, fe);
        else if (!u) return;
      }
      for (
        n._pt = n._ptCache = 0, g = (z && Xl(g)) || (g && !z), x = 0;
        x < C.length;
        x++
      ) {
        if (
          ((W = C[x]),
          (lt = W._gsap || Uh(C)[x]._gsap),
          (n._ptLookup[x] = _t = {}),
          nh[lt.id] && ci.length && cf(),
          (H = O === C ? x : O.indexOf(W)),
          at &&
            (ht = new at()).init(W, K || P, n, H, O) !== !1 &&
            ((n._pt = k =
              new Ql(n._pt, W, ht.name, 0, 1, ht.render, ht, 0, ht.priority)),
            ht._props.forEach(function (ct) {
              _t[ct] = k;
            }),
            ht.priority && (rt = 1)),
          !at || K)
        )
          for (Y in P)
            un[Y] && (ht = A_(Y, P, n, H, W, O))
              ? ht.priority && (rt = 1)
              : (_t[Y] = k =
                  Lh.call(n, W, Y, "get", P[Y], H, O, 0, r.stringFilter));
        n._op && n._op[x] && n.kill(W, n._op[x]),
          Q &&
            n._pt &&
            ((ai = n),
            Ae.killTweensOf(W, _t, n.globalTime(u)),
            (et = !n.parent),
            (ai = 0)),
          n._pt && g && (nh[lt.id] = 1);
      }
      rt && N_(n), n._onInit && n._onInit(n);
    }
    (n._onUpdate = p),
      (n._initted = (!n._op || n._pt) && !et),
      S && u <= 0 && B.render(Hn, !0, !0);
  },
  w6 = function (n, u, i, r, f, o, h, g) {
    var p = ((n._pt && n._ptCache) || (n._ptCache = {}))[u],
      _,
      y,
      S,
      b;
    if (!p)
      for (
        p = n._ptCache[u] = [], S = n._ptLookup, b = n._targets.length;
        b--;

      ) {
        if (((_ = S[b][u]), _ && _.d && _.d._pt))
          for (_ = _.d._pt; _ && _.p !== u && _.fp !== u; ) _ = _._next;
        if (!_)
          return (
            (ch = 1),
            (n.vars[u] = "+=0"),
            Bh(n, h),
            (ch = 0),
            g
              ? ms(
                  u +
                    " not eligible for reset. Try splitting into individual properties"
                )
              : 1
          );
        p.push(_);
      }
    for (b = p.length; b--; )
      (y = p[b]),
        (_ = y._pt || y),
        (_.s = (r || r === 0) && !f ? r : _.s + (r || 0) + o * _.c),
        (_.c = i - _.s),
        y.e && (y.e = Le(i) + vl(y.e)),
        y.b && (y.b = _.s + vl(y.b));
  },
  D6 = function (n, u) {
    var i = n[0] ? Xi(n[0]).harness : 0,
      r = i && i.aliases,
      f,
      o,
      h,
      g;
    if (!r) return u;
    f = Wu({}, u);
    for (o in r)
      if (o in f) for (g = r[o].split(","), h = g.length; h--; ) f[g[h]] = f[o];
    return f;
  },
  N6 = function (n, u, i, r) {
    var f = u.ease || r || "power1.inOut",
      o,
      h;
    if (bl(u))
      (h = i[n] || (i[n] = [])),
        u.forEach(function (g, p) {
          return h.push({ t: (p / (u.length - 1)) * 100, v: g, e: f });
        });
    else
      for (o in u)
        (h = i[o] || (i[o] = [])),
          o === "ease" || h.push({ t: parseFloat(n), v: u[o], e: f });
  },
  ns = function (n, u, i, r, f) {
    return Ce(n)
      ? n.call(u, i, r, f)
      : ll(n) && ~n.indexOf("random(")
      ? gs(n)
      : n;
  },
  M_ =
    Hh +
    "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  O_ = {};
Gl(M_ + ",id,stagger,delay,duration,paused,scrollTrigger", function (d) {
  return (O_[d] = 1);
});
var ke = (function (d) {
  Jg(n, d);
  function n(i, r, f, o) {
    var h;
    typeof r == "number" && ((f.duration = r), (r = f), (f = null)),
      (h = d.call(this, o ? r : es(r)) || this);
    var g = h.vars,
      p = g.duration,
      _ = g.delay,
      y = g.immediateRender,
      S = g.stagger,
      b = g.overwrite,
      z = g.keyframes,
      T = g.defaults,
      C = g.scrollTrigger,
      V = r.parent || Ae,
      O = (bl(i) || Wg(i) ? wa(i[0]) : "length" in r) ? [i] : Un(i),
      Q,
      B,
      X,
      P,
      x,
      Y,
      k,
      W;
    if (
      ((h._targets = O.length
        ? Uh(O)
        : ms(
            "GSAP target " + i + " not found. https://gsap.com",
            !hn.nullTargetWarn
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = b),
      z || S || jc(p) || jc(_))
    ) {
      r = h.vars;
      var rt = r.easeReverse || r.yoyoEase;
      if (
        ((Q = h.timeline =
          new ql({
            data: "nested",
            defaults: T || {},
            targets: V && V.data === "nested" ? V.vars.targets : O,
          })),
        Q.kill(),
        (Q.parent = Q._dp = xa(h)),
        (Q._start = 0),
        S || jc(p) || jc(_))
      ) {
        if (((P = O.length), (k = S && d_(S)), na(S)))
          for (x in S) ~M_.indexOf(x) && (W || (W = {}), (W[x] = S[x]));
        for (B = 0; B < P; B++)
          (X = ff(r, O_)),
            (X.stagger = 0),
            rt && (X.easeReverse = rt),
            W && Wu(X, W),
            (Y = O[B]),
            (X.duration = +ns(p, xa(h), B, Y, O)),
            (X.delay = (+ns(_, xa(h), B, Y, O) || 0) - h._delay),
            !S &&
              P === 1 &&
              X.delay &&
              ((h._delay = _ = X.delay), (h._start += _), (X.delay = 0)),
            Q.to(Y, X, k ? k(B, Y, O) : 0),
            (Q._ease = Xt.none);
        Q.duration() ? (p = _ = 0) : (h.timeline = 0);
      } else if (z) {
        es(mn(Q.vars.defaults, { ease: "none" })),
          (Q._ease = Qi(z.ease || r.ease || "none"));
        var lt = 0,
          at,
          ht,
          _t;
        if (bl(z))
          z.forEach(function (H) {
            return Q.to(O, H, ">");
          }),
            Q.duration();
        else {
          X = {};
          for (x in z)
            x === "ease" || x === "easeEach" || N6(x, z[x], X, z.easeEach);
          for (x in X)
            for (
              at = X[x].sort(function (H, K) {
                return H.t - K.t;
              }),
                lt = 0,
                B = 0;
              B < at.length;
              B++
            )
              (ht = at[B]),
                (_t = {
                  ease: ht.e,
                  duration: ((ht.t - (B ? at[B - 1].t : 0)) / 100) * p,
                }),
                (_t[x] = ht.v),
                Q.to(O, _t, lt),
                (lt += _t.duration);
          Q.duration() < p && Q.to({}, { duration: p - Q.duration() });
        }
      }
      p || h.duration((p = Q.duration()));
    } else h.timeline = 0;
    return (
      b === !0 && !zh && ((ai = xa(h)), Ae.killTweensOf(O), (ai = 0)),
      In(V, xa(h), f),
      r.reversed && h.reverse(),
      r.paused && h.paused(!0),
      (y ||
        (!p &&
          !z &&
          h._start === xe(V._time) &&
          Xl(y) &&
          r6(xa(h)) &&
          V.data !== "nested")) &&
        ((h._tTime = -fe), h.render(Math.max(0, -_) || 0)),
      C && c_(xa(h), C),
      h
    );
  }
  var u = n.prototype;
  return (
    (u.render = function (r, f, o) {
      var h = this._time,
        g = this._tDur,
        p = this._dur,
        _ = r < 0,
        y = r > g - fe && !_ ? g : r < fe ? 0 : r,
        S,
        b,
        z,
        T,
        C,
        V,
        O,
        Q;
      if (!p) c6(this, r, f, o);
      else if (
        y !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== _) ||
        this._lazy
      ) {
        if (((S = y), (Q = this.timeline), this._repeat)) {
          if (((T = p + this._rDelay), this._repeat < -1 && _))
            return this.totalTime(T * 100 + r, f, o);
          if (
            ((S = xe(y % T)),
            y === g
              ? ((z = this._repeat), (S = p))
              : ((C = xe(y / T)),
                (z = ~~C),
                z && z === C ? ((S = p), z--) : S > p && (S = p)),
            (V = this._yoyo && z & 1),
            V && (S = p - S),
            (C = $u(this._tTime, T)),
            S === h && !o && this._initted && z === C)
          )
            return (this._tTime = y), this;
          z !== C &&
            this.vars.repeatRefresh &&
            !V &&
            !this._lock &&
            S !== T &&
            this._initted &&
            ((this._lock = o = 1),
            (this.render(xe(T * z), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (f_(this, _ ? r : S, o, f, y)) return (this._tTime = 0), this;
          if (h !== this._time && !(o && this.vars.repeatRefresh && z !== C))
            return this;
          if (p !== this._dur) return this.render(r, f, o);
        }
        if (this._rEase) {
          var B = S < h;
          if (B !== this._inv) {
            var X = B ? h : p - h;
            (this._inv = B),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = h),
              (this._invRecip = X ? (B ? -1 : 1) / X : 0),
              (this._invScale = B ? -this.ratio : 1 - this.ratio),
              (this._invEase = B ? this._rEase : this._ease);
          }
          this.ratio = O =
            this._invRatio +
            this._invScale *
              this._invEase((S - this._invTime) * this._invRecip);
        } else this.ratio = O = this._ease(S / p);
        if (
          (this._from && (this.ratio = O = 1 - O),
          (this._tTime = y),
          (this._time = S),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !h && y && !f && !C && (fn(this, "onStart"), this._tTime !== y))
        )
          return this;
        for (b = this._pt; b; ) b.r(O, b.d), (b = b._next);
        (Q && Q.render(r < 0 ? r : Q._dur * Q._ease(S / this._dur), f, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !f &&
            (_ && ah(this, r, f, o), fn(this, "onUpdate")),
          this._repeat &&
            z !== C &&
            this.vars.onRepeat &&
            !f &&
            this.parent &&
            fn(this, "onRepeat"),
          (y === this._tDur || !y) &&
            this._tTime === y &&
            (_ && !this._onUpdate && ah(this, r, !0, !0),
            (r || !p) &&
              ((y === this._tDur && this._ts > 0) || (!y && this._ts < 0)) &&
              hi(this, 1),
            !f &&
              !(_ && !h) &&
              (y || h || V) &&
              (fn(this, y === g ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(y < g && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (u.targets = function () {
      return this._targets;
    }),
    (u.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        d.prototype.invalidate.call(this, r)
      );
    }),
    (u.resetTo = function (r, f, o, h, g) {
      _s || sn.wake(), this._ts || this.play();
      var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        _;
      return (
        this._initted || Bh(this, p),
        (_ = this._ease(p / this._dur)),
        w6(this, r, f, o, h, _, p, g)
          ? this.resetTo(r, f, o, h, 1)
          : (Tf(this, 0),
            this.parent ||
              r_(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (u.kill = function (r, f) {
      if ((f === void 0 && (f = "all"), !r && (!f || f === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Jr(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!sl),
          this
        );
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, f, ai && ai.vars.overwrite !== !0)
            ._first || Jr(this),
          this.parent &&
            o !== this.timeline.totalDuration() &&
            Pu(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var h = this._targets,
        g = r ? Un(r) : h,
        p = this._ptLookup,
        _ = this._pt,
        y,
        S,
        b,
        z,
        T,
        C,
        V;
      if ((!f || f === "all") && i6(h, g))
        return f === "all" && (this._pt = 0), Jr(this);
      for (
        y = this._op = this._op || [],
          f !== "all" &&
            (ll(f) &&
              ((T = {}),
              Gl(f, function (O) {
                return (T[O] = 1);
              }),
              (f = T)),
            (f = D6(h, f))),
          V = h.length;
        V--;

      )
        if (~g.indexOf(h[V])) {
          (S = p[V]),
            f === "all"
              ? ((y[V] = f), (z = S), (b = {}))
              : ((b = y[V] = y[V] || {}), (z = f));
          for (T in z)
            (C = S && S[T]),
              C &&
                ((!("kill" in C.d) || C.d.kill(T) === !0) && bf(this, C, "_pt"),
                delete S[T]),
              b !== "all" && (b[T] = 1);
        }
      return this._initted && !this._pt && _ && Jr(this), this;
    }),
    (n.to = function (r, f) {
      return new n(r, f, arguments[2]);
    }),
    (n.from = function (r, f) {
      return ls(1, arguments);
    }),
    (n.delayedCall = function (r, f, o, h) {
      return new n(f, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: f,
        onReverseComplete: f,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: h,
      });
    }),
    (n.fromTo = function (r, f, o) {
      return ls(2, arguments);
    }),
    (n.set = function (r, f) {
      return (f.duration = 0), f.repeatDelay || (f.repeat = 0), new n(r, f);
    }),
    (n.killTweensOf = function (r, f, o) {
      return Ae.killTweensOf(r, f, o);
    }),
    n
  );
})(vs);
mn(ke.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Gl("staggerTo,staggerFrom,staggerFromTo", function (d) {
  ke[d] = function () {
    var n = new ql(),
      u = uh.call(arguments, 0);
    return u.splice(d === "staggerFromTo" ? 5 : 4, 0, 0), n[d].apply(n, u);
  };
});
var Yh = function (n, u, i) {
    return (n[u] = i);
  },
  z_ = function (n, u, i) {
    return n[u](i);
  },
  C6 = function (n, u, i, r) {
    return n[u](r.fp, i);
  },
  R6 = function (n, u, i) {
    return n.setAttribute(u, i);
  },
  Vh = function (n, u) {
    return Ce(n[u]) ? z_ : wh(n[u]) && n.setAttribute ? R6 : Yh;
  },
  w_ = function (n, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * n) * 1e6) / 1e6, u);
  },
  H6 = function (n, u) {
    return u.set(u.t, u.p, !!(u.s + u.c * n), u);
  },
  D_ = function (n, u) {
    var i = u._pt,
      r = "";
    if (!n && u.b) r = u.b;
    else if (n === 1 && u.e) r = u.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * n) : Math.round((i.s + i.c * n) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += u.c;
    }
    u.set(u.t, u.p, r, u);
  },
  Zh = function (n, u) {
    for (var i = u._pt; i; ) i.r(n, i.d), (i = i._next);
  },
  U6 = function (n, u, i, r) {
    for (var f = this._pt, o; f; )
      (o = f._next), f.p === r && f.modifier(n, u, i), (f = o);
  },
  j6 = function (n) {
    for (var u = this._pt, i, r; u; )
      (r = u._next),
        (u.p === n && !u.op) || u.op === n
          ? bf(this, u, "_pt")
          : u.dep || (i = 1),
        (u = r);
    return !i;
  },
  L6 = function (n, u, i, r) {
    r.mSet(n, u, r.m.call(r.tween, i, r.mt), r);
  },
  N_ = function (n) {
    for (var u = n._pt, i, r, f, o; u; ) {
      for (i = u._next, r = f; r && r.pr > u.pr; ) r = r._next;
      (u._prev = r ? r._prev : o) ? (u._prev._next = u) : (f = u),
        (u._next = r) ? (r._prev = u) : (o = u),
        (u = i);
    }
    n._pt = f;
  },
  Ql = (function () {
    function d(u, i, r, f, o, h, g, p, _) {
      (this.t = i),
        (this.s = f),
        (this.c = o),
        (this.p = r),
        (this.r = h || w_),
        (this.d = g || this),
        (this.set = p || Yh),
        (this.pr = _ || 0),
        (this._next = u),
        u && (u._prev = this);
    }
    var n = d.prototype;
    return (
      (n.modifier = function (i, r, f) {
        (this.mSet = this.mSet || this.set),
          (this.set = L6),
          (this.m = i),
          (this.mt = f),
          (this.tween = r);
      }),
      d
    );
  })();
Gl(
  Hh +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (d) {
    return (Rh[d] = 1);
  }
);
dn.TweenMax = dn.TweenLite = ke;
dn.TimelineLite = dn.TimelineMax = ql;
Ae = new ql({
  sortChildren: !1,
  defaults: ds,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
hn.stringFilter = T_;
var ki = [],
  Ic = {},
  B6 = [],
  ig = 0,
  Y6 = 0,
  G0 = function (n) {
    return (Ic[n] || B6).map(function (u) {
      return u();
    });
  },
  fh = function () {
    var n = Date.now(),
      u = [];
    n - ig > 2 &&
      (G0("matchMediaInit"),
      ki.forEach(function (i) {
        var r = i.queries,
          f = i.conditions,
          o,
          h,
          g,
          p;
        for (h in r)
          (o = $n.matchMedia(r[h]).matches),
            o && (g = 1),
            o !== f[h] && ((f[h] = o), (p = 1));
        p && (i.revert(), g && u.push(i));
      }),
      G0("matchMediaRevert"),
      u.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (ig = n),
      G0("matchMedia"));
  },
  C_ = (function () {
    function d(u, i) {
      (this.selector = i && rh(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Y6++),
        u && this.add(u);
    }
    var n = d.prototype;
    return (
      (n.add = function (i, r, f) {
        Ce(i) && ((f = r), (r = i), (i = Ce));
        var o = this,
          h = function () {
            var p = _e,
              _ = o.selector,
              y;
            return (
              p && p !== o && p.data.push(o),
              f && (o.selector = rh(f)),
              (_e = o),
              (y = r.apply(o, arguments)),
              Ce(y) && o._r.push(y),
              (_e = p),
              (o.selector = _),
              (o.isReverted = !1),
              y
            );
          };
        return (
          (o.last = h),
          i === Ce
            ? h(o, function (g) {
                return o.add(null, g);
              })
            : i
            ? (o[i] = h)
            : h
        );
      }),
      (n.ignore = function (i) {
        var r = _e;
        (_e = null), i(this), (_e = r);
      }),
      (n.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof d
              ? i.push.apply(i, r.getTweens())
              : r instanceof ke &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (i, r) {
        var f = this;
        if (
          (i
            ? (function () {
                for (var h = f.getTweens(), g = f.data.length, p; g--; )
                  (p = f.data[g]),
                    p.data === "isFlip" &&
                      (p.revert(),
                      p.getChildren(!0, !0, !1).forEach(function (_) {
                        return h.splice(h.indexOf(_), 1);
                      }));
                for (
                  h
                    .map(function (_) {
                      return {
                        g:
                          _._dur ||
                          _._delay ||
                          (_._sat && !_._sat.vars.immediateRender)
                            ? _.globalTime(0)
                            : -1 / 0,
                        t: _,
                      };
                    })
                    .sort(function (_, y) {
                      return y.g - _.g || -1 / 0;
                    })
                    .forEach(function (_) {
                      return _.t.revert(i);
                    }),
                    g = f.data.length;
                  g--;

                )
                  (p = f.data[g]),
                    p instanceof ql
                      ? p.data !== "nested" &&
                        (p.scrollTrigger && p.scrollTrigger.revert(), p.kill())
                      : !(p instanceof ke) && p.revert && p.revert(i);
                f._r.forEach(function (_) {
                  return _(i, f);
                }),
                  (f.isReverted = !0);
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = ki.length; o--; )
            ki[o].id === this.id && ki.splice(o, 1);
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      d
    );
  })(),
  V6 = (function () {
    function d(u) {
      (this.contexts = []), (this.scope = u), _e && _e.data.push(this);
    }
    var n = d.prototype;
    return (
      (n.add = function (i, r, f) {
        na(i) || (i = { matches: i });
        var o = new C_(0, f || this.scope),
          h = (o.conditions = {}),
          g,
          p,
          _;
        _e && !o.selector && (o.selector = _e.selector),
          this.contexts.push(o),
          (r = o.add("onMatch", r)),
          (o.queries = i);
        for (p in i)
          p === "all"
            ? (_ = 1)
            : ((g = $n.matchMedia(i[p])),
              g &&
                (ki.indexOf(o) < 0 && ki.push(o),
                (h[p] = g.matches) && (_ = 1),
                g.addListener
                  ? g.addListener(fh)
                  : g.addEventListener("change", fh)));
        return (
          _ &&
            r(o, function (y) {
              return o.add(null, y);
            }),
          this
        );
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      (n.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      d
    );
  })(),
  hf = {
    registerPlugin: function () {
      for (var n = arguments.length, u = new Array(n), i = 0; i < n; i++)
        u[i] = arguments[i];
      u.forEach(function (r) {
        return y_(r);
      });
    },
    timeline: function (n) {
      return new ql(n);
    },
    getTweensOf: function (n, u) {
      return Ae.getTweensOf(n, u);
    },
    getProperty: function (n, u, i, r) {
      ll(n) && (n = Un(n)[0]);
      var f = Xi(n || {}).get,
        o = i ? u_ : i_;
      return (
        i === "native" && (i = ""),
        n &&
          (u
            ? o(((un[u] && un[u].get) || f)(n, u, i, r))
            : function (h, g, p) {
                return o(((un[h] && un[h].get) || f)(n, h, g, p));
              })
      );
    },
    quickSetter: function (n, u, i) {
      if (((n = Un(n)), n.length > 1)) {
        var r = n.map(function (_) {
            return Kl.quickSetter(_, u, i);
          }),
          f = r.length;
        return function (_) {
          for (var y = f; y--; ) r[y](_);
        };
      }
      n = n[0] || {};
      var o = un[u],
        h = Xi(n),
        g = (h.harness && (h.harness.aliases || {})[u]) || u,
        p = o
          ? function (_) {
              var y = new o();
              (Zu._pt = 0),
                y.init(n, i ? _ + i : _, Zu, 0, [n]),
                y.render(1, y),
                Zu._pt && Zh(1, Zu);
            }
          : h.set(n, g);
      return o
        ? p
        : function (_) {
            return p(n, g, i ? _ + i : _, h, 1);
          };
    },
    quickTo: function (n, u, i) {
      var r,
        f = Kl.to(
          n,
          mn(
            ((r = {}), (r[u] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            i || {}
          )
        ),
        o = function (g, p, _) {
          return f.resetTo(u, g, p, _);
        };
      return (o.tween = f), o;
    },
    isTweening: function (n) {
      return Ae.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return n && n.ease && (n.ease = Qi(n.ease, ds.ease)), tg(ds, n || {});
    },
    config: function (n) {
      return tg(hn, n || {});
    },
    registerEffect: function (n) {
      var u = n.name,
        i = n.effect,
        r = n.plugins,
        f = n.defaults,
        o = n.extendTimeline;
      (r || "").split(",").forEach(function (h) {
        return (
          h && !un[h] && !dn[h] && ms(u + " effect requires " + h + " plugin.")
        );
      }),
        (V0[u] = function (h, g, p) {
          return i(Un(h), mn(g || {}, f), p);
        }),
        o &&
          (ql.prototype[u] = function (h, g, p) {
            return this.add(V0[u](h, na(g) ? g : (p = g) && {}, this), p);
          });
    },
    registerEase: function (n, u) {
      Xt[n] = Qi(u);
    },
    parseEase: function (n, u) {
      return arguments.length ? Qi(n, u) : Xt;
    },
    getById: function (n) {
      return Ae.getById(n);
    },
    exportRoot: function (n, u) {
      n === void 0 && (n = {});
      var i = new ql(n),
        r,
        f;
      for (
        i.smoothChildTiming = Xl(n.smoothChildTiming),
          Ae.remove(i),
          i._dp = 0,
          i._time = i._tTime = Ae._time,
          r = Ae._first;
        r;

      )
        (f = r._next),
          (u ||
            !(
              !r._dur &&
              r instanceof ke &&
              r.vars.onComplete === r._targets[0]
            )) &&
            In(i, r, r._start - r._delay),
          (r = f);
      return In(Ae, i, 0), i;
    },
    context: function (n, u) {
      return n ? new C_(n, u) : _e;
    },
    matchMedia: function (n) {
      return new V6(n);
    },
    matchMediaRefresh: function () {
      return (
        ki.forEach(function (n) {
          var u = n.conditions,
            i,
            r;
          for (r in u) u[r] && ((u[r] = !1), (i = 1));
          i && n.revert();
        }) || fh()
      );
    },
    addEventListener: function (n, u) {
      var i = Ic[n] || (Ic[n] = []);
      ~i.indexOf(u) || i.push(u);
    },
    removeEventListener: function (n, u) {
      var i = Ic[n],
        r = i && i.indexOf(u);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: _6,
      wrapYoyo: v6,
      distribute: d_,
      random: p_,
      snap: m_,
      normalize: g6,
      getUnit: vl,
      clamp: h6,
      splitColor: b_,
      toArray: Un,
      selector: rh,
      mapRange: __,
      pipe: m6,
      unitize: p6,
      interpolate: y6,
      shuffle: h_,
    },
    install: t_,
    effects: V0,
    ticker: sn,
    updateRoot: ql.updateRoot,
    plugins: un,
    globalTimeline: Ae,
    core: {
      PropTween: Ql,
      globals: e_,
      Tween: ke,
      Timeline: ql,
      Animation: vs,
      getCache: Xi,
      _removeLinkedListItem: bf,
      reverting: function () {
        return sl;
      },
      context: function (n) {
        return n && _e && (_e.data.push(n), (n._ctx = _e)), _e;
      },
      suppressOverwrites: function (n) {
        return (zh = n);
      },
    },
  };
Gl("to,from,fromTo,delayedCall,set,killTweensOf", function (d) {
  return (hf[d] = ke[d]);
});
sn.add(ql.updateRoot);
Zu = hf.to({}, { duration: 0 });
var Z6 = function (n, u) {
    for (var i = n._pt; i && i.p !== u && i.op !== u && i.fp !== u; )
      i = i._next;
    return i;
  },
  q6 = function (n, u) {
    var i = n._targets,
      r,
      f,
      o;
    for (r in u)
      for (f = i.length; f--; )
        (o = n._ptLookup[f][r]),
          o &&
            (o = o.d) &&
            (o._pt && (o = Z6(o, r)),
            o && o.modifier && o.modifier(u[r], n, i[f], r));
  },
  Q0 = function (n, u) {
    return {
      name: n,
      headless: 1,
      rawVars: 1,
      init: function (r, f, o) {
        o._onInit = function (h) {
          var g, p;
          if (
            (ll(f) &&
              ((g = {}),
              Gl(f, function (_) {
                return (g[_] = 1);
              }),
              (f = g)),
            u)
          ) {
            g = {};
            for (p in f) g[p] = u(f[p]);
            f = g;
          }
          q6(h, f);
        };
      },
    };
  },
  Kl =
    hf.registerPlugin(
      {
        name: "attr",
        init: function (n, u, i, r, f) {
          var o, h, g;
          this.tween = i;
          for (o in u)
            (g = n.getAttribute(o) || ""),
              (h = this.add(
                n,
                "setAttribute",
                (g || 0) + "",
                u[o],
                r,
                f,
                0,
                0,
                o
              )),
              (h.op = o),
              (h.b = g),
              this._props.push(o);
        },
        render: function (n, u) {
          for (var i = u._pt; i; )
            sl ? i.set(i.t, i.p, i.b, i) : i.r(n, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (n, u) {
          for (var i = u.length; i--; )
            this.add(n, i, n[i] || 0, u[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Q0("roundProps", sh),
      Q0("modifiers"),
      Q0("snap", m_)
    ) || hf;
ke.version = ql.version = Kl.version = "3.15.0";
Ig = 1;
Dh() && Iu();
Xt.Power0;
Xt.Power1;
Xt.Power2;
Xt.Power3;
Xt.Power4;
Xt.Linear;
Xt.Quad;
Xt.Cubic;
Xt.Quart;
Xt.Quint;
Xt.Strong;
Xt.Elastic;
Xt.Back;
Xt.SteppedEase;
Xt.Bounce;
Xt.Sine;
Xt.Expo;
Xt.Circ;
/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ug,
  ii,
  Gu,
  qh,
  Zi,
  rg,
  Xh,
  X6 = function () {
    return typeof window < "u";
  },
  Da = {},
  Bi = 180 / Math.PI,
  Qu = Math.PI / 180,
  Hu = Math.atan2,
  sg = 1e8,
  Gh = /([A-Z])/g,
  G6 = /(left|right|width|margin|padding|x)/i,
  Q6 = /[\s,\(]\S/,
  ta = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  oh = function (n, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u, u);
  },
  k6 = function (n, u) {
    return u.set(
      u.t,
      u.p,
      n === 1 ? u.e : Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u,
      u
    );
  },
  K6 = function (n, u) {
    return u.set(
      u.t,
      u.p,
      n ? Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u : u.b,
      u
    );
  },
  J6 = function (n, u) {
    return u.set(
      u.t,
      u.p,
      n === 1 ? u.e : n ? Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u : u.b,
      u
    );
  },
  F6 = function (n, u) {
    var i = u.s + u.c * n;
    u.set(u.t, u.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + u.u, u);
  },
  R_ = function (n, u) {
    return u.set(u.t, u.p, n ? u.e : u.b, u);
  },
  H_ = function (n, u) {
    return u.set(u.t, u.p, n !== 1 ? u.b : u.e, u);
  },
  W6 = function (n, u, i) {
    return (n.style[u] = i);
  },
  $6 = function (n, u, i) {
    return n.style.setProperty(u, i);
  },
  P6 = function (n, u, i) {
    return (n._gsap[u] = i);
  },
  I6 = function (n, u, i) {
    return (n._gsap.scaleX = n._gsap.scaleY = i);
  },
  t8 = function (n, u, i, r, f) {
    var o = n._gsap;
    (o.scaleX = o.scaleY = i), o.renderTransform(f, o);
  },
  e8 = function (n, u, i, r, f) {
    var o = n._gsap;
    (o[u] = i), o.renderTransform(f, o);
  },
  Me = "transform",
  kl = Me + "Origin",
  l8 = function d(n, u) {
    var i = this,
      r = this.target,
      f = r.style,
      o = r._gsap;
    if (n in Da && f) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        (n = ta[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (h) {
                return (i.tfm[h] = Aa(r, h));
              })
            : (this.tfm[n] = o.x ? o[n] : Aa(r, n)),
          n === kl && (this.tfm.zOrigin = o.zOrigin);
      else
        return ta.transform.split(",").forEach(function (h) {
          return d.call(i, h, u);
        });
      if (this.props.indexOf(Me) >= 0) return;
      o.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(kl, u, "")),
        (n = Me);
    }
    (f || u) && this.props.push(n, u, f[n]);
  },
  U_ = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  n8 = function () {
    var n = this.props,
      u = this.target,
      i = u.style,
      r = u._gsap,
      f,
      o;
    for (f = 0; f < n.length; f += 3)
      n[f + 1]
        ? n[f + 1] === 2
          ? u[n[f]](n[f + 2])
          : (u[n[f]] = n[f + 2])
        : n[f + 2]
        ? (i[n[f]] = n[f + 2])
        : i.removeProperty(
            n[f].substr(0, 2) === "--"
              ? n[f]
              : n[f].replace(Gh, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg &&
        (r.renderTransform(),
        u.setAttribute("data-svg-origin", this.svgo || "")),
        (f = Xh()),
        (!f || !f.isStart) &&
          !i[Me] &&
          (U_(i),
          r.zOrigin &&
            i[kl] &&
            ((i[kl] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  j_ = function (n, u) {
    var i = { target: n, props: [], revert: n8, save: l8 };
    return (
      n._gsap || Kl.core.getCache(n),
      u &&
        n.style &&
        n.nodeType &&
        u.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  L_,
  hh = function (n, u) {
    var i = ii.createElementNS
      ? ii.createElementNS(
          (u || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n
        )
      : ii.createElement(n);
    return i && i.style ? i : ii.createElement(n);
  },
  on = function d(n, u, i) {
    var r = getComputedStyle(n);
    return (
      r[u] ||
      r.getPropertyValue(u.replace(Gh, "-$1").toLowerCase()) ||
      r.getPropertyValue(u) ||
      (!i && d(n, tr(u) || u, 1)) ||
      ""
    );
  },
  cg = "O,Moz,ms,Ms,Webkit".split(","),
  tr = function (n, u, i) {
    var r = u || Zi,
      f = r.style,
      o = 5;
    if (n in f && !i) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      o-- && !(cg[o] + n in f);

    );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? cg[o] : "") + n;
  },
  dh = function () {
    X6() &&
      window.document &&
      ((ug = window),
      (ii = ug.document),
      (Gu = ii.documentElement),
      (Zi = hh("div") || { style: {} }),
      hh("div"),
      (Me = tr(Me)),
      (kl = Me + "Origin"),
      (Zi.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (L_ = !!tr("perspective")),
      (Xh = Kl.core.reverting),
      (qh = 1));
  },
  fg = function (n) {
    var u = n.ownerSVGElement,
      i = hh(
        "svg",
        (u && u.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      r = n.cloneNode(!0),
      f;
    (r.style.display = "block"), i.appendChild(r), Gu.appendChild(i);
    try {
      f = r.getBBox();
    } catch {}
    return i.removeChild(r), Gu.removeChild(i), f;
  },
  og = function (n, u) {
    for (var i = u.length; i--; )
      if (n.hasAttribute(u[i])) return n.getAttribute(u[i]);
  },
  B_ = function (n) {
    var u, i;
    try {
      u = n.getBBox();
    } catch {
      (u = fg(n)), (i = 1);
    }
    return (
      (u && (u.width || u.height)) || i || (u = fg(n)),
      u && !u.width && !u.x && !u.y
        ? {
            x: +og(n, ["x", "cx", "x1"]) || 0,
            y: +og(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : u
    );
  },
  Y_ = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && B_(n));
  },
  di = function (n, u) {
    if (u) {
      var i = n.style,
        r;
      u in Da && u !== kl && (u = Me),
        i.removeProperty
          ? ((r = u.substr(0, 2)),
            (r === "ms" || u.substr(0, 6) === "webkit") && (u = "-" + u),
            i.removeProperty(
              r === "--" ? u : u.replace(Gh, "-$1").toLowerCase()
            ))
          : i.removeAttribute(u);
    }
  },
  ui = function (n, u, i, r, f, o) {
    var h = new Ql(n._pt, u, i, 0, 1, o ? H_ : R_);
    return (n._pt = h), (h.b = r), (h.e = f), n._props.push(i), h;
  },
  hg = { deg: 1, rad: 1, turn: 1 },
  a8 = { grid: 1, flex: 1 },
  mi = function d(n, u, i, r) {
    var f = parseFloat(i) || 0,
      o = (i + "").trim().substr((f + "").length) || "px",
      h = Zi.style,
      g = G6.test(u),
      p = n.tagName.toLowerCase() === "svg",
      _ = (p ? "client" : "offset") + (g ? "Width" : "Height"),
      y = 100,
      S = r === "px",
      b = r === "%",
      z,
      T,
      C,
      V;
    if (r === o || !f || hg[r] || hg[o]) return f;
    if (
      (o !== "px" && !S && (f = d(n, u, i, "px")),
      (V = n.getCTM && Y_(n)),
      (b || o === "%") && (Da[u] || ~u.indexOf("adius")))
    )
      return (
        (z = V ? n.getBBox()[g ? "width" : "height"] : n[_]),
        Le(b ? (f / z) * y : (f / 100) * z)
      );
    if (
      ((h[g ? "width" : "height"] = y + (S ? o : r)),
      (T =
        (r !== "rem" && ~u.indexOf("adius")) ||
        (r === "em" && n.appendChild && !p)
          ? n
          : n.parentNode),
      V && (T = (n.ownerSVGElement || {}).parentNode),
      (!T || T === ii || !T.appendChild) && (T = ii.body),
      (C = T._gsap),
      C && b && C.width && g && C.time === sn.time && !C.uncache)
    )
      return Le((f / C.width) * y);
    if (b && (u === "height" || u === "width")) {
      var O = n.style[u];
      (n.style[u] = y + r), (z = n[_]), O ? (n.style[u] = O) : di(n, u);
    } else
      (b || o === "%") &&
        !a8[on(T, "display")] &&
        (h.position = on(n, "position")),
        T === n && (h.position = "static"),
        T.appendChild(Zi),
        (z = Zi[_]),
        T.removeChild(Zi),
        (h.position = "absolute");
    return (
      g && b && ((C = Xi(T)), (C.time = sn.time), (C.width = T[_])),
      Le(S ? (z * f) / y : z && f ? (y / z) * f : 0)
    );
  },
  Aa = function (n, u, i, r) {
    var f;
    return (
      qh || dh(),
      u in ta &&
        u !== "transform" &&
        ((u = ta[u]), ~u.indexOf(",") && (u = u.split(",")[0])),
      Da[u] && u !== "transform"
        ? ((f = bs(n, r)),
          (f =
            u !== "transformOrigin"
              ? f[u]
              : f.svg
              ? f.origin
              : mf(on(n, kl)) + " " + f.zOrigin + "px"))
        : ((f = n.style[u]),
          (!f || f === "auto" || r || ~(f + "").indexOf("calc(")) &&
            (f =
              (df[u] && df[u](n, u, i)) ||
              on(n, u) ||
              n_(n, u) ||
              (u === "opacity" ? 1 : 0))),
      i && !~(f + "").trim().indexOf(" ") ? mi(n, u, f, i) + i : f
    );
  },
  i8 = function (n, u, i, r) {
    if (!i || i === "none") {
      var f = tr(u, n, 1),
        o = f && on(n, f, 1);
      o && o !== i
        ? ((u = f), (i = o))
        : u === "borderColor" && (i = on(n, "borderTopColor"));
    }
    var h = new Ql(this._pt, n.style, u, 0, 1, D_),
      g = 0,
      p = 0,
      _,
      y,
      S,
      b,
      z,
      T,
      C,
      V,
      O,
      Q,
      B,
      X;
    if (
      ((h.b = i),
      (h.e = r),
      (i += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = on(n, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((T = n.style[u]),
        (n.style[u] = r),
        (r = on(n, u) || r),
        T ? (n.style[u] = T) : di(n, u)),
      (_ = [i, r]),
      T_(_),
      (i = _[0]),
      (r = _[1]),
      (S = i.match(Vu) || []),
      (X = r.match(Vu) || []),
      X.length)
    ) {
      for (; (y = Vu.exec(r)); )
        (C = y[0]),
          (O = r.substring(g, y.index)),
          z
            ? (z = (z + 1) % 5)
            : (O.substr(-5) === "rgba(" || O.substr(-5) === "hsla(") && (z = 1),
          C !== (T = S[p++] || "") &&
            ((b = parseFloat(T) || 0),
            (B = T.substr((b + "").length)),
            C.charAt(1) === "=" && (C = Xu(b, C) + B),
            (V = parseFloat(C)),
            (Q = C.substr((V + "").length)),
            (g = Vu.lastIndex - Q.length),
            Q ||
              ((Q = Q || hn.units[u] || B),
              g === r.length && ((r += Q), (h.e += Q))),
            B !== Q && (b = mi(n, u, T, Q) || 0),
            (h._pt = {
              _next: h._pt,
              p: O || p === 1 ? O : ",",
              s: b,
              c: V - b,
              m: (z && z < 4) || u === "zIndex" ? Math.round : 0,
            }));
      h.c = g < r.length ? r.substring(g, r.length) : "";
    } else h.r = u === "display" && r === "none" ? H_ : R_;
    return Pg.test(r) && (h.e = 0), (this._pt = h), h;
  },
  dg = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  u8 = function (n) {
    var u = n.split(" "),
      i = u[0],
      r = u[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((n = i), (i = r), (r = n)),
      (u[0] = dg[i] || i),
      (u[1] = dg[r] || r),
      u.join(" ")
    );
  },
  r8 = function (n, u) {
    if (u.tween && u.tween._time === u.tween._dur) {
      var i = u.t,
        r = i.style,
        f = u.u,
        o = i._gsap,
        h,
        g,
        p;
      if (f === "all" || f === !0) (r.cssText = ""), (g = 1);
      else
        for (f = f.split(","), p = f.length; --p > -1; )
          (h = f[p]),
            Da[h] && ((g = 1), (h = h === "transformOrigin" ? kl : Me)),
            di(i, h);
      g &&
        (di(i, Me),
        o &&
          (o.svg && i.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          bs(i, 1),
          (o.uncache = 1),
          U_(r)));
    }
  },
  df = {
    clearProps: function (n, u, i, r, f) {
      if (f.data !== "isFromStart") {
        var o = (n._pt = new Ql(n._pt, u, i, 0, 0, r8));
        return (o.u = r), (o.pr = -10), (o.tween = f), n._props.push(i), 1;
      }
    },
  },
  ys = [1, 0, 0, 1, 0, 0],
  V_ = {},
  Z_ = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  mg = function (n) {
    var u = on(n, Me);
    return Z_(u) ? ys : u.substr(7).match($g).map(Le);
  },
  Qh = function (n, u) {
    var i = n._gsap || Xi(n),
      r = n.style,
      f = mg(n),
      o,
      h,
      g,
      p;
    return i.svg && n.getAttribute("transform")
      ? ((g = n.transform.baseVal.consolidate().matrix),
        (f = [g.a, g.b, g.c, g.d, g.e, g.f]),
        f.join(",") === "1,0,0,1,0,0" ? ys : f)
      : (f === ys &&
          !n.offsetParent &&
          n !== Gu &&
          !i.svg &&
          ((g = r.display),
          (r.display = "block"),
          (o = n.parentNode),
          (!o || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((p = 1), (h = n.nextElementSibling), Gu.appendChild(n)),
          (f = mg(n)),
          g ? (r.display = g) : di(n, "display"),
          p &&
            (h
              ? o.insertBefore(n, h)
              : o
              ? o.appendChild(n)
              : Gu.removeChild(n))),
        u && f.length > 6 ? [f[0], f[1], f[4], f[5], f[12], f[13]] : f);
  },
  mh = function (n, u, i, r, f, o) {
    var h = n._gsap,
      g = f || Qh(n, !0),
      p = h.xOrigin || 0,
      _ = h.yOrigin || 0,
      y = h.xOffset || 0,
      S = h.yOffset || 0,
      b = g[0],
      z = g[1],
      T = g[2],
      C = g[3],
      V = g[4],
      O = g[5],
      Q = u.split(" "),
      B = parseFloat(Q[0]) || 0,
      X = parseFloat(Q[1]) || 0,
      P,
      x,
      Y,
      k;
    i
      ? g !== ys &&
        (x = b * C - z * T) &&
        ((Y = B * (C / x) + X * (-T / x) + (T * O - C * V) / x),
        (k = B * (-z / x) + X * (b / x) - (b * O - z * V) / x),
        (B = Y),
        (X = k))
      : ((P = B_(n)),
        (B = P.x + (~Q[0].indexOf("%") ? (B / 100) * P.width : B)),
        (X = P.y + (~(Q[1] || Q[0]).indexOf("%") ? (X / 100) * P.height : X))),
      r || (r !== !1 && h.smooth)
        ? ((V = B - p),
          (O = X - _),
          (h.xOffset = y + (V * b + O * T) - V),
          (h.yOffset = S + (V * z + O * C) - O))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = B),
      (h.yOrigin = X),
      (h.smooth = !!r),
      (h.origin = u),
      (h.originIsAbsolute = !!i),
      (n.style[kl] = "0px 0px"),
      o &&
        (ui(o, h, "xOrigin", p, B),
        ui(o, h, "yOrigin", _, X),
        ui(o, h, "xOffset", y, h.xOffset),
        ui(o, h, "yOffset", S, h.yOffset)),
      n.setAttribute("data-svg-origin", B + " " + X);
  },
  bs = function (n, u) {
    var i = n._gsap || new x_(n);
    if ("x" in i && !u && !i.uncache) return i;
    var r = n.style,
      f = i.scaleX < 0,
      o = "px",
      h = "deg",
      g = getComputedStyle(n),
      p = on(n, kl) || "0",
      _,
      y,
      S,
      b,
      z,
      T,
      C,
      V,
      O,
      Q,
      B,
      X,
      P,
      x,
      Y,
      k,
      W,
      rt,
      lt,
      at,
      ht,
      _t,
      H,
      K,
      et,
      ct,
      N,
      M,
      G,
      I,
      tt,
      st;
    return (
      (_ = y = S = T = C = V = O = Q = B = 0),
      (b = z = 1),
      (i.svg = !!(n.getCTM && Y_(n))),
      g.translate &&
        ((g.translate !== "none" ||
          g.scale !== "none" ||
          g.rotate !== "none") &&
          (r[Me] =
            (g.translate !== "none"
              ? "translate3d(" +
                (g.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (g.rotate !== "none" ? "rotate(" + g.rotate + ") " : "") +
            (g.scale !== "none"
              ? "scale(" + g.scale.split(" ").join(",") + ") "
              : "") +
            (g[Me] !== "none" ? g[Me] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (x = Qh(n, i.svg)),
      i.svg &&
        (i.uncache
          ? ((et = n.getBBox()),
            (p = i.xOrigin - et.x + "px " + (i.yOrigin - et.y) + "px"),
            (K = ""))
          : (K = !u && n.getAttribute("data-svg-origin")),
        mh(n, K || p, !!K || i.originIsAbsolute, i.smooth !== !1, x)),
      (X = i.xOrigin || 0),
      (P = i.yOrigin || 0),
      x !== ys &&
        ((rt = x[0]),
        (lt = x[1]),
        (at = x[2]),
        (ht = x[3]),
        (_ = _t = x[4]),
        (y = H = x[5]),
        x.length === 6
          ? ((b = Math.sqrt(rt * rt + lt * lt)),
            (z = Math.sqrt(ht * ht + at * at)),
            (T = rt || lt ? Hu(lt, rt) * Bi : 0),
            (O = at || ht ? Hu(at, ht) * Bi + T : 0),
            O && (z *= Math.abs(Math.cos(O * Qu))),
            i.svg &&
              ((_ -= X - (X * rt + P * at)), (y -= P - (X * lt + P * ht))))
          : ((st = x[6]),
            (I = x[7]),
            (N = x[8]),
            (M = x[9]),
            (G = x[10]),
            (tt = x[11]),
            (_ = x[12]),
            (y = x[13]),
            (S = x[14]),
            (Y = Hu(st, G)),
            (C = Y * Bi),
            Y &&
              ((k = Math.cos(-Y)),
              (W = Math.sin(-Y)),
              (K = _t * k + N * W),
              (et = H * k + M * W),
              (ct = st * k + G * W),
              (N = _t * -W + N * k),
              (M = H * -W + M * k),
              (G = st * -W + G * k),
              (tt = I * -W + tt * k),
              (_t = K),
              (H = et),
              (st = ct)),
            (Y = Hu(-at, G)),
            (V = Y * Bi),
            Y &&
              ((k = Math.cos(-Y)),
              (W = Math.sin(-Y)),
              (K = rt * k - N * W),
              (et = lt * k - M * W),
              (ct = at * k - G * W),
              (tt = ht * W + tt * k),
              (rt = K),
              (lt = et),
              (at = ct)),
            (Y = Hu(lt, rt)),
            (T = Y * Bi),
            Y &&
              ((k = Math.cos(Y)),
              (W = Math.sin(Y)),
              (K = rt * k + lt * W),
              (et = _t * k + H * W),
              (lt = lt * k - rt * W),
              (H = H * k - _t * W),
              (rt = K),
              (_t = et)),
            C &&
              Math.abs(C) + Math.abs(T) > 359.9 &&
              ((C = T = 0), (V = 180 - V)),
            (b = Le(Math.sqrt(rt * rt + lt * lt + at * at))),
            (z = Le(Math.sqrt(H * H + st * st))),
            (Y = Hu(_t, H)),
            (O = Math.abs(Y) > 2e-4 ? Y * Bi : 0),
            (B = tt ? 1 / (tt < 0 ? -tt : tt) : 0)),
        i.svg &&
          ((K = n.getAttribute("transform")),
          (i.forceCSS = n.setAttribute("transform", "") || !Z_(on(n, Me))),
          K && n.setAttribute("transform", K))),
      Math.abs(O) > 90 &&
        Math.abs(O) < 270 &&
        (f
          ? ((b *= -1), (O += T <= 0 ? 180 : -180), (T += T <= 0 ? 180 : -180))
          : ((z *= -1), (O += O <= 0 ? 180 : -180))),
      (u = u || i.uncache),
      (i.x =
        _ -
        ((i.xPercent =
          _ &&
          ((!u && i.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
          ? (n.offsetWidth * i.xPercent) / 100
          : 0) +
        o),
      (i.y =
        y -
        ((i.yPercent =
          y &&
          ((!u && i.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-y) ? -50 : 0)))
          ? (n.offsetHeight * i.yPercent) / 100
          : 0) +
        o),
      (i.z = S + o),
      (i.scaleX = Le(b)),
      (i.scaleY = Le(z)),
      (i.rotation = Le(T) + h),
      (i.rotationX = Le(C) + h),
      (i.rotationY = Le(V) + h),
      (i.skewX = O + h),
      (i.skewY = Q + h),
      (i.transformPerspective = B + o),
      (i.zOrigin = parseFloat(p.split(" ")[2]) || (!u && i.zOrigin) || 0) &&
        (r[kl] = mf(p)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = hn.force3D),
      (i.renderTransform = i.svg ? c8 : L_ ? q_ : s8),
      (i.uncache = 0),
      i
    );
  },
  mf = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  k0 = function (n, u, i) {
    var r = vl(u);
    return Le(parseFloat(u) + parseFloat(mi(n, "x", i + "px", r))) + r;
  },
  s8 = function (n, u) {
    (u.z = "0px"),
      (u.rotationY = u.rotationX = "0deg"),
      (u.force3D = 0),
      q_(n, u);
  },
  Ui = "0deg",
  Qr = "0px",
  ji = ") ",
  q_ = function (n, u) {
    var i = u || this,
      r = i.xPercent,
      f = i.yPercent,
      o = i.x,
      h = i.y,
      g = i.z,
      p = i.rotation,
      _ = i.rotationY,
      y = i.rotationX,
      S = i.skewX,
      b = i.skewY,
      z = i.scaleX,
      T = i.scaleY,
      C = i.transformPerspective,
      V = i.force3D,
      O = i.target,
      Q = i.zOrigin,
      B = "",
      X = (V === "auto" && n && n !== 1) || V === !0;
    if (Q && (y !== Ui || _ !== Ui)) {
      var P = parseFloat(_) * Qu,
        x = Math.sin(P),
        Y = Math.cos(P),
        k;
      (P = parseFloat(y) * Qu),
        (k = Math.cos(P)),
        (o = k0(O, o, x * k * -Q)),
        (h = k0(O, h, -Math.sin(P) * -Q)),
        (g = k0(O, g, Y * k * -Q + Q));
    }
    C !== Qr && (B += "perspective(" + C + ji),
      (r || f) && (B += "translate(" + r + "%, " + f + "%) "),
      (X || o !== Qr || h !== Qr || g !== Qr) &&
        (B +=
          g !== Qr || X
            ? "translate3d(" + o + ", " + h + ", " + g + ") "
            : "translate(" + o + ", " + h + ji),
      p !== Ui && (B += "rotate(" + p + ji),
      _ !== Ui && (B += "rotateY(" + _ + ji),
      y !== Ui && (B += "rotateX(" + y + ji),
      (S !== Ui || b !== Ui) && (B += "skew(" + S + ", " + b + ji),
      (z !== 1 || T !== 1) && (B += "scale(" + z + ", " + T + ji),
      (O.style[Me] = B || "translate(0, 0)");
  },
  c8 = function (n, u) {
    var i = u || this,
      r = i.xPercent,
      f = i.yPercent,
      o = i.x,
      h = i.y,
      g = i.rotation,
      p = i.skewX,
      _ = i.skewY,
      y = i.scaleX,
      S = i.scaleY,
      b = i.target,
      z = i.xOrigin,
      T = i.yOrigin,
      C = i.xOffset,
      V = i.yOffset,
      O = i.forceCSS,
      Q = parseFloat(o),
      B = parseFloat(h),
      X,
      P,
      x,
      Y,
      k;
    (g = parseFloat(g)),
      (p = parseFloat(p)),
      (_ = parseFloat(_)),
      _ && ((_ = parseFloat(_)), (p += _), (g += _)),
      g || p
        ? ((g *= Qu),
          (p *= Qu),
          (X = Math.cos(g) * y),
          (P = Math.sin(g) * y),
          (x = Math.sin(g - p) * -S),
          (Y = Math.cos(g - p) * S),
          p &&
            ((_ *= Qu),
            (k = Math.tan(p - _)),
            (k = Math.sqrt(1 + k * k)),
            (x *= k),
            (Y *= k),
            _ &&
              ((k = Math.tan(_)),
              (k = Math.sqrt(1 + k * k)),
              (X *= k),
              (P *= k))),
          (X = Le(X)),
          (P = Le(P)),
          (x = Le(x)),
          (Y = Le(Y)))
        : ((X = y), (Y = S), (P = x = 0)),
      ((Q && !~(o + "").indexOf("px")) || (B && !~(h + "").indexOf("px"))) &&
        ((Q = mi(b, "x", o, "px")), (B = mi(b, "y", h, "px"))),
      (z || T || C || V) &&
        ((Q = Le(Q + z - (z * X + T * x) + C)),
        (B = Le(B + T - (z * P + T * Y) + V))),
      (r || f) &&
        ((k = b.getBBox()),
        (Q = Le(Q + (r / 100) * k.width)),
        (B = Le(B + (f / 100) * k.height))),
      (k =
        "matrix(" + X + "," + P + "," + x + "," + Y + "," + Q + "," + B + ")"),
      b.setAttribute("transform", k),
      O && (b.style[Me] = k);
  },
  f8 = function (n, u, i, r, f) {
    var o = 360,
      h = ll(f),
      g = parseFloat(f) * (h && ~f.indexOf("rad") ? Bi : 1),
      p = g - r,
      _ = r + p + "deg",
      y,
      S;
    return (
      h &&
        ((y = f.split("_")[1]),
        y === "short" && ((p %= o), p !== p % (o / 2) && (p += p < 0 ? o : -o)),
        y === "cw" && p < 0
          ? (p = ((p + o * sg) % o) - ~~(p / o) * o)
          : y === "ccw" && p > 0 && (p = ((p - o * sg) % o) - ~~(p / o) * o)),
      (n._pt = S = new Ql(n._pt, u, i, r, p, k6)),
      (S.e = _),
      (S.u = "deg"),
      n._props.push(i),
      S
    );
  },
  pg = function (n, u) {
    for (var i in u) n[i] = u[i];
    return n;
  },
  o8 = function (n, u, i) {
    var r = pg({}, i._gsap),
      f = "perspective,force3D,transformOrigin,svgOrigin",
      o = i.style,
      h,
      g,
      p,
      _,
      y,
      S,
      b,
      z;
    r.svg
      ? ((p = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (o[Me] = u),
        (h = bs(i, 1)),
        di(i, Me),
        i.setAttribute("transform", p))
      : ((p = getComputedStyle(i)[Me]),
        (o[Me] = u),
        (h = bs(i, 1)),
        (o[Me] = p));
    for (g in Da)
      (p = r[g]),
        (_ = h[g]),
        p !== _ &&
          f.indexOf(g) < 0 &&
          ((b = vl(p)),
          (z = vl(_)),
          (y = b !== z ? mi(i, g, p, z) : parseFloat(p)),
          (S = parseFloat(_)),
          (n._pt = new Ql(n._pt, h, g, y, S - y, oh)),
          (n._pt.u = z || 0),
          n._props.push(g));
    pg(h, r);
  };
Gl("padding,margin,Width,Radius", function (d, n) {
  var u = "Top",
    i = "Right",
    r = "Bottom",
    f = "Left",
    o = (n < 3 ? [u, i, r, f] : [u + f, u + i, r + i, r + f]).map(function (h) {
      return n < 2 ? d + h : "border" + h + d;
    });
  df[n > 1 ? "border" + d : d] = function (h, g, p, _, y) {
    var S, b;
    if (arguments.length < 4)
      return (
        (S = o.map(function (z) {
          return Aa(h, z, p);
        })),
        (b = S.join(" ")),
        b.split(S[0]).length === 5 ? S[0] : b
      );
    (S = (_ + "").split(" ")),
      (b = {}),
      o.forEach(function (z, T) {
        return (b[z] = S[T] = S[T] || S[((T - 1) / 2) | 0]);
      }),
      h.init(g, b, y);
  };
});
var X_ = {
  name: "css",
  register: dh,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, u, i, r, f) {
    var o = this._props,
      h = n.style,
      g = i.vars.startAt,
      p,
      _,
      y,
      S,
      b,
      z,
      T,
      C,
      V,
      O,
      Q,
      B,
      X,
      P,
      x,
      Y,
      k;
    qh || dh(),
      (this.styles = this.styles || j_(n)),
      (Y = this.styles.props),
      (this.tween = i);
    for (T in u)
      if (T !== "autoRound" && ((_ = u[T]), !(un[T] && A_(T, u, i, r, n, f)))) {
        if (
          ((b = typeof _),
          (z = df[T]),
          b === "function" && ((_ = _.call(i, r, n, f)), (b = typeof _)),
          b === "string" && ~_.indexOf("random(") && (_ = gs(_)),
          z)
        )
          z(this, n, T, _, i) && (x = 1);
        else if (T.substr(0, 2) === "--")
          (p = (getComputedStyle(n).getPropertyValue(T) + "").trim()),
            (_ += ""),
            (fi.lastIndex = 0),
            fi.test(p) ||
              ((C = vl(p)),
              (V = vl(_)),
              V ? C !== V && (p = mi(n, T, p, V) + V) : C && (_ += C)),
            this.add(h, "setProperty", p, _, r, f, 0, 0, T),
            o.push(T),
            Y.push(T, 0, h[T]);
        else if (b !== "undefined") {
          if (
            (g && T in g
              ? ((p = typeof g[T] == "function" ? g[T].call(i, r, n, f) : g[T]),
                ll(p) && ~p.indexOf("random(") && (p = gs(p)),
                vl(p + "") ||
                  p === "auto" ||
                  (p += hn.units[T] || vl(Aa(n, T)) || ""),
                (p + "").charAt(1) === "=" && (p = Aa(n, T)))
              : (p = Aa(n, T)),
            (S = parseFloat(p)),
            (O = b === "string" && _.charAt(1) === "=" && _.substr(0, 2)),
            O && (_ = _.substr(2)),
            (y = parseFloat(_)),
            T in ta &&
              (T === "autoAlpha" &&
                (S === 1 && Aa(n, "visibility") === "hidden" && y && (S = 0),
                Y.push("visibility", 0, h.visibility),
                ui(
                  this,
                  h,
                  "visibility",
                  S ? "inherit" : "hidden",
                  y ? "inherit" : "hidden",
                  !y
                )),
              T !== "scale" &&
                T !== "transform" &&
                ((T = ta[T]), ~T.indexOf(",") && (T = T.split(",")[0]))),
            (Q = T in Da),
            Q)
          ) {
            if (
              (this.styles.save(T),
              (k = _),
              b === "string" && _.substring(0, 6) === "var(--")
            ) {
              if (
                ((_ = on(n, _.substring(4, _.indexOf(")")))),
                _.substring(0, 5) === "calc(")
              ) {
                var W = n.style.perspective;
                (n.style.perspective = _),
                  (_ = on(n, "perspective")),
                  W ? (n.style.perspective = W) : di(n, "perspective");
              }
              y = parseFloat(_);
            }
            if (
              (B ||
                ((X = n._gsap),
                (X.renderTransform && !u.parseTransform) ||
                  bs(n, u.parseTransform),
                (P = u.smoothOrigin !== !1 && X.smooth),
                (B = this._pt =
                  new Ql(this._pt, h, Me, 0, 1, X.renderTransform, X, 0, -1)),
                (B.dep = 1)),
              T === "scale")
            )
              (this._pt = new Ql(
                this._pt,
                X,
                "scaleY",
                X.scaleY,
                (O ? Xu(X.scaleY, O + y) : y) - X.scaleY || 0,
                oh
              )),
                (this._pt.u = 0),
                o.push("scaleY", T),
                (T += "X");
            else if (T === "transformOrigin") {
              Y.push(kl, 0, h[kl]),
                (_ = u8(_)),
                X.svg
                  ? mh(n, _, 0, P, 0, this)
                  : ((V = parseFloat(_.split(" ")[2]) || 0),
                    V !== X.zOrigin && ui(this, X, "zOrigin", X.zOrigin, V),
                    ui(this, h, T, mf(p), mf(_)));
              continue;
            } else if (T === "svgOrigin") {
              mh(n, _, 1, P, 0, this);
              continue;
            } else if (T in V_) {
              f8(this, X, T, S, O ? Xu(S, O + _) : _);
              continue;
            } else if (T === "smoothOrigin") {
              ui(this, X, "smooth", X.smooth, _);
              continue;
            } else if (T === "force3D") {
              X[T] = _;
              continue;
            } else if (T === "transform") {
              o8(this, _, n);
              continue;
            }
          } else T in h || (T = tr(T) || T);
          if (Q || ((y || y === 0) && (S || S === 0) && !Q6.test(_) && T in h))
            (C = (p + "").substr((S + "").length)),
              y || (y = 0),
              (V = vl(_) || (T in hn.units ? hn.units[T] : C)),
              C !== V && (S = mi(n, T, p, V)),
              (this._pt = new Ql(
                this._pt,
                Q ? X : h,
                T,
                S,
                (O ? Xu(S, O + y) : y) - S,
                !Q && (V === "px" || T === "zIndex") && u.autoRound !== !1
                  ? F6
                  : oh
              )),
              (this._pt.u = V || 0),
              Q && k !== _
                ? ((this._pt.b = p), (this._pt.e = k), (this._pt.r = J6))
                : C !== V && V !== "%" && ((this._pt.b = p), (this._pt.r = K6));
          else if (T in h) i8.call(this, n, T, p, O ? O + _ : _);
          else if (T in n) this.add(n, T, p || n[T], O ? O + _ : _, r, f);
          else if (T !== "parseTransform") {
            Ch(T, _);
            continue;
          }
          Q ||
            (T in h
              ? Y.push(T, 0, h[T])
              : typeof n[T] == "function"
              ? Y.push(T, 2, n[T]())
              : Y.push(T, 1, p || n[T])),
            o.push(T);
        }
      }
    x && N_(this);
  },
  render: function (n, u) {
    if (u.tween._time || !Xh())
      for (var i = u._pt; i; ) i.r(n, i.d), (i = i._next);
    else u.styles.revert();
  },
  get: Aa,
  aliases: ta,
  getSetter: function (n, u, i) {
    var r = ta[u];
    return (
      r && r.indexOf(",") < 0 && (u = r),
      u in Da && u !== kl && (n._gsap.x || Aa(n, "x"))
        ? i && rg === i
          ? u === "scale"
            ? I6
            : P6
          : (rg = i || {}) && (u === "scale" ? t8 : e8)
        : n.style && !wh(n.style[u])
        ? W6
        : ~u.indexOf("-")
        ? $6
        : Vh(n, u)
    );
  },
  core: { _removeProperty: di, _getMatrix: Qh },
};
Kl.utils.checkPrefix = tr;
Kl.core.getStyleSaver = j_;
(function (d, n, u, i) {
  var r = Gl(d + "," + n + "," + u, function (f) {
    Da[f] = 1;
  });
  Gl(n, function (f) {
    (hn.units[f] = "deg"), (V_[f] = 1);
  }),
    (ta[r[13]] = d + "," + n),
    Gl(i, function (f) {
      var o = f.split(":");
      ta[o[1]] = r[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Gl(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (d) {
    hn.units[d] = "px";
  }
);
Kl.registerPlugin(X_);
var Vl = Kl.registerPlugin(X_) || Kl;
Vl.core.Tween;
function h8(d, n) {
  for (var u = 0; u < n.length; u++) {
    var i = n[u];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(d, i.key, i);
  }
}
function d8(d, n, u) {
  return n && h8(d.prototype, n), d;
}
/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var rl,
  tf,
  cn,
  ri,
  si,
  ku,
  G_,
  Yi,
  Ku,
  Q_,
  Oa,
  Zn,
  k_,
  K_ = function () {
    return (
      rl ||
      (typeof window < "u" && (rl = window.gsap) && rl.registerPlugin && rl)
    );
  },
  J_ = 1,
  qu = [],
  jt = [],
  la = [],
  as = Date.now,
  ph = function (n, u) {
    return u;
  },
  m8 = function () {
    var n = Ku.core,
      u = n.bridge || {},
      i = n._scrollers,
      r = n._proxies;
    i.push.apply(i, jt),
      r.push.apply(r, la),
      (jt = i),
      (la = r),
      (ph = function (o, h) {
        return u[o](h);
      });
  },
  oi = function (n, u) {
    return ~la.indexOf(n) && la[la.indexOf(n) + 1][u];
  },
  is = function (n) {
    return !!~Q_.indexOf(n);
  },
  Ml = function (n, u, i, r, f) {
    return n.addEventListener(u, i, { passive: r !== !1, capture: !!f });
  },
  Al = function (n, u, i, r) {
    return n.removeEventListener(u, i, !!r);
  },
  Lc = "scrollLeft",
  Bc = "scrollTop",
  gh = function () {
    return (Oa && Oa.isPressed) || jt.cache++;
  },
  pf = function (n, u) {
    var i = function r(f) {
      if (f || f === 0) {
        J_ && (cn.history.scrollRestoration = "manual");
        var o = Oa && Oa.isPressed;
        (f = r.v = Math.round(f) || (Oa && Oa.iOS ? 1 : 0)),
          n(f),
          (r.cacheID = jt.cache),
          o && ph("ss", f);
      } else
        (u || jt.cache !== r.cacheID || ph("ref")) &&
          ((r.cacheID = jt.cache), (r.v = n()));
      return r.v + r.offset;
    };
    return (i.offset = 0), n && i;
  },
  Dl = {
    s: Lc,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: pf(function (d) {
      return arguments.length
        ? cn.scrollTo(d, Pe.sc())
        : cn.pageXOffset || ri[Lc] || si[Lc] || ku[Lc] || 0;
    }),
  },
  Pe = {
    s: Bc,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Dl,
    sc: pf(function (d) {
      return arguments.length
        ? cn.scrollTo(Dl.sc(), d)
        : cn.pageYOffset || ri[Bc] || si[Bc] || ku[Bc] || 0;
    }),
  },
  Zl = function (n, u) {
    return (
      ((u && u._ctx && u._ctx.selector) || rl.utils.toArray)(n)[0] ||
      (typeof n == "string" && rl.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  p8 = function (n, u) {
    for (var i = u.length; i--; ) if (u[i] === n || u[i].contains(n)) return !0;
    return !1;
  },
  pi = function (n, u) {
    var i = u.s,
      r = u.sc;
    is(n) && (n = ri.scrollingElement || si);
    var f = jt.indexOf(n),
      o = r === Pe.sc ? 1 : 2;
    !~f && (f = jt.push(n) - 1), jt[f + o] || Ml(n, "scroll", gh);
    var h = jt[f + o],
      g =
        h ||
        (jt[f + o] =
          pf(oi(n, i), !0) ||
          (is(n)
            ? r
            : pf(function (p) {
                return arguments.length ? (n[i] = p) : n[i];
              })));
    return (
      (g.target = n),
      h || (g.smooth = rl.getProperty(n, "scrollBehavior") === "smooth"),
      g
    );
  },
  _h = function (n, u, i) {
    var r = n,
      f = n,
      o = as(),
      h = o,
      g = u || 50,
      p = Math.max(500, g * 3),
      _ = function (z, T) {
        var C = as();
        T || C - o > g
          ? ((f = r), (r = z), (h = o), (o = C))
          : i
          ? (r += z)
          : (r = f + ((z - f) / (C - h)) * (o - h));
      },
      y = function () {
        (f = r = i ? 0 : r), (h = o = 0);
      },
      S = function (z) {
        var T = h,
          C = f,
          V = as();
        return (
          (z || z === 0) && z !== r && _(z),
          o === h || V - h > p
            ? 0
            : ((r + (i ? C : -C)) / ((i ? V : o) - T)) * 1e3
        );
      };
    return { update: _, reset: y, getVelocity: S };
  },
  kr = function (n, u) {
    return (
      u && !n._gsapAllow && n.cancelable !== !1 && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  gg = function (n) {
    var u = Math.max.apply(Math, n),
      i = Math.min.apply(Math, n);
    return Math.abs(u) >= Math.abs(i) ? u : i;
  },
  F_ = function () {
    (Ku = rl.core.globals().ScrollTrigger), Ku && Ku.core && m8();
  },
  W_ = function (n) {
    return (
      (rl = n || K_()),
      !tf &&
        rl &&
        typeof document < "u" &&
        document.body &&
        ((cn = window),
        (ri = document),
        (si = ri.documentElement),
        (ku = ri.body),
        (Q_ = [cn, ri, si, ku]),
        rl.utils.clamp,
        (k_ = rl.core.context || function () {}),
        (Yi = "onpointerenter" in ku ? "pointer" : "mouse"),
        (G_ = Be.isTouch =
          cn.matchMedia &&
          cn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in cn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Zn = Be.eventTypes =
          (
            "ontouchstart" in si
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in si
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (J_ = 0);
        }, 500),
        (tf = 1)),
      Ku || F_(),
      tf
    );
  };
Dl.op = Pe;
jt.cache = 0;
var Be = (function () {
  function d(u) {
    this.init(u);
  }
  var n = d.prototype;
  return (
    (n.init = function (i) {
      tf || W_(rl) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ku || F_();
      var r = i.tolerance,
        f = i.dragMinimum,
        o = i.type,
        h = i.target,
        g = i.lineHeight,
        p = i.debounce,
        _ = i.preventDefault,
        y = i.onStop,
        S = i.onStopDelay,
        b = i.ignore,
        z = i.wheelSpeed,
        T = i.event,
        C = i.onDragStart,
        V = i.onDragEnd,
        O = i.onDrag,
        Q = i.onPress,
        B = i.onRelease,
        X = i.onRight,
        P = i.onLeft,
        x = i.onUp,
        Y = i.onDown,
        k = i.onChangeX,
        W = i.onChangeY,
        rt = i.onChange,
        lt = i.onToggleX,
        at = i.onToggleY,
        ht = i.onHover,
        _t = i.onHoverEnd,
        H = i.onMove,
        K = i.ignoreCheck,
        et = i.isNormalizer,
        ct = i.onGestureStart,
        N = i.onGestureEnd,
        M = i.onWheel,
        G = i.onEnable,
        I = i.onDisable,
        tt = i.onClick,
        st = i.scrollSpeed,
        ft = i.capture,
        dt = i.allowClicks,
        zt = i.lockAxis,
        Tt = i.onLockAxis;
      (this.target = h = Zl(h) || si),
        (this.vars = i),
        b && (b = rl.utils.toArray(b)),
        (r = r || 1e-9),
        (f = f || 0),
        (z = z || 1),
        (st = st || 1),
        (o = o || "wheel,touch,pointer"),
        (p = p !== !1),
        g || (g = parseFloat(cn.getComputedStyle(ku).lineHeight) || 22);
      var Re,
        Wt,
        ve,
        Et,
        kt,
        ye,
        Ke,
        Z = this,
        Je = 0,
        cl = 0,
        Nl = i.passive || (!_ && i.passive !== !1),
        Pt = pi(h, Dl),
        fl = pi(h, Pe),
        It = Pt(),
        Zt = fl(),
        te =
          ~o.indexOf("touch") &&
          !~o.indexOf("pointer") &&
          Zn[0] === "pointerdown",
        Oe = is(h),
        ee = h.ownerDocument || ri,
        ol = [0, 0, 0],
        Cl = [0, 0, 0],
        pn = 0,
        _i = function () {
          return (pn = as());
        },
        ze = function (mt, Qt) {
          return (
            ((Z.event = mt) && b && p8(mt.target, b)) ||
            (Qt && te && mt.pointerType !== "touch") ||
            (K && K(mt, Qt))
          );
        },
        qn = function () {
          Z._vx.reset(), Z._vy.reset(), Wt.pause(), y && y(Z);
        },
        be = function () {
          var mt = (Z.deltaX = gg(ol)),
            Qt = (Z.deltaY = gg(Cl)),
            nt = Math.abs(mt) >= r,
            St = Math.abs(Qt) >= r;
          rt && (nt || St) && rt(Z, mt, Qt, ol, Cl),
            nt &&
              (X && Z.deltaX > 0 && X(Z),
              P && Z.deltaX < 0 && P(Z),
              k && k(Z),
              lt && Z.deltaX < 0 != Je < 0 && lt(Z),
              (Je = Z.deltaX),
              (ol[0] = ol[1] = ol[2] = 0)),
            St &&
              (Y && Z.deltaY > 0 && Y(Z),
              x && Z.deltaY < 0 && x(Z),
              W && W(Z),
              at && Z.deltaY < 0 != cl < 0 && at(Z),
              (cl = Z.deltaY),
              (Cl[0] = Cl[1] = Cl[2] = 0)),
            (Et || ve) &&
              (H && H(Z),
              ve && (C && ve === 1 && C(Z), O && O(Z), (ve = 0)),
              (Et = !1)),
            ye && !(ye = !1) && Tt && Tt(Z),
            kt && (M(Z), (kt = !1)),
            (Re = 0);
        },
        Sl = function (mt, Qt, nt) {
          (ol[nt] += mt),
            (Cl[nt] += Qt),
            Z._vx.update(mt),
            Z._vy.update(Qt),
            p ? Re || (Re = requestAnimationFrame(be)) : be();
        },
        Ye = function (mt, Qt) {
          zt &&
            !Ke &&
            ((Z.axis = Ke = Math.abs(mt) > Math.abs(Qt) ? "x" : "y"),
            (ye = !0)),
            Ke !== "y" && ((ol[2] += mt), Z._vx.update(mt, !0)),
            Ke !== "x" && ((Cl[2] += Qt), Z._vy.update(Qt, !0)),
            p ? Re || (Re = requestAnimationFrame(be)) : be();
        },
        Xn = function (mt) {
          if (!ze(mt, 1)) {
            mt = kr(mt, _);
            var Qt = mt.clientX,
              nt = mt.clientY,
              St = Qt - Z.x,
              pt = nt - Z.y,
              yt = Z.isDragging;
            (Z.x = Qt),
              (Z.y = nt),
              (yt ||
                ((St || pt) &&
                  (Math.abs(Z.startX - Qt) >= f ||
                    Math.abs(Z.startY - nt) >= f))) &&
                (ve || (ve = yt ? 2 : 1),
                yt || (Z.isDragging = !0),
                Ye(St, pt));
          }
        },
        aa = (Z.onPress = function (bt) {
          ze(bt, 1) ||
            (bt && bt.button) ||
            ((Z.axis = Ke = null),
            Wt.pause(),
            (Z.isPressed = !0),
            (bt = kr(bt)),
            (Je = cl = 0),
            (Z.startX = Z.x = bt.clientX),
            (Z.startY = Z.y = bt.clientY),
            Z._vx.reset(),
            Z._vy.reset(),
            Ml(et ? h : ee, Zn[1], Xn, Nl, !0),
            (Z.deltaX = Z.deltaY = 0),
            Q && Q(Z));
        }),
        wt = (Z.onRelease = function (bt) {
          if (!ze(bt, 1)) {
            Al(et ? h : ee, Zn[1], Xn, !0);
            var mt = !isNaN(Z.y - Z.startY),
              Qt = Z.isDragging,
              nt =
                Qt &&
                (Math.abs(Z.x - Z.startX) > 3 || Math.abs(Z.y - Z.startY) > 3),
              St = kr(bt);
            !nt &&
              mt &&
              (Z._vx.reset(),
              Z._vy.reset(),
              _ &&
                dt &&
                rl.delayedCall(0.08, function () {
                  if (as() - pn > 300 && !bt.defaultPrevented) {
                    if (bt.target.click) bt.target.click();
                    else if (ee.createEvent) {
                      var pt = ee.createEvent("MouseEvents");
                      pt.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        cn,
                        1,
                        St.screenX,
                        St.screenY,
                        St.clientX,
                        St.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        bt.target.dispatchEvent(pt);
                    }
                  }
                })),
              (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
              y && Qt && !et && Wt.restart(!0),
              ve && be(),
              V && Qt && V(Z),
              B && B(Z, nt);
          }
        }),
        gn = function (mt) {
          return (
            mt.touches &&
            mt.touches.length > 1 &&
            (Z.isGesturing = !0) &&
            ct(mt, Z.isDragging)
          );
        },
        hl = function () {
          return (Z.isGesturing = !1) || N(Z);
        },
        dl = function (mt) {
          if (!ze(mt)) {
            var Qt = Pt(),
              nt = fl();
            Sl((Qt - It) * st, (nt - Zt) * st, 1),
              (It = Qt),
              (Zt = nt),
              y && Wt.restart(!0);
          }
        },
        Fe = function (mt) {
          if (!ze(mt)) {
            (mt = kr(mt, _)), M && (kt = !0);
            var Qt =
              (mt.deltaMode === 1
                ? g
                : mt.deltaMode === 2
                ? cn.innerHeight
                : 1) * z;
            Sl(mt.deltaX * Qt, mt.deltaY * Qt, 0), y && !et && Wt.restart(!0);
          }
        },
        _n = function (mt) {
          if (!ze(mt)) {
            var Qt = mt.clientX,
              nt = mt.clientY,
              St = Qt - Z.x,
              pt = nt - Z.y;
            (Z.x = Qt),
              (Z.y = nt),
              (Et = !0),
              y && Wt.restart(!0),
              (St || pt) && Ye(St, pt);
          }
        },
        vn = function (mt) {
          (Z.event = mt), ht(Z);
        },
        Ln = function (mt) {
          (Z.event = mt), _t(Z);
        },
        Ca = function (mt) {
          return ze(mt) || (kr(mt, _) && tt(Z));
        };
      (Wt = Z._dc = rl.delayedCall(S || 0.25, qn).pause()),
        (Z.deltaX = Z.deltaY = 0),
        (Z._vx = _h(0, 50, !0)),
        (Z._vy = _h(0, 50, !0)),
        (Z.scrollX = Pt),
        (Z.scrollY = fl),
        (Z.isDragging = Z.isGesturing = Z.isPressed = !1),
        k_(this),
        (Z.enable = function (bt) {
          return (
            Z.isEnabled ||
              (Ml(Oe ? ee : h, "scroll", gh),
              o.indexOf("scroll") >= 0 && Ml(Oe ? ee : h, "scroll", dl, Nl, ft),
              o.indexOf("wheel") >= 0 && Ml(h, "wheel", Fe, Nl, ft),
              ((o.indexOf("touch") >= 0 && G_) || o.indexOf("pointer") >= 0) &&
                (Ml(h, Zn[0], aa, Nl, ft),
                Ml(ee, Zn[2], wt),
                Ml(ee, Zn[3], wt),
                dt && Ml(h, "click", _i, !0, !0),
                tt && Ml(h, "click", Ca),
                ct && Ml(ee, "gesturestart", gn),
                N && Ml(ee, "gestureend", hl),
                ht && Ml(h, Yi + "enter", vn),
                _t && Ml(h, Yi + "leave", Ln),
                H && Ml(h, Yi + "move", _n)),
              (Z.isEnabled = !0),
              (Z.isDragging = Z.isGesturing = Z.isPressed = Et = ve = !1),
              Z._vx.reset(),
              Z._vy.reset(),
              (It = Pt()),
              (Zt = fl()),
              bt && bt.type && aa(bt),
              G && G(Z)),
            Z
          );
        }),
        (Z.disable = function () {
          Z.isEnabled &&
            (qu.filter(function (bt) {
              return bt !== Z && is(bt.target);
            }).length || Al(Oe ? ee : h, "scroll", gh),
            Z.isPressed &&
              (Z._vx.reset(), Z._vy.reset(), Al(et ? h : ee, Zn[1], Xn, !0)),
            Al(Oe ? ee : h, "scroll", dl, ft),
            Al(h, "wheel", Fe, ft),
            Al(h, Zn[0], aa, ft),
            Al(ee, Zn[2], wt),
            Al(ee, Zn[3], wt),
            Al(h, "click", _i, !0),
            Al(h, "click", Ca),
            Al(ee, "gesturestart", gn),
            Al(ee, "gestureend", hl),
            Al(h, Yi + "enter", vn),
            Al(h, Yi + "leave", Ln),
            Al(h, Yi + "move", _n),
            (Z.isEnabled = Z.isPressed = Z.isDragging = !1),
            I && I(Z));
        }),
        (Z.kill = Z.revert =
          function () {
            Z.disable();
            var bt = qu.indexOf(Z);
            bt >= 0 && qu.splice(bt, 1), Oa === Z && (Oa = 0);
          }),
        qu.push(Z),
        et && is(h) && (Oa = Z),
        Z.enable(T);
    }),
    d8(d, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    d
  );
})();
Be.version = "3.15.0";
Be.create = function (d) {
  return new Be(d);
};
Be.register = W_;
Be.getAll = function () {
  return qu.slice();
};
Be.getById = function (d) {
  return qu.filter(function (n) {
    return n.vars.id === d;
  })[0];
};
K_() && rl.registerPlugin(Be);
/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ut,
  Bu,
  Ut,
  ae,
  rn,
  $t,
  kh,
  gf,
  Ss,
  us,
  Wr,
  Yc,
  pl,
  Ef,
  vh,
  zl,
  _g,
  vg,
  Yu,
  $_,
  K0,
  P_,
  Ol,
  yh,
  I_,
  t2,
  ni,
  bh,
  Kh,
  Ju,
  Jh,
  rs,
  Sh,
  J0,
  Vc = 1,
  _l = Date.now,
  F0 = _l(),
  jn = 0,
  $r = 0,
  yg = function (n, u, i) {
    var r = an(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return (i["_" + u + "Clamp"] = r), r ? n.substr(6, n.length - 7) : n;
  },
  bg = function (n, u) {
    return u && (!an(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  g8 = function d() {
    return $r && requestAnimationFrame(d);
  },
  Sg = function () {
    return (Ef = 1);
  },
  Tg = function () {
    return (Ef = 0);
  },
  Pn = function (n) {
    return n;
  },
  Pr = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  e2 = function () {
    return typeof window < "u";
  },
  l2 = function () {
    return ut || (e2() && (ut = window.gsap) && ut.registerPlugin && ut);
  },
  Wi = function (n) {
    return !!~kh.indexOf(n);
  },
  n2 = function (n) {
    return (
      (n === "Height" ? Jh : Ut["inner" + n]) ||
      rn["client" + n] ||
      $t["client" + n]
    );
  },
  a2 = function (n) {
    return (
      oi(n, "getBoundingClientRect") ||
      (Wi(n)
        ? function () {
            return (uf.width = Ut.innerWidth), (uf.height = Jh), uf;
          }
        : function () {
            return Ma(n);
          })
    );
  },
  _8 = function (n, u, i) {
    var r = i.d,
      f = i.d2,
      o = i.a;
    return (o = oi(n, "getBoundingClientRect"))
      ? function () {
          return o()[r];
        }
      : function () {
          return (u ? n2(f) : n["client" + f]) || 0;
        };
  },
  v8 = function (n, u) {
    return !u || ~la.indexOf(n)
      ? a2(n)
      : function () {
          return uf;
        };
  },
  ea = function (n, u) {
    var i = u.s,
      r = u.d2,
      f = u.d,
      o = u.a;
    return Math.max(
      0,
      (i = "scroll" + r) && (o = oi(n, i))
        ? o() - a2(n)()[f]
        : Wi(n)
        ? (rn[i] || $t[i]) - n2(r)
        : n[i] - n["offset" + r]
    );
  },
  Zc = function (n, u) {
    for (var i = 0; i < Yu.length; i += 3)
      (!u || ~u.indexOf(Yu[i + 1])) && n(Yu[i], Yu[i + 1], Yu[i + 2]);
  },
  an = function (n) {
    return typeof n == "string";
  },
  yl = function (n) {
    return typeof n == "function";
  },
  Ir = function (n) {
    return typeof n == "number";
  },
  Vi = function (n) {
    return typeof n == "object";
  },
  Kr = function (n, u, i) {
    return n && n.progress(u ? 0 : 1) && i && n.pause();
  },
  Uu = function (n, u, i) {
    if (n.enabled) {
      var r = n._ctx
        ? n._ctx.add(function () {
            return u(n, i);
          })
        : u(n, i);
      r && r.totalTime && (n.callbackAnimation = r);
    }
  },
  ju = Math.abs,
  i2 = "left",
  u2 = "top",
  Fh = "right",
  Wh = "bottom",
  Ki = "width",
  Ji = "height",
  ss = "Right",
  cs = "Left",
  fs = "Top",
  os = "Bottom",
  Qe = "padding",
  Cn = "margin",
  er = "Width",
  $h = "Height",
  $e = "px",
  Rn = function (n) {
    return Ut.getComputedStyle(
      n.nodeType === Node.DOCUMENT_NODE ? n.scrollingElement : n
    );
  },
  y8 = function (n) {
    var u = Rn(n).position;
    n.style.position = u === "absolute" || u === "fixed" ? u : "relative";
  },
  Eg = function (n, u) {
    for (var i in u) i in n || (n[i] = u[i]);
    return n;
  },
  Ma = function (n, u) {
    var i =
        u &&
        Rn(n)[vh] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ut
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = n.getBoundingClientRect
        ? n.getBoundingClientRect()
        : n.scrollingElement.getBoundingClientRect();
    return i && i.progress(0).kill(), r;
  },
  _f = function (n, u) {
    var i = u.d2;
    return n["offset" + i] || n["client" + i] || 0;
  },
  r2 = function (n) {
    var u = [],
      i = n.labels,
      r = n.duration(),
      f;
    for (f in i) u.push(i[f] / r);
    return u;
  },
  b8 = function (n) {
    return function (u) {
      return ut.utils.snap(r2(n), u);
    };
  },
  Ph = function (n) {
    var u = ut.utils.snap(n),
      i =
        Array.isArray(n) &&
        n.slice(0).sort(function (r, f) {
          return r - f;
        });
    return i
      ? function (r, f, o) {
          o === void 0 && (o = 0.001);
          var h;
          if (!f) return u(r);
          if (f > 0) {
            for (r -= o, h = 0; h < i.length; h++) if (i[h] >= r) return i[h];
            return i[h - 1];
          } else for (h = i.length, r += o; h--; ) if (i[h] <= r) return i[h];
          return i[0];
        }
      : function (r, f, o) {
          o === void 0 && (o = 0.001);
          var h = u(r);
          return !f || Math.abs(h - r) < o || h - r < 0 == f < 0
            ? h
            : u(f < 0 ? r - n : r + n);
        };
  },
  S8 = function (n) {
    return function (u, i) {
      return Ph(r2(n))(u, i.direction);
    };
  },
  qc = function (n, u, i, r) {
    return i.split(",").forEach(function (f) {
      return n(u, f, r);
    });
  },
  el = function (n, u, i, r, f) {
    return n.addEventListener(u, i, { passive: !r, capture: !!f });
  },
  tl = function (n, u, i, r) {
    return n.removeEventListener(u, i, !!r);
  },
  Xc = function (n, u, i) {
    (i = i && i.wheelHandler), i && (n(u, "wheel", i), n(u, "touchmove", i));
  },
  xg = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Gc = { toggleActions: "play", anticipatePin: 0 },
  vf = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  ef = function (n, u) {
    if (an(n)) {
      var i = n.indexOf("="),
        r = ~i ? +(n.charAt(i - 1) + 1) * parseFloat(n.substr(i + 1)) : 0;
      ~i && (n.indexOf("%") > i && (r *= u / 100), (n = n.substr(0, i - 1))),
        (n =
          r +
          (n in vf
            ? vf[n] * u
            : ~n.indexOf("%")
            ? (parseFloat(n) * u) / 100
            : parseFloat(n) || 0));
    }
    return n;
  },
  Qc = function (n, u, i, r, f, o, h, g) {
    var p = f.startColor,
      _ = f.endColor,
      y = f.fontSize,
      S = f.indent,
      b = f.fontWeight,
      z = ae.createElement("div"),
      T = Wi(i) || oi(i, "pinType") === "fixed",
      C = n.indexOf("scroller") !== -1,
      V = T ? $t : i.tagName === "IFRAME" ? i.contentDocument.body : i,
      O = n.indexOf("start") !== -1,
      Q = O ? p : _,
      B =
        "border-color:" +
        Q +
        ";font-size:" +
        y +
        ";color:" +
        Q +
        ";font-weight:" +
        b +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (B += "position:" + ((C || g) && T ? "fixed;" : "absolute;")),
      (C || g || !T) &&
        (B += (r === Pe ? Fh : Wh) + ":" + (o + parseFloat(S)) + "px;"),
      h &&
        (B +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (z._isStart = O),
      z.setAttribute("class", "gsap-marker-" + n + (u ? " marker-" + u : "")),
      (z.style.cssText = B),
      (z.innerText = u || u === 0 ? n + "-" + u : n),
      V.children[0] ? V.insertBefore(z, V.children[0]) : V.appendChild(z),
      (z._offset = z["offset" + r.op.d2]),
      lf(z, 0, r, O),
      z
    );
  },
  lf = function (n, u, i, r) {
    var f = { display: "block" },
      o = i[r ? "os2" : "p2"],
      h = i[r ? "p2" : "os2"];
    (n._isFlipped = r),
      (f[i.a + "Percent"] = r ? -100 : 0),
      (f[i.a] = r ? "1px" : 0),
      (f["border" + o + er] = 1),
      (f["border" + h + er] = 0),
      (f[i.p] = u + "px"),
      ut.set(n, f);
  },
  Nt = [],
  Th = {},
  Ts,
  Ag = function () {
    return _l() - jn > 34 && (Ts || (Ts = requestAnimationFrame(za)));
  },
  Lu = function () {
    (!Ol || !Ol.isPressed || Ol.startX > $t.clientWidth) &&
      (jt.cache++,
      Ol ? Ts || (Ts = requestAnimationFrame(za)) : za(),
      jn || Pi("scrollStart"),
      (jn = _l()));
  },
  W0 = function () {
    (t2 = Ut.innerWidth), (I_ = Ut.innerHeight);
  },
  ts = function (n) {
    jt.cache++,
      (n === !0 ||
        (!pl &&
          !P_ &&
          !ae.fullscreenElement &&
          !ae.webkitFullscreenElement &&
          (!yh ||
            t2 !== Ut.innerWidth ||
            Math.abs(Ut.innerHeight - I_) > Ut.innerHeight * 0.25))) &&
        gf.restart(!0);
  },
  $i = {},
  T8 = [],
  s2 = function d() {
    return tl(Ct, "scrollEnd", d) || qi(!0);
  },
  Pi = function (n) {
    return (
      ($i[n] &&
        $i[n].map(function (u) {
          return u();
        })) ||
      T8
    );
  },
  nn = [],
  c2 = function (n) {
    for (var u = 0; u < nn.length; u += 5)
      (!n || (nn[u + 4] && nn[u + 4].query === n)) &&
        ((nn[u].style.cssText = nn[u + 1]),
        nn[u].getBBox && nn[u].setAttribute("transform", nn[u + 2] || ""),
        (nn[u + 3].uncache = 1));
  },
  f2 = function () {
    return jt.forEach(function (n) {
      return yl(n) && ++n.cacheID && (n.rec = n());
    });
  },
  Ih = function (n, u) {
    var i;
    for (zl = 0; zl < Nt.length; zl++)
      (i = Nt[zl]),
        i && (!u || i._ctx === u) && (n ? i.kill(1) : i.revert(!0, !0));
    (rs = !0), u && c2(u), u || Pi("revert");
  },
  o2 = function (n, u) {
    jt.cache++,
      (u || !wl) &&
        jt.forEach(function (i) {
          return yl(i) && i.cacheID++ && (i.rec = 0);
        }),
      an(n) && (Ut.history.scrollRestoration = Kh = n);
  },
  wl,
  Fi = 0,
  Mg,
  E8 = function () {
    if (Mg !== Fi) {
      var n = (Mg = Fi);
      requestAnimationFrame(function () {
        return n === Fi && qi(!0);
      });
    }
  },
  h2 = function () {
    $t.appendChild(Ju),
      (Jh = (!Ol && Ju.offsetHeight) || Ut.innerHeight),
      $t.removeChild(Ju);
  },
  Og = function (n) {
    return Ss(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (u) {
      return (u.style.display = n ? "none" : "block");
    });
  },
  qi = function (n, u) {
    if (
      ((rn = ae.documentElement),
      ($t = ae.body),
      (kh = [Ut, ae, rn, $t]),
      jn && !n && !rs)
    ) {
      el(Ct, "scrollEnd", s2);
      return;
    }
    h2(), (wl = Ct.isRefreshing = !0), rs || f2();
    var i = Pi("refreshInit");
    $_ && Ct.sort(),
      u || Ih(),
      jt.forEach(function (r) {
        yl(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      Nt.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (rs = !1),
      Nt.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var f = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            o = r.pin[f];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[f] - o), r.refresh();
        }
      }),
      (Sh = 1),
      Og(!0),
      Nt.forEach(function (r) {
        var f = ea(r.scroller, r._dir),
          o = r.vars.end === "max" || (r._endClamp && r.end > f),
          h = r._startClamp && r.start >= f;
        (o || h) &&
          r.setPositions(
            h ? f - 1 : r.start,
            o ? Math.max(h ? f : r.start + 1, f) : r.end,
            !0
          );
      }),
      Og(!1),
      (Sh = 0),
      i.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      jt.forEach(function (r) {
        yl(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      o2(Kh, 1),
      gf.pause(),
      Fi++,
      (wl = 2),
      za(2),
      Nt.forEach(function (r) {
        return yl(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (wl = Ct.isRefreshing = !1),
      Pi("refresh");
  },
  Eh = 0,
  nf = 1,
  hs,
  za = function (n) {
    if (n === 2 || (!wl && !rs)) {
      (Ct.isUpdating = !0), hs && hs.update(0);
      var u = Nt.length,
        i = _l(),
        r = i - F0 >= 50,
        f = u && Nt[0].scroll();
      if (
        ((nf = Eh > f ? -1 : 1),
        wl || (Eh = f),
        r &&
          (jn && !Ef && i - jn > 200 && ((jn = 0), Pi("scrollEnd")),
          (Wr = F0),
          (F0 = i)),
        nf < 0)
      ) {
        for (zl = u; zl-- > 0; ) Nt[zl] && Nt[zl].update(0, r);
        nf = 1;
      } else for (zl = 0; zl < u; zl++) Nt[zl] && Nt[zl].update(0, r);
      Ct.isUpdating = !1;
    }
    Ts = 0;
  },
  xh = [
    i2,
    u2,
    Wh,
    Fh,
    Cn + os,
    Cn + ss,
    Cn + fs,
    Cn + cs,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  af = xh.concat([
    Ki,
    Ji,
    "boxSizing",
    "max" + er,
    "max" + $h,
    "position",
    Cn,
    Qe,
    Qe + fs,
    Qe + ss,
    Qe + os,
    Qe + cs,
  ]),
  x8 = function (n, u, i) {
    Fu(i);
    var r = n._gsap;
    if (r.spacerIsNative) Fu(r.spacerState);
    else if (n._gsap.swappedIn) {
      var f = u.parentNode;
      f && (f.insertBefore(n, u), f.removeChild(u));
    }
    n._gsap.swappedIn = !1;
  },
  $0 = function (n, u, i, r) {
    if (!n._gsap.swappedIn) {
      for (var f = xh.length, o = u.style, h = n.style, g; f--; )
        (g = xh[f]), (o[g] = i[g]);
      (o.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (o.display = "inline-block"),
        (h[Wh] = h[Fh] = "auto"),
        (o.flexBasis = i.flexBasis || "auto"),
        (o.overflow = "visible"),
        (o.boxSizing = "border-box"),
        (o[Ki] = _f(n, Dl) + $e),
        (o[Ji] = _f(n, Pe) + $e),
        (o[Qe] = h[Cn] = h[u2] = h[i2] = "0"),
        Fu(r),
        (h[Ki] = h["max" + er] = i[Ki]),
        (h[Ji] = h["max" + $h] = i[Ji]),
        (h[Qe] = i[Qe]),
        n.parentNode !== u &&
          (n.parentNode.insertBefore(u, n), u.appendChild(n)),
        (n._gsap.swappedIn = !0);
    }
  },
  A8 = /([A-Z])/g,
  Fu = function (n) {
    if (n) {
      var u = n.t.style,
        i = n.length,
        r = 0,
        f,
        o;
      for ((n.t._gsap || ut.core.getCache(n.t)).uncache = 1; r < i; r += 2)
        (o = n[r + 1]),
          (f = n[r]),
          o
            ? (u[f] = o)
            : u[f] && u.removeProperty(f.replace(A8, "-$1").toLowerCase());
    }
  },
  kc = function (n) {
    for (var u = af.length, i = n.style, r = [], f = 0; f < u; f++)
      r.push(af[f], i[af[f]]);
    return (r.t = n), r;
  },
  M8 = function (n, u, i) {
    for (var r = [], f = n.length, o = i ? 8 : 0, h; o < f; o += 2)
      (h = n[o]), r.push(h, h in u ? u[h] : n[o + 1]);
    return (r.t = n.t), r;
  },
  uf = { left: 0, top: 0 },
  zg = function (n, u, i, r, f, o, h, g, p, _, y, S, b, z) {
    yl(n) && (n = n(g)),
      an(n) &&
        n.substr(0, 3) === "max" &&
        (n = S + (n.charAt(4) === "=" ? ef("0" + n.substr(3), i) : 0));
    var T = b ? b.time() : 0,
      C,
      V,
      O;
    if ((b && b.seek(0), isNaN(n) || (n = +n), Ir(n)))
      b &&
        (n = ut.utils.mapRange(
          b.scrollTrigger.start,
          b.scrollTrigger.end,
          0,
          S,
          n
        )),
        h && lf(h, i, r, !0);
    else {
      yl(u) && (u = u(g));
      var Q = (n || "0").split(" "),
        B,
        X,
        P,
        x;
      (O = Zl(u, g) || $t),
        (B = Ma(O) || {}),
        (!B || (!B.left && !B.top)) &&
          Rn(O).display === "none" &&
          ((x = O.style.display),
          (O.style.display = "block"),
          (B = Ma(O)),
          x ? (O.style.display = x) : O.style.removeProperty("display")),
        (X = ef(Q[0], B[r.d])),
        (P = ef(Q[1] || "0", i)),
        (n = B[r.p] - p[r.p] - _ + X + f - P),
        h && lf(h, P, r, i - P < 20 || (h._isStart && P > 20)),
        (i -= i - P);
    }
    if ((z && ((g[z] = n || -0.001), n < 0 && (n = 0)), o)) {
      var Y = n + i,
        k = o._isStart;
      (C = "scroll" + r.d2),
        lf(
          o,
          Y,
          r,
          (k && Y > 20) ||
            (!k && (y ? Math.max($t[C], rn[C]) : o.parentNode[C]) <= Y + 1)
        ),
        y &&
          ((p = Ma(h)),
          y && (o.style[r.op.p] = p[r.op.p] - r.op.m - o._offset + $e));
    }
    return (
      b &&
        O &&
        ((C = Ma(O)),
        b.seek(S),
        (V = Ma(O)),
        (b._caScrollDist = C[r.p] - V[r.p]),
        (n = (n / b._caScrollDist) * S)),
      b && b.seek(T),
      b ? n : Math.round(n)
    );
  },
  O8 = /(webkit|moz|length|cssText|inset)/i,
  wg = function (n, u, i, r) {
    if (n.parentNode !== u) {
      var f = n.style,
        o,
        h;
      if (u === $t) {
        (n._stOrig = f.cssText), (h = Rn(n));
        for (o in h)
          !+o &&
            !O8.test(o) &&
            h[o] &&
            typeof f[o] == "string" &&
            o !== "0" &&
            (f[o] = h[o]);
        (f.top = i), (f.left = r);
      } else f.cssText = n._stOrig;
      (ut.core.getCache(n).uncache = 1), u.appendChild(n);
    }
  },
  d2 = function (n, u, i) {
    var r = u,
      f = r;
    return function (o) {
      var h = Math.round(n());
      return (
        h !== r &&
          h !== f &&
          Math.abs(h - r) > 3 &&
          Math.abs(h - f) > 3 &&
          ((o = h), i && i()),
        (f = r),
        (r = Math.round(o)),
        r
      );
    };
  },
  Kc = function (n, u, i) {
    var r = {};
    (r[u.p] = "+=" + i), ut.set(n, r);
  },
  Dg = function (n, u) {
    var i = pi(n, u),
      r = "_scroll" + u.p2,
      f = function o(h, g, p, _, y) {
        var S = o.tween,
          b = g.onComplete,
          z = {};
        p = p || i();
        var T = d2(i, p, function () {
          S.kill(), (o.tween = 0);
        });
        return (
          (y = (_ && y) || 0),
          (_ = _ || h - p),
          S && S.kill(),
          (g[r] = h),
          (g.inherit = !1),
          (g.modifiers = z),
          (z[r] = function () {
            return T(p + _ * S.ratio + y * S.ratio * S.ratio);
          }),
          (g.onUpdate = function () {
            jt.cache++, o.tween && za();
          }),
          (g.onComplete = function () {
            (o.tween = 0), b && b.call(S);
          }),
          (S = o.tween = ut.to(n, g)),
          S
        );
      };
    return (
      (n[r] = i),
      (i.wheelHandler = function () {
        return f.tween && f.tween.kill() && (f.tween = 0);
      }),
      el(n, "wheel", i.wheelHandler),
      Ct.isTouch && el(n, "touchmove", i.wheelHandler),
      f
    );
  },
  Ct = (function () {
    function d(u, i) {
      Bu ||
        d.register(ut) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        bh(this),
        this.init(u, i);
    }
    var n = d.prototype;
    return (
      (n.init = function (i, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !$r)
        ) {
          this.update = this.refresh = this.kill = Pn;
          return;
        }
        i = Eg(an(i) || Ir(i) || i.nodeType ? { trigger: i } : i, Gc);
        var f = i,
          o = f.onUpdate,
          h = f.toggleClass,
          g = f.id,
          p = f.onToggle,
          _ = f.onRefresh,
          y = f.scrub,
          S = f.trigger,
          b = f.pin,
          z = f.pinSpacing,
          T = f.invalidateOnRefresh,
          C = f.anticipatePin,
          V = f.onScrubComplete,
          O = f.onSnapComplete,
          Q = f.once,
          B = f.snap,
          X = f.pinReparent,
          P = f.pinSpacer,
          x = f.containerAnimation,
          Y = f.fastScrollEnd,
          k = f.preventOverlaps,
          W =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Dl
              : Pe,
          rt = !y && y !== 0,
          lt = Zl(i.scroller || Ut),
          at = ut.core.getCache(lt),
          ht = Wi(lt),
          _t =
            ("pinType" in i
              ? i.pinType
              : oi(lt, "pinType") || (ht && "fixed")) === "fixed",
          H = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          K = rt && i.toggleActions.split(" "),
          et = "markers" in i ? i.markers : Gc.markers,
          ct = ht ? 0 : parseFloat(Rn(lt)["border" + W.p2 + er]) || 0,
          N = this,
          M =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(N);
            },
          G = _8(lt, ht, W),
          I = v8(lt, ht),
          tt = 0,
          st = 0,
          ft = 0,
          dt = pi(lt, W),
          zt,
          Tt,
          Re,
          Wt,
          ve,
          Et,
          kt,
          ye,
          Ke,
          Z,
          Je,
          cl,
          Nl,
          Pt,
          fl,
          It,
          Zt,
          te,
          Oe,
          ee,
          ol,
          Cl,
          pn,
          _i,
          ze,
          qn,
          be,
          Sl,
          Ye,
          Xn,
          aa,
          wt,
          gn,
          hl,
          dl,
          Fe,
          _n,
          vn,
          Ln;
        if (
          ((N._startClamp = N._endClamp = !1),
          (N._dir = W),
          (C *= 45),
          (N.scroller = lt),
          (N.scroll = x ? x.time.bind(x) : dt),
          (Wt = dt()),
          (N.vars = i),
          (r = r || i.animation),
          "refreshPriority" in i &&
            (($_ = 1), i.refreshPriority === -9999 && (hs = N)),
          (at.tweenScroll = at.tweenScroll || {
            top: Dg(lt, Pe),
            left: Dg(lt, Dl),
          }),
          (N.tweenTo = zt = at.tweenScroll[W.p]),
          (N.scrubDuration = function (nt) {
            (gn = Ir(nt) && nt),
              gn
                ? wt
                  ? wt.duration(nt)
                  : (wt = ut.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: gn,
                      paused: !0,
                      onComplete: function () {
                        return V && V(N);
                      },
                    }))
                : (wt && wt.progress(1).kill(), (wt = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !N.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (N.animation = r.pause()),
            (r.scrollTrigger = N),
            N.scrubDuration(y),
            (Xn = 0),
            g || (g = r.vars.id)),
          B &&
            ((!Vi(B) || B.push) && (B = { snapTo: B }),
            "scrollBehavior" in $t.style &&
              ut.set(ht ? [$t, rn] : lt, { scrollBehavior: "auto" }),
            jt.forEach(function (nt) {
              return (
                yl(nt) &&
                nt.target === (ht ? ae.scrollingElement || rn : lt) &&
                (nt.smooth = !1)
              );
            }),
            (Re = yl(B.snapTo)
              ? B.snapTo
              : B.snapTo === "labels"
              ? b8(r)
              : B.snapTo === "labelsDirectional"
              ? S8(r)
              : B.directional !== !1
              ? function (nt, St) {
                  return Ph(B.snapTo)(nt, _l() - st < 500 ? 0 : St.direction);
                }
              : ut.utils.snap(B.snapTo)),
            (hl = B.duration || { min: 0.1, max: 2 }),
            (hl = Vi(hl) ? us(hl.min, hl.max) : us(hl, hl)),
            (dl = ut
              .delayedCall(B.delay || gn / 2 || 0.1, function () {
                var nt = dt(),
                  St = _l() - st < 500,
                  pt = zt.tween;
                if (
                  (St || Math.abs(N.getVelocity()) < 10) &&
                  !pt &&
                  !Ef &&
                  tt !== nt
                ) {
                  var yt = (nt - Et) / Pt,
                    we = r && !rt ? r.totalProgress() : yt,
                    Rt = St ? 0 : ((we - aa) / (_l() - Wr)) * 1e3 || 0,
                    pe = ut.utils.clamp(-yt, 1 - yt, (ju(Rt / 2) * Rt) / 0.185),
                    oe = yt + (B.inertia === !1 ? 0 : pe),
                    Ot,
                    Dt,
                    Gt = B,
                    Tl = Gt.onStart,
                    he = Gt.onInterrupt,
                    El = Gt.onComplete;
                  if (
                    ((Ot = Re(oe, N)),
                    Ir(Ot) || (Ot = oe),
                    (Dt = Math.max(0, Math.round(Et + Ot * Pt))),
                    nt <= kt && nt >= Et && Dt !== nt)
                  ) {
                    if (pt && !pt._initted && pt.data <= ju(Dt - nt)) return;
                    B.inertia === !1 && (pe = Ot - yt),
                      zt(
                        Dt,
                        {
                          duration: hl(
                            ju(
                              (Math.max(ju(oe - we), ju(Ot - we)) * 0.185) /
                                Rt /
                                0.05 || 0
                            )
                          ),
                          ease: B.ease || "power3",
                          data: ju(Dt - nt),
                          onInterrupt: function () {
                            return dl.restart(!0) && he && Uu(N, he);
                          },
                          onComplete: function () {
                            N.update(),
                              (tt = dt()),
                              r &&
                                !rt &&
                                (wt
                                  ? wt.resetTo(
                                      "totalProgress",
                                      Ot,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(Ot)),
                              (Xn = aa =
                                r && !rt ? r.totalProgress() : N.progress),
                              O && O(N),
                              El && Uu(N, El);
                          },
                        },
                        nt,
                        pe * Pt,
                        Dt - nt - pe * Pt
                      ),
                      Tl && Uu(N, Tl, zt.tween);
                  }
                } else N.isActive && tt !== nt && dl.restart(!0);
              })
              .pause())),
          g && (Th[g] = N),
          (S = N.trigger = Zl(S || (b !== !0 && b))),
          (Ln = S && S._gsap && S._gsap.stRevert),
          Ln && (Ln = Ln(N)),
          (b = b === !0 ? S : Zl(b)),
          an(h) && (h = { targets: S, className: h }),
          b &&
            (z === !1 ||
              z === Cn ||
              (z =
                !z &&
                b.parentNode &&
                b.parentNode.style &&
                Rn(b.parentNode).display === "flex"
                  ? !1
                  : Qe),
            (N.pin = b),
            (Tt = ut.core.getCache(b)),
            Tt.spacer
              ? (fl = Tt.pinState)
              : (P &&
                  ((P = Zl(P)),
                  P && !P.nodeType && (P = P.current || P.nativeElement),
                  (Tt.spacerIsNative = !!P),
                  P && (Tt.spacerState = kc(P))),
                (Tt.spacer = te = P || ae.createElement("div")),
                te.classList.add("pin-spacer"),
                g && te.classList.add("pin-spacer-" + g),
                (Tt.pinState = fl = kc(b))),
            i.force3D !== !1 && ut.set(b, { force3D: !0 }),
            (N.spacer = te = Tt.spacer),
            (Ye = Rn(b)),
            (_i = Ye[z + W.os2]),
            (ee = ut.getProperty(b)),
            (ol = ut.quickSetter(b, W.a, $e)),
            $0(b, te, Ye),
            (Zt = kc(b))),
          et)
        ) {
          (cl = Vi(et) ? Eg(et, xg) : xg),
            (Z = Qc("scroller-start", g, lt, W, cl, 0)),
            (Je = Qc("scroller-end", g, lt, W, cl, 0, Z)),
            (Oe = Z["offset" + W.op.d2]);
          var Ca = Zl(oi(lt, "content") || lt);
          (ye = this.markerStart = Qc("start", g, Ca, W, cl, Oe, 0, x)),
            (Ke = this.markerEnd = Qc("end", g, Ca, W, cl, Oe, 0, x)),
            x && (vn = ut.quickSetter([ye, Ke], W.a, $e)),
            !_t &&
              !(la.length && oi(lt, "fixedMarkers") === !0) &&
              (y8(ht ? $t : lt),
              ut.set([Z, Je], { force3D: !0 }),
              (qn = ut.quickSetter(Z, W.a, $e)),
              (Sl = ut.quickSetter(Je, W.a, $e)));
        }
        if (x) {
          var bt = x.vars.onUpdate,
            mt = x.vars.onUpdateParams;
          x.eventCallback("onUpdate", function () {
            N.update(0, 0, 1), bt && bt.apply(x, mt || []);
          });
        }
        if (
          ((N.previous = function () {
            return Nt[Nt.indexOf(N) - 1];
          }),
          (N.next = function () {
            return Nt[Nt.indexOf(N) + 1];
          }),
          (N.revert = function (nt, St) {
            if (!St) return N.kill(!0);
            var pt = nt !== !1 || !N.enabled,
              yt = pl;
            pt !== N.isReverted &&
              (pt &&
                ((Fe = Math.max(dt(), N.scroll.rec || 0)),
                (ft = N.progress),
                (_n = r && r.progress())),
              ye &&
                [ye, Ke, Z, Je].forEach(function (we) {
                  return (we.style.display = pt ? "none" : "block");
                }),
              pt && ((pl = N), N.update(pt)),
              b &&
                (!X || !N.isActive) &&
                (pt ? x8(b, te, fl) : $0(b, te, Rn(b), ze)),
              pt || N.update(pt),
              (pl = yt),
              (N.isReverted = pt));
          }),
          (N.refresh = function (nt, St, pt, yt) {
            if (!((pl || !N.enabled) && !St)) {
              if (b && nt && jn) {
                el(d, "scrollEnd", s2);
                return;
              }
              !wl && M && M(N),
                (pl = N),
                zt.tween && !pt && (zt.tween.kill(), (zt.tween = 0)),
                wt && wt.pause(),
                T &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren
                    ? r.getChildren(!0, !0, !1).forEach(function (kn) {
                        return kn.vars.immediateRender && kn.render(0, !0, !0);
                      })
                    : r.vars.immediateRender && r.render(0, !0, !0)),
                N.isReverted || N.revert(!0, !0),
                (N._subPinOffset = !1);
              var we = G(),
                Rt = I(),
                pe = x ? x.duration() : ea(lt, W),
                oe = Pt <= 0.01 || !Pt,
                Ot = 0,
                Dt = yt || 0,
                Gt = Vi(pt) ? pt.end : i.end,
                Tl = i.endTrigger || S,
                he = Vi(pt)
                  ? pt.start
                  : i.start || (i.start === 0 || !S ? 0 : b ? "0 0" : "0 100%"),
                El = (N.pinnedContainer =
                  i.pinnedContainer && Zl(i.pinnedContainer, N)),
                Jl = (S && Math.max(0, Nt.indexOf(N))) || 0,
                Se = Jl,
                He,
                Te,
                Rl,
                Gn,
                Ee,
                Ht,
                Fl,
                tu,
                Qn,
                yn,
                bn,
                Ra,
                vi;
              for (
                et &&
                Vi(pt) &&
                ((Ra = ut.getProperty(Z, W.p)), (vi = ut.getProperty(Je, W.p)));
                Se-- > 0;

              )
                (Ht = Nt[Se]),
                  Ht.end || Ht.refresh(0, 1) || (pl = N),
                  (Fl = Ht.pin),
                  Fl &&
                    (Fl === S || Fl === b || Fl === El) &&
                    !Ht.isReverted &&
                    (yn || (yn = []), yn.unshift(Ht), Ht.revert(!0, !0)),
                  Ht !== Nt[Se] && (Jl--, Se--);
              for (
                yl(he) && (he = he(N)),
                  he = yg(he, "start", N),
                  Et =
                    zg(
                      he,
                      S,
                      we,
                      W,
                      dt(),
                      ye,
                      Z,
                      N,
                      Rt,
                      ct,
                      _t,
                      pe,
                      x,
                      N._startClamp && "_startClamp"
                    ) || (b ? -0.001 : 0),
                  yl(Gt) && (Gt = Gt(N)),
                  an(Gt) &&
                    !Gt.indexOf("+=") &&
                    (~Gt.indexOf(" ")
                      ? (Gt = (an(he) ? he.split(" ")[0] : "") + Gt)
                      : ((Ot = ef(Gt.substr(2), we)),
                        (Gt = an(he)
                          ? he
                          : (x
                              ? ut.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  Et
                                )
                              : Et) + Ot),
                        (Tl = S))),
                  Gt = yg(Gt, "end", N),
                  kt =
                    Math.max(
                      Et,
                      zg(
                        Gt || (Tl ? "100% 0" : pe),
                        Tl,
                        we,
                        W,
                        dt() + Ot,
                        Ke,
                        Je,
                        N,
                        Rt,
                        ct,
                        _t,
                        pe,
                        x,
                        N._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Ot = 0,
                  Se = Jl;
                Se--;

              )
                (Ht = Nt[Se] || {}),
                  (Fl = Ht.pin),
                  Fl &&
                    Ht.start - Ht._pinPush <= Et &&
                    !x &&
                    Ht.end > 0 &&
                    ((He =
                      Ht.end -
                      (N._startClamp ? Math.max(0, Ht.start) : Ht.start)),
                    ((Fl === S && Ht.start - Ht._pinPush < Et) || Fl === El) &&
                      isNaN(he) &&
                      (Ot += He * (1 - Ht.progress)),
                    Fl === b && (Dt += He));
              if (
                ((Et += Ot),
                (kt += Ot),
                N._startClamp && (N._startClamp += Ot),
                N._endClamp &&
                  !wl &&
                  ((N._endClamp = kt || -0.001),
                  (kt = Math.min(kt, ea(lt, W)))),
                (Pt = kt - Et || ((Et -= 0.01) && 0.001)),
                oe &&
                  (ft = ut.utils.clamp(0, 1, ut.utils.normalize(Et, kt, Fe))),
                (N._pinPush = Dt),
                ye &&
                  Ot &&
                  ((He = {}),
                  (He[W.a] = "+=" + Ot),
                  El && (He[W.p] = "-=" + dt()),
                  ut.set([ye, Ke], He)),
                b && !(Sh && N.end >= ea(lt, W)))
              )
                (He = Rn(b)),
                  (Gn = W === Pe),
                  (Rl = dt()),
                  (Cl = parseFloat(ee(W.a)) + Dt),
                  !pe &&
                    kt > 1 &&
                    ((bn = (ht ? ae.scrollingElement || rn : lt).style),
                    (bn = {
                      style: bn,
                      value: bn["overflow" + W.a.toUpperCase()],
                    }),
                    ht &&
                      Rn($t)["overflow" + W.a.toUpperCase()] !== "scroll" &&
                      (bn.style["overflow" + W.a.toUpperCase()] = "scroll")),
                  $0(b, te, He),
                  (Zt = kc(b)),
                  (Te = Ma(b, !0)),
                  (tu = _t && pi(lt, Gn ? Dl : Pe)()),
                  z
                    ? ((ze = [z + W.os2, Pt + Dt + $e]),
                      (ze.t = te),
                      (Se = z === Qe ? _f(b, W) + Pt + Dt : 0),
                      Se &&
                        (ze.push(W.d, Se + $e),
                        te.style.flexBasis !== "auto" &&
                          (te.style.flexBasis = Se + $e)),
                      Fu(ze),
                      El &&
                        Nt.forEach(function (kn) {
                          kn.pin === El &&
                            kn.vars.pinSpacing !== !1 &&
                            (kn._subPinOffset = !0);
                        }),
                      _t && dt(Fe))
                    : ((Se = _f(b, W)),
                      Se &&
                        te.style.flexBasis !== "auto" &&
                        (te.style.flexBasis = Se + $e)),
                  _t &&
                    ((Ee = {
                      top: Te.top + (Gn ? Rl - Et : tu) + $e,
                      left: Te.left + (Gn ? tu : Rl - Et) + $e,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Ee[Ki] = Ee["max" + er] = Math.ceil(Te.width) + $e),
                    (Ee[Ji] = Ee["max" + $h] = Math.ceil(Te.height) + $e),
                    (Ee[Cn] =
                      Ee[Cn + fs] =
                      Ee[Cn + ss] =
                      Ee[Cn + os] =
                      Ee[Cn + cs] =
                        "0"),
                    (Ee[Qe] = He[Qe]),
                    (Ee[Qe + fs] = He[Qe + fs]),
                    (Ee[Qe + ss] = He[Qe + ss]),
                    (Ee[Qe + os] = He[Qe + os]),
                    (Ee[Qe + cs] = He[Qe + cs]),
                    (It = M8(fl, Ee, X)),
                    wl && dt(0)),
                  r
                    ? ((Qn = r._initted),
                      K0(1),
                      r.render(r.duration(), !0, !0),
                      (pn = ee(W.a) - Cl + Pt + Dt),
                      (be = Math.abs(Pt - pn) > 1),
                      _t && be && It.splice(It.length - 2, 2),
                      r.render(0, !0, !0),
                      Qn || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      K0(0))
                    : (pn = Pt),
                  bn &&
                    (bn.value
                      ? (bn.style["overflow" + W.a.toUpperCase()] = bn.value)
                      : bn.style.removeProperty("overflow-" + W.a));
              else if (S && dt() && !x)
                for (Te = S.parentNode; Te && Te !== $t; )
                  Te._pinOffset &&
                    ((Et -= Te._pinOffset), (kt -= Te._pinOffset)),
                    (Te = Te.parentNode);
              yn &&
                yn.forEach(function (kn) {
                  return kn.revert(!1, !0);
                }),
                (N.start = Et),
                (N.end = kt),
                (Wt = ve = wl ? Fe : dt()),
                !x && !wl && (Wt < Fe && dt(Fe), (N.scroll.rec = 0)),
                N.revert(!1, !0),
                (st = _l()),
                dl && ((tt = -1), dl.restart(!0)),
                (pl = 0),
                r &&
                  rt &&
                  (r._initted || _n) &&
                  r.progress() !== _n &&
                  r.progress(_n || 0, !0).render(r.time(), !0, !0),
                (oe || ft !== N.progress || x || T || (r && !r._initted)) &&
                  (r &&
                    !rt &&
                    (r._initted || ft || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      x && Et < -0.001 && !ft
                        ? ut.utils.normalize(Et, kt, 0)
                        : ft,
                      !0
                    ),
                  (N.progress = oe || (Wt - Et) / Pt === ft ? 0 : ft)),
                b && z && (te._pinOffset = Math.round(N.progress * pn)),
                wt && wt.invalidate(),
                isNaN(Ra) ||
                  ((Ra -= ut.getProperty(Z, W.p)),
                  (vi -= ut.getProperty(Je, W.p)),
                  Kc(Z, W, Ra),
                  Kc(ye, W, Ra - (yt || 0)),
                  Kc(Je, W, vi),
                  Kc(Ke, W, vi - (yt || 0))),
                oe && !wl && N.update(),
                _ && !wl && !Nl && ((Nl = !0), _(N), (Nl = !1));
            }
          }),
          (N.getVelocity = function () {
            return ((dt() - ve) / (_l() - Wr)) * 1e3 || 0;
          }),
          (N.endAnimation = function () {
            Kr(N.callbackAnimation),
              r &&
                (wt
                  ? wt.progress(1)
                  : r.paused()
                  ? rt || Kr(r, N.direction < 0, 1)
                  : Kr(r, r.reversed()));
          }),
          (N.labelToScroll = function (nt) {
            return (
              (r &&
                r.labels &&
                (Et || N.refresh() || Et) +
                  (r.labels[nt] / r.duration()) * Pt) ||
              0
            );
          }),
          (N.getTrailing = function (nt) {
            var St = Nt.indexOf(N),
              pt =
                N.direction > 0 ? Nt.slice(0, St).reverse() : Nt.slice(St + 1);
            return (
              an(nt)
                ? pt.filter(function (yt) {
                    return yt.vars.preventOverlaps === nt;
                  })
                : pt
            ).filter(function (yt) {
              return N.direction > 0 ? yt.end <= Et : yt.start >= kt;
            });
          }),
          (N.update = function (nt, St, pt) {
            if (!(x && !pt && !nt)) {
              var yt = wl === !0 ? Fe : N.scroll(),
                we = nt ? 0 : (yt - Et) / Pt,
                Rt = we < 0 ? 0 : we > 1 ? 1 : we || 0,
                pe = N.progress,
                oe,
                Ot,
                Dt,
                Gt,
                Tl,
                he,
                El,
                Jl;
              if (
                (St &&
                  ((ve = Wt),
                  (Wt = x ? dt() : yt),
                  B && ((aa = Xn), (Xn = r && !rt ? r.totalProgress() : Rt))),
                C &&
                  b &&
                  !pl &&
                  !Vc &&
                  jn &&
                  (!Rt && Et < yt + ((yt - ve) / (_l() - Wr)) * C
                    ? (Rt = 1e-4)
                    : Rt === 1 &&
                      kt > yt + ((yt - ve) / (_l() - Wr)) * C &&
                      (Rt = 0.9999)),
                Rt !== pe && N.enabled)
              ) {
                if (
                  ((oe = N.isActive = !!Rt && Rt < 1),
                  (Ot = !!pe && pe < 1),
                  (he = oe !== Ot),
                  (Tl = he || !!Rt != !!pe),
                  (N.direction = Rt > pe ? 1 : -1),
                  (N.progress = Rt),
                  Tl &&
                    !pl &&
                    ((Dt = Rt && !pe ? 0 : Rt === 1 ? 1 : pe === 1 ? 2 : 3),
                    rt &&
                      ((Gt =
                        (!he && K[Dt + 1] !== "none" && K[Dt + 1]) || K[Dt]),
                      (Jl =
                        r &&
                        (Gt === "complete" || Gt === "reset" || Gt in r)))),
                  k &&
                    (he || Jl) &&
                    (Jl || y || !r) &&
                    (yl(k)
                      ? k(N)
                      : N.getTrailing(k).forEach(function (Rl) {
                          return Rl.endAnimation();
                        })),
                  rt ||
                    (wt && !pl && !Vc
                      ? (wt._dp._time - wt._start !== wt._time &&
                          wt.render(wt._dp._time - wt._start),
                        wt.resetTo
                          ? wt.resetTo("totalProgress", Rt, r._tTime / r._tDur)
                          : ((wt.vars.totalProgress = Rt),
                            wt.invalidate().restart()))
                      : r && r.totalProgress(Rt, !!(pl && (st || nt)))),
                  b)
                ) {
                  if ((nt && z && (te.style[z + W.os2] = _i), !_t))
                    ol(Pr(Cl + pn * Rt));
                  else if (Tl) {
                    if (
                      ((El =
                        !nt && Rt > pe && kt + 1 > yt && yt + 1 >= ea(lt, W)),
                      X)
                    )
                      if (!nt && (oe || El)) {
                        var Se = Ma(b, !0),
                          He = yt - Et;
                        wg(
                          b,
                          $t,
                          Se.top + (W === Pe ? He : 0) + $e,
                          Se.left + (W === Pe ? 0 : He) + $e
                        );
                      } else wg(b, te);
                    Fu(oe || El ? It : Zt),
                      (be && Rt < 1 && oe) ||
                        ol(Cl + (Rt === 1 && !El ? pn : 0));
                  }
                }
                B && !zt.tween && !pl && !Vc && dl.restart(!0),
                  h &&
                    (he || (Q && Rt && (Rt < 1 || !J0))) &&
                    Ss(h.targets).forEach(function (Rl) {
                      return Rl.classList[oe || Q ? "add" : "remove"](
                        h.className
                      );
                    }),
                  o && !rt && !nt && o(N),
                  Tl && !pl
                    ? (rt &&
                        (Jl &&
                          (Gt === "complete"
                            ? r.pause().totalProgress(1)
                            : Gt === "reset"
                            ? r.restart(!0).pause()
                            : Gt === "restart"
                            ? r.restart(!0)
                            : r[Gt]()),
                        o && o(N)),
                      (he || !J0) &&
                        (p && he && Uu(N, p),
                        H[Dt] && Uu(N, H[Dt]),
                        Q && (Rt === 1 ? N.kill(!1, 1) : (H[Dt] = 0)),
                        he || ((Dt = Rt === 1 ? 1 : 3), H[Dt] && Uu(N, H[Dt]))),
                      Y &&
                        !oe &&
                        Math.abs(N.getVelocity()) > (Ir(Y) ? Y : 2500) &&
                        (Kr(N.callbackAnimation),
                        wt
                          ? wt.progress(1)
                          : Kr(r, Gt === "reverse" ? 1 : !Rt, 1)))
                    : rt && o && !pl && o(N);
              }
              if (Sl) {
                var Te = x ? (yt / x.duration()) * (x._caScrollDist || 0) : yt;
                qn(Te + (Z._isFlipped ? 1 : 0)), Sl(Te);
              }
              vn && vn((-yt / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (N.enable = function (nt, St) {
            N.enabled ||
              ((N.enabled = !0),
              el(lt, "resize", ts),
              ht || el(lt, "scroll", Lu),
              M && el(d, "refreshInit", M),
              nt !== !1 && ((N.progress = ft = 0), (Wt = ve = tt = dt())),
              St !== !1 && N.refresh());
          }),
          (N.getTween = function (nt) {
            return nt && zt ? zt.tween : wt;
          }),
          (N.setPositions = function (nt, St, pt, yt) {
            if (x) {
              var we = x.scrollTrigger,
                Rt = x.duration(),
                pe = we.end - we.start;
              (nt = we.start + (pe * nt) / Rt),
                (St = we.start + (pe * St) / Rt);
            }
            N.refresh(
              !1,
              !1,
              {
                start: bg(nt, pt && !!N._startClamp),
                end: bg(St, pt && !!N._endClamp),
              },
              yt
            ),
              N.update();
          }),
          (N.adjustPinSpacing = function (nt) {
            if (ze && nt) {
              var St = ze.indexOf(W.d) + 1;
              (ze[St] = parseFloat(ze[St]) + nt + $e),
                (ze[1] = parseFloat(ze[1]) + nt + $e),
                Fu(ze);
            }
          }),
          (N.disable = function (nt, St) {
            if (
              (nt !== !1 && N.revert(!0, !0),
              N.enabled &&
                ((N.enabled = N.isActive = !1),
                St || (wt && wt.pause()),
                (Fe = 0),
                Tt && (Tt.uncache = 1),
                M && tl(d, "refreshInit", M),
                dl &&
                  (dl.pause(), zt.tween && zt.tween.kill() && (zt.tween = 0)),
                !ht))
            ) {
              for (var pt = Nt.length; pt--; )
                if (Nt[pt].scroller === lt && Nt[pt] !== N) return;
              tl(lt, "resize", ts), ht || tl(lt, "scroll", Lu);
            }
          }),
          (N.kill = function (nt, St) {
            N.disable(nt, St), wt && !St && wt.kill(), g && delete Th[g];
            var pt = Nt.indexOf(N);
            pt >= 0 && Nt.splice(pt, 1),
              pt === zl && nf > 0 && zl--,
              (pt = 0),
              Nt.forEach(function (yt) {
                return yt.scroller === N.scroller && (pt = 1);
              }),
              pt || wl || (N.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                nt && r.revert({ kill: !1 }),
                St || r.kill()),
              ye &&
                [ye, Ke, Z, Je].forEach(function (yt) {
                  return yt.parentNode && yt.parentNode.removeChild(yt);
                }),
              hs === N && (hs = 0),
              b &&
                (Tt && (Tt.uncache = 1),
                (pt = 0),
                Nt.forEach(function (yt) {
                  return yt.pin === b && pt++;
                }),
                pt || (Tt.spacer = 0)),
              i.onKill && i.onKill(N);
          }),
          Nt.push(N),
          N.enable(!1, !1),
          Ln && Ln(N),
          r && r.add && !Pt)
        ) {
          var Qt = N.update;
          (N.update = function () {
            (N.update = Qt), jt.cache++, Et || kt || N.refresh();
          }),
            ut.delayedCall(0.01, N.update),
            (Pt = 0.01),
            (Et = kt = 0);
        } else N.refresh();
        b && E8();
      }),
      (d.register = function (i) {
        return (
          Bu ||
            ((ut = i || l2()),
            e2() && window.document && d.enable(),
            (Bu = $r)),
          Bu
        );
      }),
      (d.defaults = function (i) {
        if (i) for (var r in i) Gc[r] = i[r];
        return Gc;
      }),
      (d.disable = function (i, r) {
        ($r = 0),
          Nt.forEach(function (o) {
            return o[r ? "kill" : "disable"](i);
          }),
          tl(Ut, "wheel", Lu),
          tl(ae, "scroll", Lu),
          clearInterval(Yc),
          tl(ae, "touchcancel", Pn),
          tl($t, "touchstart", Pn),
          qc(tl, ae, "pointerdown,touchstart,mousedown", Sg),
          qc(tl, ae, "pointerup,touchend,mouseup", Tg),
          gf.kill(),
          Zc(tl);
        for (var f = 0; f < jt.length; f += 3)
          Xc(tl, jt[f], jt[f + 1]), Xc(tl, jt[f], jt[f + 2]);
      }),
      (d.enable = function () {
        if (
          ((Ut = window),
          (ae = document),
          (rn = ae.documentElement),
          ($t = ae.body),
          ut)
        ) {
          if (
            ((Ss = ut.utils.toArray),
            (us = ut.utils.clamp),
            (bh = ut.core.context || Pn),
            (K0 = ut.core.suppressOverwrites || Pn),
            (Kh = Ut.history.scrollRestoration || "auto"),
            (Eh = Ut.pageYOffset || 0),
            ut.core.globals("ScrollTrigger", d),
            $t)
          ) {
            ($r = 1),
              (Ju = document.createElement("div")),
              (Ju.style.height = "100vh"),
              (Ju.style.position = "absolute"),
              h2(),
              g8(),
              Be.register(ut),
              (d.isTouch = Be.isTouch),
              (ni =
                Be.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (yh = Be.isTouch === 1),
              el(Ut, "wheel", Lu),
              (kh = [Ut, ae, rn, $t]),
              ut.matchMedia
                ? ((d.matchMedia = function (_) {
                    var y = ut.matchMedia(),
                      S;
                    for (S in _) y.add(S, _[S]);
                    return y;
                  }),
                  ut.addEventListener("matchMediaInit", function () {
                    f2(), Ih();
                  }),
                  ut.addEventListener("matchMediaRevert", function () {
                    return c2();
                  }),
                  ut.addEventListener("matchMedia", function () {
                    qi(0, 1), Pi("matchMedia");
                  }),
                  ut.matchMedia().add("(orientation: portrait)", function () {
                    return W0(), W0;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              W0(),
              el(ae, "scroll", Lu);
            var i = $t.hasAttribute("style"),
              r = $t.style,
              f = r.borderTopStyle,
              o = ut.core.Animation.prototype,
              h,
              g;
            for (
              o.revert ||
                Object.defineProperty(o, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                r.borderTopStyle = "solid",
                h = Ma($t),
                Pe.m = Math.round(h.top + Pe.sc()) || 0,
                Dl.m = Math.round(h.left + Dl.sc()) || 0,
                f
                  ? (r.borderTopStyle = f)
                  : r.removeProperty("border-top-style"),
                i ||
                  ($t.setAttribute("style", ""), $t.removeAttribute("style")),
                Yc = setInterval(Ag, 250),
                ut.delayedCall(0.5, function () {
                  return (Vc = 0);
                }),
                el(ae, "touchcancel", Pn),
                el($t, "touchstart", Pn),
                qc(el, ae, "pointerdown,touchstart,mousedown", Sg),
                qc(el, ae, "pointerup,touchend,mouseup", Tg),
                vh = ut.utils.checkPrefix("transform"),
                af.push(vh),
                Bu = _l(),
                gf = ut.delayedCall(0.2, qi).pause(),
                Yu = [
                  ae,
                  "visibilitychange",
                  function () {
                    var _ = Ut.innerWidth,
                      y = Ut.innerHeight;
                    ae.hidden
                      ? ((_g = _), (vg = y))
                      : (_g !== _ || vg !== y) && ts();
                  },
                  ae,
                  "DOMContentLoaded",
                  qi,
                  Ut,
                  "load",
                  qi,
                  Ut,
                  "resize",
                  ts,
                ],
                Zc(el),
                Nt.forEach(function (_) {
                  return _.enable(0, 1);
                }),
                g = 0;
              g < jt.length;
              g += 3
            )
              Xc(tl, jt[g], jt[g + 1]), Xc(tl, jt[g], jt[g + 2]);
          } else if (ae) {
            var p = function _() {
              d.enable(), ae.removeEventListener("DOMContentLoaded", _);
            };
            ae.addEventListener("DOMContentLoaded", p);
          }
        }
      }),
      (d.config = function (i) {
        "limitCallbacks" in i && (J0 = !!i.limitCallbacks);
        var r = i.syncInterval;
        (r && clearInterval(Yc)) || ((Yc = r) && setInterval(Ag, r)),
          "ignoreMobileResize" in i &&
            (yh = d.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (Zc(tl) || Zc(el, i.autoRefreshEvents || "none"),
            (P_ = (i.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (d.scrollerProxy = function (i, r) {
        var f = Zl(i),
          o = jt.indexOf(f),
          h = Wi(f);
        ~o && jt.splice(o, h ? 6 : 2),
          r && (h ? la.unshift(Ut, r, $t, r, rn, r) : la.unshift(f, r));
      }),
      (d.clearMatchMedia = function (i) {
        Nt.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
        });
      }),
      (d.isInViewport = function (i, r, f) {
        var o = (an(i) ? Zl(i) : i).getBoundingClientRect(),
          h = o[f ? Ki : Ji] * r || 0;
        return f
          ? o.right - h > 0 && o.left + h < Ut.innerWidth
          : o.bottom - h > 0 && o.top + h < Ut.innerHeight;
      }),
      (d.positionInViewport = function (i, r, f) {
        an(i) && (i = Zl(i));
        var o = i.getBoundingClientRect(),
          h = o[f ? Ki : Ji],
          g =
            r == null
              ? h / 2
              : r in vf
              ? vf[r] * h
              : ~r.indexOf("%")
              ? (parseFloat(r) * h) / 100
              : parseFloat(r) || 0;
        return f ? (o.left + g) / Ut.innerWidth : (o.top + g) / Ut.innerHeight;
      }),
      (d.killAll = function (i) {
        if (
          (Nt.slice(0).forEach(function (f) {
            return f.vars.id !== "ScrollSmoother" && f.kill();
          }),
          i !== !0)
        ) {
          var r = $i.killAll || [];
          ($i = {}),
            r.forEach(function (f) {
              return f();
            });
        }
      }),
      d
    );
  })();
Ct.version = "3.15.0";
Ct.saveStyles = function (d) {
  return d
    ? Ss(d).forEach(function (n) {
        if (n && n.style) {
          var u = nn.indexOf(n);
          u >= 0 && nn.splice(u, 5),
            nn.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              ut.core.getCache(n),
              bh()
            );
        }
      })
    : nn;
};
Ct.revert = function (d, n) {
  return Ih(!d, n);
};
Ct.create = function (d, n) {
  return new Ct(d, n);
};
Ct.refresh = function (d) {
  return d ? ts(!0) : (Bu || Ct.register()) && qi(!0);
};
Ct.update = function (d) {
  return ++jt.cache && za(d === !0 ? 2 : 0);
};
Ct.clearScrollMemory = o2;
Ct.maxScroll = function (d, n) {
  return ea(d, n ? Dl : Pe);
};
Ct.getScrollFunc = function (d, n) {
  return pi(Zl(d), n ? Dl : Pe);
};
Ct.getById = function (d) {
  return Th[d];
};
Ct.getAll = function () {
  return Nt.filter(function (d) {
    return d.vars.id !== "ScrollSmoother";
  });
};
Ct.isScrolling = function () {
  return !!jn;
};
Ct.snapDirectional = Ph;
Ct.addEventListener = function (d, n) {
  var u = $i[d] || ($i[d] = []);
  ~u.indexOf(n) || u.push(n);
};
Ct.removeEventListener = function (d, n) {
  var u = $i[d],
    i = u && u.indexOf(n);
  i >= 0 && u.splice(i, 1);
};
Ct.batch = function (d, n) {
  var u = [],
    i = {},
    r = n.interval || 0.016,
    f = n.batchMax || 1e9,
    o = function (p, _) {
      var y = [],
        S = [],
        b = ut
          .delayedCall(r, function () {
            _(y, S), (y = []), (S = []);
          })
          .pause();
      return function (z) {
        y.length || b.restart(!0),
          y.push(z.trigger),
          S.push(z),
          f <= y.length && b.progress(1);
      };
    },
    h;
  for (h in n)
    i[h] =
      h.substr(0, 2) === "on" && yl(n[h]) && h !== "onRefreshInit"
        ? o(h, n[h])
        : n[h];
  return (
    yl(f) &&
      ((f = f()),
      el(Ct, "refresh", function () {
        return (f = n.batchMax());
      })),
    Ss(d).forEach(function (g) {
      var p = {};
      for (h in i) p[h] = i[h];
      (p.trigger = g), u.push(Ct.create(p));
    }),
    u
  );
};
var Ng = function (n, u, i, r) {
    return (
      u > r ? n(r) : u < 0 && n(0),
      i > r ? (r - u) / (i - u) : i < 0 ? u / (u - i) : 1
    );
  },
  P0 = function d(n, u) {
    u === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          u === !0
            ? "auto"
            : u
            ? "pan-" + u + (Be.isTouch ? " pinch-zoom" : "")
            : "none"),
      n === rn && d($t, u);
  },
  Jc = { auto: 1, scroll: 1 },
  z8 = function (n) {
    var u = n.event,
      i = n.target,
      r = n.axis,
      f = (u.changedTouches ? u.changedTouches[0] : u).target,
      o = f._gsap || ut.core.getCache(f),
      h = _l(),
      g;
    if (!o._isScrollT || h - o._isScrollT > 2e3) {
      for (
        ;
        f &&
        f !== $t &&
        ((f.scrollHeight <= f.clientHeight && f.scrollWidth <= f.clientWidth) ||
          !(Jc[(g = Rn(f)).overflowY] || Jc[g.overflowX]));

      )
        f = f.parentNode;
      (o._isScroll =
        f &&
        f !== i &&
        !Wi(f) &&
        (Jc[(g = Rn(f)).overflowY] || Jc[g.overflowX])),
        (o._isScrollT = h);
    }
    (o._isScroll || r === "x") && (u.stopPropagation(), (u._gsapAllow = !0));
  },
  m2 = function (n, u, i, r) {
    return Be.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: u,
      onWheel: (r = r && z8),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return i && el(ae, Be.eventTypes[0], Rg, !1, !0);
      },
      onDisable: function () {
        return tl(ae, Be.eventTypes[0], Rg, !0);
      },
    });
  },
  w8 = /(input|label|select|textarea)/i,
  Cg,
  Rg = function (n) {
    var u = w8.test(n.target.tagName);
    (u || Cg) && ((n._gsapAllow = !0), (Cg = u));
  },
  D8 = function (n) {
    Vi(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer");
    var u = n,
      i = u.normalizeScrollX,
      r = u.momentum,
      f = u.allowNestedScroll,
      o = u.onRelease,
      h,
      g,
      p = Zl(n.target) || rn,
      _ = ut.core.globals().ScrollSmoother,
      y = _ && _.get(),
      S =
        ni &&
        ((n.content && Zl(n.content)) ||
          (y && n.content !== !1 && !y.smooth() && y.content())),
      b = pi(p, Pe),
      z = pi(p, Dl),
      T = 1,
      C =
        (Be.isTouch && Ut.visualViewport
          ? Ut.visualViewport.scale * Ut.visualViewport.width
          : Ut.outerWidth) / Ut.innerWidth,
      V = 0,
      O = yl(r)
        ? function () {
            return r(h);
          }
        : function () {
            return r || 2.8;
          },
      Q,
      B,
      X = m2(p, n.type, !0, f),
      P = function () {
        return (B = !1);
      },
      x = Pn,
      Y = Pn,
      k = function () {
        (g = ea(p, Pe)),
          (Y = us(ni ? 1 : 0, g)),
          i && (x = us(0, ea(p, Dl))),
          (Q = Fi);
      },
      W = function () {
        (S._gsap.y = Pr(parseFloat(S._gsap.y) + b.offset) + "px"),
          (S.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(S._gsap.y) +
            ", 0, 1)"),
          (b.offset = b.cacheID = 0);
      },
      rt = function () {
        if (B) {
          requestAnimationFrame(P);
          var et = Pr(h.deltaY / 2),
            ct = Y(b.v - et);
          if (S && ct !== b.v + b.offset) {
            b.offset = ct - b.v;
            var N = Pr((parseFloat(S && S._gsap.y) || 0) - b.offset);
            (S.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              N +
              ", 0, 1)"),
              (S._gsap.y = N + "px"),
              (b.cacheID = jt.cache),
              za();
          }
          return !0;
        }
        b.offset && W(), (B = !0);
      },
      lt,
      at,
      ht,
      _t,
      H = function () {
        k(),
          lt.isActive() &&
            lt.vars.scrollY > g &&
            (b() > g ? lt.progress(1) && b(g) : lt.resetTo("scrollY", g));
      };
    return (
      S && ut.set(S, { y: "+=0" }),
      (n.ignoreCheck = function (K) {
        return (
          (ni && K.type === "touchmove" && rt()) ||
          (T > 1.05 && K.type !== "touchstart") ||
          h.isGesturing ||
          (K.touches && K.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        B = !1;
        var K = T;
        (T = Pr(((Ut.visualViewport && Ut.visualViewport.scale) || 1) / C)),
          lt.pause(),
          K !== T && P0(p, T > 1.01 ? !0 : i ? !1 : "x"),
          (at = z()),
          (ht = b()),
          k(),
          (Q = Fi);
      }),
      (n.onRelease = n.onGestureStart =
        function (K, et) {
          if ((b.offset && W(), !et)) _t.restart(!0);
          else {
            jt.cache++;
            var ct = O(),
              N,
              M;
            i &&
              ((N = z()),
              (M = N + (ct * 0.05 * -K.velocityX) / 0.227),
              (ct *= Ng(z, N, M, ea(p, Dl))),
              (lt.vars.scrollX = x(M))),
              (N = b()),
              (M = N + (ct * 0.05 * -K.velocityY) / 0.227),
              (ct *= Ng(b, N, M, ea(p, Pe))),
              (lt.vars.scrollY = Y(M)),
              lt.invalidate().duration(ct).play(0.01),
              ((ni && lt.vars.scrollY >= g) || N >= g - 1) &&
                ut.to({}, { onUpdate: H, duration: ct });
          }
          o && o(K);
        }),
      (n.onWheel = function () {
        lt._ts && lt.pause(), _l() - V > 1e3 && ((Q = 0), (V = _l()));
      }),
      (n.onChange = function (K, et, ct, N, M) {
        if (
          (Fi !== Q && k(),
          et &&
            i &&
            z(x(N[2] === et ? at + (K.startX - K.x) : z() + et - N[1])),
          ct)
        ) {
          b.offset && W();
          var G = M[2] === ct,
            I = G ? ht + K.startY - K.y : b() + ct - M[1],
            tt = Y(I);
          G && I !== tt && (ht += tt - I), b(tt);
        }
        (ct || et) && za();
      }),
      (n.onEnable = function () {
        P0(p, i ? !1 : "x"),
          Ct.addEventListener("refresh", H),
          el(Ut, "resize", H),
          b.smooth &&
            ((b.target.style.scrollBehavior = "auto"),
            (b.smooth = z.smooth = !1)),
          X.enable();
      }),
      (n.onDisable = function () {
        P0(p, !0),
          tl(Ut, "resize", H),
          Ct.removeEventListener("refresh", H),
          X.kill();
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (h = new Be(n)),
      (h.iOS = ni),
      ni && !b() && b(1),
      ni && ut.ticker.add(Pn),
      (_t = h._dc),
      (lt = ut.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: d2(b, b(), function () {
            return lt.pause();
          }),
        },
        onUpdate: za,
        onComplete: _t.vars.onComplete,
      })),
      h
    );
  };
Ct.sort = function (d) {
  if (yl(d)) return Nt.sort(d);
  var n = Ut.pageYOffset || 0;
  return (
    Ct.getAll().forEach(function (u) {
      return (u._sortY = u.trigger
        ? n + u.trigger.getBoundingClientRect().top
        : u.start + Ut.innerHeight);
    }),
    Nt.sort(
      d ||
        function (u, i) {
          return (
            (u.vars.refreshPriority || 0) * -1e6 +
            (u.vars.containerAnimation ? 1e6 : u._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
Ct.observe = function (d) {
  return new Be(d);
};
Ct.normalizeScroll = function (d) {
  if (typeof d > "u") return Ol;
  if (d === !0 && Ol) return Ol.enable();
  if (d === !1) {
    Ol && Ol.kill(), (Ol = d);
    return;
  }
  var n = d instanceof Be ? d : D8(d);
  return Ol && Ol.target === n.target && Ol.kill(), Wi(n.target) && (Ol = n), n;
};
Ct.core = {
  _getVelocityProp: _h,
  _inputObserver: m2,
  _scrollers: jt,
  _proxies: la,
  bridge: {
    ss: function () {
      jn || Pi("scrollStart"), (jn = _l());
    },
    ref: function () {
      return pl;
    },
  },
};
l2() && ut.registerPlugin(Ct);
const gl = {
    contractAddress: "0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
    buyUrl:
      "https://app.uniswap.org/swap?chain=mainnet&outputCurrency=0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
    chartUrl:
      "https://gmgn.ai/eth/token/0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
    dexUrl:
      "https://dexscreener.com/ethereum/0x3d08c83f21b546c58c67bd3ce762aa8c5bd1a7a0",
    xUrl: "https://x.com/snowmoon_erc",
    telegramUrl: "https://t.me/snowmoon_erc",
  },
  N8 = "modulepreload",
  C8 = function (d) {
    return "/" + d;
  },
  Hg = {},
  R8 = function (n, u, i) {
    let r = Promise.resolve();
    if (u && u.length > 0) {
      let o = function (p) {
        return Promise.all(
          p.map((_) =>
            Promise.resolve(_).then(
              (y) => ({ status: "fulfilled", value: y }),
              (y) => ({ status: "rejected", reason: y })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        g =
          (h == null ? void 0 : h.nonce) ||
          (h == null ? void 0 : h.getAttribute("nonce"));
      r = o(
        u.map((p) => {
          if (((p = C8(p)), p in Hg)) return;
          Hg[p] = !0;
          const _ = p.endsWith(".css"),
            y = _ ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${p}"]${y}`)) return;
          const S = document.createElement("link");
          if (
            ((S.rel = _ ? "stylesheet" : N8),
            _ || (S.as = "script"),
            (S.crossOrigin = ""),
            (S.href = p),
            g && S.setAttribute("nonce", g),
            document.head.appendChild(S),
            _)
          )
            return new Promise((b, z) => {
              S.addEventListener("load", b),
                S.addEventListener("error", () =>
                  z(new Error(`Unable to preload CSS for ${p}`))
                );
            });
        })
      );
    }
    function f(o) {
      const h = new Event("vite:preloadError", { cancelable: !0 });
      if (((h.payload = o), window.dispatchEvent(h), !h.defaultPrevented))
        throw o;
    }
    return r.then((o) => {
      for (const h of o || []) h.status === "rejected" && f(h.reason);
      return n().catch(f);
    });
  };
function H8(d = 1550) {
  let n = 0,
    u = null;
  return {
    tick(i) {
      return (
        u !== null && (n = Math.min(d, n + Math.max(0, Math.min(i - u, 64)))),
        (u = i),
        n / d
      );
    },
    suspend() {
      u = null;
    },
    complete() {
      return (n = d), (u = null), 1;
    },
    restart() {
      (n = 0), (u = null);
    },
  };
}
const U8 = `
  attribute vec3 aPivot;
  attribute vec3 aFlight;
  attribute vec3 aTurn;
  attribute float aDelay;
  uniform float uAssembly;
  uniform float uExit;
  varying vec2 vUv;
  mat3 turn(vec3 r) {
    float x=cos(r.x), X=sin(r.x), y=cos(r.y), Y=sin(r.y), z=cos(r.z), Z=sin(r.z);
    return mat3(z,-Z,0.,Z,z,0.,0.,0.,1.) * mat3(y,0.,Y,0.,1.,0.,-Y,0.,y) * mat3(1.,0.,0.,0.,x,-X,0.,X,x);
  }
  void main() {
    vUv=uv;
    float t=clamp((uAssembly-aDelay)/(1.-aDelay),0.,1.);
    t=1.-pow(1.-t,3.);
    float loose=1.-t;
    vec3 p=turn(aTurn*loose)*(position-aPivot)+aPivot;
    p+=aFlight*pow(loose,1.4);
    p+=aFlight*uExit*.12;
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
  }
`,
  j8 = `
  uniform sampler2D uTexture;
  varying vec2 vUv;
  void main() {
    vec4 color=texture2D(uTexture,vUv);
    if(color.a<.015) discard;
    gl_FragColor=color;
    #include <colorspace_fragment>
  }
`;
function L8(d) {
  const n = [],
    u = [],
    i = [],
    r = [],
    f = [],
    o = [],
    p = (y) => {
      const S = Math.sin(y * 127.1 + 311.7) * 43758.5453;
      return S - Math.floor(S);
    };
  for (let y = 0; y < 3; y++)
    for (let S = 0; S < 4; S++) {
      const b = S / 4 - 0.5,
        z = 0.5 - y / 3,
        T = 1 / 4,
        C = 1 / 3,
        V = [
          [b, z],
          [b + T, z],
          [b + T, z - C],
          [b, z - C],
        ];
      ((y + S) % 2
        ? [
            [0, 1, 3],
            [1, 2, 3],
          ]
        : [
            [0, 1, 2],
            [0, 2, 3],
          ]
      ).forEach((Q, B) => {
        const X = (y * 4 + S) * 2 + B,
          P = Q.reduce((k, W) => k + V[W][0], 0) / 3,
          x = Q.reduce((k, W) => k + V[W][1], 0) / 3,
          Y = (P >= 0 ? 1 : -1) * (0.34 + p(X + 10) * 0.7);
        Q.forEach((k) => {
          const [W, rt] = V[k];
          n.push(W, rt, 0),
            u.push(W + 0.5, rt + 0.5),
            i.push(P, x, 0),
            r.push(Y, (p(X + 40) - 0.5) * 1.2, (p(X + 80) - 0.25) * 0.8),
            f.push(
              (p(X + 5) - 0.5) * 2.4,
              (p(X + 19) - 0.5) * 2.8,
              (p(X + 32) - 0.5) * 1.7
            ),
            o.push(p(X + 21) * 0.18);
        });
      });
    }
  const _ = new d.BufferGeometry();
  return (
    _.setAttribute("position", new d.Float32BufferAttribute(n, 3)),
    _.setAttribute("uv", new d.Float32BufferAttribute(u, 2)),
    _.setAttribute("aPivot", new d.Float32BufferAttribute(i, 3)),
    _.setAttribute("aFlight", new d.Float32BufferAttribute(r, 3)),
    _.setAttribute("aTurn", new d.Float32BufferAttribute(f, 3)),
    _.setAttribute("aDelay", new d.Float32BufferAttribute(o, 1)),
    _
  );
}
function B8({ src: d, paused: n, replayToken: u, alt: i }) {
  const r = w.useRef(null),
    f = w.useRef(null),
    o = w.useRef(null),
    h = w.useRef(n),
    [g, p] = w.useState("loading"),
    [_, y] = w.useState(!1);
  return (
    w.useEffect(() => {
      var S;
      (h.current = n), (S = o.current) == null || S.pause(n);
    }, [n]),
    w.useEffect(() => {
      var S;
      u && ((S = o.current) == null || S.replay());
    }, [u]),
    w.useEffect(() => {
      const S = r.current,
        b = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (b.matches) {
        p("reduced"), y(!0);
        return;
      }
      let z = !0,
        T = !1,
        C,
        V,
        O,
        Q,
        B,
        X,
        P,
        x,
        Y = 0;
      const k = [],
        W = () => {
          cancelAnimationFrame(Y), (Y = 0);
        },
        rt = () => {
          (T = !0), z && (p("fallback"), y(!0)), W();
        };
      return (
        (async () => {
          try {
            const [at] = await Promise.all([
              R8(() => import("./lunarEngine-DXc0J94q.js"), []),
              f.current.decode(),
            ]);
            if (!z) return;
            (C = new at.WebGLRenderer({
              alpha: !0,
              antialias: !0,
              powerPreference: "default",
            })),
              C.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5)),
              C.setClearColor(0, 0),
              (C.outputColorSpace = at.SRGBColorSpace),
              C.domElement.setAttribute("aria-hidden", "true"),
              S.appendChild(C.domElement),
              (V = new at.Texture(f.current)),
              (V.colorSpace = at.SRGBColorSpace),
              (V.needsUpdate = !0),
              (V.anisotropy = Math.min(8, C.capabilities.getMaxAnisotropy()));
            const ht = new at.Scene(),
              _t = new at.PerspectiveCamera(38, 1, 0.1, 2500);
            _t.position.z = 1e3;
            const H = {
              uTexture: { value: V },
              uAssembly: { value: 0 },
              uExit: { value: 0 },
            };
            (O = L8(at)),
              (Q = new at.ShaderMaterial({
                uniforms: H,
                vertexShader: U8,
                fragmentShader: j8,
                transparent: !0,
                depthWrite: !1,
                side: at.DoubleSide,
                toneMapped: !1,
              }));
            const K = new at.Mesh(O, Q);
            (K.frustumCulled = !1),
              (B = new at.PlaneGeometry(1, 1)),
              (X = new at.MeshBasicMaterial({
                map: V,
                transparent: !0,
                alphaTest: 0.015,
                depthWrite: !1,
                toneMapped: !1,
                side: at.DoubleSide,
              }));
            const et = new at.Mesh(B, X);
            et.visible = !1;
            const ct = new at.Group();
            ct.add(K, et), ht.add(ct);
            let N = !0,
              M = 0,
              G = 1,
              I = 1,
              tt = 0,
              st = 0,
              ft = 1,
              dt = !1,
              zt = -1 / 0;
            const Tt = H8(),
              Re = new at.Vector2(),
              Wt = new at.Vector2(),
              ve = () => z && !T && N && !document.hidden && !b.matches,
              Et = () => {
                ve() && !Y && (Y = requestAnimationFrame(Ke));
              },
              kt = () => {
                const It = S.clientWidth,
                  Zt = S.clientHeight;
                if (!It || !Zt || (It === G && Zt === I)) return;
                (G = It),
                  (I = Zt),
                  C.setSize(G, I, !1),
                  (_t.aspect = G / I),
                  _t.updateProjectionMatrix(),
                  (ft = 2 * Math.tan(at.MathUtils.degToRad(19)) * 1e3);
                const te = ft * _t.aspect,
                  Oe = G <= 850,
                  ee = Oe ? Math.min(te * 0.98, ft * 0.32) : ft * 0.72;
                ct.scale.setScalar(ee),
                  (tt = Oe ? 0 : te * 0.255),
                  (st = Oe ? -ft * 0.25 : ft * 0.055),
                  Oe && (Wt.set(0, 0), Re.set(0, 0)),
                  ye(),
                  Et();
              },
              ye = () => {
                const It = S.closest(".hero");
                if (!It) return;
                const Zt = It.getBoundingClientRect();
                (M =
                  G > 850
                    ? at.MathUtils.clamp(
                        -Zt.top / Math.max(1, Zt.height - I),
                        0,
                        1
                      )
                    : 0),
                  Et();
              },
              Ke = (It) => {
                if (((Y = 0), !ve())) {
                  Tt.suspend(), (zt = -1 / 0);
                  return;
                }
                if (It - zt < 15) {
                  Et();
                  return;
                }
                const Zt = Number.isFinite(zt) ? Math.min(64, It - zt) : 16;
                zt = It;
                const te = h.current,
                  Oe = te ? Tt.complete() : Tt.tick(It);
                (H.uAssembly.value = Oe),
                  (H.uExit.value = te ? 0 : M),
                  (K.visible = Oe < 1),
                  (et.visible = Oe >= 1),
                  Oe >= 1 && !dt && ((dt = !0), y(!0)),
                  te || G <= 850
                    ? Wt.set(0, 0)
                    : Wt.lerp(Re, 1 - Math.exp(-Zt / 110));
                const ee = !te && G > 850 && Wt.distanceToSquared(Re) > 1e-6;
                !ee && !te && Wt.copy(Re),
                  ct.position.set(
                    tt + Wt.x * 5 - M * 46,
                    st + Wt.y * 4,
                    M * 65
                  ),
                  ct.rotation.set(-Wt.y * 0.025, Wt.x * 0.045 - M * 0.075, 0),
                  C.render(ht, _t),
                  Oe < 1 || ee ? Et() : (Tt.suspend(), (zt = -1 / 0));
              },
              Z = () => {
                if (!ve()) {
                  W(), Tt.suspend(), (zt = -1 / 0);
                  return;
                }
                Et();
              };
            o.current = {
              pause: () => {
                Z();
              },
              replay: () => {
                h.current ||
                  (Tt.restart(),
                  (dt = !1),
                  y(!1),
                  (H.uAssembly.value = 0),
                  Z());
              },
            };
            const Je = (It) => {
                if (G <= 850) return;
                const Zt = S.getBoundingClientRect();
                Re.set(
                  at.MathUtils.clamp(
                    ((It.clientX - Zt.left) / Zt.width) * 2 - 1,
                    -1,
                    1
                  ),
                  at.MathUtils.clamp(
                    1 - ((It.clientY - Zt.top) / Zt.height) * 2,
                    -1,
                    1
                  )
                ),
                  Et();
              },
              cl = () => {
                Re.set(0, 0), Et();
              },
              Nl = (It) => {
                It.preventDefault(), rt();
              },
              Pt = () => {
                b.matches && rt();
              },
              fl = S.closest(".hero-viewport");
            fl.addEventListener("pointermove", Je),
              fl.addEventListener("pointerleave", cl),
              window.addEventListener("scroll", ye, { passive: !0 }),
              document.addEventListener("visibilitychange", Z),
              C.domElement.addEventListener("webglcontextlost", Nl),
              b.addEventListener("change", Pt),
              k.push(
                () => fl.removeEventListener("pointermove", Je),
                () => fl.removeEventListener("pointerleave", cl),
                () => window.removeEventListener("scroll", ye),
                () => document.removeEventListener("visibilitychange", Z),
                () => b.removeEventListener("change", Pt)
              ),
              (x = new ResizeObserver(kt)),
              x.observe(S),
              (P = new IntersectionObserver(
                ([It]) => {
                  (N = It.isIntersecting), Z();
                },
                { threshold: 0 }
              )),
              P.observe(S),
              kt(),
              ye(),
              p("webgl"),
              Z();
          } catch {
            rt();
          }
        })(),
        () => {
          (z = !1),
            (o.current = null),
            k.forEach((at) => at()),
            P == null || P.disconnect(),
            x == null || x.disconnect(),
            W(),
            O == null || O.dispose(),
            Q == null || Q.dispose(),
            B == null || B.dispose(),
            X == null || X.dispose(),
            V == null || V.dispose(),
            C == null || C.dispose(),
            C == null || C.domElement.remove();
        }
      );
    }, [d]),
    E.jsxs("div", {
      className: "cinematic-stage",
      "data-renderer": g,
      "data-assembled": _,
      "aria-label": i,
      role: "img",
      children: [
        E.jsx("img", {
          className: "stage-fallback",
          ref: f,
          src: d,
          alt: "",
          fetchPriority: "high",
          decoding: "async",
          width: "1254",
          height: "1254",
        }),
        E.jsx("div", { className: "stage-canvas", ref: r }),
      ],
    })
  );
}
const Y8 = {
    "/images/brand-v2/hero-environment.webp": [
      {
        src: "/images/optimized/hero-environment-1672.webp",
        width: 1672,
        height: 941,
        bytes: 415060,
      },
    ],
    "/images/brand-v2/vitalik-story-world.webp": [
      {
        src: "/images/optimized/author-world-800.webp",
        width: 800,
        height: 400,
        bytes: 141004,
      },
      {
        src: "/images/optimized/author-world-1200.webp",
        width: 1200,
        height: 600,
        bytes: 287914,
      },
      {
        src: "/images/optimized/author-world-1774.webp",
        width: 1774,
        height: 887,
        bytes: 537790,
      },
    ],
    "/images/premium/two-worlds.webp": [
      {
        src: "/images/optimized/two-worlds-800.webp",
        width: 800,
        height: 450,
        bytes: 141190,
      },
      {
        src: "/images/optimized/two-worlds-1200.webp",
        width: 1200,
        height: 675,
        bytes: 283914,
      },
      {
        src: "/images/optimized/two-worlds-1672.webp",
        width: 1672,
        height: 941,
        bytes: 483812,
      },
    ],
    "/images/brand-v2/x-banner-hd.webp": [
      {
        src: "/images/optimized/brand-cover-800.webp",
        width: 800,
        height: 267,
        bytes: 92972,
      },
      {
        src: "/images/optimized/brand-cover-1200.webp",
        width: 1200,
        height: 400,
        bytes: 189956,
      },
      {
        src: "/images/optimized/brand-cover-2172.webp",
        width: 2172,
        height: 724,
        bytes: 498654,
      },
    ],
    "/images/snowmoon-hero-v2.webp": [
      {
        src: "/images/optimized/kalimar-600.webp",
        width: 600,
        height: 338,
        bytes: 84836,
      },
      {
        src: "/images/optimized/kalimar-1000.webp",
        width: 1e3,
        height: 563,
        bytes: 209196,
      },
      {
        src: "/images/optimized/kalimar-1672.webp",
        width: 1672,
        height: 941,
        bytes: 484652,
      },
    ],
    "/images/zipcoin-payment.webp": [
      {
        src: "/images/optimized/zipcoin-600.webp",
        width: 600,
        height: 400,
        bytes: 50252,
      },
      {
        src: "/images/optimized/zipcoin-1000.webp",
        width: 1e3,
        height: 667,
        bytes: 101490,
      },
      {
        src: "/images/optimized/zipcoin-1536.webp",
        width: 1536,
        height: 1024,
        bytes: 164962,
      },
    ],
    "/images/minpentai-arena.webp": [
      {
        src: "/images/optimized/minpentai-600.webp",
        width: 600,
        height: 400,
        bytes: 62890,
      },
      {
        src: "/images/optimized/minpentai-1000.webp",
        width: 1e3,
        height: 667,
        bytes: 148886,
      },
      {
        src: "/images/optimized/minpentai-1536.webp",
        width: 1536,
        height: 1024,
        bytes: 267718,
      },
    ],
  },
  Fc = new Map();
let Wc;
function V8(d, n) {
  return "IntersectionObserver" in window
    ? (Wc ??
        (Wc = new IntersectionObserver(
          (u) => {
            for (const i of u) {
              if (!i.isIntersecting) continue;
              const r = Fc.get(i.target);
              Fc.delete(i.target), Wc.unobserve(i.target), r == null || r();
            }
          },
          { rootMargin: "400px 0px" }
        )),
      Fc.set(d, n),
      Wc.observe(d),
      () => {
        Fc.delete(d), Wc.unobserve(d);
      })
    : (n(), () => {});
}
function Li({ src: d, sizes: n = "100vw", width: u, height: i, ...r }) {
  const f = w.useRef(null),
    [o, h] = w.useState(!1),
    g = Y8[d],
    p = g == null ? void 0 : g.at(-1);
  return (
    w.useEffect(() => V8(f.current, () => h(!0)), []),
    E.jsx("img", {
      ...r,
      ref: f,
      width: u ?? (p == null ? void 0 : p.width),
      height: i ?? (p == null ? void 0 : p.height),
      src: o ? (p == null ? void 0 : p.src) ?? d : void 0,
      srcSet: o && g ? g.map((_) => `${_.src} ${_.width}w`).join(", ") : void 0,
      sizes: g ? n : void 0,
      decoding: "async",
      fetchPriority: "low",
      "data-deferred": o ? "loaded" : "waiting",
    })
  );
}
Vl.registerPlugin(Ct);
const rf = "https://vitalik.eth.limo/snowmoon/",
  Z8 = "/images/brand/snowmoon-token-avatar.jpg",
  q8 =
    "SNOWMOON community avatar: a silver crescent, ice-blue crystal, snow mountains and moonlight.",
  X8 = "/images/brand-v2/hero-environment.webp",
  yf = "/images/brand-v2/lunar-core.webp",
  Ug = "/images/brand-v2/x-banner-hd.webp",
  Ah = "/images/brand-v2/vitalik-story-world.webp",
  Mh = "/images/premium/two-worlds.webp",
  jg = (d) => `${rf}html/chapter-${d}.html`,
  G8 = {
    zh: {
      story: "叙事",
      world: "两个世界",
      chapters: "社区章节",
      media: "创作素材",
      buy: "购买 SNOWMOON",
      chart: "查看行情",
      novel: "阅读原著",
      heroLabel: "诞生于故事 · 生长于社区",
      heroText: `一个关于自由、隐私与选择的故事。
一种由社区共同书写的 MEME 文化。`,
      network: "以太坊",
      copy: "复制合约",
      copied: "合约地址已复制",
      copyFail: "复制失败，请手动选择合约地址。",
      origin: "01 / 故事的起点",
      originTitle: `故事之外，
轮到我们。`,
      originText:
        "自由应该属于每个人。隐私应该成为日常。去中心化，应该是一种生活方式。",
      originText2:
        "从 Veridia 的街道，到 Arctic Empire 的高墙，Snowmoon 展开了两种截然不同的未来。下一章，用我们的方式写。",
      values: ["自由", "隐私", "去中心化"],
      worldLabel: "02 / 两种文明，两种未来",
      worldTitle: `TWO CIVILIZATIONS.
TWO VISIONS.`,
      worldIntro: "同一片天空之下，对未来的想象走向两个方向。你站在哪一边？",
      choose: "选择你的立场",
      signal: "你的选择",
      sides: [
        {
          name: "VERIDIA",
          subtitle: "让自由成为日常。",
          keywords: ["自由", "隐私", "去中心化"],
          desc: "技术应当保护个人的选择，而非替个人做出选择。社区以 Veridia 代表自由、隐私与去中心化的愿景。",
          small: "A WORLD THAT BELONGS TO ITS PEOPLE.",
        },
        {
          name: "ARCTIC EMPIRE",
          subtitle: "当秩序拥有一切。",
          keywords: ["控制", "中心化", "绝对秩序"],
          desc: "统一的权力、被安排的生活。Arctic Empire 是这个双文明叙事中，控制、中心化与绝对秩序的另一极。",
          small: "A WORLD WITH ONLY ONE ANSWER.",
        },
      ],
      loreLabel: "03 / 不止于一个名字",
      loreTitle: `THE WORLD
BEHIND THE MEME.`,
      loreIntro: "读过故事，才知道我们在为什么而 MEME。",
      readChapter: "阅读章节",
      lore: [
        {
          name: "VERIDIA",
          tag: "密码学融入生活",
          desc: "森林间的城市、石砖住宅与空中步桥。腕表验证路过的玩具无人机，却不需要知道它的主人是谁。",
          image: "/images/snowmoon-hero-v2.webp",
          alt: "第一章：森林城市、空中步桥与玩具无人机。",
          n: 1,
        },
        {
          name: "ZIPCOIN & EMERALD",
          tag: "私密货币与本地 AI",
          desc: "Zipcoin 是书里的私密货币；Emerald 是本地 AI。在 Kalimar 餐馆里，付一顿饭的钱，并不意味着交出身份。",
          image: "/images/zipcoin-payment.webp",
          alt: "第六章：Kalimar 餐馆中的私密数字支付。",
          n: 6,
        },
        {
          name: "MINPENTAI",
          tag: "简单规则，复杂世界",
          desc: "由细胞模式、滑翔机与墙构成的战略游戏。微小的选择，在不断演化的网格上改变整个局面。",
          image: "/images/minpentai-arena.webp",
          alt: "第十二章：Minpentai 数字细胞模式竞赛。",
          n: 12,
        },
      ],
      logLabel: "04 / 社区正在写下的章节",
      logTitle: "A STORY IN MOTION.",
      logIntro: "来自 @snowmoonerc 的公开记录。每一章，都有迹可循。",
      source: "查看 X 原帖",
      logs: [
        {
          tag: "CHAPTER 01 / THE BEGINNING",
          title: "一个故事，一个共同的符号。",
          desc: "社区公布合约地址，以“One Moon. Infinite Dreams.”开启 SNOWMOON 的新章节。",
          url: "https://x.com/snowmoon_erc/status/2117967013100519705",
        },
        {
          tag: "DAY ONE / COMMUNITY",
          title: "第一天，只是故事的开始。",
          desc: "社区发布 Day One 回顾，记录从故事到社区的第一步。",
          url: "https://x.com/snowmoon_erc/status/2118045064434004287",
        },
        {
          tag: "IDENTITY / BRAND",
          title: "让同一个符号被看见。",
          desc: "项目发布 DEX Screener 与 AVE 资料、品牌更新记录。",
          url: "https://x.com/snowmoon_erc/status/2118038866997428471",
        },
        {
          tag: "CULTURE / THE NEXT CHAPTER",
          title: "每一个 MEME，都有自己的故事。",
          desc: "一个符号，一群人。属于 SNOWMOON 的身份、社区与文化，正在被共同写下。",
          url: "https://x.com/snowmoon_erc/status/2117914314535518549",
        },
      ],
      mediaLabel: "05 / 让想象继续",
      mediaTitle: `MAKE THE
NEXT MEME.`,
      mediaIntro: "带走素材，做出你的版本。下一张图，也许就来自你。",
      view: "查看素材",
      download: "下载素材",
      close: "关闭",
      assets: [
        {
          title: "THE SNOWMOON WORLD",
          type: "品牌横幅",
          src: Ug,
          alt: "SNOWMOON 品牌封面：深蓝星空、月球、冰雪城市和银月晶体。",
          file: "snowmoon-x-cover.webp",
        },
        {
          title: "THE LUNAR CORE",
          type: "透明月晶素材",
          src: yf,
          alt: "银白新月与冰蓝、淡紫切面晶体，与品牌封面保持一致。",
          file: "snowmoon-lunar-core.webp",
        },
        {
          title: "TWO CIVILIZATIONS",
          type: "两个世界",
          src: Mh,
          alt: "森林城市与秩序化工业城市，展现两个不同的世界。",
          file: "snowmoon-two-civilizations.webp",
        },
        {
          title: "THE AUTHOR’S WORLD",
          type: "原著叙事插画",
          src: Ah,
          alt: "原创叙事插画：Vitalik Buterin、展开的书、双城与银月晶体。",
          file: "snowmoon-authors-world.webp",
          credits: "/images/brand-v2/vitalik-story-world-credits.txt",
        },
      ],
      communityLabel: "每一个人，都是下一章",
      communityText: `故事由一个人写下。
文化由所有人一起创造。`,
      x: "进入 X 社区",
      tg: "加入 Telegram",
      pause: "暂停动画",
      resume: "继续动画",
      menu: "打开菜单",
      closeMenu: "关闭菜单",
    },
    en: {
      story: "The story",
      world: "Two worlds",
      chapters: "Chapters",
      media: "Meme kit",
      buy: "Buy SNOWMOON",
      chart: "View chart",
      novel: "Read the novel",
      heroLabel: "BORN FROM A STORY. POWERED BY THE COMMUNITY.",
      heroText: `A story of freedom, privacy and choice.
A meme culture written by all of us.`,
      network: "ETHEREUM",
      copy: "Copy contract",
      copied: "Contract address copied",
      copyFail: "Could not copy. Please select the address.",
      origin: "01 / WHERE IT BEGINS",
      originTitle: `ONE STORY.
ALL OF US.`,
      originText:
        "Freedom belongs to everyone. Privacy belongs in everyday life. Decentralization is a way to live.",
      originText2:
        "From the streets of Veridia to the walls of the Arctic Empire, Snowmoon opens two different futures. We write what comes next.",
      values: ["FREEDOM", "PRIVACY", "DECENTRALIZATION"],
      worldLabel: "02 / TWO CIVILIZATIONS, TWO FUTURES",
      worldTitle: `TWO CIVILIZATIONS.
TWO VISIONS.`,
      worldIntro:
        "Under one sky, two very different ideas of the future. Where do you stand?",
      choose: "Choose your side",
      signal: "Your signal",
      sides: [
        {
          name: "VERIDIA",
          subtitle: "Freedom, lived every day.",
          keywords: ["Freedom", "Privacy", "Decentralization"],
          desc: "Technology should protect individual choice. The community looks to Veridia as a vision of freedom, privacy and decentralization.",
          small: "A WORLD THAT BELONGS TO ITS PEOPLE.",
        },
        {
          name: "ARCTIC EMPIRE",
          subtitle: "When order owns everything.",
          keywords: ["Control", "Centralization", "Absolute order"],
          desc: "One center of power. Every life in its place. The Arctic Empire represents control, centralization and absolute order in this two-civilization narrative.",
          small: "A WORLD WITH ONLY ONE ANSWER.",
        },
      ],
      loreLabel: "03 / MORE THAN A NAME",
      loreTitle: `THE WORLD
BEHIND THE MEME.`,
      loreIntro: "Know the story. Find what is worth making memes about.",
      readChapter: "Read chapter",
      lore: [
        {
          name: "VERIDIA",
          tag: "CRYPTOGRAPHY IN EVERYDAY LIFE",
          desc: "A forest city, stone homes and sky bridges. A watch verifies a passing toy drone without needing to know who owns it.",
          image: "/images/snowmoon-hero-v2.webp",
          alt: "Chapter 1: a forest city, sky bridge and toy drone.",
          n: 1,
        },
        {
          name: "ZIPCOIN & EMERALD",
          tag: "PRIVATE MONEY. LOCAL AI.",
          desc: "Zipcoin is the novel’s private money. Emerald is local AI. Paying for a meal in Kalimar does not mean giving up your identity.",
          image: "/images/zipcoin-payment.webp",
          alt: "Chapter 6: private digital payment in a Kalimar restaurant.",
          n: 6,
        },
        {
          name: "MINPENTAI",
          tag: "SIMPLE RULES. COMPLEX WORLDS.",
          desc: "A strategy game of cellular patterns, gliders and walls. Small choices reshape the game as its grid continues to evolve.",
          image: "/images/minpentai-arena.webp",
          alt: "Chapter 12: a Minpentai cellular-pattern tournament.",
          n: 12,
        },
      ],
      logLabel: "04 / WRITTEN BY THE COMMUNITY",
      logTitle: "A STORY IN MOTION.",
      logIntro:
        "Public dispatches from @snowmoonerc. Every chapter has a source.",
      source: "Read the X post",
      logs: [
        {
          tag: "CHAPTER 01 / THE BEGINNING",
          title: "One story. One shared symbol.",
          desc: "The community confirms its contract address and opens a new chapter with “One Moon. Infinite Dreams.”",
          url: "https://x.com/snowmoon_erc/status/2117967013100519705",
        },
        {
          tag: "DAY ONE / COMMUNITY",
          title: "Day one is only the beginning.",
          desc: "The community’s Day One recap marks the first step from a story to a shared culture.",
          url: "https://x.com/snowmoon_erc/status/2118045064434004287",
        },
        {
          tag: "IDENTITY / BRAND",
          title: "A signal becomes recognizable.",
          desc: "The project shares DEX Screener and AVE profile and branding updates.",
          url: "https://x.com/snowmoon_erc/status/2118038866997428471",
        },
        {
          tag: "CULTURE / THE NEXT CHAPTER",
          title: "Every meme has a story.",
          desc: "One symbol. One community. SNOWMOON continues to find its own identity and place in meme culture.",
          url: "https://x.com/snowmoon_erc/status/2117914314535518549",
        },
      ],
      mediaLabel: "05 / KEEP THE IMAGINATION GOING",
      mediaTitle: `MAKE THE
NEXT MEME.`,
      mediaIntro:
        "Take the artwork. Make it yours. The next image could come from you.",
      view: "View artwork",
      download: "Download artwork",
      close: "Close",
      assets: [
        {
          title: "THE SNOWMOON WORLD",
          type: "Brand cover",
          src: Ug,
          alt: "SNOWMOON brand cover: deep-blue cosmos, a textured moon, snow cities and a silver lunar crystal.",
          file: "snowmoon-x-cover.webp",
        },
        {
          title: "THE LUNAR CORE",
          type: "Transparent artwork",
          src: yf,
          alt: "A silver-white crescent above an ice-blue and lavender faceted crystal, matching the brand cover.",
          file: "snowmoon-lunar-core.webp",
        },
        {
          title: "TWO CIVILIZATIONS",
          type: "Two worlds",
          src: Mh,
          alt: "A forest city on the left and an ordered industrial city on the right.",
          file: "snowmoon-two-civilizations.webp",
        },
        {
          title: "THE AUTHOR’S WORLD",
          type: "Story artwork",
          src: Ah,
          alt: "An original Snowmoon illustration of Vitalik Buterin, an open book, two blue cities and the lunar crystal.",
          file: "snowmoon-authors-world.webp",
          credits: "/images/brand-v2/vitalik-story-world-credits.txt",
        },
      ],
      communityLabel: "EVERYONE IS THE NEXT CHAPTER",
      communityText: `A story written by one.
A culture created by all.`,
      x: "Join us on X",
      tg: "Join Telegram",
      pause: "Pause motion",
      resume: "Resume motion",
      menu: "Open menu",
      closeMenu: "Close menu",
    },
  };
function Ge({ href: d, children: n, className: u = "", ...i }) {
  return E.jsx("a", {
    href: d,
    target: "_blank",
    rel: "noreferrer",
    className: u,
    ...i,
    children: n,
  });
}
function Ea({ children: d }) {
  return E.jsx("p", { className: "section-label", children: d });
}
function Lg({ compact: d = !1 }) {
  return E.jsxs("div", {
    className: `trade-links ${d ? "trade-links-compact" : ""}`,
    children: [
      E.jsxs(Ge, {
        href: gl.buyUrl,
        className: "trade-button trade-uniswap",
        "aria-label": "Buy SNOWMOON on Uniswap",
        children: [
          E.jsx("img", {
            src: "/images/optimized/uniswap-64.webp",
            alt: "",
            width: "24",
            height: "24",
          }),
          E.jsx("span", {
            className: "trade-primary-label",
            children: "Buy $SNOWMOON",
          }),
          E.jsx("span", { className: "trade-primary-short", children: "Buy" }),
        ],
      }),
      E.jsxs(Ge, {
        href: gl.chartUrl,
        className: "trade-button",
        children: [
          E.jsx("img", {
            src: "/images/platforms/gmgn.png",
            alt: "",
            width: "24",
            height: "24",
          }),
          E.jsx("span", { children: "GMGN" }),
        ],
      }),
      E.jsxs(Ge, {
        href: gl.dexUrl,
        className: "trade-button",
        "aria-label": "DEX Screener",
        children: [
          E.jsx("img", {
            src: "/images/optimized/dexscreener-64.webp",
            alt: "",
            width: "24",
            height: "24",
          }),
          E.jsx("span", {
            className: "trade-long-label",
            children: "DEX Screener",
          }),
          E.jsx("span", { className: "trade-short-label", children: "DEX" }),
        ],
      }),
    ],
  });
}
function Bg({ compact: d = !1, lang: n, copied: u, onCopy: i }) {
  return E.jsxs("div", {
    className: `contract-block ${
      d ? "token-contract-wrap" : "hero-contract-wrap"
    }`,
    children: [
      E.jsxs("div", {
        className: "contract-meta",
        children: [
          E.jsx("span", {
            children: n === "zh" ? "合约地址" : "Contract address",
          }),
          E.jsxs("span", {
            className: "contract-network",
            children: [E.jsx("i", { "aria-hidden": "true" }), "Ethereum"],
          }),
        ],
      }),
      E.jsxs("button", {
        className: d ? "contract-copy" : "hero-contract",
        onClick: i,
        "aria-label": `${n === "zh" ? "复制合约" : "Copy contract"}: ${
          gl.contractAddress
        }`,
        children: [
          E.jsxs("code", {
            className: "contract-address",
            children: [
              E.jsx("span", { children: gl.contractAddress.slice(0, 22) }),
              E.jsx("wbr", {}),
              E.jsx("span", { children: gl.contractAddress.slice(22) }),
            ],
          }),
          E.jsxs("span", {
            className: "contract-copy-action",
            "aria-hidden": "true",
            children: [
              u ? E.jsx(th, { size: 19 }) : E.jsx(Xy, { size: 19 }),
              E.jsx("span", {
                children: u
                  ? n === "zh"
                    ? "已复制"
                    : "Copied"
                  : n === "zh"
                  ? "复制"
                  : "Copy",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Q8({ restartIntro: d = !1 }) {
  const [n, u] = w.useState("en"),
    [i, r] = w.useState(0),
    [f, o] = w.useState(!1),
    [h, g] = w.useState(!1),
    [p, _] = w.useState(0),
    [y, S] = w.useState(null),
    [b, z] = w.useState(""),
    T = w.useRef(null),
    C = w.useRef(null),
    V = w.useRef(null),
    O = G8[n],
    Q = O.sides[i];
  w.useLayoutEffect(() => {
    const x = performance.getEntriesByType("navigation")[0],
      Y =
        !d && (x == null ? void 0 : x.type) === "navigate"
          ? document.getElementById(window.location.hash.slice(1))
          : null;
    if (!d && !Y) return;
    d && Ct.clearScrollMemory("manual");
    const k = document.documentElement.style.scrollBehavior;
    (document.documentElement.style.scrollBehavior = "auto"),
      d
        ? window.scrollTo({ top: 0, left: 0, behavior: "instant" })
        : Y.scrollIntoView({ block: "start", behavior: "instant" }),
      (document.documentElement.style.scrollBehavior = k);
  }, [d]),
    w.useEffect(() => {
      document.documentElement.lang = n === "zh" ? "zh-CN" : "en";
    }, [n]),
    w.useEffect(() => {
      const x = T.current.querySelector(".belief-strip"),
        Y = new IntersectionObserver(([k]) => {
          x.toggleAttribute("data-in-view", k.isIntersecting);
        });
      return Y.observe(x), () => Y.disconnect();
    }, []),
    w.useEffect(() => {
      if (!f) return;
      const x = (Y) => {
        var k;
        Y.key === "Escape" &&
          (o(!1),
          (k = document.querySelector(".menu-toggle")) == null || k.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [f]),
    w.useEffect(() => {
      const x = Vl.matchMedia();
      return (
        x.add(
          "(prefers-reduced-motion: no-preference)",
          () => {
            if (h) return;
            document.documentElement.hasAttribute("data-prerendered") ||
              (Vl.from(
                ".hero-copy > .section-label, .hero-copy h1, .hero-description",
                {
                  y: 18,
                  opacity: 0,
                  duration: 0.8,
                  stagger: 0.07,
                  ease: "power3.out",
                  force3D: !1,
                  clearProps: "transform,opacity",
                }
              ),
              Vl.from(".hero-wordmark", {
                yPercent: 100,
                duration: 1.1,
                ease: "power4.out",
                delay: 0.2,
                force3D: !1,
                clearProps: "transform",
              })),
              Vl.utils
                .toArray("[data-reveal]")
                .forEach((k) =>
                  Vl.from(k, {
                    y: 35,
                    opacity: 0,
                    duration: 0.85,
                    ease: "power2.out",
                    force3D: !1,
                    clearProps: "transform,opacity",
                    scrollTrigger: { trigger: k, start: "top 95%", once: !0 },
                  })
                );
            const Y = Vl.matchMedia();
            return (
              Y.add("(min-width: 851px)", () => {
                const k = T.current.querySelector(".hero-copy");
                return (
                  Vl.timeline({
                    scrollTrigger: {
                      trigger: ".hero",
                      start: "top top",
                      end: "bottom bottom",
                      scrub: 0.65,
                      onUpdate: (rt) => {
                        k.inert = rt.progress > 0.58;
                      },
                    },
                  })
                    .to(
                      ".hero-art",
                      { scale: 1.13, yPercent: -3, ease: "none", duration: 1 },
                      0
                    )
                    .to(
                      ".hero-copy",
                      { y: -28, opacity: 0, ease: "power1.in", duration: 0.28 },
                      0.28
                    )
                    .to(
                      ".hero-wordmark-wrap",
                      { y: 32, opacity: 0.12, duration: 0.5 },
                      0.2
                    )
                    .fromTo(
                      ".hero-scroll-caption",
                      { y: 48, opacity: 0 },
                      { y: 0, opacity: 1, duration: 0.28 },
                      0.64
                    )
                    .to(".hero-footer", { opacity: 0, duration: 0.2 }, 0.05),
                  Vl.utils
                    .toArray(".lore-image img")
                    .forEach((rt) =>
                      Vl.fromTo(
                        rt,
                        { yPercent: -4, scale: 1.1 },
                        {
                          yPercent: 4,
                          scale: 1.1,
                          ease: "none",
                          scrollTrigger: {
                            trigger: rt.closest(".lore-card"),
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.8,
                          },
                        }
                      )
                    ),
                  () => {
                    k.inert = !1;
                  }
                );
              }),
              () => Y.revert()
            );
          },
          T
        ),
        () => x.revert()
      );
    }, [h]),
    w.useEffect(() => {
      if (h || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;
      const x = Vl.context(() => {
        Vl.fromTo(
          ".civilizations-image",
          { scale: 1.055, xPercent: i === 0 ? -1 : 1 },
          {
            scale: 1,
            xPercent: 0,
            duration: 1.25,
            ease: "power2.out",
            clearProps: "transform",
          }
        ),
          Vl.from(".civilization-panel h3, .civilization-panel p", {
            y: 12,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            clearProps: "transform,opacity",
          });
      }, T);
      return () => x.revert();
    }, [i, h]),
    w.useEffect(
      () => (
        y !== null && !C.current.open && C.current.showModal(),
        y === null && C.current.open && C.current.close(),
        (document.body.style.overflow = y !== null ? "hidden" : ""),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [y]
    ),
    w.useEffect(() => () => clearTimeout(V.current), []);
  const B = async () => {
      var x;
      try {
        if (
          window.isSecureContext &&
          (x = navigator.clipboard) != null &&
          x.writeText
        )
          await navigator.clipboard.writeText(gl.contractAddress);
        else {
          const Y = document.createElement("textarea"),
            k = document.activeElement;
          (Y.value = gl.contractAddress),
            Y.setAttribute("readonly", ""),
            (Y.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0"),
            document.body.appendChild(Y),
            Y.select();
          const W = document.execCommand("copy");
          if ((Y.remove(), k == null || k.focus({ preventScroll: !0 }), !W))
            throw new Error("Copy unavailable");
        }
        z(O.copied);
      } catch {
        z(O.copyFail);
      }
      clearTimeout(V.current), (V.current = setTimeout(() => z(""), 3500));
    },
    X = () => o(!1),
    P = (x, Y) => {
      if (x.key === "ArrowRight" || x.key === "ArrowLeft") {
        x.preventDefault();
        const k = Y === 0 ? 1 : 0;
        r(k), document.getElementById(`civilization-${k}`).focus();
      }
    };
  return E.jsxs("div", {
    className: `site ${h ? "motion-paused" : ""}`,
    ref: T,
    children: [
      E.jsx("a", {
        className: "skip-link",
        href: "#main",
        children: n === "zh" ? "跳至内容" : "Skip to content",
      }),
      E.jsxs("header", {
        className: "header",
        children: [
          E.jsxs("a", {
            className: "brand",
            href: "#top",
            "aria-label": "Snowmoon home",
            onClick: X,
            children: [
              E.jsx("img", {
                src: "/images/optimized/avatar-128.webp",
                alt: "",
                width: "42",
                height: "42",
              }),
              E.jsx("span", { children: "SNOWMOON" }),
            ],
          }),
          E.jsxs("nav", {
            className: "desktop-nav",
            "aria-label": "Main navigation",
            children: [
              E.jsx("a", { href: "#story", children: O.story }),
              E.jsx("a", { href: "#world", children: O.world }),
              E.jsx("a", { href: "#chapters", children: O.chapters }),
              E.jsx("a", { href: "#media", children: O.media }),
            ],
          }),
          E.jsxs("div", {
            className: "header-actions",
            children: [
              E.jsx("button", {
                className: "language",
                onClick: () => u(n === "zh" ? "en" : "zh"),
                "aria-label":
                  n === "zh" ? "Switch to English" : "Switch to Chinese",
                children: n === "zh" ? "ZH / EN" : "EN / ZH",
              }),
              E.jsx(Ge, {
                href: gl.buyUrl,
                className: "button button-small",
                children: O.buy,
              }),
              E.jsx("button", {
                className: "icon-button menu-toggle",
                "aria-label": f ? O.closeMenu : O.menu,
                "aria-expanded": f,
                "aria-controls": "mobile-nav",
                onClick: () => o(!f),
                children: f ? E.jsx($p, { size: 23 }) : E.jsx(Gy, { size: 23 }),
              }),
            ],
          }),
        ],
      }),
      f &&
        E.jsxs("nav", {
          id: "mobile-nav",
          className: "mobile-nav",
          "aria-label": "Mobile navigation",
          children: [
            [
              ["story", O.story],
              ["world", O.world],
              ["chapters", O.chapters],
              ["media", O.media],
            ].map(([x, Y]) =>
              E.jsx("a", { href: `#${x}`, onClick: X, children: Y }, x)
            ),
            E.jsx(Ge, { href: gl.buyUrl, onClick: X, children: O.buy }),
          ],
        }),
      E.jsxs("main", {
        id: "main",
        children: [
          E.jsx("section", {
            className: "hero",
            id: "top",
            "aria-labelledby": "hero-title",
            children: E.jsxs("div", {
              className: "hero-viewport",
              children: [
                E.jsxs("picture", {
                  className: "hero-picture",
                  children: [
                    E.jsx("source", {
                      media: "(max-width: 600px)",
                      srcSet: "/images/optimized/hero-mobile.webp",
                    }),
                    E.jsx("source", {
                      media: "(max-width: 850px)",
                      srcSet: "/images/optimized/hero-tablet.webp",
                    }),
                    E.jsx("img", {
                      className: "hero-art",
                      src: "/images/optimized/hero-environment-1672.webp",
                      alt: "",
                      fetchPriority: "high",
                      decoding: "async",
                      width: "1672",
                      height: "941",
                    }),
                  ],
                }),
                E.jsx("div", { className: "hero-shade" }),
                E.jsx(B8, {
                  src: yf,
                  paused: h,
                  replayToken: p,
                  alt: O.assets[1].alt,
                }),
                E.jsxs("div", {
                  className: "hero-meta",
                  children: [
                    E.jsx("span", { children: "ETHEREUM COMMUNITY MEME" }),
                    E.jsx("span", { children: "SNOWMOON" }),
                  ],
                }),
                E.jsxs("div", {
                  className: "hero-copy",
                  children: [
                    E.jsx(Ea, { children: O.heroLabel }),
                    E.jsxs("h1", {
                      id: "hero-title",
                      children: [
                        "ONE MOON.",
                        E.jsx("br", {}),
                        E.jsx("span", { children: "INFINITE DREAMS." }),
                      ],
                    }),
                    E.jsx("p", {
                      className: "hero-description",
                      children: O.heroText,
                    }),
                    E.jsx("div", {
                      className: "hero-ctas",
                      children: E.jsx(Lg, {}),
                    }),
                    E.jsx(Bg, { lang: n, copied: b === O.copied, onCopy: B }),
                    E.jsxs("div", {
                      className: "hero-socials",
                      children: [
                        E.jsxs(Ge, {
                          href: gl.xUrl,
                          children: [
                            E.jsx(B0, { size: 17, weight: "bold" }),
                            "X / Twitter",
                          ],
                        }),
                        E.jsx(Ge, {
                          href: gl.telegramUrl,
                          children: "Telegram",
                        }),
                      ],
                    }),
                  ],
                }),
                E.jsxs("div", {
                  className: "hero-footer",
                  children: [
                    E.jsx("button", {
                      className: "replay-intro",
                      onClick: () => _((x) => x + 1),
                      disabled: h,
                      children: n === "zh" ? "重播开场" : "REPLAY INTRO",
                    }),
                    E.jsx("button", {
                      className: "icon-button",
                      onClick: () => g(!h),
                      "aria-label": h ? O.resume : O.pause,
                      "aria-pressed": h,
                      children: h
                        ? E.jsx(ky, { size: 15, weight: "fill" })
                        : E.jsx(Qy, { size: 15, weight: "fill" }),
                    }),
                  ],
                }),
                E.jsxs("div", {
                  className: "hero-scroll-caption",
                  "aria-hidden": "true",
                  children: [
                    E.jsx("span", { children: "THE STORY CONTINUES" }),
                    E.jsxs("p", {
                      children: [
                        "THE NEXT CHAPTER",
                        E.jsx("br", {}),
                        E.jsx("em", { children: "IS OURS." }),
                      ],
                    }),
                  ],
                }),
                E.jsx("div", {
                  className: "hero-wordmark-wrap",
                  "aria-hidden": "true",
                  children: E.jsx("div", {
                    className: "hero-wordmark",
                    children: "SNOWMOON",
                  }),
                }),
              ],
            }),
          }),
          E.jsxs("div", {
            className: "token-strip",
            children: [
              E.jsxs("div", {
                className: "token-identity",
                children: [
                  E.jsx("img", {
                    src: "/images/optimized/avatar-128.webp",
                    width: "44",
                    height: "44",
                    alt: "",
                  }),
                  E.jsxs("div", {
                    children: [
                      E.jsx("strong", { children: "$SNOWMOON" }),
                      E.jsx("span", { children: O.network }),
                    ],
                  }),
                ],
              }),
              E.jsx(Bg, {
                compact: !0,
                lang: n,
                copied: b === O.copied,
                onCopy: B,
              }),
              E.jsx(Lg, { compact: !0 }),
            ],
          }),
          E.jsxs("section", {
            className: "origin section-pad",
            id: "story",
            "aria-labelledby": "origin-title",
            children: [
              E.jsxs("div", {
                "data-reveal": !0,
                children: [
                  E.jsx(Ea, { children: O.origin }),
                  E.jsx("h2", {
                    id: "origin-title",
                    className: "origin-title",
                    children: O.originTitle,
                  }),
                  E.jsxs(Ge, {
                    className: "source-link",
                    href: rf,
                    children: [
                      O.novel,
                      E.jsx("span", { children: "ENTER THE SNOWMOON WORLD" }),
                    ],
                  }),
                ],
              }),
              E.jsxs("div", {
                className: "origin-copy",
                "data-reveal": !0,
                children: [
                  E.jsx("p", { children: O.originText }),
                  E.jsx("p", { children: O.originText2 }),
                  E.jsxs("div", {
                    className: "origin-facts",
                    children: [
                      E.jsxs("span", {
                        children: [E.jsx("b", { children: "32" }), "CHAPTERS"],
                      }),
                      E.jsxs("span", {
                        children: [E.jsx("b", { children: "02" }), "VISIONS"],
                      }),
                      E.jsxs("span", {
                        children: [E.jsx("b", { children: "01" }), "MOON"],
                      }),
                    ],
                  }),
                ],
              }),
              E.jsxs("figure", {
                className: "origin-artwork",
                "data-reveal": !0,
                children: [
                  E.jsx(Li, {
                    src: Ah,
                    alt: O.assets[3].alt,
                    sizes: "(max-width: 850px) 88vw, 86vw",
                  }),
                  E.jsxs("figcaption", {
                    children: [
                      E.jsxs("div", {
                        children: [
                          E.jsx("span", {
                            children:
                              n === "zh" ? "原著世界" : "THE WORLD ON THE PAGE",
                          }),
                          E.jsx("strong", {
                            children:
                              n === "zh"
                                ? "SNOWMOON / 作者 VITALIK BUTERIN"
                                : "SNOWMOON / A NOVEL BY VITALIK BUTERIN",
                          }),
                        ],
                      }),
                      E.jsx(Ge, {
                        className: "inline-link",
                        href: rf,
                        children: O.novel,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          E.jsx("div", {
            className: "belief-strip",
            "aria-label": O.values.join(", "),
            children: E.jsx("div", {
              children: [0, 1, 2, 3].map((x) =>
                E.jsx(
                  "span",
                  {
                    "aria-hidden": x !== 0,
                    children: O.values.map((Y) =>
                      E.jsxs(
                        "span",
                        {
                          children: [
                            Y,
                            E.jsx("img", {
                              src: "/images/brand/snowmoon-token-gmgn.webp",
                              alt: "",
                            }),
                          ],
                        },
                        Y
                      )
                    ),
                  },
                  x
                )
              ),
            }),
          }),
          E.jsxs("section", {
            className: "world section-pad",
            id: "world",
            "aria-labelledby": "world-title",
            children: [
              E.jsxs("div", {
                className: "section-heading",
                "data-reveal": !0,
                children: [
                  E.jsxs("div", {
                    children: [
                      E.jsx(Ea, { children: O.worldLabel }),
                      E.jsx("h2", {
                        id: "world-title",
                        children: O.worldTitle,
                      }),
                    ],
                  }),
                  E.jsx("p", { children: O.worldIntro }),
                ],
              }),
              E.jsxs("div", {
                className: `civilizations side-${i}`,
                children: [
                  E.jsx(Li, {
                    className: "civilizations-image",
                    src: Mh,
                    alt: O.assets[2].alt,
                    sizes: "(max-width: 850px) 96vw, 86vw",
                  }),
                  E.jsx("div", {
                    className: "civilization-dimmer",
                    "aria-hidden": "true",
                  }),
                  E.jsxs("div", {
                    className: "world-caption",
                    children: [
                      E.jsx("span", { children: O.choose }),
                      E.jsx("span", { children: "01 / 02" }),
                    ],
                  }),
                  E.jsx("div", {
                    className: "civilization-tabs",
                    role: "tablist",
                    "aria-label": O.choose,
                    children: O.sides.map((x, Y) =>
                      E.jsxs(
                        "button",
                        {
                          id: `civilization-${Y}`,
                          className: "civilization-tab",
                          role: "tab",
                          "aria-selected": i === Y,
                          "aria-controls": "civilization-panel",
                          tabIndex: i === Y ? 0 : -1,
                          onClick: () => r(Y),
                          onKeyDown: (k) => P(k, Y),
                          children: [
                            E.jsxs("span", {
                              className: "side-number",
                              children: ["0", Y + 1],
                            }),
                            E.jsxs("span", {
                              children: [
                                E.jsx("strong", { children: x.name }),
                                E.jsx("small", {
                                  children: x.keywords.join(" / "),
                                }),
                              ],
                            }),
                            E.jsx("span", {
                              className: "choice-indicator",
                              children:
                                i === Y
                                  ? E.jsx(th, { size: 20 })
                                  : E.jsx(Wp, { size: 20 }),
                            }),
                          ],
                        },
                        x.name
                      )
                    ),
                  }),
                ],
              }),
              E.jsxs("div", {
                className: "civilization-panel",
                id: "civilization-panel",
                role: "tabpanel",
                "aria-labelledby": `civilization-${i}`,
                children: [
                  E.jsxs("div", {
                    children: [
                      E.jsxs("span", {
                        className: "signal-label",
                        children: [O.signal, " / ", Q.name],
                      }),
                      E.jsx("h3", { children: Q.subtitle }),
                    ],
                  }),
                  E.jsxs("div", {
                    children: [
                      E.jsx("p", { children: Q.desc }),
                      E.jsx("span", {
                        className: "micro-copy",
                        children: Q.small,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          E.jsxs("section", {
            className: "lore section-pad",
            "aria-labelledby": "lore-title",
            children: [
              E.jsxs("div", {
                className: "section-heading",
                "data-reveal": !0,
                children: [
                  E.jsxs("div", {
                    children: [
                      E.jsx(Ea, { children: O.loreLabel }),
                      E.jsx("h2", { id: "lore-title", children: O.loreTitle }),
                    ],
                  }),
                  E.jsx("p", { children: O.loreIntro }),
                ],
              }),
              E.jsx("div", {
                className: "lore-grid",
                children: O.lore.map((x) =>
                  E.jsxs(
                    "article",
                    {
                      className: "lore-card",
                      "data-reveal": !0,
                      children: [
                        E.jsxs(Ge, {
                          href: jg(x.n),
                          className: "lore-image",
                          children: [
                            E.jsx(Li, {
                              src: x.image,
                              alt: x.alt,
                              sizes:
                                "(max-width: 600px) 88vw, (max-width: 850px) 29vw, 28vw",
                            }),
                            E.jsxs("span", {
                              children: [
                                "CHAPTER ",
                                String(x.n).padStart(2, "0"),
                              ],
                            }),
                          ],
                        }),
                        E.jsxs("div", {
                          className: "lore-card-heading",
                          children: [
                            E.jsx("h3", { children: x.name }),
                            E.jsx("span", { children: x.tag }),
                          ],
                        }),
                        E.jsx("p", { children: x.desc }),
                        E.jsxs(Ge, {
                          className: "inline-link",
                          href: jg(x.n),
                          children: [
                            O.readChapter,
                            " ",
                            String(x.n).padStart(2, "0"),
                          ],
                        }),
                      ],
                    },
                    x.name
                  )
                ),
              }),
            ],
          }),
          E.jsxs("section", {
            className: "chapters section-pad",
            id: "chapters",
            "aria-labelledby": "chapters-title",
            children: [
              E.jsxs("div", {
                className: "section-heading",
                "data-reveal": !0,
                children: [
                  E.jsxs("div", {
                    children: [
                      E.jsx(Ea, { children: O.logLabel }),
                      E.jsx("h2", {
                        id: "chapters-title",
                        children: O.logTitle,
                      }),
                    ],
                  }),
                  E.jsx("p", { children: O.logIntro }),
                ],
              }),
              E.jsxs("div", {
                className: "chapter-layout",
                children: [
                  E.jsxs("article", {
                    className: "featured-chapter",
                    "data-reveal": !0,
                    children: [
                      E.jsxs("div", {
                        className: "dispatch-image",
                        children: [
                          E.jsx(Li, {
                            src: Z8,
                            alt: q8,
                            width: "400",
                            height: "400",
                          }),
                          E.jsxs("span", {
                            children: [
                              "SNOWMOON",
                              E.jsx("br", {}),
                              "COMMUNITY DISPATCH",
                            ],
                          }),
                        ],
                      }),
                      E.jsxs("div", {
                        className: "dispatch-copy",
                        children: [
                          E.jsx(Ea, { children: O.logs[0].tag }),
                          E.jsx("h3", { children: O.logs[0].title }),
                          E.jsx("p", { children: O.logs[0].desc }),
                          E.jsxs(Ge, {
                            className: "inline-link",
                            href: O.logs[0].url,
                            children: [E.jsx(B0, { size: 15 }), O.source],
                          }),
                        ],
                      }),
                    ],
                  }),
                  E.jsx("div", {
                    className: "chapter-list",
                    children: O.logs
                      .slice(1)
                      .map((x, Y) =>
                        E.jsxs(
                          "article",
                          {
                            className: "chapter-item",
                            "data-reveal": !0,
                            children: [
                              E.jsxs("span", {
                                className: "chapter-number",
                                children: ["0", Y + 2],
                              }),
                              E.jsxs("div", {
                                children: [
                                  E.jsx(Ea, { children: x.tag }),
                                  E.jsx("h3", { children: x.title }),
                                  E.jsx("p", { children: x.desc }),
                                  E.jsx(Ge, {
                                    className: "inline-link",
                                    href: x.url,
                                    children: O.source,
                                  }),
                                  Y === 1 &&
                                    E.jsx(Ge, {
                                      href: "https://x.com/snowmoon_erc/status/2116197070487138474",
                                      className: "secondary-source",
                                      children: "AVE / X",
                                    }),
                                ],
                              }),
                            ],
                          },
                          x.url
                        )
                      ),
                  }),
                ],
              }),
            ],
          }),
          E.jsxs("section", {
            className: "media section-pad",
            id: "media",
            "aria-labelledby": "media-title",
            children: [
              E.jsxs("div", {
                className: "section-heading",
                "data-reveal": !0,
                children: [
                  E.jsxs("div", {
                    children: [
                      E.jsx(Ea, { children: O.mediaLabel }),
                      E.jsx("h2", {
                        id: "media-title",
                        children: O.mediaTitle,
                      }),
                    ],
                  }),
                  E.jsx("p", { children: O.mediaIntro }),
                ],
              }),
              E.jsx("div", {
                className: "media-grid",
                children: O.assets.map((x, Y) =>
                  E.jsxs(
                    "button",
                    {
                      className: `media-tile media-tile-${Y}`,
                      onClick: () => S(Y),
                      "aria-label": `${O.view}: ${x.title}`,
                      children: [
                        E.jsxs("div", {
                          className: "media-image",
                          children: [
                            E.jsx(Li, {
                              src: x.src,
                              alt: x.alt,
                              sizes:
                                Y === 3
                                  ? "86vw"
                                  : "(max-width: 600px) 88vw, (max-width: 850px) 44vw, 36vw",
                            }),
                            E.jsx("span", {
                              className: "media-open",
                              children: E.jsx(Wp, { size: 24 }),
                            }),
                          ],
                        }),
                        E.jsxs("span", {
                          className: "media-tile-label",
                          children: [
                            E.jsx("strong", { children: x.title }),
                            E.jsx("span", { children: x.type }),
                          ],
                        }),
                      ],
                    },
                    x.src
                  )
                ),
              }),
            ],
          }),
          E.jsxs("section", {
            className: "community",
            id: "community",
            "aria-labelledby": "community-title",
            children: [
              E.jsx(Li, { src: X8, alt: "", className: "community-art" }),
              E.jsx(Li, {
                src: yf,
                alt: "",
                className: "community-core",
                width: "1254",
                height: "1254",
              }),
              E.jsx("div", { className: "community-shade" }),
              E.jsxs("div", {
                className: "community-content",
                "data-reveal": !0,
                children: [
                  E.jsx(Ea, { children: O.communityLabel }),
                  E.jsxs("h2", {
                    id: "community-title",
                    children: [
                      "NO KINGS.",
                      E.jsx("br", {}),
                      "NO MASTERS.",
                      E.jsx("br", {}),
                      E.jsx("span", { children: "JUST MEMES." }),
                    ],
                  }),
                  E.jsx("p", { children: O.communityText }),
                  E.jsxs("div", {
                    className: "community-ctas",
                    children: [
                      E.jsxs(Ge, {
                        className: "button",
                        href: gl.xUrl,
                        children: [E.jsx(B0, { size: 17 }), O.x],
                      }),
                      E.jsx(Ge, {
                        className: "button button-outline",
                        href: gl.telegramUrl,
                        children: O.tg,
                      }),
                    ],
                  }),
                ],
              }),
              E.jsx("span", {
                className: "community-signature",
                children: "ONE MOON. INFINITE DREAMS.",
              }),
            ],
          }),
        ],
      }),
      E.jsxs("footer", {
        className: "footer",
        children: [
          E.jsxs("div", {
            className: "footer-top",
            children: [
              E.jsx("a", {
                href: "#top",
                className: "footer-wordmark",
                children: "SNOWMOON",
              }),
              E.jsxs("div", {
                children: [
                  E.jsx(Ge, { href: gl.xUrl, children: "X / Twitter" }),
                  E.jsx(Ge, { href: gl.telegramUrl, children: "Telegram" }),
                  E.jsx(Ge, { href: rf, children: O.novel }),
                ],
              }),
            ],
          }),
          E.jsxs("div", {
            className: "footer-bottom",
            children: [
              E.jsx("p", { children: "ONE MOON. INFINITE DREAMS." }),
              E.jsx("span", { children: "© 2026 SNOWMOON" }),
            ],
          }),
        ],
      }),
      E.jsx("dialog", {
        ref: C,
        className: "media-dialog",
        onCancel: () => S(null),
        onClick: (x) => {
          x.target === C.current && S(null);
        },
        onClose: () => S(null),
        children:
          y !== null &&
          E.jsxs("div", {
            className: "media-dialog-inner",
            children: [
              E.jsx("button", {
                className: "icon-button dialog-close",
                "aria-label": O.close,
                onClick: () => S(null),
                children: E.jsx($p, { size: 24 }),
              }),
              E.jsx("img", { src: O.assets[y].src, alt: O.assets[y].alt }),
              E.jsxs("div", {
                className: "media-dialog-bottom",
                children: [
                  E.jsxs("div", {
                    children: [
                      E.jsx("h2", { children: O.assets[y].title }),
                      E.jsx("p", { children: O.assets[y].type }),
                    ],
                  }),
                  E.jsxs("div", {
                    className: "media-dialog-actions",
                    children: [
                      O.assets[y].credits &&
                        E.jsx(Ge, {
                          className: "artwork-credits",
                          href: O.assets[y].credits,
                          children: n === "zh" ? "素材署名" : "Artwork credits",
                        }),
                      E.jsx("a", {
                        className: "button",
                        href: O.assets[y].src,
                        download: O.assets[y].file,
                        children: O.download,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      }),
      E.jsxs("div", {
        role: "status",
        "aria-live": "polite",
        className: `toast ${b ? "visible" : ""}`,
        children: [E.jsx(th, { size: 16 }), b],
      }),
    ],
  });
}
function k8(d) {
  const n = d.performance.getEntriesByType("navigation")[0];
  if ((n == null ? void 0 : n.type) !== "reload") return !1;
  const { history: u, location: i, document: r } = d,
    f = d.__snowmoonReloadRestoration ?? u.scrollRestoration;
  (u.scrollRestoration = "manual"),
    i.hash && u.replaceState(u.state, "", i.pathname + i.search);
  const o = r.documentElement.style.scrollBehavior;
  return (
    (r.documentElement.style.scrollBehavior = "auto"),
    d.scrollTo({ top: 0, left: 0, behavior: "instant" }),
    (r.documentElement.style.scrollBehavior = o),
    d.addEventListener(
      "pagehide",
      () => {
        u.scrollRestoration = f;
      },
      { once: !0 }
    ),
    !0
  );
}
const p2 = k8(window);
p2 && Ct.clearScrollMemory("manual");
const Yg = E.jsx(Oy.StrictMode, { children: E.jsx(Q8, { restartIntro: p2 }) }),
  I0 = document.getElementById("root");
I0.hasChildNodes() ? Fp.hydrateRoot(I0, Yg) : Fp.createRoot(I0).render(Yg);
