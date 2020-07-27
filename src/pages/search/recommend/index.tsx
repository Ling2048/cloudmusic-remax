import * as React from 'react'
import { View, Image } from 'remax/one'
import searchIcon from '../../../images/search.svg'
import { useSelector } from 'react-redux';

import styles from './index.css';
import { useHandleSearchItem } from '@/common/hooks';

const SearchValue = () => {
  const inputValue = useSelector<Reducers, Actions['common']['SearchInputValue']['data']>(state => state.SearchInputValue)
  // const inputValue = useSelector<Reducers, string>(reducers => reducers.SearchInputValue)

  const handleSearchItemClick = useHandleSearchItem()

  return <View className={`${styles.searchItem} ${styles.title}`} onTap={handleSearchItemClick.bind(null, inputValue)}>
    搜索”{inputValue}“
  </View>
}

const SearchList = () => {
  const searchList = useSelector<Reducers, Actions['data']['getRecommendList']['data']>(reducers => reducers.getRecommendList)

  const handleSearchItemClick = useHandleSearchItem()

  const list = searchList.map((v, i)=>{
    return <View key={i} className={styles.searchItem} onTap={handleSearchItemClick.bind(null, v.keyword)}>
      <Image className={styles.searchIcon} src={searchIcon}/>
      {v.keyword}
      {/* <Text>{v.keyword}</Text> */}
    </View>
  });

  return <View className={styles.searchList}>
    {list}
  </View>
}

const Suggest = () => {
  const showType = useSelector<Reducers, number>(reducers => reducers.SearchShowType)

  return <View className={styles.searchRecommend} style={{display: showType === 1 ? 'block' : 'none'}}>
    <SearchValue/>
    <SearchList/>
  </View>
}

export default Suggest