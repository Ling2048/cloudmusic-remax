import * as React from 'react'
import { View, Image } from 'remax/one'
import LyricsView from '../LyricsView'
import DownloadBar from '../DownloadBar'

import logo from '@/images/logo.svg'
import needle from '@/images/needle.png'
import vinyl from '@/images/vinyl.png'

import styles from './index.css'
import { useSelector } from 'react-redux'

const Vinyl = (props: {picUrl: string}) => {
  const playerStutes = useSelector<Reducers, boolean | undefined>(state => state.player.playerStutes)
  const { picUrl } = props
  
  const circlingOrPause = playerStutes ? styles.circling : styles.pause
  
  return <View className={styles.vinylTurntable}>
    {
      !picUrl ? null : <Image className={`${styles.vinylMask} ${circlingOrPause}`} src={picUrl + '?imageView=1&thumbnail=360y360'}/>
    }
    <Image className={`${styles.vinylBottom} ${circlingOrPause}`} src={vinyl}/>
  </View>
}

export default React.memo(() => {
  const data = useSelector<Reducers, Actions['data']['getSongDetail']['data']>(state => state.getSongDetail)

  return <View className={styles.songMain}>
    <View className={styles.vinylHead}>
      <Image className={styles.logo} src={logo}/>
      <Image className={styles.vinylNeedle} src={needle}/>
    </View>
    <Vinyl picUrl={data[0]?.al.picUrl}/>
    <LyricsView/>
    {/* <DownloadBar/> */}
  </View>
})