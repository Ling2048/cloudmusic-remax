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

let MenuButtonBoundingClientRectInstance : WechatMiniprogram.Rect | null = null

let SystemInfoInstance : WechatMiniprogram.GetSystemInfoSyncResult | null = null

const getMenuButtonBoundingClientRectInstance = () => {
  if (!MenuButtonBoundingClientRectInstance) {
    console.log('MenuButtonBoundingClientRectInstance')
    MenuButtonBoundingClientRectInstance = getMenuButtonBoundingClientRect()
  }
  return MenuButtonBoundingClientRectInstance
}

const getSystemInfoInstance = () => {
  if (!SystemInfoInstance) {
    console.log('getSystemInfoInstance')
    SystemInfoInstance = getSystemInfoSync()
  }
  return getSystemInfoSync()
}

const getCapsule = getMenuButtonBoundingClientRectInstance

const getCompatibleTop = () => {
  var e = getMenuButtonBoundingClientRectInstance().top || getSystemInfoInstance().statusBarHeight
  return "Android 4.4.2" === getSystemInfoInstance().system ? e = 8 : "iOS 9.0.1" === getSystemInfoInstance().system && (e = 24), e;
}

const getCompatibleWindowHeight = () => getSystemInfoInstance().screenHeight

const getCompatibleWindowWidth = () => getSystemInfoInstance().screenWidth

export {
  getCount,
  parseRelativeDate,
  getCapsule,
  getCompatibleTop,
  getCompatibleWindowHeight,
  getCompatibleWindowWidth
}