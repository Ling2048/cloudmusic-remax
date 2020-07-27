const request = (url: string, init: { data: any, headers: any, method: string }) => {
  return fetch(url, {
    body: init.data,
    headers: init.headers,
    method: init.method
  }).then(res => res.json())
}

const getAudioManager = () : WechatMiniprogram.BackgroundAudioManager => {
  const audio = new Audio()

  const result = {
    title: '',
    singer: '',
    epname: '',
    coverImgUrl: '',
    _src: '',
    get src() { return this._src },
    set src(value) {
      this._src = value
      this.play()
    },
    onPause(call: ()=>void) {
      audio.onpause = call
    },
    onPlay(call: ()=>void) {
      // audio.onplay = call
    },
    onStop(call: ()=>void) {
    },
    onEnded(call: ()=>void) {
      audio.onended = call
    },
    onNext(call: ()=>void) {
    },
    play() {
      audio.src = this._src
      audio.load()
      audio.play()
    },
    pause: () => {
      audio.pause()
    }
  }

  return result as any
}

const StorageSync = {
  setStorage: (key: string, value: string) => window.localStorage.setItem(key, value),
  getStorage: (key: string) => window.localStorage.getItem(key),
  clearStorage: () => window.localStorage.clear(),
  removeStorage: (key: string) => window.localStorage.removeItem(key)
}

const getMenuButtonBoundingClientRect = () : WechatMiniprogram.Rect => {
  return {
    bottom: 80,
    height: 32,
    left: 278,
    right: 365,
    top: 48,
    width: 87
  }
}

const getSystemInfoSync = () : WechatMiniprogram.GetSystemInfoSyncResult => {
  return {
    screenWidth: window.screen.width,
    screenHeight: window.screen.height
  } as any
}

export { request, getAudioManager, StorageSync, getMenuButtonBoundingClientRect, getSystemInfoSync }