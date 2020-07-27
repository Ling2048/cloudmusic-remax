import * as React from 'react'
import { View, Button, Text } from 'remax/one'
import SongLyric from './SongLyric'
import { useSelector, useDispatch } from 'react-redux'
import { handleLyric, getLyricMap } from '@/common'

import styles from './index.css'
import { initPlayerDurationListener } from '@/store/redux/actions'

export default () => {
  const lyricsData = useSelector<Reducers, Actions['data']['getSongLyrics']['data'] | null>(state => state.getSongLyrics)
  const dispatch = useDispatch()
  const [ lyrics, setLyrics ] = React.useState<any>()

  React.useEffect(()=>{
    if (lyricsData) {
      const _lyrics = handleLyric(lyricsData)
      setLyrics(_lyrics)
      const lyricsMap = getLyricMap(_lyrics)
      dispatch(initPlayerDurationListener({lyricsMap: lyricsMap}))
    }
  }, [lyricsData])

  return <View className={styles.lyricsMain}>
    <View className={styles.lyricsScroll}>
      <View>
        {
          lyrics ? <SongLyric lyrics={lyrics}/> : '歌词加载中...'
        }
      </View>
    </View>
    <Button className={styles.lyricsBtn}>
      <Text>在网易云音乐查看更多歌词</Text>
      <Text className='lyrics-btn-arrow'/>
    </Button>
  </View>
}