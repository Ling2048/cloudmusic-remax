import * as React from 'react'
import { View } from 'remax/one'

import styles from './index.css'

const items = [1,2,3,4,5,6,7,8,9,10].map((_, i) => <View key={i} className={styles.listItem}>
              <View className={styles.order}/>
              <View className={styles.content}/>
              <View className={styles.playIcon}/>
            </View>)

const PlayListSkeleton = React.memo(() => {
  return <View className={styles.mSkeletonPlaylist}>
    <View className={styles.empty}/>
    <View className={styles.intro}>
      <View className={styles.introCover}/>
      <View className={styles.introContent}>
        <View className={styles.contentTitle}/>
        <View className={styles.contentAvatar}>
          <View className={styles.avatarImg}/>
          <View className={styles.avatarName}/>
        </View>
        <View className={styles.contentDescription}/>
      </View>
    </View>
    <View className={styles.playAll}>
      <View className={styles.playIcon}/>
      <View className={styles.title}/>
    </View>
    <View className={styles.playlistWrap}>
      {items}
    </View>
  </View>
})

export default PlayListSkeleton