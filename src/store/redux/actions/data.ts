enum DataTypes {
  GET_TOPLIST = 'GET_TOPLIST',
  GET_RECOMMENDLIST = 'GET_RECOMMENDLIST',
  GET_HOTSEARCHLIST = 'GET_HOTSEARCHLIST',
  GET_SEARCHLIST = 'GET_SEARCHLIST',
  GET_PLAYLISTDETAIL = 'GET_PLAYLISTDETAIL',
  GET_SONGDETAIL = 'GET_SONGDETAIL',
  GET_SONGLYRICS = 'GET_SONGLYRICS',
  GET_SIMISONG = 'GET_SIMISONG',
  GET_SONGCOMMENT = 'GET_SONGCOMMENT',
}

const Base = <T>(type: string) => (data: T) => ({
  type: type,
  data: data
})

const getTopList = Base<TopList['data']>(DataTypes.GET_TOPLIST)

const getRecommendList = Base<RecommendList['result']['allMatch']>(DataTypes.GET_RECOMMENDLIST)

const getHotSearchList = Base<HotSearchList['data']>(DataTypes.GET_HOTSEARCHLIST)

const getSearchList = Base<SearchList['result']>(DataTypes.GET_SEARCHLIST)

const getPlayListDetail = Base<PlayListDetail>(DataTypes.GET_PLAYLISTDETAIL)

const getSongDetail = Base<SongDetail['data']>(DataTypes.GET_SONGDETAIL)

const getSongLyrics = Base<SongLyrics['lrc']>(DataTypes.GET_SONGLYRICS)

const getSimiSong = Base<SimiSong['songs']>(DataTypes.GET_SIMISONG)

const getSongComment = Base<SongComment.HotComment[]>(DataTypes.GET_SONGCOMMENT)

export {
  DataTypes,
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