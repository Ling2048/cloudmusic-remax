import { getMenuButtonBoundingClientRect, getSystemInfoSync } from './api'

const a = {
  NOW: "right now",
  MINAGO: " mins ago",
  YESTERDAY: "yesterday ",
  REPLY: "Reply to",
  COMT_DEL: "This comment has been deleted",
  NOCOMMENT: "No comments yet"
}
const o = {
  NOW: "刚刚",
  MINAGO: "分钟前",
  YESTERDAY: "昨天",
  REPLY: "回复",
  COMT_DEL: "该评论已删除",
  NOCOMMENT: "无评论"
}

const w = (e: any, t: any) => {
  var n = new Date(e);
  return t.replace(/\w/g, function(e: any) {
      switch (e) {
        case "Y":
          return n.getFullYear();

        case "y":
          return "0".concat(n.getFullYear().toString()).substr(-2);

        case "m":
          return "0".concat((n.getMonth() + 1).toString()).substr(-2);

        case "n":
          return n.getMonth() + 1;

        case "d":
          return "0".concat(n.getDate().toString()).substr(-2);

        case "j":
          return n.getDate();

        case "H":
          return "0".concat(n.getHours().toString()).substr(-2);

        case "G":
          return n.getHours();

        case "i":
          return "0".concat(n.getMinutes().toString()).substr(-2);

        case "s":
          return "0".concat(n.getSeconds().toString()).substr(-2);

        case "I":
          return "00".concat(n.getMilliseconds().toString()).substr(-3);

        case "U":
          return parseInt((n.getTime() / 1e3).toString(), 10);

        default:
          return e;
      }
  });
}

const getCount = (count: number) => {
  return 1e8 <= count ? Math.floor(count / 1e7) / 10 + "亿" : 1e5 <= count ? Math.floor(count / 1e3) / 10 + "万" : count;
}

const parseRelativeDate = (e: number, t: boolean) => {
  let n = new Date(), r = new Date(e);
  if (n.valueOf() - r.valueOf() < 6e4) return t ? a.NOW : o.NOW;
  if (n.valueOf() - r.valueOf() < 36e5) return Math.floor((n.valueOf() - r.valueOf()) / 6e4) + (t ? a.MINAGO : o.MINAGO);
  var i = n.valueOf() - 36e5 * n.getHours() - 6e4 * n.getMinutes() - 1e3 * n.getSeconds() - n.getMilliseconds();
  return i <= r.valueOf() ? w(r, "H:i") : i - 864e5 <= r.valueOf() ? (t ? a.YESTERDAY : o.YESTERDAY) + w(r, "H:i") : (r.getFullYear(), 
  n.getFullYear(), w(r, t ? "Y-n-j" : "Y年n月j日"));
}

const B = (track: PlayListType[0]) => {
  return {
    name: track.name,
    id: track.id,
    privilege: track.privilege,
    fee: track.fee,
    ar: track.ar,
    al: track.al
  }
}

const mergeSongBytrack = (tracks: PlayListType, privileges: any, index: number, len: number) => {
  for (var i = [], a = index; a < len; a++) {
    tracks[a].privilege = privileges[a]
    i.push(B(tracks[a]))
  }
  return i;
}

let MenuButtonBoundingClientRectInstance : WechatMiniprogram.Rect | null = null

let SystemInfoInstance : WechatMiniprogram.GetSystemInfoSyncResult | null = null

const getMenuButtonBoundingClientRectInstance = () => {
  if (!MenuButtonBoundingClientRectInstance) {
    MenuButtonBoundingClientRectInstance = getMenuButtonBoundingClientRect()
  }
  return MenuButtonBoundingClientRectInstance
}

const getSystemInfoInstance = () => {
  if (!SystemInfoInstance) {
    SystemInfoInstance = getSystemInfoSync()
  }
  return SystemInfoInstance
}

const getCapsule = getMenuButtonBoundingClientRectInstance

