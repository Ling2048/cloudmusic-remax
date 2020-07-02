"use strict";
function setMaxDigits(e) {
  n = new Array(e);
  for (var t = 0; t < n.length; t++) n[t] = 0;
  o = new BigInt(), (m = new BigInt()).digits[0] = 1;
}
function BigInt(e) {
  this.digits = "boolean" == typeof e && 1 == e ? null : n.slice(0), this.isNeg = !1;
}
function biCopy(e) {
  var t = new BigInt(!0);
  return t.digits = e.digits.slice(0), t.isNeg = e.isNeg, t;
}
function biFromNumber(e) {
  var t, r = new BigInt();
  for (r.isNeg = e < 0, e = Math.abs(e), t = 0; 0 < e;) r.digits[t++] = e & w, e >>= l;
  return r;
}
function reverseStr(e) {
  var t, r = "";
  for (t = e.length - 1; -1 < t; --t) r += e.charAt(t);
  return r;
}
function biToString(e, t) {
  var r, n, i = new BigInt();
  for (i.digits[0] = t, r = biDivideModulo(e, i), n = a[r[1].digits[0]]; 1 == biCompare(r[0], o);) r = biDivideModulo(r[0], i),
    digit = r[1].digits[0], n += a[r[1].digits[0]];
  return (e.isNeg ? "-" : "") + reverseStr(n);
}
function digitToHex(e) {
  var t, r = "";
  for (t = 0; t < 4; ++t) r += i[15 & e], e >>>= 4;
  return reverseStr(r);
}
function biToHex(e) {
  var t, r = "";
  for (biHighIndex(e), t = biHighIndex(e); -1 < t; --t) r += digitToHex(e.digits[t]);
  return r;
}
function charToHex(e) {
  return 48 <= e && e <= 57 ? e - 48 : 65 <= e && e <= 90 ? 10 + e - 65 : 97 <= e && e <= 122 ? 10 + e - 97 : 0;
}
function hexToDigit(e) {
  var t, r = 0, n = Math.min(e.length, 4);
  for (t = 0; t < n; ++t) r <<= 4, r |= charToHex(e.charCodeAt(t));
  return r;
}
function biFromHex(e) {
  var t, r, n = new BigInt();
  for (t = e.length, r = 0; 0 < t; t -= 4, ++r) n.digits[r] = hexToDigit(e.substr(Math.max(t - 4, 0), Math.min(t, 4)));
  return n;
}
function biAdd(e, t) {
  var r, n, i, o;
  if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg, r = biSubtract(e, t), t.isNeg = !t.isNeg; else {
    for (r = new BigInt(), o = n = 0; o < e.digits.length; ++o) i = e.digits[o] + t.digits[o] + n,
      r.digits[o] = 65535 & i, n = Number(S <= i);
    r.isNeg = e.isNeg;
  }
  return r;
}
function biSubtract(e, t) {
  var r, n, i, o;
  if (e.isNeg != t.isNeg) t.isNeg = !t.isNeg, r = biAdd(e, t), t.isNeg = !t.isNeg; else {
    for (r = new BigInt(), o = i = 0; o < e.digits.length; ++o) n = e.digits[o] - t.digits[o] + i,
      r.digits[o] = 65535 & n, r.digits[o] < 0 && (r.digits[o] += S), i = 0 - Number(n < 0);
    if (-1 == i) {
      for (o = i = 0; o < e.digits.length; ++o) n = 0 - r.digits[o] + i, r.digits[o] = 65535 & n,
        r.digits[o] < 0 && (r.digits[o] += S), i = 0 - Number(n < 0);
      r.isNeg = !e.isNeg;
    } else r.isNeg = e.isNeg;
  }
  return r;
}
function biHighIndex(e) {
  for (var t = e.digits.length - 1; 0 < t && 0 == e.digits[t];)--t;
  return t;
}
function biNumBits(e) {
  var t, r = biHighIndex(e), n = e.digits[r], i = (r + 1) * O;
  for (t = i; i - O < t && 0 == (32768 & n); --t) n <<= 1;
  return t;
}
function biMultiply(e, t) {
  var r, n, i, o, a, s = new BigInt(), c = biHighIndex(e), u = biHighIndex(t);
  for (a = 0; a <= u; ++a) {
    for (i = a, o = r = 0; o <= c; ++o, ++i) n = s.digits[i] + e.digits[o] * t.digits[a] + r,
      s.digits[i] = n & w, r = n >>> l;
    s.digits[a + c + 1] = r;
  }
  return s.isNeg = e.isNeg != t.isNeg, s;
}
function biMultiplyDigit(e, t) {
  var r, n, i, o, a;
  for (a = new BigInt(), r = biHighIndex(e), o = n = 0; o <= r; ++o) i = a.digits[o] + e.digits[o] * t + n,
    a.digits[o] = i & w, n = i >>> l;
  return a.digits[1 + r] = n, a;
}
function arrayCopy(e, t, r, n, i) {
  var o, a, s = Math.min(t + i, e.length);
  for (o = t, a = n; o < s; ++o, ++a) r[a] = e[o];
}
function biShiftLeft(e, t) {
  var r, n, i, o, a = Math.floor(t / O), s = new BigInt();
  for (arrayCopy(e.digits, 0, s.digits, a, s.digits.length - a), n = O - (r = t % O),
    o = (i = s.digits.length - 1) - 1; 0 < i; --i, --o) s.digits[i] = s.digits[i] << r & w | (s.digits[o] & c[r]) >>> n;
  return s.digits[0] = s.digits[i] << r & w, s.isNeg = e.isNeg, s;
}
function biShiftRight(e, t) {
  var r, n, i, o, a = Math.floor(t / O), s = new BigInt();
  for (arrayCopy(e.digits, a, s.digits, 0, e.digits.length - a), n = O - (r = t % O),
    o = (i = 0) + 1; i < s.digits.length - 1; ++i, ++o) s.digits[i] = s.digits[i] >>> r | (s.digits[o] & u[r]) << n;
  return s.digits[s.digits.length - 1] >>>= r, s.isNeg = e.isNeg, s;
}
function biMultiplyByRadixPower(e, t) {
  var r = new BigInt();
  return arrayCopy(e.digits, 0, r.digits, t, r.digits.length - t), r;
}
function biDivideByRadixPower(e, t) {
  var r = new BigInt();
  return arrayCopy(e.digits, t, r.digits, 0, r.digits.length - t), r;
}
function biModuloByRadixPower(e, t) {
  var r = new BigInt();
  return arrayCopy(e.digits, 0, r.digits, 0, t), r;
}
function biCompare(e, t) {
  if (e.isNeg != t.isNeg) return 1 - 2 * Number(e.isNeg);
  for (var r = e.digits.length - 1; 0 <= r; --r) if (e.digits[r] != t.digits[r]) return e.isNeg ? 1 - 2 * Number(e.digits[r] > t.digits[r]) : 1 - 2 * Number(e.digits[r] < t.digits[r]);
  return 0;
}
function biDivideModulo(e, t) {
  var r, n, i, o, a, s, c, u, l, p, f, d, h, b, y = biNumBits(e), v = biNumBits(t), g = t.isNeg;
  if (y < v) return e.isNeg ? ((r = biCopy(m)).isNeg = !t.isNeg, e.isNeg = !1, t.isNeg = !1,
    n = biSubtract(t, e), e.isNeg = !0, t.isNeg = g) : (r = new BigInt(), n = biCopy(e)),
    new Array(r, n);
  for (r = new BigInt(), n = e, i = Math.ceil(v / O) - 1, o = 0; t.digits[i] < _;) t = biShiftLeft(t, 1),
    ++o, ++v, i = Math.ceil(v / O) - 1;
  for (n = biShiftLeft(n, o), y += o, s = biMultiplyByRadixPower(t, (a = Math.ceil(y / O) - 1) - i); -1 != biCompare(n, s);)++r.digits[a - i],
    n = biSubtract(n, s);
  for (c = a; i < c; --c) {
    for (u = c >= n.digits.length ? 0 : n.digits[c], l = c - 1 >= n.digits.length ? 0 : n.digits[c - 1],
      p = c - 2 >= n.digits.length ? 0 : n.digits[c - 2], f = i >= t.digits.length ? 0 : t.digits[i],
      d = i - 1 >= t.digits.length ? 0 : t.digits[i - 1], r.digits[c - i - 1] = u == f ? w : Math.floor((u * S + l) / f),
      h = r.digits[c - i - 1] * (f * S + d), b = u * A + (l * S + p); b < h;)--r.digits[c - i - 1],
        h = r.digits[c - i - 1] * (f * S | d), b = u * S * S + (l * S + p);
    (n = biSubtract(n, biMultiplyDigit(s = biMultiplyByRadixPower(t, c - i - 1), r.digits[c - i - 1]))).isNeg && (n = biAdd(n, s),
      --r.digits[c - i - 1]);
  }
  return n = biShiftRight(n, o), r.isNeg = e.isNeg != g, e.isNeg && (r = g ? biAdd(r, m) : biSubtract(r, m),
    n = biSubtract(t = biShiftRight(t, o), n)), 0 == n.digits[0] && 0 == biHighIndex(n) && (n.isNeg = !1),
    new Array(r, n);
}
function BarrettMu(e) {
  this.modulus = biCopy(e), this.k = biHighIndex(this.modulus) + 1;
  var t = new BigInt();
  t.digits[2 * this.k] = 1, this.mu = function biDivide(e, t) {
    return biDivideModulo(e, t)[0];
  }(t, this.modulus), this.bkplus1 = new BigInt(), this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod;
}
function BarrettMu_modulo(e) {
  var t, r = biDivideByRadixPower(biMultiply(biDivideByRadixPower(e, this.k - 1), this.mu), this.k + 1), n = biSubtract(biModuloByRadixPower(e, this.k + 1), biModuloByRadixPower(biMultiply(r, this.modulus), this.k + 1));
  for (n.isNeg && (n = biAdd(n, this.bkplus1)), t = 0 <= biCompare(n, this.modulus); t;) t = 0 <= biCompare(n = biSubtract(n, this.modulus), this.modulus);
  return n;
}
function BarrettMu_multiplyMod(e, t) {
  var r = biMultiply(e, t);
  return this.modulo(r);
}
function BarrettMu_powMod(e, t) {
  var r, n, i = new BigInt();
  for (i.digits[0] = 1, r = e, n = t; 0 != (1 & n.digits[0]) && (i = this.multiplyMod(i, r)),
    0 != (n = biShiftRight(n, 1)).digits[0] || 0 != biHighIndex(n);) r = this.multiplyMod(r, r);
  return i;
}
var n, o, m, a, i, c, u, l = 16, O = l, S = 65536, _ = 32768, A = 4294967296, w = 65535;
setMaxDigits(20), biFromNumber(1e15), a = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
  i = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
  c = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
  u = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);

function RSAKeyPair(e, t, r) {
  this.e = biFromHex(e), this.d = biFromHex(t), this.m = biFromHex(r), this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16, this.barrett = new BarrettMu(this.m);
};
// setMaxDigits: setMaxDigits,
function encryptedString(e, t) {
  for (var r, n, i, o, a, s, c = new Array(), u = t.length, l = 0; l < u;) c[l] = t.charCodeAt(l),
    l++;
  for (; 0 != c.length % e.chunkSize;) c[l++] = 0;
  for (r = c.length, n = "", l = 0; l < r; l += e.chunkSize) {
    for (a = new BigInt(), i = 0, o = l; o < l + e.chunkSize; ++i) a.digits[i] = c[o++],
      a.digits[i] += c[o++] << 8;
    s = e.barrett.powMod(a, e.e), n += (16 == e.radix ? biToHex(s) : biToString(s, e.radix)) + " ";
  }
  return n.substring(0, n.length - 1);
}
export {
  RSAKeyPair, setMaxDigits, encryptedString
};