/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const zd = 2;
const It = "srgb",
  yi = "srgb-linear",
  Ri = "linear",
  Ze = "srgb";
const Cr = "300 es";
function Ka(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function bi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Za() {
  const i = bi("canvas");
  return (i.style.display = "block"), i;
}
const wr = {};
function Pr(...i) {
  const e = "THREE." + i.shift();
  console.log(e, ...i);
}
function xa(i) {
  const e = i[0];
  if (typeof e == "string" && e.startsWith("TSL:")) {
    const t = i[1];
    t && t.isStackTrace
      ? (i[0] += " " + t.getLocation())
      : (i[1] =
          'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.');
  }
  return i;
}
function Ce(...i) {
  i = xa(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.warn(t.getError(e)) : console.warn(e, ...i);
  }
}
function We(...i) {
  i = xa(i);
  const e = "THREE." + i.shift();
  {
    const t = i[0];
    t && t.isStackTrace ? console.error(t.getError(e)) : console.error(e, ...i);
  }
}
function Ti(...i) {
  const e = i.join(" ");
  e in wr || ((wr[e] = !0), Ce(...i));
}
function $a(i, e, t) {
  return new Promise(function (n, r) {
    function a() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(a, t);
          break;
        default:
          n();
      }
    }
    setTimeout(a, t);
  });
}
const Ja = { 0: 0, 2: 6, 4: 4, 3: 5, 1: 1, 6: 2, 7: 7, 5: 3 };
class Sn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const a = r.indexOf(t);
      a !== -1 && r.splice(a, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let a = 0, s = r.length; a < s; a++) r[a].call(this, e);
      e.target = null;
    }
  }
}
const St = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Dr = 1234567;
const Yn = Math.PI / 180,
  Zn = 180 / Math.PI;
function On() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    St[i & 255] +
    St[(i >> 8) & 255] +
    St[(i >> 16) & 255] +
    St[(i >> 24) & 255] +
    "-" +
    St[e & 255] +
    St[(e >> 8) & 255] +
    "-" +
    St[((e >> 16) & 15) | 64] +
    St[(e >> 24) & 255] +
    "-" +
    St[(t & 63) | 128] +
    St[(t >> 8) & 255] +
    "-" +
    St[(t >> 16) & 255] +
    St[(t >> 24) & 255] +
    St[n & 255] +
    St[(n >> 8) & 255] +
    St[(n >> 16) & 255] +
    St[(n >> 24) & 255]
  ).toLowerCase();
}
function ze(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function or(i, e) {
  return ((i % e) + e) % e;
}
function Qa(i, e, t, n, r) {
  return n + ((i - e) * (r - n)) / (t - e);
}
function ja(i, e, t) {
  return i !== e ? (t - i) / (e - i) : 0;
}
function Kn(i, e, t) {
  return (1 - t) * i + t * e;
}
function es(i, e, t, n) {
  return Kn(i, e, 1 - Math.exp(-t * n));
}
function ts(i, e = 1) {
  return e - Math.abs(or(i, e * 2) - e);
}
function ns(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * (3 - 2 * i));
}
function is(i, e, t) {
  return i <= e
    ? 0
    : i >= t
    ? 1
    : ((i = (i - e) / (t - e)), i * i * i * (i * (i * 6 - 15) + 10));
}
function rs(i, e) {
  return i + Math.floor(Math.random() * (e - i + 1));
}
function as(i, e) {
  return i + Math.random() * (e - i);
}
function ss(i) {
  return i * (0.5 - Math.random());
}
function os(i) {
  i !== void 0 && (Dr = i);
  let e = (Dr += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function ls(i) {
  return i * Yn;
}
function cs(i) {
  return i * Zn;
}
function us(i) {
  return i > 0 && Number.isInteger(i) && 2 ** Math.round(Math.log2(i)) === i;
}
function ds(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function va(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function fs(i, e, t, n, r) {
  const a = Math.cos,
    s = Math.sin,
    o = a(t / 2),
    c = s(t / 2),
    l = a((e + n) / 2),
    f = s((e + n) / 2),
    _ = a((e - n) / 2),
    u = s((e - n) / 2),
    m = a((n - e) / 2),
    v = s((n - e) / 2);
  switch (r) {
    case "XYX":
      i.set(o * f, c * _, c * u, o * l);
      break;
    case "YZY":
      i.set(c * u, o * f, c * _, o * l);
      break;
    case "ZXZ":
      i.set(c * _, c * u, o * f, o * l);
      break;
    case "XZX":
      i.set(o * f, c * v, c * m, o * l);
      break;
    case "YXY":
      i.set(c * m, o * f, c * v, o * l);
      break;
    case "ZYZ":
      i.set(c * v, c * m, o * f, o * l);
      break;
    default:
      Ce(
        "MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          r
      );
  }
}
function lr(i) {
  switch (i.constructor) {
    case Uint32Array:
      return 4294967295;
    case Uint16Array:
      return 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return 255;
    case Int32Array:
      return 2147483647;
    case Int16Array:
      return 32767;
    case Int8Array:
      return 127;
    default:
      return;
  }
}
function Sa(i, e) {
  if (e.constructor === Float32Array) return i;
  const t = lr(e);
  if (t === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.max(i / t, -1);
}
function Ma(i, e) {
  if (e.constructor === Float32Array) return i;
  const t = lr(e);
  if (t === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.round(i * t);
}
const Hd = {
    DEG2RAD: Yn,
    RAD2DEG: Zn,
    generateUUID: On,
    clamp: ze,
    euclideanModulo: or,
    mapLinear: Qa,
    inverseLerp: ja,
    lerp: Kn,
    damp: es,
    pingpong: ts,
    smoothstep: ns,
    smootherstep: is,
    randInt: rs,
    randFloat: as,
    randFloatSpread: ss,
    seededRandom: os,
    degToRad: ls,
    radToDeg: cs,
    isPowerOfTwo: us,
    ceilPowerOfTwo: ds,
    floorPowerOfTwo: va,
    setQuaternionFromProperEuler: fs,
    normalize: Ma,
    denormalize: Sa,
  },
  hr = class hr {
    constructor(e = 0, t = 0) {
      (this.x = e), (this.y = t);
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return (this.x = e), (this.y = t), this;
    }
    setScalar(e) {
      return (this.x = e), (this.y = e), this;
    }
    setX(e) {
      return (this.x = e), this;
    }
    setY(e) {
      return (this.y = e), this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("THREE.Vector2: index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return (this.x = e.x), (this.y = e.y), this;
    }
    add(e) {
      return (this.x += e.x), (this.y += e.y), this;
    }
    addScalar(e) {
      return (this.x += e), (this.y += e), this;
    }
    addVectors(e, t) {
      return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
    }
    addScaledVector(e, t) {
      return (this.x += e.x * t), (this.y += e.y * t), this;
    }
    sub(e) {
      return (this.x -= e.x), (this.y -= e.y), this;
    }
    subScalar(e) {
      return (this.x -= e), (this.y -= e), this;
    }
    subVectors(e, t) {
      return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
    }
    multiply(e) {
      return (this.x *= e.x), (this.y *= e.y), this;
    }
    multiplyScalar(e) {
      return (this.x *= e), (this.y *= e), this;
    }
    divide(e) {
      return (this.x /= e.x), (this.y /= e.y), this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x,
        n = this.y,
        r = e.elements;
      return (
        (this.x = r[0] * t + r[3] * n + r[6]),
        (this.y = r[1] * t + r[4] * n + r[7]),
        this
      );
    }
    min(e) {
      return (
        (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
      );
    }
    max(e) {
      return (
        (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
      );
    }
    clamp(e, t) {
      return (
        (this.x = ze(this.x, e.x, t.x)), (this.y = ze(this.y, e.y, t.y)), this
      );
    }
    clampScalar(e, t) {
      return (this.x = ze(this.x, e, t)), (this.y = ze(this.y, e, t)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
    }
    floor() {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    }
    ceil() {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    }
    round() {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    }
    roundToZero() {
      return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
    }
    negate() {
      return (this.x = -this.x), (this.y = -this.y), this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(ze(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x,
        n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return (
        (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this
      );
    }
    lerpVectors(e, t, n) {
      return (
        (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
      );
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return (this.x = e[t]), (this.y = e[t + 1]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this.x), (e[t + 1] = this.y), e;
    }
    fromBufferAttribute(e, t) {
      return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t),
        r = Math.sin(t),
        a = this.x - e.x,
        s = this.y - e.y;
      return (
        (this.x = a * n - s * r + e.x), (this.y = a * r + s * n + e.y), this
      );
    }
    random() {
      return (this.x = Math.random()), (this.y = Math.random()), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
hr.prototype.isVector2 = !0;
let Xe = hr;
class Bn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, a, s, o) {
    let c = n[r + 0],
      l = n[r + 1],
      f = n[r + 2],
      _ = n[r + 3],
      u = a[s + 0],
      m = a[s + 1],
      v = a[s + 2],
      T = a[s + 3];
    if (_ !== T || c !== u || l !== m || f !== v) {
      let h = c * u + l * m + f * v + _ * T;
      h < 0 && ((u = -u), (m = -m), (v = -v), (T = -T), (h = -h));
      let d = 1 - o;
      if (h < 0.9995) {
        const E = Math.acos(h),
          b = Math.sin(E);
        (d = Math.sin(d * E) / b),
          (o = Math.sin(o * E) / b),
          (c = c * d + u * o),
          (l = l * d + m * o),
          (f = f * d + v * o),
          (_ = _ * d + T * o);
      } else {
        (c = c * d + u * o),
          (l = l * d + m * o),
          (f = f * d + v * o),
          (_ = _ * d + T * o);
        const E = 1 / Math.sqrt(c * c + l * l + f * f + _ * _);
        (c *= E), (l *= E), (f *= E), (_ *= E);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = f), (e[t + 3] = _);
  }
  static multiplyQuaternionsFlat(e, t, n, r, a, s) {
    const o = n[r],
      c = n[r + 1],
      l = n[r + 2],
      f = n[r + 3],
      _ = a[s],
      u = a[s + 1],
      m = a[s + 2],
      v = a[s + 3];
    return (
      (e[t] = o * v + f * _ + c * m - l * u),
      (e[t + 1] = c * v + f * u + l * _ - o * m),
      (e[t + 2] = l * v + f * m + o * u - c * _),
      (e[t + 3] = f * v - o * _ - c * u - l * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      a = e._z,
      s = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      f = o(r / 2),
      _ = o(a / 2),
      u = c(n / 2),
      m = c(r / 2),
      v = c(a / 2);
    switch (s) {
      case "XYZ":
        (this._x = u * f * _ + l * m * v),
          (this._y = l * m * _ - u * f * v),
          (this._z = l * f * v + u * m * _),
          (this._w = l * f * _ - u * m * v);
        break;
      case "YXZ":
        (this._x = u * f * _ + l * m * v),
          (this._y = l * m * _ - u * f * v),
          (this._z = l * f * v - u * m * _),
          (this._w = l * f * _ + u * m * v);
        break;
      case "ZXY":
        (this._x = u * f * _ - l * m * v),
          (this._y = l * m * _ + u * f * v),
          (this._z = l * f * v + u * m * _),
          (this._w = l * f * _ - u * m * v);
        break;
      case "ZYX":
        (this._x = u * f * _ - l * m * v),
          (this._y = l * m * _ + u * f * v),
          (this._z = l * f * v - u * m * _),
          (this._w = l * f * _ + u * m * v);
        break;
      case "YZX":
        (this._x = u * f * _ + l * m * v),
          (this._y = l * m * _ + u * f * v),
          (this._z = l * f * v - u * m * _),
          (this._w = l * f * _ - u * m * v);
        break;
      case "XZY":
        (this._x = u * f * _ - l * m * v),
          (this._y = l * m * _ - u * f * v),
          (this._z = l * f * v + u * m * _),
          (this._w = l * f * _ + u * m * v);
        break;
      default:
        Ce("Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      a = t[8],
      s = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      f = t[6],
      _ = t[10],
      u = n + o + _;
    if (u > 0) {
      const m = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / m),
        (this._x = (f - c) * m),
        (this._y = (a - l) * m),
        (this._z = (s - r) * m);
    } else if (n > o && n > _) {
      const m = 2 * Math.sqrt(1 + n - o - _);
      (this._w = (f - c) / m),
        (this._x = 0.25 * m),
        (this._y = (r + s) / m),
        (this._z = (a + l) / m);
    } else if (o > _) {
      const m = 2 * Math.sqrt(1 + o - n - _);
      (this._w = (a - l) / m),
        (this._x = (r + s) / m),
        (this._y = 0.25 * m),
        (this._z = (c + f) / m);
    } else {
      const m = 2 * Math.sqrt(1 + _ - n - o);
      (this._w = (s - r) / m),
        (this._x = (a + l) / m),
        (this._y = (c + f) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      a = e._z,
      s = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      f = t._w;
    return (
      (this._x = n * f + s * o + r * l - a * c),
      (this._y = r * f + s * c + a * o - n * l),
      (this._z = a * f + s * l + n * c - r * o),
      (this._w = s * f - n * o - r * c - a * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    let n = e._x,
      r = e._y,
      a = e._z,
      s = e._w,
      o = this.dot(e);
    o < 0 && ((n = -n), (r = -r), (a = -a), (s = -s), (o = -o));
    let c = 1 - t;
    if (o < 0.9995) {
      const l = Math.acos(o),
        f = Math.sin(l);
      (c = Math.sin(c * l) / f),
        (t = Math.sin(t * l) / f),
        (this._x = this._x * c + n * t),
        (this._y = this._y * c + r * t),
        (this._z = this._z * c + a * t),
        (this._w = this._w * c + s * t),
        this._onChangeCallback();
    } else
      (this._x = this._x * c + n * t),
        (this._y = this._y * c + r * t),
        (this._z = this._z * c + a * t),
        (this._w = this._w * c + s * t),
        this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      a = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      a * Math.sin(t),
      a * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
const pr = class pr {
  constructor(e = 0, t = 0, n = 0) {
    (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Lr.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Lr.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[3] * n + a[6] * r),
      (this.y = a[1] * t + a[4] * n + a[7] * r),
      (this.z = a[2] * t + a[5] * n + a[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      a = e.elements,
      s = 1 / (a[3] * t + a[7] * n + a[11] * r + a[15]);
    return (
      (this.x = (a[0] * t + a[4] * n + a[8] * r + a[12]) * s),
      (this.y = (a[1] * t + a[5] * n + a[9] * r + a[13]) * s),
      (this.z = (a[2] * t + a[6] * n + a[10] * r + a[14]) * s),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      a = e.x,
      s = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (s * r - o * n),
      f = 2 * (o * t - a * r),
      _ = 2 * (a * n - s * t);
    return (
      (this.x = t + c * l + s * _ - o * f),
      (this.y = n + c * f + o * l - a * _),
      (this.z = r + c * _ + a * f - s * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ze(this.x, e.x, t.x)),
      (this.y = ze(this.y, e.y, t.y)),
      (this.z = ze(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = ze(this.x, e, t)),
      (this.y = ze(this.y, e, t)),
      (this.z = ze(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      a = e.z,
      s = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = r * c - a * o),
      (this.y = a * s - n * c),
      (this.z = n * o - r * s),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Oi.copy(this).projectOnVector(e), this.sub(Oi);
  }
  reflect(e) {
    return this.sub(Oi.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ze(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
};
pr.prototype.isVector3 = !0;
let z = pr;
const Oi = new z(),
  Lr = new Bn(),
  mr = class mr {
    constructor(e, t, n, r, a, s, o, c, l) {
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        e !== void 0 && this.set(e, t, n, r, a, s, o, c, l);
    }
    set(e, t, n, r, a, s, o, c, l) {
      const f = this.elements;
      return (
        (f[0] = e),
        (f[1] = r),
        (f[2] = o),
        (f[3] = t),
        (f[4] = a),
        (f[5] = c),
        (f[6] = n),
        (f[7] = s),
        (f[8] = l),
        this
      );
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(e) {
      const t = this.elements,
        n = e.elements;
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        (t[8] = n[8]),
        this
      );
    }
    extractBasis(e, t, n) {
      return (
        e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return (
        this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
      );
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements,
        r = t.elements,
        a = this.elements,
        s = n[0],
        o = n[3],
        c = n[6],
        l = n[1],
        f = n[4],
        _ = n[7],
        u = n[2],
        m = n[5],
        v = n[8],
        T = r[0],
        h = r[3],
        d = r[6],
        E = r[1],
        b = r[4],
        A = r[7],
        C = r[2],
        y = r[5],
        p = r[8];
      return (
        (a[0] = s * T + o * E + c * C),
        (a[3] = s * h + o * b + c * y),
        (a[6] = s * d + o * A + c * p),
        (a[1] = l * T + f * E + _ * C),
        (a[4] = l * h + f * b + _ * y),
        (a[7] = l * d + f * A + _ * p),
        (a[2] = u * T + m * E + v * C),
        (a[5] = u * h + m * b + v * y),
        (a[8] = u * d + m * A + v * p),
        this
      );
    }
    multiplyScalar(e) {
      const t = this.elements;
      return (
        (t[0] *= e),
        (t[3] *= e),
        (t[6] *= e),
        (t[1] *= e),
        (t[4] *= e),
        (t[7] *= e),
        (t[2] *= e),
        (t[5] *= e),
        (t[8] *= e),
        this
      );
    }
    determinant() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        a = e[3],
        s = e[4],
        o = e[5],
        c = e[6],
        l = e[7],
        f = e[8];
      return (
        t * s * f - t * o * l - n * a * f + n * o * c + r * a * l - r * s * c
      );
    }
    invert() {
      const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        a = e[3],
        s = e[4],
        o = e[5],
        c = e[6],
        l = e[7],
        f = e[8],
        _ = f * s - o * l,
        u = o * c - f * a,
        m = l * a - s * c,
        v = t * _ + n * u + r * m;
      if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const T = 1 / v;
      return (
        (e[0] = _ * T),
        (e[1] = (r * l - f * n) * T),
        (e[2] = (o * n - r * s) * T),
        (e[3] = u * T),
        (e[4] = (f * t - r * c) * T),
        (e[5] = (r * a - o * t) * T),
        (e[6] = m * T),
        (e[7] = (n * c - l * t) * T),
        (e[8] = (s * t - n * a) * T),
        this
      );
    }
    transpose() {
      let e;
      const t = this.elements;
      return (
        (e = t[1]),
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return (
        (e[0] = t[0]),
        (e[1] = t[3]),
        (e[2] = t[6]),
        (e[3] = t[1]),
        (e[4] = t[4]),
        (e[5] = t[7]),
        (e[6] = t[2]),
        (e[7] = t[5]),
        (e[8] = t[8]),
        this
      );
    }
    setUvTransform(e, t, n, r, a, s, o) {
      const c = Math.cos(a),
        l = Math.sin(a);
      return (
        this.set(
          n * c,
          n * l,
          -n * (c * s + l * o) + s + e,
          -r * l,
          r * c,
          -r * (-l * s + c * o) + o + t,
          0,
          0,
          1
        ),
        this
      );
    }
    scale(e, t) {
      return (
        Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),
        this.premultiply(Bi.makeScale(e, t)),
        this
      );
    }
    rotate(e) {
      return (
        Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),
        this.premultiply(Bi.makeRotation(-e)),
        this
      );
    }
    translate(e, t) {
      return (
        Ti(
          "Matrix3: .translate() is deprecated. Use .makeTranslation() instead."
        ),
        this.premultiply(Bi.makeTranslation(e, t)),
        this
      );
    }
    makeTranslation(e, t) {
      return (
        e.isVector2
          ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
          : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
      );
    }
    makeRotation(e) {
      const t = Math.cos(e),
        n = Math.sin(e);
      return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
    }
    makeScale(e, t) {
      return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
    }
    equals(e) {
      const t = this.elements,
        n = e.elements;
      for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return (
        (e[t] = n[0]),
        (e[t + 1] = n[1]),
        (e[t + 2] = n[2]),
        (e[t + 3] = n[3]),
        (e[t + 4] = n[4]),
        (e[t + 5] = n[5]),
        (e[t + 6] = n[6]),
        (e[t + 7] = n[7]),
        (e[t + 8] = n[8]),
        e
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
mr.prototype.isMatrix3 = !0;
let Pe = mr;
const Bi = new Pe(),
  Nr = new Pe().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  Ir = new Pe().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
function hs() {
  const i = {
      enabled: !0,
      workingColorSpace: yi,
      spaces: {},
      convert: function (r, a, s) {
        return (
          this.enabled === !1 ||
            a === s ||
            !a ||
            !s ||
            (this.spaces[a].transfer === Ze &&
              ((r.r = Qt(r.r)), (r.g = Qt(r.g)), (r.b = Qt(r.b))),
            this.spaces[a].primaries !== this.spaces[s].primaries &&
              (r.applyMatrix3(this.spaces[a].toXYZ),
              r.applyMatrix3(this.spaces[s].fromXYZ)),
            this.spaces[s].transfer === Ze &&
              ((r.r = In(r.r)), (r.g = In(r.g)), (r.b = In(r.b)))),
          r
        );
      },
      workingToColorSpace: function (r, a) {
        return this.convert(r, this.workingColorSpace, a);
      },
      colorSpaceToWorking: function (r, a) {
        return this.convert(r, a, this.workingColorSpace);
      },
      getPrimaries: function (r) {
        return this.spaces[r].primaries;
      },
      getTransfer: function (r) {
        return r === "" ? Ri : this.spaces[r].transfer;
      },
      getToneMappingMode: function (r) {
        return (
          this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (r, a = this.workingColorSpace) {
        return r.fromArray(this.spaces[a].luminanceCoefficients);
      },
      define: function (r) {
        Object.assign(this.spaces, r);
      },
      _getMatrix: function (r, a, s) {
        return r.copy(this.spaces[s].fromXYZ).multiply(this.spaces[a].toXYZ);
      },
      _getDrawingBufferColorSpace: function (r) {
        return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (r = this.workingColorSpace) {
        return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [yi]: {
        primaries: e,
        whitePoint: n,
        transfer: Ri,
        toXYZ: Nr,
        fromXYZ: Ir,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: It },
        outputColorSpaceConfig: { drawingBufferColorSpace: It },
      },
      [It]: {
        primaries: e,
        whitePoint: n,
        transfer: Ze,
        toXYZ: Nr,
        fromXYZ: Ir,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: It },
      },
    }),
    i
  );
}
const He = hs();
function Qt(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function In(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let En;
class ps {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      En === void 0 && (En = bi("canvas")),
        (En.width = e.width),
        (En.height = e.height);
      const r = En.getContext("2d");
      e instanceof ImageData
        ? r.putImageData(e, 0, 0)
        : r.drawImage(e, 0, 0, e.width, e.height),
        (n = En);
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = bi("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        a = r.data;
      for (let s = 0; s < a.length; s++) a[s] = Qt(a[s] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Qt(t[n] / 255) * 255))
          : (t[n] = Qt(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        Ce(
          "ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let ms = 0;
class cr {
  constructor(e = null) {
    (this.isTextureSource = !0),
      Object.defineProperty(this, "id", { value: ms++ }),
      (this.uuid = On()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  getSize(e) {
    const t = this.data;
    return (
      typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : typeof VideoFrame < "u" && t instanceof VideoFrame
        ? e.set(t.displayWidth, t.displayHeight, 0)
        : t !== null
        ? e.set(t.width || 0, t.height || 0, t.depth || 0)
        : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let a;
      if (Array.isArray(r)) {
        a = [];
        for (let s = 0, o = r.length; s < o; s++)
          r[s].isDataTexture ? a.push(Gi(r[s].image)) : a.push(Gi(r[s]));
      } else a = Gi(r);
      n.url = a;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Gi(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? ps.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (Ce("Texture: Unable to serialize Texture."), {});
}
let _s = 0;
const zi = new z();
class At extends Sn {
  constructor(
    e = At.DEFAULT_IMAGE,
    t = At.DEFAULT_MAPPING,
    n = 1001,
    r = 1001,
    a = 1006,
    s = 1008,
    o = 1023,
    c = 1009,
    l = At.DEFAULT_ANISOTROPY,
    f = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: _s++ }),
      (this.uuid = On()),
      (this.name = ""),
      (this.source = new cr(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = a),
      (this.minFilter = s),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Xe(0, 0)),
      (this.repeat = new Xe(1, 1)),
      (this.center = new Xe(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Pe()),
      (this.generateMipmaps = !0),
      (this.mipmapsAutoUpdate = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = f),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0),
      (this.isPMREMTexture = !1),
      (this.normalized = !1);
  }
  get width() {
    return this.source.getSize(zi).x;
  }
  get height() {
    return this.source.getSize(zi).y;
  }
  get depth() {
    return this.source.getSize(zi).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      (this.normalized = e.normalized),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.mipmapsAutoUpdate = e.mipmapsAutoUpdate),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isPMREMTexture = e.isPMREMTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        Ce(`Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      (r && n && r.isVector2 && n.isVector2) ||
      (r && n && r.isVector3 && n.isVector3) ||
      (r && n && r.isMatrix3 && n.isMatrix3)
        ? r.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      mipmapsAutoUpdate: this.mipmapsAutoUpdate,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
At.DEFAULT_IMAGE = null;
At.DEFAULT_MAPPING = 300;
At.DEFAULT_ANISOTROPY = 1;
const _r = class _r {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.x = e), (this.y = t), (this.z = n), (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      a = this.w,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r + s[12] * a),
      (this.y = s[1] * t + s[5] * n + s[9] * r + s[13] * a),
      (this.z = s[2] * t + s[6] * n + s[10] * r + s[14] * a),
      (this.w = s[3] * t + s[7] * n + s[11] * r + s[15] * a),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, a;
    const c = e.elements,
      l = c[0],
      f = c[4],
      _ = c[8],
      u = c[1],
      m = c[5],
      v = c[9],
      T = c[2],
      h = c[6],
      d = c[10];
    if (
      Math.abs(f - u) < 0.01 &&
      Math.abs(_ - T) < 0.01 &&
      Math.abs(v - h) < 0.01
    ) {
      if (
        Math.abs(f + u) < 0.1 &&
        Math.abs(_ + T) < 0.1 &&
        Math.abs(v + h) < 0.1 &&
        Math.abs(l + m + d - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2,
        A = (m + 1) / 2,
        C = (d + 1) / 2,
        y = (f + u) / 4,
        p = (_ + T) / 4,
        M = (v + h) / 4;
      return (
        b > A && b > C
          ? b < 0.01
            ? ((n = 0), (r = 0.707106781), (a = 0.707106781))
            : ((n = Math.sqrt(b)), (r = y / n), (a = p / n))
          : A > C
          ? A < 0.01
            ? ((n = 0.707106781), (r = 0), (a = 0.707106781))
            : ((r = Math.sqrt(A)), (n = y / r), (a = M / r))
          : C < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (a = 0))
          : ((a = Math.sqrt(C)), (n = p / a), (r = M / a)),
        this.set(n, r, a, t),
        this
      );
    }
    let E = Math.sqrt(
      (h - v) * (h - v) + (_ - T) * (_ - T) + (u - f) * (u - f)
    );
    return (
      Math.abs(E) < 0.001 && (E = 1),
      (this.x = (h - v) / E),
      (this.y = (_ - T) / E),
      (this.z = (u - f) / E),
      (this.w = Math.acos((l + m + d - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ze(this.x, e.x, t.x)),
      (this.y = ze(this.y, e.y, t.y)),
      (this.z = ze(this.z, e.z, t.z)),
      (this.w = ze(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = ze(this.x, e, t)),
      (this.y = ze(this.y, e, t)),
      (this.z = ze(this.z, e, t)),
      (this.w = ze(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
_r.prototype.isVector4 = !0;
let it = _r;
class gs extends Sn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: 1006,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveColorBuffer: !0,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          storeMultisampledColorBuffer: !0,
          storeMultisampledDepthBuffer: !0,
          storeMultisampledStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
          useArrayDepthTexture: !1,
        },
        n
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new it(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new it(0, 0, e, t)),
      (this.textures = []);
    const r = n.count;
    for (let a = 0; a < r; a++)
      (this.textures[a] = new At({ width: e, height: t, depth: n.depth })),
        (this.textures[a].isRenderTargetTexture = !0),
        (this.textures[a].renderTarget = this);
    this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveColorBuffer = n.resolveColorBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer),
      (this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer),
      (this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview),
      (this.useArrayDepthTexture = n.useArrayDepthTexture);
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.mipmapsAutoUpdate !== void 0 &&
        (t.mipmapsAutoUpdate = e.mipmapsAutoUpdate),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null &&
      this._depthTexture.renderTarget === this &&
      (this._depthTexture.renderTarget = null),
      e !== null && e.renderTarget === null && (e.renderTarget = this),
      (this._depthTexture = e);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let r = 0, a = this.textures.length; r < a; r++)
        (this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n),
          this.textures[r].isData3DTexture !== !0 &&
            (this.textures[r].isArrayTexture =
              this.textures[r].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let t = 0, n = e.textures.length; t < n; t++) {
      (this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this);
      const r = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new cr(r);
    }
    if (
      ((this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveColorBuffer = e.resolveColorBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      (this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer),
      (this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer),
      (this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer),
      e.depthTexture !== null)
    )
      if (e.depthTexture.renderTarget === e) {
        const t = e.depthTexture.clone();
        (t.renderTarget = null), (this.depthTexture = t);
      } else this.depthTexture = e.depthTexture;
    else this.depthTexture = null;
    return (
      (this.samples = e.samples),
      (this.multiview = e.multiview),
      (this.useArrayDepthTexture = e.useArrayDepthTexture),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Xt extends gs {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Ea extends At {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  copy(e) {
    return super.copy(e), (this.wrapR = e.wrapR), this;
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class xs extends At {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
  copy(e) {
    return super.copy(e), (this.wrapR = e.wrapR), this;
  }
}
const Pi = class Pi {
  constructor(e, t, n, r, a, s, o, c, l, f, _, u, m, v, T, h) {
    (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, a, s, o, c, l, f, _, u, m, v, T, h);
  }
  set(e, t, n, r, a, s, o, c, l, f, _, u, m, v, T, h) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[4] = t),
      (d[8] = n),
      (d[12] = r),
      (d[1] = a),
      (d[5] = s),
      (d[9] = o),
      (d[13] = c),
      (d[2] = l),
      (d[6] = f),
      (d[10] = _),
      (d[14] = u),
      (d[3] = m),
      (d[7] = v),
      (d[11] = T),
      (d[15] = h),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Pi().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return this.determinantAffine() === 0
      ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this)
      : (e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this);
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    if (e.determinantAffine() === 0) return this.identity();
    const t = this.elements,
      n = e.elements,
      r = 1 / Tn.setFromMatrixColumn(e, 0).length(),
      a = 1 / Tn.setFromMatrixColumn(e, 1).length(),
      s = 1 / Tn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * a),
      (t[5] = n[5] * a),
      (t[6] = n[6] * a),
      (t[7] = 0),
      (t[8] = n[8] * s),
      (t[9] = n[9] * s),
      (t[10] = n[10] * s),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      a = e.z,
      s = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(r),
      l = Math.sin(r),
      f = Math.cos(a),
      _ = Math.sin(a);
    if (e.order === "XYZ") {
      const u = s * f,
        m = s * _,
        v = o * f,
        T = o * _;
      (t[0] = c * f),
        (t[4] = -c * _),
        (t[8] = l),
        (t[1] = m + v * l),
        (t[5] = u - T * l),
        (t[9] = -o * c),
        (t[2] = T - u * l),
        (t[6] = v + m * l),
        (t[10] = s * c);
    } else if (e.order === "YXZ") {
      const u = c * f,
        m = c * _,
        v = l * f,
        T = l * _;
      (t[0] = u + T * o),
        (t[4] = v * o - m),
        (t[8] = s * l),
        (t[1] = s * _),
        (t[5] = s * f),
        (t[9] = -o),
        (t[2] = m * o - v),
        (t[6] = T + u * o),
        (t[10] = s * c);
    } else if (e.order === "ZXY") {
      const u = c * f,
        m = c * _,
        v = l * f,
        T = l * _;
      (t[0] = u - T * o),
        (t[4] = -s * _),
        (t[8] = v + m * o),
        (t[1] = m + v * o),
        (t[5] = s * f),
        (t[9] = T - u * o),
        (t[2] = -s * l),
        (t[6] = o),
        (t[10] = s * c);
    } else if (e.order === "ZYX") {
      const u = s * f,
        m = s * _,
        v = o * f,
        T = o * _;
      (t[0] = c * f),
        (t[4] = v * l - m),
        (t[8] = u * l + T),
        (t[1] = c * _),
        (t[5] = T * l + u),
        (t[9] = m * l - v),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = s * c);
    } else if (e.order === "YZX") {
      const u = s * c,
        m = s * l,
        v = o * c,
        T = o * l;
      (t[0] = c * f),
        (t[4] = T - u * _),
        (t[8] = v * _ + m),
        (t[1] = _),
        (t[5] = s * f),
        (t[9] = -o * f),
        (t[2] = -l * f),
        (t[6] = m * _ + v),
        (t[10] = u - T * _);
    } else if (e.order === "XZY") {
      const u = s * c,
        m = s * l,
        v = o * c,
        T = o * l;
      (t[0] = c * f),
        (t[4] = -_),
        (t[8] = l * f),
        (t[1] = u * _ + T),
        (t[5] = s * f),
        (t[9] = m * _ - v),
        (t[2] = v * _ - m),
        (t[6] = o * f),
        (t[10] = T * _ + u);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(vs, e, Ss);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      Rt.subVectors(e, t),
      Rt.lengthSq() === 0 && (Rt.z = 1),
      Rt.normalize(),
      nn.crossVectors(n, Rt),
      nn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Rt.x += 1e-4) : (Rt.z += 1e-4),
        Rt.normalize(),
        nn.crossVectors(n, Rt)),
      nn.normalize(),
      ti.crossVectors(Rt, nn),
      (r[0] = nn.x),
      (r[4] = ti.x),
      (r[8] = Rt.x),
      (r[1] = nn.y),
      (r[5] = ti.y),
      (r[9] = Rt.y),
      (r[2] = nn.z),
      (r[6] = ti.z),
      (r[10] = Rt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      a = this.elements,
      s = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      f = n[1],
      _ = n[5],
      u = n[9],
      m = n[13],
      v = n[2],
      T = n[6],
      h = n[10],
      d = n[14],
      E = n[3],
      b = n[7],
      A = n[11],
      C = n[15],
      y = r[0],
      p = r[4],
      M = r[8],
      O = r[12],
      D = r[1],
      N = r[5],
      G = r[9],
      q = r[13],
      P = r[2],
      W = r[6],
      $ = r[10],
      H = r[14],
      te = r[3],
      k = r[7],
      Q = r[11],
      j = r[15];
    return (
      (a[0] = s * y + o * D + c * P + l * te),
      (a[4] = s * p + o * N + c * W + l * k),
      (a[8] = s * M + o * G + c * $ + l * Q),
      (a[12] = s * O + o * q + c * H + l * j),
      (a[1] = f * y + _ * D + u * P + m * te),
      (a[5] = f * p + _ * N + u * W + m * k),
      (a[9] = f * M + _ * G + u * $ + m * Q),
      (a[13] = f * O + _ * q + u * H + m * j),
      (a[2] = v * y + T * D + h * P + d * te),
      (a[6] = v * p + T * N + h * W + d * k),
      (a[10] = v * M + T * G + h * $ + d * Q),
      (a[14] = v * O + T * q + h * H + d * j),
      (a[3] = E * y + b * D + A * P + C * te),
      (a[7] = E * p + b * N + A * W + C * k),
      (a[11] = E * M + b * G + A * $ + C * Q),
      (a[15] = E * O + b * q + A * H + C * j),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      a = e[12],
      s = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      f = e[2],
      _ = e[6],
      u = e[10],
      m = e[14],
      v = e[3],
      T = e[7],
      h = e[11],
      d = e[15],
      E = c * m - l * u,
      b = o * m - l * _,
      A = o * u - c * _,
      C = s * m - l * f,
      y = s * u - c * f,
      p = s * _ - o * f;
    return (
      t * (T * E - h * b + d * A) -
      n * (v * E - h * C + d * y) +
      r * (v * b - T * C + d * p) -
      a * (v * A - T * y + h * p)
    );
  }
  determinantAffine() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      a = e[1],
      s = e[5],
      o = e[9],
      c = e[2],
      l = e[6],
      f = e[10];
    return t * (s * f - o * l) - n * (a * f - o * c) + r * (a * l - s * c);
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      a = e[3],
      s = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      f = e[8],
      _ = e[9],
      u = e[10],
      m = e[11],
      v = e[12],
      T = e[13],
      h = e[14],
      d = e[15],
      E = t * o - n * s,
      b = t * c - r * s,
      A = t * l - a * s,
      C = n * c - r * o,
      y = n * l - a * o,
      p = r * l - a * c,
      M = f * T - _ * v,
      O = f * h - u * v,
      D = f * d - m * v,
      N = _ * h - u * T,
      G = _ * d - m * T,
      q = u * d - m * h,
      P = E * q - b * G + A * N + C * D - y * O + p * M;
    if (P === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const W = 1 / P;
    return (
      (e[0] = (o * q - c * G + l * N) * W),
      (e[1] = (r * G - n * q - a * N) * W),
      (e[2] = (T * p - h * y + d * C) * W),
      (e[3] = (u * y - _ * p - m * C) * W),
      (e[4] = (c * D - s * q - l * O) * W),
      (e[5] = (t * q - r * D + a * O) * W),
      (e[6] = (h * A - v * p - d * b) * W),
      (e[7] = (f * p - u * A + m * b) * W),
      (e[8] = (s * G - o * D + l * M) * W),
      (e[9] = (n * D - t * G - a * M) * W),
      (e[10] = (v * y - T * A + d * E) * W),
      (e[11] = (_ * A - f * y - m * E) * W),
      (e[12] = (o * O - s * N - c * M) * W),
      (e[13] = (t * N - n * O + r * M) * W),
      (e[14] = (T * b - v * C - h * E) * W),
      (e[15] = (f * C - _ * b + u * E) * W),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      a = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= a),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= a),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= a),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= a),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      a = 1 - n,
      s = e.x,
      o = e.y,
      c = e.z,
      l = a * s,
      f = a * o;
    return (
      this.set(
        l * s + n,
        l * o - r * c,
        l * c + r * o,
        0,
        l * o + r * c,
        f * o + n,
        f * c - r * s,
        0,
        l * c - r * o,
        f * c + r * s,
        a * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, a, s) {
    return this.set(1, n, a, 0, e, 1, s, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      a = t._x,
      s = t._y,
      o = t._z,
      c = t._w,
      l = a + a,
      f = s + s,
      _ = o + o,
      u = a * l,
      m = a * f,
      v = a * _,
      T = s * f,
      h = s * _,
      d = o * _,
      E = c * l,
      b = c * f,
      A = c * _,
      C = n.x,
      y = n.y,
      p = n.z;
    return (
      (r[0] = (1 - (T + d)) * C),
      (r[1] = (m + A) * C),
      (r[2] = (v - b) * C),
      (r[3] = 0),
      (r[4] = (m - A) * y),
      (r[5] = (1 - (u + d)) * y),
      (r[6] = (h + E) * y),
      (r[7] = 0),
      (r[8] = (v + b) * p),
      (r[9] = (h - E) * p),
      (r[10] = (1 - (u + T)) * p),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    (e.x = r[12]), (e.y = r[13]), (e.z = r[14]);
    const a = this.determinantAffine();
    if (a === 0) return n.set(1, 1, 1), t.identity(), this;
    let s = Tn.set(r[0], r[1], r[2]).length();
    const o = Tn.set(r[4], r[5], r[6]).length(),
      c = Tn.set(r[8], r[9], r[10]).length();
    a < 0 && (s = -s), Ut.copy(this);
    const l = 1 / s,
      f = 1 / o,
      _ = 1 / c;
    return (
      (Ut.elements[0] *= l),
      (Ut.elements[1] *= l),
      (Ut.elements[2] *= l),
      (Ut.elements[4] *= f),
      (Ut.elements[5] *= f),
      (Ut.elements[6] *= f),
      (Ut.elements[8] *= _),
      (Ut.elements[9] *= _),
      (Ut.elements[10] *= _),
      t.setFromRotationMatrix(Ut),
      (n.x = s),
      (n.y = o),
      (n.z = c),
      this
    );
  }
  makePerspective(e, t, n, r, a, s, o = 2e3, c = !1) {
    const l = this.elements,
      f = (2 * a) / (t - e),
      _ = (2 * a) / (n - r),
      u = (t + e) / (t - e),
      m = (n + r) / (n - r);
    let v, T;
    if (c) (v = a / (s - a)), (T = (s * a) / (s - a));
    else if (o === 2e3) (v = -(s + a) / (s - a)), (T = (-2 * s * a) / (s - a));
    else if (o === 2001) (v = -s / (s - a)), (T = (-s * a) / (s - a));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = f),
      (l[4] = 0),
      (l[8] = u),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = _),
      (l[9] = m),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = v),
      (l[14] = T),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, a, s, o = 2e3, c = !1) {
    const l = this.elements,
      f = 2 / (t - e),
      _ = 2 / (n - r),
      u = -(t + e) / (t - e),
      m = -(n + r) / (n - r);
    let v, T;
    if (c) (v = 1 / (s - a)), (T = s / (s - a));
    else if (o === 2e3) (v = -2 / (s - a)), (T = -(s + a) / (s - a));
    else if (o === 2001) (v = -1 / (s - a)), (T = -a / (s - a));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = f),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = u),
      (l[1] = 0),
      (l[5] = _),
      (l[9] = 0),
      (l[13] = m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = v),
      (l[14] = T),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
};
Pi.prototype.isMatrix4 = !0;
let rt = Pi;
const Tn = new z(),
  Ut = new rt(),
  vs = new z(0, 0, 0),
  Ss = new z(1, 1, 1),
  nn = new z(),
  ti = new z(),
  Rt = new z(),
  Fr = new rt(),
  Ur = new Bn();
class gn {
  constructor(e = 0, t = 0, n = 0, r = gn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      a = r[0],
      s = r[4],
      o = r[8],
      c = r[1],
      l = r[5],
      f = r[9],
      _ = r[2],
      u = r[6],
      m = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(ze(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-f, m)), (this._z = Math.atan2(-s, a)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-ze(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-_, a)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(ze(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-_, m)), (this._z = Math.atan2(-s, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, a)));
        break;
      case "ZYX":
        (this._y = Math.asin(-ze(_, -1, 1))),
          Math.abs(_) < 0.9999999
            ? ((this._x = Math.atan2(u, m)), (this._z = Math.atan2(c, a)))
            : ((this._x = 0), (this._z = Math.atan2(-s, l)));
        break;
      case "YZX":
        (this._z = Math.asin(ze(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-f, l)), (this._y = Math.atan2(-_, a)))
            : ((this._x = 0), (this._y = Math.atan2(o, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-ze(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(o, a)))
            : ((this._x = Math.atan2(-f, m)), (this._y = 0));
        break;
      default:
        Ce(
          "Euler: .setFromRotationMatrix() encountered an unknown order: " + t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Fr.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Fr, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ur.setFromEuler(this), this.setFromQuaternion(Ur, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
gn.DEFAULT_ORDER = "XYZ";
class Ta {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Ms = 0;
const Or = new z(),
  An = new Bn(),
  Yt = new rt(),
  ni = new z(),
  Hn = new z(),
  Es = new z(),
  Ts = new Bn(),
  Br = new z(1, 0, 0),
  Gr = new z(0, 1, 0),
  zr = new z(0, 0, 1),
  Hr = { type: "added" },
  As = { type: "removed" },
  yn = { type: "childadded", child: null },
  Hi = { type: "childremoved", child: null };
class Ct extends Sn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Ms++ }),
      (this.uuid = On()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Ct.DEFAULT_UP.clone());
    const e = new z(),
      t = new gn(),
      n = new Bn(),
      r = new z(1, 1, 1);
    function a() {
      n.setFromEuler(t, !1);
    }
    function s() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(a),
      n._onChange(s),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new rt() },
        normalMatrix: { value: new Pe() },
      }),
      (this.matrix = new rt()),
      (this.matrixWorld = new rt()),
      (this.matrixAutoUpdate = Ct.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Ta()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.static = !1),
      (this.userData = {}),
      (this.pivot = null);
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale),
      this.pivot !== null &&
        this.position
          .copy(this.pivot)
          .applyMatrix4(this.matrix)
          .sub(this.pivot);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return An.setFromAxisAngle(e, t), this.quaternion.multiply(An), this;
  }
  rotateOnWorldAxis(e, t) {
    return An.setFromAxisAngle(e, t), this.quaternion.premultiply(An), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Br, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Gr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(zr, e);
  }
  translateOnAxis(e, t) {
    return (
      Or.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Or.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Br, e);
  }
  translateY(e) {
    return this.translateOnAxis(Gr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(zr, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Yt.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? ni.copy(e) : ni.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      Hn.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Yt.lookAt(Hn, ni, this.up)
        : Yt.lookAt(ni, Hn, this.up),
      this.quaternion.setFromRotationMatrix(Yt),
      r &&
        (Yt.extractRotation(r.matrixWorld),
        An.setFromRotationMatrix(Yt),
        this.quaternion.premultiply(An.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (We("Object3D.add: object can't be added as a child of itself.", e),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Hr),
            (yn.child = e),
            this.dispatchEvent(yn),
            (yn.child = null))
          : We("Object3D.add: object not an instance of THREE.Object3D.", e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(As),
        (Hi.child = e),
        this.dispatchEvent(Hi),
        (Hi.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Yt.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Yt.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Yt),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(Hr),
      (yn.child = e),
      this.dispatchEvent(yn),
      (yn.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const s = this.children[n].getObjectByProperty(e, t);
      if (s !== void 0) return s;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let a = 0, s = r.length; a < s; a++)
      r[a].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Hn, e, Es), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Hn, Ts, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  intersectsFrustum() {
    return !0;
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const e = this.pivot;
    if (e !== null) {
      const t = e.x,
        n = e.y,
        r = e.z,
        a = this.matrix.elements;
      (a[12] += t - a[0] * t - a[4] * n - a[8] * r),
        (a[13] += n - a[1] * t - a[5] * n - a[9] * r),
        (a[14] += r - a[2] * t - a[6] * n - a[10] * r);
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t, n = !1) {
    const r = this.parent;
    if (
      (e === !0 && r !== null && r.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || n) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (n = !0)),
      t === !0)
    ) {
      const a = this.children;
      for (let s = 0, o = a.length; s < o; s++)
        a[s].updateWorldMatrix(!1, !0, n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      (r.name = this.name),
      (r.castShadow = this.castShadow),
      (r.receiveShadow = this.receiveShadow),
      (r.visible = this.visible),
      (r.frustumCulled = this.frustumCulled),
      (r.renderOrder = this.renderOrder),
      (r.static = this.static),
      (r.matrixAutoUpdate = this.matrixAutoUpdate),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.pivot !== null && (r.pivot = this.pivot.toArray()),
      this.morphTargetDictionary !== void 0 &&
        (r.morphTargetDictionary = Object.assign(
          {},
          this.morphTargetDictionary
        )),
      this.morphTargetInfluences !== void 0 &&
        (r.morphTargetInfluences = this.morphTargetInfluences.slice()),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.geometryInfo = this._geometryInfo.map((o) => ({
          ...o,
          boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
          boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
        }))),
        (r.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
        (r.availableInstanceIds = this._availableInstanceIds.slice()),
        (r.availableGeometryIds = this._availableGeometryIds.slice()),
        (r.nextIndexStart = this._nextIndexStart),
        (r.nextVertexStart = this._nextVertexStart),
        (r.geometryCount = this._geometryCount),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        (r.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (r.boundingBox = this.boundingBox.toJSON()));
    function a(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = a(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, f = c.length; l < f; l++) {
            const _ = c[l];
            a(e.shapes, _);
          }
        else a(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (a(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(a(e.materials, this.material[c]));
        r.material = o;
      } else r.material = a(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(a(e.animations, c));
      }
    }
    if (t) {
      const o = s(e.geometries),
        c = s(e.materials),
        l = s(e.textures),
        f = s(e.images),
        _ = s(e.shapes),
        u = s(e.skeletons),
        m = s(e.animations),
        v = s(e.nodes);
      o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        f.length > 0 && (n.images = f),
        _.length > 0 && (n.shapes = _),
        u.length > 0 && (n.skeletons = u),
        m.length > 0 && (n.animations = m),
        v.length > 0 && (n.nodes = v);
    }
    return (n.object = r), n;
    function s(o) {
      const c = [];
      for (const l in o) {
        const f = o[l];
        delete f.metadata, c.push(f);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      (this.pivot = e.pivot !== null ? e.pivot.clone() : null),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.static = e.static),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
Ct.DEFAULT_UP = new z(0, 1, 0);
Ct.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
class ii extends Ct {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const ys = { type: "move" };
class Vi {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new ii()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new ii()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new z()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new z())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new ii()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new z()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new z()),
        (this._grip.eventsEnabled = !1)),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      a = null,
      s = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        s = !0;
        for (const T of e.hand.values()) {
          const h = t.getJointPose(T, n),
            d = this._getHandJoint(l, T);
          h !== null &&
            (d.matrix.fromArray(h.transform.matrix),
            d.matrix.decompose(d.position, d.quaternion, d.scale),
            (d.matrixWorldNeedsUpdate = !0),
            (d.jointRadius = h.radius)),
            (d.visible = h !== null);
        }
        const f = l.joints["index-finger-tip"],
          _ = l.joints["thumb-tip"],
          u = f.position.distanceTo(_.position),
          m = 0.02,
          v = 0.005;
        l.inputState.pinching && u > m + v
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            u <= m - v &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((a = t.getPose(e.gripSpace, n)),
          a !== null &&
            (c.matrix.fromArray(a.transform.matrix),
            c.matrix.decompose(c.position, c.quaternion, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            a.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(a.linearVelocity))
              : (c.hasLinearVelocity = !1),
            a.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(a.angularVelocity))
              : (c.hasAngularVelocity = !1),
            c.eventsEnabled &&
              c.dispatchEvent({ type: "gripUpdated", data: e, target: this })));
      o !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && a !== null && (r = a),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.quaternion, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(ys)));
    }
    return (
      o !== null && (o.visible = r !== null),
      c !== null && (c.visible = a !== null),
      l !== null && (l.visible = s !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ii();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Aa = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  rn = { h: 0, s: 0, l: 0 },
  ri = { h: 0, s: 0, l: 0 };
function ki(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
class qe {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
        ? this.setHex(r)
        : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = It) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      He.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, r = He.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      He.colorSpaceToWorking(this, r),
      this
    );
  }
  setHSL(e, t, n, r = He.workingColorSpace) {
    if (((e = or(e, 1)), (t = ze(t, 0, 1)), (n = ze(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const a = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        s = 2 * n - a;
      (this.r = ki(s, a, e + 1 / 3)),
        (this.g = ki(s, a, e)),
        (this.b = ki(s, a, e - 1 / 3));
    }
    return He.colorSpaceToWorking(this, r), this;
  }
  setStyle(e, t = It) {
    function n(a) {
      a !== void 0 &&
        parseFloat(a) < 1 &&
        Ce("Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let a;
      const s = r[1],
        o = r[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (
            (a =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(a[4]),
              this.setRGB(
                Math.min(255, parseInt(a[1], 10)) / 255,
                Math.min(255, parseInt(a[2], 10)) / 255,
                Math.min(255, parseInt(a[3], 10)) / 255,
                t
              )
            );
          if (
            (a =
              /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(a[4]),
              this.setRGB(
                Math.min(100, parseFloat(a[1])) / 100,
                Math.min(100, parseFloat(a[2])) / 100,
                Math.min(100, parseFloat(a[3])) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (a =
              /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(a[4]),
              this.setHSL(
                parseFloat(a[1]) / 360,
                parseFloat(a[2]) / 100,
                parseFloat(a[3]) / 100,
                t
              )
            );
          break;
        default:
          Ce("Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const a = r[1],
        s = a.length;
      if (s === 3)
        return this.setRGB(
          parseInt(a.charAt(0), 16) / 15,
          parseInt(a.charAt(1), 16) / 15,
          parseInt(a.charAt(2), 16) / 15,
          t
        );
      if (s === 6) return this.setHex(parseInt(a, 16), t);
      Ce("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = It) {
    const n = Aa[e.toLowerCase()];
    return (
      n !== void 0 ? this.setHex(n, t) : Ce("Color: Unknown color " + e), this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Qt(e.r)), (this.g = Qt(e.g)), (this.b = Qt(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = In(e.r)), (this.g = In(e.g)), (this.b = In(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = It) {
    return (
      He.workingToColorSpace(Mt.copy(this), e),
      Math.round(ze(Mt.r * 255, 0, 255)) * 65536 +
        Math.round(ze(Mt.g * 255, 0, 255)) * 256 +
        Math.round(ze(Mt.b * 255, 0, 255))
    );
  }
  getHexString(e = It) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = He.workingColorSpace) {
    He.workingToColorSpace(Mt.copy(this), t);
    const n = Mt.r,
      r = Mt.g,
      a = Mt.b,
      s = Math.max(n, r, a),
      o = Math.min(n, r, a);
    let c, l;
    const f = (o + s) / 2;
    if (o === s) (c = 0), (l = 0);
    else {
      const _ = s - o;
      switch (((l = f <= 0.5 ? _ / (s + o) : _ / (2 - s - o)), s)) {
        case n:
          c = (r - a) / _ + (r < a ? 6 : 0);
          break;
        case r:
          c = (a - n) / _ + 2;
          break;
        case a:
          c = (n - r) / _ + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = f), e;
  }
  getRGB(e, t = He.workingColorSpace) {
    return (
      He.workingToColorSpace(Mt.copy(this), t),
      (e.r = Mt.r),
      (e.g = Mt.g),
      (e.b = Mt.b),
      e
    );
  }
  getStyle(e = It) {
    He.workingToColorSpace(Mt.copy(this), e);
    const t = Mt.r,
      n = Mt.g,
      r = Mt.b;
    return e !== It
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          r * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(rn), this.setHSL(rn.h + e, rn.s + t, rn.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(rn), e.getHSL(ri);
    const n = Kn(rn.h, ri.h, t),
      r = Kn(rn.s, ri.s, t),
      a = Kn(rn.l, ri.l, t);
    return this.setHSL(n, r, a), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      a = e.elements;
    return (
      (this.r = a[0] * t + a[3] * n + a[6] * r),
      (this.g = a[1] * t + a[4] * n + a[7] * r),
      (this.b = a[2] * t + a[5] * n + a[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Mt = new qe();
qe.NAMES = Aa;
class Vd extends Ct {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new gn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new gn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.background = e.background !== null ? e.background.clone() : null),
      (this.environment =
        e.environment !== null ? e.environment.clone() : null),
      (this.fog = e.fog !== null ? e.fog.clone() : null),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      (this.overrideMaterial =
        e.overrideMaterial !== null ? e.overrideMaterial.clone() : null),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      (t.object.backgroundBlurriness = this.backgroundBlurriness),
      (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
const Ot = new z(),
  Kt = new z(),
  Wi = new z(),
  Zt = new z(),
  Rn = new z(),
  bn = new z(),
  Vr = new z(),
  Xi = new z(),
  qi = new z(),
  Yi = new z(),
  Ki = new it(),
  Zi = new it(),
  $i = new it();
class Gt {
  constructor(e = new z(), t = new z(), n = new z()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Ot.subVectors(e, t), r.cross(Ot);
    const a = r.lengthSq();
    return a > 0 ? r.multiplyScalar(1 / Math.sqrt(a)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, a) {
    Ot.subVectors(r, t), Kt.subVectors(n, t), Wi.subVectors(e, t);
    const s = Ot.dot(Ot),
      o = Ot.dot(Kt),
      c = Ot.dot(Wi),
      l = Kt.dot(Kt),
      f = Kt.dot(Wi),
      _ = s * l - o * o;
    if (_ === 0) return a.set(0, 0, 0), null;
    const u = 1 / _,
      m = (l * c - o * f) * u,
      v = (s * f - o * c) * u;
    return a.set(1 - m - v, v, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Zt) === null
      ? !1
      : Zt.x >= 0 && Zt.y >= 0 && Zt.x + Zt.y <= 1;
  }
  static getInterpolation(e, t, n, r, a, s, o, c) {
    return this.getBarycoord(e, t, n, r, Zt) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(a, Zt.x),
        c.addScaledVector(s, Zt.y),
        c.addScaledVector(o, Zt.z),
        c);
  }
  static getInterpolatedAttribute(e, t, n, r, a, s) {
    return (
      Ki.setScalar(0),
      Zi.setScalar(0),
      $i.setScalar(0),
      Ki.fromBufferAttribute(e, t),
      Zi.fromBufferAttribute(e, n),
      $i.fromBufferAttribute(e, r),
      s.setScalar(0),
      s.addScaledVector(Ki, a.x),
      s.addScaledVector(Zi, a.y),
      s.addScaledVector($i, a.z),
      s
    );
  }
  static isFrontFacing(e, t, n, r) {
    return Ot.subVectors(n, t), Kt.subVectors(e, t), Ot.cross(Kt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Ot.subVectors(this.c, this.b),
      Kt.subVectors(this.a, this.b),
      Ot.cross(Kt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Gt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Gt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, a) {
    return Gt.getInterpolation(e, this.a, this.b, this.c, t, n, r, a);
  }
  containsPoint(e) {
    return Gt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Gt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      a = this.c;
    let s, o;
    Rn.subVectors(r, n), bn.subVectors(a, n), Xi.subVectors(e, n);
    const c = Rn.dot(Xi),
      l = bn.dot(Xi);
    if (c <= 0 && l <= 0) return t.copy(n);
    qi.subVectors(e, r);
    const f = Rn.dot(qi),
      _ = bn.dot(qi);
    if (f >= 0 && _ <= f) return t.copy(r);
    const u = c * _ - f * l;
    if (u <= 0 && c >= 0 && f <= 0 && c - f > 0)
      return (s = c / (c - f)), t.copy(n).addScaledVector(Rn, s);
    Yi.subVectors(e, a);
    const m = Rn.dot(Yi),
      v = bn.dot(Yi);
    if (v >= 0 && m <= v) return t.copy(a);
    const T = m * l - c * v;
    if (T <= 0 && l >= 0 && v <= 0)
      return (o = l / (l - v)), t.copy(n).addScaledVector(bn, o);
    const h = f * v - m * _;
    if (h <= 0 && _ - f >= 0 && m - v >= 0)
      return (
        Vr.subVectors(a, r),
        (o = (_ - f) / (_ - f + (m - v))),
        t.copy(r).addScaledVector(Vr, o)
      );
    const d = 1 / (h + T + u);
    return (
      (s = T * d),
      (o = u * d),
      t.copy(n).addScaledVector(Rn, s).addScaledVector(bn, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
class $n {
  constructor(
    e = new z(1 / 0, 1 / 0, 1 / 0),
    t = new z(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Bt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Bt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Bt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const a = n.getAttribute("position");
      if (
        t === !0 &&
        a !== void 0 &&
        e.isInstancedMesh !== !0 &&
        e.isBatchedMesh !== !0
      )
        for (let s = 0, o = a.count; s < o; s++)
          e.isMesh === !0
            ? e.getVertexPosition(s, Bt)
            : Bt.fromBufferAttribute(a, s),
            Bt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Bt);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            ai.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            ai.copy(n.boundingBox)),
          ai.applyMatrix4(e.matrixWorld),
          this.union(ai);
    }
    const r = e.children;
    for (let a = 0, s = r.length; a < s; a++) this.expandByObject(r[a], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Bt),
      Bt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Vn),
      si.subVectors(this.max, Vn),
      Cn.subVectors(e.a, Vn),
      wn.subVectors(e.b, Vn),
      Pn.subVectors(e.c, Vn),
      an.subVectors(wn, Cn),
      sn.subVectors(Pn, wn),
      fn.subVectors(Cn, Pn);
    let t = [
      0,
      -an.z,
      an.y,
      0,
      -sn.z,
      sn.y,
      0,
      -fn.z,
      fn.y,
      an.z,
      0,
      -an.x,
      sn.z,
      0,
      -sn.x,
      fn.z,
      0,
      -fn.x,
      -an.y,
      an.x,
      0,
      -sn.y,
      sn.x,
      0,
      -fn.y,
      fn.x,
      0,
    ];
    return !Ji(t, Cn, wn, Pn, si) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ji(t, Cn, wn, Pn, si))
      ? !1
      : (oi.crossVectors(an, sn),
        (t = [oi.x, oi.y, oi.z]),
        Ji(t, Cn, wn, Pn, si));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Bt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Bt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : ($t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        $t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        $t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        $t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        $t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        $t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        $t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        $t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints($t),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const $t = [
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
    new z(),
  ],
  Bt = new z(),
  ai = new $n(),
  Cn = new z(),
  wn = new z(),
  Pn = new z(),
  an = new z(),
  sn = new z(),
  fn = new z(),
  Vn = new z(),
  si = new z(),
  oi = new z(),
  hn = new z();
function Ji(i, e, t, n, r) {
  for (let a = 0, s = i.length - 3; a <= s; a += 3) {
    hn.fromArray(i, a);
    const o =
        r.x * Math.abs(hn.x) + r.y * Math.abs(hn.y) + r.z * Math.abs(hn.z),
      c = e.dot(hn),
      l = t.dot(hn),
      f = n.dot(hn);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o) return !1;
  }
  return !0;
}
const ot = new z(),
  li = new Xe();
let Rs = 0;
class _n extends Sn {
  constructor(e, t, n = !1) {
    if ((super(), Array.isArray(e)))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: Rs++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0),
      (this._normalizationScale = e !== void 0 ? lr(e) : void 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      (this._normalizationScale = e._normalizationScale),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, a = this.itemSize; r < a; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        li.fromBufferAttribute(this, t),
          li.applyMatrix3(e),
          this.setXY(t, li.x, li.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t),
          ot.applyMatrix3(e),
          this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t),
        ot.applyMatrix4(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t),
        ot.applyNormalMatrix(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t),
        ot.transformDirection(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = this._denormalize(n)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = this._normalize(n)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = this._normalize(t)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = this._normalize(t)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = this._normalize(t)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = this._normalize(t)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = this._normalize(t)), (n = this._normalize(n))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = this._normalize(t)),
        (n = this._normalize(n)),
        (r = this._normalize(r))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, a) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = this._normalize(t)),
        (n = this._normalize(n)),
        (r = this._normalize(r)),
        (a = this._normalize(a))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = a),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      (e.name = this.name),
      (e.usage = this.usage),
      (e.gpuType = this.gpuType),
      e
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  _denormalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.max(e / t, -1) : Sa(e, this.array);
  }
  _normalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.round(e * t) : Ma(e, this.array);
  }
}
class ya extends _n {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ra extends _n {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class jt extends _n {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
const bs = new $n(),
  kn = new z(),
  Qi = new z();
class ur {
  constructor(e = new z(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : bs.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let a = 0, s = e.length; a < s; a++)
      r = Math.max(r, n.distanceToSquared(e[a]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    kn.subVectors(e, this.center);
    const t = kn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(kn, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Qi.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(kn.copy(e.center).add(Qi)),
            this.expandByPoint(kn.copy(e.center).sub(Qi))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return (this.radius = e.radius), this.center.fromArray(e.center), this;
  }
}
let Cs = 0;
const Nt = new rt(),
  ji = new Ct(),
  Dn = new z(),
  bt = new $n(),
  Wn = new $n(),
  mt = new z();
class Mn extends Sn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Cs++ }),
      (this.uuid = On()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.indirectOffset = 0),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}),
      (this._transformed = !1);
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Ka(e) ? Ra : ya)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e, t = 0) {
    return (this.indirect = e), (this.indirectOffset = t), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const a = new Pe().getNormalMatrix(e);
      n.applyNormalMatrix(a), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      (this._transformed = !0),
      this
    );
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return ji.lookAt(e), ji.updateMatrix(), this.applyMatrix4(ji.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Dn).negate(),
      this.translate(Dn.x, Dn.y, Dn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, a = e.length; r < a; r++) {
        const s = e[r];
        n.push(s.x, s.y, s.z || 0);
      }
      this.setAttribute("position", new jt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const a = e[r];
        t.setXYZ(r, a.x, a.y, a.z || 0);
      }
      e.length > t.count &&
        Ce(
          "BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new $n());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We(
        "BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new z(-1 / 0, -1 / 0, -1 / 0),
          new z(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const a = t[n];
          bt.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (mt.addVectors(this.boundingBox.min, bt.min),
                this.boundingBox.expandByPoint(mt),
                mt.addVectors(this.boundingBox.max, bt.max),
                this.boundingBox.expandByPoint(mt))
              : (this.boundingBox.expandByPoint(bt.min),
                this.boundingBox.expandByPoint(bt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      We(
        'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ur());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      We(
        "BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new z(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((bt.setFromBufferAttribute(e), t))
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a];
          Wn.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (mt.addVectors(bt.min, Wn.min),
                bt.expandByPoint(mt),
                mt.addVectors(bt.max, Wn.max),
                bt.expandByPoint(mt))
              : (bt.expandByPoint(Wn.min), bt.expandByPoint(Wn.max));
        }
      bt.getCenter(n);
      let r = 0;
      for (let a = 0, s = e.count; a < s; a++)
        mt.fromBufferAttribute(e, a),
          (r = Math.max(r, n.distanceToSquared(mt)));
      if (t)
        for (let a = 0, s = t.length; a < s; a++) {
          const o = t[a],
            c = this.morphTargetsRelative;
          for (let l = 0, f = o.count; l < f; l++)
            mt.fromBufferAttribute(o, l),
              c && (Dn.fromBufferAttribute(e, l), mt.add(Dn)),
              (r = Math.max(r, n.distanceToSquared(mt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          We(
            'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      We(
        "BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      r = t.normal,
      a = t.uv;
    let s = this.getAttribute("tangent");
    (s === void 0 || s.count !== n.count) &&
      ((s = new _n(new Float32Array(4 * n.count), 4)),
      this.setAttribute("tangent", s));
    const o = [],
      c = [],
      l = new Uint8Array(n.count);
    for (let O = 0; O < n.count; O++) (o[O] = new z()), (c[O] = new z());
    const f = new z(),
      _ = new z(),
      u = new z(),
      m = new Xe(),
      v = new Xe(),
      T = new Xe(),
      h = new z(),
      d = new z();
    function E(O, D, N) {
      (l[O] = l[D] = l[N] = 1),
        f.fromBufferAttribute(n, O),
        _.fromBufferAttribute(n, D),
        u.fromBufferAttribute(n, N),
        m.fromBufferAttribute(a, O),
        v.fromBufferAttribute(a, D),
        T.fromBufferAttribute(a, N),
        _.sub(f),
        u.sub(f),
        v.sub(m),
        T.sub(m);
      const G = 1 / (v.x * T.y - T.x * v.y);
      isFinite(G) &&
        (h
          .copy(_)
          .multiplyScalar(T.y)
          .addScaledVector(u, -v.y)
          .multiplyScalar(G),
        d
          .copy(u)
          .multiplyScalar(v.x)
          .addScaledVector(_, -T.x)
          .multiplyScalar(G),
        o[O].add(h),
        o[D].add(h),
        o[N].add(h),
        c[O].add(d),
        c[D].add(d),
        c[N].add(d));
    }
    let b = this.groups;
    b.length === 0 && (b = [{ start: 0, count: e.count }]);
    for (let O = 0, D = b.length; O < D; ++O) {
      const N = b[O],
        G = N.start,
        q = N.count;
      for (let P = G, W = G + q; P < W; P += 3)
        E(e.getX(P + 0), e.getX(P + 1), e.getX(P + 2));
    }
    const A = new z(),
      C = new z(),
      y = new z(),
      p = new z();
    function M(O) {
      y.fromBufferAttribute(r, O), p.copy(y);
      const D = o[O];
      A.copy(D),
        A.sub(y.multiplyScalar(y.dot(D))).normalize(),
        C.crossVectors(p, D);
      const G = C.dot(c[O]) < 0 ? -1 : 1;
      s.setXYZW(O, A.x, A.y, A.z, G);
    }
    for (let O = 0, D = n.count; O < D; ++O) l[O] && M(O);
    this._transformed = !0;
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0 || n.count !== t.count)
        (n = new _n(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let u = 0, m = n.count; u < m; u++) n.setXYZ(u, 0, 0, 0);
      const r = new z(),
        a = new z(),
        s = new z(),
        o = new z(),
        c = new z(),
        l = new z(),
        f = new z(),
        _ = new z();
      if (e)
        for (let u = 0, m = e.count; u < m; u += 3) {
          const v = e.getX(u + 0),
            T = e.getX(u + 1),
            h = e.getX(u + 2);
          r.fromBufferAttribute(t, v),
            a.fromBufferAttribute(t, T),
            s.fromBufferAttribute(t, h),
            f.subVectors(s, a),
            _.subVectors(r, a),
            f.cross(_),
            o.fromBufferAttribute(n, v),
            c.fromBufferAttribute(n, T),
            l.fromBufferAttribute(n, h),
            o.add(f),
            c.add(f),
            l.add(f),
            n.setXYZ(v, o.x, o.y, o.z),
            n.setXYZ(T, c.x, c.y, c.z),
            n.setXYZ(h, l.x, l.y, l.z);
        }
      else
        for (let u = 0, m = t.count; u < m; u += 3)
          r.fromBufferAttribute(t, u + 0),
            a.fromBufferAttribute(t, u + 1),
            s.fromBufferAttribute(t, u + 2),
            f.subVectors(s, a),
            _.subVectors(r, a),
            f.cross(_),
            n.setXYZ(u + 0, f.x, f.y, f.z),
            n.setXYZ(u + 1, f.x, f.y, f.z),
            n.setXYZ(u + 2, f.x, f.y, f.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      mt.fromBufferAttribute(e, t),
        mt.normalize(),
        e.setXYZ(t, mt.x, mt.y, mt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        f = o.itemSize,
        _ = o.normalized,
        u = new l.constructor(c.length * f);
      let m = 0,
        v = 0;
      for (let T = 0, h = c.length; T < h; T++) {
        o.isInterleavedBufferAttribute
          ? (m = c[T] * o.data.stride + o.offset)
          : (m = c[T] * f);
        for (let d = 0; d < f; d++) u[v++] = l[m++];
      }
      return new _n(u, f, _);
    }
    if (this.index === null)
      return (
        Ce(
          "BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new Mn(),
      n = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const c = r[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const a = this.morphAttributes;
    for (const o in a) {
      const c = [],
        l = a[o];
      for (let f = 0, _ = l.length; f < _; f++) {
        const u = l[f],
          m = e(u, n);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const s = this.groups;
    for (let o = 0, c = s.length; o < c; o++) {
      const l = s[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type =
        this.parameters !== void 0 && this._transformed === !0
          ? "BufferGeometry"
          : this.type),
      (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0 && this._transformed !== !0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let a = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        f = [];
      for (let _ = 0, u = l.length; _ < u; _++) {
        const m = l[_];
        f.push(m.toJSON(e.data));
      }
      f.length > 0 && ((r[c] = f), (a = !0));
    }
    a &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const s = this.groups;
    s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = o.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const r = e.attributes;
    for (const l in r) {
      const f = r[l];
      this.setAttribute(l, f.clone(t));
    }
    const a = e.morphAttributes;
    for (const l in a) {
      const f = [],
        _ = a[l];
      for (let u = 0, m = _.length; u < m; u++) f.push(_[u].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const s = e.groups;
    for (let l = 0, f = s.length; l < f; l++) {
      const _ = s[l];
      this.addGroup(_.start, _.count, _.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      (this._transformed = e._transformed),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const er = new z(),
  ws = new z(),
  Ps = new Pe();
class ln {
  constructor(e = new z(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = er.subVectors(n, t).cross(ws.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t, n = !0) {
    const r = e.delta(er),
      a = this.normal.dot(r);
    if (a === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / a;
    return n === !0 && (s < 0 || s > 1)
      ? null
      : t.copy(e.start).addScaledVector(r, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Ps.getNormalMatrix(e),
      r = this.coplanarPoint(er).applyMatrix4(e),
      a = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(a)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { normal: this.normal.toArray(), constant: this.constant };
  }
  fromJSON(e) {
    return this.normal.fromArray(e.normal), (this.constant = e.constant), this;
  }
}
let Ds = 0;
class Di extends Sn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Ds++ }),
      (this.uuid = On()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new qe(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          Ce(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : (r && r.isVector2 && n && n.isVector2) ||
            (r && r.isEuler && n && n.isEuler) ||
            (r && r.isVector3 && n && n.isVector3)
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      (n.blending = this.blending),
      (n.side = this.side),
      (n.shadowSide = this.shadowSide),
      (n.vertexColors = this.vertexColors),
      (n.opacity = this.opacity),
      (n.transparent = this.transparent),
      (n.blendSrc = this.blendSrc),
      (n.blendDst = this.blendDst),
      (n.blendEquation = this.blendEquation),
      (n.blendSrcAlpha = this.blendSrcAlpha),
      (n.blendDstAlpha = this.blendDstAlpha),
      (n.blendEquationAlpha = this.blendEquationAlpha),
      (n.blendColor = this.blendColor.getHex()),
      (n.blendAlpha = this.blendAlpha),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.clipIntersection = this.clipIntersection),
      (n.clipShadows = this.clipShadows),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      (n.stencilWrite = this.stencilWrite),
      (n.polygonOffset = this.polygonOffset),
      (n.polygonOffsetFactor = this.polygonOffsetFactor),
      (n.polygonOffsetUnits = this.polygonOffsetUnits),
      (n.dithering = this.dithering),
      (n.alphaTest = this.alphaTest),
      (n.alphaHash = this.alphaHash),
      (n.alphaToCoverage = this.alphaToCoverage),
      (n.premultipliedAlpha = this.premultipliedAlpha),
      (n.forceSinglePass = this.forceSinglePass),
      (n.allowOverride = this.allowOverride),
      (n.visible = this.visible),
      (n.toneMapped = this.toneMapped),
      (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.diffuseRoughness !== void 0 &&
        (n.diffuseRoughness = this.diffuseRoughness),
      this.diffuseRoughnessMap &&
        this.diffuseRoughnessMap.isTexture &&
        (n.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e).uuid),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.retroreflectivity !== void 0 &&
        (n.retroreflectivity = this.retroreflectivity),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessMinimum !== void 0 &&
        (n.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum),
      this.iridescenceThicknessMaximum !== void 0 &&
        (n.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      Array.isArray(this.clippingPlanes) &&
        this.clippingPlanes.length > 0 &&
        (n.clippingPlanes = this.clippingPlanes.map((a) => a.toJSON())),
      this.rotation !== void 0 && (n.rotation = this.rotation),
      this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking),
      this.linewidth !== void 0 && (n.linewidth = this.linewidth),
      this.linecap !== void 0 && (n.linecap = this.linecap),
      this.linejoin !== void 0 && (n.linejoin = this.linejoin),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.wireframe !== void 0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth !== void 0 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== void 0 &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== void 0 &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading !== void 0 && (n.flatShading = this.flatShading),
      this.fog !== void 0 && (n.fog = this.fog),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(a) {
      const s = [];
      for (const o in a) {
        const c = a[o];
        delete c.metadata, s.push(c);
      }
      return s;
    }
    if (t) {
      const a = r(e.textures),
        s = r(e.images);
      a.length > 0 && (n.textures = a), s.length > 0 && (n.images = s);
    }
    return n;
  }
  fromJSON(e, t) {
    if (
      (e.uuid !== void 0 && (this.uuid = e.uuid),
      e.name !== void 0 && (this.name = e.name),
      e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color),
      e.roughness !== void 0 && (this.roughness = e.roughness),
      e.metalness !== void 0 && (this.metalness = e.metalness),
      e.sheen !== void 0 && (this.sheen = e.sheen),
      e.sheenColor !== void 0 &&
        (this.sheenColor = new qe().setHex(e.sheenColor)),
      e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness),
      e.emissive !== void 0 &&
        this.emissive !== void 0 &&
        this.emissive.setHex(e.emissive),
      e.specular !== void 0 &&
        this.specular !== void 0 &&
        this.specular.setHex(e.specular),
      e.specularIntensity !== void 0 &&
        (this.specularIntensity = e.specularIntensity),
      e.specularColor !== void 0 &&
        this.specularColor !== void 0 &&
        this.specularColor.setHex(e.specularColor),
      e.shininess !== void 0 && (this.shininess = e.shininess),
      e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat),
      e.clearcoatRoughness !== void 0 &&
        (this.clearcoatRoughness = e.clearcoatRoughness),
      e.diffuseRoughness !== void 0 &&
        (this.diffuseRoughness = e.diffuseRoughness),
      e.dispersion !== void 0 && (this.dispersion = e.dispersion),
      e.retroreflectivity !== void 0 &&
        (this.retroreflectivity = e.retroreflectivity),
      e.iridescence !== void 0 && (this.iridescence = e.iridescence),
      e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR),
      e.iridescenceThicknessMinimum !== void 0 &&
        (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum),
      e.iridescenceThicknessMaximum !== void 0 &&
        (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum),
      e.iridescenceThicknessRange !== void 0 &&
        ((this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0]),
        (this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1])),
      e.transmission !== void 0 && (this.transmission = e.transmission),
      e.thickness !== void 0 && (this.thickness = e.thickness),
      e.attenuationDistance !== void 0 &&
        (this.attenuationDistance = e.attenuationDistance),
      e.attenuationColor !== void 0 &&
        this.attenuationColor !== void 0 &&
        this.attenuationColor.setHex(e.attenuationColor),
      e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy),
      e.anisotropyRotation !== void 0 &&
        (this.anisotropyRotation = e.anisotropyRotation),
      e.fog !== void 0 && (this.fog = e.fog),
      e.flatShading !== void 0 && (this.flatShading = e.flatShading),
      e.blending !== void 0 && (this.blending = e.blending),
      e.combine !== void 0 && (this.combine = e.combine),
      e.side !== void 0 && (this.side = e.side),
      e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.transparent !== void 0 && (this.transparent = e.transparent),
      e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest),
      e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash),
      e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc),
      e.depthTest !== void 0 && (this.depthTest = e.depthTest),
      e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite),
      e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite),
      e.clippingPlanes !== void 0 &&
        (this.clippingPlanes = e.clippingPlanes.map((n) =>
          new ln().fromJSON(n)
        )),
      e.clipIntersection !== void 0 &&
        (this.clipIntersection = e.clipIntersection),
      e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows),
      e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking),
      e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc),
      e.blendDst !== void 0 && (this.blendDst = e.blendDst),
      e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation),
      e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha),
      e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha),
      e.blendEquationAlpha !== void 0 &&
        (this.blendEquationAlpha = e.blendEquationAlpha),
      e.blendColor !== void 0 &&
        this.blendColor !== void 0 &&
        this.blendColor.setHex(e.blendColor),
      e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha),
      e.stencilWriteMask !== void 0 &&
        (this.stencilWriteMask = e.stencilWriteMask),
      e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc),
      e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef),
      e.stencilFuncMask !== void 0 &&
        (this.stencilFuncMask = e.stencilFuncMask),
      e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail),
      e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail),
      e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass),
      e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite),
      e.wireframe !== void 0 && (this.wireframe = e.wireframe),
      e.wireframeLinewidth !== void 0 &&
        (this.wireframeLinewidth = e.wireframeLinewidth),
      e.wireframeLinecap !== void 0 &&
        (this.wireframeLinecap = e.wireframeLinecap),
      e.wireframeLinejoin !== void 0 &&
        (this.wireframeLinejoin = e.wireframeLinejoin),
      e.rotation !== void 0 && (this.rotation = e.rotation),
      e.linewidth !== void 0 && (this.linewidth = e.linewidth),
      e.linecap !== void 0 && (this.linecap = e.linecap),
      e.linejoin !== void 0 && (this.linejoin = e.linejoin),
      e.dashSize !== void 0 && (this.dashSize = e.dashSize),
      e.gapSize !== void 0 && (this.gapSize = e.gapSize),
      e.scale !== void 0 && (this.scale = e.scale),
      e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset),
      e.polygonOffsetFactor !== void 0 &&
        (this.polygonOffsetFactor = e.polygonOffsetFactor),
      e.polygonOffsetUnits !== void 0 &&
        (this.polygonOffsetUnits = e.polygonOffsetUnits),
      e.dithering !== void 0 && (this.dithering = e.dithering),
      e.alphaToCoverage !== void 0 &&
        (this.alphaToCoverage = e.alphaToCoverage),
      e.premultipliedAlpha !== void 0 &&
        (this.premultipliedAlpha = e.premultipliedAlpha),
      e.forceSinglePass !== void 0 &&
        (this.forceSinglePass = e.forceSinglePass),
      e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride),
      e.visible !== void 0 && (this.visible = e.visible),
      e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped),
      e.userData !== void 0 && (this.userData = e.userData),
      e.vertexColors !== void 0 &&
        (typeof e.vertexColors == "number"
          ? (this.vertexColors = e.vertexColors > 0)
          : (this.vertexColors = e.vertexColors)),
      e.size !== void 0 && (this.size = e.size),
      e.sizeAttenuation !== void 0 &&
        (this.sizeAttenuation = e.sizeAttenuation),
      e.map !== void 0 && (this.map = t[e.map] || null),
      e.matcap !== void 0 && (this.matcap = t[e.matcap] || null),
      e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null),
      e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null),
      e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale),
      e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null),
      e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType),
      e.normalScale !== void 0)
    ) {
      let n = e.normalScale;
      Array.isArray(n) === !1 && (n = [n, n]),
        (this.normalScale = new Xe().fromArray(n));
    }
    return (
      e.displacementMap !== void 0 &&
        (this.displacementMap = t[e.displacementMap] || null),
      e.displacementScale !== void 0 &&
        (this.displacementScale = e.displacementScale),
      e.displacementBias !== void 0 &&
        (this.displacementBias = e.displacementBias),
      e.roughnessMap !== void 0 &&
        (this.roughnessMap = t[e.roughnessMap] || null),
      e.metalnessMap !== void 0 &&
        (this.metalnessMap = t[e.metalnessMap] || null),
      e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null),
      e.emissiveIntensity !== void 0 &&
        (this.emissiveIntensity = e.emissiveIntensity),
      e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null),
      e.specularIntensityMap !== void 0 &&
        (this.specularIntensityMap = t[e.specularIntensityMap] || null),
      e.specularColorMap !== void 0 &&
        (this.specularColorMap = t[e.specularColorMap] || null),
      e.envMap !== void 0 && (this.envMap = t[e.envMap] || null),
      e.envMapRotation !== void 0 &&
        this.envMapRotation.fromArray(e.envMapRotation),
      e.envMapIntensity !== void 0 &&
        (this.envMapIntensity = e.envMapIntensity),
      e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity),
      e.refractionRatio !== void 0 &&
        (this.refractionRatio = e.refractionRatio),
      e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null),
      e.lightMapIntensity !== void 0 &&
        (this.lightMapIntensity = e.lightMapIntensity),
      e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null),
      e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity),
      e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null),
      e.clearcoatMap !== void 0 &&
        (this.clearcoatMap = t[e.clearcoatMap] || null),
      e.clearcoatRoughnessMap !== void 0 &&
        (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null),
      e.clearcoatNormalMap !== void 0 &&
        (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null),
      e.clearcoatNormalScale !== void 0 &&
        (this.clearcoatNormalScale = new Xe().fromArray(
          e.clearcoatNormalScale
        )),
      e.diffuseRoughnessMap !== void 0 &&
        (this.diffuseRoughnessMap = t[e.diffuseRoughnessMap] || null),
      e.iridescenceMap !== void 0 &&
        (this.iridescenceMap = t[e.iridescenceMap] || null),
      e.iridescenceThicknessMap !== void 0 &&
        (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null),
      e.transmissionMap !== void 0 &&
        (this.transmissionMap = t[e.transmissionMap] || null),
      e.thicknessMap !== void 0 &&
        (this.thicknessMap = t[e.thicknessMap] || null),
      e.anisotropyMap !== void 0 &&
        (this.anisotropyMap = t[e.anisotropyMap] || null),
      e.sheenColorMap !== void 0 &&
        (this.sheenColorMap = t[e.sheenColorMap] || null),
      e.sheenRoughnessMap !== void 0 &&
        (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let a = 0; a !== r; ++a) n[a] = t[a].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.allowOverride = e.allowOverride),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Jt = new z(),
  tr = new z(),
  ci = new z(),
  ui = new z();
class Ls {
  constructor(e = new z(), t = new z(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Jt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Jt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Jt.copy(this.origin).addScaledVector(this.direction, t),
        Jt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    tr.copy(e).add(t).multiplyScalar(0.5),
      ci.copy(t).sub(e).normalize(),
      ui.copy(this.origin).sub(tr);
    const a = e.distanceTo(t) * 0.5,
      s = -this.direction.dot(ci),
      o = ui.dot(this.direction),
      c = -ui.dot(ci),
      l = ui.lengthSq(),
      f = Math.abs(1 - s * s);
    let _, u, m, v;
    if (f > 0)
      if (((_ = s * c - o), (u = s * o - c), (v = a * f), _ >= 0))
        if (u >= -v)
          if (u <= v) {
            const T = 1 / f;
            (_ *= T),
              (u *= T),
              (m = _ * (_ + s * u + 2 * o) + u * (s * _ + u + 2 * c) + l);
          } else
            (u = a),
              (_ = Math.max(0, -(s * u + o))),
              (m = -_ * _ + u * (u + 2 * c) + l);
        else
          (u = -a),
            (_ = Math.max(0, -(s * u + o))),
            (m = -_ * _ + u * (u + 2 * c) + l);
      else
        u <= -v
          ? ((_ = Math.max(0, -(-s * a + o))),
            (u = _ > 0 ? -a : Math.min(Math.max(-a, -c), a)),
            (m = -_ * _ + u * (u + 2 * c) + l))
          : u <= v
          ? ((_ = 0),
            (u = Math.min(Math.max(-a, -c), a)),
            (m = u * (u + 2 * c) + l))
          : ((_ = Math.max(0, -(s * a + o))),
            (u = _ > 0 ? a : Math.min(Math.max(-a, -c), a)),
            (m = -_ * _ + u * (u + 2 * c) + l));
    else
      (u = s > 0 ? -a : a),
        (_ = Math.max(0, -(s * u + o))),
        (m = -_ * _ + u * (u + 2 * c) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, _),
      r && r.copy(tr).addScaledVector(ci, u),
      m
    );
  }
  intersectSphere(e, t) {
    if (e.radius < 0) return null;
    Jt.subVectors(e.center, this.origin);
    const n = Jt.dot(this.direction),
      r = Jt.dot(Jt) - n * n,
      a = e.radius * e.radius;
    if (r > a) return null;
    const s = Math.sqrt(a - r),
      o = n - s,
      c = n + s;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, a, s, o, c;
    const l = 1 / this.direction.x,
      f = 1 / this.direction.y,
      _ = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - u.x) * l), (r = (e.max.x - u.x) * l))
        : ((n = (e.max.x - u.x) * l), (r = (e.min.x - u.x) * l)),
      f >= 0
        ? ((a = (e.min.y - u.y) * f), (s = (e.max.y - u.y) * f))
        : ((a = (e.max.y - u.y) * f), (s = (e.min.y - u.y) * f)),
      n > s ||
      a > r ||
      ((a > n || isNaN(n)) && (n = a),
      (s < r || isNaN(r)) && (r = s),
      _ >= 0
        ? ((o = (e.min.z - u.z) * _), (c = (e.max.z - u.z) * _))
        : ((o = (e.max.z - u.z) * _), (c = (e.min.z - u.z) * _)),
      n > c || o > r) ||
      ((o > n || n !== n) && (n = o), (c < r || r !== r) && (r = c), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Jt) !== null;
  }
  intersectTriangle(e, t, n, r, a) {
    const s = this.origin,
      o = this.direction,
      c = o.x,
      l = o.y,
      f = o.z,
      _ = e.x - s.x,
      u = e.y - s.y,
      m = e.z - s.z,
      v = t.x - s.x,
      T = t.y - s.y,
      h = t.z - s.z,
      d = n.x - s.x,
      E = n.y - s.y,
      b = n.z - s.z,
      A = Math.abs(c),
      C = Math.abs(l),
      y = Math.abs(f);
    let p, M, O, D, N, G, q, P, W, $, H, te;
    if (
      (A >= C && A >= y
        ? ((O = c),
          (G = _),
          (W = v),
          (te = d),
          c >= 0
            ? ((p = l),
              (M = f),
              (D = u),
              (N = m),
              (q = T),
              (P = h),
              ($ = E),
              (H = b))
            : ((p = f),
              (M = l),
              (D = m),
              (N = u),
              (q = h),
              (P = T),
              ($ = b),
              (H = E)))
        : C >= y
        ? ((O = l),
          (G = u),
          (W = T),
          (te = E),
          l >= 0
            ? ((p = f),
              (M = c),
              (D = m),
              (N = _),
              (q = h),
              (P = v),
              ($ = b),
              (H = d))
            : ((p = c),
              (M = f),
              (D = _),
              (N = m),
              (q = v),
              (P = h),
              ($ = d),
              (H = b)))
        : ((O = f),
          (G = m),
          (W = h),
          (te = b),
          f >= 0
            ? ((p = c),
              (M = l),
              (D = _),
              (N = u),
              (q = v),
              (P = T),
              ($ = d),
              (H = E))
            : ((p = l),
              (M = c),
              (D = u),
              (N = _),
              (q = T),
              (P = v),
              ($ = E),
              (H = d))),
      O === 0)
    )
      return null;
    const k = p / O,
      Q = M / O,
      j = 1 / O,
      Me = D - k * G,
      De = N - Q * G,
      K = q - k * W,
      pe = P - Q * W,
      xe = $ - k * te,
      ye = H - Q * te,
      me = xe * pe - ye * K,
      Ne = Me * ye - De * xe,
      at = K * De - pe * Me;
    if (r) {
      if (me < 0 || Ne < 0 || at < 0) return null;
    } else if ((me < 0 || Ne < 0 || at < 0) && (me > 0 || Ne > 0 || at > 0))
      return null;
    const be = me + Ne + at;
    if (be === 0) return null;
    const Ye = j * (me * G + Ne * W + at * te);
    return (be > 0 ? Ye < 0 : Ye > 0) ? null : this.at(Ye / be, a);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ns extends Di {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new qe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new gn()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const kr = new rt(),
  pn = new Ls(),
  di = new ur(),
  Wr = new z(),
  fi = new z(),
  hi = new z(),
  pi = new z(),
  nr = new z(),
  mi = new z(),
  Xr = new z(),
  _i = new z();
class xn extends Ct {
  constructor(e = new Mn(), t = new Ns()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0
        ? (this.morphTargetInfluences = e.morphTargetInfluences.slice())
        : (this.morphTargetInfluences = void 0),
      e.morphTargetDictionary !== void 0
        ? (this.morphTargetDictionary = Object.assign(
            {},
            e.morphTargetDictionary
          ))
        : (this.morphTargetDictionary = void 0),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let a = 0, s = r.length; a < s; a++) {
          const o = r[a].name || String(a);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = a);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      a = n.morphAttributes.position,
      s = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (a && o) {
      mi.set(0, 0, 0);
      for (let c = 0, l = a.length; c < l; c++) {
        const f = o[c],
          _ = a[c];
        f !== 0 &&
          (nr.fromBufferAttribute(_, e),
          s ? mi.addScaledVector(nr, f) : mi.addScaledVector(nr.sub(t), f));
      }
      t.add(mi);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      a = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      di.copy(n.boundingSphere),
      di.applyMatrix4(a),
      pn.copy(e.ray).recast(e.near),
      !(
        di.containsPoint(pn.origin) === !1 &&
        (pn.intersectSphere(di, Wr) === null ||
          pn.origin.distanceToSquared(Wr) > (e.far - e.near) ** 2)
      ) &&
        (kr.copy(a).invert(),
        pn.copy(e.ray).applyMatrix4(kr),
        !(n.boundingBox !== null && pn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, pn)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const a = this.geometry,
      s = this.material,
      o = a.index,
      c = a.attributes.position,
      l = a.attributes.uv,
      f = a.attributes.uv1,
      _ = a.attributes.normal,
      u = a.groups,
      m = a.drawRange;
    if (o !== null)
      if (Array.isArray(s))
        for (let v = 0, T = u.length; v < T; v++) {
          const h = u[v],
            d = s[h.materialIndex],
            E = Math.max(h.start, m.start),
            b = Math.min(
              o.count,
              Math.min(h.start + h.count, m.start + m.count)
            );
          for (let A = E, C = b; A < C; A += 3) {
            const y = o.getX(A),
              p = o.getX(A + 1),
              M = o.getX(A + 2);
            (r = gi(this, d, e, n, l, f, _, y, p, M)),
              r &&
                ((r.faceIndex = Math.floor(A / 3)),
                (r.face.materialIndex = h.materialIndex),
                t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start),
          T = Math.min(o.count, m.start + m.count);
        for (let h = v, d = T; h < d; h += 3) {
          const E = o.getX(h),
            b = o.getX(h + 1),
            A = o.getX(h + 2);
          (r = gi(this, s, e, n, l, f, _, E, b, A)),
            r && ((r.faceIndex = Math.floor(h / 3)), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(s))
        for (let v = 0, T = u.length; v < T; v++) {
          const h = u[v],
            d = s[h.materialIndex],
            E = Math.max(h.start, m.start),
            b = Math.min(
              c.count,
              Math.min(h.start + h.count, m.start + m.count)
            );
          for (let A = E, C = b; A < C; A += 3) {
            const y = A,
              p = A + 1,
              M = A + 2;
            (r = gi(this, d, e, n, l, f, _, y, p, M)),
              r &&
                ((r.faceIndex = Math.floor(A / 3)),
                (r.face.materialIndex = h.materialIndex),
                t.push(r));
          }
        }
      else {
        const v = Math.max(0, m.start),
          T = Math.min(c.count, m.start + m.count);
        for (let h = v, d = T; h < d; h += 3) {
          const E = h,
            b = h + 1,
            A = h + 2;
          (r = gi(this, s, e, n, l, f, _, E, b, A)),
            r && ((r.faceIndex = Math.floor(h / 3)), t.push(r));
        }
      }
  }
}
function Is(i, e, t, n, r, a, s, o) {
  let c;
  if (
    (e.side === 1
      ? (c = n.intersectTriangle(s, a, r, !0, o))
      : (c = n.intersectTriangle(r, a, s, e.side === 0, o)),
    c === null)
  )
    return null;
  _i.copy(o), _i.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(_i);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: _i.clone(), object: i };
}
function gi(i, e, t, n, r, a, s, o, c, l) {
  i.getVertexPosition(o, fi),
    i.getVertexPosition(c, hi),
    i.getVertexPosition(l, pi);
  const f = Is(i, e, t, n, fi, hi, pi, Xr);
  if (f) {
    const _ = new z();
    Gt.getBarycoord(Xr, fi, hi, pi, _),
      r && (f.uv = Gt.getInterpolatedAttribute(r, o, c, l, _, new Xe())),
      a && (f.uv1 = Gt.getInterpolatedAttribute(a, o, c, l, _, new Xe())),
      s &&
        ((f.normal = Gt.getInterpolatedAttribute(s, o, c, l, _, new z())),
        f.normal.dot(n.direction) > 0 && f.normal.multiplyScalar(-1));
    const u = { a: o, b: c, c: l, normal: new z(), materialIndex: 0 };
    Gt.getNormal(fi, hi, pi, u.normal), (f.face = u), (f.barycoord = _);
  }
  return f;
}
class Fs extends At {
  constructor(e = null, t = 1, n = 1, r, a, s, o, c, l = 1003, f = 1003, _, u) {
    super(null, s, o, c, l, f, r, a, _, u),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const mn = new ur(),
  Us = new Xe(0.5, 0.5),
  xi = new z();
class Ci {
  constructor(
    e = new ln(),
    t = new ln(),
    n = new ln(),
    r = new ln(),
    a = new ln(),
    s = new ln()
  ) {
    this.planes = [e, t, n, r, a, s];
  }
  set(e, t, n, r, a, s) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(a),
      o[5].copy(s),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3, n = !1) {
    const r = this.planes,
      a = e.elements,
      s = a[0],
      o = a[1],
      c = a[2],
      l = a[3],
      f = a[4],
      _ = a[5],
      u = a[6],
      m = a[7],
      v = a[8],
      T = a[9],
      h = a[10],
      d = a[11],
      E = a[12],
      b = a[13],
      A = a[14],
      C = a[15];
    if (
      (r[0].setComponents(l - s, m - f, d - v, C - E).normalize(),
      r[1].setComponents(l + s, m + f, d + v, C + E).normalize(),
      r[2].setComponents(l + o, m + _, d + T, C + b).normalize(),
      r[3].setComponents(l - o, m - _, d - T, C - b).normalize(),
      n)
    )
      r[4].setComponents(c, u, h, A).normalize(),
        r[5].setComponents(l - c, m - u, d - h, C - A).normalize();
    else if (
      (r[4].setComponents(l - c, m - u, d - h, C - A).normalize(), t === 2e3)
    )
      r[5].setComponents(l + c, m + u, d + h, C + A).normalize();
    else if (t === 2001) r[5].setComponents(c, u, h, A).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(mn);
  }
  intersectsSprite(e) {
    mn.center.set(0, 0, 0);
    const t = Us.distanceTo(e.center);
    return (
      (mn.radius = 0.7071067811865476 + t),
      mn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(mn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let a = 0; a < 6; a++) if (t[a].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((xi.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (xi.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (xi.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(xi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qr = new rt();
class dr {
  constructor() {
    (this.coordinateSystem = 2e3), (this._frustums = []), (this._count = 0);
  }
  setFromArrayCamera(e) {
    const t = e.cameras,
      n = this._frustums;
    for (let r = 0; r < t.length; r++) {
      const a = t[r];
      qr.multiplyMatrices(a.projectionMatrix, a.matrixWorldInverse),
        n[r] === void 0 && (n[r] = new Ci()),
        n[r].setFromProjectionMatrix(qr, a.coordinateSystem, a.reversedDepth);
    }
    return (this._count = t.length), this;
  }
  getFrustum(e) {
    return this._frustums[e];
  }
  intersectsObject(e) {
    const t = this._frustums;
    for (let n = 0; n < this._count; n++)
      if (t[n].intersectsObject(e)) return !0;
    return !1;
  }
  intersectsSprite(e) {
    const t = this._frustums;
    for (let n = 0; n < this._count; n++)
      if (t[n].intersectsSprite(e)) return !0;
    return !1;
  }
  intersectsSphere(e) {
    const t = this._frustums;
    for (let n = 0; n < this._count; n++)
      if (t[n].intersectsSphere(e)) return !0;
    return !1;
  }
  intersectsBox(e) {
    const t = this._frustums;
    for (let n = 0; n < this._count; n++) if (t[n].intersectsBox(e)) return !0;
    return !1;
  }
  containsPoint(e) {
    const t = this._frustums;
    for (let n = 0; n < this._count; n++) if (t[n].containsPoint(e)) return !0;
    return !1;
  }
  copy(e) {
    this.coordinateSystem = e.coordinateSystem;
    const t = this._frustums,
      n = e._frustums;
    for (let r = 0; r < e._count; r++)
      t[r] === void 0 && (t[r] = new Ci()), t[r].copy(n[r]);
    return (this._count = e._count), this;
  }
  clone() {
    return new dr().copy(this);
  }
}
class ba extends At {
  constructor(e = [], t = 301, n, r, a, s, o, c, l, f) {
    super(e, t, n, r, a, s, o, c, l, f),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Fn extends At {
  constructor(e, t, n = 1014, r, a, s, o = 1003, c = 1003, l, f = 1026, _ = 1) {
    if (f !== 1026 && f !== 1027)
      throw new Error(
        "THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    const u = { width: e, height: t, depth: _ };
    super(u, r, a, s, o, c, f, n, l),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new cr(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (t.compareFunction = this.compareFunction), t;
  }
}
class Ca extends Fn {
  constructor(e, t = 1014, n = 301, r, a, s = 1003, o = 1003, c, l = 1026) {
    const f = { width: e, height: e, depth: 1 },
      _ = [f, f, f, f, f, f];
    super(e, e, t, n, r, a, s, o, c, l),
      (this.image = _),
      (this.isCubeDepthTexture = !0),
      (this.isCubeTexture = !0);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class wa extends At {
  constructor(e = null) {
    super(), (this.sourceTexture = e), (this.isExternalTexture = !0);
  }
  copy(e) {
    return super.copy(e), (this.sourceTexture = e.sourceTexture), this;
  }
}
class Jn extends Mn {
  constructor(e = 1, t = 1, n = 1, r = 1, a = 1, s = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: a,
        depthSegments: s,
      });
    const o = this;
    (r = Math.floor(r)), (a = Math.floor(a)), (s = Math.floor(s));
    const c = [],
      l = [],
      f = [],
      _ = [];
    let u = 0,
      m = 0;
    v("z", "y", "x", -1, -1, n, t, e, s, a, 0),
      v("z", "y", "x", 1, -1, n, t, -e, s, a, 1),
      v("x", "z", "y", 1, 1, e, n, t, r, s, 2),
      v("x", "z", "y", 1, -1, e, n, -t, r, s, 3),
      v("x", "y", "z", 1, -1, e, t, n, r, a, 4),
      v("x", "y", "z", -1, -1, e, t, -n, r, a, 5),
      this.setIndex(c),
      this.setAttribute("position", new jt(l, 3)),
      this.setAttribute("normal", new jt(f, 3)),
      this.setAttribute("uv", new jt(_, 2));
    function v(T, h, d, E, b, A, C, y, p, M, O) {
      const D = A / p,
        N = C / M,
        G = A / 2,
        q = C / 2,
        P = y / 2,
        W = p + 1,
        $ = M + 1;
      let H = 0,
        te = 0;
      const k = new z();
      for (let Q = 0; Q < $; Q++) {
        const j = Q * N - q;
        for (let Me = 0; Me < W; Me++) {
          const De = Me * D - G;
          (k[T] = De * E),
            (k[h] = j * b),
            (k[d] = P),
            l.push(k.x, k.y, k.z),
            (k[T] = 0),
            (k[h] = 0),
            (k[d] = y > 0 ? 1 : -1),
            f.push(k.x, k.y, k.z),
            _.push(Me / p),
            _.push(1 - Q / M),
            (H += 1);
        }
      }
      for (let Q = 0; Q < M; Q++)
        for (let j = 0; j < p; j++) {
          const Me = u + j + W * Q,
            De = u + j + W * (Q + 1),
            K = u + (j + 1) + W * (Q + 1),
            pe = u + (j + 1) + W * Q;
          c.push(Me, De, pe), c.push(De, K, pe), (te += 6);
        }
      o.addGroup(m, te, O), (m += te), (u += H);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Jn(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
class Li extends Mn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const a = e / 2,
      s = t / 2,
      o = Math.floor(n),
      c = Math.floor(r),
      l = o + 1,
      f = c + 1,
      _ = e / o,
      u = t / c,
      m = [],
      v = [],
      T = [],
      h = [];
    for (let d = 0; d < f; d++) {
      const E = d * u - s;
      for (let b = 0; b < l; b++) {
        const A = b * _ - a;
        v.push(A, -E, 0), T.push(0, 0, 1), h.push(b / o), h.push(1 - d / c);
      }
    }
    for (let d = 0; d < c; d++)
      for (let E = 0; E < o; E++) {
        const b = E + l * d,
          A = E + l * (d + 1),
          C = E + 1 + l * (d + 1),
          y = E + 1 + l * d;
        m.push(b, A, y), m.push(A, C, y);
      }
    this.setIndex(m),
      this.setAttribute("position", new jt(v, 3)),
      this.setAttribute("normal", new jt(T, 3)),
      this.setAttribute("uv", new jt(h, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Li(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
function Un(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      if (Yr(r))
        r.isRenderTargetTexture
          ? (Ce(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone());
      else if (Array.isArray(r))
        if (Yr(r[0])) {
          const a = [];
          for (let s = 0, o = r.length; s < o; s++) a[s] = r[s].clone();
          e[t][n] = a;
        } else e[t][n] = r.slice();
      else e[t][n] = r;
    }
  }
  return e;
}
function Tt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = Un(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Yr(i) {
  return (
    i &&
    (i.isColor ||
      i.isMatrix3 ||
      i.isMatrix4 ||
      i.isVector2 ||
      i.isVector3 ||
      i.isVector4 ||
      i.isTexture ||
      i.isQuaternion)
  );
}
function Os(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function Pa(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : He.workingColorSpace;
}
const Bs = { clone: Un, merge: Tt };
var Gs = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  zs = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class vn extends Di {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Gs),
      (this.fragmentShader = zs),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Un(e.uniforms)),
      (this.uniformsGroups = Os(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      (this.defaultAttributeValues = Object.assign(
        {},
        e.defaultAttributeValues
      )),
      (this.index0AttributeName = e.index0AttributeName),
      (this.uniformsNeedUpdate = e.uniformsNeedUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const s = this.uniforms[r].value;
      s && s.isTexture
        ? (t.uniforms[r] = { type: "t", value: s.toJSON(e).uuid })
        : s && s.isColor
        ? (t.uniforms[r] = { type: "c", value: s.getHex() })
        : s && s.isVector2
        ? (t.uniforms[r] = { type: "v2", value: s.toArray() })
        : s && s.isVector3
        ? (t.uniforms[r] = { type: "v3", value: s.toArray() })
        : s && s.isVector4
        ? (t.uniforms[r] = { type: "v4", value: s.toArray() })
        : s && s.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: s.toArray() })
        : s && s.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: s.toArray() })
        : (t.uniforms[r] = { value: s });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
  fromJSON(e, t) {
    if ((super.fromJSON(e, t), e.uniforms !== void 0))
      for (const n in e.uniforms) {
        const r = e.uniforms[n];
        switch (((this.uniforms[n] = {}), r.type)) {
          case "t":
            this.uniforms[n].value = t[r.value] || null;
            break;
          case "c":
            this.uniforms[n].value = new qe().setHex(r.value);
            break;
          case "v2":
            this.uniforms[n].value = new Xe().fromArray(r.value);
            break;
          case "v3":
            this.uniforms[n].value = new z().fromArray(r.value);
            break;
          case "v4":
            this.uniforms[n].value = new it().fromArray(r.value);
            break;
          case "m3":
            this.uniforms[n].value = new Pe().fromArray(r.value);
            break;
          case "m4":
            this.uniforms[n].value = new rt().fromArray(r.value);
            break;
          default:
            this.uniforms[n].value = r.value;
        }
      }
    if (
      (e.defines !== void 0 && (this.defines = e.defines),
      e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader),
      e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader),
      e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion),
      e.extensions !== void 0)
    )
      for (const n in e.extensions) this.extensions[n] = e.extensions[n];
    return (
      e.lights !== void 0 && (this.lights = e.lights),
      e.clipping !== void 0 && (this.clipping = e.clipping),
      this
    );
  }
}
class Hs extends vn {
  constructor(e) {
    super(e),
      (this.isRawShaderMaterial = !0),
      (this.type = "RawShaderMaterial");
  }
}
class Vs extends Di {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class ks extends Di {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const vi = new z(),
  Si = new Bn(),
  Ht = new z();
class Da extends Ct {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new rt()),
      (this.projectionMatrix = new rt()),
      (this.projectionMatrixInverse = new rt()),
      (this.coordinateSystem = 2e3),
      (this._reversedDepth = !1);
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorld.decompose(vi, Si, Ht),
      Ht.x === 1 && Ht.y === 1 && Ht.z === 1
        ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
        : this.matrixWorldInverse.compose(vi, Si, Ht.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n),
      this.matrixWorld.decompose(vi, Si, Ht),
      Ht.x === 1 && Ht.y === 1 && Ht.z === 1
        ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
        : this.matrixWorldInverse.compose(vi, Si, Ht.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const on = new z(),
  Kr = new Xe(),
  Zr = new Xe();
class kt extends Da {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Zn * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Yn * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Zn * 2 * Math.atan(Math.tan(Yn * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    on.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(on.x, on.y).multiplyScalar(-e / on.z),
      on.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(on.x, on.y).multiplyScalar(-e / on.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Kr, Zr), t.subVectors(Zr, Kr);
  }
  setViewOffset(e, t, n, r, a, s) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = a),
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Yn * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      a = -0.5 * r;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = s.fullWidth,
        l = s.fullHeight;
      (a += (s.offsetX * r) / c),
        (t -= (s.offsetY * n) / l),
        (r *= s.width / c),
        (n *= s.height / l);
    }
    const o = this.filmOffset;
    o !== 0 && (a += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        a,
        a + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
class Ws extends Da {
  constructor(e = -1, t = 1, n = 1, r = -1, a = 0.1, s = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = a),
      (this.far = s),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, a, s) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = a),
      (this.view.height = s),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let a = n - e,
      s = n + e,
      o = r + t,
      c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (a += l * this.view.offsetX),
        (s = a + l * this.view.width),
        (o -= f * this.view.offsetY),
        (c = o - f * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      a,
      s,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Ln = -90,
  Nn = 1;
class ar extends Ct {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new kt(Ln, Nn, e, t);
    (r.layers = this.layers), this.add(r);
    const a = new kt(Ln, Nn, e, t);
    (a.layers = this.layers), this.add(a);
    const s = new kt(Ln, Nn, e, t);
    (s.layers = this.layers), this.add(s);
    const o = new kt(Ln, Nn, e, t);
    (o.layers = this.layers), this.add(o);
    const c = new kt(Ln, Nn, e, t);
    (c.layers = this.layers), this.add(c);
    const l = new kt(Ln, Nn, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, a, s, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, 1, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, 1, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [a, s, o, c, l, f] = this.children,
      _ = e.getRenderTarget(),
      u = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      v = e.xr.enabled;
    e.xr.enabled = !1;
    const T = n.texture.mipmapsAutoUpdate;
    n.texture.mipmapsAutoUpdate = !1;
    let h = !1;
    e.isWebGLRenderer === !0
      ? (h = e.state.buffers.depth.getReversed())
      : (h = e.reversedDepthBuffer),
      e.setRenderTarget(n, 0, r),
      h && e.autoClear === !1 && e.clearDepth(),
      e.render(t, a),
      e.setRenderTarget(n, 1, r),
      h && e.autoClear === !1 && e.clearDepth(),
      e.render(t, s),
      e.setRenderTarget(n, 2, r),
      h && e.autoClear === !1 && e.clearDepth(),
      e.render(t, o),
      e.setRenderTarget(n, 3, r),
      h && e.autoClear === !1 && e.clearDepth(),
      e.render(t, c),
      e.setRenderTarget(n, 4, r),
      h && e.autoClear === !1 && e.clearDepth(),
      e.render(t, l),
      (n.texture.mipmapsAutoUpdate = T),
      e.setRenderTarget(n, 5, r),
      h && e.autoClear === !1 && e.clearDepth(),
      e.render(t, f),
      e.setRenderTarget(_, u, m),
      (e.xr.enabled = v),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Xs extends kt {
  constructor(e = []) {
    super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e),
      (this.perCameraFrustumCulled = !1);
  }
}
function $r(i, e, t, n) {
  const r = qs(n);
  switch (t) {
    case 1021:
      return i * e;
    case 1028:
      return ((i * e) / r.components) * r.byteLength;
    case 1029:
      return ((i * e) / r.components) * r.byteLength;
    case 1030:
      return ((i * e * 2) / r.components) * r.byteLength;
    case 1031:
      return ((i * e * 2) / r.components) * r.byteLength;
    case 1022:
      return ((i * e * 3) / r.components) * r.byteLength;
    case 1023:
      return ((i * e * 4) / r.components) * r.byteLength;
    case 1033:
      return ((i * e * 4) / r.components) * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return (Math.max(i, 16) * Math.max(e, 8)) / 4;
    case 35840:
    case 35842:
      return (Math.max(i, 8) * Math.max(e, 8)) / 2;
    case 36196:
    case 37492:
    case 37488:
    case 37489:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
    case 37490:
    case 37491:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function qs(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "187" } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? Ce("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = "187"));
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function La() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(a, s) {
    (n = i.requestAnimationFrame(r)), t(a, s);
  }
  return {
    start: function () {
      e !== !0 &&
        t !== null &&
        i !== null &&
        ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i !== null && i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (a) {
      t = a;
    },
    setContext: function (a) {
      i = a;
    },
  };
}
function Ys(i) {
  const e = new WeakMap();
  function t(o, c) {
    const l = o.array,
      f = o.usage,
      _ = l.byteLength,
      u = i.createBuffer();
    i.bindBuffer(c, u), i.bufferData(c, l, f), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array) m = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      m = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (m = i.HALF_FLOAT) : (m = i.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) m = i.SHORT;
    else if (l instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) m = i.INT;
    else if (l instanceof Int8Array) m = i.BYTE;
    else if (l instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l
      );
    return {
      buffer: u,
      type: m,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: _,
    };
  }
  function n(o, c, l) {
    const f = c.array,
      _ = c.updateRanges;
    if ((i.bindBuffer(l, o), _.length === 0)) i.bufferSubData(l, 0, f);
    else {
      _.sort((m, v) => m.start - v.start);
      let u = 0;
      for (let m = 1; m < _.length; m++) {
        const v = _[u],
          T = _[m];
        T.start <= v.start + v.count + 1
          ? (v.count = Math.max(v.count, T.start + T.count - v.start))
          : (++u, (_[u] = T));
      }
      _.length = u + 1;
      for (let m = 0, v = _.length; m < v; m++) {
        const T = _[m];
        i.bufferSubData(l, T.start * f.BYTES_PER_ELEMENT, f, T.start, T.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function a(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (i.deleteBuffer(c.buffer), e.delete(o));
  }
  function s(o, c) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const f = e.get(o);
      (!f || f.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const l = e.get(o);
    if (l === void 0) e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      n(l.buffer, o, c), (l.version = o.version);
    }
  }
  return { get: r, remove: a, update: s };
}
var Ks = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Zs = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  $s = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Js = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Qs = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  js = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  eo = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  to = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  no = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
  io = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  ro = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  ao = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  so = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  oo = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  lo = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  co = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  uo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  fo = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  ho = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  po = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
  mo = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
  _o = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
  go = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
  xo = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  vo = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
  So = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Mo = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Eo = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  To = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Ao = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  yo = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Ro = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
  bo = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,
  Co = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  wo = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Po = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Do = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Lo = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  No = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Io = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Fo = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Uo = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Oo = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Bo = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Go = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
  zo = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,
  Ho = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Vo = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  ko = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Wo = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Xo = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  qo = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Yo = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Ko = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Zo = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  $o = `#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
  Jo = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Qo = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  jo = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  el = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  tl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  nl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  il = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  rl = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  al = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  sl = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  ol = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  ll = `#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  cl = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  ul = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  dl = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  fl = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  hl = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  pl = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ml = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  _l = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
  gl = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  xl = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  vl = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Sl = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Ml = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  El = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Tl = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
  Al = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  yl = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Rl = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  bl = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Cl = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  wl = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Pl = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  Dl = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Ll = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Nl = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Il = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Fl = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Ul = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ol = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Bl = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Gl = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  zl = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Hl = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Vl = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  kl = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Wl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Xl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  ql = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Yl = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Kl = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Zl = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  $l = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Jl = `uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Ql = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  jl = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  ec = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  tc = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  nc = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  ic = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  rc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  ac = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  sc = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  oc = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  lc = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  cc = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  uc = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  dc = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  fc = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  hc = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  pc = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  mc = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  _c = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  gc = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  xc = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  vc = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Sc = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Mc = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ec = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Tc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Ac = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  yc = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Rc = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  bc = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ue = {
    alphahash_fragment: Ks,
    alphahash_pars_fragment: Zs,
    alphamap_fragment: $s,
    alphamap_pars_fragment: Js,
    alphatest_fragment: Qs,
    alphatest_pars_fragment: js,
    aomap_fragment: eo,
    aomap_pars_fragment: to,
    batching_pars_vertex: no,
    batching_vertex: io,
    begin_vertex: ro,
    beginnormal_vertex: ao,
    bsdfs: so,
    iridescence_fragment: oo,
    bumpmap_pars_fragment: lo,
    clipping_planes_fragment: co,
    clipping_planes_pars_fragment: uo,
    clipping_planes_pars_vertex: fo,
    clipping_planes_vertex: ho,
    color_fragment: po,
    color_pars_fragment: mo,
    color_pars_vertex: _o,
    color_vertex: go,
    common: xo,
    defaultnormal_vertex: vo,
    displacementmap_pars_vertex: So,
    displacementmap_vertex: Mo,
    emissivemap_fragment: Eo,
    emissivemap_pars_fragment: To,
    colorspace_fragment: Ao,
    colorspace_pars_fragment: yo,
    envmap_fragment: Ro,
    envmap_common_pars_fragment: bo,
    envmap_pars_fragment: Co,
    envmap_pars_vertex: wo,
    envmap_physical_pars_fragment: zo,
    envmap_vertex: Po,
    fog_vertex: Do,
    fog_pars_vertex: Lo,
    fog_fragment: No,
    fog_pars_fragment: Io,
    gradientmap_pars_fragment: Fo,
    lightmap_pars_fragment: Uo,
    lights_lambert_fragment: Oo,
    lights_lambert_pars_fragment: Bo,
    lights_pars_begin: Go,
    lights_toon_fragment: Ho,
    lights_toon_pars_fragment: Vo,
    lights_phong_fragment: ko,
    lights_phong_pars_fragment: Wo,
    lights_physical_fragment: Xo,
    lights_physical_pars_fragment: qo,
    lights_fragment_begin: Yo,
    lights_fragment_maps: Ko,
    lights_fragment_end: Zo,
    lightprobes_pars_fragment: $o,
    logdepthbuf_fragment: Jo,
    logdepthbuf_pars_fragment: Qo,
    logdepthbuf_pars_vertex: jo,
    logdepthbuf_vertex: el,
    map_fragment: tl,
    map_pars_fragment: nl,
    map_particle_fragment: il,
    map_particle_pars_fragment: rl,
    metalnessmap_fragment: al,
    metalnessmap_pars_fragment: sl,
    morphinstance_vertex: ol,
    morphcolor_vertex: ll,
    morphnormal_vertex: cl,
    morphtarget_pars_vertex: ul,
    morphtarget_vertex: dl,
    normal_fragment_begin: fl,
    normal_fragment_maps: hl,
    normal_pars_fragment: pl,
    normal_pars_vertex: ml,
    normal_vertex: _l,
    normalmap_pars_fragment: gl,
    clearcoat_normal_fragment_begin: xl,
    clearcoat_normal_fragment_maps: vl,
    clearcoat_pars_fragment: Sl,
    iridescence_pars_fragment: Ml,
    opaque_fragment: El,
    packing: Tl,
    premultiplied_alpha_fragment: Al,
    project_vertex: yl,
    dithering_fragment: Rl,
    dithering_pars_fragment: bl,
    roughnessmap_fragment: Cl,
    roughnessmap_pars_fragment: wl,
    shadowmap_pars_fragment: Pl,
    shadowmap_pars_vertex: Dl,
    shadowmap_vertex: Ll,
    shadowmask_pars_fragment: Nl,
    skinbase_vertex: Il,
    skinning_pars_vertex: Fl,
    skinning_vertex: Ul,
    skinnormal_vertex: Ol,
    specularmap_fragment: Bl,
    specularmap_pars_fragment: Gl,
    tonemapping_fragment: zl,
    tonemapping_pars_fragment: Hl,
    transmission_fragment: Vl,
    transmission_pars_fragment: kl,
    uv_pars_fragment: Wl,
    uv_pars_vertex: Xl,
    uv_vertex: ql,
    worldpos_vertex: Yl,
    background_vert: Kl,
    background_frag: Zl,
    backgroundCube_vert: $l,
    backgroundCube_frag: Jl,
    cube_vert: Ql,
    cube_frag: jl,
    depth_vert: ec,
    depth_frag: tc,
    distance_vert: nc,
    distance_frag: ic,
    equirect_vert: rc,
    equirect_frag: ac,
    linedashed_vert: sc,
    linedashed_frag: oc,
    meshbasic_vert: lc,
    meshbasic_frag: cc,
    meshlambert_vert: uc,
    meshlambert_frag: dc,
    meshmatcap_vert: fc,
    meshmatcap_frag: hc,
    meshnormal_vert: pc,
    meshnormal_frag: mc,
    meshphong_vert: _c,
    meshphong_frag: gc,
    meshphysical_vert: xc,
    meshphysical_frag: vc,
    meshtoon_vert: Sc,
    meshtoon_frag: Mc,
    points_vert: Ec,
    points_frag: Tc,
    shadow_vert: Ac,
    shadow_frag: yc,
    sprite_vert: Rc,
    sprite_frag: bc,
  },
  he = {
    common: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Pe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Pe() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Pe() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Pe() },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Pe() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Pe() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Pe() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Pe() },
      normalScale: { value: new Xe(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Pe() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Pe() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Pe() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Pe() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new qe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      sunLights: { value: [], properties: { direction: {}, color: {} } },
      sunLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      sunShadowMatrix: { value: [] },
      sunShadowCascade: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
      probesSH: { value: [] },
      probesMin: { value: [] },
      probesMax: { value: [] },
      probesResolution: { value: [] },
    },
    points: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Pe() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Pe() },
    },
    sprite: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      center: { value: new Xe(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Pe() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Pe() },
      alphaTest: { value: 0 },
    },
  },
  Wt = {
    basic: {
      uniforms: Tt([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.fog,
      ]),
      vertexShader: Ue.meshbasic_vert,
      fragmentShader: Ue.meshbasic_frag,
    },
    lambert: {
      uniforms: Tt([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        he.lights,
        { emissive: { value: new qe(0) }, envMapIntensity: { value: 1 } },
      ]),
      vertexShader: Ue.meshlambert_vert,
      fragmentShader: Ue.meshlambert_frag,
    },
    phong: {
      uniforms: Tt([
        he.common,
        he.specularmap,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        he.lights,
        {
          emissive: { value: new qe(0) },
          specular: { value: new qe(1118481) },
          shininess: { value: 30 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ue.meshphong_vert,
      fragmentShader: Ue.meshphong_frag,
    },
    standard: {
      uniforms: Tt([
        he.common,
        he.envmap,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.roughnessmap,
        he.metalnessmap,
        he.fog,
        he.lights,
        {
          emissive: { value: new qe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ue.meshphysical_vert,
      fragmentShader: Ue.meshphysical_frag,
    },
    toon: {
      uniforms: Tt([
        he.common,
        he.aomap,
        he.lightmap,
        he.emissivemap,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.gradientmap,
        he.fog,
        he.lights,
        { emissive: { value: new qe(0) } },
      ]),
      vertexShader: Ue.meshtoon_vert,
      fragmentShader: Ue.meshtoon_frag,
    },
    matcap: {
      uniforms: Tt([
        he.common,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        he.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ue.meshmatcap_vert,
      fragmentShader: Ue.meshmatcap_frag,
    },
    points: {
      uniforms: Tt([he.points, he.fog]),
      vertexShader: Ue.points_vert,
      fragmentShader: Ue.points_frag,
    },
    dashed: {
      uniforms: Tt([
        he.common,
        he.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ue.linedashed_vert,
      fragmentShader: Ue.linedashed_frag,
    },
    depth: {
      uniforms: Tt([he.common, he.displacementmap]),
      vertexShader: Ue.depth_vert,
      fragmentShader: Ue.depth_frag,
    },
    normal: {
      uniforms: Tt([
        he.common,
        he.bumpmap,
        he.normalmap,
        he.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ue.meshnormal_vert,
      fragmentShader: Ue.meshnormal_frag,
    },
    sprite: {
      uniforms: Tt([he.sprite, he.fog]),
      vertexShader: Ue.sprite_vert,
      fragmentShader: Ue.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Pe() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ue.background_vert,
      fragmentShader: Ue.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Pe() },
      },
      vertexShader: Ue.backgroundCube_vert,
      fragmentShader: Ue.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ue.cube_vert,
      fragmentShader: Ue.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ue.equirect_vert,
      fragmentShader: Ue.equirect_frag,
    },
    distance: {
      uniforms: Tt([
        he.common,
        he.displacementmap,
        {
          referencePosition: { value: new z() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ue.distance_vert,
      fragmentShader: Ue.distance_frag,
    },
    shadow: {
      uniforms: Tt([
        he.lights,
        he.fog,
        { color: { value: new qe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ue.shadow_vert,
      fragmentShader: Ue.shadow_frag,
    },
  };
Wt.physical = {
  uniforms: Tt([
    Wt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Pe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Pe() },
      clearcoatNormalScale: { value: new Xe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Pe() },
      diffuseRoughness: { value: 0 },
      diffuseRoughnessMap: { value: null },
      diffuseRoughnessMapTransform: { value: new Pe() },
      dispersion: { value: 0 },
      retroreflectivity: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Pe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Pe() },
      sheen: { value: 0 },
      sheenColor: { value: new qe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Pe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Pe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Pe() },
      transmissionSamplerSize: { value: new Xe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Pe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new qe(0) },
      specularColor: { value: new qe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Pe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Pe() },
      anisotropyVector: { value: new Xe() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Pe() },
    },
  ]),
  vertexShader: Ue.meshphysical_vert,
  fragmentShader: Ue.meshphysical_frag,
};
const Mi = { r: 0, b: 0, g: 0 },
  Cc = new rt(),
  Na = new Pe();
Na.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function wc(i, e, t, n, r, a) {
  const s = new qe(0);
  let o = r === !0 ? 0 : 1,
    c,
    l,
    f = null,
    _ = 0,
    u = null;
  function m(E) {
    let b = E.isScene === !0 ? E.background : null;
    if (b && b.isTexture) {
      const A = E.backgroundBlurriness > 0;
      b = e.get(b, A);
    }
    return b;
  }
  function v(E) {
    let b = !1;
    const A = m(E);
    A === null ? h(s, o) : A && A.isColor && (h(A, 1), (b = !0));
    const C = i.xr.getEnvironmentBlendMode();
    C === "additive"
      ? t.buffers.color.setClear(0, 0, 0, 1, a)
      : C === "alpha-blend" && t.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || b) &&
        (t.buffers.depth.setTest(!0),
        t.buffers.depth.setMask(!0),
        t.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function T(E, b) {
    const A = m(b);
    A && A.isCubeTexture
      ? (l === void 0 &&
          ((l = new xn(
            new Jn(1, 1, 1),
            new vn({
              name: "BackgroundCubeMaterial",
              uniforms: Un(Wt.backgroundCube.uniforms),
              vertexShader: Wt.backgroundCube.vertexShader,
              fragmentShader: Wt.backgroundCube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          l.geometry.deleteAttribute("normal"),
          l.geometry.deleteAttribute("uv"),
          (l.onBeforeRender = function (C, y, p) {
            this.matrixWorld.copyPosition(p.matrixWorld);
          }),
          Object.defineProperty(l.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          n.update(l)),
        (l.material.uniforms.envMap.value = A),
        (l.material.uniforms.backgroundBlurriness.value =
          b.backgroundBlurriness),
        (l.material.uniforms.backgroundIntensity.value = b.backgroundIntensity),
        l.material.uniforms.backgroundRotation.value
          .setFromMatrix4(Cc.makeRotationFromEuler(b.backgroundRotation))
          .transpose(),
        A.isRenderTargetTexture === !1 &&
          l.material.uniforms.backgroundRotation.value.premultiply(Na),
        (l.material.toneMapped = He.getTransfer(A.colorSpace) !== Ze),
        (f !== A || _ !== A.version || u !== i.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (f = A),
          (_ = A.version),
          (u = i.toneMapping)),
        l.layers.enableAll(),
        E.unshift(l, l.geometry, l.material, 0, 0, null))
      : A &&
        A.isTexture &&
        (c === void 0 &&
          ((c = new xn(
            new Li(2, 2),
            new vn({
              name: "BackgroundMaterial",
              uniforms: Un(Wt.background.uniforms),
              vertexShader: Wt.background.vertexShader,
              fragmentShader: Wt.background.fragmentShader,
              side: 0,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            })
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          n.update(c)),
        (c.material.uniforms.t2D.value = A),
        (c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity),
        (c.material.toneMapped = He.getTransfer(A.colorSpace) !== Ze),
        A.matrixAutoUpdate === !0 && A.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(A.matrix),
        (f !== A || _ !== A.version || u !== i.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (f = A),
          (_ = A.version),
          (u = i.toneMapping)),
        c.layers.enableAll(),
        E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(E, b) {
    E.getRGB(Mi, Pa(i)), t.buffers.color.setClear(Mi.r, Mi.g, Mi.b, b, a);
  }
  function d() {
    l !== void 0 && (l.geometry.dispose(), l.material.dispose(), (l = void 0)),
      c !== void 0 &&
        (c.geometry.dispose(), c.material.dispose(), (c = void 0));
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (E, b = 1) {
      s.set(E), (o = b), h(s, o);
    },
    getClearAlpha: function () {
      return o;
    },
    setClearAlpha: function (E) {
      (o = E), h(s, o);
    },
    render: v,
    addToRenderList: T,
    dispose: d,
  };
}
function Pc(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = u(null);
  let a = r,
    s = !1;
  function o(N, G, q, P, W) {
    let $ = !1;
    const H = _(N, P, q, G);
    a !== H && ((a = H), l(a.object)),
      ($ = m(N, P, q, W)),
      $ && v(N, P, q, W),
      W !== null && e.update(W, i.ELEMENT_ARRAY_BUFFER),
      ($ || s) &&
        ((s = !1),
        A(N, G, q, P),
        W !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(W).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(N) {
    return i.bindVertexArray(N);
  }
  function f(N) {
    return i.deleteVertexArray(N);
  }
  function _(N, G, q, P) {
    const W = P.wireframe === !0;
    let $ = n[G.id];
    $ === void 0 && (($ = {}), (n[G.id] = $));
    const H = N.isInstancedMesh === !0 ? N.id : 0;
    let te = $[H];
    te === void 0 && ((te = {}), ($[H] = te));
    let k = te[q.id];
    k === void 0 && ((k = {}), (te[q.id] = k));
    let Q = k[W];
    return Q === void 0 && ((Q = u(c())), (k[W] = Q)), Q;
  }
  function u(N) {
    const G = [],
      q = [],
      P = [];
    for (let W = 0; W < t; W++) (G[W] = 0), (q[W] = 0), (P[W] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: q,
      attributeDivisors: P,
      object: N,
      attributes: {},
      index: null,
    };
  }
  function m(N, G, q, P) {
    const W = a.attributes,
      $ = G.attributes;
    let H = 0;
    const te = q.getAttributes();
    for (const k in te)
      if (te[k].location >= 0) {
        const j = W[k];
        let Me = $[k];
        if (
          (Me === void 0 &&
            (k === "instanceMatrix" &&
              N.instanceMatrix &&
              (Me = N.instanceMatrix),
            k === "instanceColor" && N.instanceColor && (Me = N.instanceColor)),
          j === void 0 || j.attribute !== Me || (Me && j.data !== Me.data))
        )
          return !0;
        H++;
      }
    return a.attributesNum !== H || a.index !== P;
  }
  function v(N, G, q, P) {
    const W = {},
      $ = G.attributes;
    let H = 0;
    const te = q.getAttributes();
    for (const k in te)
      if (te[k].location >= 0) {
        let j = $[k];
        j === void 0 &&
          (k === "instanceMatrix" && N.instanceMatrix && (j = N.instanceMatrix),
          k === "instanceColor" && N.instanceColor && (j = N.instanceColor));
        const Me = {};
        (Me.attribute = j), j && j.data && (Me.data = j.data), (W[k] = Me), H++;
      }
    (a.attributes = W), (a.attributesNum = H), (a.index = P);
  }
  function T() {
    const N = a.newAttributes;
    for (let G = 0, q = N.length; G < q; G++) N[G] = 0;
  }
  function h(N) {
    d(N, 0);
  }
  function d(N, G) {
    const q = a.newAttributes,
      P = a.enabledAttributes,
      W = a.attributeDivisors;
    (q[N] = 1),
      P[N] === 0 && (i.enableVertexAttribArray(N), (P[N] = 1)),
      W[N] !== G && (i.vertexAttribDivisor(N, G), (W[N] = G));
  }
  function E() {
    const N = a.newAttributes,
      G = a.enabledAttributes;
    for (let q = 0, P = G.length; q < P; q++)
      G[q] !== N[q] && (i.disableVertexAttribArray(q), (G[q] = 0));
  }
  function b(N, G, q, P, W, $, H) {
    H === !0
      ? i.vertexAttribIPointer(N, G, q, W, $)
      : i.vertexAttribPointer(N, G, q, P, W, $);
  }
  function A(N, G, q, P) {
    T();
    const W = P.attributes,
      $ = q.getAttributes(),
      H = G.defaultAttributeValues;
    for (const te in $) {
      const k = $[te];
      if (k.location >= 0) {
        let Q = W[te];
        if (
          (Q === void 0 &&
            (te === "instanceMatrix" &&
              N.instanceMatrix &&
              (Q = N.instanceMatrix),
            te === "instanceColor" && N.instanceColor && (Q = N.instanceColor)),
          Q !== void 0)
        ) {
          const j = Q.normalized,
            Me = Q.itemSize,
            De = e.get(Q);
          if (De === void 0) continue;
          const K = De.buffer,
            pe = De.type,
            xe = De.bytesPerElement,
            ye = pe === i.INT || pe === i.UNSIGNED_INT || Q.gpuType === 1013;
          if (Q.isInterleavedBufferAttribute) {
            const me = Q.data,
              Ne = me.isInterleavedBuffer === !0 ? me.stride : me.itemSize,
              at = Q.offset;
            if (
              me.isInstancedInterleavedBuffer ||
              me.isInstancedBufferAttribute
            ) {
              for (let be = 0; be < k.locationSize; be++)
                d(k.location + be, me.meshPerAttribute);
              N.isInstancedMesh !== !0 &&
                P._maxInstanceCount === void 0 &&
                (P._maxInstanceCount = me.meshPerAttribute * me.count);
            } else
              for (let be = 0; be < k.locationSize; be++) h(k.location + be);
            i.bindBuffer(i.ARRAY_BUFFER, K);
            for (let be = 0; be < k.locationSize; be++)
              b(
                k.location + be,
                Me / k.locationSize,
                pe,
                j,
                Ne * xe,
                (at + (Me / k.locationSize) * be) * xe,
                ye
              );
          } else {
            if (Q.isInstancedBufferAttribute) {
              for (let me = 0; me < k.locationSize; me++)
                d(k.location + me, Q.meshPerAttribute);
              N.isInstancedMesh !== !0 &&
                P._maxInstanceCount === void 0 &&
                (P._maxInstanceCount = Q.meshPerAttribute * Q.count);
            } else
              for (let me = 0; me < k.locationSize; me++) h(k.location + me);
            i.bindBuffer(i.ARRAY_BUFFER, K);
            for (let me = 0; me < k.locationSize; me++)
              b(
                k.location + me,
                Me / k.locationSize,
                pe,
                j,
                Me * xe,
                (Me / k.locationSize) * me * xe,
                ye
              );
          }
        } else if (H !== void 0) {
          const j = H[te];
          if (j !== void 0)
            switch (j.length) {
              case 2:
                i.vertexAttrib2fv(k.location, j);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, j);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, j);
                break;
              default:
                i.vertexAttrib1fv(k.location, j);
            }
        }
      }
    }
    E();
  }
  function C() {
    O();
    for (const N in n) {
      const G = n[N];
      for (const q in G) {
        const P = G[q];
        for (const W in P) {
          const $ = P[W];
          for (const H in $) f($[H].object), delete $[H];
          delete P[W];
        }
      }
      delete n[N];
    }
  }
  function y(N) {
    if (n[N.id] === void 0) return;
    const G = n[N.id];
    for (const q in G) {
      const P = G[q];
      for (const W in P) {
        const $ = P[W];
        for (const H in $) f($[H].object), delete $[H];
        delete P[W];
      }
    }
    delete n[N.id];
  }
  function p(N) {
    for (const G in n) {
      const q = n[G];
      for (const P in q) {
        const W = q[P];
        if (W[N.id] === void 0) continue;
        const $ = W[N.id];
        for (const H in $) f($[H].object), delete $[H];
        delete W[N.id];
      }
    }
  }
  function M(N) {
    for (const G in n) {
      const q = n[G],
        P = N.isInstancedMesh === !0 ? N.id : 0,
        W = q[P];
      if (W !== void 0) {
        for (const $ in W) {
          const H = W[$];
          for (const te in H) f(H[te].object), delete H[te];
          delete W[$];
        }
        delete q[P], Object.keys(q).length === 0 && delete n[G];
      }
    }
  }
  function O() {
    D(), (s = !0), a !== r && ((a = r), l(a.object));
  }
  function D() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: o,
    reset: O,
    resetDefaultState: D,
    dispose: C,
    releaseStatesOfGeometry: y,
    releaseStatesOfObject: M,
    releaseStatesOfProgram: p,
    initAttributes: T,
    enableAttribute: h,
    disableUnusedAttributes: E,
  };
}
function Dc(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function a(c, l) {
    i.drawArrays(n, c, l), t.update(l, n, 1);
  }
  function s(c, l, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, l, f), t.update(l, n, f));
  }
  function o(c, l, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, l, 0, f);
    let u = 0;
    for (let m = 0; m < f; m++) u += l[m];
    t.update(u, n, 1);
  }
  (this.setMode = r),
    (this.render = a),
    (this.renderInstances = s),
    (this.renderMultiDraw = o);
}
function Lc(i, e, t, n) {
  let r;
  function a() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const p = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function s(p) {
    return !(
      p !== 1023 &&
      n.convert(p) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(p) {
    const M =
      p === 1016 &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      p !== 1009 &&
      p !== 1015 &&
      !M &&
      n.convert(p) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)
    );
  }
  function c(p) {
    if (p === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      p = "mediump";
    }
    return p === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const f = c(l);
  f !== l &&
    (Ce("WebGLRenderer:", l, "not supported, using", f, "instead."), (l = f));
  const _ = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    u = t.logarithmicDepthBuffer === !0 && _ === !1;
  t.reversedDepthBuffer === !0 &&
    _ === !1 &&
    Ce(
      "WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."
    ),
    t.logarithmicDepthBuffer === !0 &&
      _ === !0 &&
      Ce(
        "WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled."
      );
  const m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    T = i.getParameter(i.MAX_TEXTURE_SIZE),
    h = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    d = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    E = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    b = i.getParameter(i.MAX_VARYING_VECTORS),
    A = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    C = i.getParameter(i.MAX_SAMPLES),
    y = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: a,
    getMaxPrecision: c,
    textureFormatReadable: s,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: u,
    reversedDepthBuffer: _,
    maxTextures: m,
    maxVertexTextures: v,
    maxTextureSize: T,
    maxCubemapSize: h,
    maxAttributes: d,
    maxVertexUniforms: E,
    maxVaryings: b,
    maxFragmentUniforms: A,
    maxSamples: C,
    samples: y,
  };
}
function Nc(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    a = !1;
  const s = new ln(),
    o = new Pe(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (_, u) {
      const m = _.length !== 0 || u || n !== 0 || r;
      return (r = u), (n = _.length), m;
    }),
    (this.beginShadows = function () {
      (a = !0), f(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (_, u) {
      t = f(_, u, 0);
    }),
    (this.setState = function (_, u, m) {
      const v = _.clippingPlanes,
        T = _.clipIntersection,
        h = _.clipShadows,
        d = i.get(_);
      if (!r || v === null || v.length === 0 || (a && !h)) a ? f(null) : l();
      else {
        const E = a ? 0 : n,
          b = E * 4;
        let A = d.clippingState || null;
        (c.value = A), (A = f(v, u, b, m));
        for (let C = 0; C !== b; ++C) A[C] = t[C];
        (d.clippingState = A),
          (this.numIntersection = T ? this.numPlanes : 0),
          (this.numPlanes += E);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function f(_, u, m, v) {
    const T = _ !== null ? _.length : 0;
    let h = null;
    if (T !== 0) {
      if (((h = c.value), v !== !0 || h === null)) {
        const d = m + T * 4,
          E = u.matrixWorldInverse;
        o.getNormalMatrix(E),
          (h === null || h.length < d) && (h = new Float32Array(d));
        for (let b = 0, A = m; b !== T; ++b, A += 4)
          s.copy(_[b]).applyMatrix4(E, o),
            s.normal.toArray(h, A),
            (h[A + 3] = s.constant);
      }
      (c.value = h), (c.needsUpdate = !0);
    }
    return (e.numPlanes = T), (e.numIntersection = 0), h;
  }
}
class fr extends Xt {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    (this.texture = new ba(r)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Jn(5, 5, 5),
      a = new vn({
        name: "CubemapFromEquirect",
        uniforms: Un(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    a.uniforms.tEquirect.value = t;
    const s = new xn(r, a),
      o = t.minFilter;
    return (
      t.minFilter === 1008 && (t.minFilter = 1006),
      new ar(1, 10, this).update(e, s),
      (t.minFilter = o),
      s.geometry.dispose(),
      s.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, r = !0) {
    const a = e.getRenderTarget();
    for (let s = 0; s < 6; s++) e.setRenderTarget(this, s), e.clear(t, n, r);
    e.setRenderTarget(a);
  }
}
const Jr = 256,
  Ic = 3,
  Fc = 20,
  Ia = 256,
  Fa = 16,
  Uc = 3,
  Oc = new z(),
  Bc = new qe();
class wi {
  constructor(e) {
    (this._renderer = e),
      (this._cubeSize = 0),
      (this._sourceTarget = null),
      (this._cubeCamera = new ar(1, 10, null)),
      (this._boxMesh = new xn(new Jn(5, 5, 5), null)),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      (this._blurMaterial = null),
      (this._ggxMaterial = null),
      (this._integrationMaterial = null);
  }
  fromScene(e, t = 0, n = 0.1, r = 100, a = {}) {
    const { size: s = 256, position: o = Oc } = a,
      c = this._renderer;
    this._setSize(s);
    const l = this._allocateTarget(),
      f = this._getSourceTarget(!0);
    t > 0 && (f.texture.mipmapsAutoUpdate = !1);
    const _ = c.autoClear,
      u = c.autoClearColor,
      m = c.autoClearDepth,
      v = c.autoClearStencil,
      T = e.background;
    (c.autoClear = !0),
      (c.autoClearColor = !0),
      (c.autoClearDepth = !0),
      (c.autoClearStencil = !0),
      T === null && (e.background = c.getClearColor(Bc));
    const h = new ar(n, r, f);
    return (
      h.position.copy(o),
      h.update(c, e),
      (c.autoClear = _),
      (c.autoClearColor = u),
      (c.autoClearDepth = m),
      (c.autoClearStencil = v),
      (e.background = T),
      t > 0 && ((f.texture.mipmapsAutoUpdate = !0), this._blur(l, t)),
      this._applyPMREM(l),
      l
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = ea()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = jr()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._sourceTarget !== null && this._sourceTarget.dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose(),
      this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._ggxMaterial !== null && this._ggxMaterial.dispose(),
      this._integrationMaterial !== null && this._integrationMaterial.dispose(),
      this._boxMesh.geometry.dispose();
  }
  static lodToRoughness(e, t) {
    return t > 0 ? 1 - Math.sqrt(1 - e / t) : 0;
  }
  _setSize(e) {
    this._cubeSize = Math.max(Jr, va(e));
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302
      ? this._setSize(
          e.image.length === 0 ? Jr : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4);
    const n = t || this._allocateTarget();
    return this._textureToCubemap(e), this._applyPMREM(n), n;
  }
  _allocateTarget() {
    const e = this._cubeSize,
      t = Qr(e, !1, !1),
      n = Math.log2(e) - Ic;
    for (let r = 0; r <= n; r++)
      t.texture.mipmaps.push({ width: e >> r, height: e >> r });
    return (t.texture.name = "PMREM"), (t.texture.isPMREMTexture = !0), t;
  }
  _getSourceTarget(e = !1) {
    const t = this._cubeSize,
      n = this._sourceTarget;
    return (
      (n === null || n.width !== t || (e && n.depthBuffer === !1)) &&
        (n !== null && n.dispose(), (this._sourceTarget = Qr(t, !0, e))),
      this._sourceTarget
    );
  }
  _compileMaterial(e) {
    (this._boxMesh.material = e),
      this._renderer.compile(this._boxMesh, this._cubeCamera.children[0]);
  }
  _renderCube(e, t, n) {
    const r = this._boxMesh,
      a = this._cubeCamera;
    (r.material = n), (a.renderTarget = e), (a.activeMipmapLevel = t);
    const s = e.width >> t;
    e.viewport.set(0, 0, s, s),
      a.update(this._renderer, r),
      e.viewport.set(0, 0, e.width, e.height);
  }
  _textureToCubemap(e) {
    let t;
    e.mapping === 301 || e.mapping === 302
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ea()),
        (t = this._cubemapMaterial),
        (t.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1))
      : (this._equirectMaterial === null && (this._equirectMaterial = jr()),
        (t = this._equirectMaterial)),
      (t.uniforms.envMap.value = e),
      this._renderCube(this._getSourceTarget(), 0, t);
  }
  _applyPMREM(e) {
    this._ggxMaterial === null &&
      ((this._ggxMaterial = Gc()), (this._integrationMaterial = zc()));
    const t = this._cubeSize,
      n = e.texture.mipmaps.length - 1,
      r = this._ggxMaterial.uniforms;
    r.envMap.value = this._sourceTarget.texture;
    const a = this._integrationMaterial.uniforms;
    (a.envMap.value = this._sourceTarget.texture),
      (a.sourceLod.value = Math.log2(t / Fa));
    for (let s = 0; s <= n; s++) {
      const o = wi.lodToRoughness(s, n);
      if (s > n - Uc)
        (a.roughness.value = o),
          this._renderCube(e, s, this._integrationMaterial);
      else {
        const c =
          o > 0
            ? Math.log2(t) + 0.5 * Math.log2(6 / (Ia * Math.pow(o, 4))) + 0.5
            : 0;
        (r.roughness.value = o),
          (r.lodBias.value = c),
          this._renderCube(e, s, this._ggxMaterial);
      }
    }
  }
  _blur(e, t) {
    this._blurMaterial === null && (this._blurMaterial = Hc());
    const n = this._blurMaterial,
      r = n.uniforms,
      a = this._sourceTarget;
    (r.sigma.value = Math.min(t, Math.PI) / Math.SQRT2),
      (r.envMap.value = a.texture),
      this._renderCube(e, 0, n),
      (r.envMap.value = e.texture),
      this._renderCube(a, 0, n);
  }
}
function Qr(i, e, t) {
  return new fr(i, {
    minFilter: 1008,
    generateMipmaps: e,
    type: 1016,
    colorSpace: yi,
    depthBuffer: t,
  });
}
function Qn(i, e, t) {
  return new vn({
    name: i,
    uniforms: e,
    vertexShader: Ue.cube_vert,
    fragmentShader: t,
    side: 1,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Gc() {
  return Qn(
    "PMREMGGXConvolution",
    { envMap: { value: null }, roughness: { value: 0 }, lodBias: { value: 0 } },
    `

		#define GGX_SAMPLES ${Ia}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`
  );
}
function zc() {
  return Qn(
    "PMREMGGXIntegration",
    {
      envMap: { value: null },
      roughness: { value: 0 },
      sourceLod: { value: 0 },
      sourceSize: { value: Fa },
    },
    `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`
  );
}
function Hc() {
  return Qn(
    "PMREMSphericalGaussianBlur",
    { envMap: { value: null }, sigma: { value: 0 } },
    `

		#define SAMPLES ${Fc}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`
  );
}
function jr() {
  return Qn(
    "PMREMEquirectangularToCubemap",
    { envMap: { value: null } },
    `

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`
  );
}
function ea() {
  return Qn(
    "PMREMCubemapToCubemap",
    { envMap: { value: null }, flipEnvMap: { value: -1 } },
    `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`
  );
}
function Vc(i) {
  let e = new WeakMap(),
    t = new WeakMap(),
    n = null;
  function r(u, m = !1) {
    return u == null ? null : m ? s(u) : a(u);
  }
  function a(u) {
    if (u && u.isTexture) {
      const m = u.mapping;
      if (m === 303 || m === 304)
        if (e.has(u)) {
          const v = e.get(u).texture;
          return o(v, u.mapping);
        } else {
          const v = u.image;
          if (v && v.height > 0) {
            const T = new fr(v.height);
            return (
              T.fromEquirectangularTexture(i, u),
              e.set(u, T),
              u.addEventListener("dispose", l),
              o(T.texture, u.mapping)
            );
          } else return null;
        }
    }
    return u;
  }
  function s(u) {
    if (u && u.isTexture && u.isPMREMTexture !== !0) {
      const m = u.mapping,
        v = m === 303 || m === 304,
        T = m === 301 || m === 302;
      if (v || T) {
        let h = t.get(u);
        const d = h !== void 0 ? h.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== d)
          return (
            n === null && (n = new wi(i)),
            (h = v ? n.fromEquirectangular(u, h) : n.fromCubemap(u, h)),
            (h.texture.pmremVersion = u.pmremVersion),
            t.set(u, h),
            h.texture
          );
        if (h !== void 0) return h.texture;
        {
          const E = u.image;
          return (v && E && E.height > 0) || (T && E && c(E))
            ? (n === null && (n = new wi(i)),
              (h = v ? n.fromEquirectangular(u) : n.fromCubemap(u)),
              (h.texture.pmremVersion = u.pmremVersion),
              t.set(u, h),
              u.addEventListener("dispose", f),
              h.texture)
            : null;
        }
      }
    }
    return u;
  }
  function o(u, m) {
    return m === 303 ? (u.mapping = 301) : m === 304 && (u.mapping = 302), u;
  }
  function c(u) {
    let m = 0;
    const v = 6;
    for (let T = 0; T < v; T++) u[T] !== void 0 && m++;
    return m === v;
  }
  function l(u) {
    const m = u.target;
    m.removeEventListener("dispose", l);
    const v = e.get(m);
    v !== void 0 && (e.delete(m), v.dispose());
  }
  function f(u) {
    const m = u.target;
    m.removeEventListener("dispose", f);
    const v = t.get(m);
    v !== void 0 && (t.delete(m), v.dispose());
  }
  function _() {
    (e = new WeakMap()),
      (t = new WeakMap()),
      n !== null && (n.dispose(), (n = null));
  }
  return { get: r, dispose: _ };
}
function kc(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    const r = i.getExtension(n);
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null && Ti("WebGLRenderer: " + n + " extension not supported."), r
      );
    },
  };
}
function Wc(i, e, t, n) {
  const r = {},
    a = new WeakMap(),
    s = new FinalizationRegistry((v) => delete r[v]);
  function o(v) {
    c(v.target);
  }
  function c(v) {
    v.index !== null && e.remove(v.index);
    for (const h in v.attributes) e.remove(v.attributes[h]);
    v.removeEventListener("dispose", o), delete r[v.id], s.unregister(v);
    const T = a.get(v);
    T && (e.remove(T), a.delete(v)),
      n.releaseStatesOfGeometry(v),
      v.isInstancedBufferGeometry === !0 && delete v._maxInstanceCount,
      t.memory.geometries--;
  }
  function l(v, T) {
    return (
      r[T.id] !== void 0 ||
        (T.addEventListener("dispose", o),
        (r[T.id] = new WeakRef(T)),
        s.register(T, T.id, T),
        t.memory.geometries++),
      T
    );
  }
  function f(v) {
    const T = v.attributes;
    for (const h in T) e.update(T[h], i.ARRAY_BUFFER);
  }
  function _(v) {
    const T = v.index,
      h = v.attributes.position;
    let d = 0;
    if (h === void 0) return;
    const E = T !== null ? T.array.length : h.array.length / 3 - 1,
      b = h.count >= 65535 ? Ra : ya,
      A = new b(Math.ceil(E / 3) * 6, 1),
      C = A.array;
    if (T !== null) {
      const p = T.array;
      d = T.version;
      for (let M = 0, O = 0; M < E; M += 3) {
        const D = p[M + 0],
          N = p[M + 1],
          G = p[M + 2];
        (C[O++] = D),
          (C[O++] = N),
          (C[O++] = N),
          (C[O++] = G),
          (C[O++] = G),
          (C[O++] = D);
      }
    } else {
      d = h.version;
      for (let p = 0, M = 0; p < E; p += 3) {
        const O = p + 0,
          D = p + 1,
          N = p + 2;
        (C[M++] = O),
          (C[M++] = D),
          (C[M++] = D),
          (C[M++] = N),
          (C[M++] = N),
          (C[M++] = O);
      }
    }
    A.version = d;
    const y = a.get(v);
    y && e.remove(y), a.set(v, A);
  }
  function u(v) {
    const T = a.get(v);
    if (T) {
      const h = v.index;
      h !== null && T.version < h.version && _(v);
    } else _(v);
    return a.get(v);
  }
  function m() {
    for (const v in r) {
      const T = r[v].deref();
      T !== void 0 && c(T);
    }
  }
  return { get: l, update: f, getWireframeAttribute: u, dispose: m };
}
function Xc(i, e, t) {
  let n;
  function r(_) {
    n = _;
  }
  let a, s;
  function o(_) {
    (a = _.type), (s = _.bytesPerElement);
  }
  function c(_, u) {
    i.drawElements(n, u, a, _ * s), t.update(u, n, 1);
  }
  function l(_, u, m) {
    m !== 0 && (i.drawElementsInstanced(n, u, a, _ * s, m), t.update(u, n, m));
  }
  function f(_, u, m) {
    if (m === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, a, _, 0, m);
    let T = 0;
    for (let h = 0; h < m; h++) T += u[h];
    t.update(T, n, 1);
  }
  (this.setMode = r),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = f);
}
function qc(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(a, s, o) {
    switch ((t.calls++, s)) {
      case i.TRIANGLES:
        t.triangles += o * (a / 3);
        break;
      case i.LINES:
        t.lines += o * (a / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (a - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * a;
        break;
      case i.POINTS:
        t.points += o * a;
        break;
      default:
        We("WebGLInfo: Unknown draw mode:", s);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Yc(i, e, t) {
  const n = new WeakMap(),
    r = new it();
  function a(s, o, c) {
    const l = s.morphTargetInfluences,
      f =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      _ = f !== void 0 ? f.length : 0;
    let u = n.get(o);
    if (u === void 0 || u.count !== _) {
      let O = function () {
        p.dispose(), n.delete(o), o.removeEventListener("dispose", O);
      };
      u !== void 0 && u.texture.dispose();
      const m = o.morphAttributes.position !== void 0,
        v = o.morphAttributes.normal !== void 0,
        T = o.morphAttributes.color !== void 0,
        h = o.morphAttributes.position || [],
        d = o.morphAttributes.normal || [],
        E = o.morphAttributes.color || [];
      let b = 0;
      m === !0 && (b = 1), v === !0 && (b = 2), T === !0 && (b = 3);
      let A = o.attributes.position.count * b,
        C = 1;
      A > e.maxTextureSize &&
        ((C = Math.ceil(A / e.maxTextureSize)), (A = e.maxTextureSize));
      const y = new Float32Array(A * C * 4 * _),
        p = new Ea(y, A, C, _);
      (p.type = 1015), (p.needsUpdate = !0);
      const M = b * 4;
      for (let D = 0; D < _; D++) {
        const N = h[D],
          G = d[D],
          q = E[D],
          P = A * C * 4 * D;
        for (let W = 0; W < N.count; W++) {
          const $ = W * M;
          m === !0 &&
            (r.fromBufferAttribute(N, W),
            (y[P + $ + 0] = r.x),
            (y[P + $ + 1] = r.y),
            (y[P + $ + 2] = r.z),
            (y[P + $ + 3] = 0)),
            v === !0 &&
              (r.fromBufferAttribute(G, W),
              (y[P + $ + 4] = r.x),
              (y[P + $ + 5] = r.y),
              (y[P + $ + 6] = r.z),
              (y[P + $ + 7] = 0)),
            T === !0 &&
              (r.fromBufferAttribute(q, W),
              (y[P + $ + 8] = r.x),
              (y[P + $ + 9] = r.y),
              (y[P + $ + 10] = r.z),
              (y[P + $ + 11] = q.itemSize === 4 ? r.w : 1));
        }
      }
      (u = { count: _, texture: p, size: new Xe(A, C) }),
        n.set(o, u),
        o.addEventListener("dispose", O);
    }
    if (s.isInstancedMesh === !0 && s.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", s.morphTexture, t);
    else {
      let m = 0;
      for (let T = 0; T < l.length; T++) m += l[T];
      const v = o.morphTargetsRelative ? 1 : 1 - m;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", v),
        c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, t),
      c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size);
  }
  return { update: a };
}
function Kc(i, e, t, n, r) {
  let a = new WeakMap();
  function s(l) {
    const f = r.render.frame,
      _ = l.geometry,
      u = e.get(l, _);
    if (
      (a.get(u) !== f && (e.update(u), a.set(u, f)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", c) === !1 &&
          l.addEventListener("dispose", c),
        a.get(l) !== f &&
          (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
          a.set(l, f))),
      l.isSkinnedMesh)
    ) {
      const m = l.skeleton;
      a.get(m) !== f && (m.update(), a.set(m, f));
    }
    return u;
  }
  function o() {
    a = new WeakMap();
  }
  function c(l) {
    const f = l.target;
    f.removeEventListener("dispose", c),
      n.releaseStatesOfObject(f),
      t.remove(f.instanceMatrix),
      f.instanceColor !== null && t.remove(f.instanceColor);
  }
  return { update: s, dispose: o };
}
const Zc = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING",
};
function $c(i, e, t, n, r, a) {
  const s = new Xt(e, t, {
    type: i,
    depthBuffer: r,
    stencilBuffer: a,
    samples: n ? 4 : 0,
    storeMultisampledDepthBuffer: !1,
    storeMultisampledStencilBuffer: !1,
    resolveDepthBuffer: !1,
    resolveStencilBuffer: !1,
  });
  let o = null,
    c = null,
    l = null;
  const f = new Mn();
  f.setAttribute("position", new jt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
    f.setAttribute("uv", new jt([0, 2, 0, 0, 2, 0], 2));
  const _ = new Hs({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
      fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
      depthTest: !1,
      depthWrite: !1,
    }),
    u = new xn(f, _),
    m = new Ws(-1, 1, 1, -1, 0, 1);
  let v = null,
    T = null,
    h = !1,
    d,
    E = null,
    b = [],
    A = !1;
  (this.setSize = function (C, y) {
    s.setSize(C, y),
      o !== null && o.setSize(C, y),
      c !== null && c.setSize(C, y);
    for (let p = 0; p < b.length; p++) {
      const M = b[p];
      M.setSize && M.setSize(C, y);
    }
  }),
    (this.setEffects = function (C) {
      (b = C), (A = b.length > 0 && b[0].isRenderPass === !0);
      const y = s.width,
        p = s.height;
      b.length > 0 &&
        o === null &&
        ((o = new Xt(y, p, { type: 1016, depthBuffer: !1, stencilBuffer: !1 })),
        (c = new Xt(y, p, { type: 1016, depthBuffer: !1, stencilBuffer: !1 })));
      const M = r === !0 && b.some((O) => O.needsDepthTexture === !0);
      M !== (s.depthTexture !== null) &&
        (M === !0 &&
          l === null &&
          ((l = new Fn(y, p)),
          a === !0 && ((l.format = 1027), (l.type = 1020))),
        s.dispose(),
        (s.depthTexture = M ? l : null),
        (s.resolveDepthBuffer = M),
        (s.storeMultisampledDepthBuffer = M));
      for (let O = 0; O < b.length; O++) {
        const D = b[O];
        D.setSize && D.setSize(y, p),
          M &&
            D.needsDepthTexture === !0 &&
            D.setDepthTexture &&
            D.setDepthTexture(l);
      }
    }),
    (this.begin = function (C, y) {
      if (h || (C.toneMapping === 0 && b.length === 0)) return !1;
      if (((E = y), y !== null)) {
        const p = y.width,
          M = y.height;
        (s.width !== p || s.height !== M) && this.setSize(p, M);
      }
      return (
        A === !1 && C.setRenderTarget(s),
        (d = C.toneMapping),
        (C.toneMapping = 0),
        !0
      );
    }),
    (this.hasRenderPass = function () {
      return A;
    }),
    (this.end = function (C, y) {
      (C.toneMapping = d), (h = !0);
      let p = s,
        M = o;
      for (let O = 0; O < b.length; O++) {
        const D = b[O];
        D.enabled !== !1 &&
          (D.render(C, M, p, y),
          D.needsSwap !== !1 && ((p = M), (M = M === o ? c : o)));
      }
      if (v !== C.outputColorSpace || T !== C.toneMapping) {
        (v = C.outputColorSpace),
          (T = C.toneMapping),
          (_.defines = {}),
          He.getTransfer(v) === Ze && (_.defines.SRGB_TRANSFER = "");
        const O = Zc[T];
        O && (_.defines[O] = ""), (_.needsUpdate = !0);
      }
      (_.uniforms.tDiffuse.value = p.texture),
        C.setRenderTarget(E),
        C.render(u, m),
        (E = null),
        (h = !1);
    }),
    (this.isCompositing = function () {
      return h;
    }),
    (this.dispose = function () {
      s.dispose(),
        o !== null && o.dispose(),
        c !== null && c.dispose(),
        f.dispose(),
        _.dispose();
    });
}
const Ua = new At(),
  Oa = new Fn(1, 1),
  Ba = new Ca(1),
  Ga = new Ea(),
  za = new xs(),
  Ha = new ba(),
  ta = [],
  na = [],
  ia = new Float32Array(16),
  ra = new Float32Array(9),
  aa = new Float32Array(4);
function Gn(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let a = ta[r];
  if ((a === void 0 && ((a = new Float32Array(r)), (ta[r] = a)), e !== 0)) {
    n.toArray(a, 0);
    for (let s = 1, o = 0; s !== e; ++s) (o += t), i[s].toArray(a, o);
  }
  return a;
}
function ut(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function dt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Ni(i, e) {
  let t = na[e];
  t === void 0 && ((t = new Int32Array(e)), (na[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Jc(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Qc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ut(t, e)) return;
    i.uniform2fv(this.addr, e), dt(t, e);
  }
}
function jc(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (ut(t, e)) return;
    i.uniform3fv(this.addr, e), dt(t, e);
  }
}
function eu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ut(t, e)) return;
    i.uniform4fv(this.addr, e), dt(t, e);
  }
}
function tu(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    aa.set(n), i.uniformMatrix2fv(this.addr, !1, aa), dt(t, n);
  }
}
function nu(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    ra.set(n), i.uniformMatrix3fv(this.addr, !1, ra), dt(t, n);
  }
}
function iu(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    ia.set(n), i.uniformMatrix4fv(this.addr, !1, ia), dt(t, n);
  }
}
function ru(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function au(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ut(t, e)) return;
    i.uniform2iv(this.addr, e), dt(t, e);
  }
}
function su(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ut(t, e)) return;
    i.uniform3iv(this.addr, e), dt(t, e);
  }
}
function ou(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ut(t, e)) return;
    i.uniform4iv(this.addr, e), dt(t, e);
  }
}
function lu(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function cu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ut(t, e)) return;
    i.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function uu(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ut(t, e)) return;
    i.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function du(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ut(t, e)) return;
    i.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function Ii(i) {
  return (
    i.version === 0 && ((i.compareFunction = 519), (i.needsUpdate = !0)), i
  );
}
function fu(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (a = Ii(Oa)) : (a = Ua),
    t.setTexture2D(e || a, r);
}
function hu(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || za, r);
}
function pu(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let a;
  this.type === i.SAMPLER_CUBE_SHADOW ? (a = Ii(Ba)) : (a = Ha),
    t.setTextureCube(e || a, r);
}
function mu(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Ga, r);
}
function _u(i) {
  switch (i) {
    case 5126:
      return Jc;
    case 35664:
      return Qc;
    case 35665:
      return jc;
    case 35666:
      return eu;
    case 35674:
      return tu;
    case 35675:
      return nu;
    case 35676:
      return iu;
    case 5124:
    case 35670:
      return ru;
    case 35667:
    case 35671:
      return au;
    case 35668:
    case 35672:
      return su;
    case 35669:
    case 35673:
      return ou;
    case 5125:
      return lu;
    case 36294:
      return cu;
    case 36295:
      return uu;
    case 36296:
      return du;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return fu;
    case 35679:
    case 36299:
    case 36307:
      return hu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return pu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return mu;
  }
}
function gu(i, e) {
  i.uniform1fv(this.addr, e);
}
function xu(i, e) {
  const t = Gn(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function vu(i, e) {
  const t = Gn(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Su(i, e) {
  const t = Gn(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Mu(i, e) {
  const t = Gn(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Eu(i, e) {
  const t = Gn(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function Tu(i, e) {
  const t = Gn(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Au(i, e) {
  i.uniform1iv(this.addr, e);
}
function yu(i, e) {
  i.uniform2iv(this.addr, e);
}
function Ru(i, e) {
  i.uniform3iv(this.addr, e);
}
function bu(i, e) {
  i.uniform4iv(this.addr, e);
}
function Cu(i, e) {
  i.uniform1uiv(this.addr, e);
}
function wu(i, e) {
  i.uniform2uiv(this.addr, e);
}
function Pu(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Du(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Lu(i, e, t) {
  const n = this.cache,
    r = e.length,
    a = Ni(t, r);
  ut(n, a) || (i.uniform1iv(this.addr, a), dt(n, a));
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (s = Ii(Oa)) : (s = Ua);
  for (let o = 0; o !== r; ++o) t.setTexture2D(e[o] || s, a[o]);
}
function Nu(i, e, t) {
  const n = this.cache,
    r = e.length,
    a = Ni(t, r);
  ut(n, a) || (i.uniform1iv(this.addr, a), dt(n, a));
  for (let s = 0; s !== r; ++s) t.setTexture3D(e[s] || za, a[s]);
}
function Iu(i, e, t) {
  const n = this.cache,
    r = e.length,
    a = Ni(t, r);
  ut(n, a) || (i.uniform1iv(this.addr, a), dt(n, a));
  let s;
  this.type === i.SAMPLER_CUBE_SHADOW ? (s = Ii(Ba)) : (s = Ha);
  for (let o = 0; o !== r; ++o) t.setTextureCube(e[o] || s, a[o]);
}
function Fu(i, e, t) {
  const n = this.cache,
    r = e.length,
    a = Ni(t, r);
  ut(n, a) || (i.uniform1iv(this.addr, a), dt(n, a));
  for (let s = 0; s !== r; ++s) t.setTexture2DArray(e[s] || Ga, a[s]);
}
function Uu(i) {
  switch (i) {
    case 5126:
      return gu;
    case 35664:
      return xu;
    case 35665:
      return vu;
    case 35666:
      return Su;
    case 35674:
      return Mu;
    case 35675:
      return Eu;
    case 35676:
      return Tu;
    case 5124:
    case 35670:
      return Au;
    case 35667:
    case 35671:
      return yu;
    case 35668:
    case 35672:
      return Ru;
    case 35669:
    case 35673:
      return bu;
    case 5125:
      return Cu;
    case 36294:
      return wu;
    case 36295:
      return Pu;
    case 36296:
      return Du;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Lu;
    case 35679:
    case 36299:
    case 36307:
      return Nu;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Iu;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Fu;
  }
}
class Ou {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = _u(t.type));
  }
}
class Bu {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = Uu(t.type));
  }
}
class Gu {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let a = 0, s = r.length; a !== s; ++a) {
      const o = r[a];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ir = /(\w+)(\])?(\[|\.)?/g;
function sa(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function zu(i, e, t) {
  const n = i.name,
    r = n.length;
  for (ir.lastIndex = 0; ; ) {
    const a = ir.exec(n),
      s = ir.lastIndex;
    let o = a[1];
    const c = a[2] === "]",
      l = a[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && s + 2 === r))) {
      sa(t, l === void 0 ? new Ou(o, i, e) : new Bu(o, i, e));
      break;
    } else {
      let _ = t.map[o];
      _ === void 0 && ((_ = new Gu(o)), sa(t, _)), (t = _);
    }
  }
}
class Ai {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const o = e.getActiveUniform(t, s),
        c = e.getUniformLocation(t, o.name);
      zu(o, c, this);
    }
    const r = [],
      a = [];
    for (const s of this.seq)
      s.type === e.SAMPLER_2D_SHADOW ||
      s.type === e.SAMPLER_CUBE_SHADOW ||
      s.type === e.SAMPLER_2D_ARRAY_SHADOW
        ? r.push(s)
        : a.push(s);
    r.length > 0 && (this.seq = r.concat(a));
  }
  setValue(e, t, n, r) {
    const a = this.map[t];
    a !== void 0 && a.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let a = 0, s = t.length; a !== s; ++a) {
      const o = t[a],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, a = e.length; r !== a; ++r) {
      const s = e[r];
      s.id in t && n.push(s);
    }
    return n;
  }
}
function oa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const Hu = 37297;
let Vu = 0;
function ku(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    a = Math.min(e + 6, t.length);
  for (let s = r; s < a; s++) {
    const o = s + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[s]}`);
  }
  return n.join(`
`);
}
const la = new Pe();
function Wu(i) {
  He._getMatrix(la, He.workingColorSpace, i);
  const e = `mat3( ${la.elements.map((t) => t.toFixed(4))} )`;
  switch (He.getTransfer(i)) {
    case Ri:
      return [e, "LinearTransferOETF"];
    case Ze:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        Ce("WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
      );
  }
}
function ca(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    a = (i.getShaderInfoLog(e) || "").trim();
  if (n && a === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(a);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      a +
      `

` +
      ku(i.getShaderSource(e), o)
    );
  } else return a;
}
function Xu(i, e) {
  const t = Wu(e);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,
    "}",
  ].join(`
`);
}
const qu = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom",
};
function Yu(i, e) {
  const t = qu[e];
  return t === void 0
    ? (Ce("WebGLProgram: Unsupported toneMapping:", e),
      "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }")
    : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Ei = new z();
function Ku() {
  He.getLuminanceCoefficients(Ei);
  const i = Ei.x.toFixed(4),
    e = Ei.y.toFixed(4),
    t = Ei.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function Zu(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(qn).join(`
`);
}
function $u(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ju(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const a = i.getActiveAttrib(e, r),
      s = a.name;
    let o = 1;
    a.type === i.FLOAT_MAT2 && (o = 2),
      a.type === i.FLOAT_MAT3 && (o = 3),
      a.type === i.FLOAT_MAT4 && (o = 4),
      (t[s] = {
        type: a.type,
        location: i.getAttribLocation(e, s),
        locationSize: o,
      });
  }
  return t;
}
function qn(i) {
  return i !== "";
}
function ua(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_SUN_LIGHTS/g, e.numSunLights)
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_SUN_LIGHT_SHADOWS/g, e.numSunLightShadows)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
    .replace(/NUM_LIGHT_PROBE_GRIDS/g, e.numLightProbeGrids);
}
function da(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Qu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function sr(i) {
  return i.replace(Qu, ju);
}
function ju(i, e) {
  const t = Ue[e];
  if (t === void 0)
    throw new Error("THREE.WebGLProgram: Can not resolve #include <" + e + ">");
  return sr(t);
}
const ed =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function fa(i) {
  return i.replace(ed, td);
}
function td(i, e, t, n) {
  let r = "";
  for (let a = parseInt(e); a < parseInt(t); a++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + a + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, a);
  return r;
}
function ha(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
const nd = { 1: "SHADOWMAP_TYPE_PCF", 3: "SHADOWMAP_TYPE_VSM" };
function id(i) {
  return nd[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
const rd = { 302: "ENVMAP_MODE_REFRACTION" };
function ad(i) {
  return i.envMap === !1
    ? "ENVMAP_MODE_REFLECTION"
    : rd[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
const sd = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD",
};
function od(i) {
  return i.envMap === !1
    ? "ENVMAP_BLENDING_NONE"
    : sd[i.combine] || "ENVMAP_BLENDING_NONE";
}
function ld(i, e, t, n) {
  const r = i.getContext(),
    a = t.defines;
  let s = t.vertexShader,
    o = t.fragmentShader;
  const c = id(t),
    l = t.envMapPMREM === !0 ? "ENVMAP_TYPE_PMREM" : "ENVMAP_TYPE_CUBE",
    f = ad(t),
    _ = od(t),
    u = Zu(t),
    m = $u(a),
    v = r.createProgram();
  let T,
    h,
    d = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((T = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        m,
      ].filter(qn).join(`
`)),
      T.length > 0 &&
        (T += `
`),
      (h = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        m,
      ].filter(qn).join(`
`)),
      h.length > 0 &&
        (h += `
`))
    : ((T = [
        ha(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        m,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + f : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.diffuseRoughnessMapUv
          ? "#define DIFFUSE_ROUGHNESSMAP_UV " + t.diffuseRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexNormals ? "#define HAS_NORMAL" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(qn).join(`
`)),
      (h = [
        ha(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        m,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + f : "",
        t.envMap ? "#define " + _ : "",
        t.envMapPMREM ? "#define ENVMAP_MAX_LOD " + t.envMapMaxLod + ".0" : "",
        t.envMapPMREM ? "#define ENVMAP_SIZE " + t.envMapSize + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.diffuseRoughness ? "#define USE_DIFFUSE_ROUGHNESS" : "",
        t.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.retroreflection ? "#define USE_RETROREFLECTION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas || t.batchingColor ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
        t.toneMapping !== 0 ? Ue.tonemapping_pars_fragment : "",
        t.toneMapping !== 0 ? Yu("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ue.colorspace_pars_fragment,
        Xu("linearToOutputTexel", t.outputColorSpace),
        Ku(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(qn).join(`
`))),
    (s = sr(s)),
    (s = ua(s, t)),
    (s = da(s, t)),
    (o = sr(o)),
    (o = ua(o, t)),
    (o = da(o, t)),
    (s = fa(s)),
    (o = fa(o)),
    t.isRawShaderMaterial !== !0 &&
      ((d = `#version 300 es
`),
      (T =
        [
          u,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        T),
      (h =
        [
          "#define varying in",
          t.glslVersion === Cr
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Cr ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        h));
  const E = d + T + s,
    b = d + h + o,
    A = oa(r, r.VERTEX_SHADER, E),
    C = oa(r, r.FRAGMENT_SHADER, b);
  r.attachShader(v, A),
    r.attachShader(v, C),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(v, 0, t.index0AttributeName)
      : t.hasPositionAttribute === !0 && r.bindAttribLocation(v, 0, "position"),
    r.linkProgram(v);
  function y(D) {
    if (i.debug.checkShaderErrors) {
      const N = r.getProgramInfoLog(v) || "",
        G = r.getShaderInfoLog(A) || "",
        q = r.getShaderInfoLog(C) || "",
        P = N.trim(),
        W = G.trim(),
        $ = q.trim();
      let H = !0,
        te = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (((H = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(r, v, A, C);
        else {
          const k = ca(r, A, "vertex"),
            Q = ca(r, C, "fragment");
          We(
            "WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(v, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              D.name +
              `
Material Type: ` +
              D.type +
              `

Program Info Log: ` +
              P +
              `
` +
              k +
              `
` +
              Q
          );
        }
      else
        P !== ""
          ? Ce("WebGLProgram: Program Info Log:", P)
          : (W === "" || $ === "") && (te = !1);
      te &&
        (D.diagnostics = {
          runnable: H,
          programLog: P,
          vertexShader: { log: W, prefix: T },
          fragmentShader: { log: $, prefix: h },
        });
    }
    r.deleteShader(A), r.deleteShader(C), (p = new Ai(r, v)), (M = Ju(r, v));
  }
  let p;
  this.getUniforms = function () {
    return p === void 0 && y(this), p;
  };
  let M;
  this.getAttributes = function () {
    return M === void 0 && y(this), M;
  };
  let O = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return O === !1 && (O = r.getProgramParameter(v, Hu)), O;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(v),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Vu++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = v),
    (this.vertexShader = A),
    (this.fragmentShader = C),
    this
  );
}
let cd = 0;
class ud {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e, t, n) {
    const r = this._getShaderCacheForMaterial(e);
    return (
      r.has(t) === !1 && (r.add(t), t.usedTimes++),
      r.has(n) === !1 && (r.add(n), n.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderStage(e) {
    return this._getShaderStage(e.vertexShader);
  }
  getFragmentShaderStage(e) {
    return this._getShaderStage(e.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new dd(e)), t.set(e, n)), n;
  }
}
class dd {
  constructor(e) {
    (this.id = cd++), (this.code = e), (this.usedTimes = 0);
  }
}
function fd(i) {
  return i === 1030 || i === 37490 || i === 36285;
}
function hd(i, e, t, n, r, a) {
  const s = new Ta(),
    o = new ud(),
    c = new Set(),
    l = [],
    f = new Map(),
    _ = n.logarithmicDepthBuffer,
    u = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distance",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
  function m(p) {
    return c.add(p), p === 0 ? "uv" : `uv${p}`;
  }
  function v(p, M, O, D, N, G) {
    const q = D.fog,
      P = N.geometry,
      W =
        p.isMeshStandardMaterial ||
        p.isMeshLambertMaterial ||
        p.isMeshPhongMaterial
          ? D.environment
          : null,
      $ =
        p.isMeshStandardMaterial ||
        (p.isMeshLambertMaterial && !p.envMap) ||
        (p.isMeshPhongMaterial && !p.envMap),
      H = e.get(p.envMap || W, $),
      te = u[p.type];
    let k = n.precision;
    p.precision !== null &&
      ((k = n.getMaxPrecision(p.precision)),
      k !== p.precision &&
        Ce(
          "WebGLProgram.getParameters:",
          p.precision,
          "not supported, using",
          k,
          "instead."
        ));
    const Q =
        P.morphAttributes.position ||
        P.morphAttributes.normal ||
        P.morphAttributes.color,
      j = Q !== void 0 ? Q.length : 0;
    let Me = 0;
    P.morphAttributes.position !== void 0 && (Me = 1),
      P.morphAttributes.normal !== void 0 && (Me = 2),
      P.morphAttributes.color !== void 0 && (Me = 3);
    let De, K, pe, xe;
    if (te) {
      const fe = Wt[te];
      (De = fe.vertexShader), (K = fe.fragmentShader);
    } else {
      (De = p.vertexShader), (K = p.fragmentShader);
      const fe = o.getVertexShaderStage(p),
        Ke = o.getFragmentShaderStage(p);
      o.update(p, fe, Ke), (pe = fe.id), (xe = Ke.id);
    }
    const ye = i.getRenderTarget(),
      me = i.state.buffers.depth.getReversed(),
      Ne = N.isInstancedMesh === !0,
      at = N.isBatchedMesh === !0,
      be = !!p.map,
      Ye = !!p.matcap,
      $e = !!H,
      Oe = $e && H.isPMREMTexture === !0,
      _t = !!p.aoMap,
      lt = !!p.lightMap,
      yt = !!p.bumpMap && p.wireframe === !1,
      tt = !!p.normalMap,
      zt = !!p.displacementMap,
      ft = !!p.emissiveMap,
      wt = !!p.metalnessMap,
      Pt = !!p.roughnessMap,
      Dt = p.anisotropy > 0,
      L = p.clearcoat > 0,
      Lt = p.diffuseRoughness > 0,
      je = p.dispersion > 0,
      et = p.retroreflectivity > 0,
      de = p.iridescence > 0,
      ct = p.sheen > 0,
      Re = p.transmission > 0,
      we = Dt && !!p.anisotropyMap,
      S = L && !!p.clearcoatMap,
      g = L && !!p.clearcoatNormalMap,
      F = L && !!p.clearcoatRoughnessMap,
      ee = Lt && !!p.diffuseRoughnessMap,
      J = de && !!p.iridescenceMap,
      re = de && !!p.iridescenceThicknessMap,
      ce = ct && !!p.sheenColorMap,
      X = ct && !!p.sheenRoughnessMap,
      Y = !!p.specularMap,
      se = !!p.specularColorMap,
      R = !!p.specularIntensityMap,
      Z = Re && !!p.transmissionMap,
      V = Re && !!p.thicknessMap,
      oe = !!p.gradientMap,
      ie = !!p.alphaMap,
      ae = p.alphaTest > 0,
      Te = !!p.alphaHash,
      Fe = !!p.extensions;
    let ne = 0;
    p.toneMapped &&
      (ye === null || ye.isXRRenderTarget === !0) &&
      (ne = i.toneMapping);
    const Ae = Oe
        ? H.isCompressedCubeTexture
          ? H.image[0].mipmaps
          : H.mipmaps
        : null,
      Ie = {
        shaderID: te,
        shaderType: p.type,
        shaderName: p.name,
        vertexShader: De,
        fragmentShader: K,
        defines: p.defines,
        customVertexShaderID: pe,
        customFragmentShaderID: xe,
        isRawShaderMaterial: p.isRawShaderMaterial === !0,
        glslVersion: p.glslVersion,
        precision: k,
        batching: at,
        batchingColor: at && N._colorsTexture !== null,
        instancing: Ne,
        instancingColor: Ne && N.instanceColor !== null,
        instancingMorph: Ne && N.morphTexture !== null,
        outputColorSpace:
          ye === null
            ? i.outputColorSpace
            : ye.isXRRenderTarget === !0
            ? ye.texture.colorSpace
            : He.workingColorSpace,
        alphaToCoverage: !!p.alphaToCoverage,
        map: be,
        matcap: Ye,
        envMap: $e,
        envMapMode: $e && H.mapping,
        envMapPMREM: Oe,
        envMapMaxLod: Oe ? Ae.length - 1 : null,
        envMapSize: Oe ? Ae[0].width : null,
        aoMap: _t,
        lightMap: lt,
        bumpMap: yt,
        normalMap: tt,
        displacementMap: zt,
        emissiveMap: ft,
        normalMapObjectSpace: tt && p.normalMapType === 1,
        normalMapTangentSpace: tt && p.normalMapType === 0,
        packedNormalMap: tt && p.normalMapType === 0 && fd(p.normalMap.format),
        metalnessMap: wt,
        roughnessMap: Pt,
        anisotropy: Dt,
        anisotropyMap: we,
        clearcoat: L,
        clearcoatMap: S,
        clearcoatNormalMap: g,
        clearcoatRoughnessMap: F,
        diffuseRoughness: Lt,
        diffuseRoughnessMap: ee,
        dispersion: je,
        retroreflection: et,
        iridescence: de,
        iridescenceMap: J,
        iridescenceThicknessMap: re,
        sheen: ct,
        sheenColorMap: ce,
        sheenRoughnessMap: X,
        specularMap: Y,
        specularColorMap: se,
        specularIntensityMap: R,
        transmission: Re,
        transmissionMap: Z,
        thicknessMap: V,
        gradientMap: oe,
        opaque:
          p.transparent === !1 && p.blending === 1 && p.alphaToCoverage === !1,
        alphaMap: ie,
        alphaTest: ae,
        alphaHash: Te,
        combine: p.combine,
        mapUv: be && m(p.map.channel),
        aoMapUv: _t && m(p.aoMap.channel),
        lightMapUv: lt && m(p.lightMap.channel),
        bumpMapUv: yt && m(p.bumpMap.channel),
        normalMapUv: tt && m(p.normalMap.channel),
        displacementMapUv: zt && m(p.displacementMap.channel),
        emissiveMapUv: ft && m(p.emissiveMap.channel),
        metalnessMapUv: wt && m(p.metalnessMap.channel),
        roughnessMapUv: Pt && m(p.roughnessMap.channel),
        anisotropyMapUv: we && m(p.anisotropyMap.channel),
        clearcoatMapUv: S && m(p.clearcoatMap.channel),
        clearcoatNormalMapUv: g && m(p.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: F && m(p.clearcoatRoughnessMap.channel),
        diffuseRoughnessMapUv: ee && m(p.diffuseRoughnessMap.channel),
        iridescenceMapUv: J && m(p.iridescenceMap.channel),
        iridescenceThicknessMapUv: re && m(p.iridescenceThicknessMap.channel),
        sheenColorMapUv: ce && m(p.sheenColorMap.channel),
        sheenRoughnessMapUv: X && m(p.sheenRoughnessMap.channel),
        specularMapUv: Y && m(p.specularMap.channel),
        specularColorMapUv: se && m(p.specularColorMap.channel),
        specularIntensityMapUv: R && m(p.specularIntensityMap.channel),
        transmissionMapUv: Z && m(p.transmissionMap.channel),
        thicknessMapUv: V && m(p.thicknessMap.channel),
        alphaMapUv: ie && m(p.alphaMap.channel),
        vertexTangents: !!P.attributes.tangent && (tt || Dt),
        vertexNormals: !!P.attributes.normal,
        vertexColors: p.vertexColors,
        vertexAlphas:
          p.vertexColors === !0 &&
          !!P.attributes.color &&
          P.attributes.color.itemSize === 4,
        pointsUvs: N.isPoints === !0 && !!P.attributes.uv && (be || ie),
        fog: !!q,
        useFog: p.fog === !0,
        fogExp2: !!q && q.isFogExp2,
        flatShading:
          p.wireframe === !1 &&
          (p.flatShading === !0 ||
            (P.attributes.normal === void 0 &&
              tt === !1 &&
              (p.isMeshLambertMaterial ||
                p.isMeshPhongMaterial ||
                p.isMeshStandardMaterial ||
                p.isMeshPhysicalMaterial))),
        sizeAttenuation: p.sizeAttenuation === !0,
        logarithmicDepthBuffer: _,
        reversedDepthBuffer: me,
        skinning: N.isSkinnedMesh === !0,
        hasPositionAttribute: P.attributes.position !== void 0,
        morphTargets: P.morphAttributes.position !== void 0,
        morphNormals: P.morphAttributes.normal !== void 0,
        morphColors: P.morphAttributes.color !== void 0,
        morphTargetsCount: j,
        morphTextureStride: Me,
        numSunLights: M.sun.length,
        numDirLights: M.directional.length,
        numPointLights: M.point.length,
        numSpotLights: M.spot.length,
        numSpotLightMaps: M.spotLightMap.length,
        numRectAreaLights: M.rectArea.length,
        numHemiLights: M.hemi.length,
        numSunLightShadows: M.sunShadowMap.length,
        numDirLightShadows: M.directionalShadowMap.length,
        numPointLightShadows: M.pointShadowMap.length,
        numSpotLightShadows: M.spotShadowMap.length,
        numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
        numLightProbes: M.numLightProbes,
        numLightProbeGrids: G.filter((fe) => fe.texture !== null).length,
        numClippingPlanes: a.numPlanes,
        numClipIntersection: a.numIntersection,
        dithering: p.dithering,
        shadowMapEnabled: i.shadowMap.enabled && O.length > 0,
        shadowMapType: i.shadowMap.type,
        toneMapping: ne,
        decodeVideoTexture:
          be &&
          p.map.isVideoTexture === !0 &&
          He.getTransfer(p.map.colorSpace) === Ze,
        decodeVideoTextureEmissive:
          ft &&
          p.emissiveMap.isVideoTexture === !0 &&
          He.getTransfer(p.emissiveMap.colorSpace) === Ze,
        premultipliedAlpha: p.premultipliedAlpha,
        doubleSided: p.side === 2,
        flipSided: p.side === 1,
        useDepthPacking: p.depthPacking >= 0,
        depthPacking: p.depthPacking || 0,
        index0AttributeName: p.index0AttributeName,
        extensionClipCullDistance:
          Fe &&
          p.extensions.clipCullDistance === !0 &&
          t.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw:
          ((Fe && p.extensions.multiDraw === !0) || at) &&
          t.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: t.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: p.customProgramCacheKey(),
      };
    return (
      (Ie.vertexUv1s = c.has(1)),
      (Ie.vertexUv2s = c.has(2)),
      (Ie.vertexUv3s = c.has(3)),
      c.clear(),
      Ie
    );
  }
  function T(p) {
    const M = [];
    if (
      (p.shaderID
        ? M.push(p.shaderID)
        : (M.push(p.customVertexShaderID), M.push(p.customFragmentShaderID)),
      p.defines !== void 0)
    )
      for (const O in p.defines) M.push(O), M.push(p.defines[O]);
    return (
      p.isRawShaderMaterial === !1 &&
        (h(M, p), d(M, p), M.push(i.outputColorSpace)),
      M.push(p.customProgramCacheKey),
      M.join()
    );
  }
  function h(p, M) {
    p.push(M.precision),
      p.push(M.outputColorSpace),
      p.push(M.envMapMode),
      p.push(M.envMapPMREM),
      p.push(M.envMapMaxLod),
      p.push(M.envMapSize),
      p.push(M.mapUv),
      p.push(M.alphaMapUv),
      p.push(M.lightMapUv),
      p.push(M.aoMapUv),
      p.push(M.bumpMapUv),
      p.push(M.normalMapUv),
      p.push(M.displacementMapUv),
      p.push(M.emissiveMapUv),
      p.push(M.metalnessMapUv),
      p.push(M.roughnessMapUv),
      p.push(M.anisotropyMapUv),
      p.push(M.clearcoatMapUv),
      p.push(M.clearcoatNormalMapUv),
      p.push(M.clearcoatRoughnessMapUv),
      p.push(M.diffuseRoughnessMapUv),
      p.push(M.iridescenceMapUv),
      p.push(M.iridescenceThicknessMapUv),
      p.push(M.sheenColorMapUv),
      p.push(M.sheenRoughnessMapUv),
      p.push(M.specularMapUv),
      p.push(M.specularColorMapUv),
      p.push(M.specularIntensityMapUv),
      p.push(M.transmissionMapUv),
      p.push(M.thicknessMapUv),
      p.push(M.combine),
      p.push(M.fogExp2),
      p.push(M.sizeAttenuation),
      p.push(M.morphTargetsCount),
      p.push(M.numSunLights),
      p.push(M.numDirLights),
      p.push(M.numPointLights),
      p.push(M.numSpotLights),
      p.push(M.numSpotLightMaps),
      p.push(M.numHemiLights),
      p.push(M.numRectAreaLights),
      p.push(M.numSunLightShadows),
      p.push(M.numDirLightShadows),
      p.push(M.numPointLightShadows),
      p.push(M.numSpotLightShadows),
      p.push(M.numSpotLightShadowsWithMaps),
      p.push(M.numLightProbes),
      p.push(M.numLightProbeGrids),
      p.push(M.shadowMapType),
      p.push(M.toneMapping),
      p.push(M.numClippingPlanes),
      p.push(M.numClipIntersection),
      p.push(M.depthPacking);
  }
  function d(p, M) {
    s.disableAll(),
      M.instancing && s.enable(0),
      M.instancingColor && s.enable(1),
      M.instancingMorph && s.enable(2),
      M.matcap && s.enable(3),
      M.envMap && s.enable(4),
      M.normalMapObjectSpace && s.enable(5),
      M.normalMapTangentSpace && s.enable(6),
      M.clearcoat && s.enable(7),
      M.iridescence && s.enable(8),
      M.alphaTest && s.enable(9),
      M.vertexColors && s.enable(10),
      M.vertexAlphas && s.enable(11),
      M.vertexUv1s && s.enable(12),
      M.vertexUv2s && s.enable(13),
      M.vertexUv3s && s.enable(14),
      M.vertexTangents && s.enable(15),
      M.anisotropy && s.enable(16),
      M.alphaHash && s.enable(17),
      M.batching && s.enable(18),
      M.dispersion && s.enable(19),
      M.retroreflection && s.enable(24),
      M.diffuseRoughness && s.enable(25),
      M.batchingColor && s.enable(20),
      M.gradientMap && s.enable(21),
      M.packedNormalMap && s.enable(22),
      M.vertexNormals && s.enable(23),
      p.push(s.mask),
      s.disableAll(),
      M.fog && s.enable(0),
      M.useFog && s.enable(1),
      M.flatShading && s.enable(2),
      M.logarithmicDepthBuffer && s.enable(3),
      M.reversedDepthBuffer && s.enable(4),
      M.skinning && s.enable(5),
      M.morphTargets && s.enable(6),
      M.morphNormals && s.enable(7),
      M.morphColors && s.enable(8),
      M.premultipliedAlpha && s.enable(9),
      M.shadowMapEnabled && s.enable(10),
      M.doubleSided && s.enable(11),
      M.flipSided && s.enable(12),
      M.useDepthPacking && s.enable(13),
      M.dithering && s.enable(14),
      M.transmission && s.enable(15),
      M.sheen && s.enable(16),
      M.opaque && s.enable(17),
      M.pointsUvs && s.enable(18),
      M.decodeVideoTexture && s.enable(19),
      M.decodeVideoTextureEmissive && s.enable(20),
      M.alphaToCoverage && s.enable(21),
      M.numLightProbeGrids > 0 && s.enable(22),
      M.hasPositionAttribute && s.enable(23),
      p.push(s.mask);
  }
  function E(p) {
    const M = u[p.type];
    let O;
    if (M) {
      const D = Wt[M];
      O = Bs.clone(D.uniforms);
    } else O = p.uniforms;
    return O;
  }
  function b(p, M) {
    let O = f.get(M);
    return (
      O !== void 0
        ? ++O.usedTimes
        : ((O = new ld(i, M, p, r)), l.push(O), f.set(M, O)),
      O
    );
  }
  function A(p) {
    if (--p.usedTimes === 0) {
      const M = l.indexOf(p);
      (l[M] = l[l.length - 1]), l.pop(), f.delete(p.cacheKey), p.destroy();
    }
  }
  function C(p) {
    o.remove(p);
  }
  function y() {
    o.dispose();
  }
  return {
    getParameters: v,
    getProgramCacheKey: T,
    getUniforms: E,
    acquireProgram: b,
    releaseProgram: A,
    releaseShaderCache: C,
    programs: l,
    dispose: y,
  };
}
function pd() {
  let i = new WeakMap();
  function e(s) {
    return i.has(s);
  }
  function t(s) {
    let o = i.get(s);
    return o === void 0 && ((o = {}), i.set(s, o)), o;
  }
  function n(s) {
    i.delete(s);
  }
  function r(s, o, c) {
    i.get(s)[o] = c;
  }
  function a() {
    i = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: a };
}
function md(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.materialVariant !== e.materialVariant
    ? i.materialVariant - e.materialVariant
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function pa(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function ma() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function a() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function s(u) {
    let m = 0;
    return u.isInstancedMesh && (m += 2), u.isSkinnedMesh && (m += 1), m;
  }
  function o(u, m, v, T, h, d) {
    let E = i[e];
    return (
      E === void 0
        ? ((E = {
            id: u.id,
            object: u,
            geometry: m,
            material: v,
            materialVariant: s(u),
            groupOrder: T,
            renderOrder: u.renderOrder,
            z: h,
            group: d,
          }),
          (i[e] = E))
        : ((E.id = u.id),
          (E.object = u),
          (E.geometry = m),
          (E.material = v),
          (E.materialVariant = s(u)),
          (E.groupOrder = T),
          (E.renderOrder = u.renderOrder),
          (E.z = h),
          (E.group = d)),
      e++,
      E
    );
  }
  function c(u, m, v, T, h, d, E) {
    E.reversedDepth === !0 && (h = -h);
    const b = o(u, m, v, T, h, d);
    v.transmission > 0
      ? n.push(b)
      : v.transparent === !0
      ? r.push(b)
      : t.push(b);
  }
  function l(u, m, v, T, h, d) {
    const E = o(u, m, v, T, h, d);
    v.transmission > 0
      ? n.unshift(E)
      : v.transparent === !0
      ? r.unshift(E)
      : t.unshift(E);
  }
  function f(u, m) {
    t.length > 1 && t.sort(u || md),
      n.length > 1 && n.sort(m || pa),
      r.length > 1 && r.sort(m || pa);
  }
  function _() {
    for (let u = e, m = i.length; u < m; u++) {
      const v = i[u];
      if (v.id === null) break;
      (v.id = null),
        (v.object = null),
        (v.geometry = null),
        (v.material = null),
        (v.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: a,
    push: c,
    unshift: l,
    finish: _,
    sort: f,
  };
}
function _d() {
  let i = new WeakMap();
  function e(n, r) {
    const a = i.get(n);
    let s;
    return (
      a === void 0
        ? ((s = new ma()), i.set(n, [s]))
        : r >= a.length
        ? ((s = new ma()), a.push(s))
        : (s = a[r]),
      s
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function gd() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "SunLight":
        case "DirectionalLight":
          t = { direction: new z(), color: new qe() };
          break;
        case "SpotLight":
          t = {
            position: new z(),
            direction: new z(),
            color: new qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new z(), color: new qe(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new z(), skyColor: new qe(), groundColor: new qe() };
          break;
        case "RectAreaLight":
          t = {
            color: new qe(),
            position: new z(),
            halfWidth: new z(),
            halfHeight: new z(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function xd() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "SunLight":
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Xe(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Xe(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Xe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let vd = 0;
function Sd(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function Md(i) {
  const e = new gd(),
    t = xd(),
    n = {
      version: 0,
      hash: {
        sunLength: -1,
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numSunShadows: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      sun: [],
      sunShadow: [],
      sunShadowMap: [],
      sunShadowMatrix: [],
      sunShadowCascade: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new z());
  const r = new z(),
    a = new rt(),
    s = new rt();
  function o(l) {
    let f = 0,
      _ = 0,
      u = 0;
    for (let G = 0; G < 9; G++) n.probe[G].set(0, 0, 0);
    let m = 0,
      v = 0,
      T = 0,
      h = 0,
      d = 0,
      E = 0,
      b = 0,
      A = 0,
      C = 0,
      y = 0,
      p = 0,
      M = 0,
      O = 0,
      D = 0;
    l.sort(Sd);
    for (let G = 0, q = l.length; G < q; G++) {
      const P = l[G],
        W = P.color,
        $ = P.intensity,
        H = P.distance;
      let te = null;
      if (
        (P.shadow &&
          P.shadow.map &&
          (P.shadow.map.texture.format === 1030
            ? (te = P.shadow.map.texture)
            : (te = P.shadow.map.depthTexture || P.shadow.map.texture)),
        P.isAmbientLight)
      )
        (f += W.r * $), (_ += W.g * $), (u += W.b * $);
      else if (P.isLightProbe) {
        for (let k = 0; k < 9; k++)
          n.probe[k].addScaledVector(P.sh.coefficients[k], $);
        D++;
      } else if (P.isSunLight) {
        const k = e.get(P);
        if ((k.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow)) {
          const Q = P.shadow,
            j = t.get(P);
          (j.shadowIntensity = Q.intensity),
            (j.shadowBias = Q.bias),
            (j.shadowNormalBias = Q.normalBias),
            (j.shadowRadius = Q.radius),
            j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),
            (n.sunShadow[v] = j),
            (n.sunShadowMap[v] = te);
          const Me = Q.getViewportCount();
          for (let De = 0; De < Me; De++)
            (n.sunShadowMatrix[T + De] = Q.getMatrix(De)),
              (n.sunShadowCascade[T + De] = Q._cascadeData[De]);
          (T += Me), v++;
        }
        (n.sun[m] = k), m++;
      } else if (P.isDirectionalLight) {
        const k = e.get(P);
        if ((k.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow)) {
          const Q = P.shadow,
            j = t.get(P);
          (j.shadowIntensity = Q.intensity),
            (j.shadowBias = Q.bias),
            (j.shadowNormalBias = Q.normalBias),
            (j.shadowRadius = Q.radius),
            (j.shadowMapSize = Q.mapSize),
            (n.directionalShadow[h] = j),
            (n.directionalShadowMap[h] = te),
            (n.directionalShadowMatrix[h] = P.shadow.matrix),
            C++;
        }
        (n.directional[h] = k), h++;
      } else if (P.isSpotLight) {
        const k = e.get(P);
        k.position.setFromMatrixPosition(P.matrixWorld),
          k.color.copy(W).multiplyScalar($),
          (k.distance = H),
          (k.coneCos = Math.cos(P.angle)),
          (k.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (k.decay = P.decay),
          (n.spot[E] = k);
        const Q = P.shadow;
        if (
          (P.map &&
            ((n.spotLightMap[M] = P.map),
            M++,
            Q.updateMatrices(P),
            P.castShadow && O++),
          (n.spotLightMatrix[E] = Q.matrix),
          P.castShadow)
        ) {
          const j = t.get(P);
          (j.shadowIntensity = Q.intensity),
            (j.shadowBias = Q.bias),
            (j.shadowNormalBias = Q.normalBias),
            (j.shadowRadius = Q.radius),
            (j.shadowMapSize = Q.mapSize),
            (n.spotShadow[E] = j),
            (n.spotShadowMap[E] = te),
            p++;
        }
        E++;
      } else if (P.isRectAreaLight) {
        const k = e.get(P);
        k.color.copy(W).multiplyScalar($),
          k.halfWidth.set(P.width * 0.5, 0, 0),
          k.halfHeight.set(0, P.height * 0.5, 0),
          (n.rectArea[b] = k),
          b++;
      } else if (P.isPointLight) {
        const k = e.get(P);
        if (
          (k.color.copy(P.color).multiplyScalar(P.intensity),
          (k.distance = P.distance),
          (k.decay = P.decay),
          P.castShadow)
        ) {
          const Q = P.shadow,
            j = t.get(P);
          (j.shadowIntensity = Q.intensity),
            (j.shadowBias = Q.bias),
            (j.shadowNormalBias = Q.normalBias),
            (j.shadowRadius = Q.radius),
            (j.shadowMapSize = Q.mapSize),
            (j.shadowCameraNear = Q.camera.near),
            (j.shadowCameraFar = Q.camera.far),
            (n.pointShadow[d] = j),
            (n.pointShadowMap[d] = te),
            (n.pointShadowMatrix[d] = P.shadow.matrix),
            y++;
        }
        (n.point[d] = k), d++;
      } else if (P.isHemisphereLight) {
        const k = e.get(P);
        k.skyColor.copy(P.color).multiplyScalar($),
          k.groundColor.copy(P.groundColor).multiplyScalar($),
          (n.hemi[A] = k),
          A++;
      }
    }
    b > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = he.LTC_FLOAT_1), (n.rectAreaLTC2 = he.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = he.LTC_HALF_1), (n.rectAreaLTC2 = he.LTC_HALF_2))),
      (n.ambient[0] = f),
      (n.ambient[1] = _),
      (n.ambient[2] = u);
    const N = n.hash;
    (N.sunLength !== m ||
      N.directionalLength !== h ||
      N.pointLength !== d ||
      N.spotLength !== E ||
      N.rectAreaLength !== b ||
      N.hemiLength !== A ||
      N.numSunShadows !== v ||
      N.numDirectionalShadows !== C ||
      N.numPointShadows !== y ||
      N.numSpotShadows !== p ||
      N.numSpotMaps !== M ||
      N.numLightProbes !== D) &&
      ((n.sun.length = m),
      (n.directional.length = h),
      (n.spot.length = E),
      (n.rectArea.length = b),
      (n.point.length = d),
      (n.hemi.length = A),
      (n.sunShadow.length = v),
      (n.sunShadowMap.length = v),
      (n.sunShadowMatrix.length = T),
      (n.sunShadowCascade.length = T),
      (n.directionalShadow.length = C),
      (n.directionalShadowMap.length = C),
      (n.directionalShadowMatrix.length = C),
      (n.pointShadow.length = y),
      (n.pointShadowMap.length = y),
      (n.pointShadowMatrix.length = y),
      (n.spotShadow.length = p),
      (n.spotShadowMap.length = p),
      (n.spotLightMatrix.length = p + M - O),
      (n.spotLightMap.length = M),
      (n.numSpotLightShadowsWithMaps = O),
      (n.numLightProbes = D),
      (N.sunLength = m),
      (N.directionalLength = h),
      (N.pointLength = d),
      (N.spotLength = E),
      (N.rectAreaLength = b),
      (N.hemiLength = A),
      (N.numSunShadows = v),
      (N.numDirectionalShadows = C),
      (N.numPointShadows = y),
      (N.numSpotShadows = p),
      (N.numSpotMaps = M),
      (N.numLightProbes = D),
      (n.version = vd++));
  }
  function c(l, f) {
    let _ = 0,
      u = 0,
      m = 0,
      v = 0,
      T = 0,
      h = 0;
    const d = f.matrixWorldInverse;
    for (let E = 0, b = l.length; E < b; E++) {
      const A = l[E];
      if (A.isSunLight) {
        const C = n.sun[_];
        C.direction.setFromMatrixPosition(A.matrixWorld),
          C.direction.transformDirection(d),
          _++;
      } else if (A.isDirectionalLight) {
        const C = n.directional[u];
        C.direction.setFromMatrixPosition(A.matrixWorld),
          r.setFromMatrixPosition(A.target.matrixWorld),
          C.direction.sub(r),
          C.direction.transformDirection(d),
          u++;
      } else if (A.isSpotLight) {
        const C = n.spot[v];
        C.position.setFromMatrixPosition(A.matrixWorld),
          C.position.applyMatrix4(d),
          C.direction.setFromMatrixPosition(A.matrixWorld),
          r.setFromMatrixPosition(A.target.matrixWorld),
          C.direction.sub(r),
          C.direction.transformDirection(d),
          v++;
      } else if (A.isRectAreaLight) {
        const C = n.rectArea[T];
        C.position.setFromMatrixPosition(A.matrixWorld),
          C.position.applyMatrix4(d),
          s.identity(),
          a.copy(A.matrixWorld),
          a.premultiply(d),
          s.extractRotation(a),
          C.halfWidth.set(A.width * 0.5, 0, 0),
          C.halfHeight.set(0, A.height * 0.5, 0),
          C.halfWidth.applyMatrix4(s),
          C.halfHeight.applyMatrix4(s),
          T++;
      } else if (A.isPointLight) {
        const C = n.point[m];
        C.position.setFromMatrixPosition(A.matrixWorld),
          C.position.applyMatrix4(d),
          m++;
      } else if (A.isHemisphereLight) {
        const C = n.hemi[h];
        C.direction.setFromMatrixPosition(A.matrixWorld),
          C.direction.transformDirection(d),
          h++;
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function _a(i) {
  const e = new Md(i),
    t = [],
    n = [],
    r = [];
  function a(_) {
    (f.camera = _), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function s(_) {
    _.isLightProbeGrid ? r.push(_) : t.push(_);
  }
  function o(_) {
    n.push(_);
  }
  function c() {
    e.setup(t), r.sort((_, u) => _.priority - u.priority || _.id - u.id);
  }
  function l(_) {
    e.setupView(t, _);
  }
  const f = {
    lightsArray: t,
    shadowsArray: n,
    lightProbeGridArray: r,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
    textureUnits: 0,
  };
  return {
    init: a,
    state: f,
    setupLights: c,
    setupLightsView: l,
    pushLight: s,
    pushShadow: o,
  };
}
function Ed(i) {
  let e = new WeakMap();
  function t(r, a = 0) {
    const s = e.get(r);
    let o;
    return (
      s === void 0
        ? ((o = new _a(i)), e.set(r, [o]))
        : a >= s.length
        ? ((o = new _a(i)), s.push(o))
        : (o = s[a]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const Td = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Ad = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,
  yd = [
    new z(1, 0, 0),
    new z(-1, 0, 0),
    new z(0, 1, 0),
    new z(0, -1, 0),
    new z(0, 0, 1),
    new z(0, 0, -1),
  ],
  Rd = [
    new z(0, -1, 0),
    new z(0, -1, 0),
    new z(0, 0, 1),
    new z(0, 0, -1),
    new z(0, -1, 0),
    new z(0, -1, 0),
  ],
  ga = new rt(),
  Xn = new z(),
  rr = new z();
function bd(i, e, t) {
  let n = new Ci();
  const r = new Xe(),
    a = new Xe(),
    s = new it(),
    o = new Vs(),
    c = new ks(),
    l = {},
    f = t.maxTextureSize,
    _ = { 0: 1, 1: 0, 2: 2 },
    u = new vn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Xe() },
        radius: { value: 4 },
      },
      vertexShader: Td,
      fragmentShader: Ad,
    }),
    m = u.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new Mn();
  v.setAttribute(
    "position",
    new _n(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const T = new xn(v, u),
    h = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1);
  let d = this.type;
  this.render = function (y, p, M) {
    if (
      h.enabled === !1 ||
      (h.autoUpdate === !1 && h.needsUpdate === !1) ||
      y.length === 0
    )
      return;
    this.type === 2 &&
      (Ce(
        "WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."
      ),
      (this.type = 1));
    const O = i.getRenderTarget(),
      D = i.getActiveCubeFace(),
      N = i.getActiveMipmapLevel(),
      G = i.state;
    G.setBlending(0),
      G.buffers.depth.getReversed() === !0
        ? G.buffers.color.setClear(0, 0, 0, 0)
        : G.buffers.color.setClear(1, 1, 1, 1),
      G.buffers.depth.setTest(!0),
      G.setScissorTest(!1);
    const q = d !== this.type;
    q &&
      p.traverse(function (P) {
        P.material &&
          (Array.isArray(P.material)
            ? P.material.forEach((W) => (W.needsUpdate = !0))
            : (P.material.needsUpdate = !0));
      });
    for (let P = 0, W = y.length; P < W; P++) {
      const $ = y[P],
        H = $.shadow;
      if (H === void 0) {
        Ce("WebGLShadowMap:", $, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      r.copy(H.mapSize);
      const te = H.getFrameExtents();
      r.multiply(te),
        a.copy(H.mapSize),
        (r.x > f || r.y > f) &&
          (r.x > f &&
            ((a.x = Math.floor(f / te.x)),
            (r.x = a.x * te.x),
            (H.mapSize.x = a.x)),
          r.y > f &&
            ((a.y = Math.floor(f / te.y)),
            (r.y = a.y * te.y),
            (H.mapSize.y = a.y)));
      const k = i.state.buffers.depth.getReversed();
      if (((H.camera._reversedDepth = k), H.map === null || q === !0)) {
        if (
          (H.map !== null &&
            (H.map.depthTexture !== null &&
              (H.map.depthTexture.dispose(), (H.map.depthTexture = null)),
            H.map.dispose()),
          this.type === 3)
        ) {
          if ($.isPointLight) {
            Ce(
              "WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead."
            );
            continue;
          }
          (H.map = new Xt(r.x, r.y, {
            format: 1030,
            type: 1016,
            minFilter: 1006,
            magFilter: 1006,
            generateMipmaps: !1,
          })),
            (H.map.texture.name = $.name + ".shadowMap"),
            (H.map.depthTexture = new Fn(r.x, r.y, 1015)),
            (H.map.depthTexture.name = $.name + ".shadowMapDepth"),
            (H.map.depthTexture.format = 1026),
            (H.map.depthTexture.compareFunction = null),
            (H.map.depthTexture.minFilter = 1003),
            (H.map.depthTexture.magFilter = 1003);
        } else
          $.isPointLight
            ? ((H.map = new fr(r.x)), (H.map.depthTexture = new Ca(r.x, 1014)))
            : ((H.map = new Xt(r.x, r.y)),
              (H.map.depthTexture = new Fn(r.x, r.y, 1014))),
            (H.map.depthTexture.name = $.name + ".shadowMap"),
            (H.map.depthTexture.format = 1026),
            this.type === 1
              ? ((H.map.depthTexture.compareFunction = k ? 518 : 515),
                (H.map.depthTexture.minFilter = 1006),
                (H.map.depthTexture.magFilter = 1006))
              : ((H.map.depthTexture.compareFunction = null),
                (H.map.depthTexture.minFilter = 1003),
                (H.map.depthTexture.magFilter = 1003));
        H.camera.updateProjectionMatrix();
      }
      H.map.isWebGLCubeRenderTarget !== !0 &&
        (H.map.width !== r.x || H.map.height !== r.y) &&
        H.map.setSize(r.x, r.y);
      const Q = H.map.isWebGLCubeRenderTarget ? 6 : H.getViewportCount();
      $.isPointLight !== !0 && H.updateMatrices($, M);
      const j =
        (H.camera.layers.mask & 4294967294) !== 0 ? H.camera.layers : M.layers;
      for (let Me = 0; Me < Q; Me++) {
        const De = H.getCamera(Me);
        if ($.isPointLight) {
          const K = H.camera,
            pe = H.matrix,
            xe = $.distance || K.far;
          xe !== K.far && ((K.far = xe), K.updateProjectionMatrix()),
            Xn.setFromMatrixPosition($.matrixWorld),
            K.position.copy(Xn),
            rr.copy(K.position),
            rr.add(yd[Me]),
            K.up.copy(Rd[Me]),
            K.lookAt(rr),
            K.updateMatrixWorld(),
            pe.makeTranslation(-Xn.x, -Xn.y, -Xn.z),
            ga.multiplyMatrices(K.projectionMatrix, K.matrixWorldInverse),
            H._frustum.setFromProjectionMatrix(
              ga,
              K.coordinateSystem,
              K.reversedDepth
            );
        }
        if (H.map.isWebGLCubeRenderTarget)
          i.setRenderTarget(H.map, Me), i.clear();
        else {
          Me === 0 && (i.setRenderTarget(H.map), i.clear());
          const K = H.getViewport(Me);
          s.set(a.x * K.x, a.y * K.y, a.x * K.z, a.y * K.w), G.viewport(s);
        }
        (n = H.getFrustum(Me)), A(p, M, De, $, j, this.type);
      }
      H.isPointLightShadow !== !0 && this.type === 3 && E(H, M),
        (H.needsUpdate = !1);
    }
    (d = this.type), (h.needsUpdate = !1), i.setRenderTarget(O, D, N);
  };
  function E(y, p) {
    const M = e.update(T);
    u.defines.VSM_SAMPLES !== y.blurSamples &&
      ((u.defines.VSM_SAMPLES = y.blurSamples),
      (m.defines.VSM_SAMPLES = y.blurSamples),
      (u.needsUpdate = !0),
      (m.needsUpdate = !0)),
      y.mapPass === null
        ? (y.mapPass = new Xt(r.x, r.y, { format: 1030, type: 1016 }))
        : (y.mapPass.width !== y.map.width ||
            y.mapPass.height !== y.map.height) &&
          y.mapPass.setSize(y.map.width, y.map.height),
      (u.uniforms.shadow_pass.value = y.map.depthTexture),
      u.uniforms.resolution.value.set(y.map.width, y.map.height),
      (u.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.mapPass),
      i.clear(),
      i.renderBufferDirect(p, null, M, u, T, null),
      (m.uniforms.shadow_pass.value = y.mapPass.texture),
      m.uniforms.resolution.value.set(y.map.width, y.map.height),
      (m.uniforms.radius.value = y.radius),
      i.setRenderTarget(y.map),
      i.clear(),
      i.renderBufferDirect(p, null, M, m, T, null);
  }
  function b(y, p, M, O) {
    let D = null;
    const N =
      M.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (N !== void 0) D = N;
    else if (
      ((D = M.isPointLight === !0 ? c : o),
      (i.localClippingEnabled &&
        p.clipShadows === !0 &&
        Array.isArray(p.clippingPlanes) &&
        p.clippingPlanes.length !== 0) ||
        (p.displacementMap && p.displacementScale !== 0) ||
        (p.alphaMap && p.alphaTest > 0) ||
        (p.map && p.alphaTest > 0) ||
        p.alphaToCoverage === !0)
    ) {
      const G = D.uuid,
        q = p.uuid;
      let P = l[G];
      P === void 0 && ((P = {}), (l[G] = P));
      let W = P[q];
      W === void 0 &&
        ((W = D.clone()), (P[q] = W), p.addEventListener("dispose", C)),
        (D = W);
    }
    if (
      ((D.visible = p.visible),
      (D.wireframe = p.wireframe),
      O === 3
        ? (D.side = p.shadowSide !== null ? p.shadowSide : p.side)
        : (D.side = p.shadowSide !== null ? p.shadowSide : _[p.side]),
      (D.alphaMap = p.alphaMap),
      (D.alphaTest = p.alphaToCoverage === !0 ? 0.5 : p.alphaTest),
      (D.map = p.map),
      (D.clipShadows = p.clipShadows),
      (D.clippingPlanes = p.clippingPlanes),
      (D.clipIntersection = p.clipIntersection),
      (D.displacementMap = p.displacementMap),
      (D.displacementScale = p.displacementScale),
      (D.displacementBias = p.displacementBias),
      (D.wireframeLinewidth = p.wireframeLinewidth),
      (D.linewidth = p.linewidth),
      M.isPointLight === !0 && D.isMeshDistanceMaterial === !0)
    ) {
      const G = i.properties.get(D);
      G.light = M;
    }
    return D;
  }
  function A(y, p, M, O, D, N) {
    if (y.visible === !1) return;
    if (
      y.layers.test(D) &&
      (y.isMesh || y.isLine || y.isPoints) &&
      (y.castShadow || (y.receiveShadow && N === 3)) &&
      (!y.frustumCulled || y.intersectsFrustum(n))
    ) {
      y.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse, y.matrixWorld);
      const P = e.update(y),
        W = y.material;
      if (Array.isArray(W)) {
        const $ = P.groups;
        for (let H = 0, te = $.length; H < te; H++) {
          const k = $[H],
            Q = W[k.materialIndex];
          if (Q && Q.visible) {
            const j = b(y, Q, O, N);
            y.onBeforeShadow(i, y, p, M, P, j, k),
              i.renderBufferDirect(M, null, P, j, y, k),
              y.onAfterShadow(i, y, p, M, P, j, k);
          }
        }
      } else if (W.visible) {
        const $ = b(y, W, O, N);
        y.onBeforeShadow(i, y, p, M, P, $, null),
          i.renderBufferDirect(M, null, P, $, y, null),
          y.onAfterShadow(i, y, p, M, P, $, null);
      }
    }
    const q = y.children;
    for (let P = 0, W = q.length; P < W; P++) A(q[P], p, M, O, D, N);
  }
  function C(y) {
    y.target.removeEventListener("dispose", C);
    for (const M in l) {
      const O = l[M],
        D = y.target.uuid;
      D in O && (O[D].dispose(), delete O[D]);
    }
  }
}
function Cd(i, e) {
  function t() {
    let R = !1;
    const Z = new it();
    let V = null;
    const oe = new it(0, 0, 0, 0);
    return {
      setMask: function (ie) {
        V !== ie && !R && (i.colorMask(ie, ie, ie, ie), (V = ie));
      },
      setLocked: function (ie) {
        R = ie;
      },
      setClear: function (ie, ae, Te, Fe, ne) {
        ne === !0 && ((ie *= Fe), (ae *= Fe), (Te *= Fe)),
          Z.set(ie, ae, Te, Fe),
          oe.equals(Z) === !1 && (i.clearColor(ie, ae, Te, Fe), oe.copy(Z));
      },
      reset: function () {
        (R = !1), (V = null), oe.set(-1, 0, 0, 0);
      },
    };
  }
  function n() {
    let R = !1,
      Z = !1,
      V = null,
      oe = null,
      ie = null;
    return {
      setReversed: function (ae) {
        if (Z !== ae) {
          const Te = e.get("EXT_clip_control");
          ae
            ? Te.clipControlEXT(Te.LOWER_LEFT_EXT, Te.ZERO_TO_ONE_EXT)
            : Te.clipControlEXT(Te.LOWER_LEFT_EXT, Te.NEGATIVE_ONE_TO_ONE_EXT),
            (Z = ae);
          const Fe = ie;
          (ie = null), this.setClear(Fe);
        }
      },
      getReversed: function () {
        return Z;
      },
      setTest: function (ae) {
        ae ? me(i.DEPTH_TEST) : Ne(i.DEPTH_TEST);
      },
      setMask: function (ae) {
        V !== ae && !R && (i.depthMask(ae), (V = ae));
      },
      setFunc: function (ae) {
        if ((Z && (ae = Ja[ae]), oe !== ae)) {
          switch (ae) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          oe = ae;
        }
      },
      setLocked: function (ae) {
        R = ae;
      },
      setClear: function (ae) {
        ie !== ae && ((ie = ae), Z && (ae = 1 - ae), i.clearDepth(ae));
      },
      reset: function () {
        (R = !1), (V = null), (oe = null), (ie = null), (Z = !1);
      },
    };
  }
  function r() {
    let R = !1,
      Z = null,
      V = null,
      oe = null,
      ie = null,
      ae = null,
      Te = null,
      Fe = null,
      ne = null;
    return {
      setTest: function (Ae) {
        R || (Ae ? me(i.STENCIL_TEST) : Ne(i.STENCIL_TEST));
      },
      setMask: function (Ae) {
        Z !== Ae && !R && (i.stencilMask(Ae), (Z = Ae));
      },
      setFunc: function (Ae, Ie, fe) {
        (V !== Ae || oe !== Ie || ie !== fe) &&
          (i.stencilFunc(Ae, Ie, fe), (V = Ae), (oe = Ie), (ie = fe));
      },
      setOp: function (Ae, Ie, fe) {
        (ae !== Ae || Te !== Ie || Fe !== fe) &&
          (i.stencilOp(Ae, Ie, fe), (ae = Ae), (Te = Ie), (Fe = fe));
      },
      setLocked: function (Ae) {
        R = Ae;
      },
      setClear: function (Ae) {
        ne !== Ae && (i.clearStencil(Ae), (ne = Ae));
      },
      reset: function () {
        (R = !1),
          (Z = null),
          (V = null),
          (oe = null),
          (ie = null),
          (ae = null),
          (Te = null),
          (Fe = null),
          (ne = null);
      },
    };
  }
  const a = new t(),
    s = new n(),
    o = new r();
  let c = {};
  const l = new WeakMap();
  let f = {},
    _ = {},
    u = {},
    m = new WeakMap(),
    v = [],
    T = null,
    h = !1,
    d = null,
    E = null,
    b = null,
    A = null,
    C = null,
    y = null,
    p = null,
    M = new qe(0, 0, 0),
    O = 0,
    D = !1,
    N = null,
    G = null,
    q = null,
    P = null,
    W = null;
  const $ = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let H = !1,
    te = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1
    ? ((te = parseFloat(/^WebGL (\d)/.exec(k)[1])), (H = te >= 1))
    : k.indexOf("OpenGL ES") !== -1 &&
      ((te = parseFloat(/^OpenGL ES (\d)/.exec(k)[1])), (H = te >= 2));
  let Q = null,
    j = {};
  const Me = i.getParameter(i.SCISSOR_BOX),
    De = i.getParameter(i.VIEWPORT),
    K = new it().fromArray(Me),
    pe = new it().fromArray(De);
  function xe(R, Z, V, oe) {
    const ie = new Uint8Array(4),
      ae = i.createTexture();
    i.bindTexture(R, ae),
      i.texParameteri(R, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(R, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Te = 0; Te < V; Te++)
      R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(Z, 0, i.RGBA, 1, 1, oe, 0, i.RGBA, i.UNSIGNED_BYTE, ie)
        : i.texImage2D(Z + Te, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ie);
    return ae;
  }
  const ye = {};
  (ye[i.TEXTURE_2D] = xe(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (ye[i.TEXTURE_CUBE_MAP] = xe(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (ye[i.TEXTURE_2D_ARRAY] = xe(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (ye[i.TEXTURE_3D] = xe(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    a.setClear(0, 0, 0, 1),
    s.setClear(1),
    o.setClear(0),
    me(i.DEPTH_TEST),
    s.setFunc(3),
    yt(!1),
    tt(1),
    me(i.CULL_FACE),
    _t(0);
  function me(R) {
    f[R] !== !0 && (i.enable(R), (f[R] = !0));
  }
  function Ne(R) {
    f[R] !== !1 && (i.disable(R), (f[R] = !1));
  }
  function at(R, Z) {
    return u[R] !== Z
      ? (i.bindFramebuffer(R, Z),
        (u[R] = Z),
        R === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = Z),
        R === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = Z),
        !0)
      : !1;
  }
  function be(R, Z) {
    let V = v,
      oe = !1;
    if (R) {
      (V = m.get(Z)), V === void 0 && ((V = []), m.set(Z, V));
      const ie = R.textures;
      if (V.length !== ie.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let ae = 0, Te = ie.length; ae < Te; ae++)
          V[ae] = i.COLOR_ATTACHMENT0 + ae;
        (V.length = ie.length), (oe = !0);
      }
    } else V[0] !== i.BACK && ((V[0] = i.BACK), (oe = !0));
    oe && i.drawBuffers(V);
  }
  function Ye(R) {
    return T !== R ? (i.useProgram(R), (T = R), !0) : !1;
  }
  const $e = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT,
  };
  ($e[103] = i.MIN), ($e[104] = i.MAX);
  const Oe = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function _t(R, Z, V, oe, ie, ae, Te, Fe, ne, Ae) {
    if (R === 0) {
      h === !0 && (Ne(i.BLEND), (h = !1));
      return;
    }
    if ((h === !1 && (me(i.BLEND), (h = !0)), R !== 5)) {
      if (R !== d || Ae !== D) {
        if (
          ((E !== 100 || C !== 100) &&
            (i.blendEquation(i.FUNC_ADD), (E = 100), (C = 100)),
          Ae)
        )
          switch (R) {
            case 1:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(
                i.DST_COLOR,
                i.ONE_MINUS_SRC_ALPHA,
                i.ZERO,
                i.ONE
              );
              break;
            default:
              We("WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case 1:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              We(
                "WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true"
              );
              break;
            case 4:
              We(
                "WebGLState: MultiplyBlending requires material.premultipliedAlpha = true"
              );
              break;
            default:
              We("WebGLState: Invalid blending: ", R);
              break;
          }
        (b = null),
          (A = null),
          (y = null),
          (p = null),
          M.set(0, 0, 0),
          (O = 0),
          (d = R),
          (D = Ae);
      }
      return;
    }
    (ie = ie || Z),
      (ae = ae || V),
      (Te = Te || oe),
      (Z !== E || ie !== C) &&
        (i.blendEquationSeparate($e[Z], $e[ie]), (E = Z), (C = ie)),
      (V !== b || oe !== A || ae !== y || Te !== p) &&
        (i.blendFuncSeparate(Oe[V], Oe[oe], Oe[ae], Oe[Te]),
        (b = V),
        (A = oe),
        (y = ae),
        (p = Te)),
      (Fe.equals(M) === !1 || ne !== O) &&
        (i.blendColor(Fe.r, Fe.g, Fe.b, ne), M.copy(Fe), (O = ne)),
      (d = R),
      (D = !1);
  }
  function lt(R, Z) {
    R.side === 2 ? Ne(i.CULL_FACE) : me(i.CULL_FACE);
    let V = R.side === 1;
    Z && (V = !V),
      yt(V),
      R.blending === 1 && R.transparent === !1
        ? _t(0)
        : _t(
            R.blending,
            R.blendEquation,
            R.blendSrc,
            R.blendDst,
            R.blendEquationAlpha,
            R.blendSrcAlpha,
            R.blendDstAlpha,
            R.blendColor,
            R.blendAlpha,
            R.premultipliedAlpha
          ),
      s.setFunc(R.depthFunc),
      s.setTest(R.depthTest),
      s.setMask(R.depthWrite),
      a.setMask(R.colorWrite);
    const oe = R.stencilWrite;
    o.setTest(oe),
      oe &&
        (o.setMask(R.stencilWriteMask),
        o.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask),
        o.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)),
      ft(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits),
      R.alphaToCoverage === !0
        ? me(i.SAMPLE_ALPHA_TO_COVERAGE)
        : Ne(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function yt(R) {
    N !== R && (R ? i.frontFace(i.CW) : i.frontFace(i.CCW), (N = R));
  }
  function tt(R) {
    R !== 0
      ? (me(i.CULL_FACE),
        R !== G &&
          (R === 1
            ? i.cullFace(i.BACK)
            : R === 2
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : Ne(i.CULL_FACE),
      (G = R);
  }
  function zt(R) {
    R !== q && (H && i.lineWidth(R), (q = R));
  }
  function ft(R, Z, V) {
    R
      ? (me(i.POLYGON_OFFSET_FILL),
        (P !== Z || W !== V) &&
          ((P = Z),
          (W = V),
          s.getReversed() && ((Z = -Z), (V = -V)),
          i.polygonOffset(Z, V)))
      : Ne(i.POLYGON_OFFSET_FILL);
  }
  function wt(R) {
    R ? me(i.SCISSOR_TEST) : Ne(i.SCISSOR_TEST);
  }
  function Pt(R) {
    R === void 0 && (R = i.TEXTURE0 + $ - 1),
      Q !== R && (i.activeTexture(R), (Q = R));
  }
  function Dt(R, Z, V) {
    V === void 0 && (Q === null ? (V = i.TEXTURE0 + $ - 1) : (V = Q));
    let oe = j[V];
    oe === void 0 && ((oe = { type: void 0, texture: void 0 }), (j[V] = oe)),
      (oe.type !== R || oe.texture !== Z) &&
        (Q !== V && (i.activeTexture(V), (Q = V)),
        i.bindTexture(R, Z || ye[R]),
        (oe.type = R),
        (oe.texture = Z));
  }
  function L() {
    const R = j[Q];
    R !== void 0 &&
      R.type !== void 0 &&
      (i.bindTexture(R.type, null), (R.type = void 0), (R.texture = void 0));
  }
  function Lt() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function je() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function et() {
    try {
      i.texSubImage2D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function de() {
    try {
      i.texSubImage3D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function ct() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function Re() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function we() {
    try {
      i.texStorage2D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function S() {
    try {
      i.texStorage3D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function g() {
    try {
      i.texImage2D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function F() {
    try {
      i.texImage3D(...arguments);
    } catch (R) {
      We("WebGLState:", R);
    }
  }
  function ee(R) {
    return _[R] !== void 0 ? _[R] : i.getParameter(R);
  }
  function J(R, Z) {
    _[R] !== Z && (i.pixelStorei(R, Z), (_[R] = Z));
  }
  function re(R) {
    K.equals(R) === !1 && (i.scissor(R.x, R.y, R.z, R.w), K.copy(R));
  }
  function ce(R) {
    pe.equals(R) === !1 && (i.viewport(R.x, R.y, R.z, R.w), pe.copy(R));
  }
  function X(R, Z) {
    let V = l.get(Z);
    V === void 0 && ((V = new WeakMap()), l.set(Z, V));
    let oe = V.get(R);
    oe === void 0 &&
      ((oe = i.getUniformBlockIndex(Z, R.name)),
      i.uniformBlockBinding(Z, oe, oe),
      V.set(R, oe));
  }
  function Y(R, Z, V) {
    const ie = l.get(Z).get(R);
    c[ie] !== V && (i.bindBufferBase(i.UNIFORM_BUFFER, ie, V), (c[ie] = V));
  }
  function se() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      s.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      i.pixelStorei(i.PACK_ALIGNMENT, 4),
      i.pixelStorei(i.UNPACK_ALIGNMENT, 4),
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1),
      i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
      i.pixelStorei(
        i.UNPACK_COLORSPACE_CONVERSION_WEBGL,
        i.BROWSER_DEFAULT_WEBGL
      ),
      i.pixelStorei(i.PACK_ROW_LENGTH, 0),
      i.pixelStorei(i.PACK_SKIP_PIXELS, 0),
      i.pixelStorei(i.PACK_SKIP_ROWS, 0),
      i.pixelStorei(i.UNPACK_ROW_LENGTH, 0),
      i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0),
      i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0),
      i.pixelStorei(i.UNPACK_SKIP_ROWS, 0),
      i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0),
      (f = {}),
      (_ = {}),
      (Q = null),
      (j = {}),
      (u = {}),
      (c = {}),
      (m = new WeakMap()),
      (v = []),
      (T = null),
      (h = !1),
      (d = null),
      (E = null),
      (b = null),
      (A = null),
      (C = null),
      (y = null),
      (p = null),
      (M = new qe(0, 0, 0)),
      (O = 0),
      (D = !1),
      (N = null),
      (G = null),
      (q = null),
      (P = null),
      (W = null),
      K.set(0, 0, i.canvas.width, i.canvas.height),
      pe.set(0, 0, i.canvas.width, i.canvas.height),
      a.reset(),
      s.reset(),
      o.reset();
  }
  return {
    buffers: { color: a, depth: s, stencil: o },
    enable: me,
    disable: Ne,
    bindFramebuffer: at,
    drawBuffers: be,
    useProgram: Ye,
    setBlending: _t,
    setMaterial: lt,
    setFlipSided: yt,
    setCullFace: tt,
    setLineWidth: zt,
    setPolygonOffset: ft,
    setScissorTest: wt,
    activeTexture: Pt,
    bindTexture: Dt,
    unbindTexture: L,
    compressedTexImage2D: Lt,
    compressedTexImage3D: je,
    texImage2D: g,
    texImage3D: F,
    pixelStorei: J,
    getParameter: ee,
    updateUBOMapping: X,
    uniformBlockBinding: Y,
    texStorage2D: we,
    texStorage3D: S,
    texSubImage2D: et,
    texSubImage3D: de,
    compressedTexSubImage2D: ct,
    compressedTexSubImage3D: Re,
    scissor: re,
    viewport: ce,
    reset: se,
  };
}
function wd(i, e, t, n, r, a, s) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new Xe(),
    f = new WeakMap(),
    _ = new Set();
  let u;
  const m = new WeakMap(),
    v = new Set(),
    T = new FinalizationRegistry((S) => v.delete(S));
  let h = !1;
  try {
    h =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function d(S, g) {
    return h ? new OffscreenCanvas(S, g) : bi("canvas");
  }
  function E(S, g, F) {
    let ee = 1;
    const J = we(S);
    if (
      ((J.width > F || J.height > F) && (ee = F / Math.max(J.width, J.height)),
      ee < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && S instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && S instanceof VideoFrame)
      ) {
        const re = Math.floor(ee * J.width),
          ce = Math.floor(ee * J.height);
        u === void 0 && (u = d(re, ce));
        const X = g ? d(re, ce) : u;
        return (
          (X.width = re),
          (X.height = ce),
          X.getContext("2d").drawImage(S, 0, 0, re, ce),
          Ce(
            "WebGLRenderer: Texture has been resized from (" +
              J.width +
              "x" +
              J.height +
              ") to (" +
              re +
              "x" +
              ce +
              ")."
          ),
          X
        );
      } else
        return (
          "data" in S &&
            Ce(
              "WebGLRenderer: Image in DataTexture is too big (" +
                J.width +
                "x" +
                J.height +
                ")."
            ),
          S
        );
    return S;
  }
  function b(S) {
    return S.generateMipmaps;
  }
  function A(S) {
    i.generateMipmap(S);
  }
  function C(S) {
    return S.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : S.isWebGL3DRenderTarget
      ? i.TEXTURE_3D
      : S.isWebGLArrayRenderTarget || S.isCompressedArrayTexture
      ? i.TEXTURE_2D_ARRAY
      : i.TEXTURE_2D;
  }
  function y(S, g, F, ee, J, re = !1) {
    if (S !== null) {
      if (i[S] !== void 0) return i[S];
      Ce(
        "WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          S +
          "'"
      );
    }
    let ce;
    ee &&
      ((ce = e.get("EXT_texture_norm16")),
      ce ||
        Ce(
          "WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"
        ));
    let X = g;
    if (
      (g === i.RED &&
        (F === i.FLOAT && (X = i.R32F),
        F === i.HALF_FLOAT && (X = i.R16F),
        F === i.UNSIGNED_BYTE && (X = i.R8),
        F === i.UNSIGNED_SHORT && ce && (X = ce.R16_EXT),
        F === i.SHORT && ce && (X = ce.R16_SNORM_EXT)),
      g === i.RED_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.R8UI),
        F === i.UNSIGNED_SHORT && (X = i.R16UI),
        F === i.UNSIGNED_INT && (X = i.R32UI),
        F === i.BYTE && (X = i.R8I),
        F === i.SHORT && (X = i.R16I),
        F === i.INT && (X = i.R32I)),
      g === i.RG &&
        (F === i.FLOAT && (X = i.RG32F),
        F === i.HALF_FLOAT && (X = i.RG16F),
        F === i.UNSIGNED_BYTE && (X = i.RG8),
        F === i.UNSIGNED_SHORT && ce && (X = ce.RG16_EXT),
        F === i.SHORT && ce && (X = ce.RG16_SNORM_EXT)),
      g === i.RG_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.RG8UI),
        F === i.UNSIGNED_SHORT && (X = i.RG16UI),
        F === i.UNSIGNED_INT && (X = i.RG32UI),
        F === i.BYTE && (X = i.RG8I),
        F === i.SHORT && (X = i.RG16I),
        F === i.INT && (X = i.RG32I)),
      g === i.RGB_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.RGB8UI),
        F === i.UNSIGNED_SHORT && (X = i.RGB16UI),
        F === i.UNSIGNED_INT && (X = i.RGB32UI),
        F === i.BYTE && (X = i.RGB8I),
        F === i.SHORT && (X = i.RGB16I),
        F === i.INT && (X = i.RGB32I)),
      g === i.RGBA_INTEGER &&
        (F === i.UNSIGNED_BYTE && (X = i.RGBA8UI),
        F === i.UNSIGNED_SHORT && (X = i.RGBA16UI),
        F === i.UNSIGNED_INT && (X = i.RGBA32UI),
        F === i.BYTE && (X = i.RGBA8I),
        F === i.SHORT && (X = i.RGBA16I),
        F === i.INT && (X = i.RGBA32I)),
      g === i.RGB &&
        (F === i.UNSIGNED_SHORT && ce && (X = ce.RGB16_EXT),
        F === i.SHORT && ce && (X = ce.RGB16_SNORM_EXT),
        F === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5),
        F === i.UNSIGNED_INT_10F_11F_11F_REV && (X = i.R11F_G11F_B10F)),
      g === i.RGBA)
    ) {
      const Y = re ? Ri : He.getTransfer(J);
      F === i.FLOAT && (X = i.RGBA32F),
        F === i.HALF_FLOAT && (X = i.RGBA16F),
        F === i.UNSIGNED_BYTE && (X = Y === Ze ? i.SRGB8_ALPHA8 : i.RGBA8),
        F === i.UNSIGNED_SHORT && ce && (X = ce.RGBA16_EXT),
        F === i.SHORT && ce && (X = ce.RGBA16_SNORM_EXT),
        F === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4),
        F === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1);
    }
    return (
      (X === i.R16F ||
        X === i.R32F ||
        X === i.RG16F ||
        X === i.RG32F ||
        X === i.RGBA16F ||
        X === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      X
    );
  }
  function p(S, g) {
    let F;
    return (
      S
        ? g === null || g === 1014 || g === 1020
          ? (F = i.DEPTH24_STENCIL8)
          : g === 1015
          ? (F = i.DEPTH32F_STENCIL8)
          : g === 1012 &&
            ((F = i.DEPTH24_STENCIL8),
            Ce(
              "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment."
            ))
        : g === null || g === 1014 || g === 1020
        ? (F = i.DEPTH_COMPONENT24)
        : g === 1015
        ? (F = i.DEPTH_COMPONENT32F)
        : g === 1012 && (F = i.DEPTH_COMPONENT16),
      F
    );
  }
  function M(S, g) {
    return b(S) === !0 ||
      (S.isFramebufferTexture && S.minFilter !== 1003 && S.minFilter !== 1006)
      ? Math.log2(Math.max(g.width, g.height)) + 1
      : S.mipmaps.length > 0
      ? S.mipmaps.length
      : S.isCompressedTexture && Array.isArray(S.image)
      ? g.mipmaps.length
      : 1;
  }
  function O(S) {
    const g = new WeakRef(S);
    (n.get(S).__ref = g), v.add(g), T.register(S, g, g);
  }
  function D(S) {
    const g = n.get(S).__ref;
    g !== void 0 && (v.delete(g), T.unregister(g));
  }
  function N(S) {
    q(S.target);
  }
  function G(S) {
    P(S.target);
  }
  function q(S) {
    S.removeEventListener("dispose", N),
      D(S),
      $(S),
      S.isVideoTexture && f.delete(S),
      S.isHTMLTexture && _.delete(S);
  }
  function P(S) {
    S.removeEventListener("dispose", G), D(S), te(S);
  }
  function W() {
    for (const S of v) {
      const g = S.deref();
      g !== void 0 && (g.isRenderTarget === !0 ? P(g) : q(g));
    }
    v.clear(), _.clear();
  }
  function $(S) {
    const g = n.get(S);
    if (g.__webglInit === void 0) return;
    const F = S.source,
      ee = m.get(F);
    if (ee) {
      const J = ee[g.__cacheKey];
      J.usedTimes--,
        J.usedTimes === 0 && H(S),
        Object.keys(ee).length === 0 && m.delete(F);
    }
    n.remove(S);
  }
  function H(S) {
    const g = n.get(S);
    i.deleteTexture(g.__webglTexture);
    const F = S.source,
      ee = m.get(F);
    delete ee[g.__cacheKey], s.memory.textures--;
  }
  function te(S) {
    const g = n.get(S);
    g.__depthDisposeCallback && g.__depthDisposeCallback();
    const F = S.depthTexture;
    if ((F && F.renderTarget === S && q(F), S.isWebGLCubeRenderTarget))
      for (let J = 0; J < 6; J++) {
        if (Array.isArray(g.__webglFramebuffer[J]))
          for (let re = 0; re < g.__webglFramebuffer[J].length; re++)
            i.deleteFramebuffer(g.__webglFramebuffer[J][re]);
        else i.deleteFramebuffer(g.__webglFramebuffer[J]);
        g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer[J]);
      }
    else {
      if (Array.isArray(g.__webglFramebuffer))
        for (let J = 0; J < g.__webglFramebuffer.length; J++)
          i.deleteFramebuffer(g.__webglFramebuffer[J]);
      else i.deleteFramebuffer(g.__webglFramebuffer);
      if (
        (g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer),
        g.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(g.__webglMultisampledFramebuffer),
        g.__webglColorRenderbuffer)
      )
        for (let J = 0; J < g.__webglColorRenderbuffer.length; J++)
          g.__webglColorRenderbuffer[J] &&
            i.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);
      g.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const ee = S.textures;
    for (let J = 0, re = ee.length; J < re; J++) {
      const ce = n.get(ee[J]);
      ce.__webglTexture &&
        (i.deleteTexture(ce.__webglTexture), s.memory.textures--),
        n.remove(ee[J]);
    }
    n.remove(S);
  }
  let k = 0;
  function Q() {
    k = 0;
  }
  function j() {
    return k;
  }
  function Me(S) {
    k = S;
  }
  function De() {
    const S = k;
    return (
      S >= r.maxTextures &&
        Ce(
          "WebGLTextures: Trying to use " +
            (S + 1) +
            " texture units while this GPU supports only " +
            r.maxTextures
        ),
      (k += 1),
      S
    );
  }
  function K(S) {
    const g = [];
    return (
      g.push(S.wrapS),
      g.push(S.wrapT),
      g.push(S.wrapR || 0),
      g.push(S.magFilter),
      g.push(S.minFilter),
      g.push(S.anisotropy),
      g.push(S.internalFormat),
      g.push(S.format),
      g.push(S.type),
      g.push(S.generateMipmaps),
      g.push(S.mipmapsAutoUpdate),
      g.push(S.premultiplyAlpha),
      g.push(S.flipY),
      g.push(S.unpackAlignment),
      g.push(S.colorSpace),
      g.join()
    );
  }
  function pe(S, g) {
    const F = n.get(S);
    if (
      (S.isVideoTexture && ct(S),
      S.isRenderTargetTexture === !1 &&
        S.isExternalTexture !== !0 &&
        S.version > 0 &&
        F.__version !== S.version)
    ) {
      const ee = S.image;
      if (ee === null)
        Ce("WebGLRenderer: Texture marked for update but no image data found.");
      else if (ee.complete === !1)
        Ce("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        lt(F, S, g);
        return;
      }
    } else
      S.isExternalTexture &&
        (F.__webglTexture = S.sourceTexture ? S.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + g);
  }
  function xe(S, g) {
    const F = n.get(S);
    if (
      S.isRenderTargetTexture === !1 &&
      S.version > 0 &&
      F.__version !== S.version
    ) {
      lt(F, S, g);
      return;
    } else
      S.isExternalTexture &&
        (F.__webglTexture = S.sourceTexture ? S.sourceTexture : null);
    t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + g);
  }
  function ye(S, g) {
    const F = n.get(S);
    if (
      S.isRenderTargetTexture === !1 &&
      S.version > 0 &&
      F.__version !== S.version
    ) {
      lt(F, S, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + g);
  }
  function me(S, g) {
    const F = n.get(S);
    if (S.version > 0 && F.__version !== S.version) {
      yt(F, S, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + g);
  }
  const Ne = { 1e3: i.REPEAT, 1001: i.CLAMP_TO_EDGE, 1002: i.MIRRORED_REPEAT },
    at = {
      1003: i.NEAREST,
      1004: i.NEAREST_MIPMAP_NEAREST,
      1005: i.NEAREST_MIPMAP_LINEAR,
      1006: i.LINEAR,
      1007: i.LINEAR_MIPMAP_NEAREST,
      1008: i.LINEAR_MIPMAP_LINEAR,
    },
    be = {
      512: i.NEVER,
      519: i.ALWAYS,
      513: i.LESS,
      515: i.LEQUAL,
      514: i.EQUAL,
      518: i.GEQUAL,
      516: i.GREATER,
      517: i.NOTEQUAL,
    };
  function Ye(S, g) {
    if (
      (g.type === 1015 &&
        e.has("OES_texture_float_linear") === !1 &&
        (g.magFilter === 1006 ||
          g.magFilter === 1007 ||
          g.magFilter === 1005 ||
          g.magFilter === 1008 ||
          g.minFilter === 1006 ||
          g.minFilter === 1007 ||
          g.minFilter === 1005 ||
          g.minFilter === 1008) &&
        Ce(
          "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      i.texParameteri(S, i.TEXTURE_WRAP_S, Ne[g.wrapS]),
      i.texParameteri(S, i.TEXTURE_WRAP_T, Ne[g.wrapT]),
      (S === i.TEXTURE_3D || S === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(S, i.TEXTURE_WRAP_R, Ne[g.wrapR]),
      i.texParameteri(S, i.TEXTURE_MAG_FILTER, at[g.magFilter]),
      i.texParameteri(S, i.TEXTURE_MIN_FILTER, at[g.minFilter]),
      g.compareFunction &&
        (i.texParameteri(S, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(S, i.TEXTURE_COMPARE_FUNC, be[g.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        g.magFilter === 1003 ||
        (g.minFilter !== 1005 && g.minFilter !== 1008) ||
        (g.type === 1015 && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (g.anisotropy > 1 || n.get(g).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(
          S,
          F.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(g.anisotropy, r.getMaxAnisotropy())
        ),
          (n.get(g).__currentAnisotropy = g.anisotropy);
      }
    }
  }
  function $e(S, g) {
    let F = !1;
    S.__webglInit === void 0 &&
      ((S.__webglInit = !0), g.addEventListener("dispose", N), O(g));
    const ee = g.source;
    let J = m.get(ee);
    J === void 0 && ((J = {}), m.set(ee, J));
    const re = K(g);
    if (re !== S.__cacheKey) {
      J[re] === void 0 &&
        ((J[re] = { texture: i.createTexture(), usedTimes: 0 }),
        s.memory.textures++,
        (F = !0)),
        J[re].usedTimes++;
      const ce = J[S.__cacheKey];
      ce !== void 0 &&
        (J[S.__cacheKey].usedTimes--, ce.usedTimes === 0 && H(g)),
        (S.__cacheKey = re),
        (S.__webglTexture = J[re].texture);
    }
    return F;
  }
  function Oe(S, g, F) {
    return Math.floor(Math.floor(S / F) / g);
  }
  function _t(S, g, F, ee) {
    const re = S.updateRanges;
    if (re.length === 0)
      t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, g.width, g.height, F, ee, g.data);
    else {
      re.sort((R, Z) => R.start - Z.start);
      let ce = 0;
      for (let R = 1; R < re.length; R++) {
        const Z = re[ce],
          V = re[R],
          oe = Z.start + Z.count,
          ie = Oe(V.start, g.width, 4),
          ae = Oe(Z.start, g.width, 4);
        V.start <= oe + 1 &&
        ie === ae &&
        Oe(V.start + V.count - 1, g.width, 4) === ie
          ? (Z.count = Math.max(Z.count, V.start + V.count - Z.start))
          : (++ce, (re[ce] = V));
      }
      re.length = ce + 1;
      const X = t.getParameter(i.UNPACK_ROW_LENGTH),
        Y = t.getParameter(i.UNPACK_SKIP_PIXELS),
        se = t.getParameter(i.UNPACK_SKIP_ROWS);
      t.pixelStorei(i.UNPACK_ROW_LENGTH, g.width);
      for (let R = 0, Z = re.length; R < Z; R++) {
        const V = re[R],
          oe = Math.floor(V.start / 4),
          ie = Math.ceil(V.count / 4),
          ae = oe % g.width,
          Te = Math.floor(oe / g.width),
          Fe = ie,
          ne = 1;
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, ae),
          t.pixelStorei(i.UNPACK_SKIP_ROWS, Te),
          t.texSubImage2D(i.TEXTURE_2D, 0, ae, Te, Fe, ne, F, ee, g.data);
      }
      S.clearUpdateRanges(),
        t.pixelStorei(i.UNPACK_ROW_LENGTH, X),
        t.pixelStorei(i.UNPACK_SKIP_PIXELS, Y),
        t.pixelStorei(i.UNPACK_SKIP_ROWS, se);
    }
  }
  function lt(S, g, F) {
    let ee = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) &&
      (ee = i.TEXTURE_2D_ARRAY),
      g.isData3DTexture && (ee = i.TEXTURE_3D);
    const J = $e(S, g),
      re = g.source;
    t.bindTexture(ee, S.__webglTexture, i.TEXTURE0 + F);
    const ce = n.get(re);
    if (re.version !== ce.__version || J === !0) {
      if (
        (t.activeTexture(i.TEXTURE0 + F),
        (typeof ImageBitmap < "u" && g.image instanceof ImageBitmap) === !1)
      ) {
        const ne = He.getPrimaries(He.workingColorSpace),
          Ae = g.colorSpace === "" ? null : He.getPrimaries(g.colorSpace),
          Ie =
            g.colorSpace === "" || ne === Ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
          t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
          t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ie);
      }
      t.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment);
      let Y = E(g.image, !1, r.maxTextureSize);
      Y = Re(g, Y);
      const se = a.convert(g.format, g.colorSpace),
        R = a.convert(g.type);
      let Z = y(
        g.internalFormat,
        se,
        R,
        g.normalized,
        g.colorSpace,
        g.isVideoTexture
      );
      Ye(ee, g);
      let V;
      const oe = g.mipmaps,
        ie = g.isVideoTexture !== !0,
        ae = ce.__version === void 0 || J === !0,
        Te = re.dataReady,
        Fe = M(g, Y);
      if (g.isDepthTexture)
        (Z = p(g.format === 1027, g.type)),
          ae &&
            (ie
              ? t.texStorage2D(i.TEXTURE_2D, 1, Z, Y.width, Y.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  Z,
                  Y.width,
                  Y.height,
                  0,
                  se,
                  R,
                  null
                ));
      else if (g.isDataTexture)
        if (oe.length > 0) {
          ie &&
            ae &&
            t.texStorage2D(i.TEXTURE_2D, Fe, Z, oe[0].width, oe[0].height);
          for (let ne = 0, Ae = oe.length; ne < Ae; ne++)
            (V = oe[ne]),
              ie
                ? Te &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    ne,
                    0,
                    0,
                    V.width,
                    V.height,
                    se,
                    R,
                    V.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    ne,
                    Z,
                    V.width,
                    V.height,
                    0,
                    se,
                    R,
                    V.data
                  );
          g.generateMipmaps = !1;
        } else
          ie
            ? (ae && t.texStorage2D(i.TEXTURE_2D, Fe, Z, Y.width, Y.height),
              Te && _t(g, Y, se, R))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                Z,
                Y.width,
                Y.height,
                0,
                se,
                R,
                Y.data
              );
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) {
          ie &&
            ae &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              Fe,
              Z,
              oe[0].width,
              oe[0].height,
              Y.depth
            );
          for (let ne = 0, Ae = oe.length; ne < Ae; ne++)
            if (((V = oe[ne]), g.format !== 1023))
              if (se !== null)
                if (ie) {
                  if (Te)
                    if (g.layerUpdates.size > 0) {
                      const Ie = $r(V.width, V.height, g.format, g.type);
                      for (const fe of g.layerUpdates) {
                        const Ke = V.data.subarray(
                          (fe * Ie) / V.data.BYTES_PER_ELEMENT,
                          ((fe + 1) * Ie) / V.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          ne,
                          0,
                          0,
                          fe,
                          V.width,
                          V.height,
                          1,
                          se,
                          Ke
                        );
                      }
                    } else
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        ne,
                        0,
                        0,
                        0,
                        V.width,
                        V.height,
                        Y.depth,
                        se,
                        V.data
                      );
                } else
                  t.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    ne,
                    Z,
                    V.width,
                    V.height,
                    Y.depth,
                    0,
                    V.data,
                    0,
                    0
                  );
              else
                Ce(
                  "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                );
            else
              ie
                ? Te &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    ne,
                    0,
                    0,
                    0,
                    V.width,
                    V.height,
                    Y.depth,
                    se,
                    R,
                    V.data
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    ne,
                    Z,
                    V.width,
                    V.height,
                    Y.depth,
                    0,
                    se,
                    R,
                    V.data
                  );
          g.layerUpdates.size > 0 && g.clearLayerUpdates();
        } else {
          ie &&
            ae &&
            t.texStorage2D(i.TEXTURE_2D, Fe, Z, oe[0].width, oe[0].height);
          for (let ne = 0, Ae = oe.length; ne < Ae; ne++)
            (V = oe[ne]),
              g.format !== 1023
                ? se !== null
                  ? ie
                    ? Te &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        ne,
                        0,
                        0,
                        V.width,
                        V.height,
                        se,
                        V.data
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        ne,
                        Z,
                        V.width,
                        V.height,
                        0,
                        V.data
                      )
                  : Ce(
                      "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : ie
                ? Te &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    ne,
                    0,
                    0,
                    V.width,
                    V.height,
                    se,
                    R,
                    V.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    ne,
                    Z,
                    V.width,
                    V.height,
                    0,
                    se,
                    R,
                    V.data
                  );
        }
      else if (g.isDataArrayTexture)
        if (ie) {
          if (
            (ae &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                Fe,
                Z,
                Y.width,
                Y.height,
                Y.depth
              ),
            Te)
          )
            if (g.layerUpdates.size > 0) {
              const ne = $r(Y.width, Y.height, g.format, g.type);
              for (const Ae of g.layerUpdates) {
                const Ie = Y.data.subarray(
                  (Ae * ne) / Y.data.BYTES_PER_ELEMENT,
                  ((Ae + 1) * ne) / Y.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  Ae,
                  Y.width,
                  Y.height,
                  1,
                  se,
                  R,
                  Ie
                );
              }
              g.clearLayerUpdates();
            } else
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Y.width,
                Y.height,
                Y.depth,
                se,
                R,
                Y.data
              );
        } else
          t.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            Z,
            Y.width,
            Y.height,
            Y.depth,
            0,
            se,
            R,
            Y.data
          );
      else if (g.isData3DTexture)
        ie
          ? (ae &&
              t.texStorage3D(i.TEXTURE_3D, Fe, Z, Y.width, Y.height, Y.depth),
            Te &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Y.width,
                Y.height,
                Y.depth,
                se,
                R,
                Y.data
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              Z,
              Y.width,
              Y.height,
              Y.depth,
              0,
              se,
              R,
              Y.data
            );
      else if (g.isFramebufferTexture) {
        if (ae)
          if (ie) t.texStorage2D(i.TEXTURE_2D, Fe, Z, Y.width, Y.height);
          else {
            let ne = Y.width,
              Ae = Y.height;
            for (let Ie = 0; Ie < Fe; Ie++)
              t.texImage2D(i.TEXTURE_2D, Ie, Z, ne, Ae, 0, se, R, null),
                (ne >>= 1),
                (Ae >>= 1);
          }
      } else if (g.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          const ne = i.canvas;
          if (
            (ne.hasAttribute("layoutsubtree") ||
              ne.setAttribute("layoutsubtree", "true"),
            Y.parentNode !== ne)
          ) {
            ne.appendChild(Y),
              _.add(g),
              (ne.onpaint = (Ae) => {
                const Ie = Ae.changedElements;
                for (const fe of _)
                  Ie.includes(fe.image) && (fe.needsUpdate = !0);
              }),
              ne.requestPaint();
            return;
          }
          if (i.texElementImage2D.length === 3)
            i.texElementImage2D(i.TEXTURE_2D, i.RGBA8, Y);
          else {
            const Ie = i.RGBA,
              fe = i.RGBA,
              Ke = i.UNSIGNED_BYTE;
            i.texElementImage2D(i.TEXTURE_2D, 0, Ie, fe, Ke, Y);
          }
          i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
            i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
            i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE);
        }
      } else if (oe.length > 0) {
        if (ie && ae) {
          const ne = we(oe[0]);
          t.texStorage2D(i.TEXTURE_2D, Fe, Z, ne.width, ne.height);
        }
        for (let ne = 0, Ae = oe.length; ne < Ae; ne++)
          (V = oe[ne]),
            ie
              ? Te && t.texSubImage2D(i.TEXTURE_2D, ne, 0, 0, se, R, V)
              : t.texImage2D(i.TEXTURE_2D, ne, Z, se, R, V);
        g.generateMipmaps = !1;
      } else if (ie) {
        if (ae) {
          const ne = we(Y);
          t.texStorage2D(i.TEXTURE_2D, Fe, Z, ne.width, ne.height);
        }
        Te && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, se, R, Y);
      } else t.texImage2D(i.TEXTURE_2D, 0, Z, se, R, Y);
      b(g) && g.mipmapsAutoUpdate === !0 && A(ee),
        (ce.__version = re.version),
        g.onUpdate && g.onUpdate(g);
    }
    S.__version = g.version;
  }
  function yt(S, g, F) {
    if (g.image.length !== 6) return;
    const ee = $e(S, g),
      J = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, S.__webglTexture, i.TEXTURE0 + F);
    const re = n.get(J);
    if (J.version !== re.__version || ee === !0) {
      t.activeTexture(i.TEXTURE0 + F);
      const ce = He.getPrimaries(He.workingColorSpace),
        X = g.colorSpace === "" ? null : He.getPrimaries(g.colorSpace),
        Y = g.colorSpace === "" || ce === X ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY),
        t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha),
        t.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment),
        t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Y);
      const se = g.isCompressedTexture || g.image[0].isCompressedTexture,
        R = g.image[0] && g.image[0].isDataTexture,
        Z = [];
      for (let fe = 0; fe < 6; fe++)
        !se && !R
          ? (Z[fe] = E(g.image[fe], !0, r.maxCubemapSize))
          : (Z[fe] = R ? g.image[fe].image : g.image[fe]),
          (Z[fe] = Re(g, Z[fe]));
      const V = Z[0],
        oe = a.convert(g.format, g.colorSpace),
        ie = a.convert(g.type);
      let ae = y(g.internalFormat, oe, ie, g.normalized, g.colorSpace);
      const Te = g.isVideoTexture !== !0,
        Fe = re.__version === void 0 || ee === !0,
        ne = J.dataReady;
      let Ae = M(g, V);
      Ye(i.TEXTURE_CUBE_MAP, g);
      let Ie;
      if (g.isDepthTexture) {
        if (((ae = p(g.format === 1027, g.type)), Fe))
          if (Te) t.texStorage2D(i.TEXTURE_CUBE_MAP, 1, ae, V.width, V.height);
          else
            for (let fe = 0; fe < 6; fe++)
              t.texImage2D(
                i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                0,
                ae,
                V.width,
                V.height,
                0,
                oe,
                ie,
                null
              );
      } else if (se) {
        Te &&
          Fe &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, Ae, ae, V.width, V.height);
        for (let fe = 0; fe < 6; fe++) {
          Ie = Z[fe].mipmaps;
          for (let Ke = 0; Ke < Ie.length; Ke++) {
            const ht = Ie[Ke];
            g.format !== 1023
              ? oe !== null
                ? Te
                  ? ne &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                      Ke,
                      0,
                      0,
                      ht.width,
                      ht.height,
                      oe,
                      ht.data
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                      Ke,
                      ae,
                      ht.width,
                      ht.height,
                      0,
                      ht.data
                    )
                : Ce(
                    "WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Te
              ? ne &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                  Ke,
                  0,
                  0,
                  ht.width,
                  ht.height,
                  oe,
                  ie,
                  ht.data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                  Ke,
                  ae,
                  ht.width,
                  ht.height,
                  0,
                  oe,
                  ie,
                  ht.data
                );
          }
        }
      } else {
        if (((Ie = g.mipmaps), Te && Fe)) {
          Ie.length > 0 && Ae++;
          const fe = we(Z[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, Ae, ae, fe.width, fe.height);
        }
        for (let fe = 0; fe < 6; fe++)
          if (R) {
            Te
              ? ne &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                  0,
                  0,
                  0,
                  Z[fe].width,
                  Z[fe].height,
                  oe,
                  ie,
                  Z[fe].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                  0,
                  ae,
                  Z[fe].width,
                  Z[fe].height,
                  0,
                  oe,
                  ie,
                  Z[fe].data
                );
            for (let Ke = 0; Ke < Ie.length; Ke++) {
              const en = Ie[Ke].image[fe].image;
              Te
                ? ne &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                    Ke + 1,
                    0,
                    0,
                    en.width,
                    en.height,
                    oe,
                    ie,
                    en.data
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                    Ke + 1,
                    ae,
                    en.width,
                    en.height,
                    0,
                    oe,
                    ie,
                    en.data
                  );
            }
          } else {
            Te
              ? ne &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                  0,
                  0,
                  0,
                  oe,
                  ie,
                  Z[fe]
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                  0,
                  ae,
                  oe,
                  ie,
                  Z[fe]
                );
            for (let Ke = 0; Ke < Ie.length; Ke++) {
              const ht = Ie[Ke];
              Te
                ? ne &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                    Ke + 1,
                    0,
                    0,
                    oe,
                    ie,
                    ht.image[fe]
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + fe,
                    Ke + 1,
                    ae,
                    oe,
                    ie,
                    ht.image[fe]
                  );
            }
          }
      }
      b(g) && g.mipmapsAutoUpdate === !0 && A(i.TEXTURE_CUBE_MAP),
        (re.__version = J.version),
        g.onUpdate && g.onUpdate(g);
    }
    S.__version = g.version;
  }
  function tt(S, g, F, ee, J, re) {
    const ce = a.convert(F.format, F.colorSpace),
      X = a.convert(F.type),
      Y = y(F.internalFormat, ce, X, F.normalized, F.colorSpace),
      se = n.get(g),
      R = n.get(F);
    if (((R.__renderTarget = g), !se.__hasExternalTextures)) {
      const Z = Math.max(1, g.width >> re),
        V = Math.max(1, g.height >> re);
      J === i.TEXTURE_3D || J === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(J, re, Y, Z, V, g.depth, 0, ce, X, null)
        : t.texImage2D(J, re, Y, Z, V, 0, ce, X, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, S),
      de(g)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            ee,
            J,
            R.__webglTexture,
            0,
            et(g)
          )
        : (J === i.TEXTURE_2D ||
            (J >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              J <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, ee, J, R.__webglTexture, re),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function zt(S, g, F) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, S), g.depthBuffer)) {
      const ee = g.depthTexture,
        J = ee && ee.isDepthTexture ? ee.type : null,
        re = p(g.stencilBuffer, J),
        ce = g.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      de(g)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            et(g),
            re,
            g.width,
            g.height
          )
        : F
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            et(g),
            re,
            g.width,
            g.height
          )
        : i.renderbufferStorage(i.RENDERBUFFER, re, g.width, g.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, ce, i.RENDERBUFFER, S);
    } else {
      const ee = g.textures;
      for (let J = 0; J < ee.length; J++) {
        const re = ee[J],
          ce = a.convert(re.format, re.colorSpace),
          X = a.convert(re.type),
          Y = y(re.internalFormat, ce, X, re.normalized, re.colorSpace);
        de(g)
          ? o.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              et(g),
              Y,
              g.width,
              g.height
            )
          : F
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              et(g),
              Y,
              g.width,
              g.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, Y, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ft(S, g, F) {
    const ee = g.isWebGLCubeRenderTarget === !0;
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, S),
      !(g.depthTexture && g.depthTexture.isDepthTexture))
    )
      throw new Error(
        "THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture."
      );
    const J = n.get(g.depthTexture);
    J.__renderTarget = g;
    const re = ee ? g.depthTexture.image[0] : g.depthTexture.image;
    (!J.__webglTexture || re.width !== g.width || re.height !== g.height) &&
      ((re.width = g.width),
      (re.height = g.height),
      (g.depthTexture.needsUpdate = !0)),
      ee ? me(g.depthTexture, 0) : pe(g.depthTexture, 0);
    const ce = J.__webglTexture,
      X = et(g),
      Y = ee ? i.TEXTURE_CUBE_MAP_POSITIVE_X + F : i.TEXTURE_2D,
      se =
        g.depthTexture.format === 1027
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
    if (g.depthTexture.format === 1026)
      de(g)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, se, Y, ce, 0, X)
        : i.framebufferTexture2D(i.FRAMEBUFFER, se, Y, ce, 0);
    else if (g.depthTexture.format === 1027)
      de(g)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, se, Y, ce, 0, X)
        : i.framebufferTexture2D(i.FRAMEBUFFER, se, Y, ce, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function wt(S) {
    const g = n.get(S),
      F = S.isWebGLCubeRenderTarget === !0;
    if (g.__boundDepthTexture !== S.depthTexture) {
      const ee = S.depthTexture;
      if ((g.__depthDisposeCallback && g.__depthDisposeCallback(), ee)) {
        const J = () => {
          delete g.__boundDepthTexture,
            delete g.__depthDisposeCallback,
            ee.removeEventListener("dispose", J);
        };
        ee.addEventListener("dispose", J), (g.__depthDisposeCallback = J);
      }
      g.__boundDepthTexture = ee;
    }
    if (S.depthTexture && !g.__autoAllocateDepthBuffer)
      if (F) for (let ee = 0; ee < 6; ee++) ft(g.__webglFramebuffer[ee], S, ee);
      else
        S.texture.mipmaps.length > 0
          ? ft(g.__webglFramebuffer[0], S, 0)
          : ft(g.__webglFramebuffer, S, 0);
    else if (F) {
      g.__webglDepthbuffer = [];
      for (let ee = 0; ee < 6; ee++)
        if (
          (t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[ee]),
          g.__webglDepthbuffer[ee] === void 0)
        )
          (g.__webglDepthbuffer[ee] = i.createRenderbuffer()),
            zt(g.__webglDepthbuffer[ee], S, !1);
        else {
          const J = S.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            re = g.__webglDepthbuffer[ee];
          i.bindRenderbuffer(i.RENDERBUFFER, re),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, re);
        }
    } else if (
      (S.texture.mipmaps.length > 0
        ? t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[0])
        : t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer),
      g.__webglDepthbuffer === void 0)
    )
      (g.__webglDepthbuffer = i.createRenderbuffer()),
        zt(g.__webglDepthbuffer, S, !1);
    else {
      const J = S.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT,
        re = g.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, re),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, re);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Pt(S, g, F) {
    const ee = n.get(S);
    g !== void 0 &&
      tt(
        ee.__webglFramebuffer,
        S,
        S.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0
      ),
      F !== void 0 && wt(S);
  }
  function Dt(S) {
    const g = S.texture,
      F = n.get(S),
      ee = n.get(g);
    S.addEventListener("dispose", G), O(S);
    const J = S.textures,
      re = S.isWebGLCubeRenderTarget === !0,
      ce = J.length > 1;
    if (
      (ce ||
        (ee.__webglTexture === void 0 &&
          (ee.__webglTexture = i.createTexture()),
        (ee.__version = g.version),
        s.memory.textures++),
      re)
    ) {
      F.__webglFramebuffer = [];
      for (let X = 0; X < 6; X++)
        if (g.mipmaps.length > 0) {
          F.__webglFramebuffer[X] = [];
          for (let Y = 0; Y < g.mipmaps.length; Y++)
            F.__webglFramebuffer[X][Y] = i.createFramebuffer();
        } else F.__webglFramebuffer[X] = i.createFramebuffer();
    } else {
      if (g.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let X = 0; X < g.mipmaps.length; X++)
          F.__webglFramebuffer[X] = i.createFramebuffer();
      } else F.__webglFramebuffer = i.createFramebuffer();
      if (ce)
        for (let X = 0, Y = J.length; X < Y; X++) {
          const se = n.get(J[X]);
          se.__webglTexture === void 0 &&
            ((se.__webglTexture = i.createTexture()), s.memory.textures++);
        }
      if (S.samples > 0 && de(S) === !1) {
        (F.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (F.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let X = 0; X < J.length; X++) {
          const Y = J[X];
          (F.__webglColorRenderbuffer[X] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[X]);
          const se = a.convert(Y.format, Y.colorSpace),
            R = a.convert(Y.type),
            Z = y(
              Y.internalFormat,
              se,
              R,
              Y.normalized,
              Y.colorSpace,
              S.isXRRenderTarget === !0
            ),
            V = et(S);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            V,
            Z,
            S.width,
            S.height
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + X,
              i.RENDERBUFFER,
              F.__webglColorRenderbuffer[X]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          S.depthBuffer &&
            ((F.__webglDepthRenderbuffer = i.createRenderbuffer()),
            zt(F.__webglDepthRenderbuffer, S, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (re) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, ee.__webglTexture),
        Ye(i.TEXTURE_CUBE_MAP, g);
      for (let X = 0; X < 6; X++)
        if (g.mipmaps.length > 0)
          for (let Y = 0; Y < g.mipmaps.length; Y++)
            tt(
              F.__webglFramebuffer[X][Y],
              S,
              g,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + X,
              Y
            );
        else
          tt(
            F.__webglFramebuffer[X],
            S,
            g,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + X,
            0
          );
      b(g)
        ? A(i.TEXTURE_CUBE_MAP)
        : g.mipmaps.length > 0 &&
          i.texParameteri(
            i.TEXTURE_CUBE_MAP,
            i.TEXTURE_MAX_LEVEL,
            g.mipmaps.length - 1
          ),
        t.unbindTexture();
    } else if (ce) {
      for (let X = 0, Y = J.length; X < Y; X++) {
        const se = J[X],
          R = n.get(se);
        let Z = i.TEXTURE_2D;
        (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
          (Z = S.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
          t.bindTexture(Z, R.__webglTexture),
          Ye(Z, se),
          tt(F.__webglFramebuffer, S, se, i.COLOR_ATTACHMENT0 + X, Z, 0),
          b(se) && A(Z);
      }
      t.unbindTexture();
    } else {
      let X = i.TEXTURE_2D;
      if (
        ((S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
          (X = S.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture(X, ee.__webglTexture),
        Ye(X, g),
        g.mipmaps.length > 0)
      )
        for (let Y = 0; Y < g.mipmaps.length; Y++)
          tt(F.__webglFramebuffer[Y], S, g, i.COLOR_ATTACHMENT0, X, Y);
      else tt(F.__webglFramebuffer, S, g, i.COLOR_ATTACHMENT0, X, 0);
      b(g)
        ? A(X)
        : g.mipmaps.length > 0 &&
          i.texParameteri(X, i.TEXTURE_MAX_LEVEL, g.mipmaps.length - 1),
        t.unbindTexture();
    }
    S.depthBuffer && wt(S);
  }
  function L(S) {
    const g = S.textures;
    for (let F = 0, ee = g.length; F < ee; F++) {
      const J = g[F];
      if (b(J) && J.mipmapsAutoUpdate === !0) {
        const re = C(S),
          ce = n.get(J).__webglTexture;
        t.bindTexture(re, ce), A(re), t.unbindTexture();
      }
    }
  }
  const Lt = [];
  function je(S) {
    if (S.samples > 0) {
      if (de(S) === !1) {
        const g = S.textures,
          F = S.width,
          ee = S.height;
        let J = i.COLOR_BUFFER_BIT;
        const re = S.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          ce = n.get(S),
          X = g.length > 1;
        if (X)
          for (let se = 0; se < g.length; se++)
            t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.RENDERBUFFER,
                null
              ),
              t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.TEXTURE_2D,
                null,
                0
              );
        t.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          ce.__webglMultisampledFramebuffer
        ),
          S.texture.mipmaps.length > 0
            ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ce.__webglFramebuffer[0])
            : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ce.__webglFramebuffer);
        for (let se = 0; se < g.length; se++) {
          if (
            (S.resolveDepthBuffer &&
              (S.depthBuffer && (J |= i.DEPTH_BUFFER_BIT),
              S.stencilBuffer &&
                S.resolveStencilBuffer &&
                (J |= i.STENCIL_BUFFER_BIT)),
            X)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              ce.__webglColorRenderbuffer[se]
            );
            const R = n.get(g[se]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              R,
              0
            );
          }
          i.blitFramebuffer(0, 0, F, ee, 0, 0, F, ee, J, i.NEAREST),
            c === !0 &&
              ((Lt.length = 0),
              Lt.push(i.COLOR_ATTACHMENT0 + se),
              S.depthBuffer &&
                S.storeMultisampledDepthBuffer === !1 &&
                Lt.push(re),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Lt));
        }
        if (
          (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          X)
        )
          for (let se = 0; se < g.length; se++) {
            t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglMultisampledFramebuffer),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.RENDERBUFFER,
                ce.__webglColorRenderbuffer[se]
              );
            const R = n.get(g[se]).__webglTexture;
            t.bindFramebuffer(i.FRAMEBUFFER, ce.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + se,
                i.TEXTURE_2D,
                R,
                0
              );
          }
        t.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          ce.__webglMultisampledFramebuffer
        );
      } else if (S.depthBuffer && S.storeMultisampledDepthBuffer === !1 && c) {
        const g = S.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function et(S) {
    return Math.min(r.maxSamples, S.samples);
  }
  function de(S) {
    const g = n.get(S);
    return (
      S.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      g.__useRenderToTexture !== !1
    );
  }
  function ct(S) {
    const g = s.render.frame;
    f.get(S) !== g && (f.set(S, g), S.update());
  }
  function Re(S, g) {
    const F = S.colorSpace,
      ee = S.format,
      J = S.type;
    return (
      S.isCompressedTexture === !0 ||
        S.isVideoTexture === !0 ||
        (F !== yi &&
          F !== "" &&
          (He.getTransfer(F) === Ze
            ? (ee !== 1023 || J !== 1009) &&
              Ce(
                "WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : We("WebGLTextures: Unsupported texture color space:", F))),
      g
    );
  }
  function we(S) {
    return (
      typeof HTMLImageElement < "u" && S instanceof HTMLImageElement
        ? ((l.width = S.naturalWidth || S.width),
          (l.height = S.naturalHeight || S.height))
        : typeof VideoFrame < "u" && S instanceof VideoFrame
        ? ((l.width = S.displayWidth), (l.height = S.displayHeight))
        : ((l.width = S.width), (l.height = S.height)),
      l
    );
  }
  (this.allocateTextureUnit = De),
    (this.resetTextureUnits = Q),
    (this.getTextureUnits = j),
    (this.setTextureUnits = Me),
    (this.setTexture2D = pe),
    (this.setTexture2DArray = xe),
    (this.setTexture3D = ye),
    (this.setTextureCube = me),
    (this.rebindTextures = Pt),
    (this.setupRenderTarget = Dt),
    (this.updateRenderTargetMipmap = L),
    (this.updateMultisampleRenderTarget = je),
    (this.setupDepthRenderbuffer = wt),
    (this.setupFrameBufferTexture = tt),
    (this.useMultisampledRTT = de),
    (this.dispose = W);
}
function Pd(i, e) {
  function t(n, r = "") {
    let a;
    const s = He.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (s === Ze)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (n === 33776) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (n === 33776) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (n === 35840) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (
      n === 36196 ||
      n === 37492 ||
      n === 37496 ||
      n === 37488 ||
      n === 37489 ||
      n === 37490 ||
      n === 37491
    )
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (n === 36196 || n === 37492)
          return s === Ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (n === 37496)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === 37488) return a.COMPRESSED_R11_EAC;
        if (n === 37489) return a.COMPRESSED_SIGNED_R11_EAC;
        if (n === 37490) return a.COMPRESSED_RG11_EAC;
        if (n === 37491) return a.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (
      n === 37808 ||
      n === 37809 ||
      n === 37810 ||
      n === 37811 ||
      n === 37812 ||
      n === 37813 ||
      n === 37814 ||
      n === 37815 ||
      n === 37816 ||
      n === 37817 ||
      n === 37818 ||
      n === 37819 ||
      n === 37820 ||
      n === 37821
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (n === 37808)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821)
          return s === Ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (n === 36492)
          return s === Ze
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (n === 36283) return a.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const Dd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Ld = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Nd {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new wa(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new vn({
          vertexShader: Dd,
          fragmentShader: Ld,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new xn(new Li(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Id extends Sn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      a = 1,
      s = null,
      o = "local-floor",
      c = 1,
      l = null,
      f = null,
      _ = null,
      u = null,
      m = null,
      v = null;
    const T = typeof XRWebGLBinding < "u",
      h = new Nd(),
      d = {},
      E = t.getContextAttributes();
    let b = null,
      A = null;
    const C = [],
      y = [],
      p = new Xe();
    let M = null,
      O = null;
    const D = new kt();
    D.viewport = new it();
    const N = new kt();
    N.viewport = new it();
    const G = [D, N],
      q = new Xs();
    let P = null,
      W = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (K) {
        let pe = C[K];
        return (
          pe === void 0 && ((pe = new Vi()), (C[K] = pe)),
          pe.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (K) {
        let pe = C[K];
        return (
          pe === void 0 && ((pe = new Vi()), (C[K] = pe)), pe.getGripSpace()
        );
      }),
      (this.getHand = function (K) {
        let pe = C[K];
        return (
          pe === void 0 && ((pe = new Vi()), (C[K] = pe)), pe.getHandSpace()
        );
      });
    function $(K) {
      const pe = y.indexOf(K.inputSource);
      if (pe === -1) return;
      const xe = C[pe];
      xe !== void 0 &&
        (xe.update(K.inputSource, K.frame, l || s),
        xe.dispatchEvent({ type: K.type, data: K.inputSource }));
    }
    function H() {
      r.removeEventListener("select", $),
        r.removeEventListener("selectstart", $),
        r.removeEventListener("selectend", $),
        r.removeEventListener("squeeze", $),
        r.removeEventListener("squeezestart", $),
        r.removeEventListener("squeezeend", $),
        r.removeEventListener("end", H),
        r.removeEventListener("inputsourceschange", te);
      for (let K = 0; K < C.length; K++) {
        const pe = y[K];
        pe !== null && ((y[K] = null), C[K].disconnect(pe));
      }
      (P = null), (W = null), h.reset();
      for (const K in d) delete d[K];
      if (
        (e.setRenderTarget(b),
        (m = null),
        (u = null),
        (_ = null),
        (r = null),
        (A = null),
        De.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(M),
        e.setSize(p.width, p.height, !1),
        O !== null)
      ) {
        const K = O.camera;
        (K.fov = O.fov),
          (K.zoom = O.zoom),
          K.updateProjectionMatrix(),
          (O = null);
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (K) {
      (a = K),
        n.isPresenting === !0 &&
          Ce("WebXRManager: Cannot change framebuffer scale while presenting.");
    }),
      (this.setReferenceSpaceType = function (K) {
        (o = K),
          n.isPresenting === !0 &&
            Ce(
              "WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || s;
      }),
      (this.setReferenceSpace = function (K) {
        l = K;
      }),
      (this.getBaseLayer = function () {
        return u !== null ? u : m;
      }),
      (this.getBinding = function () {
        return _ === null && T && (_ = new XRWebGLBinding(r, t)), _;
      }),
      (this.getFrame = function () {
        return v;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (K) {
        if (((r = K), r !== null)) {
          if (
            ((b = e.getRenderTarget()),
            r.addEventListener("select", $),
            r.addEventListener("selectstart", $),
            r.addEventListener("selectend", $),
            r.addEventListener("squeeze", $),
            r.addEventListener("squeezestart", $),
            r.addEventListener("squeezeend", $),
            r.addEventListener("end", H),
            r.addEventListener("inputsourceschange", te),
            E.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (M = e.getPixelRatio()),
            e.getSize(p),
            T && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let xe = null,
              ye = null,
              me = null;
            E.depth &&
              ((me = E.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (xe = E.stencil ? 1027 : 1026),
              (ye = E.stencil ? 1020 : 1014));
            const Ne = {
              colorFormat: t.RGBA8,
              depthFormat: me,
              scaleFactor: a,
            };
            (_ = this.getBinding()),
              (u = _.createProjectionLayer(Ne)),
              r.updateRenderState({ layers: [u] }),
              e.setPixelRatio(1),
              e.setSize(u.textureWidth, u.textureHeight, !1),
              (A = new Xt(u.textureWidth, u.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new Fn(
                  u.textureWidth,
                  u.textureHeight,
                  ye,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  xe
                ),
                stencilBuffer: E.stencil,
                colorSpace: e.outputColorSpace,
                samples: E.antialias ? 4 : 0,
                resolveDepthBuffer: u.ignoreDepthValues === !1,
                resolveStencilBuffer: u.ignoreDepthValues === !1,
                storeMultisampledDepthBuffer: u.ignoreDepthValues === !1,
                storeMultisampledStencilBuffer: u.ignoreDepthValues === !1,
              }));
          } else {
            const xe = {
              antialias: E.antialias,
              alpha: !0,
              depth: E.depth,
              stencil: E.stencil,
              framebufferScaleFactor: a,
            };
            (m = new XRWebGLLayer(r, t, xe)),
              r.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (A = new Xt(m.framebufferWidth, m.framebufferHeight, {
                format: 1023,
                type: 1009,
                colorSpace: e.outputColorSpace,
                stencilBuffer: E.stencil,
                resolveDepthBuffer: m.ignoreDepthValues === !1,
                resolveStencilBuffer: m.ignoreDepthValues === !1,
                storeMultisampledDepthBuffer: m.ignoreDepthValues === !1,
                storeMultisampledStencilBuffer: m.ignoreDepthValues === !1,
              }));
          }
          (A.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (s = await r.requestReferenceSpace(o)),
            De.setContext(r),
            De.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return h.getDepthTexture();
      });
    function te(K) {
      for (let pe = 0; pe < K.removed.length; pe++) {
        const xe = K.removed[pe],
          ye = y.indexOf(xe);
        ye >= 0 && ((y[ye] = null), C[ye].disconnect(xe));
      }
      for (let pe = 0; pe < K.added.length; pe++) {
        const xe = K.added[pe];
        let ye = y.indexOf(xe);
        if (ye === -1) {
          for (let Ne = 0; Ne < C.length; Ne++)
            if (Ne >= y.length) {
              y.push(xe), (ye = Ne);
              break;
            } else if (y[Ne] === null) {
              (y[Ne] = xe), (ye = Ne);
              break;
            }
          if (ye === -1) break;
        }
        const me = C[ye];
        me && me.connect(xe);
      }
    }
    function k(K, pe) {
      pe === null
        ? K.matrixWorld.copy(K.matrix)
        : K.matrixWorld.multiplyMatrices(pe.matrixWorld, K.matrix),
        K.matrixWorldInverse.copy(K.matrixWorld).invert();
    }
    this.updateCamera = function (K) {
      if (r === null) return;
      let pe = K.near,
        xe = K.far;
      h.texture !== null &&
        (h.depthNear > 0 && (pe = h.depthNear),
        h.depthFar > 0 && (xe = h.depthFar)),
        (q.near = N.near = D.near = pe),
        (q.far = N.far = D.far = xe),
        (P !== q.near || W !== q.far) &&
          (r.updateRenderState({ depthNear: q.near, depthFar: q.far }),
          (P = q.near),
          (W = q.far)),
        (q.layers.mask = K.layers.mask | 6),
        (D.layers.mask = q.layers.mask & -5),
        (N.layers.mask = q.layers.mask & -3);
      const ye = K.parent,
        me = q.cameras;
      k(q, ye);
      for (let Ne = 0; Ne < me.length; Ne++) k(me[Ne], ye);
      q.projectionMatrix.copy(D.projectionMatrix),
        q.projectionMatrixInverse.copy(D.projectionMatrixInverse),
        O === null &&
          K.isPerspectiveCamera &&
          (O = { camera: K, fov: K.fov, zoom: K.zoom }),
        Q(K, q, ye);
    };
    function Q(K, pe, xe) {
      xe === null
        ? K.matrix.copy(pe.matrixWorld)
        : (K.matrix.copy(xe.matrixWorld),
          K.matrix.invert(),
          K.matrix.multiply(pe.matrixWorld)),
        K.matrix.decompose(K.position, K.quaternion, K.scale),
        K.updateMatrixWorld(!0),
        K.projectionMatrix.copy(pe.projectionMatrix),
        K.projectionMatrixInverse.copy(pe.projectionMatrixInverse),
        K.isPerspectiveCamera &&
          ((K.fov = Zn * 2 * Math.atan(1 / K.projectionMatrix.elements[5])),
          (K.zoom = 1));
    }
    (this.getCamera = function () {
      return q;
    }),
      (this.getFoveation = function () {
        if (!(u === null && m === null)) return c;
      }),
      (this.setFoveation = function (K) {
        (c = K),
          u !== null && (u.fixedFoveation = K),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = K);
      }),
      (this.hasDepthSensing = function () {
        return h.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return h.getMesh(q);
      }),
      (this.getCameraTexture = function (K) {
        return d[K];
      });
    let j = null;
    function Me(K, pe) {
      if (((f = pe.getViewerPose(l || s)), (v = pe), f !== null)) {
        const xe = f.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(A, m.framebuffer),
          e.setRenderTarget(A));
        let ye = !1;
        xe.length !== q.cameras.length && ((q.cameras.length = 0), (ye = !0));
        for (let be = 0; be < xe.length; be++) {
          const Ye = xe[be];
          let $e = null;
          if (m !== null) $e = m.getViewport(Ye);
          else {
            const _t = _.getViewSubImage(u, Ye);
            ($e = _t.viewport),
              be === 0 &&
                (e.setRenderTargetTextures(
                  A,
                  _t.colorTexture,
                  _t.depthStencilTexture
                ),
                e.setRenderTarget(A));
          }
          let Oe = G[be];
          Oe === void 0 &&
            ((Oe = new kt()),
            Oe.layers.enable(be),
            (Oe.viewport = new it()),
            (G[be] = Oe)),
            Oe.matrix.fromArray(Ye.transform.matrix),
            Oe.matrix.decompose(Oe.position, Oe.quaternion, Oe.scale),
            Oe.projectionMatrix.fromArray(Ye.projectionMatrix),
            Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),
            Oe.viewport.set($e.x, $e.y, $e.width, $e.height),
            be === 0 &&
              (q.matrix.copy(Oe.matrix),
              q.matrix.decompose(q.position, q.quaternion, q.scale)),
            ye === !0 && q.cameras.push(Oe);
        }
        const me = r.enabledFeatures;
        if (
          me &&
          me.includes("depth-sensing") &&
          r.depthUsage == "gpu-optimized" &&
          T
        ) {
          _ = n.getBinding();
          const be = _.getDepthInformation(xe[0]);
          be && be.isValid && be.texture && h.init(be, r.renderState);
        }
        if (me && me.includes("camera-access") && T) {
          e.state.unbindTexture(), (_ = n.getBinding());
          for (let be = 0; be < xe.length; be++) {
            const Ye = xe[be].camera;
            if (Ye) {
              let $e = d[Ye];
              $e || (($e = new wa()), (d[Ye] = $e));
              const Oe = _.getCameraImage(Ye);
              $e.sourceTexture = Oe;
            }
          }
        }
      }
      for (let xe = 0; xe < C.length; xe++) {
        const ye = y[xe],
          me = C[xe];
        ye !== null && me !== void 0 && me.update(ye, pe, l || s);
      }
      j && j(K, pe),
        pe.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: pe }),
        (v = null);
    }
    const De = new La();
    De.setAnimationLoop(Me),
      (this.setAnimationLoop = function (K) {
        j = K;
      }),
      (this.dispose = function () {});
  }
}
const Fd = new rt(),
  Va = new Pe();
Va.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Ud(i, e) {
  function t(h, d) {
    h.matrixAutoUpdate === !0 && h.updateMatrix(), d.value.copy(h.matrix);
  }
  function n(h, d) {
    d.color.getRGB(h.fogColor.value, Pa(i)),
      d.isFog
        ? ((h.fogNear.value = d.near), (h.fogFar.value = d.far))
        : d.isFogExp2 && (h.fogDensity.value = d.density);
  }
  function r(h, d, E, b, A) {
    d.isNodeMaterial
      ? (d.uniformsNeedUpdate = !1)
      : d.isMeshBasicMaterial
      ? a(h, d)
      : d.isMeshLambertMaterial
      ? (a(h, d), d.envMap && (h.envMapIntensity.value = d.envMapIntensity))
      : d.isMeshToonMaterial
      ? (a(h, d), _(h, d))
      : d.isMeshPhongMaterial
      ? (a(h, d),
        f(h, d),
        d.envMap && (h.envMapIntensity.value = d.envMapIntensity))
      : d.isMeshStandardMaterial
      ? (a(h, d), u(h, d), d.isMeshPhysicalMaterial && m(h, d, A))
      : d.isMeshMatcapMaterial
      ? (a(h, d), v(h, d))
      : d.isMeshDepthMaterial
      ? a(h, d)
      : d.isMeshDistanceMaterial
      ? (a(h, d), T(h, d))
      : d.isMeshNormalMaterial
      ? a(h, d)
      : d.isLineBasicMaterial
      ? (s(h, d), d.isLineDashedMaterial && o(h, d))
      : d.isPointsMaterial
      ? c(h, d, E, b)
      : d.isSpriteMaterial
      ? l(h, d)
      : d.isShadowMaterial
      ? (h.color.value.copy(d.color), (h.opacity.value = d.opacity))
      : d.isShaderMaterial && (d.uniformsNeedUpdate = !1);
  }
  function a(h, d) {
    (h.opacity.value = d.opacity),
      d.color && h.diffuse.value.copy(d.color),
      d.emissive &&
        h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
      d.map && ((h.map.value = d.map), t(d.map, h.mapTransform)),
      d.alphaMap &&
        ((h.alphaMap.value = d.alphaMap), t(d.alphaMap, h.alphaMapTransform)),
      d.bumpMap &&
        ((h.bumpMap.value = d.bumpMap),
        t(d.bumpMap, h.bumpMapTransform),
        (h.bumpScale.value = d.bumpScale),
        d.side === 1 && (h.bumpScale.value *= -1)),
      d.normalMap &&
        ((h.normalMap.value = d.normalMap),
        t(d.normalMap, h.normalMapTransform),
        h.normalScale.value.copy(d.normalScale),
        d.side === 1 && h.normalScale.value.negate()),
      d.displacementMap &&
        ((h.displacementMap.value = d.displacementMap),
        t(d.displacementMap, h.displacementMapTransform),
        (h.displacementScale.value = d.displacementScale),
        (h.displacementBias.value = d.displacementBias)),
      d.emissiveMap &&
        ((h.emissiveMap.value = d.emissiveMap),
        t(d.emissiveMap, h.emissiveMapTransform)),
      d.specularMap &&
        ((h.specularMap.value = d.specularMap),
        t(d.specularMap, h.specularMapTransform)),
      d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
    const E = e.get(d),
      b = E.envMap,
      A = E.envMapRotation;
    b &&
      ((h.envMap.value = b),
      h.envMapRotation.value
        .setFromMatrix4(Fd.makeRotationFromEuler(A))
        .transpose(),
      b.isCubeTexture &&
        b.isRenderTargetTexture === !1 &&
        h.envMapRotation.value.premultiply(Va),
      (h.reflectivity.value = d.reflectivity),
      (h.ior.value = d.ior),
      (h.refractionRatio.value = d.refractionRatio)),
      d.lightMap &&
        ((h.lightMap.value = d.lightMap),
        (h.lightMapIntensity.value = d.lightMapIntensity),
        t(d.lightMap, h.lightMapTransform)),
      d.aoMap &&
        ((h.aoMap.value = d.aoMap),
        (h.aoMapIntensity.value = d.aoMapIntensity),
        t(d.aoMap, h.aoMapTransform));
  }
  function s(h, d) {
    h.diffuse.value.copy(d.color),
      (h.opacity.value = d.opacity),
      d.map && ((h.map.value = d.map), t(d.map, h.mapTransform));
  }
  function o(h, d) {
    (h.dashSize.value = d.dashSize),
      (h.totalSize.value = d.dashSize + d.gapSize),
      (h.scale.value = d.scale);
  }
  function c(h, d, E, b) {
    h.diffuse.value.copy(d.color),
      (h.opacity.value = d.opacity),
      (h.size.value = d.size * E),
      (h.scale.value = b * 0.5),
      d.map && ((h.map.value = d.map), t(d.map, h.uvTransform)),
      d.alphaMap &&
        ((h.alphaMap.value = d.alphaMap), t(d.alphaMap, h.alphaMapTransform)),
      d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
  }
  function l(h, d) {
    h.diffuse.value.copy(d.color),
      (h.opacity.value = d.opacity),
      (h.rotation.value = d.rotation),
      d.map && ((h.map.value = d.map), t(d.map, h.mapTransform)),
      d.alphaMap &&
        ((h.alphaMap.value = d.alphaMap), t(d.alphaMap, h.alphaMapTransform)),
      d.alphaTest > 0 && (h.alphaTest.value = d.alphaTest);
  }
  function f(h, d) {
    h.specular.value.copy(d.specular),
      (h.shininess.value = Math.max(d.shininess, 1e-4));
  }
  function _(h, d) {
    d.gradientMap && (h.gradientMap.value = d.gradientMap);
  }
  function u(h, d) {
    (h.metalness.value = d.metalness),
      d.metalnessMap &&
        ((h.metalnessMap.value = d.metalnessMap),
        t(d.metalnessMap, h.metalnessMapTransform)),
      (h.roughness.value = d.roughness),
      d.roughnessMap &&
        ((h.roughnessMap.value = d.roughnessMap),
        t(d.roughnessMap, h.roughnessMapTransform)),
      d.envMap && (h.envMapIntensity.value = d.envMapIntensity);
  }
  function m(h, d, E) {
    (h.ior.value = d.ior),
      d.diffuseRoughness > 0 &&
        ((h.diffuseRoughness.value = d.diffuseRoughness),
        d.diffuseRoughnessMap &&
          ((h.diffuseRoughnessMap.value = d.diffuseRoughnessMap),
          t(d.diffuseRoughnessMap, h.diffuseRoughnessMapTransform))),
      d.sheen > 0 &&
        (h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        (h.sheenRoughness.value = d.sheenRoughness),
        d.sheenColorMap &&
          ((h.sheenColorMap.value = d.sheenColorMap),
          t(d.sheenColorMap, h.sheenColorMapTransform)),
        d.sheenRoughnessMap &&
          ((h.sheenRoughnessMap.value = d.sheenRoughnessMap),
          t(d.sheenRoughnessMap, h.sheenRoughnessMapTransform))),
      d.clearcoat > 0 &&
        ((h.clearcoat.value = d.clearcoat),
        (h.clearcoatRoughness.value = d.clearcoatRoughness),
        d.clearcoatMap &&
          ((h.clearcoatMap.value = d.clearcoatMap),
          t(d.clearcoatMap, h.clearcoatMapTransform)),
        d.clearcoatRoughnessMap &&
          ((h.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap),
          t(d.clearcoatRoughnessMap, h.clearcoatRoughnessMapTransform)),
        d.clearcoatNormalMap &&
          ((h.clearcoatNormalMap.value = d.clearcoatNormalMap),
          t(d.clearcoatNormalMap, h.clearcoatNormalMapTransform),
          h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
          d.side === 1 && h.clearcoatNormalScale.value.negate())),
      d.dispersion > 0 && (h.dispersion.value = d.dispersion),
      d.retroreflectivity > 0 &&
        (h.retroreflectivity.value = d.retroreflectivity),
      d.iridescence > 0 &&
        ((h.iridescence.value = d.iridescence),
        (h.iridescenceIOR.value = d.iridescenceIOR),
        (h.iridescenceThicknessMinimum.value = d.iridescenceThicknessMinimum),
        (h.iridescenceThicknessMaximum.value = d.iridescenceThicknessMaximum),
        d.iridescenceMap &&
          ((h.iridescenceMap.value = d.iridescenceMap),
          t(d.iridescenceMap, h.iridescenceMapTransform)),
        d.iridescenceThicknessMap &&
          ((h.iridescenceThicknessMap.value = d.iridescenceThicknessMap),
          t(d.iridescenceThicknessMap, h.iridescenceThicknessMapTransform))),
      d.transmission > 0 &&
        ((h.transmission.value = d.transmission),
        (h.transmissionSamplerMap.value = E.texture),
        h.transmissionSamplerSize.value.set(E.width, E.height),
        d.transmissionMap &&
          ((h.transmissionMap.value = d.transmissionMap),
          t(d.transmissionMap, h.transmissionMapTransform)),
        (h.thickness.value = d.thickness),
        d.thicknessMap &&
          ((h.thicknessMap.value = d.thicknessMap),
          t(d.thicknessMap, h.thicknessMapTransform)),
        (h.attenuationDistance.value = d.attenuationDistance),
        h.attenuationColor.value.copy(d.attenuationColor)),
      d.anisotropy > 0 &&
        (h.anisotropyVector.value.set(
          d.anisotropy * Math.cos(d.anisotropyRotation),
          d.anisotropy * Math.sin(d.anisotropyRotation)
        ),
        d.anisotropyMap &&
          ((h.anisotropyMap.value = d.anisotropyMap),
          t(d.anisotropyMap, h.anisotropyMapTransform))),
      (h.specularIntensity.value = d.specularIntensity),
      h.specularColor.value.copy(d.specularColor),
      d.specularColorMap &&
        ((h.specularColorMap.value = d.specularColorMap),
        t(d.specularColorMap, h.specularColorMapTransform)),
      d.specularIntensityMap &&
        ((h.specularIntensityMap.value = d.specularIntensityMap),
        t(d.specularIntensityMap, h.specularIntensityMapTransform));
  }
  function v(h, d) {
    d.matcap && (h.matcap.value = d.matcap);
  }
  function T(h, d) {
    const E = e.get(d).light;
    h.referencePosition.value.setFromMatrixPosition(E.matrixWorld),
      (h.nearDistance.value = E.shadow.camera.near),
      (h.farDistance.value = E.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Od(i, e, t, n) {
  let r = {},
    a = {};
  function s(E, b) {
    const A = b.program;
    n.uniformBlockBinding(E, A, r[E.id]);
  }
  function o(E, b) {
    let A = r[E.id];
    A === void 0 &&
      (v(E), (A = c(E)), (r[E.id] = A), E.addEventListener("dispose", h));
    const C = b.program;
    n.updateUBOMapping(E, C);
    const y = e.render.frame;
    a[E.id] !== y && (l(E), (a[E.id] = y));
  }
  function c(E) {
    const b = i.createBuffer(),
      A = E.__size,
      C = E.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, b),
      i.bufferData(i.UNIFORM_BUFFER, A, C),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      b
    );
  }
  function l(E) {
    const b = r[E.id],
      A = E.uniforms,
      C = E.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let y = 0, p = A.length; y < p; y++) {
      const M = A[y];
      if (Array.isArray(M))
        for (let O = 0, D = M.length; O < D; O++) f(M[O], y, O, C);
      else f(M, y, 0, C);
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(E, b, A, C) {
    if (u(E, b, A, C) === !0) {
      const y = E.__offset,
        p = E.value;
      if (Array.isArray(p)) {
        let M = 0;
        for (let O = 0; O < p.length; O++) {
          const D = p[O],
            N = T(D, !0);
          _(D, E.__data, M), (M += N.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else _(p, E.__data, 0);
      i.bufferSubData(i.UNIFORM_BUFFER, y, E.__data);
    }
  }
  function _(E, b, A) {
    typeof E == "number" || typeof E == "boolean"
      ? (b[A] = E)
      : E.isMatrix3
      ? ((b[A] = E.elements[0]),
        (b[A + 1] = E.elements[1]),
        (b[A + 2] = E.elements[2]),
        (b[A + 3] = 0),
        (b[A + 4] = E.elements[3]),
        (b[A + 5] = E.elements[4]),
        (b[A + 6] = E.elements[5]),
        (b[A + 7] = 0),
        (b[A + 8] = E.elements[6]),
        (b[A + 9] = E.elements[7]),
        (b[A + 10] = E.elements[8]),
        (b[A + 11] = 0))
      : ArrayBuffer.isView(E)
      ? b.set(E.subarray(0, b.length - A), A)
      : E.toArray(b, A);
  }
  function u(E, b, A, C) {
    const y = E.value,
      p = b + "_" + A;
    if (Array.isArray(y)) {
      C[p] === void 0 && (C[p] = []);
      const M = C[p];
      let O = !1;
      for (let D = 0; D < y.length; D++) m(y[D], M, D) === !0 && (O = !0);
      return O;
    }
    return m(y, C, p);
  }
  function m(E, b, A) {
    if (b[A] === void 0)
      return (
        typeof E == "number" || typeof E == "boolean"
          ? (b[A] = E)
          : ArrayBuffer.isView(E)
          ? (b[A] = E.slice())
          : (b[A] = E.clone()),
        !0
      );
    {
      const C = b[A];
      if (typeof E == "number" || typeof E == "boolean") {
        if (C !== E) return (b[A] = E), !0;
      } else {
        if (ArrayBuffer.isView(E)) return !0;
        if (C.equals(E) === !1) return C.copy(E), !0;
      }
    }
    return !1;
  }
  function v(E) {
    const b = E.uniforms;
    let A = 0;
    const C = 16;
    for (let p = 0, M = b.length; p < M; p++) {
      const O = Array.isArray(b[p]) ? b[p] : [b[p]];
      for (let D = 0, N = O.length; D < N; D++) {
        const G = O[D],
          q = Array.isArray(G.value) ? G.value : [G.value],
          P = Array.isArray(b[p]) || Array.isArray(G.value);
        let W = A;
        for (let H = 0, te = q.length; H < te; H++) {
          const k = q[H],
            Q = T(k, P),
            j = A % C,
            Me = j % Q.boundary,
            De = j + Me;
          (A += Me),
            De !== 0 && C - De < Q.storage && (A += C - De),
            H === 0 && (W = A),
            (A += Q.storage);
        }
        const $ =
          G.type === "int"
            ? Int32Array
            : G.type === "uint"
            ? Uint32Array
            : Float32Array;
        (G.__data = new $((A - W) / Float32Array.BYTES_PER_ELEMENT)),
          (G.__offset = W);
      }
    }
    const y = A % C;
    return y > 0 && (A += C - y), (E.__size = A), (E.__cache = {}), this;
  }
  function T(E, b) {
    const A = { boundary: 0, storage: 0 };
    return (
      typeof E == "number" || typeof E == "boolean"
        ? ((A.boundary = 4), (A.storage = 4))
        : E.isVector2
        ? ((A.boundary = 8), (A.storage = 8))
        : E.isVector3 || E.isColor
        ? ((A.boundary = 16), (A.storage = 12))
        : E.isVector4
        ? ((A.boundary = 16), (A.storage = 16))
        : E.isMatrix3
        ? ((A.boundary = 16), (A.storage = 48))
        : E.isMatrix4
        ? ((A.boundary = 16), (A.storage = 64))
        : E.isTexture
        ? Ce(
            "WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : ArrayBuffer.isView(E)
        ? ((A.boundary = 16), (A.storage = E.byteLength))
        : Ce("WebGLRenderer: Unsupported uniform value type.", E),
      b === !0 &&
        ((A.boundary = 16), (A.storage = Math.ceil(A.storage / 16) * 16)),
      A
    );
  }
  function h(E) {
    const b = E.target;
    b.removeEventListener("dispose", h),
      i.deleteBuffer(r[b.id]),
      delete r[b.id],
      delete a[b.id];
  }
  function d() {
    for (const E in r) i.deleteBuffer(r[E]);
    (r = {}), (a = {});
  }
  return { bind: s, update: o, dispose: d };
}
const Bd = new Uint16Array([
  12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545,
  13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829,
  15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880,
  14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410,
  14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958,
  11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039,
  14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743,
  12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751,
  14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764,
  13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387,
  14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782,
  10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831,
  14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886,
  11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600,
  14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104,
  12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205,
  14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603,
  8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451,
  15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932,
  10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461,
  8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631,
  15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883,
  9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279,
  7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229,
  9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697,
  8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337,
  8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119,
  8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448,
  6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340,
  7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933,
  7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007,
  5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302,
  6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679,
  6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359,
  4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188,
  6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377,
  4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354,
  2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981,
  4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808,
  3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322,
  2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681,
  3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1,
  15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133,
  1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996,
  1398, 13702, 1183,
]);
let Vt = null;
function Gd() {
  return (
    Vt === null &&
      ((Vt = new Fs(Bd, 16, 16, 1030, 1016)),
      (Vt.name = "DFG_LUT"),
      (Vt.minFilter = 1006),
      (Vt.magFilter = 1006),
      (Vt.wrapS = 1001),
      (Vt.wrapT = 1001),
      (Vt.generateMipmaps = !1),
      (Vt.needsUpdate = !0)),
    Vt
  );
}
class kd {
  constructor(e = {}) {
    const {
      canvas: t = Za(),
      context: n = null,
      depth: r = !0,
      stencil: a = !1,
      alpha: s = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: f = "default",
      failIfMajorPerformanceCaveat: _ = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: m = 1009,
    } = e;
    this.isWebGLRenderer = !0;
    let v;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      v = n.getContextAttributes().alpha;
    } else v = s;
    const T = m,
      h = new Set([1033, 1031, 1029]),
      d = new Set([1009, 1014, 1012, 1020, 1017, 1018]),
      E = new Uint32Array(4),
      b = new Int32Array(4),
      A = { textures: [], min: [], max: [], resolution: [] };
    let C = null,
      y = null;
    const p = [],
      M = [];
    let O = null;
    (this.domElement = t),
      (this.debug = {
        checkShaderErrors: !0,
        diagnostics: { keywords: !1 },
        onShaderError: null,
      }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1);
    const D = this;
    let N = !1,
      G = null,
      q = null,
      P = null,
      W = null;
    this._outputColorSpace = It;
    let $ = 0,
      H = 0,
      te = null,
      k = -1,
      Q = null;
    const j = new it(),
      Me = new it();
    let De = null;
    const K = new qe(0);
    let pe = 0,
      xe = t.width,
      ye = t.height,
      me = 1,
      Ne = null,
      at = null;
    const be = new it(0, 0, xe, ye),
      Ye = new it(0, 0, xe, ye);
    let $e = !1;
    const Oe = new Ci(),
      _t = new dr();
    let lt = !1,
      yt = !1;
    const tt = new rt(),
      zt = new z(),
      ft = new it(),
      wt = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Pt = !1;
    function Dt() {
      return te === null ? me : 1;
    }
    let L = n;
    function Lt(x, w) {
      return t.getContext(x, w);
    }
    let je,
      et,
      de,
      ct,
      Re,
      we,
      S,
      g,
      F,
      ee,
      J,
      re,
      ce,
      X,
      Y,
      se,
      R,
      Z,
      V,
      oe,
      ie,
      ae,
      Te;
    try {
      const x = {
        alpha: !0,
        depth: r,
        stencil: a,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: f,
        failIfMajorPerformanceCaveat: _,
      };
      if (
        ("setAttribute" in t && t.setAttribute("data-engine", "three.js r187"),
        t.addEventListener("webglcontextlost", Ae, !1),
        t.addEventListener("webglcontextrestored", Ie, !1),
        t.addEventListener("webglcontextcreationerror", fe, !1),
        L === null)
      ) {
        const w = "webgl2";
        if (((L = Lt(w, x)), L === null))
          throw Lt(w)
            ? new Error(
                "THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."
              )
            : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      Fe();
    } catch (x) {
      throw (
        (t.removeEventListener("webglcontextlost", Ae, !1),
        t.removeEventListener("webglcontextrestored", Ie, !1),
        t.removeEventListener("webglcontextcreationerror", fe, !1),
        We("WebGLRenderer: " + x.message),
        x)
      );
    }
    function Fe() {
      (je = new kc(L)),
        je.init(),
        (ie = new Pd(L, je)),
        (et = new Lc(L, je, e, ie)),
        (de = new Cd(L, je)),
        et.reversedDepthBuffer && u && de.buffers.depth.setReversed(!0),
        (q = L.createFramebuffer()),
        (P = L.createFramebuffer()),
        (W = L.createFramebuffer()),
        (ct = new qc(L)),
        (Re = new pd()),
        (we = new wd(L, je, de, Re, et, ie, ct)),
        (S = new Vc(D)),
        (g = new Ys(L)),
        (ae = new Pc(L, g)),
        (F = new Wc(L, g, ct, ae)),
        (ee = new Kc(L, F, g, ae, ct)),
        (Z = new Yc(L, et, we)),
        (Y = new Nc(Re)),
        (J = new hd(D, S, je, et, ae, Y)),
        (re = new Ud(D, Re)),
        (ce = new _d()),
        (X = new Ed(je)),
        (R = new wc(D, S, de, ee, v, c)),
        (se = new bd(D, ee, et)),
        (Te = new Od(L, ct, et, de)),
        (V = new Dc(L, je, ct)),
        (oe = new Xc(L, je, ct)),
        (ct.programs = J.programs),
        (D.capabilities = et),
        (D.extensions = je),
        (D.properties = Re),
        (D.renderLists = ce),
        (D.shadowMap = se),
        (D.state = de),
        (D.info = ct);
    }
    T !== 1009 && (O = new $c(T, t.width, t.height, o, r, a));
    const ne = new Id(D, L);
    (this.xr = ne),
      (this.getContext = function () {
        return L;
      }),
      (this.getContextAttributes = function () {
        return L.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const x = je.get("WEBGL_lose_context");
        x && x.loseContext();
      }),
      (this.forceContextRestore = function () {
        const x = je.get("WEBGL_lose_context");
        x && x.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return me;
      }),
      (this.setPixelRatio = function (x) {
        x !== void 0 && ((me = x), this.setSize(xe, ye, !1));
      }),
      (this.getSize = function (x) {
        return x.set(xe, ye);
      }),
      (this.setSize = function (x, w, B = !0) {
        if (ne.isPresenting) {
          Ce("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        (xe = x),
          (ye = w),
          (t.width = Math.floor(x * me)),
          (t.height = Math.floor(w * me)),
          B === !0 && ((t.style.width = x + "px"), (t.style.height = w + "px")),
          O !== null && O.setSize(t.width, t.height),
          this.setViewport(0, 0, x, w);
      }),
      (this.getDrawingBufferSize = function (x) {
        return x.set(xe * me, ye * me).floor();
      }),
      (this.setDrawingBufferSize = function (x, w, B) {
        (xe = x),
          (ye = w),
          (me = B),
          (t.width = Math.floor(x * B)),
          (t.height = Math.floor(w * B)),
          this.setViewport(0, 0, x, w);
      }),
      (this.setEffects = function (x) {
        if (T === 1009) {
          We(
            "WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType."
          );
          return;
        }
        if (x) {
          for (let w = 0; w < x.length; w++)
            if (x[w].isOutputPass === !0) {
              Ce(
                "WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically."
              );
              break;
            }
        }
        O.setEffects(x || []);
      }),
      (this.getCurrentViewport = function (x) {
        return x.copy(j);
      }),
      (this.getViewport = function (x) {
        return x.copy(be);
      }),
      (this.setViewport = function (x, w, B, I) {
        x.isVector4 ? be.set(x.x, x.y, x.z, x.w) : be.set(x, w, B, I),
          de.viewport(j.copy(be).multiplyScalar(Dt()).round());
      }),
      (this.getScissor = function (x) {
        return x.copy(Ye);
      }),
      (this.setScissor = function (x, w, B, I) {
        x.isVector4 ? Ye.set(x.x, x.y, x.z, x.w) : Ye.set(x, w, B, I),
          de.scissor(Me.copy(Ye).multiplyScalar(Dt()).round());
      }),
      (this.getScissorTest = function () {
        return $e;
      }),
      (this.setScissorTest = function (x) {
        de.setScissorTest(($e = x));
      }),
      (this.setOpaqueSort = function (x) {
        Ne = x;
      }),
      (this.setTransparentSort = function (x) {
        at = x;
      }),
      (this.getClearColor = function (x) {
        return x.copy(R.getClearColor());
      }),
      (this.setClearColor = function () {
        R.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return R.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        R.setClearAlpha(...arguments);
      }),
      (this.clear = function (x = !0, w = !0, B = !0) {
        let I = 0;
        if (x) {
          let U = !1;
          if (te !== null) {
            const ue = te.texture.format;
            U = h.has(ue);
          }
          if (U) {
            const ue = te.texture.type,
              ge = d.has(ue),
              le = R.getClearColor(),
              _e = R.getClearAlpha(),
              Ee = le.r,
              Le = le.g,
              Be = le.b;
            ge
              ? ((E[0] = Ee),
                (E[1] = Le),
                (E[2] = Be),
                (E[3] = _e),
                L.clearBufferuiv(L.COLOR, 0, E))
              : ((b[0] = Ee),
                (b[1] = Le),
                (b[2] = Be),
                (b[3] = _e),
                L.clearBufferiv(L.COLOR, 0, b));
          } else I |= L.COLOR_BUFFER_BIT;
        }
        w && ((I |= L.DEPTH_BUFFER_BIT), this.state.buffers.depth.setMask(!0)),
          B &&
            ((I |= L.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          I !== 0 && L.clear(I);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.setNodesHandler = function (x) {
        x.setRenderer(this), (G = x);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", Ae, !1),
          t.removeEventListener("webglcontextrestored", Ie, !1),
          t.removeEventListener("webglcontextcreationerror", fe, !1),
          R.dispose(),
          ce.dispose(),
          X.dispose(),
          we.dispose(),
          Re.dispose(),
          S.dispose(),
          ee.dispose(),
          F.dispose(),
          ae.dispose(),
          Te.dispose(),
          J.dispose(),
          ne.dispose(),
          ne.removeEventListener("sessionstart", xr),
          ne.removeEventListener("sessionend", vr),
          cn.stop();
      });
    function Ae(x) {
      x.preventDefault(), Pr("WebGLRenderer: Context Lost."), (N = !0);
    }
    function Ie() {
      Pr("WebGLRenderer: Context Restored."), (N = !1);
      const x = ct.autoReset,
        w = se.enabled,
        B = se.autoUpdate,
        I = se.needsUpdate,
        U = se.type;
      Fe(),
        (ct.autoReset = x),
        (se.enabled = w),
        (se.autoUpdate = B),
        (se.needsUpdate = I),
        (se.type = U);
    }
    function fe(x) {
      We(
        "WebGLRenderer: A WebGL context could not be created. Reason: ",
        x.statusMessage
      );
    }
    function Ke(x) {
      const w = x.target;
      w.removeEventListener("dispose", Ke), ht(w);
    }
    function ht(x) {
      en(x), Re.remove(x);
    }
    function en(x) {
      const w = Re.get(x).programs;
      w !== void 0 &&
        (w.forEach(function (B) {
          J.releaseProgram(B);
        }),
        x.isShaderMaterial && J.releaseShaderCache(x));
    }
    this.renderBufferDirect = function (x, w, B, I, U, ue) {
      w === null && (w = wt);
      const ge = U.isMesh && U.matrixWorld.determinantAffine() < 0,
        le = Xa(x, w, B, I, U);
      de.setMaterial(I, ge);
      let _e = B.index,
        Ee = 1;
      if (I.wireframe === !0) {
        if (((_e = F.getWireframeAttribute(B)), _e === void 0)) return;
        Ee = 2;
      }
      const Le = B.drawRange,
        Be = B.attributes.position;
      let ve = Le.start * Ee,
        Ge = (Le.start + Le.count) * Ee;
      ue !== null &&
        ((ve = Math.max(ve, ue.start * Ee)),
        (Ge = Math.min(Ge, (ue.start + ue.count) * Ee))),
        _e !== null
          ? ((ve = Math.max(ve, 0)), (Ge = Math.min(Ge, _e.count)))
          : Be != null &&
            ((ve = Math.max(ve, 0)), (Ge = Math.min(Ge, Be.count)));
      const st = Ge - ve;
      if (st < 0 || st === 1 / 0) return;
      ae.setup(U, I, le, B, _e);
      let Qe,
        Je = V;
      if (
        (_e !== null && ((Qe = g.get(_e)), (Je = oe), Je.setIndex(Qe)),
        U.isMesh)
      )
        I.wireframe === !0
          ? (de.setLineWidth(I.wireframeLinewidth * Dt()), Je.setMode(L.LINES))
          : Je.setMode(L.TRIANGLES);
      else if (U.isLine) {
        let xt = I.linewidth;
        xt === void 0 && (xt = 1),
          de.setLineWidth(xt * Dt()),
          U.isLineSegments
            ? Je.setMode(L.LINES)
            : U.isLineLoop
            ? Je.setMode(L.LINE_LOOP)
            : Je.setMode(L.LINE_STRIP);
      } else
        U.isPoints
          ? Je.setMode(L.POINTS)
          : U.isSprite && Je.setMode(L.TRIANGLES);
      if (U.isBatchedMesh)
        if (je.get("WEBGL_multi_draw"))
          Je.renderMultiDraw(
            U._multiDrawStarts,
            U._multiDrawCounts,
            U._multiDrawCount
          );
        else {
          const xt = U._multiDrawStarts,
            Se = U._multiDrawCounts,
            Et = U._multiDrawCount,
            ke = _e ? g.get(_e).bytesPerElement : 1,
            un = Re.get(I).currentProgram.getUniforms();
          for (let vt = 0; vt < Et; vt++)
            un.setValue(L, "_gl_DrawID", vt), Je.render(xt[vt] / ke, Se[vt]);
        }
      else if (U.isInstancedMesh) Je.renderInstances(ve, st, U.count);
      else if (B.isInstancedBufferGeometry) {
        const xt = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0,
          Se = Math.min(B.instanceCount, xt);
        Je.renderInstances(ve, st, Se);
      } else Je.render(ve, st);
    };
    function gr(x, w, B, I) {
      G !== null && x.isNodeMaterial && G.setObject(I, x),
        lt === !0 && Y.setState(x, B, !1),
        x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1
          ? ((x.side = 1),
            (x.needsUpdate = !0),
            zn(x, w, I),
            (x.side = 0),
            (x.needsUpdate = !0),
            zn(x, w, I),
            (x.side = 2))
          : zn(x, w, I);
    }
    (this.compile = function (x, w, B = null) {
      B === null && (B = x),
        G !== null && G.renderStart(x, w, B),
        (y = X.get(B)),
        y.init(w),
        M.push(y),
        B.traverseVisible(function (U) {
          U.isLight &&
            U.layers.test(w.layers) &&
            (y.pushLight(U), U.castShadow && y.pushShadow(U));
        }),
        x !== B &&
          x.traverseVisible(function (U) {
            U.isLight &&
              U.layers.test(w.layers) &&
              (y.pushLight(U), U.castShadow && y.pushShadow(U));
          }),
        y.setupLights(),
        G !== null && G.updateLights(y.state.lightsArray),
        (yt = this.localClippingEnabled),
        (lt = Y.init(this.clippingPlanes, yt)),
        lt === !0 && Y.setGlobalState(this.clippingPlanes, w),
        G !== null && se.render(y.state.shadowsArray, B, w);
      const I = new Set();
      return (
        x.traverse(function (U) {
          if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
          const ue = U.material;
          if (ue)
            if (Array.isArray(ue))
              for (let ge = 0; ge < ue.length; ge++) {
                const le = ue[ge];
                gr(le, B, w, U), I.add(le);
              }
            else gr(ue, B, w, U), I.add(ue);
        }),
        (y = M.pop()),
        G !== null && G.renderEnd(),
        I
      );
    }),
      (this.compileAsync = function (x, w, B = null) {
        const I = this.compile(x, w, B);
        return new Promise((U) => {
          function ue() {
            if (
              (I.forEach(function (ge) {
                const _e = Re.get(ge).currentProgram;
                (_e === void 0 || _e.isReady()) && I.delete(ge);
              }),
              I.size === 0)
            ) {
              U(x);
              return;
            }
            setTimeout(ue, 10);
          }
          je.get("KHR_parallel_shader_compile") !== null
            ? ue()
            : setTimeout(ue, 10);
        });
      });
    let Fi = null;
    function ka(x) {
      Fi && Fi(x);
    }
    function xr() {
      cn.stop();
    }
    function vr() {
      cn.start();
    }
    const cn = new La();
    cn.setAnimationLoop(ka),
      typeof self < "u" && cn.setContext(self),
      (this.setAnimationLoop = function (x) {
        (Fi = x), ne.setAnimationLoop(x), x === null ? cn.stop() : cn.start();
      }),
      ne.addEventListener("sessionstart", xr),
      ne.addEventListener("sessionend", vr),
      (this.render = function (x, w) {
        if (w !== void 0 && w.isCamera !== !0) {
          We(
            "WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (N === !0) return;
        G !== null && G.renderStart(x, w);
        const B = ne.enabled === !0 && ne.isPresenting === !0,
          I = O !== null && (te === null || B) && O.begin(D, te);
        if (
          (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(),
          w.parent === null &&
            w.matrixWorldAutoUpdate === !0 &&
            w.updateMatrixWorld(),
          ne.enabled === !0 &&
            ne.isPresenting === !0 &&
            (O === null || O.isCompositing() === !1) &&
            (ne.cameraAutoUpdate === !0 && ne.updateCamera(w),
            (w = ne.getCamera())),
          x.isScene === !0 && x.onBeforeRender(D, x, w, te),
          (y = X.get(x, M.length)),
          y.init(w),
          (y.state.textureUnits = we.getTextureUnits()),
          M.push(y),
          tt.multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse),
          w.isArrayCamera
            ? _t.setFromArrayCamera(w)
            : Oe.setFromProjectionMatrix(tt, 2e3, w.reversedDepth),
          (yt = this.localClippingEnabled),
          (lt = Y.init(this.clippingPlanes, yt)),
          (C = ce.get(x, p.length)),
          C.init(),
          p.push(C),
          this.info.render.frame++,
          ne.enabled === !0 && ne.isPresenting === !0)
        ) {
          const ge = D.xr.getDepthSensingMesh();
          ge !== null && Ui(ge, w, -1 / 0, D.sortObjects);
        }
        Ui(x, w, 0, D.sortObjects),
          C.finish(),
          G !== null && G.updateLights(y.state.lightsArray),
          D.sortObjects === !0 && C.sort(Ne, at),
          (Pt =
            ne.enabled === !1 ||
            ne.isPresenting === !1 ||
            ne.hasDepthSensing() === !1),
          Pt && R.addToRenderList(C, x),
          this.info.autoReset === !0 && this.info.reset(),
          lt === !0 && Y.beginShadows();
        const U = y.state.shadowsArray;
        if (
          (se.render(U, x, w),
          lt === !0 && Y.endShadows(),
          (I && O.hasRenderPass()) === !1)
        ) {
          const ge = C.opaque,
            le = C.transmissive;
          if ((y.setupLights(), w.isArrayCamera)) {
            const _e = w.cameras;
            if (le.length > 0)
              for (let Ee = 0, Le = _e.length; Ee < Le; Ee++) {
                const Be = _e[Ee];
                Mr(ge, le, x, Be);
              }
            Pt && R.render(x);
            for (let Ee = 0, Le = _e.length; Ee < Le; Ee++) {
              const Be = _e[Ee];
              Sr(C, x, Be, Be.viewport);
            }
          } else
            le.length > 0 && Mr(ge, le, x, w), Pt && R.render(x), Sr(C, x, w);
        }
        te !== null &&
          H === 0 &&
          (we.updateMultisampleRenderTarget(te),
          we.updateRenderTargetMipmap(te)),
          I && O.end(D),
          x.isScene === !0 && x.onAfterRender(D, x, w),
          ae.resetDefaultState(),
          (k = -1),
          (Q = null),
          M.pop(),
          M.length > 0
            ? ((y = M[M.length - 1]),
              we.setTextureUnits(y.state.textureUnits),
              lt === !0 && Y.setGlobalState(D.clippingPlanes, y.state.camera))
            : (y = null),
          p.pop(),
          p.length > 0 ? (C = p[p.length - 1]) : (C = null),
          G !== null && G.renderEnd();
      });
    function Ui(x, w, B, I) {
      if (x.visible === !1) return;
      if (x.layers.test(w.layers)) {
        if (x.isGroup) B = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === !0 && x.update(w);
        else if (x.isLight) y.pushLight(x), x.castShadow && y.pushShadow(x);
        else if (x.isSprite) {
          const ge = w.isArrayCamera ? _t : Oe;
          if (!x.frustumCulled || x.intersectsFrustum(ge)) {
            I && ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(tt);
            const le = ee.update(x),
              _e = x.material;
            _e.visible && C.push(x, le, _e, B, ft.z, null, w);
          }
        } else if (x.isMesh || x.isLine || x.isPoints) {
          const ge = w.isArrayCamera ? _t : Oe;
          if (!x.frustumCulled || x.intersectsFrustum(ge)) {
            const le = ee.update(x),
              _e = x.material;
            if (
              (I &&
                (x.boundingSphere !== void 0
                  ? (x.boundingSphere === null && x.computeBoundingSphere(),
                    ft.copy(x.boundingSphere.center))
                  : (le.boundingSphere === null && le.computeBoundingSphere(),
                    ft.copy(le.boundingSphere.center)),
                ft.applyMatrix4(x.matrixWorld).applyMatrix4(tt)),
              Array.isArray(_e))
            ) {
              const Ee = le.groups;
              for (let Le = 0, Be = Ee.length; Le < Be; Le++) {
                const ve = Ee[Le],
                  Ge = _e[ve.materialIndex];
                Ge && Ge.visible && C.push(x, le, Ge, B, ft.z, ve, w);
              }
            } else _e.visible && C.push(x, le, _e, B, ft.z, null, w);
          }
        }
      }
      const ue = x.children;
      for (let ge = 0, le = ue.length; ge < le; ge++) Ui(ue[ge], w, B, I);
    }
    function Sr(x, w, B, I) {
      const { opaque: U, transmissive: ue, transparent: ge } = x;
      y.setupLightsView(B),
        lt === !0 && Y.setGlobalState(D.clippingPlanes, B),
        I && de.viewport(j.copy(I)),
        U.length > 0 && jn(U, w, B),
        ue.length > 0 && jn(ue, w, B),
        ge.length > 0 && jn(ge, w, B),
        de.buffers.depth.setTest(!0),
        de.buffers.depth.setMask(!0),
        de.buffers.color.setMask(!0),
        de.setPolygonOffset(!1);
    }
    function Mr(x, w, B, I) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return;
      if (y.state.transmissionRenderTarget[I.id] === void 0) {
        const ve =
          je.has("EXT_color_buffer_half_float") ||
          je.has("EXT_color_buffer_float");
        y.state.transmissionRenderTarget[I.id] = new Xt(1, 1, {
          generateMipmaps: !0,
          type: ve ? 1016 : 1009,
          minFilter: 1008,
          samples: Math.max(4, et.samples),
          stencilBuffer: a,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: He.workingColorSpace,
        });
      }
      const ue = y.state.transmissionRenderTarget[I.id],
        ge = I.viewport || j;
      ue.setSize(
        ge.z * D.transmissionResolutionScale,
        ge.w * D.transmissionResolutionScale
      );
      const le = D.getRenderTarget(),
        _e = D.getActiveCubeFace(),
        Ee = D.getActiveMipmapLevel();
      D.setRenderTarget(ue),
        D.getClearColor(K),
        (pe = D.getClearAlpha()),
        pe < 1 && D.setClearColor(16777215, 0.5),
        D.clear(),
        Pt && R.render(B);
      const Le = D.toneMapping;
      D.toneMapping = 0;
      const Be = I.viewport;
      if (
        (I.viewport !== void 0 && (I.viewport = void 0),
        y.setupLightsView(I),
        lt === !0 && Y.setGlobalState(D.clippingPlanes, I),
        jn(x, B, I),
        we.updateMultisampleRenderTarget(ue),
        we.updateRenderTargetMipmap(ue),
        je.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let ve = !1;
        for (let Ge = 0, st = w.length; Ge < st; Ge++) {
          const Qe = w[Ge],
            { object: Je, geometry: xt, material: Se, group: Et } = Qe;
          if (Se.side === 2 && Je.layers.test(I.layers)) {
            const ke = Se.side;
            (Se.side = 1),
              (Se.needsUpdate = !0),
              Er(Je, B, I, xt, Se, Et),
              (Se.side = ke),
              (Se.needsUpdate = !0),
              (ve = !0);
          }
        }
        ve === !0 &&
          (we.updateMultisampleRenderTarget(ue),
          we.updateRenderTargetMipmap(ue));
      }
      D.setRenderTarget(le, _e, Ee),
        D.setClearColor(K, pe),
        Be !== void 0 && (I.viewport = Be),
        (D.toneMapping = Le);
    }
    function jn(x, w, B) {
      const I = w.isScene === !0 ? w.overrideMaterial : null;
      for (let U = 0, ue = x.length; U < ue; U++) {
        const ge = x[U],
          { object: le, geometry: _e, group: Ee } = ge;
        let Le = ge.material;
        Le.allowOverride === !0 && I !== null && (Le = I),
          le.layers.test(B.layers) && Er(le, w, B, _e, Le, Ee);
      }
    }
    function Er(x, w, B, I, U, ue) {
      G !== null && U.isNodeMaterial && G.setObject(x, U),
        x.onBeforeRender(D, w, B, I, U, ue),
        x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, x.matrixWorld),
        x.normalMatrix.getNormalMatrix(x.modelViewMatrix),
        U.onBeforeRender(D, w, B, I, x, ue),
        U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1
          ? ((U.side = 1),
            (U.needsUpdate = !0),
            D.renderBufferDirect(B, w, I, U, x, ue),
            (U.side = 0),
            (U.needsUpdate = !0),
            D.renderBufferDirect(B, w, I, U, x, ue),
            (U.side = 2))
          : D.renderBufferDirect(B, w, I, U, x, ue),
        x.onAfterRender(D, w, B, I, U, ue);
    }
    function Tr(x) {
      let w = 0;
      for (const B of x) B.texture !== null && w++;
      return w;
    }
    function zn(x, w, B) {
      w.isScene !== !0 && (w = wt);
      const I = Re.get(x),
        U = y.state.lights,
        ue = y.state.shadowsArray,
        ge = U.state.version,
        le = J.getParameters(x, U.state, ue, w, B, y.state.lightProbeGridArray),
        _e = J.getProgramCacheKey(le);
      let Ee = I.programs;
      (I.environment =
        x.isMeshStandardMaterial ||
        x.isMeshLambertMaterial ||
        x.isMeshPhongMaterial
          ? w.environment
          : null),
        (I.fog = w.fog);
      const Le =
        x.isMeshStandardMaterial ||
        (x.isMeshLambertMaterial && !x.envMap) ||
        (x.isMeshPhongMaterial && !x.envMap);
      (I.envMap = S.get(x.envMap || I.environment, Le)),
        (I.envMapRotation =
          I.environment !== null && x.envMap === null
            ? w.environmentRotation
            : x.envMapRotation),
        Ee === void 0 &&
          (x.addEventListener("dispose", Ke),
          (Ee = new Map()),
          (I.programs = Ee),
          (I.programVariants = new Map()));
      let Be = Ee.get(_e);
      if (Be !== void 0) {
        if (I.currentProgram === Be && I.lightsStateVersion === ge)
          return yr(x, le), Be;
      } else
        (le.uniforms = J.getUniforms(x)),
          G !== null && x.isNodeMaterial && G.build(x, B, le),
          x.onBeforeCompile(le, D),
          (Be = J.acquireProgram(le, _e)),
          Ee.set(_e, Be),
          (I.uniforms = le.uniforms);
      const ve = I.uniforms;
      return (
        ((!x.isShaderMaterial && !x.isRawShaderMaterial) ||
          x.clipping === !0) &&
          (ve.clippingPlanes = Y.uniform),
        yr(x, le),
        (I.needsLights = Ya(x)),
        (I.lightsStateVersion = ge),
        I.needsLights &&
          ((ve.ambientLightColor.value = U.state.ambient),
          (ve.lightProbe.value = U.state.probe),
          (ve.sunLights.value = U.state.sun),
          (ve.sunLightShadows.value = U.state.sunShadow),
          (ve.directionalLights.value = U.state.directional),
          (ve.directionalLightShadows.value = U.state.directionalShadow),
          (ve.spotLights.value = U.state.spot),
          (ve.spotLightShadows.value = U.state.spotShadow),
          (ve.rectAreaLights.value = U.state.rectArea),
          (ve.ltc_1.value = U.state.rectAreaLTC1),
          (ve.ltc_2.value = U.state.rectAreaLTC2),
          (ve.pointLights.value = U.state.point),
          (ve.pointLightShadows.value = U.state.pointShadow),
          (ve.hemisphereLights.value = U.state.hemi),
          (ve.sunShadowMatrix.value = U.state.sunShadowMatrix),
          (ve.sunShadowCascade.value = U.state.sunShadowCascade),
          (ve.directionalShadowMatrix.value = U.state.directionalShadowMatrix),
          (ve.spotLightMatrix.value = U.state.spotLightMatrix),
          (ve.spotLightMap.value = U.state.spotLightMap),
          (ve.pointShadowMatrix.value = U.state.pointShadowMatrix)),
        (I.numLightProbeGrids = Tr(y.state.lightProbeGridArray)),
        (I.currentProgram = Be),
        (I.uniformsList = null),
        Be
      );
    }
    function Wa(x, w, B, I, U) {
      const ue = Re.get(x),
        ge = ue.currentProgram.id + "," + I + "," + U;
      let le = ue.programVariants.get(ge);
      return (
        le === void 0
          ? ((le = zn(x, w, B)), ue.programVariants.set(ge, le))
          : ((ue.currentProgram = le),
            (ue.uniformsList = null),
            (ue.outputColorSpace = I),
            (ue.toneMapping = U)),
        le
      );
    }
    function Ar(x) {
      if (x.uniformsList === null) {
        const w = x.currentProgram.getUniforms();
        x.uniformsList = Ai.seqWithValue(w.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function yr(x, w) {
      const B = Re.get(x);
      (B.outputColorSpace = w.outputColorSpace),
        (B.batching = w.batching),
        (B.batchingColor = w.batchingColor),
        (B.instancing = w.instancing),
        (B.instancingColor = w.instancingColor),
        (B.instancingMorph = w.instancingMorph),
        (B.skinning = w.skinning),
        (B.morphTargets = w.morphTargets),
        (B.morphNormals = w.morphNormals),
        (B.morphColors = w.morphColors),
        (B.morphTargetsCount = w.morphTargetsCount),
        (B.numClippingPlanes = w.numClippingPlanes),
        (B.numIntersection = w.numClipIntersection),
        (B.vertexAlphas = w.vertexAlphas),
        (B.vertexTangents = w.vertexTangents),
        (B.toneMapping = w.toneMapping);
    }
    function Xa(x, w, B, I, U) {
      w.isScene !== !0 && (w = wt), we.resetTextureUnits();
      const ue = w.fog,
        ge =
          I.isMeshStandardMaterial ||
          I.isMeshLambertMaterial ||
          I.isMeshPhongMaterial
            ? w.environment
            : null,
        le =
          te === null
            ? D.outputColorSpace
            : te.isXRRenderTarget === !0
            ? te.texture.colorSpace
            : He.workingColorSpace,
        _e =
          I.isMeshStandardMaterial ||
          (I.isMeshLambertMaterial && !I.envMap) ||
          (I.isMeshPhongMaterial && !I.envMap),
        Ee = S.get(I.envMap || ge, _e),
        Le =
          I.vertexColors === !0 &&
          !!B.attributes.color &&
          B.attributes.color.itemSize === 4,
        Be = !!B.attributes.tangent && (!!I.normalMap || I.anisotropy > 0),
        ve = !!B.morphAttributes.position,
        Ge = !!B.morphAttributes.normal,
        st = !!B.morphAttributes.color;
      let Qe = 0;
      I.toneMapped &&
        (te === null || te.isXRRenderTarget === !0) &&
        (Qe = D.toneMapping);
      const Je =
          B.morphAttributes.position ||
          B.morphAttributes.normal ||
          B.morphAttributes.color,
        xt = Je !== void 0 ? Je.length : 0,
        Se = Re.get(I),
        Et = y.state.lights;
      if (lt === !0 && (yt === !0 || x !== Q)) {
        const nt = x === Q && I.id === k;
        Y.setState(I, x, nt);
      }
      let ke = !1,
        un = !1;
      I.version === Se.__version
        ? (Se.needsLights && Se.lightsStateVersion !== Et.state.version) ||
          (U.isBatchedMesh && Se.batching === !1) ||
          (!U.isBatchedMesh && Se.batching === !0) ||
          (U.isBatchedMesh &&
            Se.batchingColor === !0 &&
            U._colorsTexture === null) ||
          (U.isBatchedMesh &&
            Se.batchingColor === !1 &&
            U._colorsTexture !== null) ||
          (U.isInstancedMesh && Se.instancing === !1) ||
          (!U.isInstancedMesh && Se.instancing === !0) ||
          (U.isSkinnedMesh && Se.skinning === !1) ||
          (!U.isSkinnedMesh && Se.skinning === !0) ||
          (U.isInstancedMesh &&
            Se.instancingColor === !0 &&
            U.instanceColor === null) ||
          (U.isInstancedMesh &&
            Se.instancingColor === !1 &&
            U.instanceColor !== null) ||
          (U.isInstancedMesh &&
            Se.instancingMorph === !0 &&
            U.morphTexture === null) ||
          (U.isInstancedMesh &&
            Se.instancingMorph === !1 &&
            U.morphTexture !== null) ||
          Se.envMap !== Ee ||
          (I.fog === !0 && Se.fog !== ue) ||
          (Se.numClippingPlanes !== void 0 &&
            (Se.numClippingPlanes !== Y.numPlanes ||
              Se.numIntersection !== Y.numIntersection)) ||
          Se.vertexAlphas !== Le ||
          Se.vertexTangents !== Be ||
          Se.morphTargets !== ve ||
          Se.morphNormals !== Ge ||
          Se.morphColors !== st ||
          Se.morphTargetsCount !== xt ||
          Se.numLightProbeGrids !== Tr(y.state.lightProbeGridArray)
          ? (ke = !0)
          : (Se.outputColorSpace !== le || Se.toneMapping !== Qe) && (un = !0)
        : ((ke = !0), (Se.__version = I.version));
      let vt = Se.currentProgram;
      (ke === !0 || un === !0) &&
        ((vt = un === !0 ? Wa(I, w, U, le, Qe) : zn(I, w, U)),
        G && I.isNodeMaterial && G.onUpdateProgram(I, vt, Se));
      let ei = !1,
        tn = !1,
        dn = !1;
      const Ve = vt.getUniforms(),
        gt = Se.uniforms;
      if (
        (de.useProgram(vt.program) && ((ei = !0), (tn = !0), (dn = !0)),
        I.id !== k && ((k = I.id), (tn = !0)),
        ei || Q !== x)
      ) {
        de.buffers.depth.getReversed() &&
          x.reversedDepth !== !0 &&
          ((x._reversedDepth = !0), x.updateProjectionMatrix()),
          Ve.setValue(L, "projectionMatrix", x.projectionMatrix),
          Ve.setValue(L, "viewMatrix", x.matrixWorldInverse);
        const pt = Ve.map.cameraPosition;
        pt !== void 0 &&
          pt.setValue(L, zt.setFromMatrixPosition(x.matrixWorld)),
          et.logarithmicDepthBuffer &&
            Ve.setValue(
              L,
              "logDepthBufFC",
              2 / (Math.log(x.far + 1) / Math.LN2)
            ),
          (I.isMeshPhongMaterial ||
            I.isMeshToonMaterial ||
            I.isMeshLambertMaterial ||
            I.isMeshBasicMaterial ||
            I.isMeshStandardMaterial ||
            I.isShaderMaterial) &&
            Ve.setValue(L, "isOrthographic", x.isOrthographicCamera === !0),
          Q !== x && ((Q = x), (tn = !0), (dn = !0));
      }
      if (
        (Se.needsLights &&
          (Et.state.sunShadowMap.length > 0 &&
            Ve.setValue(L, "sunShadowMap", Et.state.sunShadowMap, we),
          Et.state.directionalShadowMap.length > 0 &&
            Ve.setValue(
              L,
              "directionalShadowMap",
              Et.state.directionalShadowMap,
              we
            ),
          Et.state.spotShadowMap.length > 0 &&
            Ve.setValue(L, "spotShadowMap", Et.state.spotShadowMap, we),
          Et.state.pointShadowMap.length > 0 &&
            Ve.setValue(L, "pointShadowMap", Et.state.pointShadowMap, we)),
        U.isSkinnedMesh)
      ) {
        Ve.setOptional(L, U, "bindMatrix"),
          Ve.setOptional(L, U, "bindMatrixInverse");
        const nt = U.skeleton;
        nt &&
          (nt.boneTexture === null && nt.computeBoneTexture(),
          Ve.setValue(L, "boneTexture", nt.boneTexture, we));
      }
      U.isBatchedMesh &&
        (Ve.setOptional(L, U, "batchingTexture"),
        Ve.setValue(L, "batchingTexture", U._matricesTexture, we),
        Ve.setOptional(L, U, "batchingIdTexture"),
        Ve.setValue(L, "batchingIdTexture", U._indirectTexture, we),
        Ve.setOptional(L, U, "batchingColorTexture"),
        U._colorsTexture !== null &&
          Ve.setValue(L, "batchingColorTexture", U._colorsTexture, we));
      const Ft = B.morphAttributes;
      if (
        ((Ft.position !== void 0 ||
          Ft.normal !== void 0 ||
          Ft.color !== void 0) &&
          Z.update(U, B, vt),
        (tn || Se.receiveShadow !== U.receiveShadow) &&
          ((Se.receiveShadow = U.receiveShadow),
          Ve.setValue(L, "receiveShadow", U.receiveShadow)),
        (I.isMeshStandardMaterial ||
          I.isMeshLambertMaterial ||
          I.isMeshPhongMaterial) &&
          I.envMap === null &&
          w.environment !== null &&
          (gt.envMapIntensity.value = w.environmentIntensity),
        gt.dfgLUT !== void 0 && (gt.dfgLUT.value = Gd()),
        tn)
      ) {
        if (
          (Ve.setValue(L, "toneMappingExposure", D.toneMappingExposure),
          Se.needsLights && qa(gt, dn),
          ue && I.fog === !0 && re.refreshFogUniforms(gt, ue),
          re.refreshMaterialUniforms(
            gt,
            I,
            me,
            ye,
            y.state.transmissionRenderTarget[x.id]
          ),
          Se.needsLights && Se.numLightProbeGrids > 0)
        ) {
          const nt = A;
          let pt = 0;
          for (const qt of y.state.lightProbeGridArray)
            qt.texture !== null &&
              ((nt.textures[pt] = qt.texture),
              (nt.min[pt] = qt.boundingBox.min),
              (nt.max[pt] = qt.boundingBox.max),
              (nt.resolution[pt] = qt.resolution),
              pt++);
          for (const qt in nt) nt[qt].length = pt;
          (gt.probesSH.value = nt.textures),
            (gt.probesMin.value = nt.min),
            (gt.probesMax.value = nt.max),
            (gt.probesResolution.value = nt.resolution);
        }
        Ai.upload(L, Ar(Se), gt, we);
      }
      if (
        (I.isShaderMaterial &&
          I.uniformsNeedUpdate === !0 &&
          (Ai.upload(L, Ar(Se), gt, we), (I.uniformsNeedUpdate = !1)),
        I.isSpriteMaterial && Ve.setValue(L, "center", U.center),
        Ve.setValue(L, "modelViewMatrix", U.modelViewMatrix),
        Ve.setValue(L, "normalMatrix", U.normalMatrix),
        Ve.setValue(L, "modelMatrix", U.matrixWorld),
        I.uniformsGroups !== void 0)
      ) {
        const nt = I.uniformsGroups;
        for (let pt = 0, qt = nt.length; pt < qt; pt++) {
          const br = nt[pt];
          Te.update(br, vt), Te.bind(br, vt);
        }
      }
      return vt;
    }
    function qa(x, w) {
      (x.ambientLightColor.needsUpdate = w),
        (x.lightProbe.needsUpdate = w),
        (x.sunLights.needsUpdate = w),
        (x.sunLightShadows.needsUpdate = w),
        (x.directionalLights.needsUpdate = w),
        (x.directionalLightShadows.needsUpdate = w),
        (x.pointLights.needsUpdate = w),
        (x.pointLightShadows.needsUpdate = w),
        (x.spotLights.needsUpdate = w),
        (x.spotLightShadows.needsUpdate = w),
        (x.rectAreaLights.needsUpdate = w),
        (x.hemisphereLights.needsUpdate = w);
    }
    function Ya(x) {
      return (
        x.isMeshLambertMaterial ||
        x.isMeshToonMaterial ||
        x.isMeshPhongMaterial ||
        x.isMeshStandardMaterial ||
        x.isShadowMaterial ||
        (x.isShaderMaterial && x.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return $;
    }),
      (this.getActiveMipmapLevel = function () {
        return H;
      }),
      (this.getRenderTarget = function () {
        return te;
      }),
      (this.setRenderTargetTextures = function (x, w, B) {
        const I = Re.get(x);
        (I.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1),
          I.__autoAllocateDepthBuffer === !1 && (I.__useRenderToTexture = !1),
          (Re.get(x.texture).__webglTexture = w),
          (Re.get(x.depthTexture).__webglTexture = I.__autoAllocateDepthBuffer
            ? void 0
            : B),
          (I.__hasExternalTextures = !0);
      }),
      (this.setRenderTargetFramebuffer = function (x, w) {
        const B = Re.get(x);
        (B.__webglFramebuffer = w), (B.__useDefaultFramebuffer = w === void 0);
      }),
      (this.setRenderTarget = function (x, w = 0, B = 0) {
        (te = x), ($ = w), (H = B);
        let I = null,
          U = !1,
          ue = !1;
        if (x) {
          const le = Re.get(x);
          if (le.__useDefaultFramebuffer !== void 0) {
            de.bindFramebuffer(L.FRAMEBUFFER, le.__webglFramebuffer),
              j.copy(x.viewport),
              Me.copy(x.scissor),
              (De = x.scissorTest),
              de.viewport(j),
              de.scissor(Me),
              de.setScissorTest(De),
              (k = -1);
            return;
          } else if (le.__webglFramebuffer === void 0) we.setupRenderTarget(x);
          else if (le.__hasExternalTextures)
            we.rebindTextures(
              x,
              Re.get(x.texture).__webglTexture,
              Re.get(x.depthTexture).__webglTexture
            );
          else if (x.depthBuffer) {
            const Le = x.depthTexture;
            if (le.__boundDepthTexture !== Le) {
              if (
                Le !== null &&
                Re.has(Le) &&
                (x.width !== Le.image.width || x.height !== Le.image.height)
              )
                throw new Error(
                  "THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size."
                );
              we.setupDepthRenderbuffer(x);
            }
          }
          const _e = x.texture;
          (_e.isData3DTexture ||
            _e.isDataArrayTexture ||
            _e.isCompressedArrayTexture) &&
            (ue = !0);
          const Ee = Re.get(x).__webglFramebuffer;
          x.isWebGLCubeRenderTarget
            ? (Array.isArray(Ee[w]) ? (I = Ee[w][B]) : (I = Ee[w]), (U = !0))
            : x.samples > 0 && we.useMultisampledRTT(x) === !1
            ? (I = Re.get(x).__webglMultisampledFramebuffer)
            : Array.isArray(Ee)
            ? (I = Ee[B])
            : (I = Ee),
            j.copy(x.viewport),
            Me.copy(x.scissor),
            (De = x.scissorTest);
        } else
          j.copy(be).multiplyScalar(me).floor(),
            Me.copy(Ye).multiplyScalar(me).floor(),
            (De = $e);
        if (
          (B !== 0 && (I = q),
          de.bindFramebuffer(L.FRAMEBUFFER, I) && de.drawBuffers(x, I),
          de.viewport(j),
          de.scissor(Me),
          de.setScissorTest(De),
          U)
        ) {
          const le = Re.get(x.texture);
          L.framebufferTexture2D(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            L.TEXTURE_CUBE_MAP_POSITIVE_X + w,
            le.__webglTexture,
            B
          );
        } else if (ue) {
          const le = w;
          for (let _e = 0; _e < x.textures.length; _e++) {
            const Ee = Re.get(x.textures[_e]);
            L.framebufferTextureLayer(
              L.FRAMEBUFFER,
              L.COLOR_ATTACHMENT0 + _e,
              Ee.__webglTexture,
              B,
              le
            );
          }
        } else if (x !== null && B !== 0) {
          const le = Re.get(x.texture);
          L.framebufferTexture2D(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            L.TEXTURE_2D,
            le.__webglTexture,
            B
          );
        }
        k = -1;
      });
    function Rr(x) {
      const w = Re.get(x);
      return (
        (w.__readFormat !== x.format || w.__readType !== x.type) &&
          ((w.__readFormat = x.format),
          (w.__readType = x.type),
          (w.__formatReadable = et.textureFormatReadable(x.format)),
          (w.__typeReadable = et.textureTypeReadable(x.type))),
        w
      );
    }
    (this.readRenderTargetPixels = function (x, w, B, I, U, ue, ge, le = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        We(
          "WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let _e = Re.get(x).__webglFramebuffer;
      if (
        (x.isWebGLCubeRenderTarget &&
          ge !== void 0 &&
          ((_e = _e[ge]), Array.isArray(_e) && (_e = _e[0])),
        _e)
      ) {
        de.bindFramebuffer(L.FRAMEBUFFER, _e);
        try {
          const Ee = x.textures[le],
            Le = Ee.format,
            Be = Ee.type;
          x.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + le);
          const ve = Rr(Ee);
          if (ve.__formatReadable === !1) {
            We(
              "WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          if (ve.__typeReadable === !1) {
            We(
              "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          w >= 0 &&
            w <= x.width - I &&
            B >= 0 &&
            B <= x.height - U &&
            L.readPixels(w, B, I, U, ie.convert(Le), ie.convert(Be), ue);
        } finally {
          const Ee = te !== null ? Re.get(te).__webglFramebuffer : null;
          de.bindFramebuffer(L.FRAMEBUFFER, Ee);
        }
      }
    }),
      (this.readRenderTargetPixelsAsync = async function (
        x,
        w,
        B,
        I,
        U,
        ue,
        ge,
        le = 0
      ) {
        if (!(x && x.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let _e = Re.get(x).__webglFramebuffer;
        if (
          (x.isWebGLCubeRenderTarget &&
            ge !== void 0 &&
            ((_e = _e[ge]), Array.isArray(_e) && (_e = _e[0])),
          _e)
        )
          if (w >= 0 && w <= x.width - I && B >= 0 && B <= x.height - U) {
            de.bindFramebuffer(L.FRAMEBUFFER, _e);
            const Ee = x.textures[le],
              Le = Ee.format,
              Be = Ee.type;
            x.textures.length > 1 && L.readBuffer(L.COLOR_ATTACHMENT0 + le);
            const ve = Rr(Ee);
            if (ve.__formatReadable === !1)
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
              );
            if (ve.__typeReadable === !1)
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
              );
            const Ge = L.createBuffer();
            L.bindBuffer(L.PIXEL_PACK_BUFFER, Ge),
              L.bufferData(L.PIXEL_PACK_BUFFER, ue.byteLength, L.STREAM_READ),
              L.readPixels(w, B, I, U, ie.convert(Le), ie.convert(Be), 0),
              L.bindBuffer(L.PIXEL_PACK_BUFFER, null);
            const st = te !== null ? Re.get(te).__webglFramebuffer : null;
            de.bindFramebuffer(L.FRAMEBUFFER, st);
            const Qe = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              L.flush(),
              await $a(L, Qe, 4),
              L.bindBuffer(L.PIXEL_PACK_BUFFER, Ge),
              L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, ue),
              L.bindBuffer(L.PIXEL_PACK_BUFFER, null),
              L.deleteBuffer(Ge),
              L.deleteSync(Qe),
              ue
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
            );
      }),
      (this.copyFramebufferToTexture = function (x, w = null, B = 0) {
        const I = Math.pow(2, -B),
          U = Math.floor(x.image.width * I),
          ue = Math.floor(x.image.height * I),
          ge = w !== null ? w.x : 0,
          le = w !== null ? w.y : 0;
        we.setTexture2D(x, 0),
          L.copyTexSubImage2D(L.TEXTURE_2D, B, 0, 0, ge, le, U, ue),
          de.unbindTexture();
      }),
      (this.copyTextureToTexture = function (
        x,
        w,
        B = null,
        I = null,
        U = 0,
        ue = 0
      ) {
        let ge, le, _e, Ee, Le, Be, ve, Ge, st;
        const Qe = x.isCompressedTexture ? x.mipmaps[ue] : x.image;
        if (B !== null)
          (ge = B.max.x - B.min.x),
            (le = B.max.y - B.min.y),
            (_e = B.isBox3 ? B.max.z - B.min.z : 1),
            (Ee = B.min.x),
            (Le = B.min.y),
            (Be = B.isBox3 ? B.min.z : 0);
        else {
          const Ve = Math.pow(2, -U);
          (ge = Math.floor(Qe.width * Ve)),
            (le = Math.floor(Qe.height * Ve)),
            x.isDataArrayTexture
              ? (_e = Qe.depth)
              : x.isData3DTexture
              ? (_e = Math.floor(Qe.depth * Ve))
              : (_e = 1),
            (Ee = 0),
            (Le = 0),
            (Be = 0);
        }
        I !== null
          ? ((ve = I.x), (Ge = I.y), (st = I.z))
          : ((ve = 0), (Ge = 0), (st = 0));
        const Je = ie.convert(w.format),
          xt = ie.convert(w.type);
        let Se;
        w.isData3DTexture
          ? (we.setTexture3D(w, 0), (Se = L.TEXTURE_3D))
          : w.isDataArrayTexture || w.isCompressedArrayTexture
          ? (we.setTexture2DArray(w, 0), (Se = L.TEXTURE_2D_ARRAY))
          : (we.setTexture2D(w, 0), (Se = L.TEXTURE_2D)),
          de.activeTexture(L.TEXTURE0),
          de.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, w.flipY),
          de.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, w.premultiplyAlpha),
          de.pixelStorei(L.UNPACK_ALIGNMENT, w.unpackAlignment);
        const Et = de.getParameter(L.UNPACK_ROW_LENGTH),
          ke = de.getParameter(L.UNPACK_IMAGE_HEIGHT),
          un = de.getParameter(L.UNPACK_SKIP_PIXELS),
          vt = de.getParameter(L.UNPACK_SKIP_ROWS),
          ei = de.getParameter(L.UNPACK_SKIP_IMAGES);
        de.pixelStorei(L.UNPACK_ROW_LENGTH, Qe.width),
          de.pixelStorei(L.UNPACK_IMAGE_HEIGHT, Qe.height),
          de.pixelStorei(L.UNPACK_SKIP_PIXELS, Ee),
          de.pixelStorei(L.UNPACK_SKIP_ROWS, Le),
          de.pixelStorei(L.UNPACK_SKIP_IMAGES, Be);
        const tn = x.isDataArrayTexture || x.isData3DTexture,
          dn = w.isDataArrayTexture || w.isData3DTexture;
        if (x.isDepthTexture) {
          const Ve = Re.get(x),
            gt = Re.get(w),
            Ft = Re.get(Ve.__renderTarget),
            nt = Re.get(gt.__renderTarget);
          de.bindFramebuffer(L.READ_FRAMEBUFFER, Ft.__webglFramebuffer),
            de.bindFramebuffer(L.DRAW_FRAMEBUFFER, nt.__webglFramebuffer);
          for (let pt = 0; pt < _e; pt++)
            tn &&
              (L.framebufferTextureLayer(
                L.READ_FRAMEBUFFER,
                L.COLOR_ATTACHMENT0,
                Re.get(x).__webglTexture,
                U,
                Be + pt
              ),
              L.framebufferTextureLayer(
                L.DRAW_FRAMEBUFFER,
                L.COLOR_ATTACHMENT0,
                Re.get(w).__webglTexture,
                ue,
                st + pt
              )),
              L.blitFramebuffer(
                Ee,
                Le,
                Ee + ge,
                Le + le,
                ve,
                Ge,
                ve + ge,
                Ge + le,
                L.DEPTH_BUFFER_BIT,
                L.NEAREST
              );
          de.bindFramebuffer(L.READ_FRAMEBUFFER, null),
            de.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
        } else if (U !== 0 || x.isRenderTargetTexture || Re.has(x)) {
          const Ve = Re.get(x),
            gt = Re.get(w);
          de.bindFramebuffer(L.READ_FRAMEBUFFER, P),
            de.bindFramebuffer(L.DRAW_FRAMEBUFFER, W);
          for (let Ft = 0; Ft < _e; Ft++)
            tn
              ? L.framebufferTextureLayer(
                  L.READ_FRAMEBUFFER,
                  L.COLOR_ATTACHMENT0,
                  Ve.__webglTexture,
                  U,
                  Be + Ft
                )
              : L.framebufferTexture2D(
                  L.READ_FRAMEBUFFER,
                  L.COLOR_ATTACHMENT0,
                  L.TEXTURE_2D,
                  Ve.__webglTexture,
                  U
                ),
              dn
                ? L.framebufferTextureLayer(
                    L.DRAW_FRAMEBUFFER,
                    L.COLOR_ATTACHMENT0,
                    gt.__webglTexture,
                    ue,
                    st + Ft
                  )
                : L.framebufferTexture2D(
                    L.DRAW_FRAMEBUFFER,
                    L.COLOR_ATTACHMENT0,
                    L.TEXTURE_2D,
                    gt.__webglTexture,
                    ue
                  ),
              U !== 0
                ? L.blitFramebuffer(
                    Ee,
                    Le,
                    Ee + ge,
                    Le + le,
                    ve,
                    Ge,
                    ve + ge,
                    Ge + le,
                    L.COLOR_BUFFER_BIT,
                    L.NEAREST
                  )
                : dn
                ? L.copyTexSubImage3D(Se, ue, ve, Ge, st + Ft, Ee, Le, ge, le)
                : L.copyTexSubImage2D(Se, ue, ve, Ge, Ee, Le, ge, le);
          de.bindFramebuffer(L.READ_FRAMEBUFFER, null),
            de.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
        } else
          dn
            ? x.isDataTexture || x.isData3DTexture
              ? L.texSubImage3D(Se, ue, ve, Ge, st, ge, le, _e, Je, xt, Qe.data)
              : w.isCompressedArrayTexture
              ? L.compressedTexSubImage3D(
                  Se,
                  ue,
                  ve,
                  Ge,
                  st,
                  ge,
                  le,
                  _e,
                  Je,
                  Qe.data
                )
              : L.texSubImage3D(Se, ue, ve, Ge, st, ge, le, _e, Je, xt, Qe)
            : x.isDataTexture
            ? L.texSubImage2D(L.TEXTURE_2D, ue, ve, Ge, ge, le, Je, xt, Qe.data)
            : x.isCompressedTexture
            ? L.compressedTexSubImage2D(
                L.TEXTURE_2D,
                ue,
                ve,
                Ge,
                Qe.width,
                Qe.height,
                Je,
                Qe.data
              )
            : L.texSubImage2D(L.TEXTURE_2D, ue, ve, Ge, ge, le, Je, xt, Qe);
        de.pixelStorei(L.UNPACK_ROW_LENGTH, Et),
          de.pixelStorei(L.UNPACK_IMAGE_HEIGHT, ke),
          de.pixelStorei(L.UNPACK_SKIP_PIXELS, un),
          de.pixelStorei(L.UNPACK_SKIP_ROWS, vt),
          de.pixelStorei(L.UNPACK_SKIP_IMAGES, ei),
          ue === 0 &&
            w.generateMipmaps === !0 &&
            w.mipmapsAutoUpdate === !0 &&
            L.generateMipmap(Se),
          de.unbindTexture();
      }),
      (this.initRenderTarget = function (x) {
        Re.get(x).__webglFramebuffer === void 0 && we.setupRenderTarget(x);
      }),
      (this.initTexture = function (x) {
        x.isCubeTexture
          ? we.setTextureCube(x, 0)
          : x.isData3DTexture
          ? we.setTexture3D(x, 0)
          : x.isDataArrayTexture || x.isCompressedArrayTexture
          ? we.setTexture2DArray(x, 0)
          : we.setTexture2D(x, 0),
          de.unbindTexture();
      }),
      (this.resetState = function () {
        ($ = 0), (H = 0), (te = null), de.reset(), ae.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = He._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = He._getUnpackColorSpace());
  }
}
export {
  Mn as BufferGeometry,
  zd as DoubleSide,
  jt as Float32BufferAttribute,
  ii as Group,
  Hd as MathUtils,
  xn as Mesh,
  Ns as MeshBasicMaterial,
  kt as PerspectiveCamera,
  Li as PlaneGeometry,
  It as SRGBColorSpace,
  Vd as Scene,
  vn as ShaderMaterial,
  At as Texture,
  Xe as Vector2,
  kd as WebGLRenderer,
};
