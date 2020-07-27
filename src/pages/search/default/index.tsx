import * as React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, Image } from 'remax/one'

import styles from "./index.css"
import { deleteIcon, upIcon, hotIcon, newIcon } from '@/common/icons'
import { StorageSync } from '@/common/api'
import { useHandleSearchItem } from '@/common/hooks'

const icontTypes: {
  [key: number]: {className: any, icon: string}
} = {
  1: {
    className: styles.hotIcon,
    icon: hotIcon
  },
  2: {
    className: styles.newIcon,
    icon: newIcon
  },
  5: {
    className: styles.upIcon,
    icon: upIcon
  },
}

const Hot = () => {
  const data = useSelector<Reducers, Actions['data']['getHotSearchList']['data']>(state => state.getHotSearchList)

  const items = data.map((v, i) => {
    const iconType = icontTypes[v.iconType]
    const icon = iconType ? <Image className={iconType.className} src={iconType.icon}/> : <View/>
    
    return <View key={i} className={styles.listItem}>
      <View className={`${styles.left} ${i <= 2 ? styles.top : styles.normal}`}>{i+1}</View>
      <View className={styles.middle}>
        <View className={styles.title}>
          <Text className={styles.text}>{v.searchWord}</Text>
          {icon}
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

const History = () => {
  const [ list, setList ] = React.useState<JSX.Element[] | null>(null)

  const history = StorageSync.getStorage('search_history')

  const handleOnTap = useHandleSearchItem()

  React.useEffect(()=>{
    const _list = history ? (JSON.parse(history) as string[]).map((v,i)=>{
      return <View key={i} className={styles.historyTag} onTap={handleOnTap.bind(null, v)}>
        {v}
      </View>
    }) : null
    setList(_list)
  }, [history])

  const handleDelete = React.useCallback(()=>{
    StorageSync.clearStorage()
    setList(null)
  }, [])

  return <View className={styles.searchHistory} style={{display: history && list && list.length > 0 ? 'block' : 'none'}}>
    <View className={styles.title}>
      <Text>历史记录</Text>
      <Image className={styles.deleteIcon} src={deleteIcon} onTap={handleDelete}/>
    </View>
    <View>
      {list}
    </View>
  </View>
}

export default () => {
  const showType = useSelector<Reducers, number>(reducers => reducers.SearchShowType)

  return <View className={styles.wrap} style={{display: showType === 0 ? 'block' : 'none'}}>
    <History/>
    <Hot/>
  </View>
}