enum PlayTypes {
  SET_PLAYERSTATUS = 'SET_PLAYERSTATUS',
  SET_PLAYERINFO = 'SET_PLAYERINFO'
}

type Play = {
  playerStutes?: boolean,
  songInfo?: {
    id: number,
    title: string,
    singer: string,
    epname: string,
    coverImgUrl: string,
  },
  src?: string
}

const Base = (type: string) => (data: Play) => ({
  type: type,
  data: data
})

const getPlayer = Base('')

const setPlayerStatus = Base(PlayTypes.SET_PLAYERSTATUS)

const setPlayerInfo = Base(PlayTypes.SET_PLAYERINFO)

export {
  PlayTypes,
  getPlayer,
  setPlayerStatus,
  setPlayerInfo
}