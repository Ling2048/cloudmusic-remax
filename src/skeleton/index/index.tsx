import React from 'react'
import { View } from 'remax/one'

import styles from './index.css'

export default React.memo(() => {
  return <View className={styles.mSkeletonIndex}>
    <View className={styles.empty}/>
    <View className={styles.searchBox}/>
    {
      [1, 2, 3, 4].map((_, i)=>{
        return <View key={i} className={styles.toplist}>
          <View className={styles.left}/>
          <View className={styles.right}>
            {
              [1, 2, 3].map((_, i)=>{
                return <View key={i} className={styles.song}/>
              })
            }
          </View>
        </View>
      })
    }
  </View>
})