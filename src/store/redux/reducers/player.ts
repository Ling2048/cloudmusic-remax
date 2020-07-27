import { getAudioManager, StorageSync } from '@/common/api'
import { PlayTypes, setDurationIndex, initPlayerDurationListener, setPlayerInfo, setCurId } from '../actions'
import { setPlayerStatus } from '../actions'
import store from '../index'
import { songurl } from '@/common/network'

const audioManager = getAudioManager()
type ActionData = Actions['player']['getPlayer']['data']

const initData: ActionData = {
  playerStutes: false
}

audioManager.onPause(() => {
  console.log('onPause')
  store.dispatch(setPlayerStatus({playerStutes: false}))
})

audioManager.onPlay(() => {
  console.log('onPlay')
  store.dispatch(setPlayerStatus({playerStutes: true}))
})

audioManager.onStop(() => {
  console.log('onStop')
  store.dispatch(setPlayerStatus({playerStutes: false}))
})

audioManager.onEnded(() => {
  console.log('onEnded')
  store.dispatch(setPlayerStatus({playerStutes: false}))
  NextSong()
})

audioManager.onNext(() => {
  console.log('onNext')
  NextSong()
})

const NextSong = () => {
  const curId = store.getState().player.curId
  const songList = JSON.parse(StorageSync.getStorage('songList')!) as PlayListType
  let index = songList.findIndex(v => v.id === curId)
  if (index === songList.length - 1) index = 0
  else index += 1
  store.dispatch(setCurId({curId: songList[index].id}))
}

const setAdudioInfo = (info: Required<ActionData>['songInfo'], src: string) => {
  audioManager.title = info.title
  audioManager.singer = info.singer
  audioManager.epname = info.epname
  audioManager.coverImgUrl = info.coverImgUrl
  audioManager.src = src
}

const setScrollLyrics = (lyricsMap: Required<ActionData>['lyricsMap']) => {
  let upperIndex = 0
  audioManager.onTimeUpdate(() => {
    const index = parseInt(audioManager.currentTime.toString(), 10)
    const lyric = lyricsMap.get(index)
    if (lyric && lyric.index >= upperIndex) {
      upperIndex = lyric.index
      store.dispatch(setDurationIndex({durationIndex: lyric.index}))
    }
  })
}

const player = (state: ActionData = initData, actions: {type: string, data: ActionData}) => {
  switch (actions.type) {
    case PlayTypes.SET_PLAYERSTATUS:
      const playerStutes = actions.data.playerStutes
      let durationIndex = state.durationIndex

      if (playerStutes && audioManager.src && audioManager.src.length <= 0 && state.songInfo && state.src) {
        durationIndex = 0
        setScrollLyrics(state.lyricsMap!)
        setAdudioInfo(state.songInfo, state.src)
      }

      if (!audioManager.src) {
        return {
          ...state,
          playerStutes: false,
          durationIndex: 0
        }
      }

      if (playerStutes) audioManager.play()
      else audioManager.pause()

      return {
        ...state,
        playerStutes: playerStutes,
        durationIndex: durationIndex
      }
    case PlayTypes.SET_PLAYERINFO:
      const info = actions.data.songInfo!
      setAdudioInfo(info, actions.data.src!)
      return {
        ...state,
        songInfo: info,
        src: actions.data.src!,
        playerStutes: true
      }
    case PlayTypes.INIT_PLAYERDURATIONLISTENER:
      const lyricsMap = actions.data.lyricsMap!
      setScrollLyrics(lyricsMap)
      return {
        ...state,
        lyricsMap: lyricsMap,
        durationIndex: 0
      }
    case PlayTypes.SET_DURATIONINDEX:
      return {
        ...state,
        durationIndex: actions.data.durationIndex
      }
    case PlayTypes.SET_CURID:
      return {
        ...state,
        curId: actions.data.curId
      }
    default:
      return {
        ...state
      }
  }
}

export {
  player
}