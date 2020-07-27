import * as React from 'react'
import { View, Image, Text } from 'remax/one'

import styles from './item.css'
import { sq } from '@/common/icons'

export default (props: {
  data: {
    id: number;
    songName: string;
    singerName: string;
    albumName: string;
    isSQ: boolean;
    pic: string;
    privilege: Privilege;
  },
  onTap: (id: any) => void
}) => {
  const { data: { id, songName, singerName, albumName, isSQ, pic, privilege }, onTap } = props

  return <View className={styles.simisongItem} onTap={onTap.bind(null, id)}>
    <Image className={styles.simisongImg} src={pic}/>
    <View className={styles.content}>
      <Text className={styles.contentTitle}>
        {songName}
      </Text>
      <View className={styles.contentMain}>
        {
          isSQ ? <Image className={styles.sqTag} src={sq}/> : null
        }
        {singerName + ' - ' + albumName}
      </View>
    </View>
    <View className={styles.contentBtn}/>
  </View>
}