enum PlayTypes {
  SET_PLAYERSTATUS = 'SET_PLAYERSTATUS',
  SET_PLAYERINFO = 'SET_PLAYERINFO',
  SET_DURATIONINDEX = 'SET_DURATIONINDEX',
  SET_CURID = 'SET_CURID',
  INIT_PLAYERDURATIONLISTENER = 'INIT_PLAYERDURATIONLISTENER'
}

type Play = {
  playerStutes?: boolean,
  curId?: number,
  songInfo?: {
    id: number,
    title: string,
    singer: string,
    epname: string,
    coverImgUrl: string,
  },
  src?: string,
  durationIndex?: number,
  lyricsMap?: Map<number, {index: number, lyric: string}>
}

const Base = (type: string) => (data: Play) => ({
  type: type,
  data: data
})

const getPlayer = Base('')

const setPlayerStatus = Base(PlayTypes.SET_PLAYERSTATUS)

const setPlayerInfo = Base(PlayTypes.SET_PLAYERINFO)

const initPlayerDurationListener = Base(PlayTypes.INIT_PLAYERDURATIONLISTENER)

const setDurationIndex = Base(PlayTypes.SET_DURATIONINDEX)

const setCurId = Base(PlayTypes.SET_CURID)

export {
  PlayTypes,
  getPlayer,
  setPlayerStatus,
  setPlayerInfo,
  initPlayerDurationListener,
  setDurationIndex,
  setCurId
}