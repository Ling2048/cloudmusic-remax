import * as React from 'react'
import { View } from 'remax/one'

import styles from './SongLyric.css'

export default () => {
  return <View className={styles.songLyric}>
    <View className={styles.lyricWrap}>
      {/* <View className={styles.lyricItem}>该歌词不支持滚动</View> */}
      <View className={styles.lyricItem}>1111</View>
    </View>
  </View>
}