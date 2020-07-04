enum ActionTypes {
  GET_TOPLIST = 'GET_TOPLIST',
  GET_RECOMMENDLIST = 'GET_RECOMMENDLIST',
  GET_HOTSEARCHLIST = 'GET_HOTSEARCHLIST',
  GET_SEARCHLIST = 'GET_SEARCHLIST'
}

const base = <T>(type: string) => (data: T) => ({
  type: type,
  data: data
})

const getTopList = base<TopList['data']>(ActionTypes.GET_TOPLIST)

const getRecommendList = base<RecommendList['result']['allMatch']>(ActionTypes.GET_RECOMMENDLIST)

const getHotSearchList = base<HotSearchList['data']>(ActionTypes.GET_HOTSEARCHLIST)

const getSearchList = base<SearchList['result']>(ActionTypes.GET_SEARCHLIST)

export {
  ActionTypes,
  getTopList, 
  getRecommendList,
  getHotSearchList,
  getSearchList
}