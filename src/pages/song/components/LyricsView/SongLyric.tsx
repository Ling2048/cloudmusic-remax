import * as React from 'react'
import { View } from 'remax/one'

import styles from './SongLyric.css'
import { useSelector } from 'react-redux'

export default (props: { lyrics: {
  hasTrans: boolean,
  lines: {
    lyric: string,
    tag: string,
    time: number
  }[],
  scrollable: boolean,
  nolyric: boolean
} }) => {
  const { lyrics } = props
  const durationIndex = useSelector<Reducers, number>(state => state.player.durationIndex!)

  const memoStyle = React.useMemo<{
    songLyricEx: React.CSSProperties
  }>(()=>{
    return {
      songLyricEx: {
        overflow: lyrics.scrollable ? 'hidden' : 'scroll'
      }
    }
  }, [lyrics.scrollable])

  let s = 0;
  2 <= durationIndex && (s = durationIndex - 1);

  return <View className={styles.songLyric} style={memoStyle.songLyricEx}>
    <View className={styles.lyricWrap} style={{transform: 'translate3D(0, ' + 40 * -s + 'PX, 0)'}}>
      {
        lyrics.scrollable || lyrics.nolyric ? null : <View className={styles.lyricItem}>该歌词不支持滚动</View> 
      }
      {
        lyrics.lines ? lyrics.lines.map((v,i)=>{
          let clsName = styles.lyricItem
          if (durationIndex === i) clsName += ' ' + styles.focus
          return <View key={i} className={clsName}>{v.lyric}</View>
        }) : <View className={`${styles.lyricItem} ${styles.focus}`}>纯音乐，无歌词</View> 
      }
    </View>
  </View>
}