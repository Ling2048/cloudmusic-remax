import * as React from 'react'
import { View, Image } from 'remax/one'
import { songdetail } from '@/common/network'

import styles from './index.css'
import { useNativeEffect } from 'remax'

export default (props: RouteProps<{id: number, source: string, sourceid: number}>) => {
  // useNativeEffect(()=>{
  //   songdetail(props.location?.query.id!).then(res => {
  //     console.log(res)
  //   })
  // }, [])

  return <View>
    <View className={styles.newsong}>
      <View className={styles.songBg}>
        <Image className={`${styles.songBgImg} ${styles.current}`}/>
        <Image className={`${styles.songBgImg} ${styles.next}`}/>
      </View>
      <View className={styles.songMask}/>
      <View className='empty'/>
      <View className={styles.scrollView}>
        <View>
          <Image className={styles.playBtn}/>
          <Image className={styles.playBtn}/>
        </View>
        <View className='content-wrap'>

        </View>
      </View>
    </View>
  </View>
}