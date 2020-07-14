const request = (url: string, init: { data: any, headers: any, method: string }) => {
  return fetch(url, {
    body: init.data,
    headers: init.headers,
    method: init.method
  }).then(res => res.json())
}

const getAudioManager = () : WechatMiniprogram.BackgroundAudioManager => {
  return {} as any
}

const StorageSync = {
  setStorage: window.localStorage.setItem,
  getStorage: window.localStorage.getItem,
  clearStorage: window.localStorage.clear,
  removeStorage: window.localStorage.removeItem
}

const getMenuButtonBoundingClientRect = () : WechatMiniprogram.Rect => {
  return {} as any
}

const getSystemInfoSync = () : WechatMiniprogram.GetSystemInfoSyncResult => {
  return {} as any
}

export { request, getAudioManager, StorageSync, getMenuButtonBoundingClientRect, getSystemInfoSync }