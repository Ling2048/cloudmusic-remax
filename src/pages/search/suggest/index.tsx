import * as React from 'react'
import { View, Text, Image } from 'remax/one'
import search from '../../../images/search.svg'
import { useSelector } from 'react-redux';

import styles from './index.css';

const SearchValue = (props: {inputValue: string}) => {
  const { inputValue } = props

  return <View className={styles.searchValue}>
    <Text>搜索“</Text>
    <View>
      <Text>{inputValue}</Text>
    </View>
    <Text>“</Text>
  </View>
}

const SearchList = () => {
  const searchList = useSelector<Reducers, Actions['data']['getRecommendList']['data']>(reducers => reducers.getRecommendList)

  const list = searchList.map((v, i)=>{
    return <View key={i} className={styles.searchItem}>
      <Image src={search}/>
      <Text>{v.keyword}</Text>
    </View>
  });

  return <View className={styles.searchList}>
    {list}
  </View>
}

export { SearchValue, SearchList }