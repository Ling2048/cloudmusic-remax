import { getAudioManager } from '@/common/api'
import { PlayTypes } from '../actions'
import { setPlayerStatus } from '../actions'
import store from '../index'

const audioManager = getAudioManager()
type ActionData = Actions['player']['getPlayer']['data']

type Unite = ActionData

const initData: Unite = {
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
})

const player = (state: Unite = initData, actions: {type: string, data: Unite}) => {
  switch (actions.type) {
    case PlayTypes.SET_PLAYERSTATUS:
      const playerStutes = actions.data.playerStutes
      if (playerStutes) audioManager.play()
      else audioManager.pause()
      return {
        ...state,
        playerStutes: playerStutes
      }
    case PlayTypes.SET_PLAYERINFO:
      const info = actions.data.songInfo!
      audioManager.title = info.title
      audioManager.singer = info.singer
      audioManager.epname = info.epname
      audioManager.coverImgUrl = info.coverImgUrl
      audioManager.src = actions.data.src!
      return {
        ...state,
        songInfo: info,
        playerStutes: true
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