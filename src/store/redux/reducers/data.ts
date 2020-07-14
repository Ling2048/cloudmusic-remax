import { DataTypes } from '../actions'

type TopList = Actions['data']['getTopList']['data']
type RecommendList = Actions['data']['getRecommendList']['data']
type HotSearchList = Actions['data']['getHotSearchList']['data']
type SearchList = Actions['data']['getSearchList']['data']
type SongDetailData = Actions['data']['getSongDetail']['data']
type SongLyricsData = Actions['data']['getSongLyrics']['data']
type SimiSongData = Actions['data']['getSimiSong']['data']
type SongCommentData = Actions['data']['getSongComment']['data']

type ActionType<T> = {
  type: string,
  data: T
}

const getTopList = (state: TopList = [], action: ActionType<TopList>) => {
  switch (action.type) {
    case DataTypes.GET_TOPLIST:
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

const getRecommendList = (state: RecommendList = [], action: ActionType<RecommendList>) => {
  switch (action.type) {
    case DataTypes.GET_RECOMMENDLIST:
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

const getHotSearchList = (state: HotSearchList = [], action: ActionType<HotSearchList>) => {
  switch (action.type) {
    case DataTypes.GET_HOTSEARCHLIST:
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

const getSearchList = (state: SearchList | null = null, action: ActionType<SearchList>) => {
  switch (action.type) {
    case DataTypes.GET_SEARCHLIST:
      return action.data
    default:
      return state
  }
}

const getPlayListDetail = (state: PlayListDetail | null = null, action: ActionType<PlayListDetail>) => {
  switch (action.type) {
    case DataTypes.GET_PLAYLISTDETAIL:
      return action.data
    default:
      return state
  }
}

const getSongDetail = (state: SongDetailData = [], action: ActionType<SongDetailData>) => {
  switch (action.type) {
    case DataTypes.GET_SONGDETAIL:
      return action.data
    default:
      return state
  }
}

const getSongLyrics = (state: SongLyricsData | null = null, action: ActionType<SongLyricsData>) => {
  switch (action.type) {
    case DataTypes.GET_SONGLYRICS:
      return action.data
      default:
        return state
  }
}

const getSimiSong = (state: SimiSongData = [], action: ActionType<SimiSongData>) => {
  switch (action.type) {
    case DataTypes.GET_SIMISONG:
      return action.data
      default:
        return state
  }
}

const getSongComment = (state: SongCommentData = [], action: ActionType<SongCommentData>) => {
  switch (action.type) {
    case DataTypes.GET_SONGCOMMENT:
      return action.data
      default:
        return state
  }
}

export {
  getTopList,
  getRecommendList,
  getHotSearchList,
  getSearchList,
  getPlayListDetail,
  getSongDetail,
  getSongLyrics,
  getSimiSong,
  getSongComment
}