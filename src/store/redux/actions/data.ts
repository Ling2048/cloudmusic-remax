const getTopList = (data: TopList['data']) => ({
  type: 'GET_TOPLIST',
  data: data
})

const getRecommendList = (data: RecommendList['result']['allMatch']) => ({
  type: 'GET_RECOMMENDLIST',
  data: data
})

export { getTopList, getRecommendList }