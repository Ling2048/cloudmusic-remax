import * as React from 'react'
import { View, Button, Text } from 'remax/one'
import SongLyric from './SongLyric'

import styles from './index.css'
import { useSelector } from 'react-redux'

export default () => {
  const lyrics = useSelector<Reducers, Actions['data']['getSongLyrics']['data'] | null>(state => state.getSongLyrics)

  return <View className={styles.lyricsMain}>
    <View className={styles.lyricsScroll}>
      <View>
        {/* {
          lyrics ? <SongLyric/> : '歌词加载中...'
        } */}
        没有实现
      </View>
    </View>
    <Button className={styles.lyricsBtn}>
      <Text>在网易云音乐查看更多歌词</Text>
      <Text className='lyrics-btn-arrow'/>
    </Button>
  </View>
}