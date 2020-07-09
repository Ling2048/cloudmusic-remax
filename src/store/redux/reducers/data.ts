import { ActionTypes } from "../actions"

type TopList = Actions['data']['getTopList']['data']
type RecommendList = Actions['data']['getRecommendList']['data']
type HotSearchList = Actions['data']['getHotSearchList']['data']
type SearchList = Actions['data']['getSearchList']['data']

const getTopList = (state: TopList = [], action: {type: string, data: TopList}) => {
  switch (action.type) {
    case ActionTypes.GET_TOPLIST:
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

const getRecommendList = (state: RecommendList = [], action: {type: string, data: RecommendList}) => {
  switch (action.type) {
    case ActionTypes.GET_RECOMMENDLIST:
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

const getHotSearchList = (state: HotSearchList = [], action: {type: string, data: HotSearchList}) => {
  switch (action.type) {
    case ActionTypes.GET_HOTSEARCHLIST:
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

const getSearchList = (state: SearchList | null = null, action: {type: string, data: SearchList}) => {
  switch (action.type) {
    case ActionTypes.GET_SEARCHLIST:
      return action.data
    default:
      return state
  }
}

const getPlayListDetail = (state: PlayListDetail | null = null, action: {type: string, data: PlayListDetail}) => {
  switch (action.type) {
    case ActionTypes.GET_PLAYLISTDETAIL:
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
  getPlayListDetail
}