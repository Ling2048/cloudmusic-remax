import * as React from 'react'
import { View, Button, Text } from 'remax/one'

import styles from './index.css'

export default () => {
  return <View className={styles.downloadBar}>
    {/* <Button className={`${styles.downBtn} ${styles.left}`}>
      <Text>分享给微信好友</Text>
    </Button> */}
    <Button className={`${styles.downBtn} ${styles.left}`}>
      <Text>收藏歌曲</Text>
    </Button>
    <Button className={`${styles.downBtn} ${styles.right}`}>
      <Text>打开App</Text>
    </Button>
  </View>
}