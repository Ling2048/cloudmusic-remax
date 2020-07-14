import { 
  request, getBackgroundAudioManager, setStorageSync, getStorageSync, clearStorageSync, 
  removeStorageSync, getMenuButtonBoundingClientRect, getSystemInfoSync } from 'remax/wechat';
const base = 'https://music.163.com';

const requestWX = (url: string, init: { data: any, headers: any, method: string }) => {
  return request({
    url: base + url,
    header: init.headers,
    method: init.method as any,
    data: init.data,
  }).then(res => res.data)
}

const getAudioManager = () => {
  return getBackgroundAudioManager()
}

const StorageSync = {
  setStorage: setStorageSync,
  getStorage: getStorageSync,
  clearStorage: clearStorageSync,
  removeStorage: removeStorageSync
}

export { requestWX as request, getAudioManager, StorageSync, getMenuButtonBoundingClientRect, getSystemInfoSync }