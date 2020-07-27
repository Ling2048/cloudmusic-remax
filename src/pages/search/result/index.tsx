import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View } from 'remax/one'
import PlayList from '@/components/PlayList'
import Spin from '@/components/Spin'
import ScrollView from '@/components/ScrollView'
import { search } from '@/common/network'
import { getSongList, setClearSongList, setSongListIsLoaded } from '@/store/redux/actions'

import styles from "./index.css"

export default () => {
  const [ loadedMore, setLoadedMore ] = React.useState<boolean>(true)
  const [ offset, setOffset ] = React.useState<number>(0)
  const showType = useSelector<Reducers, number>(reducers => reducers.SearchShowType)
  const dispatch = useDispatch()
  const data = useSelector<Reducers, Actions['data']['getSongList']['data']>(state => state.getSongList)
  const keyword = useSelector<Reducers, Actions['common']['SearchKeyword']['data']>(state => state.SearchKeyword)

  React.useEffect(()=>{
    return () => {
      dispatch(setClearSongList(null))
    }
  }, [])

  const handleOnScrollToLower = React.useCallback(()=>{
    if (!loadedMore) return
    setLoadedMore(false)
    search({
      s: keyword,
      limit: 20,
      offset: (offset + 1) * 20,
      queryCorrect: true
    }).then(res=>{
      setOffset(offset + 1)
      dispatch(getSongList({
        songs: res.result.songs,
        highlights: res.result.highlights,
        isLoaded: true
      }))
      setLoadedMore(true)
    }).catch(()=>{
      setLoadedMore(true)
    })
  }, [loadedMore, offset, keyword])

  return <ScrollView onScrollToLower={handleOnScrollToLower} style={{display: showType === 2 ? 'block' : 'none', height: '100%'}}>
    {
      data.isLoaded ? <View className={styles.searchResult}>
        {
          data.songs != null && data.songs.length > 0 ? <View>
            <PlayList id={0} list={data.songs as any} noOrder={true} highlights={data.highlights ? data.highlights[0] : ''}/>
            {
              loadedMore ? <View className={styles.empty}/> : <Spin/>
            }
          </View> : <View className={styles.noResult}>
            暂无搜索结果
          </View>
        }
      </View> : <Spin/>
    }
  </ScrollView>
}