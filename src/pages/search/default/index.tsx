import * as React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'remax/one'

import styles from "../index.css"

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

  const list = data.map((v, i) => {
    return <View key={i} style={{display: 'flex', alignItems: 'center', padding: '10px 0'}}>
      <Text style={{width: '10%', paddingLeft: '10px'}}>
        {++i}
      </Text>
      <View style={{width: '70%'}}>
        <View>
          <Text style={{paddingRight: '10px'}}>{v.searchWord}</Text>
          <Text>
            {icontype[v.iconType]}
          </Text>
        </View>
        <Text style={{fontSize: '22px'}}>
          {v.content}
        </Text>
      </View>
      <Text style={{fontSize: '20px', width: '20%', textAlign: 'right'}}>
        {v.score}
      </Text>
    </View>
  });

  return <View>
    <View>
      <Text>热搜榜</Text>
    </View>
    <View>
      {list}
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