const getCompatibleTop = () => {
  var e = getMenuButtonBoundingClientRectInstance().top || getSystemInfoInstance().statusBarHeight
  return "Android 4.4.2" === getSystemInfoInstance().system ? e = 8 : "iOS 9.0.1" === getSystemInfoInstance().system && (e = 24), e;
}

const getCompatibleWindowHeight = () => getSystemInfoInstance().screenHeight

const getCompatibleWindowWidth = () => getSystemInfoInstance().screenWidth

const c = /\r\n|\r|\n/, u = /\[(.*?)\]/gi, l: { [key in string]: string} = {
  ar: "artist",
  ti: "track",
  al: "album",
  offset: "offset"
}

function parseLRCLine(r: { lines: any[], scrollable: boolean }, t: string) {
  var i = [];
  if (t = t.replace(u, function(e: any, t: any) {
      var n = function parseLRCTime(e: any, t: any) {
          var n = t.split(":"), r = n.shift() as any, i = l[r];
          if (i) return e[i] = n.join(":"), null;
          if (r = parseInt(r, 10), isNaN(r)) return null;
          var a = parseInt(e.offset, 10) || 0, o: any = 60 * r + parseFloat(n.join(".")) + a / 1e3;
          return o = o.toFixed(3), o = parseFloat(o);
      }(r, t);
      return null == n || isNaN(n) || (i.push({
          time: n,
          tag: t
      }), r.scrollable = !0), "";
  })) {
      if (0 === i.length) {
          if (!t || 0 === t.length) return;
          i.push({
              time: -1
          });
      }
      i.forEach(function(e: any) {
          e.lyric = t.trim ? t.trim() : t;
      });
      var e = r.lines;
      e.push.apply(e, i);
  }
}

function J(e: any, t: any) {
  return e.time > t.time;
}

function quick(e: any, t: any): any {
  var n = 1 < arguments.length && void 0 !== t ? t : function(e: any, t: any) {
      return t < e;
  }, r = e.length;
  if (r <= 1) return e;
  for (var i = Math.floor(r / 2), a = e.splice(i, 1)[0], o = [], c = [], u = 0, s = e.length; u < s; u++) n(e[u], a) ? c.push(e[u]) : o.push(e[u]);
  return quick(o, n).concat(a, quick(c, n));
}

const parseLyric = (e: string) => {
  if (!e) return [];
  var t: any = {
      lines: [],
      scrollable: !1
  };
  if (e.split(c).forEach(function(e) {
      parseLRCLine(t, e);
  }), t.scrollable) {
      t.lines = quick(t.lines, J);
      for (var n: any = void 0, r = 0, i = t.lines.length; r < i; r++) if (t.lines[r].lyric) {
          n = r;
          break;
      }
      t.lines.splice(0, n);
  }
  return t;
}

function K(e: string, t: string) {
  var n = parseLyric(e), r = parseLyric(t);
  return n.scrollable && r.scrollable ? (n.lines.forEach(function(e: any) {
      var t = function getTranslate(t, e) {
          var n = e.lines.findIndex(function(e: any) {
              return e.time === t;
          });
          if (-1 !== n) return e.lines[n];
      }(e.time, r);
      t && (e.tlyric = t.lyric);
  }), n.hasTrans = !0) : n.hasTrans = !1, n;
}

const handleLyric = (e: SongLyrics) => {
  var t = e.lrc, n = e.tlyric, r = e.uncollected, i = e.nolyric;
  return i ? {
      nolyric: i
  } : r ? {
      uncollected: r
  } : t && !t.lyric ? {
      nolyric: !0
  } : K(t.lyric, n.lyric);
}

function getLyricMap(e: any) {
  var r = new Map();
  return e.lines && e.lines.forEach(function(e: any, t: any) {
      var n = {
          index: t,
          lyric: e.lyric
      };
      r.set(parseInt(e.time, 10), n);
  }), r;
}

export {
  getCount, parseRelativeDate, getCapsule, getCompatibleTop, getCompatibleWindowHeight,
  getCompatibleWindowWidth, mergeSongBytrack, handleLyric, getLyricMap
}