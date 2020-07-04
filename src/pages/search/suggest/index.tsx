import * as React from 'react'
import { View, Text, Image } from 'remax/one'
import searchIcon from '../../../images/search.svg'
import { useSelector, useDispatch } from 'react-redux';

import styles from './index.css';
import { search } from '@/common/network';
import { getSearchList, SearchShowType, SearchInputValue } from '@/store/redux/actions';

const SearchValue = () => {
  const inputValue = useSelector<Reducers, string>(reducers => reducers.SearchInputValue)

  return <View className={styles.searchValue}>
    <Text>搜索“</Text>
    <View>
      <Text>{inputValue}</Text>
    </View>
    <Text>“</Text>
  </View>
}

const SearchList = () => {
  const dispatch = useDispatch()
  const searchList = useSelector<Reducers, Actions['data']['getRecommendList']['data']>(reducers => reducers.getRecommendList)

  const handleSearchItemClick = React.useCallback((keyword: string) => {
    console.log(keyword)
    search({
      s: keyword,
      limit: 20,
      offset: 0,
      queryCorrect: true
    }).then(res=>{
      console.log(res.result)
      dispatch(SearchInputValue(keyword))
      dispatch(getSearchList(res.result))
      dispatch(SearchShowType(2))
    })
  }, [])

  const list = searchList.map((v, i)=>{
    return <View key={i} className={styles.searchItem} onTap={handleSearchItemClick.bind(null, v.keyword)}>
      <Image src={searchIcon}/>
      <Text>{v.keyword}</Text>
    </View>
  });

  return <View className={styles.searchList}>
    {list}
  </View>
}

const Suggest = () => {
  const showType = useSelector<Reducers, number>(reducers => reducers.SearchShowType)

  return <View className={styles.wrap} style={{display: showType === 1 ? 'block' : 'none'}}>
    <SearchValue/>
    <SearchList/>
  </View>
}

export default Suggest