const getTopList = (data: TopList['data']) => ({
  type: 'GET_TOPLIST',
  data: data
})

export { getTopList }