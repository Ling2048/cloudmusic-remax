import * as React from 'react'
import { View, Button, Image, Text } from 'remax/one'

import styles from './Item.css'
import { getCount, parseRelativeDate } from '@/common';
import { zan } from '@/common/icons';

export default React.memo((props: {
  data: SongComment.HotComment
}) => {
  const { data } = props

  return <View className={styles.commentItem}>
    <Button className={`btn-plain ${styles.avatar}`}>
      <Image className={styles.avatarImg} src={data.user.avatarUrl + '?imageView=1&thumbnail=40x0'}/>
      {/* <Text className={styles.avaIcon}/> */}
    </Button>
    <View className={styles.commentInfo}>
      <View className={styles.nickName}>
        {data.user.nickname}
      </View>
      <Text className={styles.time}>
        {parseRelativeDate(data.time, false)}
      </Text>
      <View className={styles.content}>
        <View>
          {/* <Image className={styles.cmtEmoji}/> */}
          <Text>
            {data.content}
          </Text>
        </View>
      </View>
      <View className={styles.zan}>
        <Button className={`btn-plain ${styles.zanBtn}`}>
          <Text className={styles.zanCount}>
            {getCount(data.likedCount)}
          </Text>
          <Image className={styles.zanImg} src={zan}/>
        </Button>
      </View>
    </View>
  </View>
})