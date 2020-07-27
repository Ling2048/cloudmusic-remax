import * as React from 'react'
import { View, Text } from 'remax/one'
import Item from './Item'

import styles from './index.css'
import { useSelector } from 'react-redux'

export default React.memo(() => {
  const data = useSelector<Reducers, Actions['data']['getSongComment']['data']>(state => state.getSongComment)
  const items = data.slice(0, 10).map(v => {
    return <Item key={v.commentId} data={v}/>
  })

  return <View className={styles.songComment}>
    <Text className={styles.title}>精彩评论</Text>
    <View className='comment-list'>
      {items}
    </View>
  </View>
})