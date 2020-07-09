enum ActionTypes {
  GET_TOPLIST = 'GET_TOPLIST',
  GET_RECOMMENDLIST = 'GET_RECOMMENDLIST',
  GET_HOTSEARCHLIST = 'GET_HOTSEARCHLIST',
  GET_SEARCHLIST = 'GET_SEARCHLIST',
  GET_PLAYLISTDETAIL = 'GET_PLAYLISTDETAIL'
}

const base = <T>(type: string) => (data: T) => ({
  type: type,
  data: data
})

const getTopList = base<TopList['data']>(ActionTypes.GET_TOPLIST)

const getRecommendList = base<RecommendList['result']['allMatch']>(ActionTypes.GET_RECOMMENDLIST)

const getHotSearchList = base<HotSearchList['data']>(ActionTypes.GET_HOTSEARCHLIST)

const getSearchList = base<SearchList['result']>(ActionTypes.GET_SEARCHLIST)

const getPlayListDetail = base<PlayListDetail>(ActionTypes.GET_PLAYLISTDETAIL)

export {
  ActionTypes,
  getTopList, 
  getRecommendList,
  getHotSearchList,
  getSearchList,
  getPlayListDetail
}