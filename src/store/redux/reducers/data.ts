type TopList = Actions['data']['getTopList']['data']
type RecommendList = Actions['data']['getRecommendList']['data']

const getTopList = (state: TopList = [], action: {type: string, data: TopList}) => {
  switch (action.type) {
    case 'GET_TOPLIST':
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

const getRecommendList = (state: RecommendList = [], action: {type: string, data: RecommendList}) => {
  switch (action.type) {
    case 'GET_RECOMMENDLIST':
      return [
        ...action.data,
      ]
    default:
      return state
  }
}

export {
  getTopList,
  getRecommendList
}