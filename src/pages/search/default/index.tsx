import * as React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'remax/one'

import styles from "./index.css"

const icontype: {
  [key: number]: string
} = {
  0: '',
  1: 'hot',
  2: 'new'
}

const Hot = () => {
  const data = useSelector<Reducers, Actions['data']['getHotSearchList']['data']>(state => state.getHotSearchList)

  console.log(data);

  const items = data.map((v, i) => {
    return <View key={i} className={styles.listItem}>
      <View className={`${styles.left} ${i <= 2 ? styles.top : styles.normal}`}>{i+1}</View>
      <View className={styles.middle}>
        <View className={styles.title}>
          <Text className={styles.text}>{v.searchWord}</Text>
          <View/>
        </View>
        <View className={styles.content}>
          {v.content}
        </View>
      </View>
      <View className={styles.right}>{v.score}</View>
    </View>
  });

  return <View className={styles.mHotSearchList}>
    <View className={styles.title}>热搜榜</View>
    <View className='list'>
      {items}
    </View>
  </View>
}

const Index = () => {
  const showType = useSelector<Reducers, number>(reducers => reducers.SearchShowType)

  return <View className={styles.wrap} style={{display: showType === 0 ? 'block' : 'none'}}>
    {/* <View>
      <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <Text>历史记录</Text>
        <Image src={delIcon}/>
      </View>
    </View> */}
    <Hot/>
  </View>
}

export default Index