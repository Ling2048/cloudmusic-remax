import * as React from 'react'
import { useSelector } from 'react-redux'
import { View, Image } from 'remax/one'
import playIcon from '../../../images/play.svg'

import styles from "../index.css"
import PlayList from '@/components/PlayList'
import Spin from '@/components/Spin'

const SearchResult = () => {
  const showType = useSelector<Reducers, number>(reducers => reducers.SearchShowType)
  const data = useSelector<Reducers, Actions['data']['getSearchList']['data'] | null>(state => state.getSearchList)

  return <View style={{display: showType === 2 ? 'block' : 'none'}}>
    {
      data !== null ? <View className={styles.searchResult}>
        {
          data.songs ? <View>
            <PlayList id={0} list={data?.songs as any}/>
            {/* <Spin/> */}
            <View className={styles.empty}/>
          </View> : <View className={styles.noResult}>
            暂无搜索结果
          </View>
        }
      </View> : <Spin/>
    }
  </View>
}

export default SearchResult