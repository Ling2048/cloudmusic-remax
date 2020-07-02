import crypto from 'crypto-js';
import * as common from './common';

const o = crypto;

function b(e: any, t: any) {
  var r = o.enc.Utf8.parse(t), n = o.enc.Utf8.parse("0102030405060708"), i = o.enc.Utf8.parse(e);
  return o.AES.encrypt(i, r, {
      iv: n,
      mode: o.mode.CBC
  }).toString();
}

function c(e: any, t: any, r: any) {
  var n;
  return common.setMaxDigits(131), n = new common.RSAKeyPair(t, "", r), common.encryptedString(n, e);
}

const asrsea = (e: any, t: any, r: any, n: any) => {
  var i: {
    encText?: string,
    encSecKey?: string
  } = {};
  const o =  function a(e) {
      var t = void 0, r = 0, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", i = "";
      for (let j = 0; j < e; j += 1) r = Math.random() * n.length, r = Math.floor(r), i += n.charAt(r);
      return i;
  }(16);
  return i.encText = b(e, n), i.encText = b(i.encText, o), i.encSecKey = c(o, t, r), 
  i;
}

function obj2query(t: any) {
  var r = "";
  return Object.keys(t).forEach(function(e) {
      void 0 !== t[e] && (r += encodeURIComponent(e) + "=" + encodeURIComponent(t[e]) + "&");
  }), r.slice(0, -1);
};

const param1 = '010001';
const param2 = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7';
const param3 = '0CoJUm6Qyw8W8jud';

const enData = (data: any) => {
  const endata = asrsea(JSON.stringify(data), param1, param2, param3);
  return obj2query({
    params: endata.encText,
    encSecKey: endata.encSecKey
  })
}

export {
  enData
}