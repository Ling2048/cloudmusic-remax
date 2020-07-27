import * as React from 'react'
import { View, Image, Text, navigateTo, Input } from 'remax/one'
import NavBar from '@/components/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { toplist } from '@/common/network'
import { getTopList } from '@/store/redux/actions'
import { searchIcon } from '@/common/icons'
import Skeletion from '@/skeleton/index'

import styles from './index.css'

const TopList = React.memo(() => {
  const state = useSelector<Reducers, Actions['data']['getTopList']['data']>(state => state.getTopList);

  const handleItemTap = React.useCallback((id: number)=>{
    navigateTo({
      url: '/pages/playlist/index?id=' + id
    })
  }, [])

  const _toplist = state.filter(v => 'OFFICIAL' === v.categoryCode)[0]?.list.slice(0, 4).map(v => {
    if (v.tracks === null) return null;

    const tracks = v.tracks.slice(0, 3).map((track, index) => {
      return <View key={track.first + track.second} className={styles.song}>
        {++index + '.' + track.first + ' ‐ ' + track.second}
      </View>
    });
    
    return <View key={v.id} className={styles.toplist} onTap={handleItemTap.bind(null, v.id)}>
      <View className={styles.left}>
        <Image className={styles.cover} src={v.coverUrl}/>
        <Text className={styles.text}>{v.updateFrequency}</Text>
      </View>
      <View className={styles.right}>
        {tracks}
      </View>
    </View>
  });
  
  return <>
    {_toplist}
  </>
})

export default () => {
  const [ loaded, setLoaded ] = React.useState<boolean>(false)
  const dispatch = useDispatch()
  const handleTap = React.useCallback(()=>{
    navigateTo({
      url: '/pages/search/index'
    })
  }, [])

  React.useEffect(() => {
    toplist().then((res) => {
      setLoaded(true)
      dispatch(getTopList(res.data))
    })
  }, [])
  
  return <View className={styles.index}>
    <NavBar name='网易云音乐-Remax' hasLeftCapsule={false}/>
    {
      !loaded ? <Skeletion/> : <View className={styles.wrap}>
        <View className={styles.empty}/>
        <View className={styles.searchBox} onTap={handleTap}>
          <Image className={styles.searchIcon} src={searchIcon}/>
          <Text className={styles.searchText}>
            搜索歌曲
          </Text>
        </View>
        <TopList/>
      </View>
    }
  </View>
}