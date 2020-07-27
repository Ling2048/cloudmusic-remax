import * as React from 'react'
import { View } from 'remax/one'
import { useDispatch } from 'react-redux'

import Recommend from './recommend'
import Default from './default'
import Input from './input'
import SearchResult from './result'

import { getHotSearchList, SearchInputValue, SearchShowType } from '../../store/redux/actions'
import { hotsearchlist } from '../../common/network'

import NavBar from '@/components/NavBar'
import { getCapsule, getCompatibleTop, getCompatibleWindowHeight } from '@/common'

import styles from './index.css';

export default () => {
  const dispatch = useDispatch()

  React.useEffect(()=>{
    hotsearchlist().then((res)=>{
      dispatch(getHotSearchList(res.data))
    });

    return () => {
      dispatch(SearchInputValue(''))
      dispatch(SearchShowType(0))
    }
  }, [])

  const memoStyle = React.useMemo<{
    [key in string]: React.CSSProperties
  }>(() => {
    const capsule = getCapsule()
    const top = getCompatibleTop()
    const height = getCompatibleWindowHeight()
    return {
      pageWrap: {
        paddingTop: 75 + top + capsule.height + 'PX',
        height: height - (71 + top + capsule.height) + 'PX'
      }
    }
  }, [])

  return <View>
    <NavBar name='搜索' hasLeftCapsule={true}/>
    <View className={styles.mainView}>
      <Input/>
      <View className={styles.pageWrap} style={memoStyle.pageWrap}>
        <Default/>
        <Recommend/>
        <SearchResult/>
      </View>
    </View>
  </View>
}